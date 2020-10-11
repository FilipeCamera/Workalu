import React, { useState, useEffect } from 'react';

import {
  Container,
  Label,
  Input,
  CityInput,
  ValorInput,
  BoxValor,
  BoxCity,
  Button,
  ButtonText,
  ButtonTags,
  TextTags,
} from './styles';

import { Picker } from '@react-native-community/picker';

import { Alert } from 'react-native';

import Tags from 'react-native-tags';

import firestore from '@react-native-firebase/firestore';

import ModalCadastro from '../ModalCadastro';

export default function FormServico() {
  const [categoria, setCategoria] = useState('');
  const [uf, setUf] = useState('SP');
  const [tagsData, setTagsData] = useState([]);
  const [nome, setNome] = useState('');
  const [nomeServico, setNomeServico] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [instagram, setInstagram] = useState('');
  const [valorInicial, setValorInitial] = useState('');
  const [valorFinal, setValorFinal] = useState('');
  const [cidade, setCidade] = useState('');
  const [visible, setVisible] = useState(false);
  const [completeRegister, setCompleteRegister] = useState(false);

  const doc = firestore().collection('servicos');

  useEffect(() => {
    setCategoria('');
    setUf('');
    setNome('');
    setNomeServico('');
    setWhatsapp('');
    setInstagram('');
    setTagsData([]);
    setValorInitial('');
    setValorFinal('');
    setCidade('');
  }, [completeRegister]);

  async function addService() {
    await doc.add({
      categoria: categoria,
      nome: nome,
      nomeServico: nomeServico,
      whatsapp: whatsapp,
      instagram: instagram,
      tagsData: tagsData,
      valorInicial: valorInicial,
      valorFinal: valorFinal,
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
        <Picker.Item
          label="Design, Fotografia e AudioVisual"
          value="Design, Fotografia e AudioVisual"
        />
        <Picker.Item
          label="Engenharia e Arquitetura"
          value="Engenharia e Arquitetura"
        />
        <Picker.Item label="Educação e Idiomas" value="Educação e Idiomas" />
        <Picker.Item label="Moda e Beleza" value="Moda e Beleza" />
        <Picker.Item label="Serviços Domésticos" value="Serviços Domésticos" />
        <Picker.Item label="Serviços Locais" value="Serviços Locais" />
        <Picker.Item label="Saúde" value="Saúde" />
        <Picker.Item label="Transporte e Frete" value="Transporte e Frete" />

        <Picker.Item
          label="Web, Mobile e Software"
          value="Web, Mobile e Software"
        />
        <Picker.Item label="Outros" value="Outros" />
      </Picker>
      <Input
        value={nome}
        placeholder="Nome / Nome da loja"
        onChangeText={(e) => setNome(e)}
      />
      <Input
        value={nomeServico}
        placeholder="Nome do serviço"
        onChangeText={(e) => setNomeServico(e)}
      />
      <Input
        value={whatsapp}
        placeholder="Whatsapp - DD988888888"
        onChangeText={(e) => setWhatsapp(e)}
        keyboardType="numeric"
      />
      <Label>Rede social:</Label>
      <Input
        value={instagram}
        placeholder="Instagram (opcional)"
        onChangeText={(e) => setInstagram(e)}
      />
      <Label>Palavras-chaves:</Label>
      <Tags
        style={{ width: '90%', marginTop: 5 }}
        initialText=""
        textInputProps={{
          placeholder: 'Diga a sua experiência',
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
      <Label>Valor do serviço:</Label>
      <BoxValor>
        <ValorInput
          value={valorInicial}
          placeholder="De"
          keyboardType="numeric"
          onChangeText={(e) => setValorInitial(e)}
        />
        <ValorInput
          value={valorFinal}
          placeholder="Até"
          keyboardType="numeric"
          onChangeText={(e) => setValorFinal(e)}
        />
      </BoxValor>
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
          <Picker.Item label="--" value="" />
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
            nomeServico == '' ||
            whatsapp == '' ||
            tagsData == [] ||
            valorInicial == '' ||
            valorFinal == '' ||
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
