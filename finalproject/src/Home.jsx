import React, { useEffect, useState } from 'react';
import Header from './component/Header.jsx';
import Footer from './component/Footer.jsx';
import OwlCarousel from 'react-owl-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlRice, faCarrot, faEgg, faIceCream, faLock, faMugHot, faShopLock, faSpa, faSpoon, faTruckFast, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
// import {  } from '@fortawesome/free-brands-svg-icons';

const Home = () => {

    const [data, setData] = useState([])


    useEffect(() => {

        const res = async () => {
            try {
                const response = await fetch(`http://localhost:5000/client/api/get-menu`, {
                    method: 'GET'
                })

                if (response.status === 200) {
                    const final_res = await response.json();
                    setData(final_res.menu);
                }
            } catch (error) {
                console.error('error from get all menues', error)
            }
        }

        res();

    }, [])

    return (
        <>
            <Header />
            {/*main content start*/}
            <main>
                {/*hero section start*/}
                <section className="hero-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 hero-img">
                                <div className="hero-image-inner">
                                    <div className="he-image-inner text-uppercase">
                                        <div className="hero-content text-center">
                                            <h3>Experience the taste of italy</h3>
                                            <h1 className="hero-content-inner pt-5 text-light">
                                                greate dining
                                            </h1>
                                            <h1 className="hero-content-inner pb-3 text-light">
                                                RESTAURANT
                                            </h1>
                                            <button className="btn btn-dark py-3">
                                                Authentic Experience →
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bhero-section bg-white">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="bhero">
                                    <div className="bhero-img">
                                        <img src="images/hero.jpg" alt="Bottom Hero" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 d-flex justify-content-center align-items-center">
                                <div className="text-center py-5 px-4">
                                    <h5 className="text-danger fs-4 text-start w-100 px-5">
                                        ------- since 2024
                                    </h5>
                                    <h1 className="bhero-content-up text-uppercase">
                                        wonderfull dining
                                    </h1>
                                    <h1 className="bhero-content-up text-uppercase pb-3">
                                        experience &amp; food
                                    </h1>
                                    <p className="w-75 mx-auto py-3 fs-5">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
                                        nisi fugiat modi magni repellendus corrupti consectetur nihil,
                                        reiciendis quos eos
                                    </p>
                                    <button className="btn btn-dark py-3">
                                        <Link
                                            to={'/about'}
                                            className="text-light text-decoration-none"
                                        >
                                            ABOUT RESTAURANT
                                        </Link>
                                    </button>
                                    <i className="fa-solid fa-phone fs-4 ps-5 text-warning" />
                                    <p className="d-inline px-2 fs-4 bhero-phone">1-800-222-000</p>
                                </div>
                            </div>
                            <div className="col-lg12 pb-5">
                                <div className="row  text-center">
                                    <div className="col-lg-4">
                                        <FontAwesomeIcon icon={faTruckFast} className="rounded-circle p-4 fast-delivery" />
                                        <h4 className="text-uppercase pt-5">Fast Delivery</h4>
                                        <h6 className="text-secondary">Within 30 minutes</h6>
                                    </div>
                                    <div className="col-lg-4">
                                        <FontAwesomeIcon icon={faSpa} className="rounded-circle p-4 fast-delivery" />
                                        <h4 className="text-uppercase pt-5">absolute dining</h4>
                                        <h6 className="text-secondary">Best buffet restaurant</h6>
                                    </div>
                                    <div className="col-lg-4">
                                        <FontAwesomeIcon icon={faLock} className="rounded-circle p-4 fast-delivery" />
                                        <h4 className="text-uppercase pt-5">pickup Delivery</h4>
                                        <h6 className="text-secondary">Grab your food order</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*hero section end*/}
                {/*menu section start*/}
                <section className="menu-section">
                    <div className="container-fluid py-5 bg-white">
                        <div className="row">
                            <div className="col-lg-12">
                                <h6 className="text-uppercase fs-4 text-danger text-center">
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
                                                    <div className='p-img rounded-circle'>
                                                        <img
                                                            src="images/p1.jpg"
                                                            className="img-fluid pr-img"
                                                            alt="Product"
                                                        />
                                                    </div>
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
                                                    <div className='p-img rounded-circle'>
                                                        <img
                                                            src="images/p2.jpg"
                                                            className="img-fluid pr-img"
                                                            alt="Product"
                                                        />
                                                    </div>
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
                                                    <div className='p-img rounded-circle'>
                                                        <img
                                                            src="images/p3.jpg"
                                                            className="img-fluid pr-img"
                                                            alt="Product"
                                                        />
                                                    </div>
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
                                                    <div className='p-img rounded-circle'>
                                                        <img
                                                            src="images/p1.jpg"
                                                            className="img-fluid pr-img"
                                                            alt="Product"
                                                        />
                                                    </div>
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
                                                    <div className='p-img rounded-circle'>
                                                        <img
                                                            src="images/p2.jpg"
                                                            className="img-fluid pr-img"
                                                            alt="Product"
                                                        />
                                                    </div>
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
                                                    <div className='p-img rounded-circle'>
                                                        <img
                                                            src="images/p3.jpg"
                                                            className="img-fluid pr-img"
                                                            alt="Product"
                                                        />
                                                    </div>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*menu section end*/}
                {/*popular dishes section start*/}
                <section className="popular-dishes">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 bg-light-subtle">
                                <h6 className="text-uppercase fs-4 text-danger text-center">
                                    - special choose -
                                </h6>
                                <h1 className="text-uppercase text-dark text-center">
                                    popular dishes
                                </h1>
                            </div>
                            {/*owl carousal*/}
                            <div className="col-lg-12 pt-5">
                                <OwlCarousel className='owl-theme owl-carousel owl-theme' loop margin={20} autoplay={true} autoplayTimeout={1200} dots={false} nav stagePadding={200}>
                                    <div className="item1">
                                        <img src="images/p1.jpg" alt="slide1" className='slide' />
                                    </div>
                                    <div className="item1">
                                        <img src="images/p2.jpg" alt="slide2" />
                                    </div>
                                    <div className="item1">
                                        <img src="images/p3.jpg" alt="slide3" />
                                    </div>
                                    <div className="item1">
                                        <img src="images/p4.jpg" alt="slide4" />
                                    </div>
                                    <div className="item1">
                                        <img src="images/p5.jpg" alt="slide5" />
                                    </div>
                                </OwlCarousel>

                            </div>
                            <div className="col-lg-12 bg-light-subtle">
                                <div className="row py-5">
                                    <div className="col-lg-3 pt-5">
                                        <div className="pt-5">
                                            <div className="pt-5">
                                                <img
                                                    src="images/ab1.jpg"
                                                    alt="about"
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 text-center text-uppercase d-flex align-items-center">
                                        <h3 className="px-3">
                                            food for us comes from our relatives wheather they have wings
                                            or fins or roots that is how we consider food has a culture it
                                            has history it has a story it has relationships.
                                        </h3>
                                    </div>
                                    <div className="col-lg-3">
                                        <img src="images/ab2.jpg" alt="about" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*popular dishes section end*/}
                {/*review section start*/}
                <section className="Review-section">
                    <div className="container-fluid pb-5">
                        <div className="row">
                            <div className="col-lg-12 bg-white pb-5">
                                <h1
                                    className="text-uppercase text-warning text-center"
                                    style={{ fontSize: 80, fontWeight: "bolder" }}
                                >
                                    Review
                                </h1>
                            </div>
                            {/*owl carousal*/}
                            <div className="col-lg-12 py-5">
                                <OwlCarousel className='owl-theme owl-carousel owl-theme' loop margin={20} autoplay={true} autoplayTimeout={1200} dots={false} nav stagePadding={200}>
                                    <div className="item1 text-center review-section">
                                        <FontAwesomeIcon icon={faUser} className="fs-1 text-center" />
                                        <h1>Rohan</h1>
                                        <p>
                                            <q>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            </q>
                                        </p>
                                    </div>
                                    <div className="item1 text-center review-section">
                                        <FontAwesomeIcon icon={faUser} className="fs-1 text-center" />
                                        <h1>Rohan Pandey</h1>
                                        <p>
                                            <q>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            </q>
                                        </p>
                                    </div>
                                    <div className="item1 text-center review-section">
                                        <FontAwesomeIcon icon={faUser} className="fs-1 text-center" />
                                        <h1>Rohan Pandey</h1>
                                        <p>
                                            <q>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            </q>
                                        </p>
                                    </div>
                                    <div className="item1 text-center review-section">
                                        <FontAwesomeIcon icon={faUser} className="fs-1 text-center" />
                                        <h1>Rohan Pandey</h1>
                                        <p>
                                            <q>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            </q>
                                        </p>
                                    </div>
                                    <div className="item1 text-center review-section">
                                        <FontAwesomeIcon icon={faUser} className="fs-1 text-center" />
                                        <h1>Rohan Pandey</h1>
                                        <p>
                                            <q>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            </q>
                                        </p>
                                    </div>
                                </OwlCarousel>


                            </div>
                        </div>
                    </div>
                </section>
                {/*review section end*/}
                {/*blog section start*/}
                <section className="blog-section">
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-lg-12 bg-light" />
                            <h6 className="text-uppercase fs-4 text-danger text-center">
                                - From Our Blog -
                            </h6>
                            <h1 className="text-uppercase text-dark text-center">
                                Recent articles
                            </h1>
                        </div>
                        <div className="col-lg-12">
                        <div className="row p-5" >
                            {
                                data.map((item, index) => {
                                    return (
                                        
                                            <div className="col-lg-3 py-4" key={index}>
                                                <Link to={`/detail-product/${item._id}`} style={{textDecoration:"none"}}>
                                                <div className="card card-blog">
                                                    <img
                                                        src={`${item.food_image}`}
                                                        className="img-fluid card-img-top"
                                                        alt="pizza"
                                                    />
                                                    <div className="card-body">
                                                        <h5 className="card-title">{item.food_name}</h5>
                                                        <h5>
                                                            <del className="text-danger">{`$ ${item.food_oldprice}`}</del>{` $ ${item.offer_percentage} Off`} {item.food_newprice}
                                                        </h5>
                                                    </div>
                                                </div>
                                                </Link>
                                            </div>
                                       
                                    );
                                })
                            }

                            </div>

                        </div>
                    </div>
                </section>
                {/*blog section end*/}
            </main>
            {/*main content end*/}
            {/* Code injected by live-server */}
            <Footer />
        </>

    )
}

export default Home
