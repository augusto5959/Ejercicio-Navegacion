import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ReusableTextInput from '../components/ReusableTextInput';
import { styles } from '../../theme/appTheme';

export const Pantalla2: React.FC = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const handleDivide = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (isNaN(num1) || isNaN(num2)) {
      setResult('Por favor, ingrese números válidos');
    } else if (num1 === 0 && num2 === 0) {
      setResult('INDETERMINACIÓN');
    } else if (num2 === 0) {
      setResult('NO EXISTE DIVISIÓN PARA CERO');
    } else {
      setResult(`Resultado: ${num1 / num2}`);
    }
  };

  return (
    <View style={styles.container}>
      <ReusableTextInput
        placeholder="Número 1"
        value={number1}
        onChangeText={setNumber1}
      />
      <ReusableTextInput
        placeholder="Número 2"
        value={number2}
        onChangeText={setNumber2}
      />
      <TouchableOpacity style={localStyles.button} onPress={handleDivide}>
        <Text style={localStyles.buttonText}>Dividir</Text>
      </TouchableOpacity>
      {result && <Text style={localStyles.result}>{result}</Text>}
    </View>
  );
};

const localStyles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    color: 'white',
  },
});

export default Pantalla2;
