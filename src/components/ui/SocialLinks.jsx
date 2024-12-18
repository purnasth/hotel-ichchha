import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { TbBrandFacebook, TbPhone } from "react-icons/tb";
import useFetchApi from "../../hooks/useFetchApi";

// Map icon names to their respective components
const iconMap = {
  FaFacebookF,
  AiFillInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
  TbBrandFacebook,
  FaInstagram,
  TbPhone,
};

const SocialLinks = () => {
  const {
    data: socialLinks = [],
    loading,
    error,
  } = useFetchApi("https://hotelichchha.com/api/api_social.php");

  if (loading) {
    return <></>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <ul className="mt-6 text-xl flex items-center justify-start gap-4 mb-4">
        {socialLinks.map((link, index) => {
          const IconComponent = iconMap[link.icon];

          return (
            <li
              key={index}
              className="text-navy hover:text-gold hover:scale-125 transition-all duration-300 ease-linear"
            >
              <Link
                to={link.url}
                target="_blank"
                rel="noopener noreferrer"
                title={link.title}
              >
                {IconComponent ? (
                  <IconComponent />
                ) : link.image ? (
                  <img
                    src={link.image}
                    alt={link.title}
                    className="size-5 object-contain"
                  />
                ) : null}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SocialLinks;
