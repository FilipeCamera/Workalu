import React, { useState, useEffect } from 'react';

import {
  Container,
  Label,
  Input,
  CityInput,
  ButtonTags,
  TextTags,
  BoxCity,
  Button,
  ButtonText,
} from './styles';

import { Picker } from '@react-native-community/picker';

import { Alert } from 'react-native';

import Tags from 'react-native-tags';

import firestore from '@react-native-firebase/firestore';

import ModalCadastro from '../ModalCadastro';

export default function FormVaga() {
  const [categoria, setCategoria] = useState('');
  const [uf, setUf] = useState('SP');
  const [tagsData, setTagsData] = useState([]);
  const [nome, setNome] = useState('');
  const [nomeVaga, setNomeVaga] = useState('');
  const [descVaga, setDescVaga] = useState('');
  const [email, setEmail] = useState('');
  const [cidade, setCidade] = useState('');
  const [visible, setVisible] = useState(false);
  const [completeRegister, setCompleteRegister] = useState(false);

  const doc = firestore().collection('vagas');

  useEffect(() => {
    setCategoria('');
    setUf('');
    setNome('');
    setNomeVaga('');
    setDescVaga('');
    setEmail('');
    setTagsData([]);
    setCidade('');
  }, [completeRegister]);

  async function addService() {
    await doc.add({
      categoria: categoria,
      nome: nome,
      nomeVaga: nomeVaga,
      descVaga: descVaga,
      email: email,
      tagsData: tagsData,
      cidade: cidade,
      uf: uf,
      createdAt: firestore.FieldValue.serverTimestamp(),
    });
    setCompleteRegister(true);
  }

  return (
    <Container>
      <ModalCadastro
        visible={visible}
        setVisible={setVisible}
        completeRegister={completeRegister}
        setCompleteRegister={setCompleteRegister}
      />
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
        <Picker.Item label="Administração" value="Administração" />
        <Picker.Item label="Comercial e Vendas" value="Comercial e Vendas" />
        <Picker.Item label="Comércio Exterior" value="Comércio Exterior" />
        <Picker.Item label="Educação" value="Educação" />
        <Picker.Item label="Financeira" value="Financeira" />
        <Picker.Item label="Hotelaria e Turismo" value="Hotelaria e Turismo" />
        <Picker.Item label="Informática" value="Informática" />
        <Picker.Item label="Saúde" value="Saúde" />
        <Picker.Item label="Suprimentos" value="Suprimentos" />
        <Picker.Item
          label="Agricultura, Pecuária e Veterinária"
          value="Agricultura, Pecuária e Veterinária"
        />
        <Picker.Item
          label="Artes, Arquitetura e Design"
          value="Artes, Arquitetura e Design"
        />
        <Picker.Item
          label="Comunicação - Marketing"
          value="Comunicação - Marketing"
        />
        <Picker.Item
          label="Agricultura, Pecuária e Veterinária"
          value="Agricultura, Pecuária e Veterinária"
        />
        <Picker.Item label="Engenharia" value="Engenharia" />
        <Picker.Item label="Industrial" value="Industrial" />
        <Picker.Item label="Jurídica" value="Jurídica" />
        <Picker.Item label="Técnica" value="Técnica" />
        <Picker.Item
          label="Telemarketing - Telecomunicações"
          value="Telemarketing - Telecomunicações"
        />
        <Picker.Item label="Serviços Sociais" value="Serviços Sociais" />
      </Picker>
      <Input
        value={nome}
        placeholder="Nome da Empresa / Loja"
        onChangeText={(e) => setNome(e)}
      />
      <Input
        value={nomeVaga}
        placeholder="Nome da vaga"
        onChangeText={(e) => setNomeVaga(e)}
      />
      <Input
        value={descVaga}
        placeholder="Descrição da vaga"
        multiline={true}
        maxLength={500}
        style={{ textAlignVertical: 'top', height: 160 }}
        onChangeText={(e) => setDescVaga(e)}
      />
      <Input
        value={email}
        placeholder="Email para envio de currículo / contato"
        onChangeText={(e) => setEmail(e)}
      />
      <Label>Tags:</Label>
      <Tags
        style={{ width: '90%', marginTop: 5 }}
        initialText=""
        textInputProps={{
          placeholder: 'Diga os detalhes da vaga',
        }}
        initialTags={tagsData}
        onChangeTags={(tags: any) => {
          setTagsData(tags);
        }}
        onTagPress={(index: any, tagLabel: any, event: any, deleted: any) =>
          console.log(
            index,
            tagLabel,
            event,
            deleted ? 'deleted' : 'not deleted'
          )
        }
        containerStyle={{ justifyContent: 'center' }}
        inputStyle={{ backgroundColor: '#C3DFE5', color: '#0A2B33' }}
        renderTag={({ tag, index, onPress, deleteTagOnPress, readonly }) => (
          <ButtonTags key={`${tag}-${index}`} onPress={onPress}>
            <TextTags>{tag}</TextTags>
          </ButtonTags>
        )}
      />
      <BoxCity>
        <CityInput
          value={cidade}
          placeholder="Cidade"
          onChangeText={(e) => setCidade(e)}
        />
        <Picker
          style={{
            height: 60,
            width: '30%',
            color: '#0A2B33',
            backgroundColor: '#C3DFE5',
          }}
          mode="dropdown"
          selectedValue={uf}
          onValueChange={(itemValue, itemIndex) => setUf(itemValue)}
        >
          <Picker.Item label="RO" value="RO" />
          <Picker.Item label="AC" value="AC" />
          <Picker.Item label="AM" value="AM" />
          <Picker.Item label="RR" value="RR" />
          <Picker.Item label="PA" value="PA" />
          <Picker.Item label="AP" value="AP" />
          <Picker.Item label="TO" value="TO" />
          <Picker.Item label="MA" value="MA" />
          <Picker.Item label="PI" value="PI" />
          <Picker.Item label="CE" value="CE" />
          <Picker.Item label="RN" value="RN" />
          <Picker.Item label="PB" value="PB" />
          <Picker.Item label="PE" value="PE" />
          <Picker.Item label="AL" value="AL" />
          <Picker.Item label="SE" value="SE" />
          <Picker.Item label="BA" value="BA" />
          <Picker.Item label="MG" value="MG" />
          <Picker.Item label="ES" value="ES" />
          <Picker.Item label="RJ" value="RJ" />
          <Picker.Item label="SP" value="SP" />
          <Picker.Item label="PR" value="PR" />
          <Picker.Item label="SC" value="SC" />
          <Picker.Item label="RS" value="RS" />
          <Picker.Item label="MS" value="MS" />
          <Picker.Item label="MT" value="MT" />
          <Picker.Item label="GO" value="GO" />
          <Picker.Item label="DF" value="DF" />
        </Picker>
      </BoxCity>
      <Button
        onPress={() => {
          if (
            categoria == '' ||
            nome == '' ||
            nomeVaga == '' ||
            descVaga == '' ||
            email == '' ||
            tagsData == [] ||
            cidade == '' ||
            uf == ''
          ) {
            Alert.alert('Preencha todos os campos!!');
          } else {
            setVisible(true);
            addService();
          }
        }}
      >
        <ButtonText>Finalizar</ButtonText>
      </Button>
    </Container>
  );
}
