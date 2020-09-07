import React from 'react'

import styled from 'styled-components/native';

import LogoIcon from '../../assets/logoFServices.svg';

const Container = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px 0 0;
`;


export default function Header(){
  return(
    <Container>
      <LogoIcon />
    </Container>
  )
}