import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import CategoryStyles from '../../styles/category';

interface Props {
    product:any;
}

const ProductLine: React.FC<Props> = (props:Props) => {

  return (
    <View style={{width: '95%', borderWidth: 1,borderRadius: 5, alignContent: 'center',padding: 12, marginBottom: 10, flexDirection: 'row'}}>
        <Image style={{height: 60, borderRadius: 15, width: 60}} source={{uri: props.product.image_url}} />
        <View style={{marginLeft: 5, justifyContent:'center'}}>
            <Text style={{fontSize: 17}}>{props.product.name}</Text>
            <Text style={{fontSize: 17}}>{props.product.price} ({props.product.cart_quantity})</Text>
        </View>
    </View>
  );
};

export default ProductLine;