import React from 'react';
import {
  Text,
  View,
  TextInput
} from 'react-native';

import MainStyles from '../../styles/main';

interface Props {
    /* setState функция */
    setValue: Function;
    /* Значение */
    value: string;
    /* Лейбл */
    label: string;
    /* Ошибка */
    error?: string;
}

const InputField: React.FC<Props> = (props:Props) => {
  return (
    <View>
        <Text style={MainStyles.label}>{props.label}</Text>
        {props.error ? 
            <Text style={MainStyles.labelError}>{props.error}</Text>
        : null}
        <TextInput style={MainStyles.input} onChangeText={(val) => props.setValue(val)}></TextInput>
    </View>
  );
};

export default InputField;