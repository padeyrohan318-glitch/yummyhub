import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { toast } from 'react-toastify'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'



const Signup = () => {

    const navigate = useNavigate();

    const [form, setform] = useState({
        name: '',
        phone: '',
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value

        setform({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await fetch(`http://localhost:5000/client/api/signup`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify(form)
            })

            if (res.status === 201) {
                toast.success('User Registered successfully')
                setform({ name: "", phone: "", email: "", password: "" })
                navigate('/login')
            } else if (res.status === 409) {
                toast.info('User allready Registered, please login')
                setform({ name: "", phone: "", email: "", password: "" })
                navigate('/login')
            } else if (res.status === 400) {
                toast.error('All field is required')
                setform({ name: "", phone: "", email: "", password: "" })
            } else {
                toast.error('Something went wrong')
                setform({ name: "", phone: "", email: "", password: "" })
                navigate('/')
            }
        } catch (error) {
            console.error('Error from signup User', error);
        }
    }

    return (
        <div>
            <Header />
            <>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Sign Up</title>
                <link rel="stylesheet" href="css/owl.carousel.min.css" />
                <link rel="stylesheet" href="css/owl.theme.default.css" />
                <link rel="stylesheet" href="css/bootstrap.min.css" />
                <link rel="stylesheet" href="css/all.min.css" />
                <link rel="stylesheet" href="css/style.css" />
                {/*main start*/}
                <section className="login-section-start py-5">
                    <div className="container-fluid">
                        <div className="row bg-light">
                            <div className="col-lg-2" />
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="outer col-lg-6 py-5">
                                        <img
                                            src="images/signup.jpg"
                                            alt="form-img"
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="col-lg-6 text-dark">
                                        <div className="row fs-4 py-5">
                                            <div className="col-lg-12 p-3 login-section">
                                                <form className="px-5" onSubmit={handleSubmit}>
                                                    <h1 className="text-center px-5 py-1">Sign Up</h1>
                                                    <label htmlFor="name" className="form-label">
                                                        Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter Your Name"
                                                        className="form-control ps-4"
                                                        id="name"
                                                        name="name"
                                                        value={form.name}
                                                        onChange={handleChange}
                                                    />
                                                    <label htmlFor="no" className="form-label">
                                                        Mobile Number
                                                    </label>
                                                    <input
                                                        type="number"
                                                        placeholder="Enter Your Mobile No."
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
                                                    <label htmlFor="password" className="form-label">
                                                        Password
                                                    </label>
                                                    <input
                                                        type="password"
                                                        placeholder="Enter Your Password"
                                                        className="form-control ps-4"
                                                        id="password"
                                                        name="password"
                                                        value={form.password}
                                                        onChange={handleChange}
                                                    />
                                                    <div className="login py-5">
                                                        <button className="btn bg-primary-subtle text-center py-2 w-100">
                                                            Sign Up
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*main end*/}
            </>
            <Footer />
        </div>
    )
}

export default Signup
