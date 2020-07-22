import React, { useState } from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';

import { firebase } from './src/services/firebase';

import { setNavigator } from './src/navigationRef';

import LoginScreen from './src/screens/LoginScreen';
import AccountScreen from './src/screens/AccountScreen';
import EmployeeListScreen from './src/screens/EmployeeListScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

import { Spinner } from './src/components/common';
import { FontAwesome } from '@expo/vector-icons';

const mainFlow = createStackNavigator(
  {
  Liste: EmployeeListScreen,
  Creation: CreateScreen,
  Edition: EditScreen
  }
);

mainFlow.navigationOptions = {
  title: "Liste",
  tabBarIcon: <FontAwesome name="th-list" size={20}/>,
};

const bottomTabNavigator = createBottomTabNavigator(
  {
  mainFlow: mainFlow,
  Utilisateur: AccountScreen
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: '#788eec'
      },
      activeTintColor: '#e91e63',
      inactiveTintColor: '#fff'
    }
  }
);

const NavApp = createAppContainer(bottomTabNavigator);

export default function App() {
  const [loggedIn, setLoggedIn] = useState(null);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setLoggedIn(true);
    } else { 
      setLoggedIn(false);
    }
  });

  const RenderContent = () => {
    switch (loggedIn) {
      case true:
        return <NavApp ref={(navigator) => { setNavigator(navigator) }} />;
      case false:
        return <LoginScreen />;
      case null:
        return <LoginScreen />;
      default:
        return <Spinner />;
    }
  };
  return (
    <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
      <RenderContent />  
    </Provider>
  );
}


