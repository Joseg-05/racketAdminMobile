import React, { useEffect } from "react";

// import context
import { AuthContext } from "./context/AuthContext";
import { UserContext } from "./context/UserContext";
// import auth hook
import { useAuth } from "./hooks/useAuth";
import { createStore, applyMiddleware } from "redux";
import { Provider, useSelector } from "react-redux";
import { userReducer } from "./store/reducer/userReducer";
import thunk from "redux-thunk";

import { RootStackNavigator } from "./navigators/RootStackNavigator";

const store = createStore(userReducer, applyMiddleware(thunk));

const App = (props) => {
    //call cusom hook
    const { auth, state } = useAuth();

    return (
        <AuthContext.Provider value={auth}>
            <Provider store={store}>
                <RootStackNavigator {...props} />
            </Provider>
        </AuthContext.Provider>
    );
};

// test

export default App;
