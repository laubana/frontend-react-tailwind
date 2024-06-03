const ServiceCard = ({ icon, label, subtext }) => {
  return (
    <div className="flex flex-1 flex-col gap-5 px-10 py-16 rounded-xl shadow-3xl">
      <div className="aspect-square bg-coral flex items-center justify-center rounded-full w-10">
        {icon}
      </div>
      <p className="font-bold font-palanquin text-3xl">{label}</p>
      <p className="break-words font-montserrat leading-normal text-lg text-neutral">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
