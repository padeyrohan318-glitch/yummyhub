import React from 'react'
import Footer from './Footer'
import Header from './Header'

const About = () => {
    return (
        <div>
            <Header />
            <>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>About Us</title>
                <link rel="stylesheet" href="css/owl.carousel.min.css" />
                <link rel="stylesheet" href="css/owl.theme.default.css" />
                <link rel="stylesheet" href="css/bootstrap.min.css" />
                <link rel="stylesheet" href="css/all.min.css" />
                <link rel="stylesheet" href="css/style.css" />
                {/* about section start */}
                {/*first section start*/}
                <section className="about-first-section py-5">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 ab-content text-center">
                                <h1 className="text-uppercase about text-warning">ABOUT US</h1>
                                <h6 className="text-uppercase text-dark about-luxury">
                                    - Luxury restaurant -
                                </h6>
                            </div>
                            <div className="col-lg-12 bg-light py-5">
                                <div className="row py-5">
                                    <div className="col-lg-6 d-flex justify-content-center align-items-center">
                                        <div className="logo p-5">
                                            <img src="images/paneer.jpg" alt="logo" className="img-fluid" />
                                            {/* logo-image */}
                                            <h2>
                                                The food you eat can be either the safest and most powerful
                                                medicine or the slowest form of poison.
                                            </h2>
                                            <h5>- Alexander harvard</h5>
                                            {/* logo-image */}
                                        </div>
                                    </div>
                                    <div className="col-lg-6 d-flex justify-center-center align-items-center">
                                        <img src="images/ab1.png" alt="logo" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <img src="images/ab3.jpg" alt="image" className="img-fluid" />
                            </div>
                            <div className="col-lg-6 p-5 text-center d-flex justify-center-center align-items-center">
                                <div className="p-5">
                                    <h5 className="fs-1">
                                        The food you eat can be either the safest and most powerful
                                        medicine or the slowest form of poison .
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* first section end*/}
                {/* second section start*/}
                <section className="about-second-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 py-5">
                                <h6 className="text-uppercase text-danger text-center">
                                    - restaurant facilities -
                                </h6>
                                <h1 className="text-dark text-uppercase text-center py-2">
                                    restaurant special
                                </h1>
                            </div>
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-4 py-3">
                                        <div className="card">
                                            <img
                                                src="images/panneer65.jpg"
                                                alt="about-image"
                                                className="img-fluid"
                                            />
                                        </div>
                                        <h3 className="text-uppercase text-center py-2">
                                            private dining
                                        </h3>
                                        <h5 className="text-uppercase text-center text-secondary">
                                            Lorem ipsum dolor sit amet consectetur adipiscing.
                                        </h5>
                                    </div>
                                    <div className="col-lg-4 py-3">
                                        <div className="card">
                                            <img
                                                src="images/pavbhaji.jpg"
                                                alt="about-image"
                                                className="img-fluid"
                                            />
                                        </div>
                                        <h3 className="text-uppercase text-center py-2">the raw bar</h3>
                                        <h5 className="text-uppercase text-center text-secondary">
                                            Lorem ipsum dolor sit amet consectetur adipiscing.
                                        </h5>
                                    </div>
                                    <div className="col-lg-4 py-3">
                                        <div className="card">
                                            <img
                                                src="images/panneer65.jpg"
                                                alt="about-image"
                                                className="img-fluid"
                                            />
                                        </div>
                                        <h3 className="text-uppercase text-center py-2">
                                            Outdoor catering
                                        </h3>
                                        <h5 className="text-uppercase text-center text-secondary">
                                            Lorem ipsum dolor sit amet consectetur adipiscing.
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 d-center py-5 ">
                                <img src="images/ab4.jpg" alt="image" className="img-fluid" />
                            </div>
                            <div className="col-lg-6 justify-center-center  p-5 t-cenret">
                                <h2>---Since 1988 Restaurant</h2>
                                <h4>Awesome dining, Delicious food.</h4>
                                <h6>
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod
                                    tempor incididunt ut labore et dolore magna minim veniam nostrud
                                    exercitation.
                                </h6>
                                <img
                                    src="images/Restaurant-Logo.jpg"
                                    alt="restaurant logo"
                                    className="image fluid py-4"
                                />
                                <h5 className="text-center">INDIA'S NO.1 RESTAURANT</h5>
                            </div>
                        </div>
                    </div>
                </section>
                {/* second section end+*/}
                {/* about section end */}
            </>
            <Footer />
        </div>
    )
}

export default About
