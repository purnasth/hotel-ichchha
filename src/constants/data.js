import { HiArrowLongRight } from "react-icons/hi2";
import logo from "../assets/logo.svg";
import introVideo from "../assets/intro_video.mp4";
import ichchha from "../assets/ichchha.webp";
import ichchha1 from "../assets/ichchha1.jpg";
import { MdAtm, MdOutlineInsertEmoticon } from "react-icons/md";
import {
  FaBed,
  FaRulerCombined,
  FaDollarSign,
  FaUser,
  FaSmoking,
} from "react-icons/fa";
import slider1 from "../assets/slider/slider1.webp";
import slider2 from "../assets/slider/slider2.webp";
import slider3 from "../assets/slider/slider3.webp";
import slider4 from "../assets/slider/slider4.webp";
import slider5 from "../assets/slider/slider5.webp";
import slider6 from "../assets/slider/slider6.webp";

import dlx1 from "../assets/rooms/dlx1.webp";
import dlx2 from "../assets/rooms/dlx2.webp";
import dlx3 from "../assets/rooms/dlx3.webp";
import dlx4 from "../assets/rooms/dlx4.webp";

import fountainR1 from "../assets/restaurant/fountainR1.webp";
import fountainR2 from "../assets/restaurant/fountainR2.webp";
import fountainR3 from "../assets/restaurant/fountainR3.webp";
import fountainR4 from "../assets/restaurant/fountainR4.webp";

import bar2 from "../assets/restaurant/bar2.webp";
import bar3 from "../assets/restaurant/bar3.webp";

import pool1 from "../assets/recreation/pool1.webp";
import pool2 from "../assets/recreation/pool2.webp";
import pool3 from "../assets/recreation/pool3.webp";

import spa2 from "../assets/recreation/spa2.webp";
import spa3 from "../assets/recreation/spa3.webp";
import spa4 from "../assets/recreation/spa4.webp";

import jacuzzi1 from "../assets/recreation/jacuzzi1.webp";
import jacuzzi2 from "../assets/recreation/jacuzzi2.webp";

import ground1 from "../assets/recreation/ground1.webp";
import ground2 from "../assets/recreation/ground2.webp";

import gym1 from "../assets/recreation/gym1.webp";
import gym2 from "../assets/recreation/gym2.webp";
import gym3 from "../assets/recreation/gym3.webp";

import casino1 from "../assets/recreation/casino1.webp";
import casino2 from "../assets/recreation/casino2.webp";
import casino3 from "../assets/recreation/casino3.webp";
import casino4 from "../assets/recreation/casino4.webp";

import g1 from "../assets/gallery/g1.webp";
import g2 from "../assets/gallery/g2.webp";
import g3 from "../assets/gallery/g3.webp";
import g4 from "../assets/gallery/g4.webp";
import g5 from "../assets/gallery/g5.webp";
import g6 from "../assets/gallery/g6.webp";
import g7 from "../assets/gallery/g7.webp";
import g8 from "../assets/gallery/g8.webp";
import g9 from "../assets/gallery/g9.webp";
import g10 from "../assets/gallery/g10.webp";
import g11 from "../assets/gallery/g11.webp";
import g12 from "../assets/gallery/g12.webp";
import g13 from "../assets/gallery/g13.webp";
import g14 from "../assets/gallery/g14.webp";
import g15 from "../assets/gallery/g15.webp";
import g16 from "../assets/gallery/g16.webp";
import g17 from "../assets/gallery/g17.webp";
import g18 from "../assets/gallery/g18.webp";
import g19 from "../assets/gallery/g19.webp";
import g20 from "../assets/gallery/g20.webp";
import g21 from "../assets/gallery/g21.webp";
import g22 from "../assets/gallery/g22.webp";
import g23 from "../assets/gallery/g23.webp";
import g24 from "../assets/gallery/g24.webp";

// icons for facilities
import { CgGym } from "react-icons/cg";
import { GrSpa } from "react-icons/gr";
import { FaSwimmingPool } from "react-icons/fa";
import { RiRestaurant2Fill } from "react-icons/ri";
import { MdOutlineSportsBar } from "react-icons/md";
import { MdOutlineMeetingRoom } from "react-icons/md";
import { PiBroomBold } from "react-icons/pi";
import { FaWifi } from "react-icons/fa";
import { BiSolidParking } from "react-icons/bi";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { LuConciergeBell } from "react-icons/lu";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { GiKidSlide } from "react-icons/gi";
import { MdLocalAirport } from "react-icons/md";
import { MdOutlinePets } from "react-icons/md";
import { MdLocalAtm } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";

export {
  HiArrowLongRight,
  MdOutlineInsertEmoticon,
  logo,
  introVideo,
  ichchha,
  slider1,
};

export const navLinks = [
  {
    id: "home",
    title: "Home",
    link: "/home",
  },
  {
    id: "about",
    title: "About",
    link: "/about",
  },
  {
    id: "restaurants",
    title: "Restro & Bars",
    link: "/restaurants",
  },
  {
    id: "recreation",
    title: "Recreation",
    link: "/recreation",
  },
  // {
  //   id: "facilities",
  //   title: "Facilities",
  //   link: "/facilities",
  // },
  {
    id: "gallery",
    title: "Gallery",
    link: "/gallery",
  },

  {
    id: "contact",
    title: "Contact",
    link: "/contact",
  },
];

export const navLinksRooms = [
  {
    id: 1,
    title: "Rooms & Suites",
    link: "/accommodation",
    subLinks: [
      {
        id: "deluxeRoom",
        title: "Deluxe Rooms",
        link: "/accommodation/deluxe",
      },
      {
        id: "superDeluxeRoom",
        title: "Super Deluxe Rooms",
        link: "/accommodation/super-deluxe",
      },
      {
        id: "premiumRoom",
        title: "Premium Rooms",
        link: "/accommodation/premium",
      },
      {
        id: "juniorSuite",
        title: "Junior Suite",
        link: "/accommodation/junior-suite",
      },
      {
        id: "executiveSuite",
        title: "Executive Rooms",
        link: "/accommodation/executive-suite",
      },
    ],
  },
];

export const navLinksEvents = [
  {
    id: 1,
    title: "Conference & Events",
    link: "/events",
    subLinks: [
      {
        id: "janakiHall",
        title: "Janaki Hall",
        link: "/events#janakiHall",
      },
      {
        id: "jyamireHall",
        title: "Jyamire Hall",
        link: "/events#jyamireHall",
      },
      {
        id: "narayaniHall",
        title: "Narayani Hall",
        link: "/events#narayaniHall",
      },
      {
        id: "balmikiHall",
        title: "Balmiki Hall",
        link: "/events#balmikiHall",
      },
    ],
  },
];

import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

export const socialLinks = [
  {
    id: "facebook",
    title: "Facebook",
    link: "https://www.facebook.com/ichchahotel",
    icon: FaFacebookF,
  },
  {
    id: "instagram",
    title: "Instagram",
    link: "https://www.instagram.com/hotel_ichchha",
    icon: AiFillInstagram,
  },
  {
    id: "twitter",
    title: "Twitter",
    link: "https://twitter.com/hotelichchha",
    icon: FaXTwitter,
  },
  {
    id: "linkedin",
    title: "Linkedin",
    link: "https://www.linkedin.com/company/hotel-ichchha",
    icon: FaLinkedinIn,
  },
  {
    id: "youtube",
    title: "Youtube",
    link: "https://www.youtube.com/watch?v=R_Fhk2a4uII",
    icon: FaYoutube,
  },
];

import { GrLocation } from "react-icons/gr";
import { TbPhone } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";

export const contactAddressLinks = [
  {
    id: "location",
    link: "https://maps.app.goo.gl/dJurNnE6cBLguX1cA",
    text: "Simara, Bara, Nepal",
    icon: GrLocation,
  },
  {
    id: "phoneNumbers",
    icon: TbPhone,
    numbers: [
      {
        link: "tel:+9779802738099",
        text: "+977-9802738099",
      },
      // {
      //   link: "tel:+9779855029592",
      //   text: "+977-9855029592",
      // },
    ],
  },
  {
    id: "emails",
    icon: HiOutlineMail,
    addresses: [
      {
        link: "mailto:info@hotelichchha.com",
        text: "info@hotelichchha.com",
      },
      // {
      //   link: "mailto:reservation@hotelichchha.com",
      //   text: "reservation@hotelichchha.com",
      // },
    ],
  },
];

export const aboutContents = [
  {
    id: "aboutTitle",
    title: "Hotel Ichchha",
    subtitle: "Five Star Hotel in Simara, Bara",
    subheading:
      "The hotel aims to cater and accommodate business and leisure travelers passing through the zone. ",
    description:
      "The homely ambience, facilities and amenities within the premises make your stay a memorable and luxurious one. We are one of the leading hospitality providers assuring our best services. Centrally located, its an ideal choice for business travelers, pilgrimage tour, recreational tours, etc. The best choice for destination wedding to make your special moments more memorable. With a total of 90 rooms, Hotel Ichchha is best suited for all your requirements.",
    // "Hotel Ichchha is a verdant oasis in the heart of Simara.The hotel aims to cater and accommodate business and leisure travelers passing through the zone.",
  },
];

export const messageFromChairman = [
  {
    id: "chairmanMessage",
    image: "https://www.hotelichchha.com/template/cms/images/chairman.jpg",
    title: "Message from the Chairman",
    fullName: "Ichchha Bahadur Wagle",
    position: "Executive Chairman",
    subtitle: "",
    subheading:
      "We are committed to providing the best hospitality services to our guests.",
    description:
      "First and foremost, I would like to thank each and every one of you for your kind and encouraging support in creating Hotel Ichchha, first 5-Star Deluxe Hotel in Terai Region with its own hospitality brand. Your support to our organization has allowed us to transform a non- tourist Market to a new Tourist Market exploring and promoting a variety of tourist destinations and activities in this region such as Jungle Safari at Parsa National Park, religious visits to Gadimai Temple as well as Janaki Temple at Janakpur to name a few. From the beginning, we have been able to provide ample services to our valued customers.",

    associatedVentures: [
      {
        title: "Nepal Land & Housing Developer's Association",
        post: "President",
        description: "Description of the association",
        url: "URL of the association's website",
        logo: "logo",
      },
      {
        title: "K & K International College",
        post: "Chairman",
        description: "Description of the association",
        url: "URL of the association's website",
        logo: "logo",
      },
      {
        title: "City Homes Ltd",
        post: "Chairman",
        description: "Description of the association",
        url: "URL of the association's website",
        logo: "logo",
      },
      {
        title: "Property Management Associates",
        post: "Chairman",
        description: "Description of the association",
        url: "URL of the association's website",
        logo: "logo",
      },
      {
        title: "Kantipur Mall",
        post: "Managing Director",
        description: "Description of the association",
        url: "URL of the association's website",
        logo: "logo",
      },
      {
        title: "Heart to Heart Nepal",
        post: "Sr. Vice Chairman",
        description: "Description of the association",
        url: "URL of the association's website",
        logo: "logo",
      },
      {
        title: "Lions Club of Kathmandu Metro",
        post: "Director",
        description: "Description of the association",
        url: "URL of the association's website",
        logo: "logo",
      },
      {
        title: "Infrastructure Development Bank (NCC Bank Ltd)",
        post: "Founder Director",
        description: "Description of the association",
        url: "URL of the association's website",
        logo: "logo",
      },
    ],
  },
];

export const ourTeamMembers = [
  {
    id: 1,
    name: "Purna Shrestha",
    image: "https://cdt.org/files/2015/10/2015-10-06-FB-person.png",
    position: "CEO",
  },
  {
    id: 2,
    name: "Purna Shrestha",
    image: "https://cdt.org/files/2015/10/2015-10-06-FB-person.png",
    position: "CTO",
  },
  {
    id: 3,
    name: "Purna Shrestha",
    image: "https://cdt.org/files/2015/10/2015-10-06-FB-person.png",
    position: "COO",
  },
  {
    id: 4,
    name: "Purna Shrestha",
    image: "https://cdt.org/files/2015/10/2015-10-06-FB-person.png",
    position: "COO",
  },
  {
    id: 5,
    name: "Purna Shrestha",
    image: "https://cdt.org/files/2015/10/2015-10-06-FB-person.png",
    position: "CEO",
  },
  {
    id: 26,
    name: "Purna Shrestha",
    image: "https://cdt.org/files/2015/10/2015-10-06-FB-person.png",
    position: "CTO",
  },
  {
    id: 7,
    name: "Purna Shrestha",
    image: "https://cdt.org/files/2015/10/2015-10-06-FB-person.png",
    position: "COO",
  },
  {
    id: 8,
    name: "Purna Shrestha",
    image: "https://cdt.org/files/2015/10/2015-10-06-FB-person.png",
    position: "COO",
  },
  // Add more team members as needed
];

import { IoBed, IoPricetagSharp } from "react-icons/io5";

import { MdFamilyRestroom } from "react-icons/md";
import { IoMdResize } from "react-icons/io";

export const accomodationContents = [
  {
    id: "accomodationTitle",
    title: "Exclusive Rooms and Suites",
    subtitle: "",
    subheading: "Experience the ultimate Staycation in Hotel Ichchha",
    description:
      // "Light, bright and with a smart layout that enhances the feeling of spaciousness, our rooms feature all the world class furniture, air conditioning, amenities, toiletries and technology. Super deluxe rooms are ingeniously designed with splendid interiors. The junior suite rooms are spacious rooms with a cozy living room separated by a partial wall. The executive rooms feature a large bedroom and a living room. Elegantly decorated with opulent interiors and varnished in soft tones, all the rooms are spacious with classy comfortable beds.",
      "Hotel Ichchha rooms and suites are a symphony of luxury and comfort, designed to enchant every guest where luxury embraces elegance, Hotel Ichchha offers an exquisite blend of comfort and grandeur. Experience unparalleled hospitality and serene elegance in every stay.",
    rojaiLink: "https://www.hotelichchha.com/result.php?hotel_code=8fE7Jg",
    accomodation: [
      {
        id: "deluxeRoom",
        title: "Deluxe Room",
        subtitle: "",
        description:
          "The Deluxe Room offers a comfortable stay with modern amenities and elegant decoration.",
        url: "https://www.hotelichchha.com/images/subpackage/image/JqbZx-deluxeroom.jpg",
        router: "/accommodation/deluxe",
        images: [
          {
            src: dlx1,
            title: "The Homely Ambience",
          },
          {
            src: dlx2,
            title: "The Homely Ambience",
          },
          {
            src: dlx3,
            title: "The Homely Ambience",
          },
          {
            src: dlx4,
            title: "The Homely Ambience",
          },
        ],
        overview: [
          {
            title: "Overview",
            content: [
              "Step into the embrace of elegance with Hotel Ichchha Deluxe Rooms. Designed for discerning travelers, these rooms blend exquisite comfort with state-of-the-art facilities. Revel in the sumptuous bedding, soak in the serene ambiance, and let our attentive service elevate your stay to a realm of unparalleled luxury.",
            ],
          },
        ],
        policies: [
          {
            title: "Child Policies",
            content: [
              "Child 0 - 4 yrs. sharing parent's room free of charge on same plan as adults.",
              "Child age 5 - 10 yrs. sharing parent's room will be charged 50% adult meal rate.",
              "Breakfast - US$ 8/ INR 500.",
            ],
          },
        ],
        amenities: [
          "Air conditioning",
          "Bathrobe",
          "Coffee and tea set",
          "Desk",
          "Hairdryer",
          "Minibar",
          "Pillow service",
          "Safe",
          "Slippers",
          "Storage cabinet",
          "Telephone",
          "Television",
          "Toilet",
          "Towel service",
          "Twin bed/double bed",
          "Wi-Fi",
        ],
        roomDetails: {
          "Room Size": { icon: IoMdResize, value: "100 sq. feet" },
          "Bed Type": { icon: IoBed, value: "King Size" },
          "Starting Price": { icon: IoPricetagSharp, value: "USD 200" },
          Occupancy: { icon: MdFamilyRestroom, value: "2 adults + 1 child" },
          Smoking: { icon: FaSmoking, value: "Yes" },
        },
      },
      {
        id: "superDeluxeRoom",
        title: "Super Deluxe Room",
        subtitle: "",
        description:
          "Experience luxury and sophistication in our Super Deluxe Room, featuring splendid interiors and top-notch facilities.",
        url: "https://www.hotelichchha.com/images/subpackage/image/ewcPn-super.jpg",
        router: "/accommodation/super-deluxe",
        images: [
          {
            src: dlx1,
            title: "The Homely Ambience",
          },
          {
            src: dlx2,
            title: "The Homely Ambience",
          },
          {
            src: dlx3,
            title: "The Homely Ambience",
          },
          {
            src: dlx4,
            title: "The Homely Ambience",
          },
        ],
        overview: [
          {
            title: "Overview",
            content: [
              "Discover unparalleled opulence in Hotel Ichchha Super Deluxe Rooms, where global standards of luxury meet personalized comfort. Each room is a masterpiece of design, featuring lavish furnishings, cutting-edge technology, and panoramic views that promise to leave you spellbound. Our commitment to excellence ensures every moment is imbued with splendor and sophistication.",
            ],
          },
        ],
        policies: [
          {
            title: "Child Policies",
            content: [
              "Child 0 - 4 yrs. sharing parent's room free of charge on same plan as adults.",
              "Child age 5 - 10 yrs. sharing parent's room will be charged 50% adult meal rate.",
              "Breakfast - US$ 8/ INR 500.",
            ],
          },
        ],
        amenities: [
          "Air conditioning",
          "Bathrobe",
          "Coffee and tea set",
          "Desk",
          "Hairdryer",
          "Minibar",
          "Pillow service",
          "Safe",
          "Slippers",
          "Storage cabinet",
          "Telephone",
          "Television",
          "Toilet",
          "Towel service",
          "Twin bed/double bed",
          "Wi-Fi",
        ],
        roomDetails: {
          "Room Size": { icon: IoMdResize, value: "200 sq. feet" },
          "Bed Type": { icon: IoBed, value: "King Size" },
          "Starting Price": { icon: IoPricetagSharp, value: "USD 300" },
          Occupancy: { icon: MdFamilyRestroom, value: "2 adults + 1 child" },
          Smoking: { icon: FaSmoking, value: "Yes" },
        },
      },
      {
        id: "premiumRoom",
        title: "Premium Room",
        subtitle: "",
        description:
          "Indulge in luxury and comfort with our Premium Room, designed to offer a lavish experience for our guests.",
        url: "https://www.hotelichchha.com/images/subpackage/image/5842r-room-banner.jpg",
        router: "/accommodation/premium",
        images: [
          {
            src: dlx1,
            title: "The Homely Ambience",
          },
          {
            src: dlx2,
            title: "The Homely Ambience",
          },
          {
            src: dlx3,
            title: "The Homely Ambience",
          },
          {
            src: dlx4,
            title: "The Homely Ambience",
          },
        ],
        overview: [
          {
            title: "Overview",
            content: [
              "Immerse yourself in the epitome of elegance with Hotel Ichchha Premium Rooms. Tailored for the world traveler, these rooms boast an exquisite fusion of comfort and style, complete with luxurious amenities and impeccable service. Surrender to the allure of sophistication and let us redefine your travel experience.",
            ],
          },
        ],
        policies: [
          {
            title: "Child Policies",
            content: [
              "Child 0 - 4 yrs. sharing parent's room free of charge on same plan as adults.",
              "Child age 5 - 10 yrs. sharing parent's room will be charged 50% adult meal rate.",
              "Breakfast - US$ 8/ INR 500.",
            ],
          },
        ],
        amenities: [
          "Air conditioning",
          "Bathrobe",
          "Coffee and tea set",
          "Desk",
          "Hairdryer",
          "Minibar",
          "Pillow service",
          "Safe",
          "Slippers",
          "Storage cabinet",
          "Telephone",
          "Television",
          "Toilet",
          "Towel service",
          "Twin bed/double bed",
          "Wi-Fi",
        ],
        roomDetails: {
          "Room Size": { icon: IoMdResize, value: "200 sq. feet" },
          "Bed Type": { icon: IoBed, value: "King Size" },
          "Starting Price": { icon: IoPricetagSharp, value: "USD 350" },
          Occupancy: { icon: MdFamilyRestroom, value: "2 adults + 1 child" },
          Smoking: { icon: FaSmoking, value: "Yes" },
        },
      },
      {
        id: "juniorSuite",
        title: "Junior Suite",
        subtitle: "",
        description:
          "Our Junior Suite offers spacious accommodation with a cozy living room, perfect for relaxation and comfort.",
        url: "https://www.hotelichchha.com/images/subpackage/image/9gKt1-one.jpg",
        router: "/accommodation/junior-suite",
        images: [
          {
            src: dlx1,
            title: "The Homely Ambience",
          },
          {
            src: dlx2,
            title: "The Homely Ambience",
          },
          {
            src: dlx3,
            title: "The Homely Ambience",
          },
          {
            src: dlx4,
            title: "The Homely Ambience",
          },
        ],
        overview: [
          {
            title: "Overview",
            content: [
              "Indulge in the refined luxury of Hotel Ichchha Junior Suites, where international flair meets intimate comfort. These suites are a sanctuary of sophistication, offering a blend of modern elegance and timeless charm. With premium amenities and bespoke services, our Junior Suites are designed to provide an unforgettable experience for the global connoisseur.",
            ],
          },
        ],
        policies: [
          {
            title: "Child Policies",
            content: [
              "Child 0 - 4 yrs. sharing parent's room free of charge on same plan as adults.",
              "Child age 5 - 10 yrs. sharing parent's room will be charged 50% adult meal rate.",
              "Breakfast - US$ 8/ INR 500.",
            ],
          },
        ],
        amenities: [
          "Air conditioning",
          "Bathrobe",
          "Coffee and tea set",
          "Desk",
          "Hairdryer",
          "Minibar",
          "Pillow service",
          "Safe",
          "Slippers",
          "Storage cabinet",
          "Telephone",
          "Television",
          "Toilet",
          "Towel service",
          "Twin bed/double bed",
          "Wi-Fi",
        ],
        roomDetails: {
          "Room Size": { icon: IoMdResize, value: "200 sq. feet" },
          "Bed Type": { icon: IoBed, value: "King Size" },
          "Starting Price": { icon: IoPricetagSharp, value: "USD 300" },
          Occupancy: { icon: MdFamilyRestroom, value: "2 adults + 1 child" },
          Smoking: { icon: FaSmoking, value: "Yes" },
        },
      },
      {
        id: "executiveSuite",
        title: "Executive Suite",
        subtitle: "",
        description:
          "Elegance meets comfort in our Executive Suite, featuring a large bedroom and a separate living room for your convenience.",
        url: "https://www.hotelichchha.com/images/subpackage/image/x64rS-room-2.jpg",
        router: "/accommodation/executive-suite",
        images: [
          {
            src: dlx1,
            title: "The Homely Ambience",
          },
          {
            src: dlx2,
            title: "The Homely Ambience",
          },
          {
            src: dlx3,
            title: "The Homely Ambience",
          },
          {
            src: dlx4,
            title: "The Homely Ambience",
          },
        ],
        overview: [
          {
            title: "Overview",
            content: [
              "Light, bright and with a smart layout that enhances the feeling of spaciousness, our rooms feature all the world class furniture, air conditioning, amenities, toiletries and technology. Super deluxe rooms are ingeniously designed with splendid interiors. The junior suite rooms are spacious rooms with a cozy living room separated by a partial wall. The executive rooms feature a large bedroom and a living room. Elegantly decorated with opulent interiors and varnished in soft tones, all the rooms are spacious with classy comfortable beds.",
            ],
          },
        ],
        policies: [
          {
            title: "Child Policies",
            content: [
              "Child 0 - 4 yrs. sharing parent's room free of charge on same plan as adults.",
              "Child age 5 - 10 yrs. sharing parent's room will be charged 50% adult meal rate.",
              "Breakfast - US$ 8/ INR 500.",
            ],
          },
        ],
        amenities: [
          "Air conditioning",
          "Bathrobe",
          "Coffee and tea set",
          "Desk",
          "Hairdryer",
          "Minibar",
          "Pillow service",
          "Safe",
          "Slippers",
          "Storage cabinet",
          "Telephone",
          "Television",
          "Toilet",
          "Towel service",
          "Twin bed/double bed",
          "Wi-Fi",
        ],
        roomDetails: {
          "Room Size": { icon: IoMdResize, value: "200 sq. feet" },
          "Bed Type": { icon: IoBed, value: "King Size" },
          "Starting Price": { icon: IoPricetagSharp, value: "USD 300" },
          Occupancy: { icon: MdFamilyRestroom, value: "2 adults + 1 child" },
          Smoking: { icon: FaSmoking, value: "Yes" },
        },
      },
    ],
  },
];

export const testimonialContents = [
  {
    id: "testimonialSection",
    title: "Valued guest feedback",
    subtitle: "",
    subheading:
      "Positive feedback and a simple thank you go a long way. It motivates us to provide world-class hospitality to our guests.",
    description:
      "We are proud to have received positive feedback from our guests. Here are some of the testimonials from our valued guests.",
    testimonials: [
      {
        id: 1,
        content:
          "Mid range prices, well managed and friendly staff. Decent breakfast buffet. 5 minute walk to bars and restaurants. A pool thats heated, great after treks. Nice soft and comfortable beds good to relax after trekking.",
        author: "Shane F",
        image:
          "https://cdt.org/wp-content/uploads/2015/10/2015-10-06-FB-person.png",
        source: "Google Reviews",
      },
      {
        id: 2,
        content:
          "It indeed was a pleasant experience when we arrived. The front office staff made us most welcome with their charming and pleasing smiles. The moment we stepped into the resort we realised that we did not make a wrong choice.",
        author: "Naga Seetharam",
        image:
          "https://cdt.org/wp-content/uploads/2015/10/2015-10-06-FB-person.png",
        source: "TripAdvisor",
      },
      {
        id: 3,
        content:
          "A good place to spend your holiday, business trip and conference. The place is executive, with excellent reception, welcoming personnel like Geeta and her crew. Good food, clean rooms and conference hall.",
        author: "Valerie Machuku",
        image:
          "https://cdt.org/wp-content/uploads/2015/10/2015-10-06-FB-person.png",
        source: "Agoda",
      },
    ],
  },
];

export const hotelFacilities = [
  {
    id: "facilitiesTitle",
    // title: "Explore What's on at Hotel Ichchha",
    title: "Unwind in the delighted",
    subtitle:
      "Unwind in the delight that is your home away from home. Our property's location offers a mix of quiet tranquillity and bustling hustle.",
    description:
      "Embark on a journey of your business, leisure, pilgrimage, or adventure to discover the hospitality of Hotel Ichchha, From the Hotel’s vibrant restaurant and lounge to its tranquil gardens, this is where the city comes to connect and be inspired. Centrally located, it’s an ideal choice for business travelers, pilgrimage tours, and recreational tours. The best choice for a destination wedding is to make your special moments more memorable.",
    icon: "",
  },
  // {
  //   id: "roomsAndSuites",
  //   title: "Rooms & Suites",
  //   description:
  //     "Unwind in our elegantly decorated rooms that are equipped with all the modern day amenities.",
  //   icon: "https://www.hotelichchha.com/images/services/43hsW-rooms.jpg",
  // },
  {
    id: "restaurantAndBar",
    title: "Restaurant & Bar",
    description:
      "Perfect place to indulge in the finest wines and signature cocktails with friends and family.",
    icon: "https://www.hotelichchha.com/images/services/MWHKx-gallery-bar.jpg",
    router: "/restaurants",
  },
  {
    id: "conferenceAndEvents",
    title: "Conference & Events",
    description:
      "Remember us for your various events and make your events well managed and fulfilled.",
    icon: "https://www.hotelichchha.com/images/services/S1FZI-gallery-hall.jpg",
    router: "/events",
  },
  {
    id: "healthAndSpa",
    title: "Health & Spa",
    description:
      "Relax yourself from your stressful works and get a cool spa massage from professional masseurs.",
    icon: "https://www.hotelichchha.com/images/services/FqRR6-spa.jpg",
    router: "/recreation",
  },
  {
    id: "swimmingPool",
    title: "Swimming Pool",
    description:
      "Enjoy memorable time in our swimming pool. Have fun with your family and friends.",
    icon: "https://www.hotelichchha.com/images/services/fIIuL-pool.jpg",
    router: "/recreation",
  },
  {
    id: "miniCasino",
    title: "Mini Casino",
    description:
      "A perfect place to relive your days with exciting games along with the family.",
    icon: "https://www.hotelichchha.com/images/services/fWNzQ-casino.jpg",
    router: "/recreation",
  },
  // {
  //   id: "weddingAndCeremonyVenues",
  //   title: "Wedding & Ceremony Venues",
  //   description:
  //     "Create lasting and unforgettable memories of your dream wedding.",
  //   icon: "https://www.hotelichchha.com/images/services/O0UvR-gallery-event.jpg",
  // },
  {
    id: "jeepSafari",
    title: "Adventure Activities",
    description:
      "An exciting experience is to spotting and viewing wildlife on a jeep safari. Prepare yourself for a magnificent glance to capture on camera.",
    icon: "https://www.hotelichchha.com/images/services/fY4Ra-safari.jpg",
    router: "/recreation",
  },
];

export const facilitiesSectionIcon = {
  airportTransfer: {
    icon: MdLocalAirport,
    title: "Airport Pickup",
  },
  carHire: {
    icon: FaCar,
    title: "Car Hire",
  },
  atm: {
    icon: MdLocalAtm,
    title: "ATM",
  },
  spa: {
    icon: GrSpa,
    title: "Spa",
  },
  gym: {
    icon: CgGym,
    title: "Gym",
  },
  childcare: {
    icon: GiKidSlide,
    title: "Kids Play Area",
  },
  pool: {
    icon: FaSwimmingPool,
    title: "Pool",
  },
  restaurant: {
    icon: RiRestaurant2Fill,
    title: "Restaurant",
  },
  bar: {
    icon: MdOutlineSportsBar,
    title: "Bar",
  },
  wifi: {
    icon: FaWifi,
    title: "Wifi",
  },
  doctor: {
    icon: FaUserDoctor,
    title: "Doctor on Call",
  },
  conferenceRoom: {
    icon: MdOutlineMeetingRoom,
    title: "Conference Room",
  },
  roomService: {
    icon: PiBroomBold,
    title: "Room Service",
  },
  parking: {
    icon: BiSolidParking,
    title: "Parking",
  },
  laundry: {
    icon: MdOutlineLocalLaundryService,
    title: "Laundry",
  },
  concierge: {
    icon: LuConciergeBell,
    title: "Concierge",
  },
  businessCenter: {
    icon: MdOutlineBusinessCenter,
    title: "Business Center",
  },

  petFriendly: {
    icon: MdOutlinePets,
    title: "Pet Friendly",
  },
};

export const galleryImages = [
  {
    id: "image1",
    url: g1,
    alt: "Gallery Image 1",
  },
  {
    id: "image2",
    url: g2,
    alt: "Gallery Image 2",
  },
  {
    id: "image3",
    url: g3,
    alt: "Gallery Image 3",
  },
  {
    id: "image4",
    url: g4,
    alt: "Gallery Image 4",
  },
  {
    id: "image5",
    url: g5,
    alt: "Gallery Image 5",
  },
  {
    id: "image6",
    url: g6,
    alt: "Gallery Image 6",
  },
  {
    id: "image7",
    url: g7,
    alt: "Gallery Image 7",
  },
  {
    id: "image8",
    url: g8,
    alt: "Gallery Image 8",
  },
  {
    id: "image9",
    url: g9,
    alt: "Gallery Image 9",
  },
  {
    id: "image10",
    url: g10,
    alt: "Gallery Image 10",
  },
  {
    id: "image11",
    url: g11,
    alt: "Gallery Image 11",
  },
  {
    id: "image12",
    url: g12,
    alt: "Gallery Image 12",
  },
  {
    id: "image13",
    url: g13,
    alt: "Gallery Image 13",
  },
  {
    id: "image14",
    url: g14,
    alt: "Gallery Image 14",
  },
  {
    id: "image15",
    url: g15,
    alt: "Gallery Image 15",
  },
  {
    id: "image16",
    url: g16,
    alt: "Gallery Image 16",
  },
  {
    id: "image17",
    url: g17,
    alt: "Gallery Image 17",
  },
  {
    id: "image18",
    url: g18,
    alt: "Gallery Image 18",
  },
  {
    id: "image19",
    url: g19,
    alt: "Gallery Image 19",
  },
  {
    id: "image20",
    url: g20,
    alt: "Gallery Image 20",
  },
  {
    id: "image21",
    url: g21,
    alt: "Gallery Image 21",
  },
  {
    id: "image22",
    url: g22,
    alt: "Gallery Image 22",
  },
  {
    id: "image23",
    url: g23,
    alt: "Gallery Image 23",
  },
  {
    id: "image24",
    url: g24,
    alt: "Gallery Image 24",
  },
];

export const nearbyLocations = [
  {
    name: "Airport",
    distance: "1.8km",
    map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7099.910196047883!2d84.96976494252185!3d27.157702956007654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39eb548a698be7cf%3A0x94b1a58231a84514!2sSimara%20Airport%2C%20Airport%20Rd%2044412%2C%20Gadhimai%2044400!3m2!1d27.1636195!2d84.9795716!4m5!1s0x39eb54f2f90e0a47%3A0x76bed6bd117eda97!2sHotel%20Ichchha%2C%20Pipara%20Simara%2044400!3m2!1d27.1516505!2d84.973591!5e0!3m2!1sen!2snp!4v1710325185542!5m2!1sen!2snp",
  },
  {
    name: "Gadhi Mai",
    distance: "5.6km",
    map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d113698.23358256779!2d84.89524728553098!3d27.059544645031096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39eca934d6b2d40b%3A0xbd0542d8b9c9c42d!2sGadhimai%20Temple%2C%20Mahagadhimai%2044405!3m2!1d26.993407299999998!2d85.047285!4m5!1s0x39eb54f2f90e0a47%3A0x76bed6bd117eda97!2sHotel%20Ichchha%2C%20Pipara%20Simara%2044400!3m2!1d27.1516505!2d84.973591!5e0!3m2!1sen!2snp!4v1710325470591!5m2!1sen!2snp",
  },
  {
    name: "Parsa National Park",
    distance: "10km",
    map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7099.910196047883!2d84.96976494252185!3d27.157702956007654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39eb548a698be7cf%3A0x94b1a58231a84514!2sSimara%20Airport%2C%20Airport%20Rd%2044412%2C%20Gadhimai%2044400!3m2!1d27.1636195!2d84.9795716!4m5!1s0x39eb54f2f90e0a47%3A0x76bed6bd117eda97!2sHotel%20Ichchha%2C%20Pipara%20Simara%2044400!3m2!1d27.1516505!2d84.973591!5e0!3m2!1sen!2snp!4v1710325185542!5m2!1sen!2snp",
  },
  {
    name: "Raxaul India Border",
    distance: "23km",
    map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7099.910196047883!2d84.96976494252185!3d27.157702956007654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39eb548a698be7cf%3A0x94b1a58231a84514!2sSimara%20Airport%2C%20Airport%20Rd%2044412%2C%20Gadhimai%2044400!3m2!1d27.1636195!2d84.9795716!4m5!1s0x39eb54f2f90e0a47%3A0x76bed6bd117eda97!2sHotel%20Ichchha%2C%20Pipara%20Simara%2044400!3m2!1d27.1516505!2d84.973591!5e0!3m2!1sen!2snp!4v1710325185542!5m2!1sen!2snp",
  },
  {
    name: "Churiya Mai",
    distance: "25km",
    map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7099.910196047883!2d84.96976494252185!3d27.157702956007654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39eb548a698be7cf%3A0x94b1a58231a84514!2sSimara%20Airport%2C%20Airport%20Rd%2044412%2C%20Gadhimai%2044400!3m2!1d27.1636195!2d84.9795716!4m5!1s0x39eb54f2f90e0a47%3A0x76bed6bd117eda97!2sHotel%20Ichchha%2C%20Pipara%20Simara%2044400!3m2!1d27.1516505!2d84.973591!5e0!3m2!1sen!2snp!4v1710325185542!5m2!1sen!2snp",
  },
  {
    name: "Shahid Smarak",
    distance: "40km",
    map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7099.910196047883!2d84.96976494252185!3d27.157702956007654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39eb548a698be7cf%3A0x94b1a58231a84514!2sSimara%20Airport%2C%20Airport%20Rd%2044412%2C%20Gadhimai%2044400!3m2!1d27.1636195!2d84.9795716!4m5!1s0x39eb54f2f90e0a47%3A0x76bed6bd117eda97!2sHotel%20Ichchha%2C%20Pipara%20Simara%2044400!3m2!1d27.1516505!2d84.973591!5e0!3m2!1sen!2snp!4v1710325185542!5m2!1sen!2snp",
  },
  {
    name: "Bharat Tal",
    distance: "60km",
    map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7099.910196047883!2d84.96976494252185!3d27.157702956007654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39eb548a698be7cf%3A0x94b1a58231a84514!2sSimara%20Airport%2C%20Airport%20Rd%2044412%2C%20Gadhimai%2044400!3m2!1d27.1636195!2d84.9795716!4m5!1s0x39eb54f2f90e0a47%3A0x76bed6bd117eda97!2sHotel%20Ichchha%2C%20Pipara%20Simara%2044400!3m2!1d27.1516505!2d84.973591!5e0!3m2!1sen!2snp!4v1710325185542!5m2!1sen!2snp",
  },
  {
    name: "Janaki Mandir",
    distance: "139km",
    map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7099.910196047883!2d84.96976494252185!3d27.157702956007654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39eb548a698be7cf%3A0x94b1a58231a84514!2sSimara%20Airport%2C%20Airport%20Rd%2044412%2C%20Gadhimai%2044400!3m2!1d27.1636195!2d84.9795716!4m5!1s0x39eb54f2f90e0a47%3A0x76bed6bd117eda97!2sHotel%20Ichchha%2C%20Pipara%20Simara%2044400!3m2!1d27.1516505!2d84.973591!5e0!3m2!1sen!2snp!4v1710325185542!5m2!1sen!2snp",
  },
];

export const diningOptions = {
  "fountain-restaurant": {
    id: "fountain-restaurant",
    title: "Fountain Restaurant",
    subtitle: "Splendid Ambience for Fine Dines",
    description:
      "Cozy Fountain Restaurant is our splendid ambience for fine dines. Adorned with unique features, our restaurant serves quality food and beverages.",

    imageUrls: [fountainR1, fountainR2, fountainR3, fountainR4],
    occupancy: "100 guests",
    openingTime: "06:00 AM",
    closingTime: "11:00 PM",
    foodMenu: ["Appetizers", "Main Course", "Desserts", "Beverages"],
    type: "Multicuisine",
  },
  "courtyard-dining": {
    id: "courtyard-dining",
    title: "Courtyard Dining",
    subtitle: "Enjoyable Dining with Pool View",
    description:
      "Our courtyard dining serves quality food and beverages. You can also enjoy the swimming pool view that makes your dining even more enjoyable.",
    imageUrls: [fountainR1, fountainR2, fountainR3, fountainR4],

    occupancy: "50 guests",
    openingTime: "06:00 AM",
    closingTime: "11:00 PM",
    foodMenu: ["Starters", "Salads", "Grilled Specialties", "Mocktails"],
    type: "Multicuisine",
  },
  "sports-lounge": {
    id: "sports-lounge",
    title: "Sports Lounge",
    subtitle: "Relaxing Dining and Entertainment",
    description:
      "You can also enjoy the swimming pool view that makes your dining even more enjoyable. Corporate Madhusala Bar of private ambience provides you the best sitting with your associates. Designed in an exclusive way, the bar assures a relaxing environment for the guests. Hanging Garden Bar with cultural dance, fun, and entertainment gives you a memorable time during your stay. Located between a beautiful garden and swimming pool view, the bar provides a relaxing environment.",
    imageUrls: [fountainR1, fountainR2, fountainR3, fountainR4],

    occupancy: "80 guests",
    openingTime: "06:00 AM",
    closingTime: "11:00 PM",
    foodMenu: ["Snacks", "Craft Beers", "Cocktails", "Live Music"],
    type: "Multicuisine",
  },
  "madhushala-bar": {
    id: "madhushala-bar",
    title: "Madhushala Bar",
    subtitle: "Private Ambience for Corporate Gatherings",
    description:
      "Corporate Madhusala Bar of private ambience provides you the best sitting with your associates. Designed in an exclusive way, the bar assures a relaxing environment for the guests.",
    imageUrls: [bar2, bar3],
    occupancy: "40 guests",
    openingTime: "04:00 PM",
    closingTime: "11:00 PM",
    foodMenu: ["Signature Cocktails", "Wines", "Whiskeys", "Bar Snacks"],
    type: "Beverages",
  },
  "pool-bar": {
    id: "pool-bar",
    title: "Pool Bar",
    subtitle: "Relaxing Environment by the Pool",
    description:
      "Designed in an exclusive way, the bar assures a relaxing environment for the guests. Hanging Garden Bar with cultural dance, fun, and entertainment gives you a memorable time during your stay. Located between a beautiful garden and swimming pool view, the bar provides a relaxing environment.",
    imageUrls: [bar2, bar3],
    occupancy: "30 guests",
    openingTime: "04:00 PM",
    closingTime: "11:00 PM",
    foodMenu: ["Frozen Cocktails", "Light Bites", "Juices", "Smoothies"],
    type: "Beverages",
  },
};

export const eventVenues = {
  janakiHall: {
    id: "janakiHall",
    title: "Janaki Hall",
    description:
      "Step into the grandeur of Janaki Hall at Hotel Ichchha, a venue that epitomizes elegance and charm. With its opulent decor, facilities, and versatile space, it’s the perfect setting for any prestigious event. Whether hosting a gala, conference, or wedding, Janaki Hall transforms every occasion into a memorable, world-class experience.",
    enquiryLink: "Enquiry",
    imageUrls: [
      "https://www.hotelichchha.com/images/gallery/galleryimages/UhsUs-hall2.jpg",
      "https://www.hotelichchha.com/images/gallery/galleryimages/gNdjb-2.jpg",
      "https://www.hotelichchha.com/images/gallery/galleryimages/grmPi-g2.jpg",
      "https://www.hotelichchha.com/images/gallery/galleryimages/3Q6av-hall.jpg",
    ],
    amenities: [
      "Theatre: 100 pax",
      "U shape: 100 pax",
      "Classroom: 100 pax",
      // "Round Table: 100 pax",
    ],
  },
  jyamireHall: {
    id: "jyamireHall",
    title: "Jyamire Hall",
    description:
      "Ascend to the zenith of luxury with Jyamire Hall at Hotel Ichchha, a beacon of unparalleled sophistication. This majestic hall is a masterpiece, crafted to host the most prestigious international events. With its stunning interiors, state-of-the-art acoustics, and ambient lighting, it creates an atmosphere of exclusivity and grandeur, ensuring every event is nothing short of legendary.",
    enquiryLink: "Enquiry",
    imageUrls: [
      "https://www.hotelichchha.com/images/gallery/galleryimages/UhsUs-hall2.jpg",
      "https://www.hotelichchha.com/images/gallery/galleryimages/gNdjb-2.jpg",
      "https://www.hotelichchha.com/images/gallery/galleryimages/grmPi-g2.jpg",
      "https://www.hotelichchha.com/images/gallery/galleryimages/3Q6av-hall.jpg",
    ],
    // amenities: ["Mandap", "Pavilion", "Meeting rooms", "Garden venue"],
    amenities: [
      "Theatre: 100 pax",
      "U shape: 100 pax",
      "Classroom: 100 pax",
      // "Round Table: 100 pax",
    ],
  },
  narayaniHall: {
    id: "narayaniHall",
    title: "Narayani Hall",
    description:
      "Narayani Hall at Hotel Ichchha is where grandeur meets innovation, a prestigious venue that redefines the essence of high-profile events. With its breathtaking design, advanced technological integrations, and impeccable service, it stands as a testament to next-level luxury. Here, every event is transformed into an extraordinary spectacle, setting a new benchmark for elegance and sophistication in the world of hospitality.",
    enquiryLink: "Enquiry",
    imageUrls: [
      "https://www.hotelichchha.com/images/gallery/galleryimages/UhsUs-hall2.jpg",
      "https://www.hotelichchha.com/images/gallery/galleryimages/gNdjb-2.jpg",
      "https://www.hotelichchha.com/images/gallery/galleryimages/grmPi-g2.jpg",
      "https://www.hotelichchha.com/images/gallery/galleryimages/3Q6av-hall.jpg",
    ],
    // amenities: ["Meeting rooms", "Pool Bar", "Courtyard"],
    amenities: [
      "Theatre: 100 pax",
      "U shape: 100 pax",
      "Classroom: 100 pax",
      // "Round Table: 100 pax",
    ],
  },
  balmikiHall: {
    id: "balmikiHall",
    title: "Balmiki Hall",
    description:
      "Balmiki Hall at Hotel Ichchha is a marvel of architectural beauty and functional elegance, designed to host events that leave a lasting impression. With its luxurious decor, state-of-the-art amenities, and adaptable space, it’s the ideal backdrop for any distinguished gathering. Here, every event is elevated to an art form, ensuring guests experience the pinnacle of refinement and grace.",
    enquiryLink: "Enquiry",
    imageUrls: [
      "https://www.hotelichchha.com/images/gallery/galleryimages/UhsUs-hall2.jpg",
      "https://www.hotelichchha.com/images/gallery/galleryimages/gNdjb-2.jpg",
      "https://www.hotelichchha.com/images/gallery/galleryimages/grmPi-g2.jpg",
      "https://www.hotelichchha.com/images/gallery/galleryimages/3Q6av-hall.jpg",
    ],
    // amenities: ["Meeting rooms", "Pool Bar", "Courtyard"],
    amenities: [
      "Theatre: 100 pax",
      "U shape: 100 pax",
      "Classroom: 100 pax",
      // "Round Table: 100 pax",
    ],
  },
};

export const recreationVenues = {
  swimmingPool: {
    id: "swimmingPool",
    title: "Swimming Pool",
    imageUrls: [pool1, pool2, pool3],
    description:
      "Dive into an inviting sea of sparkling blue water to refresh your weary bones on a hot day. Have a wonderful time in our refreshing pool with your family and friends. With plentiful sunbeams streaming through its full-length skylight, our outdoor pool is an excellent place to swim laps, relax with family or simply unwind in the peaceful surroundings. For your convenience, items such as goggles, swim caps are in place.",
    amenities: ["Outdoor Pool", "Sunbathing Area", "Goggles and Swim Sets"],
  },
  steamSaunaJacuzzi: {
    id: "steamSaunaJacuzzi",
    title: "Steam, Sauna, Jacuzzi",
    imageUrls: [jacuzzi2, jacuzzi1],
    description:
      "Relax and enjoy a treat at Hotel Ichchha with a uniquely cultured, nurturing and optimal pampering environment for total refreshment. Each one of our unique spa services nourishes and heals your body, replaces trace minerals. Time-honored Massage techniques of ancient era are expertly crafted on the hands of our Therapists. Enjoy services such as manicure, pedicure and makeup artist offered by our hotel.",
    amenities: ["Steam Room", "Sauna", "Jacuzzi", "Spa Services"],
  },
  gamingZoneKidsClub: {
    id: "gamingZoneKidsClub",
    title: "Gaming Zone & Kids Club",
    imageUrls: [ground1, ground2],
    description:
      "The hotel comprises a gaming zone with the most exciting gaming floor with more tables and coin machine, choose among loads of Blackjack games. We have set up a separate fun zone for kids ensuring a relaxing time with play areas offering an array of kid’s fun activities. All in all, we have got a variety of fun activities delivering lavish relaxation for guests of all ages that one deserves.",
    amenities: ["Gaming Floor", "Blackjack", "Kids Play Area"],
  },
  casino: {
    id: "casino",
    title: "Casino",
    imageUrls: [casino1, casino2, casino3, casino4],
    description:
      "Relax and enjoy a treat at Hotel Ichchha with a uniquely cultured, nurturing and optimal pampering environment for total refreshment. Each one of our unique spa services nourishes and heals your body, replaces trace minerals. Time-honored Massage techniques of ancient era are expertly crafted on the hands of our Therapists. Enjoy services such as manicure, pedicure and makeup artist offered by our hotel.",
    amenities: ["Various Casino Games", "Entertainment"],
  },
  spa: {
    id: "spa",
    title: "Spa",
    imageUrls: [spa2, spa3, spa4],
    description:
      "Relax and enjoy a treat at Hotel Ichchha with a uniquely cultured, nurturing and optimal pampering environment for total refreshment. Each one of our unique spa services nourishes and heals your body, replaces trace minerals. Time-honored Massage techniques of ancient era are expertly crafted on the hands of our Therapists. Enjoy services such as manicure, pedicure and makeup artist offered by our hotel.",
    amenities: ["Spa Treatments", "Massage Services", "Manicure/Pedicure"],
  },
  healthClub: {
    id: "healthClub",
    title: "Health Club",
    imageUrls: [gym1, gym2, gym3],
    description:
      "The hotel comprises a gaming zone with the most exciting gaming floor with more tables and coin machine, choose among loads of Blackjack games. We have set up a separate fun zone for kids ensuring a relaxing time with play areas offering an array of kid’s fun activities. All in all, we have got a variety of fun activities delivering lavish relaxation for guests of all ages that one deserves.",
    amenities: ["Fitness Equipment", "Exercise Classes", "Personal Training"],
  },
};

export const sliderImages = [
  {
    src: ichchha1,
    title: "Hotel Ichchha, Hospitality at its best!",
  },
  // {
  //   src: "https://www.hotelichchha.com/images/slideshow/UVh7T-ichchha-room.jpg",
  //   title: "The Homely Ambience",
  // },
  // {
  //   src: "https://www.hotelichchha.com/images/slideshow/mmMDi-pool.jpg",
  //   title: "Plentiful sunbeams streaming pool",
  // },
  {
    src: slider1,
    title: "Crafting Dreams into Concrete Realities: Your Ultimate Destination",
  },
  {
    src: slider2,
    title: "Rooms Designed for Comfort, Styled for Luxury: Unwind Here!",
  },
  {
    src: slider3,
    title: "Dive into Refreshing Bliss: Our Pool is Your Oasis Escape",
  },
  {
    src: slider4,
    title:
      "Elegant Halls, Timeless Memories: Celebrate Life's Special Moments Here",
  },
  {
    src: slider5,
    title:
      "Savor Every Bite, Indulge in Culinary Delights: Our Restaurant Beckons",
  },
  {
    src: slider6,
    title:
      "Seamless Transitions: Our Indoor-Outdoor Spaces Embrace Nature's Beauty",
  },
];

export const enquiryFormData = [
  {
    name: "eventTitle",
    label: "Event Title",
    type: "text",
    required: true,
  },
  {
    name: "date",
    label: "Event Date",
    type: "date",
    required: true,
  },
  {
    name: "pax",
    label: "Number of Pax",
    type: "number",
    required: true,
  },
  {
    name: "name",
    label: "Full Name",
    type: "text",
    required: true,
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    required: true,
  },
  {
    name: "contact",
    label: "Contact Number",
    type: "number",
    required: true,
  },
  {
    name: "message",
    label: "Message",
    type: "textarea",
    required: true,
  },
];

export const contactFormData = {
  fields: [
    {
      id: "name",
      label: "Full Name",
      type: "text",
      placeholder: "Enter your full name",
      required: true,
    },
    {
      id: "email",
      label: "Email Address",
      type: "email",
      placeholder: "Enter your email address",
      required: true,
    },
    {
      id: "contactNumber",
      label: "Contact Number",
      type: "tel",
      placeholder: "Enter your contact number",
      required: true,
    },
    {
      id: "subject",
      label: "Subject",
      type: "text",
      placeholder: "Enter the subject",
      required: true,
    },
  ],
  textarea: {
    id: "message",
    label: "Message",
    placeholder: "Enter your message",
    required: true,
  },
};

export default contactFormData;
