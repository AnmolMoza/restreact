import React from 'react'
import {Link} from 'react-router-dom'
import { Helmet } from "react-helmet";


const Home = () => {
    return (
		<>
		<Helmet>
			<meta charset="UTF-8"/>
			<title>Cafe Another Day | Janakpuri | Party Restaurant</title>
			<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
			<meta name="description" content="Located in a popular vicinity of Janakpuri of West Delhi, Café Another Day is your destination for great food, drinks, and entertainment."/>
			<meta name="keywords" content=" best cafes in delhi, restaurants in west delhi, best restaurants in janakpuri, cafe and lounge in delhi , group events in janakpuri, best restaurants in west delhi, best cafe lounge in delhi, Best freakshake in delhi, west indian food near me , birthday party venues in delhi, kitty party venues in delhi"/>
			<meta name="author" content="Cafe Another Day powered by Nibodh Solutions"/>
			<meta name="robots" content="index,follow"/>
		</Helmet>
		    {/*HEADER ON DESKTOP*/}
			<header>
			<nav class="navbar-desktop">
				<div class="left">
					<a href="index" class="logo">
						<img src="images2/logo.webp" alt="Cafe Another Day" style={{maxWidth:"175%"}}/>
					</a>
				</div>
				<ul>
					<li class="current has-children">
						<Link to="/">
							Home
						</Link>
					</li>
					<li class="has-children">
						<Link to="/menu">
							Menu
						</Link>
					</li>
					<li>
						<Link to="/about">
							About
						</Link>
					</li>
					<li class="has-children">
						<Link to="/gallery">
							Gallery
						</Link>
					</li>
					<li class="has-children" >
						<a href="tel:+919540442233">
							Contact
						</a>
					</li>
				</ul>
			</nav>

			<nav class="navbar-mobile">
				<div class="container">
					<div class="heading">
						<div class="left">
							<a href="#" class="navbar-mobile__toggler">
								<span></span>
								<span></span>
								<span></span>
							</a>
						</div>
						<a href="index" class="logo">
							<img src="images2/logo.webp" alt="Cafe Another Day" style={{maxWidth:""}}/>
						</a>
					</div>
				</div>
				<nav id="main-nav">
					<ul>
						<li class="current" >
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
						<li>
							<Link to="/gallery">
								Gallery
							</Link>
						</li>
						<li class="has-children">
							<a href="tel:+919540442233">
								Contact
							</a>
						</li>
					</ul>
				</nav>
			</nav>
        </header>
        {/*CAROUSEL*/}
		<div id="carouselExampleIndicators" className="carousel slide mt-0" data-ride="carousel">
  				<ol className="carousel-indicators">
    				<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    				<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    				<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  				</ol>
  			<div className="carousel-inner">
    			<div className="carousel-item active">
      				<img className="d-block w-100" src="images2/2.jpeg" alt="First slide"/>  
    			</div>
    		<div className="carousel-item">
      			<img className="d-block w-100" src="images2/6.jpeg" alt="Second slide"/>
    		</div>
    		<div class="carousel-item">
      			<img className="d-block w-100" src="images2/7.webp" alt="Third slide"/>
    		</div>
  		</div>
		<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
			<span className="carousel-control-prev-icon" aria-hidden="true"></span>
    		<span className="sr-only">Previous</span>
		</a>
		<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
			<span className="carousel-control-next-icon" aria-hidden="true"></span>
    		<span className="sr-only">Next</span>
		</a>
		</div>

        {/*TRAIT*/}
        <div className="trait-content re-style" style={{padding:'40'}}>
            <div className="container">
                <div className="section-header">
                    <h1 className="text-black">Cafe Another Day</h1>
                    <span>~ Our Restaurant's Offering  ~</span>
                </div>	
                <div className="row justify-content-center">
                    <div className="col-md-5 col-lg-4 col-xxl-3">
                        <div className="trait-col re-style">
                            <img src="images2/ambience.webp" alt=""/>
                            <h5>Exotic Ambience</h5>
                            <p>The Multi cuisine restaurant offers a classy yet totally ethnic experience. We have a perfect blend of lounge and dining experience which gives you a pleasant experience.</p>
                        </div>
                    </div>
                    <div className="col-md-5 col-lg-4 offset-md-1 offset-xxl-0 col-xxl-3">
                        <div className="trait-col re-style">
                            <img src="images2/dine.webp" alt=""/>
                            <h5>Gourmet Experience</h5>
                            <p>We offer gourmet diner from delicious North Indian to the marvellous Mughlai. Don't forget to try our Pizza and Beverages that will blow your mind.</p>
                        </div>
                    </div>
                    <div className="col-md-5 col-lg-4 col-xxl-3">
                        <div className="trait-col re-style mb-md-0">
                            <img src="images2/live.webp" alt=""/>
                            <h5>Live Entertainment</h5>
                            <p >We at Cafe Another Day, offers a live music experience like none other in Janakpuri. We have a dedicated area for bands to perform, so that you can enjoy the night with your gang.</p>
                        </div>
                    </div>
                    <div className="col-md-5 col-lg-4 offset-md-1 offset-xxl-0 col-xxl-3">
                        <div className="trait-col re-style mb-0">
                            <img src="images2/party.webp" alt=""/>
                            <h5>Parties & Events</h5>
                            <p>Best place to host your special events in Janakpuri. From anniversaries to parties, we have covered it all. We promise you a great time at Cafe Another Day. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        {/*ABOUT US*/}
        <div className="container">
					<div className="about-us-wrapper set-bg" data-bg="images2/19.webp">
						<img src="images2/10.webp" alt="" className="about-us-1"/>
						<div className="about-us-board">
							<div className="inner">
								<div className="heading">
				  					<h2>About Us</h2>
					  				<img src="images/border-5.webp" alt="" className="border-place-1"/>
				  				</div>
				  				<div className="body">
				  					<p>And the story begins with the passion to create the hub for youngsters and families, where they can have a classy dining experience. We at Cafe Another Day, offers the best handpicked in food, services and ambience catering at the posh locality of West Delhi in most centralize hub of Janakpuri. Celebrated for the ethnic experience and cuisine that is inspired by the essence of robust flavours and taste.</p>
				  				</div>
							</div>
						</div>
						<img src="images2/11.webp" alt="" className="about-us-2"/>
					</div>
		</div>

        {/*MENU*/}
		<div className="section-primary pt-133 pb-113" style={{paddingTop:"1px"}}>
        	<div className="container-fluid">
		    		<div className="our-menu-wrapper">
		    			<div className="image-holder">
		    				<img src="images2/menu-bg.webp" alt=""/>
		    			</div>
		    			<div className="right-content">
		    				<div className="inner">
		    					<div className="section-header">
									<h2 className="text-white">Our Food menu</h2>
									<span>~ See what we offer ~</span>
								</div>	
			    				<div id="tabs">
									<div className="row menu-navigation">
										<div className="col-md-10 col-xl-10 mx-auto">
											<ul>
												<li className="">
													<a href="#appetizer">
														<img src="images2/appe.webp" alt="Appetizer Icon"/>
														<span>Appetizer</span>
													</a>
												</li>
												<li className="">
													<a href="#main-course">
														<img src="images2/main.webp" alt="Main Course"/>
														<span>Main Course</span>
													</a>
												</li>
												<li className="mb-0">
													<a href="#drinks">
														<img src="images2/beve.webp" alt="Beverages"/>
														<span>Beverages</span>
													</a>
												</li>
												<li className="mb-0">
													<a href="#deserts">
														<img src="images2/des.webp" alt="Desserts"/>
														<span>Desserts</span>
													</a>
												</li>
											</ul>
										</div>
									</div>
									<div className="content">
										<div className="row justify-content-around" id="appetizer">
											<div className="col-md-6 col-lg-5 col-xl-6 menu-holder fixed left-40">
												<div className="menu-item">
													<h5 className="color-fff">
														Pao Bhaji Bruschetta 
														<span className="dots"></span>
														<span className="price">
															<span>₹</span>
															249
														</span>
													</h5>
												</div>
											</div>
											<div className="col-md-6 col-lg-5 col-xl-6 menu-holder fixed right-40">
												<div className="menu-item">
													<h5 className="color-fff">
														Chilli Cheese Toasties
														<span className="dots"></span>
														<span className="price">
															<span>₹</span>
															 249
														</span>
													</h5>
												</div>
											</div>
											<div className="col-md-6 col-lg-5 col-xl-6 menu-holder fixed left-40">
												<div className="menu-item">
													<h5 className="color-fff">
														Falafel Balls with Hummus Dip
														<span className="dots"></span>
														<span className="price">
															<span>₹</span>
															309
														</span>
													</h5>
												</div>
											</div>
											<div className="col-md-6 col-lg-5 col-xl-6 menu-holder fixed right-40">
												<div className="menu-item">
													<h5 className="color-fff">
														Amritsari Fish Fry 
														<span className="dots"></span>
														<span className="price">
															<span>₹</span>
															435
														</span>
													</h5>
												</div>
											</div>
											<div className="col-md-6 col-lg-5 col-xl-6 menu-holder fixed left-40">
												<div className="menu-item">
													<h5 className="color-fff">
														Chilli Cheese Toasties
														<span className="dots"></span>
														<span className="price">
															<span>₹</span>
															249
														</span>
													</h5>
													<ul>
														<li>
															<a href="">Chicken</a>
														</li>
														<li>
															<a href="">Italian</a>
														</li>
													</ul>
												</div>
											</div>
											<div className="col-md-6 col-lg-5 col-xl-6 menu-holder fixed right-40">
												<div className="menu-item">
													<h5 className="color-fff">
														<a href="shop-single.html">Grilled lamb</a>
														<span className="dots"></span>
														<span className="price">
															<span>₹</span>
															37
														</span>
													</h5>
													<ul>
														<li>
															<a href="">Chicken</a>
														</li>
														<li>
															<a href="">Italian</a>
														</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="row justify-content-around" id="main-course">
											<div className="col-md-6 col-lg-5 col-xl-6 menu-holder fixed left-40">
												<div className="menu-item">
													<h5 className="color-fff">
														<a href="shop-single.html">Chicken tikka masala</a>
														<span className="dots"></span>
														<span className="price">
															<span>₹</span>
															56
														</span>
													</h5>
													<ul>
														<li>
															<a href="">Chicken</a>
														</li>
														<li>
															<a href="">Italian</a>
														</li>
													</ul>
												</div>
											</div>
											<div className="col-md-6 col-lg-5 col-xl-6 menu-holder fixed right-40">
												<div className="menu-item">
													<h5 className="color-fff">
														<a href="shop-single.html">Thai grilled chicken</a>
														<span className="dots"></span>
														<span className="price">
															<span>₹</span>
															69
														</span>
													</h5>
													<ul>
														<li>
															<a href="">Chicken</a>
														</li>
														<li>
															<a href="">Italian</a>
														</li>
													</ul>
												</div>
											</div>
											<div className="col-md-6 col-lg-5 col-xl-6 menu-holder fixed left-40">
												<div className="menu-item">
													<h5 className="color-fff">
														<a href="shop-single.html">Sabji Kohrapuri</a>
														<span className="dots"></span>
														<span className="price">
															<span>₹</span>
															56
														</span>
													</h5>
													<ul>
														<li>
															<a href="">Chicken</a>
														</li>
														<li>
															<a href="">Italian</a>
														</li>
													</ul>
												</div>
											</div>
											<div className="col-md-6 col-lg-5 col-xl-6 menu-holder fixed right-40">
												<div className="menu-item">
													<h5 className="color-fff">
														<a href="shop-single.html">Pink sausage</a>
														<span className="dots"></span>
														<span className="price">
															<span>₹</span>
															44
														</span>
													</h5>
													<ul>
														<li>
															<a href="">Chicken</a>
														</li>
														<li>
															<a href="">Italian</a>
														</li>
													</ul>
												</div>
											</div>
											<div className="col-md-6 col-lg-5 col-xl-6 menu-holder fixed left-40">
												<div className="menu-item">
													<h5 className="color-fff">
														<a href="shop-single.html">Sabji Kohrapuri</a>
														<span className="dots"></span>
														<span className="price">
															<span>₹</span>
															32
														</span>
													</h5>
													<ul>
														<li>
															<a href="">Chicken</a>
														</li>
														<li>
															<a href="">Italian</a>
														</li>
													</ul>
												</div>
											</div>
											<div className="col-md-6 col-lg-5 col-xl-6 menu-holder fixed right-40">
												<div className="menu-item">
													<h5 className="color-fff">
														<a href="shop-single.html">Grilled lamb</a>
														<span className="dots"></span>
														<span className="price">
															<span>₹</span>
															37
														</span>
													</h5>
													<ul>
														<li>
															<a href="">Chicken</a>
														</li>
														<li>
															<a href="">Italian</a>
														</li>
													</ul>
												</div>
											</div>
											<div className="col-md-6 col-lg-5 col-xl-6 menu-holder fixed left-40">
												<div className="menu-item">
													<h5 className="color-fff">
														<a href="shop-single.html">Bacon coil baked</a>
														<span className="dots"></span>
														<span className="price">
															<span>₹</span>
															23
														</span>
													</h5>
													<ul>
														<li>
															<a href="">Chicken</a>
														</li>
														<li>
															<a href="">Italian</a>
														</li>
													</ul>
												</div>
											</div>
											<div className="col-md-6 col-lg-5 col-xl-6 menu-holder fixed right-40">
												<div className="menu-item">
													<h5 className="color-fff">
														<a href="shop-single.html">Chicken wings</a>
														<span className="dots"></span>
														<span className="price">
															<span>₹</span>
															39
														</span>
													</h5>
													<ul>
														<li>
															<a href="">Chicken</a>
														</li>
														<li>
															<a href="">Italian</a>
														</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="row justify-content-around" id="drinks">
											<div className="col-md-6 col-lg-5 col-xl-6 menu-holder fixed left-40">
												<div className="menu-item">
													<h5 className="color-fff">
														<a href="shop-single.html">Chicken tikka masala</a>
														<span className="dots"></span>
														<span className="price">
															<span>₹</span>
															56
														</span>
													</h5>
													<ul>
														<li>
															<a href="">Chicken</a>
														</li>
														<li>
															<a href="">Italian</a>
														</li>
													</ul>
												</div>
											</div>
											<div className="col-md-6 col-lg-5 col-xl-6 menu-holder fixed right-40">
												<div className="menu-item">
													<h5 className="color-fff">
														<a href="shop-single.html">Thai grilled chicken</a>
														<span className="dots"></span>
														<span className="price">
															<span>₹</span>
															69
														</span>
													</h5>
													<ul>
														<li>
															<a href="">Chicken</a>
														</li>
														<li>
															<a href="">Italian</a>
														</li>
													</ul>
												</div>
											</div>
											<div className="col-md-6 col-lg-5 col-xl-6 menu-holder fixed left-40">
												<div className="menu-item">
													<h5 className="color-fff">
														<a href="shop-single.html">Sabji Kohrapuri</a>
														<span className="dots"></span>
														<span className="price">
															<span>₹</span>
															56
														</span>
													</h5>
													<ul>
														<li>
															<a href="">Chicken</a>
														</li>
														<li>
															<a href="">Italian</a>
														</li>
													</ul>
												</div>
											</div>
											<div className="col-md-6 col-lg-5 col-xl-6 menu-holder fixed right-40">
												<div className="menu-item">
													<h5 className="color-fff">
														<a href="shop-single.html">Pink sausage</a>
														<span className="dots"></span>
														<span className="price">
															<span>₹</span>
															44
														</span>
													</h5>
													<ul>
														<li>
															<a href="">Chicken</a>
														</li>
														<li>
															<a href="">Italian</a>
														</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="row justify-content-around" id="deserts">
											<div className="col-md-6 col-lg-5 col-xl-6 menu-holder fixed left-40">
												<div className="menu-item">
													<h5 className="color-fff">
														<a href="shop-single.html">Chicken tikka masala</a>
														<span className="dots"></span>
														<span className="price">
															<span>₹</span>
															56
														</span>
													</h5>
													<ul>
														<li>
															<a href="">Chicken</a>
														</li>
														<li>
															<a href="">Italian</a>
														</li>
													</ul>
												</div>
											</div>
											<div className="col-md-6 col-lg-5 col-xl-6 menu-holder fixed right-40">
												<div className="menu-item">
													<h5 className="color-fff">
														<a href="shop-single.html">Thai grilled chicken</a>
														<span className="dots"></span>
														<span className="price">
															<span>₹</span>
															69
														</span>
													</h5>
													<ul>
														<li>
															<a href="">Chicken</a>
														</li>
														<li>
															<a href="">Italian</a>
														</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="btn-holder">
											<a href="/menu" className="au-btn au-btn--hover round has-bd">View more</a>
										</div>
									</div>
								</div>
		    				</div>
		    			</div>
		    		</div>
		    	</div>
			</div>


            {/*FEATURE SLIDER*/}
			<div className="food-slider">
                <div id = "gallery" className="section-header">
					<h2 className="text-black">Photo Gallery</h2>
					<span>~ Our restaurant  ~</span>
				</div>	
		    	{/*OWL-CAROUSEL*/}
		    	<div className="owl-carousel owl-theme style" id="food-carousel">
		    	    <div className="item">
		    	    	<div className="image-holder">
		    	    		<a href="isn.com"><img src='images2/food.webp' alt="Dal Makhani at Cafe Another Day, Janakpuri"/></a>
		    	    		<div className="inner">
		    	    			<div className="item-info">
		    	    				<h4>
			    	    				<a href="https://www.zomato.com/ncr/cafe-another-day-janakpuri-new-delhi/order" target="_blank">Pizza</a>
			    	    			</h4>
			    	    		</div>
		    	    		</div>
		    	    	</div>
		    	    </div>
		    	    <div className="item">
		    	    	<div className="image-holder">
		    	    		<img src='images2/food_1.webp' alt="Dal Makhani at Cafe Another Day, Janakpuri"/>
		    	    		<div className="inner">
		    	    			<div className="item-info">
		    	    				<h4>
			    	    				<a href="https://www.zomato.com/ncr/cafe-another-day-janakpuri-new-delhi/order" target="_blank">Dal Makhani</a>
			    	    			</h4>
			    	    		</div>
		    	    		</div>
		    	    	</div>
		    	    </div>
		    	    <div className="item">
		    	    	<div className="image-holder">
		    	    		<img src='images2/food_2.webp' alt="Freak Shakes at Cafe Another Day, Janakpuri"/>
		    	    		<div className="inner">
		    	    			<div className="item-info">
		    	    				<h4>
			    	    				<a href="https://www.zomato.com/ncr/cafe-another-day-janakpuri-new-delhi/order" target="_blank">Freak Shakes</a>
			    	    			</h4>
		    	    			</div>
		    	    		</div>
		    	    	</div>
		    	    </div>
		    	    <div className="item">
		    	    	<div className="image-holder">
		    	    		<img src='images2/food_3.webp' alt="Pesto Pasta at Cafe Another Day, Janakpuri"/>
		    	    		<div className="inner">
		    	    			<div className="item-info">
		    	    				<h4>
			    	    				<a href="https://www.zomato.com/ncr/cafe-another-day-janakpuri-new-delhi/order" target="_blank">Pesto Pasta with Garlic Bread</a>
			    	    			</h4>
			    	    		</div>
		    	    		</div>
		    	    	</div>
		    	    </div>
		    	    <div className="item">
		    	    	<div className="image-holder">
		    	    		<img src='images2/amb.webp' alt="Group Sitting at Cafe Another Day, Janakpuri"/>
		    	    		<div className="inner">
		    	    			<div className="item-info">
		    	    				<h4>
			    	    				<a href="https://www.instagram.com/cafeanotherday/" target="_blank">Group Sitting</a>
			    	    			</h4>
			    	    		</div>
		    	    		</div>
		    	    	</div>
		    	    </div>
		    	    <div className="item">
		    	    	<div className="image-holder">
		    	    		<img src='images2/amb_1.webp' alt="Pleasant Atmosphere at Cafe Another Day, Janakpuri"/>
		    	    		<div className="inner">
		    	    			<div className="item-info">
		    	    				<h4>
			    	    				<a href="https://www.instagram.com/cafeanotherday/" target="_blank">Pleasant Atmosphere</a>
			    	    			</h4>
			    	    		</div>
		    	    		</div>
		    	    	</div>
		    	    </div>
		    	    <div className="item">
		    	    	<div className="image-holder">
		    	    		<img src='images2/amb_2.webp' alt="Live Entertainment at Cafe Another Day, Janakpuri"/>
		    	    		<div className="inner">
		    	    			<div className="item-info">
		    	    				<h4>
			    	    				<a href="https://www.instagram.com/cafeanotherday/" target="_blank">Live Entertainment</a>
			    	    			</h4>
			    	    		</div>
		    	    		</div>
		    	    	</div>
		    	    </div>
		    	    <div className="item">
		    	    	<div className="image-holder">
		    	    		<img src='images2/party_1.webp' alt="Kitty Party at Cafe Another Day, Janakpuri"/>
		    	    		<div className="inner">
		    	    			<div className="item-info">
		    	    				<h4>
			    	    				<a href="tel:+919540442233">Kitty Party</a>
			    	    			</h4>
			    	    		</div>
		    	    		</div>
		    	    	</div>
		    	    </div>
		    	    <div className="item">
		    	    	<div className="image-holder">
		    	    		<img src='images2/party_2.webp' alt="Celeberations at Cafe Another Day, Janakpuri"/>
		    	    		<div className="inner">
		    	    			<div className="item-info">
		    	    				<h4>
			    	    				<a href="tel:+919540442233">Celeberations</a>
			    	    			</h4>
			    	    		</div>
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

export default Home;