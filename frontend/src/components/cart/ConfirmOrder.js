import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { createOrder, clearErrors  } from '../../actions/orderActions'
import MetaData from '../layout/MetaData'
import CheckoutSteps from './CheckoutSteps'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import{saveShippingInfo} from '../../actions/cartActions'
import { Button,Modal} from 'react-bootstrap';


const ConfirmOrder = ({ history }) => {

    const [show, setShow] = useState(false);
    const alert = useAlert();
    const dispatch = useDispatch();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { cartItems, shippingInfo } = useSelector(state => state.cart)
    const { user } = useSelector(state => state.auth)
    const { error } = useSelector(state => state.newOrder)


    // Calculate Order Prices
    const itemsPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)


    const order = {
        orderItems: cartItems,
        shippingInfo
    }


    const submitHandler = () => {
        order.itemsPrice = itemsPrice


        dispatch(createOrder(order))

        history.push('/success')
    }

    return (
        <Fragment>

            <MetaData title={'Confirm Order'} />

            <CheckoutSteps shipping confirmOrder />

            <div className="row d-flex justify-content-between">
                <div className="col-12 col-lg-8 mt-5 order-confirm">

                    <h4 className="mb-3">Shipping Info</h4>
                    <p><b>Name:</b> {shippingInfo.name}</p>
                    <p><b>Phone:</b> {shippingInfo.phoneNo}</p>
                    <p><b>City:</b> {shippingInfo.city}</p>
                    <p><b>Email:</b> {shippingInfo.email}</p>
                    <p><b>Region:</b> NCR </p>
                    <p className="mb-4"><b>Address:</b> {`${shippingInfo.address},${shippingInfo.barangay}, ${shippingInfo.city},  ${shippingInfo.postalCode}`}</p>
                    <p><b>Date:</b> {shippingInfo.date}</p>
                    <hr />
                    <h4 className="mt-4">Your Cart Items:</h4>

                    {cartItems.map(item => (
                        <Fragment>
                            <hr />
                            <div className="cart-item my-1" key={item.product}>
                                <div className="row">
                                    <div className="col-4 col-lg-2">
                                        <img src={item.image} alt="Laptop" height="45" width="65" />
                                    </div>

                                    <div className="col-5 col-lg-6">
                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                    </div>


                                    <div className="col-4 col-lg-4 mt-4 mt-lg-0">
                                        <p>{item.quantity} x ₱{item.price} = <b>₱{(item.quantity * item.price).toFixed(2)}</b></p>
                                    </div>

                                </div>
                            </div>
                            <hr />
                        </Fragment>
                    ))}



                </div>

                <div className="col-12 col-lg-3 my-4">
                    <div id="order_summary">
                        <h4>Order Summary</h4>



                        <hr />

                        <p>Total: <span className="order-summary-values">₱{itemsPrice}</span></p>

                        <hr />
                        <button id="checkout_btn" className="btn btn-primary btn-block" onClick={handleShow}>Confirm</button>
                    </div>
                </div>


            </div>




            <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
    >
        <Modal.Header closeButton>
        <Modal.Title>Confirmation Of Order</Modal.Title>
        </Modal.Header>
        <Modal.Body classname = "text-center">
        This is message is to confirm your order. Once you click the understood button your order will be processed. <br/>
        *this message will not close unless you click on Cancel or Understood*
        </Modal.Body>
        <Modal.Footer >
        <Button variant="secondary"  onClick={handleClose}>
            Cancel
        </Button>

        <Button

        variant="primary" type = 'submit' onClick={submitHandler}>Understood


        </Button>

        </Modal.Footer>
    </Modal>
        </Fragment>

    )
}
export default ConfirmOrder
