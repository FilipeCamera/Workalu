import React from 'react'

import styled from 'styled-components/native';

import LogoIcon from '../../assets/logoWhite.png';

const Container = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 25px 0 0;
`;

const LogoImg = styled.Image`
  width: 100%;
  height: 100%;
`;

const BoxLogo = styled.View`
  width: 140px;
  height: 50px;
`;

export default function Header(){
  return(
    <Container>
      <BoxLogo>
        <LogoImg source={LogoIcon}/>
      </BoxLogo>
    </Container>
  )
}