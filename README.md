# RN_Manager_app

## How to implement Redux, React-Navigation, Firebase's services by creating an Employees Manager App with React-Native
- Implement Redux to store business logic and state outside of the component
- Implement Redux-thunk to handle asynchronous action creator
- Implement React-Navigation to navigate from one component to another
- Implement React-Navigation-tabs
- Implement Firebase Authentication for sign in, sign out forms
- Implement Firebase Storage to store data 


## React Navigation Fix React_native 0.63
```
    1. Install React Navigation
    yarn add react-navigation

    2. Install Dependencies
    expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

    3. Install React Navigation Stack
    yarn add react-navigation-stack @react-native-community/masked-view

    4. Install React Navigation Tabs
    yarn add react-navigation-tabs

    5. Start the app and clear cache : expo r -c

    6. Import in App.js : 
    import { createAppContainer, createSwitchNavigator } from 'react-navigation';
    import { createStackNavigator } from 'react-navigation-stack';
    import { createBottomTabNavigator } from 'react-navigation-tabs';

```