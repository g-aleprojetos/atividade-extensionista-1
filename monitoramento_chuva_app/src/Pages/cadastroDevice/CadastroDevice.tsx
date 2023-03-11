import * as React from 'react';
import FlatList from 'flatlist-react';
import {DeleteIcon, InfoIcon, CheckIcon, CloseIcon} from '@chakra-ui/icons';
import {TextoMedium, TextoSmall} from 'components/texto';

import * as S from './CadastroDevice.styles';
import colors from 'resources/colors';
import {Popup} from 'components/popup/popupConfirma';
import {useCallback, useEffect, useState} from 'react';
import {InformacaoDevice} from 'components/informacaoDevice';
import {IDevice, IEndereco} from 'resources/interfaces';
import {useDevice} from 'hooks/api/useDevice';

//data - 2022-12-06T12:29:00.4857095z
//data.toLocaleDateString('pt-br,{day:"2-digit", month:"2-digit", year: "2-digit"})

export const CadastroDevice = () => {
  const usuarioStorage = localStorage.getItem('user');
  const {obtemDevice, atualizaDevice, deletaDevice} = useDevice();
  const [openInformacaoDevice, setOpenInformacaoDevice] = useState<boolean>(false);
  const [openRespostaModal, setOpenRespostaModal] = useState<boolean>(false);
  const [openDeletarUsuario, setOpenDeletarDevice] = useState<boolean>(false);
  const [atualizar, setAtualizar] = useState<boolean>(false);
  const [deviceAtualiza, setDeviceAtualiza] = useState<IDevice>();
  const [enderecoAtualiza, setEnderecoAtualiza] = useState<IEndereco>();
  const [deviceDados, setDeviceDados] = useState<IDevice[]>([]);
  const [deletarDevice, setDeletarDevice] = useState<IDevice>();
  const [leituraSensores, setLeituraSensores] = useState(false);
  const [leituraAgua, setLeituraAgua] = useState(false);
  const [mensagemServidor, setMensagemServidor] = useState<string>();

  const fetchData = useCallback(async () => {
    const response = await obtemDevice();
    if (response?.error === false) {
      if (response.devices) {
        const respostaOrdenada = response.devices.sort((a, b) =>
          (a.atualizadoEm ?? a.criadoEm) < (b.atualizadoEm ?? b.criadoEm) ? 1 : -1,
        );

        setDeviceDados(respostaOrdenada);
      }
    } else {
      console.log(response);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const enviarDados = async () => {
    if (deviceAtualiza && usuarioStorage) {
      const user = JSON.parse(usuarioStorage);

      const device: IDevice = {
        ...deviceAtualiza,
        leitura_sensores: leituraSensores,
        nivel_agua: leituraAgua,
        atualizadoPor: user.nome,
        endereco_Id: enderecoAtualiza?.id,
        endereco: enderecoAtualiza,
      };
      const response = await atualizaDevice(device);
      if (response?.error === false) {
        setMensagemServidor(`${response?.message}`);
        setOpenInformacaoDevice(prev => !prev);
        setOpenRespostaModal(prev => !prev);
        setDeviceAtualiza(undefined);
      } else {
        setMensagemServidor(`${response?.message}`);
        setOpenRespostaModal(prev => !prev);
      }
    }
  };

  const handleOpenModal = () => {
    setOpenInformacaoDevice(prev => !prev);
  };

  const handleAtualizar = () => {
    if (!atualizar) {
      setAtualizar(true);
      return;
    }
    enviarDados();
  };

  const handleInformacaoDevice = (item: IDevice) => {
    setDeviceAtualiza(item);
    setEnderecoAtualiza(item.endereco);
    setAtualizar(false);
    handleOpenModal();
  };

  const handleOK = () => {
    setOpenRespostaModal(prev => !prev);
    fetchData();
  };

  const handleTelaCancelarDeletarDevice = () => {
    setDeletarDevice(undefined);
    setOpenDeletarDevice(prev => !prev);
  };

  const handleTelaConfirmarDeletarDevice = async () => {
    setOpenDeletarDevice(prev => !prev);
    if (deletarDevice && usuarioStorage) {
      const user = JSON.parse(usuarioStorage);
      const response = await deletaDevice(deletarDevice.id, user.nome);
      if (response?.error === false) {
        setMensagemServidor(`${response?.message}`);
        setOpenRespostaModal(prev => !prev);
      } else {
        setOpenDeletarDevice(prev => !prev);
        setMensagemServidor(`${response?.message}`);
        setOpenRespostaModal(prev => !prev);
      }
    }
  };

  const handleDeletarDevice = (item: IDevice) => {
    setDeletarDevice(item);
    setOpenDeletarDevice(prev => !prev);
  };

  const renderItem = (item: IDevice) => {
    return <S.ContainerItem key={item.id}>{linhaDevice(item)}</S.ContainerItem>;
  };

  const linhaDevice = (item: IDevice) => {
    return (
      <>
        <S.Item tamanhoDiv={350}>
          <TextoSmall cor={colors.black}>{item.nome}</TextoSmall>
        </S.Item>
        <S.Item alinhaDiv="center" tamanhoDiv={200}>
          <TextoSmall cor={colors.black}>{item.uniqueID}</TextoSmall>
        </S.Item>
        <S.Item alinhaDiv="center" tamanhoDiv={200}>
          <TextoSmall cor={colors.black}>
            {item.leitura_sensores ? <CheckIcon fontSize={18} /> : <CloseIcon fontSize={18} />}
          </TextoSmall>
        </S.Item>
        <S.Item alinhaDiv="center" tamanhoDiv={200}>
          <TextoSmall cor={colors.black}>
            {item.nivel_agua ? <CheckIcon fontSize={18} /> : <CloseIcon fontSize={18} />}
          </TextoSmall>
        </S.Item>
        <S.Item alinhaDiv="center" tamanhoDiv={200}>
          <InfoIcon fontSize={20} cursor="pointer" onClick={() => handleInformacaoDevice(item)} />
        </S.Item>
        <S.Item alinhaDiv="center" tamanhoDiv={130}>
          <DeleteIcon
            fontSize={20}
            cursor="pointer"
            onClick={() => {
              handleDeletarDevice(item);
            }}
          />
        </S.Item>
      </>
    );
  };

  return (
    <>
      <S.Container data-testid={'teste_cadastro_device'}>
        <S.ContainerListaDevices>
          <S.ContainerCabecalhoLista>
            <S.ContainerItem>
              <S.Item tamanhoDiv={350}>
                <TextoMedium peso="bold" cor={colors.black}>
                  Nome
                </TextoMedium>
              </S.Item>
              <S.Item alinhaDiv="center" tamanhoDiv={200}>
                <TextoMedium peso="bold" cor={colors.black}>
                  UniqueID
                </TextoMedium>
              </S.Item>
              <S.Item alinhaDiv="center" tamanhoDiv={200}>
                <TextoMedium peso="bold" cor={colors.black}>
                  Leitura Sensores
                </TextoMedium>
              </S.Item>
              <S.Item alinhaDiv="center" tamanhoDiv={200}>
                <TextoMedium peso="bold" cor={colors.black}>
                  Leitura Água
                </TextoMedium>
              </S.Item>
              <S.Item alinhaDiv="center" tamanhoDiv={200}>
                <TextoMedium peso="bold" cor={colors.black}>
                  Dados Completos
                </TextoMedium>
              </S.Item>
            </S.ContainerItem>
          </S.ContainerCabecalhoLista>
          <FlatList list={deviceDados} renderItem={renderItem} />
        </S.ContainerListaDevices>
      </S.Container>
      {openInformacaoDevice && (
        <Popup
          textTitle="Dados do Device"
          textButtonConfirmar={atualizar ? 'Confirmar' : 'Atualizar'}
          onClickClose={handleOpenModal}
          onConfirma={handleAtualizar}>
          <InformacaoDevice
            device={deviceAtualiza}
            endereco={enderecoAtualiza}
            atualizar={atualizar}
            leituraAgua={leituraAgua}
            leituraSensores={leituraSensores}
            setLeituraAgua={item => setLeituraAgua(item)}
            setLeituraSensores={item => setLeituraSensores(item)}
            cadastrarEndereco={item => setEnderecoAtualiza(item)}
            cadastrarDevice={item => setDeviceAtualiza(item)}
          />
        </Popup>
      )}
      {openDeletarUsuario && (
        <Popup
          textTitle="Deseja deletar o Device"
          textMessage={`Nome: ${
            deletarDevice?.nome ? deletarDevice?.nome : 'nome não cadastrado'
          } -  UniqueID: ${deletarDevice?.uniqueID}`}
          onClickClose={handleTelaCancelarDeletarDevice}
          onConfirma={handleTelaConfirmarDeletarDevice}
        />
      )}
      {openRespostaModal && (
        <Popup textTitle={`${mensagemServidor}`} botaoOK={true} onOk={handleOK}></Popup>
      )}
    </>
  );
};
