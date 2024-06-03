import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { shoes, statistics } from "../constants";
import Button from "../components/Button";
import HeroCard from "../components/HeroCard";

const Hero = () => {
  const [selectedShoeIndex, setSelectedShoeIndex] = useState(0);

  const handleChange = (index) => {
    setSelectedShoeIndex(index);
  };

  return (
    <div
      id="home"
      className="flex flex-col gap-10 items-stretch justify-center min-h-screen xl:flex-row"
    >
      <div className="flex flex-col items-start justify-center pt-28 w-full max-xl:padding-x xl:w-2/5">
        <p className="font-montserrat text-coral text-xl">
          Our Summer Collection
        </p>
        <p className="font-bold font-palanquin mt-10 text-8xl max-sm:leading-none max-sm:text-[72px]">
          <span className="relative z-10 xl:bg-white xl:pr-10 xl:whitespace-nowrap">
            The New Arrival
          </span>
          <br />
          <span className="text-coral relative z-50">Nike</span>{" "}
          <span className="relative z-50 xl:pr-10">Shoes</span>
        </p>
        <p className="font-montserrat leading-8 mb-14 mt-6 text-lg text-neutral sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button>
          Shop Now
          <div className="p-1 rounded-full bg-white">
            <FaArrowRight size={16} className="fill-coral" />
          </div>
        </Button>
        <div className="flex flex-wrap gap-16 items-start justify-start mt-20 w-full">
          {statistics.map((statistic, index) => (
            <div key={index}>
              <p className="font-palanquin font-bold text-4xl">
                {statistic.value}
              </p>
              <p className="font-montserrat leading-7 text-neutral">
                {statistic.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-center bg-cover bg-hero bg-primary flex flex-1 items-center justify-center relative max-xl:py-40 xl:min-h-screen">
        <img
          src={shoes[selectedShoeIndex].bigShoe}
          alt="shoe"
          className="object-contain z-10"
        />
        <div className="absolute bottom-0 flex gap-4 translate-y-2/4">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <HeroCard
                imgUrl={shoe}
                onChange={() => handleChange(index)}
                isSelected={selectedShoeIndex === index}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
