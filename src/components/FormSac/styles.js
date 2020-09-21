import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  align-items: center;
`;

export const Label = styled.Text`
  margin: 20px 0 5px;
  width: 90%;
  font-family: 'Cairo-SemiBold';
  font-size: 17px;
  color: #FFF;
  text-align: left;
`;

export const Input = styled.TextInput`
  width: 90%;
  height: 60px;
  background: #C3DFE5;
  margin: 10px 0 0;
  padding-left: 10px;
  font-family: 'Cairo-Regular';
  font-size: 16px;
  color: #0A2B33;
`;

export const Button = styled.TouchableOpacity`
  background: #E44545;
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