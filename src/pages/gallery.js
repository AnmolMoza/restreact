import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import { Helmet } from "react-helmet";

const Gallery = () => {
    return (
        <>
        <Helmet>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="description" content="Have a look at food masterpiece. Visit Café Another Day, for trying such a mouth-watering dish."/>
            <meta name="keywords" content="best shakes in delhi, best dishes to try in jnakapuri, places to eat in delhi, things to try in delhi, spicy pizza in new delhi, quick bites near me, family dining in new delhi, host party in new delhi, best chicken plates in janakpuri, cafe in janakpuri, exotic dishes in janakpuri, best cafe in new delhi"/>
            <meta name="author" content="Cafe Another Day powered by Nibodh Solutions"/>
            <meta name="robots" content="index,follow"/>
            <title>Gallery Of Cafe Another Day | Amazing delecious food at Janakpuri | Best Food Photos in New Delhi</title>
        </Helmet>
        	{/*HEADER ON DESKTOP*/}
			<header>
			<nav className="navbar-desktop">
				<div className="left">
					<a href="/" className="logo">
						<img src="images2/logo.webp" alt="Cafe Another Day" style={{maxWidth:"175%"}}/>
					</a>
				</div>
				<ul>
					<li className="has-children">
						<Link to="/">
							Home
						</Link>
					</li>
					<li className="has-children">
						<Link to="/menu">
							Menu
						</Link>
					</li>
					<li>
						<Link to="/about">
							About
						</Link>
					</li>
					<li className=" current has-children">
						<Link to="/gallery">
							Gallery
						</Link>
					</li>
					<li className="has-children" >
						<a href="tel:+919540442233">
							Contact
						</a>
					</li>
				</ul>
			</nav>

			<nav className="navbar-mobile">
				<div className="container">
					<div className="heading">
						<div className="left">
							<a href="#" className="navbar-mobile__toggler">
								<span></span>
								<span></span>
								<span></span>
							</a>
						</div>
						<a href="/" className="logo">
							<img src="images2/logo.webp" alt="Cafe Another Day" style={{maxWidth:""}}/>
						</a>
					</div>
				</div>
				<nav id="main-nav">
					<ul>
						<li className="" >
							<Link to="/home">Home</Link>
						</li>
						<li>
							<Link to="/menu">
								Menu
							</Link>
						</li>
						<li>
							<Link to="/about">
								About
							</Link>
						</li>
						<li className="current">
							<Link to="/gallery">
								Gallery
							</Link>
						</li>
						<li className="has-children">
							<a href="tel:+919540442233">
								Contact
							</a>
						</li>
					</ul>
				</nav>
			</nav>
        </header>
            {/*PAGE INFO*/}
			<section className="page-info set-bg" style={{backgroundImage: `url(${"images2/about-us.webp"})`}}>
				<div className="section-header">
					<h1 className="text-white">Gallery</h1>
					<span>~ Our Masterpieces ~</span>
				</div>
            </section>

            {/*TRAIT*/}
            <div className="section-primary pt-120 pb-120 gallery masonry">
                    <div className="container">
                        <div className="masonry-wrapper">
                            <a href="#" className="image-holder">
                                <img src="images2/g1.webp" alt=""/>
                                <div className="frame"></div>
                                <div className="inner">
                                    <div className="info">
                                        <h6>Farmhouse Pizza</h6>
                                        <span>Pizza</span>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="image-holder">
                                <img src="images2/2_kheema_pao.webp" alt="Chicken Keema Pao"/>
                                <div className="frame"></div>
                                <div className="inner">
                                    <div className="info">
                                        <h6>Chicken Keema Pao
                                        </h6>
                                        <span>Tiny Plates</span>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="image-holder fix-image">
                                <img src="images2/g1_h.webp" alt="Watermelon Feta"/>
                                <div className="frame"></div>
                                <div className="inner">
                                    <div className="info">
                                        <h6>Watermelon Feta
                                        </h6>
                                        <span>Salads</span>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="image-holder">
                                <img src="images2/3_HummusandPita.webp" alt="Hummus and Pita"/>
                                <div className="frame"></div>
                                <div className="inner">
                                    <div className="info">
                                        <h6>Hummus and Pita</h6>
                                        <span>Tiny Plates</span>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="image-holder">
                                <img src="images2/4_CajunSpicedMexicanChicken.webp" alt="Cajun Spiced Mexican Chicken"/>
                                <div className="frame"></div>
                                <div className="inner">
                                    <div className="info">
                                        <h6>Cajun Spiced Mexican Chicken</h6>
                                        <span>Non Veg Appetizers</span>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="image-holder fix-image">
                                <img src="images2/7_shake.webp" alt="Freak Shakes"/>
                                <div className="frame"></div>
                                <div className="inner">
                                    <div className="info">
                                        <h6>3 Shakes </h6>
                                        <span>Freak Shakes</span>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="image-holder">
                                <img src="images2/11.webp" alt="Paneer Tikka"/>
                                <div className="frame"></div>
                                <div className="inner">
                                    <div className="info">
                                        <h6>Paneer Tikka </h6>
                                        <span>Veg Appetizers</span>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="image-holder">
                                <img src="images2/6_dal.webp" alt="Dal Makhani"/>
                                <div className="frame"></div>
                                <div className="inner">
                                    <div className="info">
                                        <h6>Dal Makhani and Naan</h6>
                                        <span>Veg Mains</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                
			{/*CLICK ON TOP*/}
			<div className="click-to-top">
				<span className="lnr lnr-arrow-up"></span>
			</div>
        </>
    )
}

export default Gallery