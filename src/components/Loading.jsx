import { ActivityIndicator, Button, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Loading = ({loading}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="blue" />
      <Text style={styles.loginText}>Loading</Text>
      <Pressable
       onPress={() => loading(false)}
      style={styles.closeButtonContainer}>  
        <Text style={styles.closeButton}>X</Text>
      </Pressable>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'tomato',
  },
  loginText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 24,
  },
  closeButtonContainer: {
     backgroundColor:'black',
     width:50,
     height:50,
     borderRadius:50,
     alignItems:'center',
     justifyContent:'center',
     position:'absolute',
     top:50,
     right:30

  },
  closeButton: {
           color:'white',
           fontWeight:'bold',
           fontSize:24
  }
});
