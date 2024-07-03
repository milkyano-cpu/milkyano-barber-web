
import Layout from "@/components/web/WebLayout";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, } from "react";
import { Helmet } from 'react-helmet-async';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion, useScroll, useTransform } from "framer-motion"

import FadeLinesText from "@/assets/web/home/fadedlines_text.svg";
import BgHero2 from "@/assets/web/home/hero.svg";
import blackFadeHero from "@/assets/web/home/black_fade_hero.svg";
import PricingHome from "@/assets/web/home/pricing-sections/pricing_home.svg"
import Consultation from "@/assets/web/home/pricing-sections/CONSULTATIONS.svg"
import BestServices from "@/assets/web/home/pricing-sections/BESTSERVICES.svg"
import Clean from "@/assets/web/home/pricing-sections/CLEAN.svg"
import PricingLeft from "@/assets/web/home/pricing-sections/pricing_left.png"
import PricingCenter from "@/assets/web/home/pricing-sections/pricing_center.png"
import PricingRight from "@/assets/web/home/pricing-sections/pricing_right.png"
import Scheduling from "@/assets/web/home/pricing-sections/SCHEDULING.svg"
import Logo from "@/assets/svg/logo.svg"

import instagramPhotosDesktop1 from '/src/assets/follow-us/desktop/instagram_photo_1.png';
import instagramPhotosDesktop2 from '/src/assets/follow-us/desktop/instagram_photo_2.png';
import instagramPhotosDesktop3 from '/src/assets/follow-us/desktop/instagram_photo_3.png';
import instagramPhotosDesktop4 from '/src/assets/follow-us/desktop/instagram_photo_4.png';
import instagramPhotosDesktop5 from '/src/assets/follow-us/desktop/instagram_photo_5.png';

import instagramPhotosMobile1 from '/src/assets/follow-us/mobile/instagram_photo_1.png';
import instagramPhotosMobile2 from '/src/assets/follow-us/mobile/instagram_photo_2.png';
import instagramPhotosMobile3 from '/src/assets/follow-us/mobile/instagram_photo_3.png';
import instagramPhotosMobile4 from '/src/assets/follow-us/mobile/instagram_photo_4.png';
import instagramPhotosMobile5 from '/src/assets/follow-us/mobile/instagram_photo_5.png';

import BottomCta from "/src/assets/web/home/bottom_cta.png"
import InstagramSection from "@/components/web/InstagramSection";
import { Link } from "react-router-dom";


export default function Home() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const instagram_images_desktop = [
    { image: instagramPhotosDesktop1, name: 'Mid Burst Fade' },
    { image: instagramPhotosDesktop2, name: 'Mid Drop Fade' },
    { image: instagramPhotosDesktop3, name: 'Mid Taper' },
    { image: instagramPhotosDesktop4, name: 'V Low Drop Fade' },
    { image: instagramPhotosDesktop5, name: '' },
  ];

  const instagram_images_mobile = [
    instagramPhotosMobile1,
    instagramPhotosMobile2,
    instagramPhotosMobile3,
    instagramPhotosMobile4,
    instagramPhotosMobile5,
  ];

  useEffect(() => {
    // Create a new style element
    const style = document.createElement('style');

    // Define the animation
    style.innerHTML = `
        @keyframes move {
            0% { transform: translateX(100%); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateX(-100%); opacity: 0; }
        }`;

    // Append the style element to the document head
    document.head.appendChild(style);

    // Clean up function
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const services = [
    {
      image: Consultation,
      title: "PROFESSIONAL CONSULTATIONS",
      description: "You want it, you get it. Describe what you’re aiming for to your chosen barber and let them make your dream hair."
    },
    {
      image: Scheduling,
      title: "ON-TIME SCHEDULING",
      description: "Schedule anytime anywhere here on our website, and only up to you to attend whenever you appointed."
    },

  ];
  const services2 = [
    {
      image: Clean,
      title: "CLEAN AND HYGENIC",
      description: "We make sure our barbers keep their tools as clean as their cuts."
    },
    {
      image: BestServices,
      title: "BEST SERVICES",
      description: "Our barbers are top of the line. Few of the best barbers you’ll find in Melbourne."
    }

  ];

  return (
    <Layout>
      <Helmet>
        <title>Home - Fadelines Barber Shop</title>
        <meta name="description" content="Fadelines - A premier barber shop offering top-notch haircuts and styles." />
        <meta property="og:title" content="Fadelines Barber Shop" />
        <meta property="og:description" content="Fadelines - A premier barber shop offering top-notch haircuts and styles." />
        <meta property="og:image" content="URL to Fadelines' preview image" />
        <meta property="og:url" content="URL to Fadelines' website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className={`flex flex-col text-stone-50 bg-stone-950 w-full h-full relative overflow-hidden`} >

        <img
          src={FadeLinesText}
          alt="FADED LINES FADED LINES "
          width={500}
          height={500}
          className="absolute z-0 top-12 right-4 md:right-24 w-[12rem] lg:w-[15rem]"
        />

        <section className="min-h-[55rem] md:min-h-[58rem] w-full relative py-32 border-t border-black"
          style={{
            boxShadow: 'inset 0 10px 10px rgba(0, 0, 0, 0.5)'
          }}
        >
          <div id='gradientBoxHomepage' className="absolute w-11/12 rounded-[49px]  flex flex-col gap-4 z-30 text-center backdrop-blur-lg text-white py-8  px-4  md:mr-12 shadow-black shadow-xl xl:w-1/3  bg-black/40 left-1/2 top-[45%] md:mb-12 transform -translate-x-1/2 -translate-y-1/2" style={{ backdropFilter: 'blur(16px) contrast(100%)', WebkitBackdropFilter: 'blur(16px) contrast(100%)' }}>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-wider md:leading-[4.5rem] ">
              <span className="text-transparent bg-gradient-to-r from-[#4DFF20]  to-[#88FF7D] bg-clip-text">THE BEST</span> FOR YOUR HAIR </h2>

            <div className="flex text-sm flex-col gap-0 font-bold">
              <p>Online Appointments Available</p>
              <p>Walk-In Welcome.</p>
              <p>Please contact us at  </p>
              <p>0435 249 543.</p>
              <p>We&apos;re located in Oakleigh.</p>
            </div>
            <div className="flex flex-col mt-4 md:py-0 gap-4 justify-center items-center md:w-6/12 mx-auto font-extrabold">
              <Button variant={"ghost"}
                className="relative rounded-2xl w-fit  z-20 backdrop-blur-lg bg-transparent text-lg md:text-xl  border border-[#14FF00] px-20 py-6 transform hover:scale-110 transition-transform duration-400 ease-in-out hover:shadow-md hover:bg-[#14FF00] hover:shadow-[#14FF00]  font-extrabold hover:text-black"
                style={{ backdropFilter: 'blur(16px) contrast(100%)', WebkitBackdropFilter: 'blur(16px) contrast(100%)' }}
              >
                <a href=" https://book.squareup.com/appointments/ud9yhcwfqc1fg0/location/LY7BZ89WAQ2QS/services">
                  Book Now
                </a>
              </Button>
            </div>
          </div>
          <img
            alt="hero image"
            width={500}
            height={500}
            src={BgHero2}
            className="top-0 absolute w-full h-full object-cover object-top z-[0] border-t border-black "
          />
          <img
            src={blackFadeHero}
            alt="FADED fade hero"
            width={500}
            height={500}
            className="absolute z-10 w-full left-0 bottom-0 object-bottom object-fill"
          />

          <p className="text-stone-50 w-10/12 text-center  absolute bottom-14  2xl:bottom-24 z-10 left-1/2 transform -translate-x-1/2 ">55 PORTMAN ST; OAKLEIGH VIC 3166; AUSTRALIA</p>
        </section>




        <section className="py-12 w-full md:min-h-[50vh] mt-0  px-4 flex flex-col  items-center md:px-12 my-12 relative bg-black">
          <img src={PricingHome} alt="barber shop faded lines" className='w-full h-full object-cover object-bottom absolute left-0 bottom-0 z-0' />

          <div className="flex flex-col gap-4 text-center items-center relative">
            <img src={Logo} alt="barber shop faded lines" className='w-32 h-auto opacity-90' />
            <h3 className="text-2xl md:text-3xl font-inter tracking-wider font-extrabold ">SIMPLE AND <span className="text-transparent bg-gradient-to-r from-[#4DFF20]  to-[#88FF7D] bg-clip-text">EFFECTIVE PRICING</span> <br className="hidden md:block " /> FOR THAT FRESH LOOK</h3>
            <p className="text-lg md:text-xl w-8/12 mt-4">Anyone deserves a good haircut. Time to get yours.</p>
          </div>

          <div className="relative flex flex-col w-full">

            <div className="relative h-full w-full py-[7rem]  flex gap-4 justify-between">
              <div className="flex flex-col gap-32 justify-start items-start">
                {services.map((service, index) => (
                  <div key={index} className="text-center flex gap-2 justify-center items-center flex-col w-5/12 ">
                    <img src={service.image} alt="Consultation" />
                    <h3 className="text-base font-bold">{service.title}</h3>
                    <p className="font-extralight text-stone-300 text-xs">{service.description}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col justify-end items-end gap-[10rem]" >
                {services2.map((service, index) => (
                  <div key={index} className="text-center flex gap-2 justify-center items-center flex-col w-7/12 ">
                    <img src={service.image} alt="Consultation" />
                    <h3 className="text-base font-bold">{service.title}</h3>
                    <p className="font-extralight text-stone-300 text-xs">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>


            <div className="absolute px-4 left-1/2 -translate-x-1/2 top-[60%] -translate-y-1/2 flex flex-col w-fit ">
              <img src={PricingLeft} alt="pricing left" className="w-[9rem] top-[-4rem] left-14 h-auto absolute hover:move-up transition-all duration-100 ease-in-out" />
              <img src={PricingCenter} alt="pricing left" className="w-[18rem] top-[-10rem] left-1/2 -translate-x-1/2 h-auto absolute transition-transform duration-300 ease-in-out hover:transform-y" />
              <img src={PricingRight} alt="pricing left" className="w-[10rem] top-[-4rem] right-[1rem] h-auto absolute hover:move-up transition-all duration-100 ease-in-out" />
              <div
                className="flex flex-col gap-4 z-30 text-start backdrop-blur-lg text-white rounded-[1.5rem] py-8 pb-16 md:px-16 md:my-12 mb-10 md:mx-6 shadow-lg bg-black/40  transform hover:scale-105 transition-transform duration-500 ease-in-out justify-center items-center"
                id="gradientPricingSection"
                style={{ backdropFilter: 'blur(16px) contrast(100%)', WebkitBackdropFilter: 'blur(16px) contrast(100%)' }}
              >

                <div className="flex flex-col justify-center items-center">
                  <h4 className="text-xl font-extrabold mb-2 tracking-wider">$50 - $75</h4>
                  <h4 className="text-xl font-extrabold mb-2 tracking-wider">HAIR AND BEARD</h4>
                </div>
                <p>Men&apos;s  haircut start from $50 and alongside a beard trim may cost up to $75 depending on your chosen barber.</p>
              </div>
            </div>

          </div>
        </section>

        <div className="py-24 md:pb-12" >
          <InstagramSection instagram_images_desktop={instagram_images_desktop} instagram_images_mobile={instagram_images_mobile} />
        </div>
        <section ref={ref}>
          <div className=" w-full flex justify-center  relative" >
            <div className="h-[20rem] w-[1px] bg-[#086600] z-0" />
            <motion.div className="absolute h-[20rem] w-[2px] bg-gradient-to-b from-[#096601] to-[#15ff00] shadow-[0px_0px_70px_2px_#15ff00] origin-top z-10" style={{ scaleY }} />
          </div>
        </section>
        <section className="bg-stone-950  flex my-12  flex-col items-center pt-12 pb-32 w-full">

          <div className="w-full flex justify-center ">
            <h3 className="text-3xl md:text-6xl font-extrabold text-center  text-transparent bg-gradient-to-r from-[#4DFF20]  to-[#88FF7D] bg-clip-text tracking-wider ">FREQUENTLY ASKED <br /> QUESTIONS</h3>
          </div>
          <div className="py-4 px-4 my-12 relative z-20 w-full md:w-2/3 mx-auto">
            <Accordion type="single" collapsible className="flex border pb-12 border-[#05FF00] rounded-[36px] p-12 pt-6 flex-col gap-8 bg-[#101010] shadow-[0px_4px_39px_31px_rgba(0,244,24,0.1)] font-light">
              <AccordionItem value="item-1" className="py-2 px-4 border-b border-white/30 font-light group ease-in-out duration-300">
                <AccordionTrigger className="relative z-10 ">
                  <div className="font-bold text-lg group-hover:translate-x-2 ease-in-out duration-300">Is it accessible?</div>
                </AccordionTrigger>
                <AccordionContent className="text-stone-300 group-hover:translate-x-2 ease-in-out duration-300">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="py-2 px-4 border-b border-white/30 font-light group ease-in-out duration-300">
                <AccordionTrigger className="relative z-10 ">
                  <div className="font-bold text-lg group-hover:translate-x-2 ease-in-out duration-300">Is it accessible?</div>
                </AccordionTrigger>
                <AccordionContent className="text-stone-300 group-hover:translate-x-2 ease-in-out duration-300">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="py-2 px-4 border-b border-white/30 font-light group ease-in-out duration-300">
                <AccordionTrigger className="relative z-10 ">
                  <div className="font-bold text-lg group-hover:translate-x-2 ease-in-out duration-300">Is it accessible?</div>
                </AccordionTrigger>
                <AccordionContent className="text-stone-300 group-hover:translate-x-2 ease-in-out duration-300">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

        </section>


        <section className="flex flex-col mt-12 justify-center items-end relative z-10 bg-stone-950 py-32">
          <img src={BottomCta} alt="botoom Cta" width={500} height={500} className="absolute top-0 left-0 w-full h-full object-cover object-top" />
          <div className="w-full flex flex-col px-4 md:px-0 md:items-center relative z-20 text-center">
            <h3 className="md:text-6xl text-4xl tracking-wider md:leading-[5rem] font-extrabold mb-6">SAVE TIME AND <br /> <span className="text-transparent bg-gradient-to-r from-[#4DFF20]  to-[#88FF7D] bg-clip-text">BOOK NOW</span></h3>
            <div className="flex gap-4 py-4 justify-center md:justify-start ">
              <Button variant={"ghost"} className="bg-gradient-to-r from-[#14FF00]  to-[#999999] rounded-xl px-6 text-stone-50 font-bold uppercase py-1 hover:from-[#999999] hover:to-[#14FF00] hover:scale-105 transition-transform ease-in-out duration-200">
                <Link to="/contact-us">
                  CONTACT US
                </Link>
              </Button>
              <Button variant={"ghost"} className="bg-gradient-to-r from-[#14FF00]  to-[#999999] rounded-xl px-8 text-stone-50 font-bold uppercase py-1 hover:from-[#999999] hover:to-[#14FF00] hover:scale-105 transition-transform ease-in-out duration-200">
                <a href=" https://book.squareup.com/appointments/ud9yhcwfqc1fg0/location/LY7BZ89WAQ2QS/services">
                  BOOK NOW
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
