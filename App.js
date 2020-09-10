/**
 * Sample React Native App with Firebase
 * https://github.com/invertase/react-native-firebase
 *
 * @format
 * @flow
 */

import React from 'react';

import {StatusBar} from 'react-native';

import Routes from './src/routes';



export default function App() {
  return( 
    <>
      <StatusBar backgroundColor='#E44545'/>
      <Routes />
    </>
    )
}
