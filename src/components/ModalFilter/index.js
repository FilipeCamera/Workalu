import React from 'react';

import {
  Modal,
  Container,
  Label,
  Button,
  ButtonText,
  BoxEndereco,
  InputEndereco,
  BoxButton,
} from './styles';

import { Picker } from '@react-native-community/picker';

export default function ModalFilter({
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
            color: '#0A2B33',
            backgroundColor: '#C3DFE5',
          }}
          selectedValue={categoria}
          mode="dropdown"
          onValueChange={(itemValue, itemIndex) => setCategoria(itemValue)}
        >
          <Picker.Item label="Todos" value="" />
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
          <Picker.Item
            label="Serviços Domésticos"
            value="Serviços Domésticos"
          />
          <Picker.Item label="Serviços Locais" value="Serviços Locais" />
          <Picker.Item label="Transporte e Frete" value="Transporte e Frete" />

          <Picker.Item
            label="Web, Mobile e Software"
            value="Web, Mobile e Software"
          />
          <Picker.Item label="Outros" value="Outros" />
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
              width: '32%',
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
        </BoxEndereco>
        <BoxButton>
          <Button
            onPress={() => {
              setModalVisible(false);
              filterData(categoria, uf, endereco);
            }}
          >
            <ButtonText>Ok</ButtonText>
          </Button>
          <Button
            style={{ backgroundColor: '#CC3E3E'}}
            onPress={() => {
              setModalVisible(false);
            }}
          >
            <ButtonText>Cancelar</ButtonText>
          </Button>
        </BoxButton>
      </Container>
    </Modal>
  );
}
