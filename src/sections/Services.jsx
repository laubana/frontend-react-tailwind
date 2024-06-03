import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <div className="gap-10 grid grid-cols-1 justify-center padding-x pt-28 lg:grid-cols-2 xl:grid-cols-3">
      {services.map((service, index) => (
        <ServiceCard
          icon={<service.Icon size={24} color="white" />}
          label={service.label}
          subtext={service.subtext}
          key={index}
        />
      ))}
    </div>
  );
};

export default Services;
