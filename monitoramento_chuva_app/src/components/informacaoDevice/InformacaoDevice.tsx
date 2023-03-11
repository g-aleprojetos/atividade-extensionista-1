import React, {useRef} from 'react';
import * as S from './InformacaoDevice.styles';
import colors from 'resources/colors';
import {TextoMedium} from 'components/texto';
import {IDevice, IEndereco} from 'resources/interfaces';
import sizes from 'resources/sizes';
import {Input} from 'components/input';
import {Checkbox} from 'components/checkBox';

export type Props = S.PropsInformacaoDevice & {
  device?: IDevice;
  endereco?: IEndereco;
  atualizar: boolean;
  leituraSensores: boolean;
  leituraAgua: boolean;
  cadastrarDevice: (_item: IDevice) => void;
  cadastrarEndereco: (_item: IEndereco) => void;
  setLeituraSensores: (_item: boolean) => void;
  setLeituraAgua: (_item: boolean) => void;
};

export const InformacaoDevice = (props: Props) => {
  const {
    device,
    endereco,
    atualizar,
    leituraSensores,
    leituraAgua,
    cadastrarDevice,
    cadastrarEndereco,
    setLeituraSensores,
    setLeituraAgua,
  } = props;

  const nomeRef = useRef<HTMLInputElement | null>(null);
  const localizacaoRef = useRef<HTMLInputElement | null>(null);
  const enderecoRef = useRef<HTMLInputElement | null>(null);
  const bairroRef = useRef<HTMLInputElement | null>(null);
  const cidadeRef = useRef<HTMLInputElement | null>(null);
  const ufRef = useRef<HTMLInputElement | null>(null);

  return (
    <S.Container>
      <S.ContainerLinha>
        <Input
          id="idNome"
          tipo="text"
          label="Nome"
          autoComplete="on"
          disabled={!atualizar}
          width={`${sizes.px377}`}
          height={`${sizes.px21}`}
          margin={`${sizes.px8} ${sizes.px13}`}
          backgroundColor={atualizar ? colors.white : colors.lightgray}
          handleRef={nomeRef}
          handleValue={device?.nome}
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          handleOnChange={(_item: string) => cadastrarDevice({...device!, nome: _item})}
        />
        <Input
          id="idUniqueID"
          tipo="text"
          label="UniqueID"
          autoComplete="on"
          disabled
          width={`${sizes.px377}`}
          height={`${sizes.px21}`}
          margin={`${sizes.px8} ${sizes.px13}`}
          backgroundColor={colors.lightgray}
          handleValue={device?.uniqueID}
        />
      </S.ContainerLinha>
      <S.ContainerCheckBox>
        <Checkbox
          id="idLeituraSensores"
          label=" Leitura Sensores"
          atualizar={atualizar}
          checked={leituraSensores}
          onChange={() => setLeituraSensores(!leituraSensores)}
          disabled={!atualizar}></Checkbox>
        <Checkbox
          id="idLeituraAgua"
          label="Leitura água"
          atualizar={atualizar}
          checked={leituraAgua}
          onChange={() => setLeituraAgua(!leituraAgua)}
          disabled={!atualizar}></Checkbox>
      </S.ContainerCheckBox>
      <TextoMedium peso="bold" cor={colors.black}>
        Endereço
      </TextoMedium>
      <Input
        id="id_endereco_localizacao"
        tipo="text"
        label="Localização"
        autoComplete="on"
        disabled={!atualizar}
        width={`100%`}
        height={`${sizes.px21}`}
        margin={`${sizes.px8} ${sizes.px13}`}
        backgroundColor={atualizar ? colors.white : colors.lightgray}
        handleRef={localizacaoRef}
        handleValue={device?.endereco?.localizacao}
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        handleOnChange={(_item: string) => cadastrarEndereco({...endereco!, localizacao: _item})}
      />
      <Input
        id="id_endereco_endereco"
        tipo="text"
        label="Endereço"
        autoComplete="on"
        disabled={!atualizar}
        width={`100%`}
        height={`${sizes.px21}`}
        margin={`${sizes.px8} ${sizes.px13}`}
        backgroundColor={atualizar ? colors.white : colors.lightgray}
        handleRef={enderecoRef}
        handleValue={device?.endereco?.endereco}
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        handleOnChange={(_item: string) => cadastrarEndereco({...endereco!, endereco: _item})}
      />
      <S.ContainerLinha>
        <Input
          id="id_endereco_bairro"
          tipo="text"
          label="Bairro"
          autoComplete="on"
          disabled={!atualizar}
          width={`${sizes.px233}`}
          height={`${sizes.px21}`}
          margin={`${sizes.px8} ${sizes.px13}`}
          backgroundColor={atualizar ? colors.white : colors.lightgray}
          handleRef={bairroRef}
          handleValue={device?.endereco?.bairro}
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          handleOnChange={(_item: string) => cadastrarEndereco({...endereco!, bairro: _item})}
        />

        <Input
          id="id_endereco_cidade"
          tipo="text"
          label="Cidade"
          autoComplete="on"
          disabled={!atualizar}
          width={`${sizes.px233}`}
          height={`${sizes.px21}`}
          margin={`${sizes.px8} ${sizes.px13}`}
          backgroundColor={atualizar ? colors.white : colors.lightgray}
          handleRef={cidadeRef}
          handleValue={device?.endereco?.cidade}
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          handleOnChange={(_item: string) => cadastrarEndereco({...endereco!, cidade: _item})}
        />

        <Input
          id="id_endereco_estado"
          tipo="text"
          label="Estado"
          autoComplete="on"
          disabled={!atualizar}
          width={`${sizes.px34}`}
          height={`${sizes.px21}`}
          margin={`${sizes.px8} ${sizes.px13}`}
          backgroundColor={atualizar ? colors.white : colors.lightgray}
          paddingLeft={`${sizes.px21}`}
          handleRef={ufRef}
          handleValue={device?.endereco?.uf}
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          handleOnChange={(_item: string) => cadastrarEndereco({...endereco!, uf: _item})}
        />
      </S.ContainerLinha>
      <S.ContainerLinha>
        <Input
          id="idLatitude"
          tipo="text"
          label="Latitude"
          autoComplete="off"
          disabled
          width={`${sizes.px377}`}
          height={`${sizes.px21}`}
          margin={`${sizes.px8} ${sizes.px13}`}
          handleValue={device?.latitude}
          backgroundColor={colors.lightgray}
        />
        <Input
          id="idLongitude"
          tipo="text"
          label="longitude"
          autoComplete="off"
          disabled
          width={`${sizes.px377}`}
          height={`${sizes.px21}`}
          margin={`${sizes.px8} ${sizes.px13}`}
          backgroundColor={colors.lightgray}
          handleValue={device?.longitude}
        />
      </S.ContainerLinha>
    </S.Container>
  );
};
