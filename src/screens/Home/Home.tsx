import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from '../Home/Styles';
import { StarkLogo } from '../../components/StarkLogo/StarkLogo';
import { StarkButton } from '../../components/StarkButton/StarkButton';

export default function Home(){
    return( 
        <View style={styles.appContainer}>
            <View style={styles.logoContainer}>
                <StarkLogo />
            </View>

            <View style={styles.inputContainer}>
                <StarkButton />
            </View>

            <StatusBar style="light" />
        </View>
    )
}