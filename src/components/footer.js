import React from 'react'
import {Link, withRouter} from 'react-router-dom'

const Footer = () => {
    return (
        <>
<footer>
				<div className="ft-top text-center text-md-left">
					<div className="container">
						<div className="ft-top-wrapper pb-54">
							<div className="row">
								<div className="col-md-6 col-lg-4 ft-col">
									<a href="index.html">
										<img src="images2/logo.webp" className="footerLogo" alt=""/>
									</a>
									<p className="style">We at Cafe Another Day, offers the best handpicked in food, services and ambience catering at the posh locality of West Delhi in most centralize hub of Janakpuri.</p>
									<div className="social ml-3">
										<a href="https://twitter.com/cafeanotherday/">
											<i className="zmdi zmdi-twitter mr-3"></i>
										</a>
										<a href="https://www.facebook.com/cafeanotherday/">
											<i className="zmdi zmdi-facebook-box mr-3"></i>
										</a>
										<a href="https://wa.me/919540442233">
											<i className="zmdi zmdi-whatsapp mr-3"></i>
										</a>
										<a href="https://www.instagram.com/cafeanotherday/">
											<i className="zmdi zmdi-instagram mr-3"></i>
										</a>
									</div>
								<div className="widget_wrap mt-3 ml-1">
									<a href="https://www.zomato.com/ncr/cafe-another-day-janakpuri-new-delhi?utm_source=referral-widget-19137854&utm_medium=review_badge&utm_campaign=widget-business" target="_newtab">
									<img src="https://www.zomato.com/widgets/review_badge?badge_type=rating_large&res_id=19137854&widget_lang=en"/>
									</a>
								</div>
								</div>
								<div className="col-md-6 col-lg-4 ft-col mt-51 pl-64">
									<h6>Address</h6>
									<div className="contact-part">
										<div className="contact-line">
											<a href="https://g.page/cafe-another-day?share" target="_blank">
											<span className="lnr lnr-home"></span>
											<span>G 12, DDA 1, District Centre, Janakpuri, New Delhi</span></a>
										</div>
										<div className="contact-line">
											<a href="tel:+919540442233">
												<span className="lnr lnr-phone-handset"></span>
												<span> + (91) 9540442233</span>
											</a>
										</div>
										<div className="contact-line">
											<a href="#">
												<span className="lnr lnr-earth"></span>
												<span> www.cafeanotherday.com</span>
											</a>
										</div>			
										<div className="contact-line">
											<span className="lnr lnr-clock"></span>
											<span>Mon - Sun: 7AM - 10PM</span>
										</div>
									</div>
								</div>
								<div className="col-md-6 col-lg-4 ft-col mt-51 pl-30">
									<h6 className="mb-33">Find us</h6>
									<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.974371785989!2d77.07964091534448!3d28.630530190921768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05df615b80b7%3A0xe56089416be86677!2sCAFE%20ANOTHER%20DAY!5e0!3m2!1sen!2sin!4v1604590435021!5m2!1sen!2sin" width="300" height="250" frameBorder="0" style={{border: "0"}} allowFullScreen="" aria-hidden="false" tabIndex="0"> Find US</iframe>
									
								</div>
							</div>	
						</div>
					</div>
				</div>
				<div className="ft-bot">
					<div className="container">
						@ 2020 Cafe Another Day. Developed by Nibodh Solutions			
					</div>
				</div>
			</footer>
    </>
    )
}

export default withRouter(Footer)
