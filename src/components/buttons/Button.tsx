import React from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import MainStyles from '../../styles/main';

interface Props {
    /* Текст кнопки */
    text: string;
    event: Function;
}

const MainButton: React.FC<Props> = (props:Props) => {
  return (
    <View>
        <TouchableOpacity style={MainStyles.button} onPress={()=>props.event()}>
            <Text>{props.text}</Text>
        </TouchableOpacity>
    </View>
  );
};


export default MainButton;