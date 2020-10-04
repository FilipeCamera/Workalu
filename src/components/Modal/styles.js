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

export const Email = styled.View`
  width: 90%;
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  background: #C3DFE5;
  text-align: center;
  margin: 20px 0;
`;

export const EmailText = styled.Text`
  font-family: 'Cairo-SemiBold';
  font-size: 16px;
  color: #0A2B33;
`;

export const ButtonClip = styled.TouchableOpacity``;

export const Button = styled.TouchableOpacity`
  margin: 20px 0 0;
`;

export const ButtonText = styled.Text`
  font-family: 'Cairo-SemiBold';
  font-size: 16px;
  color: #E44545;
`;