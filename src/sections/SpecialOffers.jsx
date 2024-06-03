import { FaArrowRight } from "react-icons/fa";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffers = () => {
  return (
    <div className="w-full padding-x pt-28 flex justify-between items-center max-xl:flex-col-reverse gap-10">
      <div className="flex-1">
        <img src={offer} className="object-contain w-full" alt="shoe" />
      </div>
      <div className="flex flex-1 flex-col gap-5">
        <p className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral">Special</span> Offers
        </p>
        <p className="lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="lg:max-w-lg info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button>
            Shop Now
            <div className="p-1 rounded-full bg-white">
              <FaArrowRight size={16} className="fill-coral" />
            </div>
          </Button>
          <Button coloring="secondary">Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
