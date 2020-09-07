import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  background: #fff;
`;

export const Title = styled.Text`
  font-family: 'Cairo-Bold';
  font-size: 20px;
  color: #666666;
  margin: 15px 0 10px;
`;

export const BoxButton = styled.View`
  width: 80%;
  height: 40px;
  flex-direction: row;
  margin: 10px 0;
`;

export const ButtonServico = styled.TouchableOpacity`
  width: 50%;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background: ${(props) => (props.selected == true ? '#1F8299' : '#F2F2F2')};
`;

export const ServicoText = styled.Text`
  font-family: 'Cairo-SemiBold';
  font-size: 14px;
  color: ${(props) => (props.selected == true ? '#F2F2F2' : '#4D4D4D')};
`;

export const ButtonVaga = styled.TouchableOpacity`
  width: 50%;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background: ${(props) => (props.selected == true ? '#1F8299' : '#F2F2F2')};
`;

export const VagaText = styled.Text`
  font-family: 'Cairo-SemiBold';
  font-size: 14px;
  color: ${(props) => (props.selected == true ? '#F2F2F2' : '#4D4D4D')};
`;

export const Label = styled.Text`
  margin: 20px 0 5px;
  width: 90%;
  font-family: 'Cairo-Light';
  font-size: 17px;
  color: #666666;
  text-align: left;
`;

export const Categoria = styled.Picker`
  width: 90%;
  height: 60px;
  background: #f2f2f2;
  color: #808080;
`;

export const Input = styled.TextInput`
  width: 90%;
  height: 60px;
  background: #f2f2f2;
  border-radius: 5px;
  margin: 5px 0 0;
  padding-left: 10px;
  font-family: 'Cairo-Light';
  font-size: 16px;
  color: #808080;
`;

export const ButtonTags = styled.TouchableOpacity`
  margin-right: 5px;
  padding: 5px;
  background: #808080;
  border-radius: 5px;
`;

export const TextTags = styled.Text`
  font-family: 'Cairo-Light';
  color: #fff;
`;

export const BoxValor = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0 0;
`;

export const ValorInput = styled.TextInput`
  height: 60px;
  width: 48%;
  background: #f2f2f2;
  border-radius: 5px;
  font-family: 'Cairo-Light';
  font-size: 16px;
  color: #808080;
  text-align: center;
`;

export const BoxCity = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0 0;
`;

export const CityInput = styled.TextInput`
  width: 66%;
  height: 60px;
  background: #f2f2f2;
  color: #808080;
  border-radius: 5px;
  font-family: 'Cairo-Light';
  padding-left: 10px;
  font-size: 16px;
`;

export const Uf = styled.Picker`
  width: 30%;
  height: 60px;
  background: #f2f2f2;
  color: #808080;
`;

export const Button = styled.TouchableOpacity`
  background: #1F8299;
  width: 200px;
  height: 60px;
  border-radius: 5px;
  margin: 40px 0 0;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Cairo-SemiBold';
  font-size: 16px;
  color: #fff;
`;
