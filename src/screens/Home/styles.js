import styled from 'styled-components/native';

export const Container = styled.ScrollView`
`;

export const Logo = styled.View`
  width: 100%;
  position: absolute;
  top: 40px;
  left: 25px;
  elevation: 5;
`;
export const BoxPolygon = styled.View`
  width: 100%;
  elevation: 0;
`;

export const TextLogo = styled.Text`
  margin-top: 40px;
  margin-left: 10px;
  font-family: 'Cairo-Bold';
  font-size: 26px;
`;

export const DescLogo = styled.Text`
  width: 90%;
  margin-left: 10px;
  font-family: 'Cairo-Regular';
  font-size: 22px;
  text-align: justify;
`;

export const BoxButton = styled.View`
  width: 100%;
  position: absolute;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  bottom: 90px;
  elevation: 5;
`;

export const ButtonService = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background: #60D66A;
  border-radius: 10px;
  width: 170px;
  height: 118px;
`;
export const HelpBox = styled.View`
  margin-top: -100px;
  margin-bottom: 10px;
`;

export const ServiceText = styled.Text`
  font-family: 'Cairo-SemiBold';
  color: #1A4D08;
  font-size: 16px;
  width: 90%;
  text-align: center;
`;

export const ButtonEmprego = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background: #E44545;
  border-radius: 10px;
  width: 170px;
  height: 118px;
`;

export const EmpregoText = styled.Text`
  font-family: 'Cairo-SemiBold';
  color: #FFF;
  font-size: 16px;
  width: 90%;
  text-align: center;
`;

export const ButtonCadastro = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  right: 20px;
  align-items: center;
  justify-content: center;
  background: #155766;
  border-radius: 25px;
  width: 50px;
  height: 50px;
`;


export const FooterBox =  styled.View`
  background: #1F8299;
  width: 100%;
  height: 62px;
  justify-content: center;
  align-items: center;
`;

export const FooterText = styled.Text`
  font-family: 'Cairo-SemiBold';
  font-size: 16px;
  color: #FFF;
`;