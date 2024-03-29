import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

import Home from './components/Home'
import ProductDetails from './components/product/ProductDetails'

// Cart Imports
import Cart from './components/cart/Cart'
import Shipping from './components/cart/Shipping'
import ConfirmOrder from './components/cart/ConfirmOrder'
import Payment from './components/cart/Payment'
import OrderSuccess from './components/cart/OrderSuccess'

// Order Imports
import ListOrders from './components/order/ListOrders'
import OrderDetails from './components/order/OrderDetails'

// Auth or User imports
import Login from './components/user/Login'
import Register from './components/user/Register'
import Profile from './components/user/Profile'
import UpdateProfile from './components/user/UpdateProfile'
import UpdatePassword from './components/user/UpdatePassword'
import ForgotPassword from './components/user/ForgotPassword'
import NewPassword from './components/user/NewPassword'

// Admin Imports
import Dashboard from './components/admin/Dashboard'
import ProductsList from './components/admin/ProductsList'
import NewProduct from './components/admin/NewProduct'
import UpdateProduct from './components/admin/UpdateProduct'
import OrdersList from './components/admin/OrdersList'
import ProcessOrder from './components/admin/ProcessOrder'
import UsersList from './components/admin/UsersList'
import UpdateUser from './components/admin/UpdateUser'
import ProductReviews from './components/admin/ProductReviews'


import ProtectedRoute from './components/route/ProtectedRoute'
import { loadUser } from './actions/userActions'
import { useSelector } from 'react-redux'
import store from './store'
import axios from 'axios'

import Homepage from './components/Homepage'
import Pasta from './components/menu/Pasta'
import Dessert from './components/menu/Dessert'
import Seafood from './components/menu/Seafood'
import Chicken from './components/menu/Chicken'
import Beef from './components/menu/Beef'
import Pork from './components/menu/Pork'
import Special from './components/menu/Special'

import Aboutus from './components/page/AboutUs'
import Contactus from './components/page/ContactUs'


function App() {

  useEffect(() =>{
    store.dispatch(loadUser())
  },[])

  const { user, isAuthenticated, loading } = useSelector(state => state.auth)

  return (
    <Router>
      <div className="App">
      {!loading && (!isAuthenticated || user.role !== 'admin') && (
        <Header />
        )}
        <Route path="/" component={Homepage} exact />
        <Route path="/aboutus" component={Aboutus} exact />

        <div className="container container-fluid">
          
          {/* <Route path="/" component={Home} exact /> */}
          
          <Route path="/search/:keyword" component={Home} />
          <Route path="/product/:id" component={ProductDetails} exact />

          <Route path="/contactus" component={Contactus} exact />

          <Route path="/menu/pasta" component={Pasta} exact />
          <Route path="/menu/dessert" component={Dessert} exact />
          <Route path="/menu/seafood" component={Seafood} exact />
          <Route path="/menu/chicken" component={Chicken} exact />
          <Route path="/menu/beef" component={Beef} exact />
          <Route path="/menu/pork" component={Pork} exact />
          <Route path="/menu/special" component={Special} exact />

          <Route path="/cart" component={Cart} exact />
          <Route path="/shipping" component={Shipping} />
          <Route path="/confirm" component={ConfirmOrder} exact />
          <Route path="/success" component={OrderSuccess} />
          <Route path="/payment" component={Payment} />

          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/password/forgot" component={ForgotPassword} exact />
          <Route path="/password/reset/:token" component={NewPassword} exact />
          
          <ProtectedRoute path="/orders/me" component={ListOrders} exact />
          <ProtectedRoute path="/order/:id" component={OrderDetails} exact />
        </div>

        <ProtectedRoute path="/profile" component={Profile} exact />
        <ProtectedRoute path="/profile/update" component={UpdateProfile} exact />
        <ProtectedRoute path="/password/update" component={UpdatePassword} exact />
        <ProtectedRoute path="/dashboard" isAdmin={true} component={Dashboard} exact />
        <ProtectedRoute path="/admin/products" isAdmin={true} component={ProductsList} exact />
        <ProtectedRoute path="/admin/product" isAdmin={true} component={NewProduct} exact />
        <ProtectedRoute path="/admin/product/:id" isAdmin={true} component={UpdateProduct} exact />
        <ProtectedRoute path="/admin/orders" isAdmin={true} component={OrdersList} exact />
        <ProtectedRoute path="/admin/order/:id" isAdmin={true} component={ProcessOrder} exact />
        <ProtectedRoute path="/admin/users" isAdmin={true} component={UsersList} exact />
        <ProtectedRoute path="/admin/user/:id" isAdmin={true} component={UpdateUser} exact />
        <ProtectedRoute path="/admin/reviews" isAdmin={true} component={ProductReviews} exact />

        {!loading && (!isAuthenticated || user.role !== 'admin') && (
          <Footer />
        )}
      </div>
    </Router>
  );
}

export default App;
