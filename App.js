import React from "react";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { userReducer } from "./store/reducer/userReducer";
import thunk from "redux-thunk";

import { useAuth } from "./hooks/useAuth";

import { RootStackNavigator } from "./navigators/RootStackNavigator";

//need thunk middleware for async redux
const store = createStore(userReducer, applyMiddleware(thunk));

const App = (props) => {
    const { auth, state } = useAuth();
    return (
        <Provider store={store}>
            <RootStackNavigator {...props} />
        </Provider>
    );
};

// test

export default App;
