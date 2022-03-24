/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import { connect } from 'react-redux';
import ProductLine from '../components/cart/ProductLine';
import Loading from '../components/loader/Loading';

interface RootState {
    customer: {
        isLoggedIn: boolean;
        customer: Object;
    }
    cart: {
        cart: Object;
        loading: boolean;
    },
    loading: boolean,
    isLoggedIn: boolean
}

const Cart = (props:any) => {
    return (
    <>
        {props.isLoggedIn && typeof props.cart != 'undefined' && typeof props.cart.cart != 'undefined' && props.cart.cart.products ? 
            <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
                {props.cart.cart.products.map((item:any, index:number) => (
                    <ProductLine key={index} product={item} />
                ))}
            </View>
        : null
        }
        {props.loading ? <Loading/> : null}
        </>
    );
};

const mapStateToProps = (state:RootState) => {
    return {
        customer: state.customer.customer,
        isLoggedIn: state.customer.isLoggedIn,
        cart: state.cart.cart,
        loading: state.cart.loading
    }
}

export default connect(mapStateToProps)(Cart);