import React, { Fragment } from 'react'
import Loader from '../layout/Loader'

const ContactUs = () => {

    return (
        <Fragment>

	<div class="row">
		<div class="image">
			<h1 id="ContactUsTxt">
				Contact Us
			</h1>
            <img className="HulyaAndMariaspng" alt="Bootstrap Image Preview" src="/images/contact_us.png"></img>
		</div>
	</div>
	<div class="row">
		<div class="col-md-1">
            <p></p>
		</div>
		<div class="col-md-5" classname="Left">


        <div >
            <h1 id="HowToContactUs">
				How to Contact Us
			</h1>
        </div>

        <div >
        <p id="ContactUsTxt">
        If you have any queries or concerns, do not hesitate to message us in
        any of the social media platforms. We will be sure to do our best to
        diligently answer all of your concerns.
        </p>
        </div>




		</div>
		<div class="col-md-5" id="Right">


            <div>

            <i class="fa fa-map-marker fa-2x" aria-hidden="true">  </i>

            <p id="MapTxt"> Sampaloc, Manila </p>
            </div>

            <div>
            <a href="https://www.facebook.com/hulyaandmaria" target="_blank">
            <i class="fa fa-facebook-official fa-2x" aria-hidden="true" id="FBLogo"> </i>
            <p id="FacebookTxt"> Hulya & Maria's Kitchenette </p>
            </a>
            </div>

            <div>
            <i class="fa fa-envelope-o fa-2x" aria-hidden="true"> </i>
            <p id="EmailTxt"> hulyaandmarias@gmail.com </p>
            </div>

            <div>
            <a href="https://www.instagram.com/hulyaandmarias/?hl=en" target="_blank">
            <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
            <p id="InstagramTxt"> @hulyaandmarias </p>
            </a>
            </div>
		</div>

		<div class="col-md-1">
            <p></p>
		</div>
	</div>

        </Fragment>
    )
}

export default ContactUs
