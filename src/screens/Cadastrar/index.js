import React, { useState } from 'react';

import {
  Container,
  Title,
  BoxButton,
  ButtonServico,
  ServicoText,
  ButtonVaga,
  VagaText,
} from './styles';

import Header from '../../components/Header';
import FormServico from '../../components/FormServico';
import FormVaga from '../../components/FormVaga';

export default function Cadastrar() {

  const [selected, setSelect] = useState(true);

  return (
    <Container
      contentContainerStyle={{
        flexGrow: 1,
        alignItems: 'center',
        paddingBottom: 50,
      }}
      showsVerticalScrollIndicator={false}
    >
      <Header />
      <Title>Cadastrar</Title>
      <BoxButton>
        <ButtonServico
          selected={selected}
          onPress={() => {
            setSelect(true);
          }}
        >
          <ServicoText selected={selected}>Serviço</ServicoText>
        </ButtonServico>
        <ButtonVaga
          selected={!selected}
          onPress={() => {
            setSelect(false);
          }}
        >
          <VagaText selected={!selected}>Vaga de emprego</VagaText>
        </ButtonVaga>
      </BoxButton>
      {selected == true ? <FormServico /> : <FormVaga />}
    </Container>
  );
}
