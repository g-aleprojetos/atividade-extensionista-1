import * as React from 'react';
import FlatList from 'flatlist-react';
import {EditIcon, DeleteIcon} from '@chakra-ui/icons';
import {TextoMedium, TextoSmall} from 'components/texto';

import * as S from './CadastroUsuario.styles';
import colors from 'resources/colors';
import {Botao} from 'components/botao';
import {useCallback, useEffect, useState} from 'react';
import {Popup} from 'components/popup/popupConfirma';
import {CadastraAtualizaUsuario} from 'components/cadastrarUsuario';
import {IUsuario} from 'resources/interfaces';
import {IUsuarioRequest} from 'resources/interfaces/request/usuarioRequest';
import {useUsuario} from 'hooks/api/useUsuarios';

export const CadastroUsuario = () => {
  const usuarioStorage = localStorage.getItem('user');
  const {obterUsuarios, salvarUsuario, deletaUsuario} = useUsuario();
  const [openCadastraAtualizaUsuario, setOpenCadastraAtualizaUsuario] = useState<boolean>(false);
  const [openDeletarUsuario, setOpenDeletarUsuario] = useState<boolean>(false);
  const [openRespostaModal, setOpenRespostaModal] = useState<boolean>(false);
  const [atualizaCadastro, setAtualizaCadastro] = useState<boolean>(false);
  const [deletarUsuario, setDeletarUsuario] = useState<IUsuario>();
  const [cadastrarUsuario, setCadastrarUsuario] = useState<IUsuario>();
  const [listaUsuarios, setListaUsuarios] = useState<IUsuario[]>([]);
  const [mensagemServidor, setMensagemServidor] = useState<string>();

  const fetchData = useCallback(async () => {
    const response = await obterUsuarios();
    if (response?.error === false) {
      if (response.users) {
        const respostaOrdenada = response.users.sort((atual, proximo) =>
          atual.nome.localeCompare(proximo.nome),
        );
        setListaUsuarios(respostaOrdenada);
      }
    } else {
      setListaUsuarios([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const enviarDados = async () => {
    if (cadastrarUsuario && usuarioStorage) {
      const user = JSON.parse(usuarioStorage);

      if (cadastrarUsuario.senha === cadastrarUsuario.confirmaSenha) {
        const atualizaOuCria = atualizaCadastro
          ? {id: cadastrarUsuario.id, atualizadoPor: user.nome}
          : {criadoPor: user.nome};
        const usuario: IUsuarioRequest = {...cadastrarUsuario, ...atualizaOuCria};
        const response = await salvarUsuario(usuario, atualizaCadastro);
        if (response?.error === false) {
          setMensagemServidor(`${response?.message}`);
          setOpenCadastraAtualizaUsuario(prev => !prev);
          setOpenRespostaModal(prev => !prev);
          setCadastrarUsuario(undefined);
        } else {
          setMensagemServidor(`${response?.message}`);
          setOpenRespostaModal(prev => !prev);
        }
      } else {
        setMensagemServidor('As senhas não confere!');
        setOpenRespostaModal(prev => !prev);
      }
    }
  };

  const handleTelaCadastroUsuario = () => {
    setCadastrarUsuario(undefined);
    setAtualizaCadastro(false);
    setOpenCadastraAtualizaUsuario(prev => !prev);
  };

  const handleTelaAtualizarUsuario = (item: IUsuario) => {
    setCadastrarUsuario(item);
    setAtualizaCadastro(true);
    setOpenCadastraAtualizaUsuario(prev => !prev);
  };

  const handleDeletarUsuario = (item: IUsuario) => {
    setDeletarUsuario(item);
    setOpenDeletarUsuario(prev => !prev);
  };

  const handleCancelarDeletarUsuario = () => {
    setDeletarUsuario(undefined);
    setOpenDeletarUsuario(prev => !prev);
  };

  const handleTelaConfirmarDeletarUsuario = async () => {
    if (deletarUsuario && usuarioStorage) {
      const user = JSON.parse(usuarioStorage);
      const response = await deletaUsuario(deletarUsuario.id, user.nome);
      if (response?.error === false) {
        setMensagemServidor(`${response?.message}`);
        setOpenRespostaModal(prev => !prev);
        setDeletarUsuario(undefined);
      } else {
        setMensagemServidor(`${response?.message}`);
        setOpenRespostaModal(prev => !prev);
      }
    }
    setDeletarUsuario(undefined);
    setOpenDeletarUsuario(prev => !prev);
  };

  const handleOK = () => {
    setOpenRespostaModal(prev => !prev);
    fetchData();
  };

  const renderItem = (item: IUsuario) => {
    return <S.ContainerItem key={item.id}>{handleLinha(item)}</S.ContainerItem>;
  };

  const handleLinha = (item: IUsuario) => {
    return (
      <>
        <S.Item tamanhoDiv={350}>
          <TextoSmall cursor="default" cor={colors.black}>
            {item.nome}
          </TextoSmall>
        </S.Item>
        <S.Item tamanhoDiv={300}>
          <TextoSmall cursor="default" cor={colors.black}>
            {item.email}
          </TextoSmall>
        </S.Item>
        <S.Item tamanhoDiv={250}>
          <TextoSmall cursor="default" cor={colors.black}>
            {item.cargo}
          </TextoSmall>
        </S.Item>
        <S.Item tamanhoDiv={250}>
          <TextoSmall cursor="default" cor={colors.black}>
            {item.role}
          </TextoSmall>
        </S.Item>
        <S.Item tamanhoDiv={50}>
          <EditIcon
            fontSize={20}
            cursor="pointer"
            onClick={() => handleTelaAtualizarUsuario(item)}
          />
        </S.Item>
        <S.Item>
          <DeleteIcon
            fontSize={20}
            cursor="pointer"
            onClick={() => {
              handleDeletarUsuario(item);
            }}
          />
        </S.Item>
      </>
    );
  };

  return (
    <>
      <S.Container data-testid={'teste_cadastro_usuario'}>
        <S.ContainerCadastarUsuario>
          <Botao tipo="ok" handleOnClick={handleTelaCadastroUsuario}>
            <TextoSmall cursor="pointer" cor={colors.white}>
              Cadastrar Usuário
            </TextoSmall>
          </Botao>
        </S.ContainerCadastarUsuario>
        <S.ContainerListaUsuarios>
          <S.ContainerCabecalhoLista>
            <S.ContainerItem>
              <S.Item tamanhoDiv={350}>
                <TextoMedium cursor="default" peso="bold" cor={colors.black}>
                  Nome
                </TextoMedium>
              </S.Item>
              <S.Item tamanhoDiv={300}>
                <TextoMedium cursor="default" peso="bold" cor={colors.black}>
                  E-mail
                </TextoMedium>
              </S.Item>
              <S.Item tamanhoDiv={250}>
                <TextoMedium cursor="default" peso="bold" cor={colors.black}>
                  Cargo
                </TextoMedium>
              </S.Item>
              <S.Item>
                <TextoMedium cursor="default" peso="bold" cor={colors.black}>
                  Tipo de acesso
                </TextoMedium>
              </S.Item>
            </S.ContainerItem>
          </S.ContainerCabecalhoLista>
          <FlatList list={listaUsuarios} renderItem={renderItem} />
        </S.ContainerListaUsuarios>
      </S.Container>
      {openCadastraAtualizaUsuario && (
        <Popup
          textTitle="Cadastrar Usuário"
          onClickClose={handleTelaCadastroUsuario}
          onConfirma={enviarDados}>
          <CadastraAtualizaUsuario
            atualizaCadastro={atualizaCadastro}
            usuario={cadastrarUsuario}
            cadastrarUsuario={item => setCadastrarUsuario(item)}
          />
        </Popup>
      )}
      {openDeletarUsuario && (
        <Popup
          textTitle="Deseja deletar usuário"
          textMessage={deletarUsuario?.nome}
          onClickClose={handleCancelarDeletarUsuario}
          onConfirma={handleTelaConfirmarDeletarUsuario}
        />
      )}
      {openRespostaModal && (
        <Popup textTitle={`${mensagemServidor}`} botaoOK={true} onOk={handleOK}></Popup>
      )}
    </>
  );
};
