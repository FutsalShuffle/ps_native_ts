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
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import LoginForm from '../components/auth/LoginForm';
import {logoutUser} from '../actions/userManagement';

interface RootState {
  customer: {
    isLoggedIn: boolean;
    customer: Object;
    loading: boolean;
  }
}
 
const Profile = (props:any) => {

  const navigationProps = { // make sure all required component's inputs/Props keys&types match
    navigation: props.navigation
  }

   return (
    <>
      {props.isLoggedIn ? 
        <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
            <Text>
                {props.customer.firstname} {props.customer.lastname}
            </Text>
            <TouchableOpacity onPress={() => props.logout()}>
              <Text>Log out</Text>
            </TouchableOpacity>
        </View>
      : 
        <LoginForm {...navigationProps} />
      }
     </>
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
    logout: () => dispatch(logoutUser()),
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Profile);