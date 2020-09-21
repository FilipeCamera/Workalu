import React, { useEffect, useState } from 'react';

import {
  Container,
  Logo,
  HelpBox,
  TextLogo,
  DescLogo,
  ButtonEmprego,
  ButtonService,
  ServiceText,
  EmpregoText,
  FooterBox,
  FooterText,
  ButtonCadastro,
  BoxCadastros,
  TextQuantCadastros,
  TextCadastros,
  ButtonSac,
} from './styles';

import LogoIcon from '../../assets/logoWhite.svg';
import Team from '../../assets/team.svg';
import Help from '../../assets/help.svg';

import Icon from 'react-native-vector-icons/MaterialIcons';
import IconSac from 'react-native-vector-icons/AntDesign';

import { useNavigation } from '@react-navigation/native';

import firestore from '@react-native-firebase/firestore';

export default function Home() {
  const [totalS, setTotalS] = useState(0);
  const [totalV, setTotalV] = useState(0);
  const docS = firestore().collection('servicos');
  const docV = firestore().collection('vagas');
  const navigation = useNavigation();

  useEffect(() => {
    function addTotal() {
      docS.onSnapshot((querySnapshot) => setTotalS(querySnapshot.size));
      docV.onSnapshot((querySnapshot) => setTotalV(querySnapshot.size));
    }
    addTotal();
  }, []);

  return (
    <Container
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <Logo>
        <LogoIcon />
      </Logo>
      <TextLogo>Seja Bem-Vindo,</TextLogo>
      <DescLogo>
        aqui você encontra profissionais qualificados, oportunidades de empregos
        e serviços.
      </DescLogo>
      <ButtonService
        onPress={(e) => {
          e.preventDefault();
          navigation.navigate('Servicos');
        }}
      >
        <ServiceText>Pesquisar por serviços e freelancers</ServiceText>
        <HelpBox>
          <Help />
        </HelpBox>
      </ButtonService>
      <ButtonEmprego
        onPress={(e) => {
          e.preventDefault();
          navigation.navigate('Vagas');
        }}
      >
        <EmpregoText>Pesquisar por vagas de empregos</EmpregoText>
        <HelpBox>
          <Team />
        </HelpBox>
      </ButtonEmprego>
      <BoxCadastros>
        <TextQuantCadastros>{totalS}</TextQuantCadastros>
        <TextCadastros>
          serviços e freelancers cadastrados na nossa plataforma
        </TextCadastros>
      </BoxCadastros>
      <BoxCadastros>
        <TextQuantCadastros>{totalV}</TextQuantCadastros>
        <TextCadastros>vagas cadastrados na nossa plataforma</TextCadastros>
      </BoxCadastros>
      <ButtonCadastro
        onPress={(e) => {
          e.preventDefault();
          navigation.navigate('Cadastrar');
        }}
      >
        <Icon name="add" size={24} color="#FFF" />
      </ButtonCadastro>
      <FooterBox>
        <FooterText>2020 | Workalu |</FooterText>
        <ButtonSac onPress={(e) => {
          e.preventDefault();
          navigation.navigate('Sac');
        }}>
          <IconSac name="customerservice" size={25} color="#0A2B33" />
        </ButtonSac>
      </FooterBox>
    </Container>
  );
}
