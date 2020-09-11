import styled from 'styled-components/native';

export const Container = styled.Modal``;

export const Box = styled.View`
  flex: 1;
  background: #0A2B33;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: 'Cairo-Bold';
  font-size: 18px;
  color: #C3DFE5;
`;

export const Desc = styled.Text`
  font-family: 'Cairo-SemiBold';
  font-size: 16px;
  color: #C3DFE5;
  text-align: justify;
  width: 90%;
`;

export const Email = styled.TextInput`
  width: 90%;
  height: 60px;
  background: #C3DFE5;
  text-align: center;
  font-family: 'Cairo-SemiBold';
  font-size: 15px;
  color: #155766;
  margin: 20px 0;
`;

export const Button = styled.TouchableOpacity`
  margin: 20px 0 0;
`;

export const ButtonText = styled.Text`
  font-family: 'Cairo-SemiBold';
  font-size: 16px;
  color: #E44545;
`;