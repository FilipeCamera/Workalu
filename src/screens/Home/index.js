import React, { useEffect } from 'react';

import {
  Background,
  Container,
  LogoDesc,
  ButtonRegister,
  RegisterText,
  Button,
  ButtonText,
} from './styles';

import { useNavigation } from '@react-navigation/native';

import backService from '../../assets/backService.jpg';
import descLogo from '../../assets/LogoDesc.png';

import admob, { MaxAdContentRating } from '@react-native-firebase/admob';

export default function Home() {
  useEffect(() => {
    admob()
      .setRequestConfiguration({
        maxAdContentRating: MaxAdContentRating.PG,
        tagForChildDirectedTreatment: true,
        tagForUnderAgeOfConsent: true,
      })
      .then(() => {});
  });
  const navigation = useNavigation();
  return (
    <Container>
      <Background source={backService}>
        <LogoDesc source={descLogo} />
        <Button onPress={() => navigation.navigate('Servicos')}>
          <ButtonText>Procurar Serviços</ButtonText>
        </Button>
        <ButtonRegister onPress={() => navigation.navigate('Cadastrar')}>
          <RegisterText>Cadastrar Serviço</RegisterText>
        </ButtonRegister>
      </Background>
    </Container>
  );
}
