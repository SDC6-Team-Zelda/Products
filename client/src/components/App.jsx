import React, { useState, useEffect } from 'react';
import axios from "axios";
import ReactDOM from 'react-dom/client';
import Product from './productComponent/Product.jsx'
import Reviews from './reviewComponent/Reviews.jsx'
import Question from './questionsComponent/Question.jsx'


const App = () => {
  const [product, setProduct] = useState({})
  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products/66642`, {
      headers: {
        'Authorization': process.env.AUTH_KEY
      }
    })
      .then((res) => {
        setProduct(res.data)
      })
      .catch(err => console.log(err.message))
  }, [])

  return Object.keys(product).length !== 0 ? (
    <>
<<<<<<< HEAD
    {/* <h1 className="title">Shopping</h1>
    <Product product={product}/> */}
    <Reviews product={product}/>
    {/* <Question product={product}/> */}
=======
    <div className="navbar"></div>
    <Product product={product}/>
>>>>>>> 23f9c03ae459ea2a70ca6a00c9b80a716aaa76d5
    {/* <Related /> */}
    <Question product={product}/>
    {/* <Reviews product={product}/> */}

    </>
  ) : null
}

export default App;