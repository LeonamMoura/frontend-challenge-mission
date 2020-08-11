import React from 'react'
import {Route, Switch} from 'react-router-dom';
import HomePage from './Pages/HomePage'
import AddProductPage from './Pages/AddProductPage';
import CartPage from './Pages/CartPage';



const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/add-product" exact component={AddProductPage} />
            <Route path="/cart" exact component={CartPage} />>
        </Switch>
    )
}

export default Routes