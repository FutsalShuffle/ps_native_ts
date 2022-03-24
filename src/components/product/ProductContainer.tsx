import React from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';

import ProductImage from '../product/ProductImage';
import HtmlContainer from '../html/HtmlContainer';
import ProductStyles from '../../styles/product';
import MainButton from '..//buttons/Button';
import { addToCart } from '../../actions/cartManagement';
import { connect } from 'react-redux';

interface Props {
    /* Товар */
    product: {
        link_rewrite: string;
        name: string;
        price_display: string;
        description: string;
        id_product: number;
        id_product_attribute: number;
    };
    /* Изображения */
    images: Array<string>;
    addToCart: Function;
}

interface CartObject {
  id_product: number;
  id_product_attribute: number;
  quantity?: number;
  op?: string;
}

const ProductContainer: React.FC<Props> = (props:Props) => {

  const addToCart = () => {
    let data:CartObject = {
      id_product: props.product.id_product,
      id_product_attribute: props.product.id_product_attribute
    };
    props.addToCart(data);
  };

  return (
    <ScrollView>
          <ProductImage link_rewrite={props.product.link_rewrite} images={props.images} />
          <View style={ProductStyles.mainContainer}>
            <Text style={ProductStyles.name}>{props.product.name}</Text>
            <Text style={ProductStyles.price}>{props.product.price_display}</Text>
          </View>
          <MainButton event={() => addToCart()} text="Add to cart"/>
          <View style={ProductStyles.htmlContainer}>
            <HtmlContainer html={props.product.description} />
          </View>
    </ScrollView>
  );
};

const mapDispatchToProps = (dispatch:any) => {
  return {
    addToCart: (payload:CartObject) => dispatch(addToCart(payload)),
  }
}

export default connect(null, mapDispatchToProps)(ProductContainer);