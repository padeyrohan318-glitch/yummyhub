import React, { useState } from 'react'
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value

        setForm({
            ...form,
            [name]: value
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:5000/client/api/signin`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            })

            if (res.status === 200) {
                const finalRes = await res.json();
                localStorage.setItem('token', finalRes.token)
                toast.success('Login Successfully')
                setForm({ email: "", password: "" });
                navigate('/')
            } else if (res.status === 401) {
                toast.error('Invalid email or password')
                setForm({ email: "", password: "" });
            } else if (res.status === 400) {
                toast.error('All fields is required')
                setForm({ email: "", password: "" });
            } else {
                toast.error('Somethings went wrong')
                setForm({ email: "", password: "" });
                navigate('/');
            }
        } catch (error) {
            console.error('Error from login user', error);
        }
    }

    return (
        <div>
            <>
                <Header />
                {/*main start*/}
                <section className="login-section-start">
                    <div className="container-fluid">
                        <div className="row py-5 bg-light">
                            <div className="col-lg-2" />
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col-lg-6 py-5">
                                        <img
                                            src="images/login.jpg"
                                            alt="form-img"
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="col-lg-6 text-dark">
                                        <div className="row fs-4 py-5">
                                            <div className="col-lg-12 p-3 login-section">
                                                <form onSubmit={handleSubmit}>
                                                    <h1 className="text-center p-5">Login</h1>
                                                    <label htmlFor="username" className="form-label">
                                                        Username
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="Username or email"
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
                                                            Log In
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
                <Footer />
            </>

        </div>
    )
}

export default Login
