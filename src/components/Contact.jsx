import React, { useEffect } from "react";
import { gsap } from "gsap";
import NearbyMapComponent from "./Nearby/NearbyMapComponent";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { MdOutlineInsertEmoticon } from "react-icons/md";
import ContactForm from "./Contact/Form";
import { GrLocation } from "react-icons/gr";
import { TbPhone } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebook, FaInstagram, FaTripadvisor } from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
    gsap.from(".form-item", {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.5,
      stagger: 0.2,
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Navbar />
      <section className="bg-bg-gold-light">
        <div className="container mx-auto">
          <div className="flexCenter flex-col w-3/4 mx-auto">
            {/* <h2></h2> */}
            <h3 className="text-navy font-medium">How to get here from</h3>
            <h4 className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              officiis temporibus nesciunt assumenda cupiditate?
            </h4>
            <p className="text-lg text-center">
              Would you like to find our how to get to us or you have a question
              you need to ask? Call us or e-mail us, here are all the contact
              information you need to know.
            </p>
          </div>
        </div>
        <div className="mt-28">
          <NearbyMapComponent />
        </div>
      </section>

      <section className="bg-bg-gold-dark">
        <div className="container">
          <div className="flex justify-between">
            <div className="w-1/2 max-w-lg">
              <h5 className="text-3xl leading-loose pb-4">
                About Hotel Ichchha
              </h5>
              <p className="pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                doloribus, impedit perspiciatis placeat eum quo maiores porro
                eius quos deleniti culpa enim praesentium ipsa illum totam
                distinctio iure blanditiis ut! Animi temporibus accusantium
                velit excepturi possimus, at in non eius!
              </p>
              <p className="pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                doloribus, impedit perspiciatis placeat eum quo maiores porro
                eius quos deleniti culpa enim praesentium ipsa illum totam
                distinctio iure blanditiis ut! Animi temporibus accusantium
                velit excepturi possimus, at in non eius!
              </p>

              <h5 className="text-3xl leading-loose py-4">Find Us</h5>

              <ul className="text-base flex items-start flex-col justify-start gap-2">
                <li className="flex items-center justify-start gap-2">
                  <GrLocation />
                  <a href="">Simara, Bara, Nepal (View Map)</a>
                </li>
                <li className="flex items-center justify-start gap-2">
                  <TbPhone />
                  <a href="">+977 9802738092 </a> {","}{" "}
                  <a href="">+977 9855029592</a>
                </li>
                <li className="flex items-center justify-start gap-2">
                  <HiOutlineMail />
                  <a href="">info@hotelichchha.com</a> {","}{" "}
                  <a href="">reservation@hotelichchha.com</a>
                </li>
              </ul>

              <ul className="mt-6 text-2xl flex items-center justify-start gap-4 mb-4">
                <li>
                  <a href="#">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaTripadvisor />
                  </a>
                </li>
              </ul>

              <h5 className="text-3xl leading-loose py-4">Information</h5>
              <ul>
                <li className="mb-2">
                  Lorem ipsum dolor, sit amet consectetur
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Cumque, quod.
                </li>
              </ul>

              <h5 className="text-3xl leading-loose py-4">Amenities</h5>
              <div className="flex items-start gap-20">
                <ul className="flex items-start justify-center flex-col gap-5">
                  <li className="flex items-center gap-4">
                    <MdOutlineInsertEmoticon />
                    Air conditioning
                  </li>
                  <li className="flex items-center gap-4">
                    <MdOutlineInsertEmoticon />
                    Bathrobe
                  </li>
                  <li className="flex items-center gap-4">
                    <MdOutlineInsertEmoticon />
                    Coffee and tea set
                  </li>
                  <li className="flex items-center gap-4">
                    <MdOutlineInsertEmoticon />
                    Desk
                  </li>
                  <li className="flex items-center gap-4">
                    <MdOutlineInsertEmoticon />
                    Hairdryer
                  </li>
                  <li className="flex items-center gap-4">
                    <MdOutlineInsertEmoticon />
                    Minibar
                  </li>
                  <li className="flex items-center gap-4">
                    <MdOutlineInsertEmoticon />
                    Pillow service
                  </li>
                  <li className="flex items-center gap-4">
                    <MdOutlineInsertEmoticon />
                    Safe
                  </li>
                </ul>
                <ul className="flex items-start justify-center flex-col gap-5">
                  <li className="flex items-center gap-4">
                    <MdOutlineInsertEmoticon />
                    Slippers
                  </li>
                  <li className="flex items-center gap-4">
                    <MdOutlineInsertEmoticon />
                    Storage cabinet
                  </li>
                  <li className="flex items-center gap-4">
                    <MdOutlineInsertEmoticon />
                    Telephone
                  </li>
                  <li className="flex items-center gap-4">
                    <MdOutlineInsertEmoticon />
                    Television
                  </li>
                  <li className="flex items-center gap-4">
                    <MdOutlineInsertEmoticon />
                    Toilet
                  </li>
                  <li className="flex items-center gap-4">
                    <MdOutlineInsertEmoticon />
                    Towel service
                  </li>
                  <li className="flex items-center gap-4">
                    <MdOutlineInsertEmoticon />
                    Twin bed/double bed
                  </li>
                  <li className="flex items-center gap-4">
                    <MdOutlineInsertEmoticon />
                    Wi-Fi
                  </li>
                </ul>
              </div>
            </div>
            <div className="ml-auto w-1/2 h-full sticky top-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
