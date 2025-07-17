import React from 'react';
import { Text, Image } from 'react-native';

import { styles } from './StarkLogoStyles';
import stark from '../../../assets/stark-logo.png'

export function StarkLogo() {
  return (
    <>
        <Text style={styles.title}>PASS GENERATOR</Text>
        <Image 
        source={stark} 
        style={{resizeMode: 'contain', height: 180, width: '100%'}}
        />
        <Text style={styles.title}>STARK INDUSTRIES</Text>
    </>
  );
}