import styled from 'styled-components/native';

export const Modal = styled.Modal`
  justify-content: center;
  align-items: center;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #0A2B33;
`;

export const Button = styled.TouchableOpacity`
  background: #1F8299;
  width: 45%;
  height: 60px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Cairo-SemiBold';
  color: #FFF;
  font-size: 16px;
`;

export const Label = styled.Text`
  font-family: 'Cairo-SemiBold';
  font-size: 18px;
  color: #C3DFE5;
  margin: 10px 0;
`;

export const BoxEndereco = styled.View`
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0 20px;
`;

export const InputEndereco = styled.TextInput`
  background: #C3DFE5;
  width: 65%;
  height: 60px;
  color: #0A2B33;
  padding-left: 10px;
`;

export const BoxButton = styled.View`
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
