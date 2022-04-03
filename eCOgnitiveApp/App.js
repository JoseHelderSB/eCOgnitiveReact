
import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';

import Poluentes from './src/telas/Poluentes';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Poluentes />
    </SafeAreaView>
  );
}

