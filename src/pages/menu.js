import React from 'react'
import {Link, withRouter} from 'react-router-dom'

const Menu = () => {
    return (
		<>
        <nav className="navbar-desktop fixed-top">
			<ul>
				<li className="has-children" style={{paddingLeft: 25}}>
					<Link to="/">
						Home
					</Link>
				</li>
				<li className="has-children">
					<a href="" className="smoothScroll">
						Soups/Salads
					</a>
					<div className="sub-menu">
						<div className="wrapper">
							<ul>
								<li>
									<a href="#soup" className="smoothScroll">Soup</a>
								</li>
								<li>
									<a href="#salads" className="smoothScroll">Salads</a>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li className="has-children">
					<a href="" className="smoothScroll">
						Plates
					</a>
					<div className="sub-menu">
						<div className="wrapper">
							<ul>
								<li>
									<a href="#tinyplates" className="smoothScroll">Tiny Plates</a>
								</li>
								<li>
									<a href="#sharedplates" className="smoothScroll">Sharing Plates</a>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li className="has-children">
					<a href="" className="smoothScroll">
						Appetizers
					</a>
					<div className="sub-menu">
						<div className="wrapper">
							<ul>
								<li>
									<a href="#vegappetizers" className="smoothScroll">Veg Appetizers</a>
								</li>
								<li>
									<a href="#nonvegappetizers" className="smoothScroll">Non Veg Appetizers</a>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li className="has-children">
					<a href="" className="smoothScroll">
						Burgers/Sandwiches
					</a>
					<div className="sub-menu">
						<div className="wrapper">
							<ul>
								<li>
									<a href="#burgers" className="smoothScroll">Burgers</a>
								</li>
								<li>
									<a href="#sandwiches" className="smoothScroll">Sandwiches</a>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li className="has-children">
					<a href="" className="smoothScroll">
						Italian
					</a>
					<div className="sub-menu">
						<div className="wrapper">
							<ul>
								<li>
									<a href="#pizza" className="smoothScroll">Pizza</a>
								</li>
								<li>
									<a href="#pasta" className="smoothScroll">Pasta</a>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li className="has-children">
					<a href="#veg-1">
						Mains
					</a>
					<div className="sub-menu">
						<div className="wrapper">
							<ul>
								<li>
									<a href="#veg-1" className="smoothScroll">Vegetarian Mains</a>
								</li>
								<li>
									<a href="#veg-1" className="smoothScroll">Non Vegetarian Mains</a>
								</li>
								<li>
									<a href="#om-3" className="smoothScroll">Oriental Mains</a>
								</li>
								<li>
									<a href="#om-3" className="smoothScroll">Western Mains</a>
								</li>
								<li>
									<a href="#rb-5" className="smoothScroll">Rice Bowl</a>
								</li>
								<li>
									<a href="#rb-5" className="smoothScroll">Rice and Noodles</a>
								</li>
								<li>
									<a href="#b-7" className="smoothScroll">Breads</a>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li className="has-children">
					<a href="#shakes-1">
						Beverages/Desserts
					</a>
					<div className="sub-menu">
						<div className="wrapper">
							<ul>
								<li>
									<a href="#desserts" className="smoothScroll">Desserts</a>
								</li>
								<li>
									<a href="#shakes-1" className="smoothScroll">Shakes</a>
								</li>
								<li>
									<a href="#shakes-1" className="smoothScroll">Smoothies</a>
								</li>
								<li>
									<a href="#freak-3" className="smoothScroll">Freak Shakes</a>
								</li>
								<li>
									<a href="#freak-3" className="smoothScroll">Coolers</a>
								</li>
								<li>
									<a href="#tea-5" className="smoothScroll">Tea</a>
								</li>
								<li>
									<a href="#tea-5" claclassNamess="smoothScroll">Ice Tea</a>
								</li>
								<li>
									<a href="#coffee-7" className="smoothScroll">Coffee</a>
								</li>
								<li>
									<a href="#coffee-7" className="smoothScroll">Extras</a>
								</li>
							</ul>
						</div>
                </div>
                </li>
			</ul>
		</nav>

		{/*HEADER ON MOBILE*/}
		<nav className="navbar-mobile fixed-top">
			<div className="container">
				<div className="heading">
					<div className="left">
						<a href="#" className="navbar-mobile__toggler">
							<span></span>
							<span></span>
							<span></span>
						</a>
					</div>
					<a href="index.php" className="logo" style={{maxWidth:"30%"}}>
						<img src="images2/logo.webp" alt="Cafe Another Day" style={{maxWidth:""}}/>
					</a>
				</div>
			</div>
			<nav id="main-nav">
				<ul>
					<li className="current">
						<a href="menu.php">Menu</a>
					</li>
					<li className="has-children">
						<a href="index.php">
							Home
						</a>
					</li>
					<li className="has-children">
						<a href="#section-1" class="smoothScroll">
							Soups
						</a>
					</li>
					<li className="has-children">
						<a href="#section-2" className="smoothScroll">
							Salads
						</a>
					</li>
					<li className="has-children">
						<a href="#section-3" className="smoothScroll">
							Tiny Plates
						</a>
					</li>
					<li className="has-children">
						<a href="#section-4" className="smoothScroll">
							Sharing Plates
						</a>
					</li>
					<li className="has-children">
						<a href="#section-12" className="smoothScroll">
							Veg Appetizers
						</a>
					</li>
					<li className="has-children">
						<a href="#section-13" className="smoothScroll">
							Non Veg Appetizers
						</a>
					</li>
					<li className="has-children">
						<a href="#section-5" className="smoothScroll">
							Burgers
						</a>
					</li>
					<li className="has-children">
						<a href="#section-6" className="smoothScroll">
							Sandwiches
						</a>
					</li>
					<li className="has-children">
						<a href="#section-7" className="smoothScroll">
							Pizza
						</a>
					</li>
					<li className="has-children">
						<a href="#section-8" className="smoothScroll">
							Pasta
						</a>
					</li>
					<li className="has-children">
						<a href="">
							Mains
						</a>
						<ul>
							<li>
								<a href="#veg-1" className="smoothScroll">Vegetarian Mains</a>
							</li>
							<li>
								<a href="#nveg-2" className="smoothScroll">Non Vegetarian Mains</a>
							</li>
							<li>
								<a href="#om-3" className="smoothScroll">Oriental Mains</a>
							</li>
							<li>
								<a href="#wm-4" className="smoothScroll">Western Mains</a>
							</li>
							<li>
								<a href="#rb-5" className="smoothScroll">Rice Bowl</a>
							</li>
							<li>
								<a href="#rn-6" className="smoothScroll">Rice and Noodles</a>
							</li>
							<li>
								<a href="#b-7" className="smoothScroll">Breads</a>
							</li>
						</ul>
					</li>
					<li className="has-children">
						<a href="#section-10" className="smoothScroll">
							Delicious Desserts
						</a>
					</li>
					<li className="has-children">
						<a href="" className="smoothScroll">
							Beverages
						</a>
						<ul>
							<li className="current">
								<a href="#shakes-1" className="smoothScroll">Shakes</a>
							</li>
							<li>
								<a href="#smoothies-2" classNamelass="smoothScroll">Smoothies</a>
							</li>
							<li>
								<a href="#freak-3" className="smoothScroll">Freak Shakes</a>
							</li>
							<li>
								<a href="#coolers-4" className="smoothScroll">Coolers</a>
							</li>
							<li>
								<a href="#tea-5" className="smoothScroll">Tea</a>
							</li>
							<li>
								<a href="#icetea-6" className="smoothScroll">Ice Tea</a>
							</li>
							<li>
								<a href="#coffee-7" className="smoothScroll">Coffee</a>
							</li>
							<li>
								<a href="#extra-8" className="smoothScroll">Extras</a>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
		</nav>

		{/*PAGE INFO*/}
		<div className="page-info set-bg" style={{backgroundImage: `url(${"images2/8.webp"})`}}>
			<div id="section-1" className="section-header">
				<h1 className="text-white">Our menu</h1>
				<span>~ See what we offer ~</span>
			</div>
		</div>

		{/*OUR MENU*/}
		<div className="our-menu section-primary pb-113">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-md-6">
						<div id="soup" className="our-menu-col left">
							<div className="heading">
								<h3>Soups</h3>
								<span class="icon">
									<img src="images2/soup.webp" alt="Soup"/>
								</span>
							</div>
							<div className="body">
								<div className="menu-item">
									<h5>
										<a>V/Non Veg</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">159/189</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Mushroom / Chichek Cappuccino</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">159/189</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Monchow</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">159/189</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Sweetcorn</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">159/189</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Hot and Sour Classic Soup</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">159/189</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Tomato and Basil</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">159/189</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Lemon and Coriander Clear</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">159/189</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Talumein Noodle</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">159/189</span>
										</span>
									</h5>
								</div>
								<div id="section-2" className="menu-item">
									<h5>
										<a>Lemon Grass and Mushroom</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">159/189</span>
										</span>
									</h5>
								</div>
							</div>
						</div>
					</div>
					<div id="salads" className="col-md-6">
						<div className="our-menu-col right">
							<div className="heading">
								<h3>Salads</h3>
								<span className="icon">
									<img src="images2/salad.webp" alt="Salad"/>
								</span>
							</div>
							<div className="body">
								<div className="menu-item">
									<h5>
										<a>Watermelon Feta</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">275</span>
										</span>
									</h5>
									<p>(Watermelon, Feta Cheese, Flax Seeds, Fresh Greens)</p>
								</div>
								<div className="menu-item">
									<h5>
										<a>Classic Caesar</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">255/295</span>
										</span>
									</h5>
									<p>(Croutons, Fresh Greens and Caesar Dressing)</p>
								</div>
								<div viewclass="menu-item">
									<h5>
										<a>Roasted Beetroot</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">255/295</span>
										</span>
									</h5>
									<p>(Rocket Leaves, Smoked Beetroot, Crumbled<br/>Feta Cheese in lemon Bal. Vinegar)</p>
								</div>
								<div className="menu-item">
									<h5>
										<a>Nutrition Powerhouse</a>
										<span className="dots"></span>
										<span classNamess="price">
											<span className="number">325/375</span>
										</span>
									</h5>
									<p>(Rocket Leaves Tossed with Quinoa in a Cheese Lemon Dressing)</p>
								</div>
								<div className="menu-item">
									<h5>
										<a>Shawarma Salad Bowl</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">285/</span>
										</span>
									</h5>
									<p>(Deconstructed Shawarma in a Garlic Yogurt Dressing Falafel/Chicken)</p>
								</div>
								<div className="menu-item">
									<h5>
										<a>Greek Avacado</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">255/295</span>
										</span>
									</h5>
									<p>(Cucumber, Tomatoes, Assorted Peppers,<br/>Red Onions, Feta, Avacado in Geek Vinegar Dressing)</p>
								</div>
								<div className="menu-item">
									<h5>
										<a>Italian Pasta Salad</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">265/315</span>
										</span>
									</h5>
									<p>(Smoked Peppers with Pesto Pasta)</p>
								</div>
								<div id="section-3" className="menu-item">
									<h5>
										<a>Sprouted Beans</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">245/285</span>
										</span>
									</h5>
									<p>(Healthy Mix of Sproutes)</p>
								</div>
							</div>
						</div>
					</div>
					<div id="tinyplates" className="col-md-6">
						<div className="our-menu-col mb-md-0 left">
							<div className="heading">
								<h3>Tiny Plates</h3>
								<span className="icon">
									<img src="images2/tiny.webp" alt="Tiny Plates"/>
								</span>
							</div>
							<div className="body">
								<div className="menu-item">
									<h5>
										<span className="icon">
											<img src="images2/veg.webp" alt=""/>
										</span>
										<a>Chicken Keema Pao</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">245</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<span className="icon">
											<img src="images2/veg.webp" alt=""/>
										</span>
										<a>Bhaji Platter</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">179</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<span className="icon">
											<img src="images2/veg.webp" alt=""/>
										</span>
										<a>Classic Bruschetta</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">209</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<span className="icon">
											<img src="images2/veg.webp" alt=""/>
										</span>
										<a>Hummus and Pita</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">219</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<span className="icon">
											<img src="images2/veg.webp" alt=""/>
										</span>
										<span className="icon">
											<img src="images2/nveg.webp" alt=""/>
										</span>
										<a>Trash Can Nachos</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">265/315</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<span className="icon">
											<img src="images2/veg.webp" alt=""/>
										</span>
										<a>Classic Cheese Poutine</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">265</span>
										</span>
									</h5>
									<p>(Fries with Loads and Loads of Cheese and Gravy)</p>
								</div>
								<div className="menu-item">
									<h5>
										<span className="icon">
											<img src="images2/veg.webp" alt=""/>
										</span>
										<a>Peri Peri Fries</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">189</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<span className="icon">
											<img src="images2/veg.webp" alt=""/>
										</span>
										<a>Kurkuri Ramen Chat</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">209</span>
										</span>
									</h5>
								</div>
								<div class="menu-item">
									<h5>
										<span className="icon">
											<img src="images2/veg.webp" alt=""/>
										</span>
										<a>Cheesy Onion Rings</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">229</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<span className="icon">
											<img src="images2/veg.webp" alt=""/>
										</span>
										<a>Chatpata Chana Chat</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">229</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<span className="icon">
											<img src="images2/veg.webp" alt=""/>
										</span>
										<a>Roasted Garlic Cheesy Bread</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">245</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<span className="icon">
											<img src="images2/nveg.webp" alt=""/>
										</span>
										<a>Wok Tossed Chilli Sausages</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">265</span>
										</span>
									</h5>
								</div>
								<div id="section-4" className="menu-item">
									<h5>
										<span className="icon">
											<img src="images2/nveg.webp" alt=""/>
										</span>
										<a>Jerk Spiced Chicken Fingers</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">315</span>
										</span>
									</h5>
								</div>
							</div>
						</div>
					</div>
					<div id="sharedplates" className="col-md-6">
						<div className="our-menu-col right">
							<div className="heading">
								<h3>Sharing Plates</h3>
								<span className="icon">
									<img src="images2/share.webp" alt="Share"/>
								</span>
							</div>
							<div className="body">
								<div className="menu-item">
									<h5>
										<span className="icon">
											<img src="images2/nveg.webp" alt=""/>
										</span>
										<a>Cajun Spices Chicken, BBQ Chicken<br/>Wings, Cheesy Fries, Caesar Fries,<br/>Caesar Salad, Onion Rings, Grilled Fish</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">889/799</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<span className="icon">
											<img src="images2/nveg.webp" alt=""/>
										</span>
										<a>Chicken Tikka, Chicken Strips, Chilli<br/>Chicken, Amritsari Fish Fry, Peshawari<br/>Seekh, Sprouted Bean Salad</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">889/799</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<span className="icon">
											<img src="images2/veg.webp" alt=""/>
										</span>
										<a>Choice of Peneer Tikka, Mangolian<br/>Manchurian, Tempura Baby Corn, Matar<br/>Ke Kabab, Sprouted Bean Salad,<br/>Dahi Ke Sholey</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">889/799</span>
										</span>
									</h5>
								</div>
								<div id="section-12" className="menu-item">
									<h5>
										<span className="icon">
											<img src="images2/veg.webp" alt=""/>
										</span>
										<a>Salt and Pepper Veggie, Falafel<br/>Balls, Cheesy Fries, Panko Fried<br/>Paneer, Cheesy Onion Rings, Caesar Salad</a>
										<span className="dots"></span>
										<span className="price">
											<span class="number">889/799</span>
										</span>
									</h5>
								</div>
							</div>
						</div>
					</div>
					<div id="vegappetizers" className="col-md-6 mt-5">
						<div className="our-menu-col left">
							<div className="heading">
								<h3>Veg Appetizers</h3>
								<span className="icon">
									<img src="images2/veg_ap.webp" alt="Veg Appetizers"/>
								</span>
							</div>
							<div className="body">
								<div className="menu-item">
									<h5>
										<a>Steamed/Pan Fried/Tandoori Momos</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">289</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Paneer Burji Bruschetta</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">249</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Pao Bhaji Bruschetta</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">249</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Chilli Cheese Toasties</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">249</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Babycorn Tempura</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">269</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Pranko Fried Crispy Paneer</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">289</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Shakargand Ki Chaat</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">289</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Mangolian Manchurian</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">279</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Achari Paneer Tikka</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">309</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Pudina Paneer Tikka</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">309</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Sichuan Chilli Potatoes</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">259</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Sriracha Chilli Paneer</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">289</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Awadhi Matar Ke Kebab</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">309</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Tandoori Till Aloo</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">309</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Bunny Chow Pao Bhaji</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">269</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Multani Mushroom</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">349</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Golden Fried Stuffed Soya</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">309</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Malai Tandoori Brocolli</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">349</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Dahi Ke Sholey</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">309</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Jalepeno Cheese Fritters</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">309</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Good Old Veg Salt and Pepper</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">309</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Smoked BBQ Soya Pitapocket</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">349</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Mexican Spiced Maggi Noodles</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">249</span>
										</span>
									</h5>
								</div>
								<div id="section-13" className="menu-item">
									<h5>
										<a>Falafel Balls with Hummus Dip</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">309</span>
										</span>
									</h5>
								</div>
							</div>
						</div>
					</div>
					<div id="nonvegappetizers" className="col-md-6 mt-5">
						<div className="our-menu-col right">
							<div className="heading">
								<h3>Non Veg Appetizers</h3>
								<span className="icon">
									<img src="images2/n_ap.webp" alt="Non Veg Appetisers"/>
								</span>
							</div>
							<div className="body">
								<div className="menu-item">
									<h5>
										<a>Kungpoo Chicken</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">355</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Steamed/Tandoori/Pan Fried Dumplings</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">355</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Orange Honey Chicken</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">355</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Masala Tikki Fries</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">335</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Gol Mirch Chicken Tikka</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">365</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Anda Burji Bruschetta</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">335</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Korean Chicken in Pita Pocket</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">375</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Chicken in Chilli Bean</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">355</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Roast Garlic Chicken Tikka</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">375</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Amritsari Fish Fry</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">435</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Teriyaki Stir Fry Chicken Maggi</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">335</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>BBQ Chicken Wings</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">395</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Good Old Chicken String Roll</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">355</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Wok Tossed Chilli Chicken</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">355</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Butter Garlic Grilled Fish</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">475</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Cajun Spiced Mexican Chicken</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">395</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Beer Battered Fish n Chips</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">455</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Peshawari Seekh Kekab</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">375</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>classNameic Southern Fried Chicken</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">405</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Chicken Tangri Kakab</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">435</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Tandoori Chicken</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">405</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Multani Fish Tikka</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">385</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Kasturi Malai Tikka</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">375</span>
										</span>
									</h5>
								</div>
								<div id="section-5" className="menu-item">
									<h5>
										<a>Tawa Sausage Masala</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">285</span>
										</span>
									</h5>
								</div>
							</div>
						</div>
					</div>

					<div id="burgers" className="col-md-6">
						<div className="our-menu-col mb-md-0 left">
							<div className="heading">
								<h3>Burgers</h3>
								<span className="icon">
									<img src="images2/burger.webp" alt="Burger"/>
								</span>
							</div>
							<div className="body">
								<div className="menu-item">
									<h5>
										<a>Chickwick</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">265</span>
										</span>
									</h5>
									<p>(fried Chicken, gherkins, spicy Buffalo Sauce</p>
								</div>
								<div className="menu-item">
									<h5>
										<a>Fish Fillet Burger</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">315</span>
										</span>
									</h5>
									<p>(Fried Fish Patty, Cheese, Crisp Greens)</p>
								</div>
								<div className="menu-item">
									<h5>
										<a>Tex Mex Chicken Burger</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">295</span>
										</span>
									</h5>
									<p>(Grilled Chicken Patty, Bacon, Nachos with Cheese)</p>
								</div>
								<div className="menu-item">
									<h5>
										<a>Open Mac and Cheese Burger</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">285</span>
										</span>
									</h5>
									<p>(Cheesy Macroni on The Soft Bun)</p>
								</div>
								<div className="menu-item">
									<h5>
										<a>Spiced Falafel</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">245</span>
										</span>
									</h5>
									<p>(Falafel Patty with Smooky Veggies)</p>
								</div>
								<div id="section-6" className="menu-item">
									<h5>
										<a>Paneer Tikka Burger</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">225</span>
										</span>
									</h5>
									<p>(Clayoven Paneer Tikka with Mint Chutney Inside The Soft Buns)</p>
								</div>
							</div>
						</div>
					</div>

					<div id="sandwiches" className="col-md-6">
						<div className="our-menu-col ml-0 right">
							<div className="heading">
								<h3>Sandwiches</h3>
								<span className="icon">
									<img src="images2/sand.webp" alt="Sandwich"/>
								</span>
							</div>
							<div className="body">
								<div className="menu-item">
									<h5>
										<a>Old School Chicken Club Sandwich</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">299</span>
										</span>
									</h5>
									<p>(Just The Same Old Way with Egg and Chicken)</p>
								</div>
								<div className="menu-item">
									<h5>
										<a>Chicken Pesto Sandwich</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">289</span>
										</span>
									</h5>
									<p>(Basil, Italian Spices with Sky-Smoked Chicken and Cheese)</p>
								</div>
								<div className="menu-item">
									<h5>
										<a>Open Faced Spicy Chicken Sandwich</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">289</span>
										</span>
									</h5>
									<p>(Cajun Spiced Chicken with Cheese)</p>
								</div>
								<div className="menu-item">
									<h5>
										<a>The Bold Blt</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">269</span>
										</span>
									</h5>
									<p>(Bacon, Lettuce and Cheese Sandwich)</p>
								</div>
								<div className="menu-item">
									<h5>
										<a>Open Faced Mushroom and Fried Egg Sandwich</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">249</span>
										</span>
									</h5>
									<p>(Open Sandwich with Stri Fried Mushrooms and<br/>Fried Egg Baked with Cheese)</p>
								</div>
								<div className="menu-item">
									<h5>
										<a>Grilled Vegetable and Mozarella</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">229</span>
										</span>
									</h5>
									<p>(Smoky Veggies with Cheese and Special Dressings)</p>
								</div>
								<div className="menu-item">
									<h5>
										<a>Bombay Street Style</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">189</span>
										</span>
									</h5>
									<p>(Bombay Style Vegetable Sandwich with Bhujiya)</p>
								</div>
								<div id="section-7" className="menu-item">
									<h5>
										<a>The Margherita Sandwich</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">199</span>
										</span>
									</h5>
									<p>(Toasted Bread with Marinara Sauce and<br/>Mozzarella Cheese and Basil)</p>
								</div>
							</div>
						</div>
					</div>
					<div id="pizza" className="col-md-6">
						<div className="our-menu-col left">
							<div className="heading">
								<h3>Pizza</h3>
								<span className="icon">
									<img src="images2/pizza.webp" alt="Pizza"/>
								</span>
							</div>
							<div className="body">
								<div className="menu-item">
									<h5>
										<a>Margherita</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">315</span>
										</span>
									</h5>
									<p>(Marinara Sauce, Mozarella Cheese and Basil)</p>
								</div>
								<div className="menu-item">
									<h5>
										<a>Tropical Vegetarian</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">365</span>
										</span>
									</h5>
									<p>(Pinapple, Onions, Black Olives, Jalapenos, Corn and Peppers)</p>
								</div>
								<div className="menu-item">
									<h5>
										<a>Green Comfort</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">385</span>
										</span>
									</h5>
									<p>(Onions, Bell Peppers, Baby Corn, Spinach, Mushroom, Zucchini)</p>
								</div>
								<div className="menu-item">
									<h5>
										<a>Tandoori Feast</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">395</span>
										</span>
									</h5>
									<p>(Clayoven Paneer and Mushroom Tikka with Mint Chutney Base)</p>
								</div>
								<div className="menu-item">
									<h5>
										<a>Chinatown</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">415</span>
										</span>
									</h5>
									<p>(Chilli Chicken with Loads of Cheese)</p>
								</div>
								<div className="menu-item">
									<h5>
										<a>Meatlover</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">455</span>
										</span>
									</h5>
									<p>(Grilled Chicken, Bacon, Sausages with Mozzarella)</p>
								</div>
								<div id="section-8" className="menu-item">
									<h5>
										<a>The Carnivore</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">465</span>
										</span>
									</h5>
									<p>(Chicken Keema, Chicken Tikka with Mint Chutney)</p>
								</div>
							</div>
						</div>
					</div>
					<div id="pasta" className="col-md-6">
						<div className="our-menu-col mb-5 right">
							<div className="heading">
								<h3>Pasta</h3>
								<span className="icon">
									<img src="images2/pasta.webp" alt="Pasta"/>
								</span>
							</div>
							<div className="body">
								<div className="menu-item">
									<h5>
										<a>(Choice of Penne/Sphegetti)</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">465</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Alfredo</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">465</span>
										</span>
									</h5>
									<p>(classNameic White Cheesy Sauce Pasta in Cream, Cheese Fresh Herbs Sauce)</p>
								</div>
								<div className="menu-item">
									<h5>
										<a>Aglio Olio</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">465</span>
										</span>
									</h5>
									<p>(Garlic, Olive Oli, Parsley)</p>
								</div>
								<div className="menu-item">
									<h5>
										<a>Pesto</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">465</span>
										</span>
									</h5>
									<p>(Oil, Cheese, Basil and Garlic)</p>
								</div>
								<div className="menu-item">
									<h5>
										<a>Arrabiata</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">465</span>
										</span>
									</h5>
									<p>(Fresh Tomatoes, Olive Oil, Basil and Garlic)</p>
								</div>
								<div className="menu-item">
									<h5>
										<a>Baked Farm Fresh</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">465</span>
										</span>
									</h5>
									<p>(Tomato and Cream Sauce Baked with Cheese)</p>
								</div>
								<div className="menu-item">
									<h5>
										<a>Spicy Asian Stir Fry</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">465</span>
										</span>
									</h5>
									<p>(Pasta Tossed in Cantonese Way)</p>
								</div>
								<div id="veg-1" className="menu-item">
									<h5>
										<a>Red & White</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">465</span>
										</span>
									</h5>
									<p>(Mix of Marinara and Cheese Sauce)</p>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-6">
						<div className="our-menu-col mb-md-0  mt-5 left">
							<div className="heading">
								<h3>Vegetarian</h3>
								<span className="icon">
									<img src="images2/main.webp" alt="Main Course"/>
								</span>
							</div>
							<div className="body">
								<div className="menu-item">
									<h5>
										<a>Paneer Methi Masala</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">365</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Paneer Makhani</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">375</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Palak Paneer/Corn</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">355</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Malai Kofta Curry</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">375</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Kashmiri Dum Aloo</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">355</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Amritsari Paneer Burji</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">335</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Subz Ka Muzaffar</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">335</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Kadhai Soya Chaap</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">355</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Tawa Mushroom Masala</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">355</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Amritsari Choley</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">345</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Rajma Masala</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">345</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Dal Makhani</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">295</span>
										</span>
									</h5>
								</div>
								<div id="nveg-2" className="menu-item">
									<h5>
										<a>Dal Sultani</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">275</span>
										</span>
									</h5>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-6">
						<div className="our-menu-col mb-md-0  mt-5 left">
							<div className="heading">
								<h3>Non Vegetarian</h3>
								<span className="icon">
									<img src="images2/n_main.webp" alt="Non Veg Main"/>
								</span>
							</div>
							<div className="body">
								<div className="menu-item">
									<h5>
										<a>Murgh Tikka Lababdar</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">435</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Murgh Saagwaala</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">435</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Chicken Korma</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">435</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Butter Chicken</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">455</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Fish Curry</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">485</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Mutton Rogan Josh</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">485</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Himachali Rarha Ghosht</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">505</span>
										</span>
									</h5>
								</div>
								<div id="om-3" className="menu-item">
									<h5>
										<a>Egg Curry</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">405</span>
										</span>
									</h5>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-6">
						<div className="our-menu-col mb-md-0  mt-5 left">
							<div className="heading">
								<h3>Oriental Mains</h3>
								<span className="icon">
									<img src="images2/orietal.webp" alt="Oriental Mains"/>
								</span>
							</div>
							<div className="body">
								<div className="menu-item">
									<h5>
										<a>Vegetables/Chicken/<br/>Fish Choice of Sauce</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">395/445/475</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Hot Garlic/Thai Basil/Chilli Bean</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">395/445/475</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Stir Fried Rice with Chilli Pork</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">395/445/475</span>
										</span>
									</h5>
								</div>
								<div id="wm-4" className="menu-item">
									<h5>
										<a>Hakka Style Noodles with Schezwan Pork</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">395/445/475</span>
										</span>
									</h5>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-6">
						<div className="our-menu-col mb-md-0  mt-5 left">
							<div className="heading">
								<h3>Western Mains</h3>
								<span className="icon">
									<img src="images2/western.webp" alt="Western Mains"/>
								</span>
							</div>
							<div className="body">
								<div className="menu-item">
									<h5>
										<a>Gilled Cottage Cheese/Chicken/Fish</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">395/445/475</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>In Choice of Sauce</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">395/445/475</span>
										</span>
									</h5>
								</div>
								<div id="rb-5" className="menu-item">
									<h5>
										<a>Bar Be Que/Peri Peri/Garlic Butter</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">395/445/475</span>
										</span>
									</h5>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-6">
						<div className="our-menu-col mb-md-0  mt-5 left">
							<div className="heading">
								<h3>Rice Bowl</h3>
								<span className="icon">
									<img src="images2/rice.webp" alt=""/>
								</span>
							</div>
							<div className="body">
								<div className="menu-item">
									<h5>
										<a>Rajma/Choley Chawal</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">215</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Stir Fry Chinese Greens with Fried Rice</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">345</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Schezwan Chicken with Egg Fried Rice</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">395</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Thai Green/Red Curry Veg or Chicken</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">385/415</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Butter Chicken with Pulao</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">415</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Fish Curry with Rice</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">445</span>
										</span>
									</h5>
								</div>
								<div id="rn-6" className="menu-item">
									<h5>
										<a>Mexican Burrito Bowl Veg/Non Veg</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">385/415</span>
										</span>
									</h5>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-6">
						<div className="our-menu-col mb-md-0  mt-5 left">
							<div className="heading">
								<h3>Rice and Noodles</h3>
								<span className="icon">
									<img src="images2/rice_n.webp" alt="Rice and Noodles"/>
								</span>
							</div>
							<div className="body">
								<div className="menu-item">
									<h5>
										<a>Noodles-Hakka/Chilli Garlic/<br/>Chicken and Egg</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">225/245/285</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Pad Thai Noodles Veg/Non Veg</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">345/385</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Burnt Garlic Veg/Egg/<br/>Chicken Fried Rice</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">225/245/285</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Steamed Rice/Jeera Rice/<br/>Onion Tomato</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">165/245/285</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Vegetable Biryani</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">415</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Bhuna Mutton Biryani</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">515</span>
										</span>
									</h5>
								</div>
								<div id="b-7" className="menu-item">
									<h5>
										<a>Tawa Chicken Biryani</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">475</span>
										</span>
									</h5>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-6">
						<div className="our-menu-col mb-md-0  mt-5 left">
							<div className="heading">
								<h3>Breads</h3>
								<span className="icon">
									<img src="images2/bread.webp" alt="Bread"/>
								</span>
							</div>
							<div className="body">
								<div className="menu-item">
									<h5>
										<a>Tandoori Roti</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">45</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Missi Roti</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">55</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Lachcha/Pudhina/Mirchi Parantha</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">85</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Stuffed Parantha</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">135</span>
										</span>
									</h5>
									<p>Aloo/Gobhi/Paneer/Mixed</p>
								</div>
								<div className="menu-item">
									<h5>
										<a>Roomali Roti</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">35</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Plain Naan</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">65</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Butter Naan</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">75</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Garlic Naan</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">95</span>
										</span>
									</h5>
								</div>
								<div id="section-10" className="menu-item">
									<h5>
										<a>Raita</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">150</span>
										</span>
									</h5>
									<p>(Mixed/Pineapple</p>
								</div>
							</div>
						</div>
					</div>

					<div id="desserts" className="col-md-6 mt-5">
						<div className="our-menu-col right">
							<div className="heading">
								<h3>Delicious Desserts</h3>
								<span className="icon">
									<img src="images2/desert.webp" alt="Desert"/>
								</span>
							</div>
							<div className="body">
								<div className="menu-item">
									<h5>
										<a>Choco Nut Ice Cream Sandwich</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">189</span>
										</span>
									</h5>
									<p>(Digesive Cookies, Fruit n Nut Ice Cream dipped in Hot Chocolate Fudge)</p>
								</div>
								<div className="menu-item">
									<h5>
										<a>Mango Nut Dream</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">169</span>
										</span>
									</h5>
									<p>(Mango, Nuts, Ice Cream, Salted Caramel, Brown Sugar)</p>
								</div>
								<div className="menu-item">
									<h5>
										<a>Apple Pie with Ice Cream</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">249</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Hot Chocolate Brownie with Ice Cream</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">169</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Tille Wali Kulfi</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">99</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Kulhad Rabrhi</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">189</span>
										</span>
									</h5>
								</div>
								<div id="shakes-1" className="menu-item">
									<h5>
										<a>Banana Split Ice Cream</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">225</span>
										</span>
									</h5>
									<p>(Fresh Bananas, Ice Cream, Loads of Nuts and Wafers)</p>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-6 mt-5">
						<div className="our-menu-col mb-md-0 left">
							<div className="heading">
								<h3>Shakes</h3>
								<span className="icon">
									<img src="images2/shake.webp" alt="Shakes"/>
								</span>
							</div>
							<div className="body">
								<div className="menu-item">
									<h5>
										<a>The Oreo Family</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">215</span>
										</span>
									</h5>
									<p>(Chocolate/Mint/Strawberry)</p>
								</div>
								<div className="menu-item">
									<h5>
										<a>The Snickers Shake</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">255</span>
										</span>
									</h5>
									<p>(Chocolate Fudge,Snickers,Vanilla Ice Cream)</p>
								</div>
								<div className="menu-item">
									<h5>
										<a>Nutella Brownie</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">265</span>
										</span>
									</h5>
									<p>(Chocolate Fudge, Brownie, Nutella)</p>
								</div>
								<div className="menu-item">
									<h5>
										<a>Banana Cream Pie</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">225</span>
										</span>
									</h5>
									<p>(Banana, Vanilla Cake, Whipped Cream)</p>
								</div>
								<div className="menu-item">
									<h5>
										<a>Old School Chocolate Milkshake</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">195</span>
										</span>
									</h5>
									<p>(Chocolate Fudge and Vanilla)</p>
								</div>
								<div className="menu-item">
									<h5>
										<a>Butterscotch Sea Salt Caramel</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">225</span>
										</span>
									</h5>
									<p>(Butterscotch Ice Cream, Caramel and Pinch of Sea Salt)</p>
								</div>
								<div id="smoothies-2" className="menu-item">
									<h5>
										<a>Summer Sunset</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">224</span>
										</span>
									</h5>
									<p>(Mixed Berries, Vanilla, Dash of Chocolate)</p>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-6 mt-5">
						<div className="our-menu-col mb-md-0 left">
							<div className="heading">
								<h3>Smoothies</h3>
								<span className="icon">
									<img src="images2/smoo.webp" alt=""/>
								</span>
							</div>
							<div className="body">
								<div className="menu-item">
									<h5>
										<a>Smooth move</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">225</span>
										</span>
									</h5>
									<p>(Vanilla, Honey, Nut, Yogurt, Bananas and Peach)</p>
								</div>
								<div className="menu-item">
									<h5>
										<a>Blueberry Breakfast</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">225</span>
										</span>
									</h5>
									<p>(Blueberry, Frozen Yogurt, Applejuice, Cinamon)</p>
								</div>
								<div className="menu-item">
									<h5>
										<a>Caramel Espresso</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">225</span>
										</span>
									</h5>
									<p>(Caramel, Espresso Short, Frozen Yogurt)</p>
								</div>
								<div className="menu-item">
									<h5>
										<a>Rose Lassi Smoothie</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">225</span>
										</span>
									</h5>
									<p>(Rose Syrup, Yogurt with Nuts)</p>
								</div>
								<div id="freak-3" className="menu-item">
									<h5>
										<a>Go Getter</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">225</span>
										</span>
									</h5>
									<p>(Kiwi, Frozen Yogurt, Flax Seeds, Hint of Mint)</p>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-6 mt-5">
						<div className="our-menu-col mb-md-0 left">
							<div className="heading">
								<h3>Freak Shake</h3>
								<span className="icon">
									<img src="images2/shake.webp" alt=""/>
								</span>
							</div>
							<div className="body">
								<div className="menu-item">
									<h5>
										<a>Fire Cracker</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">295</span>
										</span>
									</h5>
									<p>(Chocolate Shake, Whipped Cream, Brownie, Nuttela, Chocochips)</p>
								</div>
								<div className="menu-item">
									<h5>
										<a>White Walkers</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">295</span>
										</span>
									</h5>
									<p>(Whipped Cream, White Chocolate, Caramel Sprinkles, Mini Marshmallows)</p>
								</div>
								<div className="menu-item">
									<h5>
										<a>Mocha Mint</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">295</span>
										</span>
									</h5>
									<p>(Vanilla, Mint, Oreo, Brownie, Lots of Goodies)</p>
								</div>
								<div id="coolers-4" className="menu-item">
									<h5>
										<a>Pink Dragon</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">295</span>
										</span>
									</h5>
									<p>(Strawberry, Vanilla, Sprinkles, Muffin and Candies)</p>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-6 mt-5">
						<div className="our-menu-col mb-md-0 left">
							<div className="heading">
								<h3>Coolers</h3>
								<span className="icon">
									<img src="images2/cooler.webp" alt=""/>
								</span>
							</div>
							<div className="body">
								<div className="menu-item">
									<h5>
										<a>Tango Punch</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">225</span>
										</span>
									</h5>
									<p>(Lemonade and Orange Juice and Mint)</p>
								</div>
								<div className="menu-item">
									<h5>
										<a>Kala Khatta</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">225</span>
										</span>
									</h5>
									<p>(Kala Khatta and Lime Juice)</p>
								</div>
								<div className="menu-item">
									<h5>
										<a>Spicy Guava</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">225</span>
										</span>
									</h5>
									<p>(Fresh Ginger, Guava Juice and Fizz)</p>
								</div>
								<div className="menu-item">
									<h5>
										<a>Litchi Lemongrass</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">225</span>
										</span>
									</h5>
									<p>(Litchi Juice, Lemongrass and Fizz and Mint)</p>
								</div>
								<div className="menu-item">
									<h5>
										<a>Virgin Mary</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">225</span>
										</span>
									</h5>
									<p>(Tomato Juice, Tobasco and Ground Pepper)</p>
								</div>
								<div className="menu-item">
									<h5>
										<a>Strawberry Banana Margarita</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">225</span>
										</span>
									</h5>
									<p>(Frozen Blended Mocktail)</p>
								</div>
								<div className="menu-item">
									<h5>
										<a>Cherry Coketail</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">225</span>
										</span>
									</h5>
									<p>(Cherry with Coke, Vanilla and Lime)</p>
								</div>
								<div className="menu-item">
									<h5>
										<a>Coconut Lemonade</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">225</span>
										</span>
									</h5>
									<p>(Lime, Coconut and Fizz)</p>
								</div>
								<div className="menu-item">
									<h5>
										<a>Aam Ras Colada</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">225</span>
										</span>
									</h5>
									<p>(Mango Juice, Pineapple, Coconut and Crushed Ice)</p>
								</div>
								<div className="menu-item">
									<h5>
										<a>Blue Shoe</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">225</span>
										</span>
									</h5>
									<p>(Curacao, Cranberry Juice)</p>
								</div>
								<div className="menu-item">
									<h5>
										<a>Watermelon Sangria</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">225</span>
										</span>
									</h5>
									<p>(Orange Juice, Peach Crush with Fresh Water Melon)</p>
								</div>
								<div id="tea-5" className="menu-item">
									<h5>
										<a>Mojitos</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">225</span>
										</span>
									</h5>
									<p>(Mint/Watermelon/Blueberry)</p>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-6 mt-5">
						<div className="our-menu-col mb-md-0 left">
							<div className="heading">
								<h3>Tea</h3>
								<span className="icon">
									<img src="images2/tea.webp" alt=""/>
								</span>
							</div>
							<div className="body">
								<div className="menu-item">
									<h5>
										<a>Masala Chai</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">65</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Jasmine Tea</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">65</span>
										</span>
									</h5>
								</div>
								<div id="icetea-6" className="menu-item">
									<h5>
										<a>Green and Lemon</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">55</span>
										</span>
									</h5>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-6 mt-5">
						<div className="our-menu-col mb-md-0 left">
							<div className="heading">
								<h3>Ice Tea</h3>
								<span className="icon">
									<img src="images2/ice-t.webp" alt=""/>
								</span>
							</div>
							<div className="body">
								<div className="menu-item">
									<h5>
										<a>Peach and Apricot</a> <span className="dots"></span>
										<span className="price">
											<span className="number">145</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Ginger n Lemon</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">145</span>
										</span>
									</h5>
								</div>
								<div id="coffee-7" className="menu-item">
									<h5>
										<a>Cranberry</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">145</span>
										</span>
									</h5>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-6 mt-5">
						<div className="our-menu-col mb-md-0 left">
							<div className="heading">
								<h3>Coffee</h3>
								<span className="icon">
									<img src="images2/coffww.webp" alt=""/>
								</span>
							</div>
							<div className="body">
								<div className="menu-item">
									<h5>
										<a>Cappuccina</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">99</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Americano</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">79</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Affogato</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">99</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Latte</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">99</span>
										</span>
									</h5>
								</div>
								<div id="extra-8" className="menu-item">
									<h5>
										<a>Espresso</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">69</span>
										</span>
									</h5>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-6 mt-5">
						<div className="our-menu-col mb-md-0 left">
							<div className="heading">
								<h3>Extra</h3>
								<span className="icon">
									<img src="images2/main.webp" alt=""/>
								</span>
							</div>
							<div className="body">
								<div className="menu-item">
									<h5>
										<a>Bottled Water</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">90</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Coke/Fanta/Sprite</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">100</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Diet Coke</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">125</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Red Bull</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">175</span>
										</span>
									</h5>
								</div>
								<div className="menu-item">
									<h5>
										<a>Ginger Ale</a>
										<span className="dots"></span>
										<span className="price">
											<span className="number">150</span>
										</span>
									</h5>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
		<div className="section-primary section-form pb-10" style={{paddingTop:"5%", paddingBottom:"1%"}}>
			<div className="container">
				<div id="section-1" className="row justify-content-center">
					<div className="col-md-6">
						<div className="our-menu-col">
							<div className="section-header mb-2">
								<h2>We'd love to know your Experience</h2>
								<span>~ If you had an awesome experience, we'd<br/>love to hear about it ~</span>
							</div>
							<form action="#">
								<div className="btn-holder">
									<a href="https://bit.ly/3mQQAFZ" target="_blank" className="au-btn round au-btn--hover has-bg">Give a Review</a>
								</div>
							</form>
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

export default Menu