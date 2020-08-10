import React from 'react'
import {Route, Switch} from 'react-router-dom';
import HomePage from './Pages/HomePage'
import AddProductPage from './Pages/AddProductPage';



const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/add-product" exact component={AddProductPage} />
        </Switch>
    )
}

export default Routes