# atividade-extensionista-1

setup server raspbery pi

* instalar raspbian
* atualizar
  - sudo apt-get update
  - sudo apt-get upgrade

* fixar ip
  - ip r | grep default
default via 192.168.1.1.dev wlan0 proto dhcp src 192.168.1.10 metric
  - sudo nano /etc/dhcpcd.conf

modificas as linha

interface sua_interface
static ip_address=seu_ip_fixo/24
static routers=ip_do_seu_router
static domain_name_servers=ip_do_seu_router 

 -sudo reboot -n now

******************************************************************************************************************

instalar banco de dados e phpmyadmin
 instalar apache2
 - sudo apt install apache2   

 instalar php
 - sudo apt install php7.4 libapache2-mod-php7.4 php7.4-mbstring php7.4-mysql php7.4-curl php7.4-gd php7.4-zip -y
 - sudo service apache2 restart
 teste
 - sudo nano /var/www/html/test.php

 montagem de arquivo

 ?php
 echo "Hello";
 echo date("Y-m-d H:i:s");
 ?>

 salvar ctrl + o
        enter
        ctrl + x

 instalar mariadb
 - sudo apt install mariadb-server php-mysql -y

acessar banco
 - sudo mysql -u root

instalação phpmyadmin
 - sudo apt install phpmyadmin -y
 - sudo phpenmod mysqli
 - sudo service apache2 restart
 - sudo ln -s /usr/share/phpmyadmin /var/www/html/phpmyadmin
 obs: o index.php do phpmysql esta vindo sem a tag de fechamento- só pode ser modificado com sudo 

******************************************************************************************************************

instalação do docker

 - curl -sSL https://get.docker.com | sh
 
Depois da instalação, é necessário que adicionemos o usuário pi ao grupo docker, para que consigamos executar imagens sem sudo.

 - sudo usermod -aG docker <nome_do_usuario> //exemplo sudo usermod -aG docker pi

E agora habilitamos o Docker para executar sempre que o sistema for iniciado

 - sudo systemctl enable docker

Reinicie o sistema para que as alterações tenham efeito

 - sudo reboot -h now

Verificar se deu tudo certo

 - docker ps
************************************************************************************
* - docker container list <parâmetros>                                             *
*                                                                                  *
* Os parâmetros mais utilizados na execução do container são:                      *
*                                                                                  *
* Parâmetro   	             Explicação                                            *         
*    -a	     Lista todos os containers, inclusive os desligados                    *
*    -l	     Lista os últimos containers, inclusive os desligados                  *
*    -n	     Lista os últimos N containers, inclusive os desligados                *
*    -q	     Lista apenas os ids dos containers, ótimo para utilização em scripts  *
************************************************************************************
******************************************************************************************************************

instalação do Node red

 - docker run --restart always -it -p 1880:1880 -v node_red_data:/data --name nodered nodered/node-red:latest


Para reconectar ao terminal (para ver o registro), execute:

 - docker attach nodered

Se você precisar reiniciar o contêiner (por exemplo, após uma reinicialização ou reinicialização do daemon do Docker):

 - docker start nodered

e pará-lo novamente quando necessário:

 - docker stop nodered

******************************************************************************************************************

instalação do git

verificar se o git já esta insttalado

 - git --version

se caso não estiver

 - sudo apt install git

depois verifica a versão

configurando o git

 - git config --global user.name "Your Name"
 - git config --global user.email "youremail@yourdomain.com"

confirmar se configurou as informações

 - git config --list

******************************************************************************************************************

instalar broker mosquitto

 - sudo apt-get install -y mosquitto mosquitto-clients

configurar broker

 - sudo nano /etc/mosquitto/mosquitto.conf

Dentro do mosquitto.conf você deve localizar a seguinte linha e apagar

include dir /etc/mosquitto/conf.d

Após isso, você deve escrever os seguintes comandos:

allow_anonymous false
password_file /etc/mosquitto/pwfile
listener 1883

Para criar um arquivo com usuário e senha no Broker basta escrever o seguinte comando:

sudo mosquitto_passwd -c /etc/mosquitto/pwfile <nome_usuario>

pede para adicionar senha


******************************************************************************************************************
acessos:

phpmyadmin: http://192.168.1.100/phpmyadmin/
node red: http://192.168.1.100:1880/   obs: tem que instartar o cantainer "docker start nodered"

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

sensores

1- anemometro - digital
2- direção vento - analógico
3- pluviometro - digital
4- temperatura - analógico
5- umidade - analógico
6- sensor pressão - i2c
7- detector chuva - digital

3 digitais
3 analógio
1 i2c

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

criação do banco de dados

CREATE DATABASE monitoramento_chuva;

usar banco de dados

USE monitoramento_chuva;

criando tabelas

CREATE TABLE Devices(
	idDevice char(36) NOT NULL,
	uniqueID varchar(50) NOT NULL,
        leitura_sensores BIT NOT NULL,
	nivel_agua BIT NOT NULL,
	CONSTRAINT PK_Device PRIMARY KEY (IdDevice)
);

CREATE TABLE Endereco(
	idEndereco char(36) NOT NULL,
	idDevice char(36),
	latitude varchar(50) NOT NULL,
	longitude varchar(50) NOT NULL,
        localizacao varchar(200),
	endereco varchar(200) NOT NULL,
	bairro varchar(50) NOT NULL,
	cidade varchar(50) NOT NULL,
	uf char(2) NOT NULL,
	CONSTRAINT PK_Enderecos PRIMARY KEY (idEndereco),
	CONSTRAINT FK_idDevice_endereco  FOREIGN KEY (IdDevice) REFERENCES Devices (idDevice)
);

CREATE TABLE Leituras(
	idLeitura char(36) NOT NULL,
	idDevice char(36),
	anemometro float(4),
        direcao_vento varchar(10),
	pluviometro float(4),
	temperatura float(4),
	umidade float(4),
	nivel_agua tinyint,
	pressao smallint,
        data_leitura datetime,
	CONSTRAINT PK_Leitura PRIMARY KEY (idLeitura),
	CONSTRAINT FK_idDevice_leitura  FOREIGN KEY (IdDevice) REFERENCES Devices (idDevice)
);


INSERT INTO Devaices()
value();



INSERT INTO Devices(idDevice, uniqueID, leitura_sensores, nivel_agua)
value('17b79db2-a27c-11ed-a8fc-0242ac120002','0069209D' , 1, 0);

INSERT INTO Endereco(idEndereco, idDevice, latitude, longitude, localizacao, endereco, bairro, cidade, uf)
value('a3e0b3b2-a27e-11ed-a8fc-0242ac120002', '17b79db2-a27c-11ed-a8fc-0242ac120002', -23.541112, -46.274059, 'Em Frente da Companhia Suzano', 'Rua Prudente de Morais, 4006', 'Vila Santana', 'Suzano','SP');



