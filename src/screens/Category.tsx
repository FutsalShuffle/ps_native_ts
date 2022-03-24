import React, { useEffect, useState } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import {AjaxProviderGet} from '../providers/AjaxProvider';
import ProductMiniature from '../components/listing/ProductMiniature';
import ListingStyles from '../styles/listing';
import CategoryItem from '../components/categories/CategoryItem';

interface Product {
    name: string;
    price_display: string;
    cover_image_id: string;
    id_product: string;
    link_rewrite: string;
}

const Category = (props:any) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState([]);
  const [children, setChildren] = useState([]);


  useEffect(() => {
    let cleanupFunction = false;

    async function initLoadCategory() {
      let category_id = typeof(props.route.params) != 'undefined' && typeof(props.route.params.id_category) != 'undefined' ? props.route.params.id_category : 2;
      let category = await AjaxProviderGet('/category?id_category=' + category_id);
      if (category.success && category.result.products) {
        if (!cleanupFunction) {
          setProducts(category.result.products);
          if (category.result.children) setChildren(category.result.children);
          props.navigation.setOptions({ title: category.result.category.name });
          setIsLoaded(true);
        }
      }
    }
    initLoadCategory();
    return () => {
      cleanupFunction = true
    };
  }, []);

  return (
    <ScrollView>
      <View>
        {isLoaded && children && children.length ? 
              children.map((item:any) => (
                <CategoryItem key={item.id_category} name={item.name} onClick={() => props.navigation.push('Category', { id_category: item.id_category })}/>
              ))
           : null }
      </View>
      <View style={ListingStyles.container}>
          {isLoaded ? 
              products.map((item:Product) => (
                  <ProductMiniature key={item.id_product} image_id={item.cover_image_id} link_rewrite={item.link_rewrite} name={item.name} price_display={item.price_display} onClick={() => props.navigation.navigate('Product', { id_product: item.id_product })}></ProductMiniature>
              )) 
          :null}
      </View>
   </ScrollView>
  );
};

export default Category;