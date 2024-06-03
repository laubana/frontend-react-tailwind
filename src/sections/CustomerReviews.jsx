import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <div className="w-full padding-x pt-28 grid gap-5">
      <p className="font-palanquin text-center text-4xl font-bold">
        What Our <span className="text-coral">Customers</span> Say?
      </p>
      <p className="info-text m-auto max-w-lg text-center">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="flex gap-10 items-center justify-evenly max-lg:flex-col">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgUrl={review.imgURL}
            name={review.customerName}
            rating={review.rating}
            comment={review.feedback}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
