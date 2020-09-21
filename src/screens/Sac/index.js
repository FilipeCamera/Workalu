import React, { useState } from 'react';

import Header from '../../components/Header';

import { Container, Title, Label } from './styles';

import { Picker } from '@react-native-community/picker';
import { FormExcluirDados, FormDificuldade, FormFeedBack } from '../../components/FormSac';

export default function Sac() {
  const [categoria, setCategoria] = useState(null);
  return (
    <Container
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1,
        alignItems: 'center',
        paddingBottom: 50,
      }}
    >
      <Header />
      <Title>SAC</Title>
      <Label>Categoria:</Label>
      <Picker
        style={{
          height: 60,
          width: '90%',
          color: '#0A2B33',
          backgroundColor: '#C3DFE5',
        }}
        selectedValue={categoria}
        mode="dropdown"
        onValueChange={(itemValue, itemIndex) => setCategoria(itemValue)}
      >
        <Picker.Item label="Selecione..." value="" />
        <Picker.Item label="Excluir seus dados" value="Excluir seus dados" />
        <Picker.Item
          label="Dificuldade em cadastrar"
          value="Dificuldade em cadastrar"
        />
        <Picker.Item label="Feedback" value="Feedback" />
      </Picker>
      {categoria == 'Excluir seus dados' ? <FormExcluirDados /> : null}
      {categoria == 'Dificuldade em cadastrar' ? <FormDificuldade/> : null}
      {categoria == 'Feedback' ? <FormFeedBack/> : null}
    </Container>
  );
}
