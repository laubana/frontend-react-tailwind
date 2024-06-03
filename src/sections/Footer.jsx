import { FaCopyright } from "react-icons/fa";
import { footerLinks, socialMediaIcons } from "../constants";
import { footerLogo } from "../assets/images";

const Footer = () => {
  return (
    <div className="flex flex-col gap-10 max-container padding-x pt-28 w-full">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start gap-5">
          <a href="/">
            <img src={footerLogo} />
          </a>
          <p className="text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5">
            {socialMediaIcons.map((socialMediaIcon, index) => (
              <socialMediaIcon.Icon
                className="fill-white-400"
                size={24}
                key={index}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((footerLink, index) => (
            <div className="flex flex-col gap-5" key={index}>
              <p className="text-white font-montserrat text-2xl font-medium">
                {footerLink.title}
              </p>
              <ul>
                {footerLink.links.map((link, index) => (
                  <li
                    className="text-white-400 font-montserrat text-base leading-normal hover:text-neutral"
                    key={index}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center font-montserrat gap-2 text-white-400">
        <FaCopyright className="fill-white-400" size={24} />
        <p>Copyright. All rights reserved.</p>
      </div>
      <p className="flex justify-center font-montserrat text-white-400 cursor-pointer">
        Terms & Conditions
      </p>
    </div>
  );
};

export default Footer;
