import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Botao} from 'components/botao';
import {Input} from 'components/input';
import {TextoSmall} from 'components/texto';
import colors from 'resources/colors';

import * as S from './Login.styles';
import {useLogin} from 'hooks/api/useLogin';
import {ILoginRequest, IUsuario, Roles} from 'resources/interfaces';
import {useNavigate} from 'react-router-dom';
import rotas from 'resources/rotas';
import {useAutenticado} from 'helpers';
import {Popup} from 'components/popup/popupConfirma';
import {CadastraAtualizaUsuario} from 'components/cadastrarUsuario';
import {useUsuario} from 'hooks/api/useUsuarios';
import {IUsuarioRequest} from 'resources/interfaces/request/usuarioRequest';

const usuarioInicial: IUsuario = {
  id: '',
  nome: '',
  email: '',
  senha: '',
  confirmaSenha: '',
  cargo: '',
  role: Roles.USER,
};

export const Login = () => {
  const navigate = useNavigate();
  const autenticado = useAutenticado();
  const {loginValidacao} = useLogin();
  const {salvarUsuario} = useUsuario();

  const erroRef = useRef<HTMLInputElement | null>(null);
  const loginRef = useRef<HTMLInputElement | null>(null);

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [openCadastroUsuario, setOpenCadastroUsuario] = useState<boolean>(false);
  const [openRespostaCadastro, setOpenRespostaCadastro] = useState<boolean>(false);
  const [mensagemCadastroServidor, setMensagemCadastroServidor] = useState<string>();
  const [cadastrarUsuario, setCadastrarUsuario] = useState<IUsuario>({...usuarioInicial});

  const NavegarDashboard = useCallback(() => {
    if (autenticado) {
      navigate(rotas.Dashboard);
    }
  }, [autenticado, navigate]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const login: ILoginRequest = {email: user, senha: pwd};
    const response = await loginValidacao(login);
    if (response?.erro === false) {
      setUser('');
      setPwd('');
      setErrMsg('');
      NavegarDashboard();
    } else {
      setErrMsg(response?.mensagem ? response?.mensagem : '');
      erroRef.current?.focus();
    }
  };

  const enviarDados = async () => {
    if (cadastrarUsuario.senha === cadastrarUsuario.confirmaSenha) {
      const usuario: IUsuarioRequest = {...cadastrarUsuario, criadoPor: 'Usuário'};
      const response = await salvarUsuario(usuario);
      if (response?.error === false) {
        setMensagemCadastroServidor(`${response?.message}`);
        setOpenCadastroUsuario(prev => !prev);
        setOpenRespostaCadastro(prev => !prev);
        setCadastrarUsuario({...usuarioInicial});
      } else {
        setMensagemCadastroServidor(`${response?.message}`);
        setOpenRespostaCadastro(prev => !prev);
      }
    } else {
      setMensagemCadastroServidor('As senhas não confere!');
      setOpenRespostaCadastro(prev => !prev);
    }
  };

  const handleFecharTelaCadastroUsuario = () => {
    setOpenCadastroUsuario(prev => !prev);
    setCadastrarUsuario({...usuarioInicial});
  };

  const handleTelaCadastroUsuario = () => {
    setOpenCadastroUsuario(prev => !prev);
  };

  const handleOK = () => {
    setOpenRespostaCadastro(prev => !prev);
  };

  // useEffect(() => {
  //   loginRef.current?.focus();
  // }, []);

  // useEffect(() => {
  //   setErrMsg('');
  // }, [user, pwd]);

  return (
    <>
      <S.Container data-testid={'teste_login'}>
        <S.Secao>
          {Boolean(errMsg) && <S.MsgErro ref={erroRef}>{errMsg}</S.MsgErro>}
          <S.containerLogo>
            <S.Logo />
          </S.containerLogo>

          <S.Formulario onSubmit={handleSubmit}>
            <Input
              id="login"
              tipo="text"
              label="Email"
              corTexto={colors.black}
              autoComplete="off"
              handleRef={loginRef}
              handleValue={user}
              handleOnChange={(_item: string) => setUser(_item)}
              required
            />

            <Input
              id="password"
              tipo="password"
              label="Senha"
              corTexto={colors.black}
              handleValue={pwd}
              handleOnChange={(_item: string) => setPwd(_item)}
              required
            />
            <Botao tipo="submit">
              <TextoSmall cursor="pointer" cor={colors.black}>
                Logar
              </TextoSmall>
            </Botao>
          </S.Formulario>
          <S.ContainerCadastrarUsuario onClick={handleTelaCadastroUsuario}>
            <TextoSmall cursor="pointer" cor={colors.black}>
              Cadastrar
            </TextoSmall>
          </S.ContainerCadastrarUsuario>
        </S.Secao>
      </S.Container>
      {openCadastroUsuario && (
        <Popup
          textTitle="Cadastrar Usuário"
          onClickClose={handleFecharTelaCadastroUsuario}
          onConfirma={enviarDados}>
          <CadastraAtualizaUsuario
            usuario={cadastrarUsuario}
            cadastrarUsuario={item => setCadastrarUsuario(item)}
            telaLogin={true}
          />
        </Popup>
      )}
      {openRespostaCadastro && (
        <Popup textTitle={`${mensagemCadastroServidor}`} botaoOK={true} onOk={handleOK}></Popup>
      )}
    </>
  );
};
