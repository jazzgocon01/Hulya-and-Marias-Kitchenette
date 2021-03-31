import React from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'

const Sidebar = () => {


    const alert = useAlert();
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logout());
        alert.success('Logged out successfully.')
    }

    return (
        <div className="sidebar-wrapper">
            <nav id="sidebar">
                <ul className="list-unstyled components">
                    <li>
                        <Link to="/dashboard"><i className="fa fa-tachometer"></i> Dashboard</Link>
                    </li>

                    <li>
                        <a href="#productSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i
                            className="fa fa-product-hunt"></i> Products</a>
                        <ul className="collapse list-unstyled" id="productSubmenu">
                            <li>
                                <Link to="/admin/products"><i className="fa fa-clipboard"></i> All</Link>
                            </li>

                            <li>
                                <Link to="/admin/product"><i className="fa fa-plus"></i> Create</Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/admin/orders"><i className="fa fa-shopping-basket"></i> Orders</Link>
                    </li>

                    <li>
                        <Link to="/profile"><i className="fa fa-user"></i>‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎Profile</Link>
                    </li>

                    {/* <li>
                        <Link to="/admin/users"><i className="fa fa-users"></i> Users</Link>
                    </li> */}
                    {/* 
                    <li>
                        <Link to="/admin/reviews"><i className="fa fa-star"></i> Reviews</Link>
                    </li> */}

                </ul>
                <ul className="list-unstyled">
                    <li onClick={logoutHandler}>
                        <Link to="#"><i className="fa fa-sign-out" ></i>‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎Logout</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar
