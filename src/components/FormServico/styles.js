import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  background: #fff;
  align-items: center;
`;


export const Label = styled.Text`
  margin: 20px 0 5px;
  width: 90%;
  font-family: 'Cairo-Light';
  font-size: 17px;
  color: #666666;
  text-align: left;
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
