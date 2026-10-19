import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse,faAddressCard, faBars, faTimeline, faUser, faRightToBracket, faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {  } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            {/* Hello world */}
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Yummy Hub</title>
            <link rel="stylesheet" href="css/owl.carousel.min.css" />
            <link rel="stylesheet" href="css/owl.theme.default.css" />
            <link rel="stylesheet" href="css/bootstrap.min.css" />
            <link rel="stylesheet" href="css/all.min.css" />
            <link rel="stylesheet" href="css/style.css" />
            {/*header start*/}
            <header id="header" className="header">
                <nav className="navbar navbar-expand-lg bg-dark">
                    <div className="container">
                        <Link className="navbar-brand text-warning" to={'/'}>
                            <img src="images/logo.png" alt="Logo" className="img-fluid" />
                            yummyHub
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div
                            className="collapse navbar-collapse justify-content-end "
                            id="navbarNavDropdown"
                        >
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link
                                        className="nav-link active text-warning"
                                        aria-current="page"
                                        to={'/'}
                                    >
                                        <FontAwesomeIcon icon={faHouse} /> HOME
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link active text-warning"
                                        aria-current="page"
                                        to={'/menu'}
                                    >
                                        <FontAwesomeIcon icon={faBars} />  Menu
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link active text-warning"
                                        aria-current="page"
                                        to={'/offers'}
                                    >
                                        <FontAwesomeIcon icon={faTimeline} /> Offers
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link active text-warning"
                                        aria-current="page"
                                        to={'/about'}
                                    >
                                        <FontAwesomeIcon icon={faAddressCard} /> About Us
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link active text-warning"
                                        aria-current="page"
                                        to={'/contact'}
                                    >
                                        <FontAwesomeIcon icon={faUser} /> CONTACT US
                                    </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle text-warning"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <FontAwesomeIcon icon={faRightToBracket} /> LOG IN
                                    </a>
                                    <ul className="dropdown-menu bg-dark">
                                        <li>
                                            <Link
                                                className="dropdown-item text-warning"
                                                to={'/login'}
                                            >
                                                Log In
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="dropdown-item text-warning"
                                                to={'/signup'}
                                            >
                                                Sign Up
                                            </Link>
                                        </li>
                                        {/* <li><a class="dropdown-item text-warning" href="#" target="_self">My Profile</a></li> */}
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link active text-warning"
                                        aria-current="page"
                                        to={'/myorder'}
                                    >
                                        <FontAwesomeIcon icon={faCartShopping} /> My Order
                                    </Link>
                                </li>
                                {/* <li class="nav-item">
              <a class="nav-link active text-warning" aria-current="page" href="#" target="_blank"><i class="fa-solid fa-user"></i></a>
            </li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            {/*header end*/}
        </div>
    )
}

export default Header
