import React from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
import { 
  useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';

{/*import Poluentes from './src/telas/Poluentes';
import Login from './src/telas/Login';*/}
import PrimeiroAcesso from './src/telas/PrimeiroAcesso';



export default function App() {
  const[fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if(!fonteCarregada){
    return <View/>
  }

  return (
    <SafeAreaView>
      <StatusBar />
      {/*<Poluentes />
      <Login />*/}
      <PrimeiroAcesso />
    </SafeAreaView>
  );
}