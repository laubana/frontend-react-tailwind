import { LiaBarsSolid } from "react-icons/lia";
import { navigationLinks } from "../constants";
import { headerLogo } from "../assets/images";

const Navigation = () => {
  return (
    <nav className="absolute flex items-center justify-between padding-x py-8 w-full z-50">
      <a href="/">
        <img src={headerLogo} alt="logo" />
      </a>
      <ul className="flex flex-1 gap-16 items-center justify-center max-lg:hidden">
        {navigationLinks.map((navigationLink, index) => (
          <li key={index}>
            <a
              href={navigationLink.href}
              className="font-montserrat text-lg text-neutral"
            >
              {navigationLink.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="lg:hidden">
        <LiaBarsSolid size={24} cursor="pointer" />
      </div>
    </nav>
  );
};

export default Navigation;
