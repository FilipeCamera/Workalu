import React from 'react';

import {
  Modal,
  Container,
  ShowIndicator,
  Title,
  Desc,
  Button,
  ButtonText,
} from './styles';

export default function ModalCadastro({
  visible,
  setVisible,
  completeRegister,
  setCompleteRegister,
}) {
  
  return (
    <Modal visible={visible} animationType="fade">
      <Container>
        <Title>Cadastro</Title>
        {completeRegister === true ? (
          <Desc>Cadastro feito com sucesso!</Desc>
        ) : (
          <ShowIndicator size="large" color="#E44545" />
        )}
        <Button
          onPress={() => {
            setVisible(false);
            setCompleteRegister(false);
          }}
        >
          <ButtonText>Ok</ButtonText>
        </Button>
      </Container>
    </Modal>
  );
}
