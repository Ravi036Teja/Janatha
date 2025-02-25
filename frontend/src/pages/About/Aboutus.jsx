import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import i1 from "../../Images/abt-nature1.jpg";
import i2 from "../../Images/abt-nature2.jpg";
import i3 from "../../Images/abt-nature3.jpg";
import a1 from "../../Images/tata-award.jpg";
import a2 from "../../Images/turbo-award.jpg";
import a3 from "../../Images/turbo-award.jpg";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import japllogo from "../../Images/japl-logo.png";
import Partners from "../Home/Partners";

const timelineData = [
  {
    year: "1973",
    content:
      "Janatha Auto Works was founded by Late Gooty Dada Sab along with two friends in Gangavathi.",
    image: i1
  },
  {
    year: "1982",
    content:
      "Expansion of business as one of the founders opened a workshop in Hospet and another in Chitradurga.",
    image: i2
  },
  {
    year: "1983",
    content:
      "A 2S spare and service shop was established in Kushtagi, marking the first expansion of Janatha Auto Works outside Gangavathi.",
    image: i3
  },
  {
    year: "1992",
    content:
      "A new six-bay workshop was constructed in Gangavathi after 10 years of dedicated service.",
    image: i3
  },
  {
    year: "1996",
    content:
      "Water service shop established to enhance vehicle maintenance services, Machine shop launched under the leadership of Aslam Bhai and Noor Khan Sab to improve efficiency.",
    image: i1
  },
  {
    year: "2001",
    content:
      "Became Sundaram Motors Authorized Service Station (SMASS) for Ashok Leyland vehicles in Gangavathi.",
    image: i1
  },
  {
    year: "2003",
    content:
      "Second workshop opened in Hospet, responding to increasing mining activities and vehicle demand.",
    image: i2
  },
  {
    year: "2004",
    content:
      "  Machine shop established at the Hospet workshop to improve service delivery and efficiency.",
    image: i3
  },
  {
    year: "2007",
    content:
      "Became an Authorized Service Center for RANE TRW Power Steering Systems at the Hospet workshop.",
    image: i1
  },
  {
    year: "2008",
    content:
      "Opened a dedicated Engine Reboring Workshop in Hospet, solving a key problem of outsourcing engine refurbishment.",
    image: i2
  },
  {
    year: "2009",
    content:
      "Became an Exide Battery Distributor for the entire Koppal district for sales and service.",
    image: i3
  },
  {
    year: "2010",
    content:
      "Appointed Ashok Leyland’s Authorized Service Center for Koppal District.",
    image: i1
  },
  {
    year: "2011",
    content:
      "Secured an AMC (Annual Maintenance Contract) with JSW to provide 24/7 maintenance for 80 vehicles in Sandur mines, Began at-site AMC service for NMDC's 8 staff buses, a contract that continues to date.",
    image: i2
  },
  {
    year: "2012",
    content:
      "Expanded operations with a 7-bay workshop in Kurekuppa, which later became a 15-bay full-fledged workshop in 2018, Became Turbo Energy Ltd’s Authorized Service Center (ASC) for the Bellary district.",
    image: i3
  },
  {
    year: "2015",
    content:
      "Established an Authorized Service Center for WABCO, TEL, and RANE TRW in Chitradurga, Opened container workshops in Belgaum and Bijapur for Ashok Leyland service.",
    image: i1
  },
  {
    year: "2016",
    content:
      "Launched Bellary Reboring Workshop to meet rising demand for engine reboring services, Started a subcontract with Rocktech Mining Contractor at NMDC mines, deploying 18 Ashok Leyland vehicles , Established IQRA Public School Gangavathi to provide affordable, quality education.",
    image: i2
  },
  {
    year: "2017",
    content:
      "Received Best Performance Award from Ashok Leyland for highest vehicle inflow revenue in Gangavathi, Kurekuppa branch achieved ₹8 crore revenue, receiving Ashok Leyland’s Best Performance Award.",
    image: i3
  },
  {
    year: "2018",
    content:
      "Opened a sixth Ashok Leyland Authorized Service Center (ASC) in Kudligi, Janatha Automobiles Pvt. Ltd. was established as a Tata Motors Commercial Vehicles Dealer, Set up a 3S dealership in Gangavathi with nine service bays, a machine shop, and a wheel alignment system.",
    image: i1
  },
  {
    year: "2019",
    content:
      "6-bay service workshop launched in Raichur, strengthening Tata Motors’ presence in the region, Modern 25-bay workshop constructed in Hospet, designed to Tata Motors’ specifications, Awarded a work order from NMDC for 30 TATA Signa 2825 mining tippers.",
    image: i2
  },
  {
    year: "2020",
    content:
      "Received a 3-year work order from S M Minetech for 20 TATA Signa 2825 mining tippers at Bhadra Mines.",
    image: i3
  },
  {
    year: "2022",
    content:
      "Awarded Best Performance Award by Turbo Energy Limited for turbo sales and service, Purchased land in Bellary for a new 9-bay full-fledged workshop.Purchased land in Bellary for a new 9-bay full-fledged workshop.",
    image: i1
  },
  {
    year: "2023",
    content:
      "Secured Tata Batteries dealership for Raichur, Hospet, and Bellary, Became an Authorized CCC (Components Care Center) for Cummins in Chitradurga, Hospet, Bellary, Davangere, and Shimoga districts.",
    image: i2
  },
  {
    year: "2024",
    content:
      "Achieved a milestone of 3,323 vehicle sales over 6 years with Tata Motors, Generated ₹94.69 crore revenue through 1,11,986 job cards over six years, Secured two Fleet Management Solutions (FMS) accounts in a single day, a first in PAN India and North Karnataka.",
    image: i3
  }
];

const AboutUs = () => {
  // Scroll trigger for the text section
  const [refText, inViewText] = useInView({
    threshold: 0.2 // Animation triggers when 20% of the element is visible
  });

   // Scroll trigger for the Partners section
    const [refPartners, inViewPartners] = useInView({
      threshold: 0.2
    });
  

  // Scroll trigger for the logo
  const [refLogo, inViewLogo] = useInView({
    threshold: 0.2
  });
  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000, // Adjust speed for smooth transition
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true, // Enables fade transition
    autoplay: true, // Auto-slide enabled
    autoplaySpeed: 5000, // 3 seconds per slide
    pauseOnHover: false // Prevent pause on hover
  };

  return (
    <div className="min-h-screen flex flex-col items-center mt-20 mx-10 ">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif">
        Parent Company
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* About Content */}
        <div className="mx-4 sm:mx-8 md:mx-4 my-12">
          {/* Column 1: Text Content */}
          <motion.div
            ref={refText}
            initial={{ opacity: 0, x: -50 }}
            animate={inViewText ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#0B389D] font-serif">
              Janatha Auto Works
            </h1>
            <h2 className="text-base sm:text-lg md:text-xl my-4 text-gray-500 font-serif">
              Welcome to JAW your trusted source for Tata Motors commercial
              vehicles. We are dedicated to delivering excellence by showcasing
              a full range of Tata’s cutting-edge, durable, and reliable
              commercial vehicles.
            </h2>
            <h2 className="text-base sm:text-lg md:text-xl my-4 text-gray-500 font-serif">
              At JAW, we understand that businesses thrive on transportation
              solutions that combine efficiency, power, and innovation. Whether
              you're looking for heavy-duty trucks, buses, or small cargo
              vehicles, Tata Motors is a name synonymous with performance and
              dependability.
            </h2>
            <h2 className="text-base sm:text-lg md:text-xl my-4 text-gray-500 font-serif">
              Our team is committed to helping you find the right vehicle to
              suit your business needs. With decades of Tata’s expertise in
              engineering and customer-centric solutions, we aim to provide a
              seamless experience from selection to ownership.
            </h2>
            <h2 className="text-base sm:text-lg md:text-xl my-4 text-gray-500 font-serif">
              Thank you for trusting us to be part of your journey.
            </h2>
          </motion.div>
        </div>
        {/* Column 2: Image */}
        <motion.div
          ref={refLogo}
          className="flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            inViewLogo ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 1 }}
        >
          <img
            src={japllogo}
            alt="JAPL Logo"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md pt-6"
          />
        </motion.div>
      </div>
      <h1 className="text-3xl md:text-4xl font-serif text-center pt-4 mb-6">
        Milestones
      </h1>

      {/* Image Slider (Full-Screen Width, Adjust Height as Needed) */}
      <div className="w-full h-[70vh] relative overflow-hidden">
        <Slider {...sliderSettings} ref={sliderRef} className="w-full h-full">
          {timelineData.map((item, index) => (
            <div key={index} className="relative text-center h-[70vh]">
              <img
                src={item.image}
                alt=""
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-6">
                <h2 className="text-4xl font-serif">{item.year}</h2>
                <p className="text-2xl mt-2 max-w-2xl font-serif">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* Awards and recgniations */}

      <div className="my-8">
        <h1 className="pt-8 py-4 text-3xl font-serif text-center">
          Awards & Recognitions
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-between items-center px-12 pt-12">
          <div className="w-80 h-[250px] border shadow-lg">
            <img src={a1} alt="" />
          </div>
          <div className="w-80 h-[250px] border shadow-lg">
            <img src={a2} alt="" />
          </div>
          <div className="w-80 h-[250px] border shadow-lg">
            <img src={a3} alt="" />
          </div>
        </div>
      </div>

      {/* Partners */}
      <div>
        {/* Partners Section */}
        <motion.div
          ref={refPartners}
          initial={{ opacity: 0, y: 50 }}
          animate={
            inViewPartners ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
          }
          transition={{ duration: 1 }}
        >
          <Partners/>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
