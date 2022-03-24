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
  View
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { connect } from 'react-redux';
import { verifyUser } from './src/actions/userManagement';
import LocalStorage from './src/localstorage/LocalStorage';
import AppNavigator from './src/navigation/AppNavigator';
import { getCart } from './src/actions/cartManagement';
import Loading from './src/components/loader/Loading';
import {getMainPageData} from './src/actions/mainPageManagement';

interface RootState {
  customer: {
    isLoggedIn: boolean;
    customer: Object;
    loading: boolean;
  }
}

const App = (props:any) => {
  useEffect(() => {
    async function initLoadApp() {
      props.verifyUser();
      props.getCart();
      props.getMainPageData();
    }
    initLoadApp()
  }, []);

  useEffect(() => {
    async function initLoadApp() {
      if (props.isLoggedIn) {
        props.getCart();
      }
    }
    initLoadApp()
  }, [props.isLoggedIn]);

  return (
    <View style={{flex:1}}>
      <StatusBar style="auto" />
      <AppNavigator/>
      {props.loading ? 
        <Loading/>
      : null}
    </View>
  );

};

const mapStateToProps = (state:RootState) => {
  return {
    customer: state.customer.customer,
    isLoggedIn: state.customer.isLoggedIn,
    loading: state.customer.loading
  }
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    verifyUser: () => dispatch(verifyUser()),
    getCart: () => dispatch(getCart()),
    getMainPageData: () => dispatch(getMainPageData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
