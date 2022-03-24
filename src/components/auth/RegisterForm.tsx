import React, {useState} from 'react';
import {
  Text,
  View,
} from 'react-native';

import LoginStyles from '../../styles/login';
import { registerUser } from '../../actions/userManagement';
import { connect } from 'react-redux';
import InputField from '../input/InputField';
import MainButton from '../buttons/Button';

const RegisterForm: React.FC = (props:any) => {
  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onPressLogin = async () => {
    props.register({
      email: email,
      password: password,
      firstname: firstname,
      lastname: lastname
    });
  }

  return (
    <View style={LoginStyles.loginContainer}>
        {props.errors.register !== undefined && props.errors.register ? 
          <Text>{props.errors.register}</Text>
        : null}
        <InputField setValue={setFirstname} error={props.errors.firstname} label="Firstname" value={firstname}></InputField>
        <InputField setValue={setLastname} error={props.errors.lastname} label="Lastname" value={lastname}></InputField>
        <InputField setValue={setEmail} error={props.errors.email} label="Email" value={email}></InputField>
        <InputField setValue={setPassword} error={props.errors.password} label="Password" value={password}></InputField>
        <MainButton event={onPressLogin} text="Login"></MainButton>
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
    register: (payload:any) => dispatch(registerUser(payload)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);