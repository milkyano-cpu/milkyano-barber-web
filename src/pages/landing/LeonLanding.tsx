import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Srolled from "@/components/landing/Scrolled";
import LandingLayout from "@/components/landing/LandingLayout";

import cardOne from "@/assets/landing/reviews/cards_one.svg";
import cardTwo from "@/assets/landing/reviews/cards_two.svg";
import cardThree from "@/assets/landing/reviews/cards_three.svg";
import cardFour from "@/assets/landing/reviews/cards_four.svg";

import Top from "@/assets/landing/top_line.svg";
import Mid from "@/assets/landing/mid_line.svg";
import Bottom from "@/assets/landing/bottom_line.svg";

import ParticlesTwo from "@/assets/landing/section_2_particles.svg";

import SwipeGif from "@/assets/landing/arrow_animation.gif";
import SwipedtoSee from "@/assets/landing/swipe_to_see.svg";

import HeroTop from "@/assets/landing/hero_top_line.svg";
import HeroBottom from "@/assets/landing/hero_bottom_line.svg";

import image1 from "@/assets/landing/cuts/josh/blow_out_taper_fade_1.png";
import image2 from "@/assets/landing/cuts/josh/blow_out_taper_fade.png";
import image3 from "@/assets/landing/cuts/josh/burst_fade_1.png";
import image4 from "@/assets/landing/cuts/josh/burst_fade_2.png";
import image5 from "@/assets/landing/cuts/josh/burst_fade.png";
import image6 from "@/assets/landing/cuts/josh/drop_fade.png";
import image7 from "@/assets/landing/cuts/josh/drop_v_burst_fade.png";
import image8 from "@/assets/landing/cuts/josh/high_skin_fade_1.png";
import image9 from "@/assets/landing/cuts/josh/high_skin_fade.png";
import image10 from "@/assets/landing/cuts/josh/high_v_drop_fade.png";
import image11 from "@/assets/landing/cuts/josh/mid_burst_fade.png";
import image12 from "@/assets/landing/cuts/josh/mid_to_high_burst_fade.png";
import image13 from "@/assets/landing/cuts/josh/taper_fade.png";
import image14 from "@/assets/landing/cuts/josh/textured_burst_fade_1.png";
import image15 from "@/assets/landing/cuts/josh/textured_burst_fade.png";
import image16 from "@/assets/landing/cuts/josh/textured_crop_skin_fade.png";
import image17 from "@/assets/landing/cuts/josh/v_mid_drop_fade.png";
import useUtmTracking from "@/hooks/utmTrackingHook";

const cutsImages = [
  { src: image1, name: "Blow Out Taper Fade 1" },
  { src: image2, name: "Blow Out Taper Fade" },
  { src: image3, name: "Burst Fade 1" },
  { src: image4, name: "Burst Fade 2" },
  { src: image5, name: "Burst Fade" },
  { src: image6, name: "Drop Fade" },
  { src: image7, name: "Drop V Burst Fade" },
  { src: image8, name: "High Skin Fade 1" },
  { src: image9, name: "High Skin Fade" },
  { src: image10, name: "High V Drop Fade" },
  { src: image11, name: "Mid Burst Fade" },
  { src: image12, name: "Mid to High Burst Fade" },
  { src: image13, name: "Taper Fade" },
  { src: image14, name: "Textured Burst Fade 1" },
  { src: image15, name: "Textured Burst Fade" },
  { src: image16, name: "Textured Crop Skin Fade" },
  { src: image17, name: "V Mid Drop Fade" },
];

const imagesReviews = [cardFour, cardOne, cardTwo, cardThree];

export default function LeonLanding() {
  useUtmTracking();
  const location = useLocation();

  const generateLink = (text: string): JSX.Element => {
    const customize: boolean = true;
    const squareLink: string =
      "https://book.squareup.com/appointments/ud9yhcwfqc1fg0/location/LY7BZ89WAQ2QS/services";
    const bookLink: string = `${location.pathname}/book/services`;

    if (customize) {
      return <Link to={bookLink}>{text}</Link>;
    } else {
      return <a href={squareLink}>{text}</a>;
    }
  };

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
        @keyframes move {
            0% { transform: translateX(100%); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateX(-100%); opacity: 0; }
        }`;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const description =
    "Precision cuts, clean fades, and a sharp finish every time. Book with Leon and walk out looking your best.";

  return (
    <LandingLayout>
      <Helmet>
        <title>Leon Fadelines BEST BARBER/HAIRDRESSER IN MELBOURNE</title>
        <meta
          name="description"
          content={`Leon Fadelines BEST BARBER IN MELBOURNE - ${description}`}
        />
        <meta
          property="og:title"
          content="Leon Fadelines BEST BARBER IN MELBOURNE"
        />
        <meta
          property="og:description"
          content={`Leon Fadelines BEST BARBER IN MELBOURNE - ${description}`}
        />
        <meta property="og:image" content="URL to Fadelines' preview image" />
        <meta property="og:url" content="URL to Fadelines' website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="flex flex-col bg-stone-950 w-full h-full relative">
        <img
          src={Top}
          alt="Vector Top"
          width={500}
          height={500}
          className="absolute top-[60rem] md:top-[30rem] z-10 left-0 w-full h-auto"
        />
        <img
          src={Mid}
          alt="Vector Mid"
          width={500}
          height={500}
          className="absolute bottom-[85rem] z-0 left-0 w-full h-auto"
        />
        <img
          src={Bottom}
          alt="Vector Bottom"
          width={500}
          height={500}
          className="absolute bottom-0 z-0 left-0 w-[40vw] h-auto"
        />

        <section className="relative w-full h-[35rem] md:h-[35rem]">
          <div className="max-w-screen-lg mx-auto md:mx-0 md:ml-8 lg:ml-16 w-full">
            <div
              className="relative z-30 backdrop-blur-lg text-white rounded-3xl py-12 px-12 my-12 mb-10 mx-6 md:ml-12 md:mr-auto border border-stone-50 md:w-1/2"
              style={{
                backdropFilter: "blur(16px) contrast(100%)",
                WebkitBackdropFilter: "blur(16px) contrast(100%)",
              }}
            >
              <h2 className="text-4xl md:text-5xl uppercase font-poppins font-extrabold mb-2 text-[#42FF00] tracking-wider">
                Hi, I&apos;m Leon
              </h2>
              <h2 className="text-xl font-bold mb-4">
                BEST BARBER/HAIRDRESSER IN MELBOURNE
              </h2>
              <p className="text-lg mb-8">{description}</p>
              <div className="bg-black"></div>
            </div>
            <div className="px-6 md:pl-12 text-stone-50 flex flex-col md:flex-row gap-4 uppercase relative z-30">
              <Button
                variant={"ghost"}
                className="relative z-20 backdrop-blur-lg bg-transparent text-xl rounded-full border border-stone-50 px-12 py-6 hover:bg-white/10"
                style={{
                  backdropFilter: "blur(16px) contrast(100%)",
                  WebkitBackdropFilter: "blur(16px) contrast(100%)",
                }}
              >
                {generateLink("BOOK NOW")}
              </Button>
            </div>
          </div>
          <img
            src={HeroTop}
            width={500}
            height={500}
            alt="Hero img"
            className="absolute z-20 w-screen md:w-auto md:h-full object-fill top-0"
          />
          <img
            src={HeroBottom}
            width={500}
            height={500}
            alt="Hero Bottom"
            className="absolute z-20 w-auto h-full object-fill bottom-[-23rem] md:bottom-[-20rem]"
            fetchPriority="high"
          />
        </section>

        <section className="flex relative flex-col z-20 justify-center items-center container w-full text-stone-50 uppercase py-32 pt-40 pb-20">
          <div className="hidden xl:flex absolute bottom-1/3 pb-32 left-32 h-auto">
            <img
              alt="swipe to see"
              src={SwipedtoSee}
              width={500}
              height={500}
              className="w-[15rem] h-auto"
            />
            <img
              alt="swipe to see"
              src={SwipeGif}
              width={500}
              height={500}
              className="w-[15rem] h-auto py-4 flex justify-end absolute bottom-[-0rem] right-0"
            />
          </div>
          <div className="relative z-10 flex flex-col gap-12 justify-center items-center overflow-hidden">
            <Srolled cutsImages={cutsImages} />
          </div>
          <img
            src={ParticlesTwo}
            width={500}
            height={500}
            alt="Your img"
            className="absolute z-0 w-auto h-full object-fill bottom-[0]"
          />
        </section>

        <section className="container relative z-10 text-stone-50 pt-0 py-12">
          <div className="relative z-10">
            <h3 className="text-4xl md:text-6xl font-poppins font-extrabold text-center py-2 uppercase text-transparent bg-gradient-to-r from-[#19F456] via-[#44D140] to-[#A1FF80] bg-clip-text">
              What Our Clients Say
            </h3>
            <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-4">
              {imagesReviews.map((review, index) => (
                <img
                  key={index}
                  src={review}
                  alt={`Review ${index + 1}`}
                  className="w-full h-auto rounded-xl"
                />
              ))}
            </div>
            <div className="flex gap-10 justify-center items-center flex-col w-full">
              <Button
                variant={"ghost"}
                className="border border-[#00FF1A] rounded-full font-extrabold font-poppins px-12 py-10 uppercase text-xl md:text-3xl transform hover:scale-110 transition-transform duration-200 ease-in-out hover:bg-[#24FF00] hover:shadow-md hover:text-stone-950 hover:shadow-[#44813a]"
              >
                {generateLink("BOOK NOW")}
              </Button>
            </div>
          </div>
        </section>
      </div>
    </LandingLayout>
  );
}
