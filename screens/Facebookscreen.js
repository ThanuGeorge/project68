import React from 'react';
import { Text, View } from 'react-native';

export default class Facebookscreen extends React.Component {
    render() {
      return (
        <>
          <Text style={{textAlign: 'center', fontSize: 30,backgroundColor:'pink',marginTop:50,height:60}}>Buzz App</Text>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Facebook</Text>
        </View>
        </>
      );
    }
  }