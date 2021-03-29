import React, { Fragment, useState, useEffect } from 'react'

import MetaData from '../layout/MetaData'
import Product from '../product/Product'
import Loader from '../layout/Loader'

import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert';
import { getProducts } from '../../actions/productActions'


const Beef = ({ match }) => {

    const [currentPage] = useState(1)
    const [price] = useState([1, 1000])
    const [category] = useState('Beef')
    const [rating] = useState(0)

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, products, error, productsCount, resPerPage, filteredProductsCount } = useSelector(state => state.products)

    const keyword = match.params.keyword

    useEffect(() => {
        if (error) {
            return alert.error(error)
        }

        dispatch(getProducts(keyword, currentPage, price, category, rating));


    }, [dispatch, alert, error, keyword, currentPage, price, category, rating])


    let count = productsCount;
    if (keyword) {
        count = filteredProductsCount
    }

    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                    <MetaData title={'Laptops'} />

                    <h1 id="products_heading">Beef</h1>

                    <section id="products" className="container mt-5">
                        <div className="row">

                            {keyword ? (
                                <Fragment>
                                    <div className="col-6 col-md-3 mt-5 mb-5">
                                        <div className="col-6 col-md-9">
                                            <div className="row">
                                                {products.map(product => (
                                                    <Product key={product._id} product={product} col={4} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Fragment>
                            ) : (
                                products.map(product => (
                                    <Product key={product._id} product={product} col={3} />
                                ))
                            )}

                        </div>
                    </section>

                </Fragment>
            )}

        </Fragment>
    )
}

export default Beef
