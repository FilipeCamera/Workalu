import React, { useState, useEffect } from 'react';

import {
  Container,
  Title,
  BoxButton,
  ButtonServico,
  ServicoText,
  ButtonVaga,
  VagaText,
  Label,
  Categoria,
  Input,
  ButtonTags,
  TextTags,
  BoxValor,
  ValorInput,
  BoxCity,
  CityInput,
  Uf,
  Button,
  ButtonText,
} from './styles';

import { Alert } from 'react-native';

import Tags from 'react-native-tags';

import firestore from '@react-native-firebase/firestore';

import ModalCadastro from '../../components/ModalCadastro';
import Header from '../../components/Header';

export default function Cadastrar() {
  const [categoria, setCategoria] = useState('');
  const [uf, setUf] = useState('SP');
  const [tagsData, setTagsData] = useState([]);
  const [nome, setNome] = useState('');
  const [nomeServico, setNomeServico] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [valorInicial, setValorInitial] = useState('');
  const [valorFinal, setValorFinal] = useState('');
  const [cidade, setCidade] = useState('');
  const [visible, setVisible] = useState(false);
  const [completeRegister, setCompleteRegister] = useState(false);
  const [selected, setSelect] = useState(true);
  const doc = firestore().collection('servicos');

  async function addService() {
    await doc.add({
      categoria: categoria,
      nome: nome,
      nomeServico: nomeServico,
      whatsapp: whatsapp,
      tagsData: tagsData,
      valorInicial: valorInicial,
      valorFinal: valorFinal,
      cidade: cidade,
      uf: uf,
      createdAt: firestore.FieldValue.serverTimestamp(),
    });
    setCompleteRegister(true);
  }
  useEffect(() => {
    setCategoria('');
    setUf('');
    setNome('');
    setNomeServico('');
    setWhatsapp('');
    setTagsData([]);
    setValorInitial('');
    setValorFinal('');
    setCidade('');
  }, [completeRegister]);

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
      <ModalCadastro
        visible={visible}
        setVisible={setVisible}
        completeRegister={completeRegister}
        setCompleteRegister={setCompleteRegister}
      />
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
      <Label>Categoria:</Label>
      <Categoria
        selectedValue={categoria}
        mode="dropdown"
        onValueChange={(itemValue, itemIndex) => setCategoria(itemValue)}
      >
        <Categoria.Item label="Selecione..." value="" />
        <Categoria.Item
          label="Serviços Domésticos"
          value="Serviços Domésticos"
        />
        <Categoria.Item label="Design e Criação" value="Design e Criação" />
        <Categoria.Item
          label="Engenharia e Arquitetura"
          value="Engenharia e Arquitetura"
        />
        <Categoria.Item label="Transporte e Frete" value="Transporte e Frete" />
        <Categoria.Item label="Serviços Locais" value="Serviços Locais" />
        <Categoria.Item
          label="Fotografia e AudioVisual"
          value="Fotografia e AudioVisual"
        />
        <Categoria.Item label="Idiomas" value="Idiomas" />
        <Categoria.Item label="Moda e Beleza" value="Moda e Beleza" />
        <Categoria.Item
          label="Web, Mobile e Software"
          value="Web, Mobile e Software"
        />
        <Categoria.Item label="Outros" value="Outros" />
      </Categoria>
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
      <Label>Tags:</Label>
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
        inputStyle={{ backgroundColor: 'white' }}
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
        <Uf
          mode="dropdown"
          selectedValue={uf}
          onValueChange={(itemValue, itemIndex) => setUf(itemValue)}
        >
          <Uf.Item label="RO" value="RO" />
          <Uf.Item label="AC" value="AC" />
          <Uf.Item label="AM" value="AM" />
          <Uf.Item label="RR" value="RR" />
          <Uf.Item label="PA" value="PA" />
          <Uf.Item label="AP" value="AP" />
          <Uf.Item label="TO" value="TO" />
          <Uf.Item label="MA" value="MA" />
          <Uf.Item label="PI" value="PI" />
          <Uf.Item label="CE" value="CE" />
          <Uf.Item label="RN" value="RN" />
          <Uf.Item label="PB" value="PB" />
          <Uf.Item label="PE" value="PE" />
          <Uf.Item label="AL" value="AL" />
          <Uf.Item label="SE" value="SE" />
          <Uf.Item label="BA" value="BA" />
          <Uf.Item label="MG" value="MG" />
          <Uf.Item label="ES" value="ES" />
          <Uf.Item label="RJ" value="RJ" />
          <Uf.Item label="SP" value="SP" />
          <Uf.Item label="PR" value="PR" />
          <Uf.Item label="SC" value="SC" />
          <Uf.Item label="RS" value="RS" />
          <Uf.Item label="MS" value="MS" />
          <Uf.Item label="MT" value="MT" />
          <Uf.Item label="GO" value="GO" />
          <Uf.Item label="DF" value="DF" />
        </Uf>
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
