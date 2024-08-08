import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

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

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
});

export default ReusableTextInput;
