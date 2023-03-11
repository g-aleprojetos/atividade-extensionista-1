// --- Bibliotecas ---
#include <Arduino.h>
#include <ESP8266WiFi.h>
#include <AsyncMqttClient.h>
#include <ArduinoUniqueID.h>
#include <ArduinoJson.h>
#include <Ticker.h>  

AsyncMqttClient mqttClient;
Ticker mqttReconnectTimer;
Ticker blinker;

WiFiEventHandler wifiConnectHandler;
WiFiEventHandler wifiDisconnectHandler;
Ticker wifiReconnectTimer;

// --- Definições ---
#define led           D0                    // gpio02 led onbord vermelho
#define WIFI_SSID "CONEXAOWEB-G.ALE PROJETOS"
#define WIFI_PASSWORD "a248314b"

#define MQTT_HOST IPAddress(192, 168, 1, 100)
#define MQTT_PORT 1883

// --- Variáveis Globais ---
const char*    mqttUser     = "device";
const char*    mqttPassword = "a248314b";
const char*    topico       = "device/";
String         topicoID;

char counter  = 0x00;   

// --- Protótipo das Funções ---
char* devolverTopicoId();
void connectToWifi();
void connectToMqtt();
void onWifiConnect(const WiFiEventStationModeGotIP& event);
void onWifiDisconnect(const WiFiEventStationModeDisconnected& event);
void onMqttConnect(bool sessionPresent); 
void onMqttDisconnect(AsyncMqttClientDisconnectReason reason);
void onMqttSubscribe(uint16_t packetId, uint8_t qos); 
void onMqttUnsubscribe(uint16_t packetId);
void onMqttMessage(char* topic, char* payload, AsyncMqttClientMessageProperties properties, size_t len, size_t index, size_t total);
void onMqttPublish(uint16_t packetId);


// --- temporizador ---
void changeState()
{
  digitalWrite(led, HIGH); //Inverte o estado da saída de teste
  StaticJsonDocument<256> doc;

  JsonArray data = doc.createNestedArray("data");
  data.add("cde80196-a289-11ed-a8fc-0242ac120002");
  data.add("17b79db2-a27c-11ed-a8fc-0242ac120002");
  data.add(random(0.00,50.00)); //anemometro
  data.add("oeste");//direção do vento
  data.add(00.00);//pluviometro
  data.add(random(15.0, 25.0));//temperatura
  data.add(random(25.0, 80.0));//umidade
  //data.add(000);//nivel água
  data.add(random(8000, 9000));//pressão
 
  char out[128];
  int b =serializeJson(doc, out);
  Serial.print("bytes = ");
  Serial.println(b,DEC);

  uint16_t packetIdPub1 = mqttClient.publish(devolverTopicoId(), 1, true, out);
  Serial.printf("Publishing on topic %s at QoS 1, packetId: %i", devolverTopicoId(), packetIdPub1);
  
  digitalWrite(led, LOW);
}

void setup() {
  Serial.begin(9600);                                       
  pinMode(led, OUTPUT);
  digitalWrite(led, HIGH); 
  
  wifiConnectHandler = WiFi.onStationModeGotIP(onWifiConnect);
  wifiDisconnectHandler = WiFi.onStationModeDisconnected(onWifiDisconnect);

  mqttClient.onConnect(onMqttConnect);
  mqttClient.onDisconnect(onMqttDisconnect);
  mqttClient.onSubscribe(onMqttSubscribe);
  mqttClient.onUnsubscribe(onMqttUnsubscribe);
  mqttClient.onMessage(onMqttMessage);
  mqttClient.onPublish(onMqttPublish);
  mqttClient.setServer(MQTT_HOST, MQTT_PORT);
  mqttClient.setCredentials(mqttUser, mqttPassword);

  connectToWifi();
  digitalWrite(led, LOW); 
  blinker.attach(5.0, changeState);  
}

void loop() {
  // put your main code here, to run repeatedly:
}

char* devolverTopicoId(){
  char UniqueIDString[(UniqueIDsize * 2) + 1];
  byte index = 0;
  for (size_t i = 0; i < UniqueIDsize; i++)
  {
    UniqueIDString[index++] = "0123456789ABCDEF"[UniqueID[i] >> 4];
    UniqueIDString[index++] = "0123456789ABCDEF"[UniqueID[i]  & 0x0F];
  }
  UniqueIDString[index++] = 0; 

   topicoID = topico + String(UniqueIDString); 
 
   return const_cast<char*>(topicoID.c_str());
}

void connectToWifi() {
  Serial.print("Connecting to WiFi...");
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  while (WiFi.status() != WL_CONNECTED) {
   delay(500);
   Serial.print(".");
  }
}

void connectToMqtt() {
  Serial.print("Servidor configurado: ");
  Serial.print(MQTT_HOST);
  Serial.print(" : ");
  Serial.println(MQTT_PORT);
  Serial.println("Connecting to MQTT...");
  mqttClient.connect();
}

void onWifiConnect(const WiFiEventStationModeGotIP& event) {
  Serial.println("Connected to Wifi");
  Serial.print("Endereco IP: ");
  Serial.println(WiFi.localIP());
  connectToMqtt();
}

void onWifiDisconnect(const WiFiEventStationModeDisconnected& event) {
  Serial.println("Disconnected from Wi-Fi.");
  mqttReconnectTimer.detach(); // ensure we don't reconnect to MQTT while reconnecting to Wi-Fi
  wifiReconnectTimer.once(2, connectToWifi);
}

void onMqttConnect(bool sessionPresent) {
  Serial.println("Connected to MQTT.");
  Serial.print("Session present: ");
  Serial.println(sessionPresent);

  uint16_t packetIdPub2 = mqttClient.publish(devolverTopicoId(), 1, true, "MQTT Inicializando");
  Serial.print("Publishing at QoS 2, packetId: ");
  Serial.println(packetIdPub2);
}

void onMqttDisconnect(AsyncMqttClientDisconnectReason reason) {
  Serial.println("Disconnected from MQTT.");

  if (WiFi.isConnected()) {
    mqttReconnectTimer.once(2, connectToMqtt);
  }
}

void onMqttSubscribe(uint16_t packetId, uint8_t qos) {
  Serial.println("Subscribe acknowledged.");
  Serial.print("  packetId: ");
  Serial.println(packetId);
  Serial.print("  qos: ");
  Serial.println(qos);
}

void onMqttUnsubscribe(uint16_t packetId) {
  Serial.println("Unsubscribe acknowledged.");
  Serial.print("  packetId: ");
  Serial.println(packetId);
}

void onMqttMessage(char* topic, char* payload, AsyncMqttClientMessageProperties properties, size_t len, size_t index, size_t total) {
  Serial.println("Publish received.");
  Serial.print("  topic: ");
  Serial.println(topic);
  Serial.print("  qos: ");
  Serial.println(properties.qos);
  Serial.print("  dup: ");
  Serial.println(properties.dup);
  Serial.print("  retain: ");
  Serial.println(properties.retain);
  Serial.print("  len: ");
  Serial.println(len);
  Serial.print("  index: ");
  Serial.println(index);
  Serial.print("  total: ");
  Serial.println(total);
}

void onMqttPublish(uint16_t packetId) {
  Serial.println("Publish acknowledged.");
  Serial.print("  packetId: ");
  Serial.println(packetId);
}
