import React from 'react'
import { Fragment, useState } from 'react'

import MetaData from '../components/layout/MetaData'
import Loader from './layout/Loader'
import featured1 from '../components/pictures/featured1.png'
import aboutUS from '../components/pictures/aboutUS.png'
import contactUs from '../components/pictures/contactUs.png'
import menu from '../components/pictures/menu.png'

import '../App.css'


const Homepage = () => {
    return (
            <Fragment>
                <MetaData title='Home' />
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12 background">
                            <div class="row">
                                <div class="col-md-2">
                                </div>
                                <div class="col-md-8">
                                    <h1 class="title">
                                        Welcome to Hulya & Maria’s
						</h1>
                                </div>
                                <div class="col-md-2">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2">
                        </div>
                        <div class="col-md-8 marginbot">

                            <div class="row">
                                <div class="col-md-4 center">
                                    <h1>Menu</h1>
                                    <a href="/"><img class="img-rounded" alt="Bootstrap Thumbnail First"
                                        src={menu} ></img></a>
                                </div>
                                <div class="col-md-4">
                                    <h1>About us</h1>
                                    <a href="/aboutus"><img class="img-rounded" alt="Bootstrap Thumbnail Second"
                                        src={aboutUS}></img></a>
                                </div>

                                <div class="col-md-4">
                                    <h1 class="">Contact us</h1>
                                    <a href="/contactus"><img class="img-rounded" alt="Bootstrap Thumbnail Third"
                                        src={contactUs}></img></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                        </div>
                    </div>
                    <div class="row" >
                        <div class="col-md-12 padding">
                            <div class="carousel slide" id="carousel-635448">
                                <ol class="carousel-indicators">
                                    <li data-slide-to="0" data-target="#carousel-635448">
                                    </li>
                                    <li data-slide-to="1" data-target="#carousel-635448">
                                    </li>
                                    <li data-slide-to="2" data-target="#carousel-635448" class="active">
                                    </li>
                                </ol>
                                <div class="carousel-inner">
                                    <div class="carousel-item">
                                        <img class="d-block w-100" alt="Carousel Bootstrap First"
                                            src={featured1}></img>

                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" alt="Carousel Bootstrap Second"
                                            src={featured1}></img>

                                    </div>
                                    <div class="carousel-item active">
                                        <img class="d-block w-100" alt="Carousel Bootstrap Third"
                                            src={featured1}></img>

                                    </div>
                                </div> <a class="carousel-control-prev" href="#carousel-635448" data-slide="prev"><span
                                    class="carousel-control-prev-icon"></span> <span class="sr-only">Previous</span></a> <a
                                        class="carousel-control-next" href="#carousel-635448" data-slide="next"><span
                                            class="carousel-control-next-icon"></span> <span class="sr-only">Next</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
    )
}

export default Homepage
