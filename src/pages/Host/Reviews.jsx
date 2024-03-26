import React from 'react'
import ReviewImage from "../../assets/images/review-img.png"
import {BsStarFill } from "react-icons/bs"

function Reviews() {
  const reviewsData = [
    {
        rating: 5,
        name: "Elliot",
        date: "January 3, 2023",
        text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
        id: "1",
    },
    {
        rating: 5,
        name: "Sandy",
        date: "December 12, 2022",
        text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
        id: "2",
    },
]

const reviewElements=reviewsData.map(review=>(
<div className="review">
  <div className="star-rating">
  {[...Array(review.rating)].map((_, i) => (
                            <BsStarFill className="review-star" key={i} />
                        ))}
  </div>

          <div className="review-details">
            <p className="details">{review.name} <span className="text">{review.date}</span></p>
          </div>
            <p className="review-comment">
            {review.text}
            </p>
            {/* <hr />  */}
        </div>
))
  return (
    <div className="host-review-container container">
      <div className="review-heading">
        <h3 className="heading">Your reviews</h3>
        <p className="text">Last <a className="active-link" href="">30 days</a></p>
      </div>
      <img src={ReviewImage} alt="" className="review-img" />

      <div className="reviews-wrapper">
        {reviewElements}
        


       
      </div>
    </div>
  )
}

export default Reviews