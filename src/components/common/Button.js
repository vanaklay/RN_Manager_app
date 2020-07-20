import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  return (
      <TouchableOpacity 
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.buttonTitle}>{children}</Text>
      </TouchableOpacity>
  );  
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    backgroundColor: '#788eec',
    marginHorizontal: 30,
    marginTop: 20,
    height: 48,
    width: 300,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
},
buttonTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
},
});

export {Button};