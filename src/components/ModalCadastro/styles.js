import styled from 'styled-components/native';

export const Modal = styled.Modal`
  
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #0A2B33;
`;

export const ShowIndicator = styled.ActivityIndicator``;

export const Title = styled.Text`
  font-family: 'Cairo-Bold';
  font-size: 20px;
  margin: 0 0 30px;
  color: #C3DFE5;
`;

export const Desc = styled.Text`
  color: #C3DFE5;
  font-family: 'Cairo-Regular';
  font-size: 15px;
`;

export const Button = styled.TouchableOpacity`
  margin: 40px 0 0;
  background: #1F8299;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 50px;
`;

export const ButtonText = styled.Text`
  color: #FFF;
  font-size: 16px;
  font-family: 'Cairo-SemiBold';
`;
