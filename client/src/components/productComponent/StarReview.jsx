
import React, { useState, useEffect } from 'react';
import axios from "axios";
import reviewsExample from './exampleData/reviews.js'

const StarReview = (props) => {
  const { currentId } = props
  const [ratings, setRatings] = useState({})

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/meta?product_id=${currentId}`, {
      headers: {
        'Authorization': process.env.AUTH_KEY
      }
    })
      .then((res) => {
        setRatings(res.data)
      })
  }, [])

  var reviewAmt = 0;
  var reviewScores = 0;

  if (Object.keys(ratings).length === 5) {
    for (let key in ratings) {
      reviewAmt += Number(ratings[key])
      reviewScores += (Number(key) * (ratings[key]))
    }
  }
  return (
    <>
      <div>View all {reviewAmt} reviews...</div>
      <div>Review avg = {(reviewScores / reviewAmt).toFixed(1)}</div>
    </>
  )
}
export default StarReview;
  // useEffect(() => {
  //   axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/meta?product_id=${currentProduct.id}`, {
  //     headers: {
  //       'Authorization': process.env.AUTH_KEY
  //     }
  //   })
  //     .then((res) => {
  //       setRatings(res.data.ratings)
  //     })
  // }, [])

