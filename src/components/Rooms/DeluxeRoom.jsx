import React from "react";
import Navbar from "../Navbar";
import ichchha from "../../assets/ichchha.webp";
import { accomodationContents } from "../../constants/data.js";
import Footer from "../Footer.jsx";
import { HiArrowLongRight } from "react-icons/hi2";
import { MdOutlineInsertEmoticon } from "react-icons/md";
import HeroSliderCarousel from "../HeroSliderCarousel";

const images = [
  // {
  //   src: ichchha,
  //   title: "Hotel Ichchha, Hospitality at its best!",
  // },
  {
    src: "https://www.hotelichchha.com/images/slideshow/UVh7T-ichchha-room.jpg",
    title: "The Homely Ambience",
  },
  // {
  //   src: "https://www.hotelichchha.com/images/slideshow/mmMDi-pool.jpg",
  //   title: "Plentiful sunbeams streaming pool",
  // },
  {
    src: "https://s3-alpha-sig.figma.com/img/84cf/a38a/65923184216c09d7f3dcab6961136f45?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H~ZakV3Kt5v697SLSpU9WQu7M6fvc90iqu0RcguhVcp6m-IlzBmpFaWEEnTdmqXXNVD4ZkD80O8kP0CTdL0IVNlykFb~L3jc~wu2uMhtuyx4RStFVvuAIp-nL4sQe2otFmce3TbcBclgNf~Aq0iYymLjVOtf7IswSI89Ntk~2kdMxKfwDs1Cg-ErHEHuZzNweWtOKnWJYCBvpG0Y7KZHOjJieytpn-hkMCYO~jOLKwIA2yV8w30syheqjbHlzLhp-Uy3uyv9q9wODFUzTtqd1zg-tYpuHiPJepWV9OdnJV0RVZ6qfR~eqLcYhezGrjaO879siYdKK2nr~uwKg8V4Jg__",
    title: "The Hotel Ichchha",
  },
];

const DeluxeRoom = () => {
  const accomodationData = accomodationContents[0];
  const deluxeRoom = accomodationData.accomodation.find(
    (room) => room.id === "deluxeRoom"
  );

  return (
    <>
      <Navbar />

      <HeroSliderCarousel
        images={images}
        className="w-screen h-screen object-cover"
      />

      <section className="bg-bg-gold-light">
        <div className="container mb-24">
          <div className="flexCenter flex-col w-3/4 mx-auto mb-32">
            <h3 className="text-navy font-medium">{deluxeRoom.title}</h3>
            <h4 className="text-3xl text-center">{deluxeRoom.subtitle}</h4>
            <p className="text-base text-center">{deluxeRoom.description}</p>
          </div>

          <div className="flex justify-between">
            <div className="w-1/2 max-w-lg">
              <h5 className="text-3xl leading-loose pb-4">
                About Accomodation
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
            <div className="ml-auto w-1/2 h-[80vh] sticky top-6">
              <div className="bg-gold/30 text-xl p-12">
                <ul className="flex items-center justify-between gap-2 py-8">
                  <li className="flex items-center gap-4">
                    <MdOutlineInsertEmoticon />
                    Room Size
                  </li>
                  <li>100 sq. feet</li>
                </ul>
                <hr className="border-0 w-full h-px bg-gradient-to-t from-transparent via-[rgba(0,0,0,1)]/[0.2] to-transparent" />
                <ul className="flex items-center justify-between gap-2 py-8">
                  <li className="flex items-center gap-4">
                    <MdOutlineInsertEmoticon />
                    Bed Type
                  </li>
                  <li>Single Bed</li>
                </ul>
                <hr className="border-0 w-full h-px bg-gradient-to-t from-transparent via-[rgba(0,0,0,1)]/[0.2] to-transparent" />

                <ul className="flex items-center justify-between gap-2 py-8">
                  <li className="flex items-center gap-4">
                    <MdOutlineInsertEmoticon />
                    Starting Price
                  </li>
                  <li>USD 20</li>
                </ul>
                <hr className="border-0 w-full h-px bg-gradient-to-t from-transparent via-[rgba(0,0,0,1)]/[0.2] to-transparent" />

                <ul className="flex items-center justify-between gap-2 py-8">
                  <li className="flex items-center gap-4">
                    <MdOutlineInsertEmoticon />
                    Occupancy
                  </li>
                  <li>2 adults + 1 child</li>
                </ul>
                <hr className="border-0 w-full h-px bg-gradient-to-t from-transparent via-[rgba(0,0,0,1)]/[0.2] to-transparent" />

                <ul className="flex items-center justify-between gap-2 py-8">
                  <li className="flex items-center gap-4">
                    <MdOutlineInsertEmoticon />
                    Smoking
                  </li>
                  <li>Yes</li>
                </ul>
                <div className="pt-12 w-full">
                  <a
                    href=""
                    className="group flex items-center justify-center gap-2 w-full bg-navy text-ivory hover:text-navy hover:bg-ivory px-6 py-4 rounded-full text-lg transition-all duration-300 ease-linear"
                  >
                    Book Now
                    <HiArrowLongRight className="group-hover:translate-x-2 transition-all duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DeluxeRoom;
