import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import ListingStyles from '../../styles/listing';
import Config from '../../../Config';

interface Props {
    /* id основного изображения */
    image_id: string;
    /* Название */
    name: string;
    /* Цена */
    price_display: string;
    /* Евент при клике */
    onClick: Function;
    /* рерайт линк для картинки */
    link_rewrite: string;
}

const ProductMiniature: React.FC<Props> = (props:Props) => {

const getImage = () => {
    return Config.baseURI + props.image_id + '-home_default/' + props.link_rewrite + '.jpg';
}

return (
    <View style={ListingStyles.miniContainer}>
        <TouchableOpacity onPress={() => props.onClick()}>
            <Image style={ListingStyles.image} source={{uri: getImage()}}/>
            <Text style={ListingStyles.name}>{props.name}</Text>
            <Text style={ListingStyles.price}>{props.price_display}</Text>
        </TouchableOpacity>
    </View>
);
};

export default ProductMiniature;