import React from 'react'
import { Fragment} from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { logout } from '../../actions/userActions'

import '../../App.css'

const Header1 = () => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { user, loading } = useSelector(state => state.auth)
    const { cartItems } = useSelector(state => state.cart)

    const logoutHandler = () => {
        dispatch(logout());
        alert.success('Logged out successfully.')
    }

    return (
        <Fragment>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">

                <a class="navbar-brand" href="/">
                    <img src="/images/ham_logo.png" />
                </a>

                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="navbar-nav">

                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home</a>
                        </li>
                        
                        <li class="nav-item dropdown active">

                            <a class="nav-link" href="home"
                                id="navbarDropdownMenuLink" data-toggle="dropdown">Menu
                            </a>

                            <li class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                
                                <a class="nav-link" href="/menu/pasta">Pasta's & Noodles</a>
                                <a class="nav-link" href="/menu/dessert">Desserts</a>
                                <a class="nav-link" href="/menu/seafood">Seafood</a>
                                <a class="nav-link" href="/menu/chicken">Chicken</a>
                                <a class="nav-link" href="/menu/beef">Beef</a>
                                <a class="nav-link" href="/menu/pork">Pork</a>
                                <a class="nav-link" href="/menu/special">Special Orders</a>

                            </li>

                        </li>

                        <li class="nav-item">
                            <a class="nav-link active" href="/aboutus">About us</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="/contactus">Contact us</a>
                        </li>
                    </ul>

                    <ul class="navbar-nav ml-md-auto">
                        
                        <li class="nav-item active">
                            <a class="nav-link" href="/cart">Cart<span id="cart_count">  {cartItems.length}</span></a>
                        </li>
        
                        <li class="nav-item dropdown ">
                            
                            <a type="button" class="nav-link" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" 
                            aria-haspopup="true" aria-expanded="false" >{user && user.name}</a>
                            
                            {/* <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                
                                {user && user.role === 'admin' && (
                                    <a class="dropdown-item" href="/Dashboard">Dashboard</a> 
                                )}
                                    <a class="dropdown-item" href="/orders/me">Orders</a> 
                                    <a class="dropdown-item" href="/me">Profile</a>
                                    <a class="dropdown-item" href="#" onClick={logoutHandler}>Logout</a> 

                                
                            </div> */}
                        </li>

                    </ul>

                </div>
            </nav>
        </Fragment>
    )
}

export default Header1
