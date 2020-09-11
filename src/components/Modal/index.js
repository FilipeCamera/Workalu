import React, {useState} from 'react';

import {
  Container,
  Box,
  Title,
  Desc,
  Email,
  Button,
  ButtonText,
} from './styles';


export default function Modal({ visible, setVisible, email }) {
  
  return (
    <Container visible={visible} animationType="fade">
      <Box>
        <Title>Passo a Passo</Title>
        <Desc>1- Você irá colocar no assunto do email = FServices Vaga.</Desc>
        <Desc>
          2- No corpo do email: Nome Completo, Idade, CPF e Currículo em PDF.
        </Desc>
        <Desc>
          3- Copie o email abaixo.
        </Desc>
        <Email value={email} defaultValue={email} />
        <Button onPress={() => setVisible(false)}>
          <ButtonText>Confirmar</ButtonText>
        </Button>
      </Box>
    </Container>
  );
}
