import styled from 'styled-components/native';

import {Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

export const Container = styled.ScrollView`
  background: #0A2B33;
`;

export const Logo = styled.View`
  margin: 25px 0 0 20px;
`;

export const TextLogo = styled.Text`
  margin-top: 10px;
  margin-left: 30px;
  font-family: 'Cairo-Black';
  font-size: 24px;
  color: #FFF;
`;

export const DescLogo = styled.Text`
  width: 300px;
  margin-left: 30px;
  font-family: 'Cairo-SemiBold';
  font-size: 20px;
  text-align: justify;
  color: #FFF;
`;

export const ButtonService = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background: #1F8299;
  border-radius: 10px;
  width: ${width > 360 ? '310' : '290'};
  height: 60px;
  margin: 50px auto 25px;
`;
export const HelpBox = styled.View`
  margin-left: -5px;
`;

export const ServiceText = styled.Text`
  font-family: 'Cairo-Bold';
  color: #FFF;
  font-size: 17px;
  width: 80%;
  text-align: center;
`;

export const ButtonEmprego = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background: #1F8299;
  border-radius: 10px;
  width: ${width > 360 ? '310' : '290'};
  height: 60px;
  margin: 25px auto 50px;
`;

export const EmpregoText = styled.Text`
  font-family: 'Cairo-Bold';
  color: #FFF;
  font-size: 17px;
  width: 80%;
  text-align: center;
`;

export const ButtonCadastro = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background: #E44545;
  border-radius: 25px;
  width: 50px;
  height: 50px;
  margin: 20px 0;
  left: ${width > 360 ? '82%' : '80%'};
`;

export const BoxCadastros = styled.View`
  flex-direction: row;
  margin: 20px auto;
  align-items: center;
  justify-content: center;
  width: 80%;
`;

export const TextQuantCadastros = styled.Text`
  font-family: 'Cairo-Bold';
  font-size: 26px;
  text-align: center;
  color: #FFF;
`;

export const TextCadastros = styled.Text`
  font-family: 'Cairo-SemiBold';
  font-size: 18px;
  color: #FFF;
  margin-left: 10px;
  width: 70%;
`;

export const FooterBox =  styled.View`
  background: #E44545;
  width: 100%;
  height: 60px;
  justify-content: center;
  align-items: center;
`;

export const FooterText = styled.Text`
  font-family: 'Cairo-SemiBold';
  font-size: 16px;
  color: #FFF;
`;