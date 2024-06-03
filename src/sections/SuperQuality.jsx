import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <div
      id="about-us"
      className="w-full padding-x pt-28 flex justify-between items-center gap-10 max-lg:flex-col"
    >
      <div className="flex flex-1 flex-col gap-5">
        <p className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You <span className="text-coral">Super Quality</span> Shoes
        </p>
        <p className="lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div>
          <Button>View Details</Button>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe" className="object-contain w-full" />
      </div>
    </div>
  );
};

export default SuperQuality;
