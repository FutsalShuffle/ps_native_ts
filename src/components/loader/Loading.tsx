import React from 'react';
import {
  Text,
  View,
} from 'react-native';


const Loading = () => {
  return (
    <View style={{flex:1, position: 'absolute', top: 0, left: 0, justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', backgroundColor: 'black'}}>
       <Text style={{color: 'white', fontSize: 48}}>Loading...</Text>
    </View>
  );
};

export default Loading;