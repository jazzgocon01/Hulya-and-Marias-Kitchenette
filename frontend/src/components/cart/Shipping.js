import React, { Fragment, useState } from 'react'
//import { countries } from 'countries-list'

import MetaData from '../layout/MetaData'
import CheckoutSteps from './CheckoutSteps'

import { useDispatch, useSelector } from 'react-redux'
import { saveShippingInfo } from '../../actions/cartActions'

const Shipping = ({ history }) => {

// returns { regions: [...], provinces: [...], citiies: [...] }
var philippines = require('philippines');

// to get individual data
var regions = require('philippines/regions');
var provinces = require('philippines/provinces');
var cities = require('philippines/cities');
    //const philippines = Object.values(philippines)

    const { shippingInfo } = useSelector(state => state.cart)

    const [address, setAddress] = useState(shippingInfo.address)
    const [city, setCity] = useState(shippingInfo.city)
    const [postalCode, setPostalCode] = useState(shippingInfo.postalCode)
    const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo)

    const [date, setDate] = useState(shippingInfo.date)
    const [name, setName] = useState(shippingInfo.name)

    const [barangay, setBarangay] = useState(shippingInfo.barangay)
    const [province] = useState("Metro Manila")
    //const [region, setRegion] = useState(shippingInfo.region)
    const [email, setEmail] = useState(shippingInfo.email)

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault()

        dispatch(saveShippingInfo({ address, city, phoneNo, postalCode,  barangay, province, email, name, date }))
        history.push('/confirm')
    }

    return (
        <Fragment>

            <MetaData title={'Shipping Info'} />

            <CheckoutSteps shipping />

            <div className="row wrapper">
                <div className="col-10 col-lg-5">
                    <form className="shadow-lg" onSubmit={submitHandler}>
                        <h1 className="mb-4">Shipping Info</h1>


                        <div className="form-group">
                            <label htmlFor="address_field">Name: </label>
                            <input
                                type="text"
                                id="address_field"
                                className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="country_field">Cities</label>
                            <select
                                id="country_field"
                                className="form-control"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                required
                            >
                                <option> - </option>

                                {cities.map(city => {
                                        if(city.province == 'MM') {
                                            return <option key={city.name} value={city.name}>{city.name}</option>
                                        }
                                    })}


                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="barangay_field">Barangay</label>
                            <input
                                type="text"
                                id="barangay_field"
                                className="form-control"
                                value={barangay}
                                onChange={(e) => setBarangay(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="address_field">Address</label>
                            <input
                                type="text"
                                id="address_field"
                                className="form-control"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="postal_code_field">Postal Code</label>
                            <input
                                type="number"
                                id="postal_code_field"
                                className="form-control"
                                value={postalCode}
                                onChange={(e) => setPostalCode(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="city_field">Email</label>
                            <input
                                type="email"
                                id="email_field"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone_field">Phone No</label>
                            <input
                                type="phone"
                                id="phone_field"
                                className="form-control"
                                value={phoneNo}
                                onChange={(e) => setPhoneNo(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone_field">Date of Order</label>
                            <input
                                type="date"
                                id="date_field"
                                className="form-control"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                required
                            />
                        </div>
                        <button
                            id="shipping_btn"
                            type="submit"
                            className="btn btn-block py-3"
                        >
                            CONTINUE
                            </button>
                    </form>
                </div>
            </div>

        </Fragment>
    )
}

export default Shipping
