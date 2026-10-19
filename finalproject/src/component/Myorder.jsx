import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const Myorder = () => {

  const navigate = useNavigate();



  const [myOrder, setMyOrder] = useState([])

  // for show my order products
  const Myorders = async () => {
    try {
      const res = await fetch(`http://localhost:5000/client/api/myorder-show`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })

      if (res.status == 200) {
        const finalRes = await res.json();
        setMyOrder(finalRes.myorder)
      }
    } catch (error) {
      console.error('error from show my orders', error);
    }
  }

  useEffect(() => {

    if (localStorage.getItem('token')) {
      Myorders();
    } else {
      navigate('/');
    }

  }, [])



  const Cancel = async (item) => {
    try {
      if (item.status == 'Cancel') {
        toast.info('Order Allready Canceled')
      } else {
        if (item.status == 'Pending') {
          const Conf = window.confirm('Are you sure');
          if (Conf) {
            const res = await fetch(`http://localhost:5000/client/api/cancel-order/${item._id}`, {
              method: "PUT",
              headers: {
                'Content-Type': 'application/json'
              }
            })
            if (res.status === 200) {
              Myorders();
              toast.success('Cancel Successfully')
            }
          }
        } else {
          toast.info(`Your oredr is ${item.status}`)
        }


      }

    } catch (error) {
      console.error('error from cancel product', error)
    }
  }

  return (
    <div>
      <Header />
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Order</title>
        <link rel="stylesheet" href="css/owl.carousel.min.css" />
        <link rel="stylesheet" href="css/owl.theme.default.css" />
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/all.min.css" />
        <link rel="stylesheet" href="css/style.css" />
        {/*my order section start*/}
        <main>
          <section className="cart py-4">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 ab-content text-center pb-4 bg-light-subtle">
                  <h1
                    className="text-uppercase our-menu text-warning"
                    style={{ fontSize: 80, fontWeight: "bolder" }}
                  >
                    My Order
                  </h1>
                </div>
                <div className="col-lg-12">
                  {
                    myOrder.length > 0 ?
                      <table className="table table-striped border border-3 border-dark">
                        <thead>
                          <tr>
                            <th scope="col">SR. No.</th>
                            <th scope="col">Image</th>
                            <th scope="col">Dish Name</th>
                            <th scope="col">Old Price</th>
                            <th scope="col">New Price</th>
                            <th scope="col">Status</th>
                            <th scope="col">Cancel</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            myOrder.map((item, index) => {
                              return (
                                <tr key={index}>
                                  <th className="py-4" scope="row">
                                    {index + 1}
                                  </th>
                                  <td className="py-4">
                                    <img
                                      src={item.food_image}
                                      alt="Cart"
                                      className="img-fluid"
                                      style={{ height: "70px" }}
                                    />
                                  </td>
                                  <td className="py-5">{item.food_name}</td>
                                  <td className="py-5">
                                    <del>$ {item.food_oldprice}</del>
                                  </td>
                                  <td className="py-5">$ {item.food_newprice}</td>
                                  {item.status == 'Approved' || item.status == 'Delivered' || item.status == 'Out Of Delivery' ? <td className="py-5" style={{ color: "green" }}>{item.status}</td> : <td className="py-5" style={{ color: "red" }}>{item.status}</td>}
                                  <td className="py-5">
                                    <button className="btn btn-dark" disabled='' onClick={() => Cancel(item)}>Cancel</button>
                                  </td>
                                </tr>
                              )
                            })
                          }
                        </tbody>
                      </table>
                      :
                      <h3 style={{ textAlign: "center" }}>NO ANY ORDER FOUND 😔</h3>
                  }

                </div>
              </div>
            </div>
          </section>
        </main>
        {/*my order section end*/}
      </>
      <Footer />
    </div>
  )
}

export default Myorder
