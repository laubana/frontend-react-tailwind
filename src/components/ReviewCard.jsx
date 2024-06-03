import { FaStar } from "react-icons/fa";

const ReviewCard = ({ name, imgUrl, rating, comment }) => {
  return (
    <div className="flex flex-1 flex-col gap-5 items-center justify-center">
      <img
        src={imgUrl}
        className="aspect-square object-cover rounded-full w-48 max-lg:w-full"
        alt="customer"
      />
      <p className="info-text text-center lg:max-w-sm">{comment}</p>
      <div className="flex gap-2 items-center justify-center">
        <FaStar size={24} className="fill-coral" />
        <p className="font-montserrat leading-normal text-neutral text-xl">
          ({rating})
        </p>
      </div>
      <p className="font-bold font-palanquin text-3xl text-center">{name}</p>
    </div>
  );
};

export default ReviewCard;
