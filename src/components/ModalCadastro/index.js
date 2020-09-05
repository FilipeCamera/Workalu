import React, { useState, useEffect } from 'react';

import {
  Modal,
  Container,
  ShowIndicator,
  Title,
  Desc,
  Button,
  ButtonText,
} from './styles';

import {
  InterstitialAd,
  AdEventType,
} from '@react-native-firebase/admob';

export default function ModalCadastro({
  visible,
  setVisible,
  completeRegister,
  setCompleteRegister,
}) {
  const adUnitId = 'ca-app-pub-4288571417280592/8187388340';

  const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
    requestNonPersonalizedAdsOnly: true,
  });

  useEffect(() => {
    const eventListener = interstitial.onAdEvent((type) => {
      if (type === AdEventType.LOADED) {
        interstitial.show()
      }
    });
    return () => {
      eventListener();
    };
  }, []);

  return (
    <Modal visible={visible} animationType="fade">
      <Container>
        <Title>Cadastro</Title>
        {completeRegister === true ? (
          <Desc>Cadastro feito com sucesso!</Desc>
        ) : (
          <ShowIndicator size="large" color="#416CD9" />
        )}
        <Button
          onPress={() => {
            setVisible(false);
            setCompleteRegister(false);
          }}
        >
          <ButtonText>Ok</ButtonText>
        </Button>
      </Container>
    </Modal>
  );
}
