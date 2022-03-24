import React, {useState} from 'react';
import {
  Text,
  View,
} from 'react-native';

import LoginStyles from '../../styles/login';
import { loginUser } from '../../actions/userManagement';
import { connect } from 'react-redux';
import InputField from '../input/InputField';
import MainButton from '../buttons/Button';

const LoginForm: React.FC = (props:any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onPressLogin = async () => {
    props.login({
      email: email,
      password: password
    });
  }

  return (
    <View style={LoginStyles.loginContainer}>
      <MainButton event={() => props.navigation.push('Register')} text={`Don't have an account yet? Register instead`}/>
        {props.errors.login !== undefined && props.errors.login ? 
          <Text>{props.errors.login}</Text>
        : null}
        <InputField setValue={setEmail} error={props.errors.email} label="Email" value={email}></InputField>
        <InputField setValue={setPassword} error={props.errors.password} label="Password" value={password}></InputField>
        <MainButton event={onPressLogin} text={'Login'}/>
    </View>
  );
};

const mapStateToProps = (state:any) => {
  return {
    errors: state.customer.errors
  }
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    login: (payload:any) => dispatch(loginUser(payload)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);