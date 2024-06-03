import { products } from "../constants";
import PopularProductsCard from "../components/PopularProductsCard";

const PopularProducts = () => {
  return (
    <div id="products" className="w-full padding-x pt-28 flex flex-col gap-10">
      <div className="flex flex-col justify-start gap-5">
        <p className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral">Popular</span> Products
        </p>
        <p className="lg:max-w-lg font-montserrat text-neutral">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-5 gap-10">
        {products.map((product, index) => (
          <PopularProductsCard
            imgUrl={product.imgURL}
            name={product.name}
            price={product.price}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
