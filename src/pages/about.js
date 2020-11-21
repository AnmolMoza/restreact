import {React, Fragment} from 'react'
import {Link} from 'react-router-dom'
import { Helmet } from "react-helmet";

const About = () => {
    return (
		<>
	<Helmet>
		<meta charset="UTF-8"/>
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
		<meta name="description" content="Cafe Another Day is the perfect place to host all your celebrations & moods. Rejoice your loved one's birthday party or a romantic candlelight dinner with your Valentine at our cafe. Host your best friend's bachelor/bachelorette party at our classy lounge. Invite your friends & party without a reason at our pocket-friendly restaurant. Celebrate every occasion close to your heart, only at Cafe Another Day."/>
		<meta name="keywords" content=" best cafes in delhi, restaurants in west delhi, best restaurants in janakpuri, cafe and lounge in delhi , group events in janakpuri, best restaurants in west delhi, best cafe lounge in delhi, Best freakshake in delhi, west indian food near me , birthday party venues in delhi, kitty party venues in delhi"/>
		<meta name="author" content="Cafe Another Day powered by Nibodh Solutions"/>
		<meta name="robots" content="index,follow"/>
		<title>About Cafe Another Day | Story of Best Party Place in Janakuri, New Delhi</title>
      </Helmet>
		    {/*HEADER ON DESKTOP*/}
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
					<li className="current">
						<Link to="/about">
							About
						</Link>
					</li>
					<li className="has-children">
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
						<li className="current">
							<Link to="/about">
								About
							</Link>
						</li>
						<li>
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
            <div className="page-info set-bg" style={{backgroundImage: `url(${"images2/about-us.webp"})`}}>
				<div className="section-header">
					<h1 className="text-white">About us</h1>
					<span>~ Our story ~</span>
				</div>
            </div>

                {/*TRAIT*/}
			    <div className="trait-content re-style">
			    	<div className="container">
			    		<div className="row justify-content-center">
				    		<div className="col-md-5 col-lg-4 col-xxl-3">
				    			<div className="trait-col re-style">
									<img src="images2/serve-icon.webp" alt=""/>
									<p>Passion to create an ambience for your family & friends.</p>
								</div>
				    		</div>
				    		<div className="col-md-5 col-lg-4 offset-md-1 offset-xxl-0 col-xxl-3">
				    			<div className="trait-col re-style">
									<img src="images2/fresh-food-icon.webp" alt=""/>
									<p>Passion to create a place to explore the finest dining experience.</p>
								</div>
				    		</div>
				    		<div className="col-md-5 col-lg-4 col-xxl-3">
				    			<div className="trait-col re-style mb-md-0">
									<img src="images2/hot-food-icon.webp" alt=""/>
									<p>Passion to create a hub for all types of celebration & social gathering.</p>
								</div>
				    		</div>
				    		<div className="col-md-5 col-lg-4 offset-md-1 offset-xxl-0 col-xxl-3">
				    			<div className="trait-col re-style mb-0">
									<img src="images2/coffee-icon.webp" alt=""/>
									<p>Passion to create a location to hold workplace meeting & success parties.</p>
								</div>
				    		</div>
				    	</div>
			    	</div>
                </div>
            
            {/*WHAT WE CAN DO*/}
            <div className="section-primary our-service ">
				<div className="container">
					<div className="section-header">
						<h2 className="text-white">What we can do</h2>
						<span>~ Experiences on food ~</span>
					</div>		
					<div className="row">
						<div className="col-md-6 col-lg-4">
							<div className="our-service-col">
								<h3>- Family -</h3>
								<img src="images2/fresh-food-white-icon.webp" alt=""/>
								<p>Our place is the perfect place to host & celebrate your loved one's birthday party or marriage anniversary.</p>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="our-service-col mb-md-0">
								<h3>- Corporate -</h3>
								<img src="images2/hot-food-white-icon.webp" alt=""/>
								<p>Host your team’s success party or annual party at our classy lounge at a pocket friendly budget.</p>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="our-service-col mb-0">
								<h3>- Youngster -</h3>
								<img src="images2/coffee-white-icon.webp" alt=""/>
								<p>Perfect venue for your best friend's bachelor/bachelorette party or for a romantic candlelight dinner with your Valentine.</p>
							</div>
						</div>
					</div>		
		    	</div>		    	
            </div>
            
            {/*OUR STORY*/}
            <div  className="section-primary about-us pt-150 pb-120">
				<div className="container">
					<div className="row">
						<div className="col-md-6 pr-md-0">
							<div className="image-holder">
								<img src="images2/about-us-3.jpg" alt=""/>
							</div>
						</div>
						<div className="col-md-6 pl-md-0">
							<div className="about-us-col">
								<div className="section-header">
									<h2>Our Story</h2>
									<span className="fifth-color">~ For more add ~</span>
								</div>
								<p>Cafe Another Day is the perfect place to host all your celebrations & moods. Rejoice your loved one's birthday party or a romantic candlelight dinner with your Valentine at our cafe. Host your best friend's bachelor/bachelorette party at our classy lounge. Invite your friends & party without a reason at our pocket-friendly restaurant. Celebrate every occasion close to your heart, only at Cafe Another Day.</p>
							</div>
						</div>
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

export default About;