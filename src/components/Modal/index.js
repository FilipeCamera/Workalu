import React from 'react';

import {
  Container,
  Box,
  Title,
  Desc,
  Email,
  Button,
  ButtonText,
  EmailText,
  ButtonClip,
} from './styles';

import Clipboard from '@react-native-community/clipboard';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Modal({ visible, setVisible, email }) {
  function CopyClip(email) {
    Clipboard.setString(email);
  }
  return (
    <Container visible={visible} animationType="fade">
      <Box>
        <Title>Passo a Passo</Title>
        <Desc>1- Verificar se o email é correspondente a empresa</Desc>
        <Desc>2- Você irá colocar no assunto do email = Workalu Vaga.</Desc>
        <Desc>
          3- No corpo do email: Nome Completo, Idade, CPF e Currículo em PDF.
        </Desc>
        <Desc>4- Copie o email abaixo.</Desc>
        <Email>
          <EmailText>{email}</EmailText>
          <ButtonClip onPress={() => CopyClip(email)}>
            <Icon name="content-copy" size={20} color='#0A2B33'/>
          </ButtonClip>
        </Email>
        <Button onPress={() => setVisible(false)}>
          <ButtonText>Confirmar</ButtonText>
        </Button>
      </Box>
    </Container>
  );
}
