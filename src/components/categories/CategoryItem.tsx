import React from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import CategoryStyles from '../../styles/category';

interface Props {
    /* Название категории */
    name: string
    /* event при клике */
    onClick: Function;
}

const CategoryItem: React.FC<Props> = (props:Props) => {
  return (
    <TouchableOpacity onPress={()=>props.onClick()}>
        <View style={CategoryStyles.item}>
            <Text style={CategoryStyles.text}>{props.name}</Text>
        </View>
    </TouchableOpacity>
  );
};

export default CategoryItem;