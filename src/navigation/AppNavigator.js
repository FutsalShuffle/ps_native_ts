import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Category from '../screens/Category';
import Product from '../screens/Product';
import RegisterForm from '../components/auth/RegisterForm';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../screens/Profile';
import Cart from '../screens/Cart';
import MainScreen from '../screens/Main';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const CategoryStack = createStackNavigator();

const CategoryStackScreen = props => {
    return (
      <CategoryStack.Navigator >
        <CategoryStack.Screen
          name="Category"
          component={Category}
          options={{ title: 'Category'}}
        />
        <CategoryStack.Screen
          name="Product"
          component={Product}
          options={{ title: 'Product' }}
        />
      </CategoryStack.Navigator>
    );
}

const AuthStackScreen = props => {
    return (
      <CategoryStack.Navigator >
        <CategoryStack.Screen
          name="Profile"
          component={Profile}
        />
        <CategoryStack.Screen
          name="Register"
          component={RegisterForm}
        />
      </CategoryStack.Navigator>
    );
}

const MainStackScreen = props => {
  return (
    <CategoryStack.Navigator >
    <CategoryStack.Screen
      name="Index"
      component={MainScreen}
    />
  </CategoryStack.Navigator>
  )
}


const CartStackScreen = props => {
  return (
    <CategoryStack.Navigator >
      <CategoryStack.Screen
        name="Cart" component={Cart}
      />
    </CategoryStack.Navigator>
  );
}

const tabBar = props => (
    <Tab.Navigator screenOptions={{headerShown: false}} >
        <Tab.Screen name="Listing" component={CategoryStackScreen} />
        <Tab.Screen name="MainScreen" component={MainStackScreen} />
        <Tab.Screen name="Auth" component={AuthStackScreen} />
        <Tab.Screen name="My Cart" component={CartStackScreen} />
    </Tab.Navigator>
);

export default function AppNavigator(props) {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={Product}>
          <Stack.Screen name="Tab" component={tabBar} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}