import React, {useRef} from 'react';
import * as S from './CadastraAtualizaUsuario.styles';
import {Input} from 'components/input';
import sizes from 'resources/sizes';
import {Dropdown, Item} from 'components/dropdown';
import {ITipoAcesso, IUsuario, Roles} from 'resources/interfaces';
import colors from 'resources/colors';

export type Props = S.PropsCadastrarUsuario & {
  telaLogin?: boolean;
  usuario?: IUsuario;
  atualizaCadastro?: boolean;
  cadastrarUsuario: (_item: IUsuario) => void;
};

const tipoAcesso: ITipoAcesso[] = [
  {
    id: 'id1',
    tipo: Roles.ADMIN,
  },
  {
    id: 'id2',
    tipo: Roles.USER,
  },
];

export const CadastraAtualizaUsuario = (props: Props) => {
  const {telaLogin = false, usuario, atualizaCadastro = false, cadastrarUsuario} = props;

  const nomeRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const senhaRef = useRef<HTMLInputElement | null>(null);
  const confSenhaRef = useRef<HTMLInputElement | null>(null);
  const cargoRef = useRef<HTMLInputElement | null>(null);

  const roles = tipoAcesso.map(item => ({value: item.id, label: item.tipo.toString()}));
  const roleDefault = roles.map(function (e) {
    return e.label;
  });

  const role = (item: Item) => {
    const roleEscolhido = tipoAcesso.filter(i => i.id === item.value);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    cadastrarUsuario({...usuario!, role: roleEscolhido[0].tipo});
  };

  return (
    <S.Container>
      <S.Formulario>
        <S.ContainerLinha>
          <Input
            id="idNome"
            tipo="text"
            label="Nome"
            autoComplete="off"
            width={`${sizes.px377}`}
            height={`${sizes.px21}`}
            margin={`${sizes.px8} ${sizes.px13}`}
            handleRef={nomeRef}
            handleValue={usuario?.nome}
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            handleOnChange={(_item: string) => cadastrarUsuario({...usuario!, nome: _item})}
            required
          />
          <Input
            id="idEmail"
            tipo="email"
            label="E-mail"
            autoComplete="off"
            width={`${sizes.px377}`}
            height={`${sizes.px21}`}
            margin={`${sizes.px8} ${sizes.px13}`}
            backgroundColor={atualizaCadastro ? colors.lightgray : colors.white}
            handleRef={emailRef}
            handleValue={usuario?.email}
            disabled={atualizaCadastro}
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            handleOnChange={(_item: string) => cadastrarUsuario({...usuario!, email: _item})}
            required
          />
        </S.ContainerLinha>
        <S.ContainerLinha>
          <Input
            id="password"
            tipo="password"
            label="Senha"
            autoComplete="off"
            width={`${sizes.px377}`}
            height={`${sizes.px21}`}
            margin={`${sizes.px8} ${sizes.px13}`}
            handleRef={senhaRef}
            handleValue={usuario?.senha}
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            handleOnChange={(_item: string) => cadastrarUsuario({...usuario!, senha: _item})}
            required
          />

          <Input
            id="cofirma_password"
            tipo="password"
            label="Confirma Senha"
            autoComplete="off"
            width={`${sizes.px377}`}
            height={`${sizes.px21}`}
            margin={`${sizes.px8} ${sizes.px13}`}
            handleRef={confSenhaRef}
            handleValue={usuario?.confirmaSenha}
            handleOnChange={(_item: string) =>
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              cadastrarUsuario({...usuario!, confirmaSenha: _item})
            }
            required
          />
        </S.ContainerLinha>
        <S.ContainerLinha>
          <Input
            id="idCargo"
            tipo="text"
            label="Cargo"
            autoComplete="off"
            width={`${sizes.px377}`}
            height={`${sizes.px21}`}
            margin={`${sizes.px8} ${sizes.px13}`}
            handleRef={cargoRef}
            handleValue={usuario?.cargo}
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            handleOnChange={(_item: string) => cadastrarUsuario({...usuario!, cargo: _item})}
            required
          />

          {!telaLogin ? (
            <S.ContainerDropdown marginDropdown={`${sizes.px8} ${sizes.px13}`}>
              <Dropdown
                width={sizes.px233}
                height={sizes.px21}
                defaultValue={
                  usuario?.role ? roles[roleDefault.indexOf(usuario?.role.toString())] : undefined
                }
                options={roles}
                handleOnChange={role}
              />
            </S.ContainerDropdown>
          ) : null}
        </S.ContainerLinha>
      </S.Formulario>
    </S.Container>
  );
};
