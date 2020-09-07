import React, { useEffect } from 'react';

import {
  Container,
  Logo,
  BoxPolygon,
  HelpBox,
  TextLogo,
  DescLogo,
  ButtonEmprego,
  ButtonService,
  ServiceText,
  EmpregoText,
  FooterBox,
  FooterText,
  BoxButton,
  ButtonCadastro
} from './styles';

import LogoIcon from '../../assets/logoFServices.svg';
import PolygonCinza from '../../assets/polygonCinza.svg';
import PolygonAzul from '../../assets/polygonAzul.svg';
import Help from '../../assets/help.svg';
import Team from '../../assets/team.svg';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  return (
    <Container
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: '#FFF',
      }}
    >
      <Logo>
        <LogoIcon />
        <TextLogo>Seja Bem-Vindo,</TextLogo>
        <DescLogo>
          aqui você encontra profissionais qualificados, oportunidades de
          empregos e serviços.
        </DescLogo>
      </Logo>
      <BoxPolygon>
        <PolygonCinza />
      </BoxPolygon>
      <BoxPolygon>
        <PolygonAzul />
        <BoxButton>
          <ButtonService onPress={() => navigation.navigate('Servicos')}>
            <HelpBox>
              <Help />
            </HelpBox>
            <ServiceText>Pesquisar por serviços e freelancers</ServiceText>
          </ButtonService>
          <ButtonEmprego onPress={() => {}}>
            <HelpBox>
              <Team />
            </HelpBox>
            <EmpregoText>Pesquisar por vagas de emprego</EmpregoText>
          </ButtonEmprego>
        </BoxButton>
        <ButtonCadastro onPress={() => navigation.navigate('Cadastrar')}>
          <Icon name='add' size={24} color='#FFF'/>
        </ButtonCadastro>
      </BoxPolygon>
      <FooterBox>
        <FooterText>2020 | FServices</FooterText>
      </FooterBox>
    </Container>
  );
}
