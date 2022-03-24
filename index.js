/**
 * @format
 */
import * as React from 'react';
import App from './App';
import {Provider} from 'react-redux';
import configureStore from './src/store';
import { registerRootComponent } from 'expo';
import 'react-native-gesture-handler';

const store = configureStore();

const reduxStore = () => 
    <Provider store={store}>
            <App />
    </Provider>

registerRootComponent(reduxStore);
 
