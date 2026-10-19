import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlRice, faCarrot, faEgg, faIceCream, faMugHot } from '@fortawesome/free-solid-svg-icons'

const Menu = () => {
    return (
        <div>
            <>
                <Header />
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Menu</title>
                <link rel="stylesheet" href="css/owl.carousel.min.css" />
                <link rel="stylesheet" href="css/owl.theme.default.css" />
                <link rel="stylesheet" href="css/bootstrap.min.css" />
                <link rel="stylesheet" href="css/all.min.css" />
                <link rel="stylesheet" href="css/style.css" />
                {/*menu section start*/}
                <section className="menu-section py-5">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 ab-content text-center pb-3 bg-light-subtle">
                                <h1 className="text-uppercase our-menu text-warning">our menu</h1>
                                <h4 className="text-uppercase text-dark menu-remark">
                                    -remarkable recipes-
                                </h4>
                            </div>
                            <div className="col-lg-12 bg-light-subtle">
                                <div className="row">
                                    <div className="col-lg-6 py-5 d-flex justify-content-center">
                                        <img src="images/menu.jpg" alt="menu" className="img-fluid" />
                                    </div>
                                    <div className="col-lg-6 d-flex justify-content-center align-items-center">
                                        <div>
                                            <h3 className="text-uppercase text-danger py-5">
                                                -Best quality food
                                            </h3>
                                            <h1 className="text-dark text-uppercase py-2">
                                                {" "}
                                                The greatest table
                                            </h1>
                                            <h1 className="text-dark text-uppercase py-2">
                                                luxury restaurant.
                                            </h1>
                                            <p>Lorem ipsum dolor sit amet consectetur elit do</p>
                                            <p>tempor incididunt ut labore et dolore</p>
                                            <p> magna minim veniam nostrud exercitation.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* second menu start */}
                            <div className="menu-section">
                                <div className="container-fluid pt-5 bg-white">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <h6 className="text-uppercase text-danger text-center fs-3">
                                                - choose delicious -
                                            </h6>
                                            <h1 className="text-uppercase text-dark text-center">
                                                popular menu
                                            </h1>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="col-lg-1" />
                                                <div className="col-lg-2 text-center">
                                                    <FontAwesomeIcon icon={faBowlRice} className="rounded-circle p-4 popular-menu" />
                                                    <h4>Starters</h4>
                                                </div>
                                                <div className="col-lg-2 text-center">
                                                    <FontAwesomeIcon icon={faEgg} className="rounded-circle p-4 popular-menu" />
                                                    <h4>Nonvage</h4>
                                                </div>
                                                <div className="col-lg-2 text-center">
                                                    <FontAwesomeIcon icon={faCarrot} className="rounded-circle p-4 popular-menu" />
                                                    <h4>Vegetarian</h4>
                                                </div>
                                                <div className="col-lg-2 text-center">
                                                    <FontAwesomeIcon icon={faIceCream} className="rounded-circle p-4 popular-menu" />
                                                    <h4>Dessert</h4>
                                                </div>
                                                <div className="col-lg-2 text-center">
                                                    <FontAwesomeIcon icon={faMugHot} className="rounded-circle p-4 popular-menu" />
                                                    <h4>Drinks</h4>
                                                </div>
                                                <div className="col-lg-1 text-center" />
                                            </div>
                                        </div>
                                        <div className="col-lg-1" />
                                        <div className="col-lg-10">
                                            <div className="row py-5">
                                                <div className="col-lg-6 py-4">
                                                    <div className="product">
                                                        <div className="row py-2">
                                                            <div className="col-lg-3 d-flex align-items-center ps-4">
                                                                <img
                                                                    src="images/p1.jpg"
                                                                    className="img-fluid rounded-circle"
                                                                    alt="Product"
                                                                />
                                                            </div>
                                                            <div className="col-lg-8 d-flex align-items-center">
                                                                <div className="card-body">
                                                                    <h5 className="card-title">
                                                                        Boiled organic egg ----------------$12
                                                                    </h5>
                                                                    <p className="card-text text-secondary">
                                                                        Lorem ipsum has been the industry.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 py-4">
                                                    <div className="product">
                                                        <div className="row py-2">
                                                            <div className="col-lg-3 d-flex align-items-center ps-4">
                                                                <img
                                                                    src="images/p2.jpg"
                                                                    className="img-fluid rounded-circle"
                                                                    alt="Product"
                                                                />
                                                            </div>
                                                            <div className="col-lg-8 d-flex align-items-center">
                                                                <div className="card-body">
                                                                    <h5 className="card-title">
                                                                        Boiled organic egg ----------------$12
                                                                    </h5>
                                                                    <p className="card-text text-secondary">
                                                                        Lorem ipsum has been the industry.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 py-4">
                                                    <div className="product">
                                                        <div className="row py-2">
                                                            <div className="col-lg-3 d-flex align-items-center ps-4">
                                                                <img
                                                                    src="images/p3.jpg"
                                                                    className="img-fluid rounded-circle"
                                                                    alt="Product"
                                                                />
                                                            </div>
                                                            <div className="col-lg-8 d-flex align-items-center">
                                                                <div className="card-body">
                                                                    <h5 className="card-title">
                                                                        Boiled organic egg ----------------$12
                                                                    </h5>
                                                                    <p className="card-text text-secondary">
                                                                        Lorem ipsum has been the industry.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 py-4">
                                                    <div className="product">
                                                        <div className="row py-2">
                                                            <div className="col-lg-3 d-flex align-items-center ps-4">
                                                                <img
                                                                    src="images/p4.jpg"
                                                                    className="img-fluid rounded-circle"
                                                                    alt="Product"
                                                                />
                                                            </div>
                                                            <div className="col-lg-8 d-flex align-items-center">
                                                                <div className="card-body">
                                                                    <h5 className="card-title">
                                                                        Boiled organic egg ----------------$12
                                                                    </h5>
                                                                    <p className="card-text text-secondary">
                                                                        Lorem ipsum has been the industry.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 py-4">
                                                    <div className="product">
                                                        <div className="row py-2">
                                                            <div className="col-lg-3 d-flex align-items-center ps-4">
                                                                <img
                                                                    src="images/p5.jpg"
                                                                    className="img-fluid rounded-circle"
                                                                    alt="Product"
                                                                />
                                                            </div>
                                                            <div className="col-lg-8 d-flex align-items-center">
                                                                <div className="card-body">
                                                                    <h5 className="card-title">
                                                                        Boiled organic egg ----------------$12
                                                                    </h5>
                                                                    <p className="card-text text-secondary">
                                                                        Lorem ipsum has been the industry.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 py-4">
                                                    <div className="product">
                                                        <div className="row py-2">
                                                            <div className="col-lg-3 d-flex align-items-center ps-4">
                                                                <img
                                                                    src="images/p6.jpg"
                                                                    className="img-fluid rounded-circle"
                                                                    alt="Product"
                                                                />
                                                            </div>
                                                            <div className="col-lg-8 d-flex align-items-center">
                                                                <div className="card-body">
                                                                    <h5 className="card-title">
                                                                        Boiled organic egg ----------------$12
                                                                    </h5>
                                                                    <p className="card-text text-secondary">
                                                                        Lorem ipsum has been the industry.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 py-4">
                                                    <div className="product">
                                                        <div className="row py-2">
                                                            <div className="col-lg-3 d-flex align-items-center ps-4">
                                                                <img
                                                                    src="images/p1.jpg"
                                                                    className="img-fluid rounded-circle"
                                                                    alt="Product"
                                                                />
                                                            </div>
                                                            <div className="col-lg-8 d-flex align-items-center">
                                                                <div className="card-body">
                                                                    <h5 className="card-title">
                                                                        Boiled organic egg ----------------$12
                                                                    </h5>
                                                                    <p className="card-text text-secondary">
                                                                        Lorem ipsum has been the industry.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 py-4">
                                                    <div className="product">
                                                        <div className="row py-2">
                                                            <div className="col-lg-3 d-flex align-items-center ps-4">
                                                                <img
                                                                    src="images/p2.jpg"
                                                                    className="img-fluid rounded-circle"
                                                                    alt="Product"
                                                                />
                                                            </div>
                                                            <div className="col-lg-8 d-flex align-items-center">
                                                                <div className="card-body">
                                                                    <h5 className="card-title">
                                                                        Boiled organic egg ----------------$12
                                                                    </h5>
                                                                    <p className="card-text text-secondary">
                                                                        Lorem ipsum has been the industry.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 py-4">
                                                    <div className="product">
                                                        <div className="row py-2">
                                                            <div className="col-lg-3 d-flex align-items-center ps-4">
                                                                <img
                                                                    src="images/p3.jpg"
                                                                    className="img-fluid rounded-circle"
                                                                    alt="Product"
                                                                />
                                                            </div>
                                                            <div className="col-lg-8 d-flex align-items-center">
                                                                <div className="card-body">
                                                                    <h5 className="card-title">
                                                                        Boiled organic egg ----------------$12
                                                                    </h5>
                                                                    <p className="card-text text-secondary">
                                                                        Lorem ipsum has been the industry.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 py-4">
                                                    <div className="product">
                                                        <div className="row py-2">
                                                            <div className="col-lg-3 d-flex align-items-center ps-4">
                                                                <img
                                                                    src="images/p4.jpg"
                                                                    className="img-fluid rounded-circle"
                                                                    alt="Product"
                                                                />
                                                            </div>
                                                            <div className="col-lg-8 d-flex align-items-center">
                                                                <div className="card-body">
                                                                    <h5 className="card-title">
                                                                        Boiled organic egg ----------------$12
                                                                    </h5>
                                                                    <p className="card-text text-secondary">
                                                                        Lorem ipsum has been the industry.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 py-4">
                                                    <div className="product">
                                                        <div className="row py-2">
                                                            <div className="col-lg-3 d-flex align-items-center ps-4">
                                                                <img
                                                                    src="images/p5.jpg"
                                                                    className="img-fluid rounded-circle"
                                                                    alt="Product"
                                                                />
                                                            </div>
                                                            <div className="col-lg-8 d-flex align-items-center">
                                                                <div className="card-body">
                                                                    <h5 className="card-title">
                                                                        Boiled organic egg ----------------$12
                                                                    </h5>
                                                                    <p className="card-text text-secondary">
                                                                        Lorem ipsum has been the industry.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 py-4">
                                                    <div className="product">
                                                        <div className="row">
                                                            <div className="col-lg-3 d-flex align-items-center ps-4">
                                                                <img
                                                                    src="images/p6.jpg"
                                                                    className="img-fluid rounded-circle"
                                                                    alt="Product"
                                                                />
                                                            </div>
                                                            <div className="col-lg-8 d-flex align-items-center">
                                                                <div className="card-body">
                                                                    <h5 className="card-title">
                                                                        Boiled organic egg ----------------$12
                                                                    </h5>
                                                                    <p className="card-text text-secondary">
                                                                        Lorem ipsum has been the industry.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* last section start */}
                                                <div className="col-lg-12 pt-5">
                                                    <div className="row">
                                                        <h5 className="text-uppercase text-danger text-center fs-3">
                                                            - choose delicious -
                                                        </h5>
                                                        <h1 className="text-dark text-uppercase text-center py-2">
                                                            Special proposals
                                                        </h1>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="row pt-5">
                                                            <div className="col-lg-4 py-3">
                                                                <div className="card card-blog">
                                                                    <img
                                                                        src="images/p13.jpg"
                                                                        className="card-img-top img-fluid p-3"
                                                                        alt=""
                                                                    />
                                                                    <div className="card-body d-flex justify-content-around">
                                                                        <div>
                                                                            <h5 className="card-title">
                                                                                Grilled steak marinades
                                                                            </h5>
                                                                            <h5>
                                                                                <del>$25.00 </del> $19.00
                                                                            </h5>
                                                                        </div>
                                                                        <div className="p-3">
                                                                            <button className="btn btn-dark">Show</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 py-3">
                                                                <div className="card card-blog">
                                                                    <img
                                                                        src="/images/p14.jpg"
                                                                        className="card-img-top img-fluid p-3"
                                                                        alt=""
                                                                    />
                                                                    <div className="card-body d-flex justify-content-around">
                                                                        <div>
                                                                            <h5 className="card-title">
                                                                                Beef masala grill
                                                                            </h5>
                                                                            <h5>
                                                                                <del>$24.00 </del> $18.00
                                                                            </h5>
                                                                        </div>
                                                                        <div className="p-3">
                                                                            <button className="btn btn-dark">Show</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 py-3">
                                                                <div className="card card-blog">
                                                                    <img
                                                                        src="/images/p15.jpg"
                                                                        className="card-img-top img-fluid p-3"
                                                                        alt=""
                                                                    />
                                                                    <div className="card-body d-flex justify-content-around">
                                                                        <div>
                                                                            <h5 className="card-title">
                                                                                Slow Cooker Potpourri
                                                                            </h5>
                                                                            <h5>
                                                                                <del>$22.00 </del> $20.00
                                                                            </h5>
                                                                        </div>
                                                                        <div className="p-3">
                                                                            <button className="btn btn-dark">Show</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 py-3">
                                                                <div className="card card-blog">
                                                                    <img
                                                                        src="images/p13.jpg"
                                                                        className="card-img-top img-fluid p-3"
                                                                        alt=""
                                                                    />
                                                                    <div className="card-body d-flex justify-content-around">
                                                                        <div>
                                                                            <h5 className="card-title">
                                                                                Grilled steak marinades
                                                                            </h5>
                                                                            <h5>
                                                                                <del>$25.00 </del> $19.00
                                                                            </h5>
                                                                        </div>
                                                                        <div className="p-3">
                                                                            <button className="btn btn-dark">Show</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 py-3">
                                                                <div className="card card-blog">
                                                                    <img
                                                                        src="/images/p14.jpg"
                                                                        className="card-img-top img-fluid p-3"
                                                                        alt=""
                                                                    />
                                                                    <div className="card-body d-flex justify-content-around">
                                                                        <div>
                                                                            <h5 className="card-title">
                                                                                Beef masala grill
                                                                            </h5>
                                                                            <h5>
                                                                                <del>$24.00 </del> $18.00
                                                                            </h5>
                                                                        </div>
                                                                        <div className="p-3">
                                                                            <button className="btn btn-dark">Show</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 py-3">
                                                                <div className="card card-blog">
                                                                    <img
                                                                        src="/images/p15.jpg"
                                                                        className="card-img-top img-fluid p-3"
                                                                        alt=""
                                                                    />
                                                                    <div className="card-body d-flex justify-content-around">
                                                                        <div>
                                                                            <h5 className="card-title">
                                                                                Slow Cooker Potpourri
                                                                            </h5>
                                                                            <h5>
                                                                                <del>$22.00 </del> $20.00
                                                                            </h5>
                                                                        </div>
                                                                        <div className="p-3">
                                                                            <button className="btn btn-dark">Show</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 py-3">
                                                                <div className="card card-blog">
                                                                    <img
                                                                        src="images/p13.jpg"
                                                                        className="card-img-top img-fluid p-3"
                                                                        alt=""
                                                                    />
                                                                    <div className="card-body d-flex justify-content-around">
                                                                        <div>
                                                                            <h5 className="card-title">
                                                                                Grilled steak marinades
                                                                            </h5>
                                                                            <h5>
                                                                                <del>$25.00 </del> $19.00
                                                                            </h5>
                                                                        </div>
                                                                        <div className="p-3">
                                                                            <button className="btn btn-dark">Show</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 py-3">
                                                                <div className="card card-blog">
                                                                    <img
                                                                        src="/images/p14.jpg"
                                                                        className="card-img-top img-fluid p-3"
                                                                        alt=""
                                                                    />
                                                                    <div className="card-body d-flex justify-content-around">
                                                                        <div>
                                                                            <h5 className="card-title">
                                                                                Beef masala grill
                                                                            </h5>
                                                                            <h5>
                                                                                <del>$24.00 </del> $18.00
                                                                            </h5>
                                                                        </div>
                                                                        <div className="p-3">
                                                                            <button className="btn btn-dark">Show</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 py-3">
                                                                <div className="card card-blog">
                                                                    <img
                                                                        src="/images/p15.jpg"
                                                                        className="card-img-top img-fluid p-3"
                                                                        alt=""
                                                                    />
                                                                    <div className="card-body d-flex justify-content-around">
                                                                        <div>
                                                                            <h5 className="card-title">
                                                                                Slow Cooker Potpourri
                                                                            </h5>
                                                                            <h5>
                                                                                <del>$22.00 </del> $20.00
                                                                            </h5>
                                                                        </div>
                                                                        <div className="p-3">
                                                                            <button className="btn btn-dark">Show</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 py-3">
                                                                <div className="card card-blog">
                                                                    <img
                                                                        src="images/p13.jpg"
                                                                        className="card-img-top img-fluid p-3"
                                                                        alt=""
                                                                    />
                                                                    <div className="card-body d-flex justify-content-around">
                                                                        <div>
                                                                            <h5 className="card-title">
                                                                                Grilled steak marinades
                                                                            </h5>
                                                                            <h5>
                                                                                <del>$25.00 </del> $19.00
                                                                            </h5>
                                                                        </div>
                                                                        <div className="p-3">
                                                                            <button className="btn btn-dark">Show</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 py-3">
                                                                <div className="card card-blog">
                                                                    <img
                                                                        src="/images/p14.jpg"
                                                                        className="card-img-top img-fluid p-3"
                                                                        alt=""
                                                                    />
                                                                    <div className="card-body d-flex justify-content-around">
                                                                        <div>
                                                                            <h5 className="card-title">
                                                                                Beef masala grill
                                                                            </h5>
                                                                            <h5>
                                                                                <del>$24.00 </del> $18.00
                                                                            </h5>
                                                                        </div>
                                                                        <div className="p-3">
                                                                            <button className="btn btn-dark">Show</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 py-3">
                                                                <div className="card card-blog">
                                                                    <img
                                                                        src="/images/p15.jpg"
                                                                        className="card-img-top img-fluid p-3"
                                                                        alt=""
                                                                    />
                                                                    <div className="card-body d-flex justify-content-around">
                                                                        <div>
                                                                            <h5 className="card-title">
                                                                                Slow Cooker Potpourri
                                                                            </h5>
                                                                            <h5>
                                                                                <del>$22.00 </del> $20.00
                                                                            </h5>
                                                                        </div>
                                                                        <div className="p-3">
                                                                            <button className="btn btn-dark">Show</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 py-3">
                                                                <div className="card card-blog">
                                                                    <img
                                                                        src="images/p13.jpg"
                                                                        className="card-img-top img-fluid p-3"
                                                                        alt=""
                                                                    />
                                                                    <div className="card-body d-flex justify-content-around">
                                                                        <div>
                                                                            <h5 className="card-title">
                                                                                Grilled steak marinades
                                                                            </h5>
                                                                            <h5>
                                                                                <del>$25.00 </del> $19.00
                                                                            </h5>
                                                                        </div>
                                                                        <div className="p-3">
                                                                            <button className="btn btn-dark">Show</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 py-3">
                                                                <div className="card card-blog">
                                                                    <img
                                                                        src="/images/p14.jpg"
                                                                        className="card-img-top img-fluid p-3"
                                                                        alt=""
                                                                    />
                                                                    <div className="card-body d-flex justify-content-around">
                                                                        <div>
                                                                            <h5 className="card-title">
                                                                                Beef masala grill
                                                                            </h5>
                                                                            <h5>
                                                                                <del>$24.00 </del> $18.00
                                                                            </h5>
                                                                        </div>
                                                                        <div className="p-3">
                                                                            <button className="btn btn-dark">Show</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 py-3">
                                                                <div className="card card-blog">
                                                                    <img
                                                                        src="/images/p15.jpg"
                                                                        className="card-img-top img-fluid p-3"
                                                                        alt=""
                                                                    />
                                                                    <div className="card-body d-flex justify-content-around">
                                                                        <div>
                                                                            <h5 className="card-title">
                                                                                Slow Cooker Potpourri
                                                                            </h5>
                                                                            <h5>
                                                                                <del>$22.00 </del> $20.00
                                                                            </h5>
                                                                        </div>
                                                                        <div className="p-3">
                                                                            <button className="btn btn-dark">Show</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 py-3">
                                                                <div className="card card-blog">
                                                                    <img
                                                                        src="images/p13.jpg"
                                                                        className="card-img-top img-fluid p-3"
                                                                        alt=""
                                                                    />
                                                                    <div className="card-body d-flex justify-content-around">
                                                                        <div>
                                                                            <h5 className="card-title">
                                                                                Grilled steak marinades
                                                                            </h5>
                                                                            <h5>
                                                                                <del>$25.00 </del> $19.00
                                                                            </h5>
                                                                        </div>
                                                                        <div className="p-3">
                                                                            <button className="btn btn-dark">Show</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 py-3">
                                                                <div className="card card-blog">
                                                                    <img
                                                                        src="/images/p14.jpg"
                                                                        className="card-img-top img-fluid p-3"
                                                                        alt=""
                                                                    />
                                                                    <div className="card-body d-flex justify-content-around">
                                                                        <div>
                                                                            <h5 className="card-title">
                                                                                Beef masala grill
                                                                            </h5>
                                                                            <h5>
                                                                                <del>$24.00 </del> $18.00
                                                                            </h5>
                                                                        </div>
                                                                        <div className="p-3">
                                                                            <button className="btn btn-dark">Show</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 py-3">
                                                                <div className="card card-blog">
                                                                    <img
                                                                        src="/images/p15.jpg"
                                                                        className="card-img-top img-fluid p-3"
                                                                        alt=""
                                                                    />
                                                                    <div className="card-body d-flex justify-content-around">
                                                                        <div>
                                                                            <h5 className="card-title">
                                                                                Slow Cooker Potpourri
                                                                            </h5>
                                                                            <h5>
                                                                                <del>$22.00 </del> $20.00
                                                                            </h5>
                                                                        </div>
                                                                        <div className="p-3">
                                                                            <button className="btn btn-dark">Show</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 py-3">
                                                                <div className="card card-blog">
                                                                    <img
                                                                        src="images/p13.jpg"
                                                                        className="card-img-top img-fluid p-3"
                                                                        alt=""
                                                                    />
                                                                    <div className="card-body d-flex justify-content-around">
                                                                        <div>
                                                                            <h5 className="card-title">
                                                                                Grilled steak marinades
                                                                            </h5>
                                                                            <h5>
                                                                                <del>$25.00 </del> $19.00
                                                                            </h5>
                                                                        </div>
                                                                        <div className="p-3">
                                                                            <button className="btn btn-dark">Show</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 py-3">
                                                                <div className="card card-blog">
                                                                    <img
                                                                        src="/images/p14.jpg"
                                                                        className="card-img-top img-fluid p-3"
                                                                        alt=""
                                                                    />
                                                                    <div className="card-body d-flex justify-content-around">
                                                                        <div>
                                                                            <h5 className="card-title">
                                                                                Beef masala grill
                                                                            </h5>
                                                                            <h5>
                                                                                <del>$24.00 </del> $18.00
                                                                            </h5>
                                                                        </div>
                                                                        <div className="p-3">
                                                                            <button className="btn btn-dark">Show</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 py-3">
                                                                <div className="card card-blog">
                                                                    <img
                                                                        src="/images/p15.jpg"
                                                                        className="card-img-top img-fluid p-3"
                                                                        alt=""
                                                                    />
                                                                    <div className="card-body d-flex justify-content-around">
                                                                        <div>
                                                                            <h5 className="card-title">
                                                                                Slow Cooker Potpourri
                                                                            </h5>
                                                                            <h5>
                                                                                <del>$22.00 </del> $20.00
                                                                            </h5>
                                                                        </div>
                                                                        <div className="p-3">
                                                                            <button className="btn btn-dark">Show</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*menu section end*/}
                <Footer />
            </>

        </div>
    )
}

export default Menu
