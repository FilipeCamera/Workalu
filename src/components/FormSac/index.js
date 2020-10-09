import React, { useState } from 'react';

import { Container, Label, Input, Button, ButtonText } from './styles';

import { Alert } from 'react-native';

import { Picker } from '@react-native-community/picker';

import database from '@react-native-firebase/database';

export function FormExcluirDados() {
  const [categoria, setCategoria] = useState(null);
  const [nome, setNome] = useState('');
  const [nomeServicoVaga, setNomeServicoVaga] = useState('');
  const [whatsEmail, setWhatsEmail] = useState('');

  const id = Math.floor(Math.random() * 65536);
  return (
    <Container>
      <Label>Dados:</Label>
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
        <Picker.Item label="Serviços" value="Serviços" />
        <Picker.Item label="Vagas de empregos" value="Vagas de empregos" />
      </Picker>
      <Input value={nome} placeholder="Nome" onChangeText={(e) => setNome(e)} />
      {categoria == 'Serviços' ? (
        <Input
          value={nomeServicoVaga}
          placeholder="Nome do serviço"
          onChangeText={(e) => setNomeServicoVaga(e)}
        />
      ) : (
        <Input
          value={nomeServicoVaga}
          placeholder="Nome da vaga de emprego"
          onChangeText={(e) => setNomeServicoVaga(e)}
        />
      )}
      {categoria == 'Serviços' ? (
        <Input
          value={whatsEmail}
          placeholder="Whatsapp"
          keyboardType="number-pad"
          onChangeText={(e) => setWhatsEmail(e)}
        />
      ) : (
        <Input
          value={whatsEmail}
          placeholder="Email"
          onChangeText={(e) => setWhatsEmail(e)}
        />
      )}
      <Button
        onPress={() => {
          if (
            categoria == '' ||
            nome == '' ||
            nomeServicoVaga == '' ||
            whatsEmail == ''
          ) {
            return Alert.alert('Preencher todos os formulários!');
          } else {
            database()
              .ref(`/excluir_dados/${id}`)
              .set({
                categoria,
                nome,
                nomeServicoVaga,
                whatsEmail,
              })
              .then(() => Alert.alert('Enviado com sucesso!'));
          }
        }}
      >
        <ButtonText>Enviar</ButtonText>
      </Button>
    </Container>
  );
}

export function FormDificuldade() {
  const [email, setEmail] = useState('');
  const [dificuldade, setDificuldade] = useState('');
  const id = Math.floor(Math.random() * 65536);
  return (
    <Container>
      <Label>Dificuldade:</Label>
      <Input
        value={email}
        placeholder="Diga o seu email"
        onChangeText={(e) => setEmail(e)}
      />
      <Input
        value={dificuldade}
        placeholder="Diga a dificuldade que está tendo..."
        multiline={true}
        maxLength={500}
        style={{ textAlignVertical: 'top', height: 160 }}
        onChangeText={(e) => setDificuldade(e)}
      />
      <Button
        onPress={() => {
          if (email == '' || dificuldade == '') {
            return Alert.alert('Preencher todos os formulários!');
          } else {
            database()
              .ref(`/dificuldade/${id}`)
              .set({
                email,
                dificuldade,
              })
              .then(() => Alert.alert('Enviado com sucesso!'));
          }
        }}
      >
        <ButtonText>Enviar</ButtonText>
      </Button>
    </Container>
  );
}

export function FormFeedBack() {
  const [feedback, setFeedback] = useState('');
  const id = Math.floor(Math.random() * 65536);
  return (
    <Container>
      <Label>Feedback:</Label>
      <Input
        value={feedback}
        placeholder="Diga o seu feedback"
        multiline={true}
        maxLength={500}
        style={{ textAlignVertical: 'top', height: 160 }}
        onChangeText={(e) => setFeedback(e)}
      />
      <Button
        onPress={() => {
          if (feedback == '') {
            return Alert.alert('Preencher o formulário!!');
          } else {
            database()
              .ref(`/feedback/${id}`)
              .set({
                feedback,
              })
              .then(() => Alert.alert('Enviado com sucesso!'));
          }
        }}
      >
        <ButtonText>Enviar</ButtonText>
      </Button>
    </Container>
  );
}

export function FormEditarDados() {
  const [categoria, setCategoria] = useState(null);
  const [nome, setNome] = useState('');
  const [nomeServicoVaga, setNomeServicoVaga] = useState('');
  const [whatsEmail, setWhatsEmail] = useState('');
  const [editarDados, setEditar] = useState('');
  return (
    <Container>
      <Label>Dados:</Label>
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
        <Picker.Item label="Serviços" value="Serviços" />
        <Picker.Item label="Vagas de empregos" value="Vagas de empregos" />
      </Picker>
      <Input value={nome} placeholder="Nome" onChangeText={(e) => setNome(e)} />
      {categoria == 'Serviços' ? (
        <Input
          value={nomeServicoVaga}
          placeholder="Nome do serviço"
          onChangeText={(e) => setNomeServicoVaga(e)}
        />
      ) : (
        <Input
          value={nomeServicoVaga}
          placeholder="Nome da vaga de emprego"
          onChangeText={(e) => setNomeServicoVaga(e)}
        />
      )}
      {categoria == 'Serviços' ? (
        <Input
          value={whatsEmail}
          placeholder="Whatsapp"
          keyboardType="number-pad"
          onChangeText={(e) => setWhatsEmail(e)}
        />
      ) : (
        <Input
          value={whatsEmail}
          placeholder="Email"
          onChangeText={(e) => setWhatsEmail(e)}
        />
      )}
      <Input
        value={editarDados}
        placeholder='Diga o que você quer editar'
        multiline={true}
        maxLength={500}
        style={{ textAlignVertical: 'top', height: 160 }}
        onChangeText={(e) => setEditar(e)}
      />
      <Button
        onPress={() => {
          if (
            categoria == '' ||
            nome == '' ||
            nomeServicoVaga == '' ||
            whatsEmail == ''
          ) {
            return Alert.alert('Preencher todos os formulários!');
          } else {
            database()
              .ref(`/excluir_dados/${id}`)
              .set({
                categoria,
                nome,
                nomeServicoVaga,
                whatsEmail,
                editarDados,
              })
              .then(() => Alert.alert('Enviado com sucesso!'));
          }
        }}
      >
        <ButtonText>Enviar</ButtonText>
      </Button>
    </Container>
  );
}
