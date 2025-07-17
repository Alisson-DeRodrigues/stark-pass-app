import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './StarkInputStyles';

interface StarkTextInputProps {
    pass: string;
}

export function StarkTextInput(props: StarkTextInputProps) {
  return (
    <TextInput 
    multiline
    numberOfLines={4}
    style={styles.inputer}
    placeholder='pass'
    value={props.pass}
    />
  );
}