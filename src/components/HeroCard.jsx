const HeroCard = ({ imgUrl, onChange, isSelected }) => {
  return (
    <div
      className={`border-2 ${
        isSelected ? "border-coral" : "border-transparent"
      } cursor-pointer rounded-xl`}
      onClick={onChange}
    >
      <div className="aspect-square bg-card bg-center bg-cover flex items-center justify-center rounded-lg w-40 max-sm:w-24">
        <img
          src={imgUrl.thumbnail}
          alt="shoe"
          className="object-contain w-full"
        />
      </div>
    </div>
  );
};

export default HeroCard;
