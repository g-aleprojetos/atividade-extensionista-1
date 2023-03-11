import React from 'react';
import {useCallback, useEffect, useState} from 'react';
import {useLeitura} from 'hooks/api/useLeitura';
import {ILeitura} from 'resources/interfaces/leitura';
import {Card} from 'components/card';

import * as S from './Dashboard.styles';

export const Dashboard = () => {
  const {obtemLeitura} = useLeitura();
  const [listaLeitura, setListaLeitura] = useState<ILeitura[]>([]);
  const fetchData = useCallback(async () => {
    const response = await obtemLeitura();
    if (response?.error === false) {
      if (response.leituras) {
        setListaLeitura(response.leituras);
      }
    } else {
      setListaLeitura([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <S.Container data-testid={'teste_dashboard'}>
      <S.ContainerCard>
        {listaLeitura.length
          ? listaLeitura.map((item: ILeitura, key) => <Card item={item} key={key} />)
          : null}
      </S.ContainerCard>
    </S.Container>
  );
};
