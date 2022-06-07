import React from 'react';
import { StatusBar} from 'react-native';
import { Navigation } from './src/infrastructure/navigation';

export default function App() {
  return (
    <>
      <Navigation />
      <StatusBar style="auto"/>
    </>
  );
}

