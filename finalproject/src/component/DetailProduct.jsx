import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';


const DetailProduct = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [menu, setMenu] = useState('');
  const [currentLoginUser, setCurrentLogin] = useState('');

  useEffect(() => {

    // for fetching product details by id
    const res = async () => {
      try {
        const response = await fetch(`http://localhost:5000/client/api/get-menu/${id}`, {
          method: "GET"
        })

        if (response.status == 200) {
          const myRes = await response.json();
          setMenu(myRes.menu)
        }
      } catch (error) {
        console.error('error from get menu by id')
      }
    }

    // for fetching current login user detail

    const currentLogin = async () => {
      try {
        const res = await fetch(`http://localhost:5000/client/api/current-login-user`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })

        if (res.status === 200) {
          const finalRes = await res.json();
          setCurrentLogin(finalRes.user)
        }
      } catch (error) {
        console.error('error from current login user', error);
      }
    }


    if (id) {
      res();
    }
    if (localStorage.getItem('token')) {
      currentLogin();
    }

  }, [])


  const handleOrder = async () => {
    try {
      if (localStorage.getItem('token')) {
          const foodData = {
            food_image: menu.food_image,
            food_name: menu.food_name,
            food_oldprice: menu.food_oldprice,
            food_newprice: menu.food_newprice,
            offer_percentage: menu.offer_percentage,
            user_email: currentLoginUser.email,
            user_phone: currentLoginUser.phone,
            user_name: currentLoginUser.name,
            order_date:Date().slice(0,15)
          }
  
          const res = await fetch(`http://localhost:5000/client/api/order-food`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(foodData)
          })
  
          if (res.status === 201) {
            toast.success('Order Successfully');
            navigate('/myorder')
          } else {
            toast.error('Somethings went wrong');
          }
     
      } else {
        toast.info('Please login');
        navigate('/login');
      }

    } catch (error) {
      console.error('error from order food', error)
    }
  }


  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6" style={{cursor:"pointer"}}>
            <div className="card shadow-sm">
              <img
                src={menu.food_image}
                className="card-img-top"
                alt="Delicious Pizza"
                style={{ objectFit: "cover", height: "300px" }}
              />
              <div className="card-body">
                <h3 className="card-title text-center">{menu.food_name}</h3>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <p className="text-muted mb-0">
                    <b><del>$ {menu.food_oldprice}</del></b>
                  </p>
                  <p className="text-danger mb-0 h4">$ {menu.food_newprice}</p>
                  <span className="badge bg-success p-2">{menu.offer_percentage} OFF</span>
                </div>
                <div className="d-grid">
                  <button className="btn btn-primary btn-lg" onClick={handleOrder}>Order Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default DetailProduct