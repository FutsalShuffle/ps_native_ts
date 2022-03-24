import React from 'react';
import {
  View,
  Image,
} from 'react-native';

import Config from '../../../Config';
import Carousel from "react-native-snap-carousel";
import { useWindowDimensions } from 'react-native';


interface Props {
    /* Пул изображений */
    images: Array<any>;
    link_rewrite: string;
}

const ProductImage:React.FC<Props> = (props:Props) => {

    const contentWidth = useWindowDimensions().width;

    const getImages = () => {
        if (!props.images && props.images === undefined) return [];
        let imgarr:Array<string> = [];
        props.images.forEach((image => {
            imgarr.push(Config.baseURI + image['id_image'] + '-large_default/' + props.link_rewrite + '.jpg');
        }));
        return imgarr;
    }

    const _renderItem = ({ item }:any) => {
        return (
          <View>
            <Image style={{height: 300, borderRadius: 20}} source={{uri: item}}/>
          </View>
        );
      };

    return (
        <View style={{marginTop:15}}>
             <Carousel
                inactiveSlideOpacity={0.6}
                inactiveSlideScale={0.65}
                layout={'stack'} 
                layoutCardOffset={13}
                sliderWidth={contentWidth}
                itemWidth={contentWidth / 1.111}
                data={getImages()}
                renderItem={_renderItem}
                removeClippedSubviews={false}
                containerCustomStyle={{ overflow: 'visible' }}
                contentContainerCustomStyle={{ overflow: 'visible' }}
            />
        </View>
    );
};

export default ProductImage;