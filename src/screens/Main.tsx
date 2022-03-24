/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import ProductMiniature from '../components/listing/ProductMiniature';

interface RootState {
  index: {
    homeslider: Array<Object>,
    featuredproducts: Array<Object>,
  }
}
 
const MainScreen = (props:any) => {

  const navigationProps = {
    navigation: props.navigation
  }

  return (
    <View>
      <ScrollView>
      {props.index.loading ? 
        null
      : 
        props.index.featuredproducts.map((item:any) => (
          <ProductMiniature key={item.id_product} image_id={item.cover_image_id} link_rewrite={item.link_rewrite} name={item.name} price_display={item.price_display} onClick={() => props.navigation.navigate('Product', { id_product: item.id_product })}/>
        ))
      }
      </ScrollView>
    </View>
  );
 
};
 
const mapStateToProps = (state:RootState) => {
  return {
    index: state.index,
  }
}
 
export default connect(mapStateToProps)(MainScreen);