/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import Bridge from './bridge';

const App = () => {
  const [description, setDiscription] = useState<string>('initial state');

  const onPressButton = () => {
    updateState();
  };

  const updateState = async () => {
    const newState = await Bridge.fetchNewState();
    setDiscription(newState);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnPressMe} onPress={onPressButton}>
        <Text style={styles.txtPressMe}>Press Me</Text>
      </TouchableOpacity>
      <Text>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  btnPressMe: {
    backgroundColor: '#2E3C57',
    padding: 10,
    alignSelf: 'stretch',
    marginHorizontal: 85,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  txtPressMe: {
    color: '#FFFFFF',
  },
});

export default App;
