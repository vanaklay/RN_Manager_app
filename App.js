import React from 'react';
import { StyleSheet, View } from 'react-native';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';

import LoginScreen from './src/screens/LoginScreen';
import AccountScreen from './src/screens/AccountScreen';
import EmployeeListScreen from './src/screens/EmployeeListScreen';
import EmployeeDetailsScreen from './src/screens/EmployeeDetailsScreen';


// The first navigator we have to switch from loginScreen to another screen 
// when the user is logged
const switchNavigator = createSwitchNavigator({
  // Listing the different things that this switchNavigator is going to 
  // display
  Login: LoginScreen,
  mainFlow: createBottomTabNavigator({
    // Then inside this BottomTabNavigator, we want a stack navigator 
    // and another screen 
    employeeFlow: createStackNavigator({
      EmployeeList: EmployeeListScreen,
      EmployeeDetails: EmployeeDetailsScreen
    }),
    Account: AccountScreen
  })
});

// export default function App() {
//   return (
//     <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
//       <View style={styles.containerStyle}>
//         <LoginScreen />
//       </View>
//     </Provider>
//   );
// }

// const styles = StyleSheet.create({
//   containerStyle: {
//     flex: 1,
//     backgroundColor: '#eb5352'
//   }
// });

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
      <App />
    </Provider>
  );
};

