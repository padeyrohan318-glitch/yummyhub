import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRightFromBracket, faEnvelope, faF, faGlobe, faGrinStars, faKiwiBird, faLocationDot, faMessage, faPhone} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div>
            {/*footer section start*/}
            <footer className="footer bg-black">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 py-5 fupper">
                            <div className="row">
                                <div className="col-lg-3 text-center">
                                    <FontAwesomeIcon icon={faMessage} className="mx-auto fup pb-3 d-flex" />
                                    <h6>ABOUT RESTAURANT</h6>
                                    <h5>Enjoy a wonderfull cafe</h5>
                                    <h5>dining experience</h5>
                                </div>
                                <div className="col-lg-3 text-center">
                                    <FontAwesomeIcon icon={faPhone} className="mx-auto fup pb-3 d-flex" />
                                    <h6>LET'S TALK</h6>
                                    <h5 className=" d-inline">Phone:</h5>
                                    <h5 className="booktable d-inline"><Link to={'tel:8318909455'} className='booktable text-decoration-none'> +918-318-909-455</Link></h5>
                                    <h5> Fax:1-800-222-002</h5>
                                </div>
                                <div className="col-lg-3 text-center">
                                    <FontAwesomeIcon icon={faEnvelope} className="mx-auto fup pb-3 d-flex" />
                                    <h6>BOOK A TABLE</h6>
                                    <h5><Link to={'mailto:padeyrohan@gmail.com'} className='booktable text-decoration-none'>padeyrohan@gmail.com</Link></h5>
                                    <h5><Link to={'mailto:padeyrohan@gmail.com'} className='booktable text-decoration-none'>padeyrohan@gmail.com</Link></h5>
                                </div>
                                <div className="col-lg-3 text-center">
                                    <FontAwesomeIcon icon={faLocationDot} className="mx-auto fup pb-3 d-flex" />
                                    <h6>CONTACT US</h6>
                                    <h5>Lorem ipsum consectetur</h5>
                                    <h5>adipicing onsecteture</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 py-3">
                            <div className="row">
                                <div className="col-lg-4 fs-6 text-warning d-flex justify-content-end align-items-center">
                                    <p>© Copyright 2024, All Rights Reserved By Code Wizard</p>
                                </div>
                                <div className="col-lg-4 d-flex justify-content-end align-items-center">
                                    <img src="images/logo.png" alt="logo" />
                                </div>
                                <div className="col-lg-4 py-3 px-5 text-warning">
                                    <FontAwesomeIcon icon={faFacebookF} className="ps-5 fbottom" />
                                    <FontAwesomeIcon icon={faGlobe} className="ps-5 fbottom"/>
                                    <FontAwesomeIcon icon={faTwitter} className="ps-5 fbottom" />
                                    <FontAwesomeIcon icon={faInstagram} className="ps-5 fbottom" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/*footer section end*/}
        </div>
    )
}

export default Footer
