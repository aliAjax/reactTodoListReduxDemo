import React, { Component, Fragment } from "react";
import store from "./store/store";
import { Provider } from "react-redux";

import Filter from "./component/filter";
import Input from "./component/input";
import List from "./component/list"

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <Input />
                    <List />
                    <Filter />
                </Fragment>
            </Provider>      
        )
    }
}