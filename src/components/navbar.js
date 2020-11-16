import React from 'react'
import {Link, withRouter} from 'react-router-dom'

const isActive = (history, path) => {
	if(history.location.pathname === path) {
		return {color: '#cdaa7c'}
	} else {
		return {color: '#ffffff'}
	}
}

const Navbar = ({history}) => {
    return (
        <>
        {/*HEADER ON DESKTOP*/}
			<nav className="navbar-desktop">
				<div className="left">
                    <Link className="logo" to="/">
                        <img src="images2/logo.webp" alt="Cafe Another Day" style={{maxWidth:'175%'}}/>
                    </Link>
				</div>
				<ul>
					<li className="has-children">
						<Link to="/" style={isActive(history, '/')}>
                            Home
                        </Link>
					</li>
					<li className="has-children">
                        <Link to="/menu" style={isActive(history, '/menu')}>
                            Menu
                        </Link>
					</li>
					<li className="has-children">
                        <Link to="/about" style={isActive(history, '/about')}>
                            About
                        </Link>
					</li>
					<li className="has-children">
                        <Link to="/gallery" style={isActive(history, '/gallery')}>
                            Gallery
                        </Link>
					</li>
					<li className="has-children">
                        <a href="tel:+919540442233" style={isActive(history, '/contact')}>
                            Contact
                        </a>
					</li>
				</ul>
			</nav>

			{/*HEADER ON MOBILE*/}
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
						<a href="index.php" className="logo">
							<img src="images2/logo.webp" alt="Cafe Another Day" style={{maxWidth:""}}/>
						</a>
					</div>
				</div>
				<nav id="main-nav">
					<ul>
						<li>
                            <Link to="/" style={isActive(history, '/')}>
                                Home
                            </Link>
						</li>
						<li>
                            <Link to="/menu" style={isActive(history, '/menu')}>
                                Menu
                            </Link>
						</li>
						<li>
                            <Link to="/about" style={isActive(history, '/about')}>
                                About
                            </Link>
						</li>
						<li>
                            <Link to="/gallery" style={isActive(history, '/')}>
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
    </>
    )
}

export default withRouter(Navbar);