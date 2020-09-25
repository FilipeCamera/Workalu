/**
 * Sample React Native App with Firebase
 * https://github.com/invertase/react-native-firebase
 *
 * @format
 * @flow
 */

import React, {useEffect} from 'react';

import {StatusBar} from 'react-native';

import { firebase } from '@react-native-firebase/analytics';

import Routes from './src/routes';

export default function App() {
  useEffect(() => {
    async function loadAnalytics(){
      await firebase.analytics().setAnalyticsCollectionEnabled(true)
    }
    loadAnalytics()
  }, [])
  return( 
    <>
      <StatusBar backgroundColor='#E44545'/>
      <Routes />
    </>
    )
}
