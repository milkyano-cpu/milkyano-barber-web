import React from "react";
import { Link } from "react-router-dom";

import Logo from "@/assets/web/icons/new-logo.svg";
import Instagram from "@/assets/web/icons/Instagram.svg";
import Tiktok from "@/assets/web/icons/Tiktok.svg";
import Maps from "@/assets/web/icons/Maps.svg";
import GoogleReview from "@/assets/web/icons/GoogleReview.svg";
// import Facebook from "@/assets/web/icons/Facebook.svg";
// import Youtube from "@/assets/web/icons/Youtube.svg";
// import BgHero2 from "@/assets/web/home/hero.svg";
// import { Button } from "../ui/button";
// import { generateLink } from "@/pages/web/Home";

const WebFooter: React.FC = () => {
  return (
    <footer className="flex flex-col">
      {/* Hero Section - Commented out
      <section className="flex flex-col justify-center items-center relative py-60">
        <img
          alt="hero image"
          width={500}
          height={500}
          src={BgHero2}
          className="top-0 absolute w-full h-full object-cover -z-10"
        />
        <div className="top-0 absolute w-full h-full object-cover z-0 bg-gradient-to-b from-white/80 to-white/90" />
        <div className="flex flex-col justify-center items-center text-center gap-6 z-10">
          <div className="flex flex-col mb-6">
            <h2>SAVE TIME AND</h2>
            <h1 className="text-black">BOOK NOW</h1>
          </div>
          <Button className="bg-[#454545] border-[0.5px] border-black text-2xl text-black font-bold px-20 md:px-40 py-7 w-max self-center hover:bg-[#454545]/80">
            {generateLink("BOOK NOW")}
          </Button>
          <img
            src={Logo}
            alt="FadedLines Barbershop Logo"
            className="w-48 md:w-64 h-auto mt-8"
          />
          <h4 className="text-sm md:text-base font-poppins font-medium mt-6 text-black">Visit us on:</h4>
          <div className="flex gap-4 mt-0">
            <a
              href="https://www.instagram.com/fadedlinesbarbershop"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-110"
              style={{
                filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.18)) drop-shadow(0 0 20px rgba(0, 0, 0, 0.12)) drop-shadow(0 0 30px rgba(0, 0, 0, 0.06))'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 15px rgba(0, 0, 0, 0.28)) drop-shadow(0 0 25px rgba(0, 0, 0, 0.18)) drop-shadow(0 0 40px rgba(0, 0, 0, 0.09))';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.18)) drop-shadow(0 0 20px rgba(0, 0, 0, 0.12)) drop-shadow(0 0 30px rgba(0, 0, 0, 0.06))';
              }}
            >
              <img alt="Instagram" src={Instagram} className="w-12 h-auto" />
            </a>
            <a
              href="https://www.tiktok.com/@faded_lines"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-110"
              style={{
                filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.18)) drop-shadow(0 0 20px rgba(0, 0, 0, 0.12)) drop-shadow(0 0 30px rgba(0, 0, 0, 0.06))'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 15px rgba(0, 0, 0, 0.28)) drop-shadow(0 0 25px rgba(0, 0, 0, 0.18)) drop-shadow(0 0 40px rgba(0, 0, 0, 0.09))';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.18)) drop-shadow(0 0 20px rgba(0, 0, 0, 0.12)) drop-shadow(0 0 30px rgba(0, 0, 0, 0.06))';
              }}
            >
              <img alt="TikTok" src={Tiktok} className="w-12 h-auto" />
            </a>
            <a
              href="https://maps.app.goo.gl/tBwhgZUekSLXHF4P6"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-110"
              style={{
                filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.18)) drop-shadow(0 0 20px rgba(0, 0, 0, 0.12)) drop-shadow(0 0 30px rgba(0, 0, 0, 0.06))'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 15px rgba(0, 0, 0, 0.28)) drop-shadow(0 0 25px rgba(0, 0, 0, 0.18)) drop-shadow(0 0 40px rgba(0, 0, 0, 0.09))';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.18)) drop-shadow(0 0 20px rgba(0, 0, 0, 0.12)) drop-shadow(0 0 30px rgba(0, 0, 0, 0.06))';
              }}
            >
              <img alt="Google Maps" src={Maps} className="w-12 h-auto" />
            </a>
            <a
              href="https://shorturl.at/72sRM"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-110"
              style={{
                filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.18)) drop-shadow(0 0 20px rgba(0, 0, 0, 0.12)) drop-shadow(0 0 30px rgba(0, 0, 0, 0.06))'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 15px rgba(0, 0, 0, 0.28)) drop-shadow(0 0 25px rgba(0, 0, 0, 0.18)) drop-shadow(0 0 40px rgba(0, 0, 0, 0.09))';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.18)) drop-shadow(0 0 20px rgba(0, 0, 0, 0.12)) drop-shadow(0 0 30px rgba(0, 0, 0, 0.06))';
              }}
            >
              <img alt="Google Review" src={GoogleReview} className="w-12 h-auto" />
            </a>
          </div>
        </div>
      </section> */}

      <section className="relative z-10">
        <div className="container mx-auto pt-0 pb-4 md:py-12 flex flex-col md:flex-row justify-center relative z-0">
          <div className="flex flex-col pb-12 md:py-0 gap-10">
            <img
              src={Logo}
              alt="barber shop faded lines"
              className="w-[26rem] max-w-[90vw] h-auto"
            />
            <div className="flex flex-col gap-4 relative z-[99999999]">
              <h4 className="text-sm font-poppins font-medium">Visit us on:</h4>
              <ul className="flex gap-4 font-light relative z-40">
                <li>
                  <a
                    href="https://www.instagram.com/fadedlinesbarbershop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all duration-300 hover:scale-110"
                    style={{
                      filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.18)) drop-shadow(0 0 20px rgba(0, 0, 0, 0.12)) drop-shadow(0 0 30px rgba(0, 0, 0, 0.06))'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.filter = 'drop-shadow(0 0 15px rgba(0, 0, 0, 0.28)) drop-shadow(0 0 25px rgba(0, 0, 0, 0.18)) drop-shadow(0 0 40px rgba(0, 0, 0, 0.09))';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.filter = 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.18)) drop-shadow(0 0 20px rgba(0, 0, 0, 0.12)) drop-shadow(0 0 30px rgba(0, 0, 0, 0.06))';
                    }}
                  >
                    <img alt="Instagram" src={Instagram} className="w-12 h-auto" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.tiktok.com/@faded_lines"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all duration-300 hover:scale-110"
                    style={{
                      filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.18)) drop-shadow(0 0 20px rgba(0, 0, 0, 0.12)) drop-shadow(0 0 30px rgba(0, 0, 0, 0.06))'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.filter = 'drop-shadow(0 0 15px rgba(0, 0, 0, 0.28)) drop-shadow(0 0 25px rgba(0, 0, 0, 0.18)) drop-shadow(0 0 40px rgba(0, 0, 0, 0.09))';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.filter = 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.18)) drop-shadow(0 0 20px rgba(0, 0, 0, 0.12)) drop-shadow(0 0 30px rgba(0, 0, 0, 0.06))';
                    }}
                  >
                    <img alt="TikTok" src={Tiktok} className="w-12 h-auto" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://maps.app.goo.gl/tBwhgZUekSLXHF4P6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all duration-300 hover:scale-110"
                    style={{
                      filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.18)) drop-shadow(0 0 20px rgba(0, 0, 0, 0.12)) drop-shadow(0 0 30px rgba(0, 0, 0, 0.06))'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.filter = 'drop-shadow(0 0 15px rgba(0, 0, 0, 0.28)) drop-shadow(0 0 25px rgba(0, 0, 0, 0.18)) drop-shadow(0 0 40px rgba(0, 0, 0, 0.09))';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.filter = 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.18)) drop-shadow(0 0 20px rgba(0, 0, 0, 0.12)) drop-shadow(0 0 30px rgba(0, 0, 0, 0.06))';
                    }}
                  >
                    <img alt="Google Maps" src={Maps} className="w-12 h-auto" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://shorturl.at/72sRM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all duration-300 hover:scale-110"
                    style={{
                      filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.18)) drop-shadow(0 0 20px rgba(0, 0, 0, 0.12)) drop-shadow(0 0 30px rgba(0, 0, 0, 0.06))'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.filter = 'drop-shadow(0 0 15px rgba(0, 0, 0, 0.28)) drop-shadow(0 0 25px rgba(0, 0, 0, 0.18)) drop-shadow(0 0 40px rgba(0, 0, 0, 0.09))';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.filter = 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.18)) drop-shadow(0 0 20px rgba(0, 0, 0, 0.12)) drop-shadow(0 0 30px rgba(0, 0, 0, 0.06))';
                    }}
                  >
                    <img alt="Google Review" src={GoogleReview} className="w-12 h-auto" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 w-full md:w-2/3 mx-auto gap-4 md:gap-0 text-sm mr-6">
            <div className="flex flex-col gap-4 relative z-40">
              <h3 className="text-black">Pages</h3>
              <ul className="flex flex-col font-light gap-2 text-stone-600">
                <li>
                  <Link to="/" className="hover:text-black">
                    HOME
                  </Link>
                </li>
                <li>
                  <Link to="/barbers" className="hover:text-black">
                    BARBERS
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="hover:text-black">
                    GALLERY
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-black">
                    ABOUT US
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="hover:text-black">
                    CAREERS
                  </Link>
                </li>
                <li>
                  <a
                    href=" https://book.squareup.com/appointments/ud9yhcwfqc1fg0/location/LY7BZ89WAQ2QS/services"
                    className="hover:text-black"
                  >
                    CONTACT US
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2">
              <h3 className="text-black mb-4">Address</h3>
              <ul className="flex flex-col font-light gap-2 text-stone-600 mb-10">
                <li>
                  <Link
                    to="https://g.co/kgs/sdqFwMj"
                    target="_blank"
                    className="hover:text-black"
                  >
                    55 PORTMAN ST; OAKLEIGH VIC 3166; AUSTRALIA
                  </Link>
                </li>
              </ul>
              <h3 className="text-black mb-4">Hours</h3>
              <ul className="flex flex-col font-light gap-2 text-stone-600">
                <li>
                  <Link
                    to="https://g.co/kgs/sdqFwMj"
                    target="_blank"
                    className="hover:text-black"
                  >
                    Monday 12 PM – 6 PM
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://g.co/kgs/sdqFwMj"
                    target="_blank"
                    className="hover:text-black"
                  >
                    Tuesday 12 PM – 8 PM
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://g.co/kgs/sdqFwMj"
                    target="_blank"
                    className="hover:text-black"
                  >
                    Wednesday 12 PM – 8 PM
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://g.co/kgs/sdqFwMj"
                    target="_blank"
                    className="hover:text-black"
                  >
                    Thursday 10 AM – 8 PM
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://g.co/kgs/sdqFwMj"
                    target="_blank"
                    className="hover:text-black"
                  >
                    Friday 10 AM – 8 PM
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://g.co/kgs/sdqFwMj"
                    target="_blank"
                    className="hover:text-black"
                  >
                    Saturday 9 AM – 6 PM
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://g.co/kgs/sdqFwMj"
                    target="_blank"
                    className="hover:text-black"
                  >
                    Sunday 10 AM – 3 PM
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default WebFooter;
