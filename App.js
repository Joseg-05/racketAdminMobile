import React from "react";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { userReducer } from "./store/reducer/userReducer";
import thunk from "redux-thunk";

import { RootStackNavigator } from "./navigators/RootStackNavigator";

const store = createStore(userReducer, applyMiddleware(thunk));

const App = (props) => {
    return (
        <Provider store={store}>
            <RootStackNavigator {...props} />
        </Provider>
    );
};

// test

export default App;
