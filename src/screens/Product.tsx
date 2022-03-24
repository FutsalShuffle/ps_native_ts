import React, { useEffect, useState } from 'react';
import {
  View
} from 'react-native';
import {AjaxProviderGet} from '../providers/AjaxProvider';
import ProductContainer from '../components/product/ProductContainer';
import Loading from '../components/loader/Loading';

const Product = (props:any) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [product, setProduct] = useState<any>([]);
  const [images, setImages] = useState([]);
  // const [selectedCombination, setSelectedCombination] = useState(0);
  const [productCombinations, setCombination] = useState([]);

  useEffect(() => {
    let cleanupFunction = false;

    async function initLoadProduct() {
      let product = await AjaxProviderGet('/product?id_product=' + props.route.params.id_product);
      if (product.success && product.result.product) {
        if (!cleanupFunction) {
          setCombination(product.result.combinations);
          setProduct(product.result.product);
          setImages(product.result.images);
          props.navigation.setOptions({ title: product.result.product.name });
          setIsLoaded(true);
        }
      }
    }
    initLoadProduct();
    return () => {
      cleanupFunction = true
    };
  }, []);

  return (
    <View>
      {isLoaded ? 
        <ProductContainer product={product} images={images} />
      : <Loading/>}
   </View>
  );
};

export default Product;