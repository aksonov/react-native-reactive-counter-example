import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Button from 'react-native-button';

export default function({counter = 0, increase = ()=>alert('+'), decrease = ()=>alert('-')}){
  return <View>
    <Text>Counter: {counter}</Text>
    <Button onPress={increase}>+</Button>
    <Button onPress={decrease}>-</Button>
  </View>
}