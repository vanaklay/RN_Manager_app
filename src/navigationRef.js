import { NavigationActions } from 'react-navigation';

let navigator;

// Clever function to get access to navigator 
export const setNavigator = (nav) => {
    navigator = nav;
};

// Create a function to use for navigate through differents screens
export const navigate = (routeName, params) => {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName: routeName,
            params: params,
        })
    );
};
