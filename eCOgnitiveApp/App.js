
import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { 
  useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold
 } from '@expo-google-fonts/montserrat';

import Poluentes from './src/telas/Poluentes';
import { View } from 'react-native-web';

export default function App() {
 const [fonteCarregada] =  useFonts ({
   "MonteserratRegular": Montserrat_400Regular,
   "MonteserratNegrito": Montserrat_700Bold,
 });

 if(!fonteCarregada) {
   return <View />
 }

  return (
    <SafeAreaView>
      <StatusBar />
      <Poluentes />
    </SafeAreaView>
  );
}

