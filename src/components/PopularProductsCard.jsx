import { FaStar } from "react-icons/fa";

const PopularProductsCard = ({ imgUrl, name, price }) => {
  return (
    <div className="gap-3 grid items-center w-full">
      <img src={imgUrl} alt={name} className="aspect-square w-full" />
      <div className="flex gap-2 items-center justify-start">
        <FaStar size={24} className="fill-coral" />
        <p className="font-montserrat text-neutral text-xl">(4.5)</p>
      </div>
      <p className="font-palanquin font-semibold text-2xl">{name}</p>
      <p className="font-montserrat font-semibold text-2xl text-coral">
        {price}
      </p>
    </div>
  );
};

export default PopularProductsCard;
