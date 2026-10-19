import React, {useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom'


const Contact = () => {

    const navigate = useNavigate()

    const [form, setForm] = useState({
        name:"",
        phone:"",
        email:"",
        message:""
    })

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        
        setForm({
            ...form,
            [name]:value
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:5000/client/api/contact-us`, {
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(form)
            })

            if(res.status === 400){
                toast.error('All fields is required')
            }else if(res.status === 201){
                toast.success('Contact Added Successfully')
                setForm({name:"",phone:"",email:"",message:""})
            }else{
                toast.error('Somethings went wrong')
                setForm({name:"",phone:"",email:"",message:""})
                navigate('/')
            }
        } catch (error) {
            console.error('error from contact us page', error)
        }
    }

    return (
        <div>
            <Header />
            <>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Contact</title>
                <link rel="stylesheet" href="css/owl.carousel.min.css" />
                <link rel="stylesheet" href="css/owl.theme.default.css" />
                <link rel="stylesheet" href="css/bootstrap.min.css" />
                <link rel="stylesheet" href="css/all.min.css" />
                <link rel="stylesheet" href="css/style.css" />
                {/*contact section start*/}
                <section className="contact-section bg-light-subtle py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 ab-content text-center pb-5">
                                <h1 className="text-uppercase contact-content text-warning">
                                    Contact us
                                </h1>
                            </div>
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="row fs-4">
                                            <div className="col-lg-6 contact-form">
                                                <form  className="pt-4 px-5" onSubmit={handleSubmit}>
                                                    <h1 className="text-center px-4">Contact Us</h1>
                                                    <label htmlFor="username" className="form-label">
                                                        Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="Name"
                                                        className="form-control ps-4"
                                                        id="username"
                                                        name="name"
                                                        value={form.name}
                                                        onChange={handleChange}
                                                    />
                                                    <label htmlFor="no" className="form-label">
                                                        Mobile Number
                                                    </label>
                                                    <input
                                                        type="number"
                                                        placeholder="Enter Your Mob. No."
                                                        className="form-control ps-4"
                                                        id="no"
                                                        name="phone"
                                                        value={form.phone}
                                                        onChange={handleChange}
                                                    />
                                                    <label htmlFor="email" className="form-label">
                                                        Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        placeholder="Enter Your Email"
                                                        className="form-control ps-4"
                                                        id="email"
                                                        name="email"
                                                        value={form.email}
                                                        onChange={handleChange}
                                                    />
                                                    <label htmlFor="msg" className="form-label">
                                                        Your Message
                                                    </label>
                                                    <textarea
                                                        placeholder="Enter Your Message"
                                                        className="form-control msg"
                                                        id="msg"
                                                        name="message"
                                                        rows={3}
                                                       value={form.message}
                                                       onChange={handleChange}
                                                    />
                                                    <div className="login py-4">
                                                        <button className="btn bg-success-subtle text-center py-2 w-100">
                                                            Log In
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col-lg-6 img-fluid contact-img">
                                                <img src="images/contact.jpg" alt="Contact Image" />
                                            </div>
                                            <div className="col-lg-12 py-3">
                                                <h2 className="text-center py-5">Google Map</h2>
                                                <div className="col-lg-12 google-map">
                                                    <iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14247.019116209542!2d82.12533978715821!3d26.784085599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a079c38cfcf71%3A0x83c592743612fbaf!2sPizza%20Hut!5e0!3m2!1sen!2sin!4v1726364808125!5m2!1sen!2sin"
                                                        width="100%"
                                                        height="450px"
                                                        style={{ border: 0 }}
                                                        allowFullScreen=""
                                                        loading="lazy"
                                                        referrerPolicy="no-referrer-when-downgrade"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*contact section end*/}
            </>
            <Footer />
        </div>
    )
}

export default Contact
