import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';

const CustomTextInput = ({ title, isSecureText = false, placeholder, value, onChangeText }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputBoxText}>{title}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={isSecureText}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    marginBottom: 16,
  },
  inputBoxText: {
    fontWeight: '500',
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 50,
    fontSize: 16,
    backgroundColor: '#fff',
  },
});
