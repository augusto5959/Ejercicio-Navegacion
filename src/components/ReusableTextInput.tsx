import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';
import { styles } from '../../theme/appTheme';

interface ReusableTextInputProps extends TextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

export const ReusableTextInput: React.FC<ReusableTextInputProps> = ({ placeholder, value, onChangeText, ...rest }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      keyboardType="numeric"
      {...rest}
    />
  );
};


export default ReusableTextInput;
