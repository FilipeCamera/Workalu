import React from 'react';

import {
  Modal,
  Container,
  Categoria,
  Uf,
  Label,
  Button,
  ButtonText,
  BoxEndereco,
  InputEndereco,
} from './styles';

import { Picker } from '@react-native-community/picker';

export default function ModalFilterVaga({
  categoria,
  uf,
  endereco,
  modalVisible,
  setModalVisible,
  setCategoria,
  setEndereco,
  setUf,
  filterData,
}) {
  return (
    <Modal visible={modalVisible} animationType="slide">
      <Container>
        <Label>Filtrar por:</Label>
        <Picker
          style={{
            height: 60,
            width: '90%',
            color: '#808080',
          }}
          selectedValue={categoria}
          mode="dropdown"
          onValueChange={(itemValue, itemIndex) => setCategoria(itemValue)}
        >
          <Picker.Item label="Todos" value="" />
          <Picker.Item label="Administração" value="Administração" />
          <Picker.Item label="Comercial e Vendas" value="Comercial e Vendas" />
          <Picker.Item label="Comércio Exterior" value="Comércio Exterior" />
          <Picker.Item label="Educação" value="Educação" />
          <Picker.Item label="Financeira" value="Financeira" />
          <Picker.Item
            label="Hotelaria e Turismo"
            value="Hotelaria e Turismo"
          />
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
        <BoxEndereco>
          <InputEndereco
            value={endereco}
            placeholder="Cidade"
            onChangeText={(e) => setEndereco(e)}
          />
          <Picker
            style={{
              height: 60,
              width: '30%',
              color: '#808080',
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
        </BoxEndereco>
        <Button
          onPress={() => {
            setModalVisible(false);
            filterData(categoria, uf, endereco);
          }}
        >
          <ButtonText>Ok</ButtonText>
        </Button>
        <Button
          style={{ backgroundColor: '#5A5A5A', marginTop: 5 }}
          onPress={() => {
            setModalVisible(false);
          }}
        >
          <ButtonText>Cancelar</ButtonText>
        </Button>
      </Container>
    </Modal>
  );
}
