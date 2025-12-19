import Layout from "@/components/web/WebLayout";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

import BgHero2 from "@/assets/web/home/hero.svg";
import Logo from "@/assets/web/icons/logo.svg";
import Instagram from "@/assets/web/icons/Instagram.svg";
import Tiktok from "@/assets/web/icons/Tiktok.svg";
import Maps from "@/assets/web/icons/Maps.svg";
import GoogleReview from "@/assets/web/icons/GoogleReview.svg";

import instagramPhotosDesktop1 from "/src/assets/follow-us/desktop/instagram_photo_1.png";
import instagramPhotosDesktop2 from "/src/assets/follow-us/desktop/instagram_photo_2.png";
import instagramPhotosDesktop3 from "/src/assets/follow-us/desktop/instagram_photo_3.png";
import instagramPhotosDesktop4 from "/src/assets/follow-us/desktop/instagram_photo_4.png";
import instagramPhotosDesktop5 from "/src/assets/follow-us/desktop/instagram_photo_5.png";

import instagramPhotosMobile1 from "/src/assets/follow-us/mobile/instagram_photo_1.png";
import instagramPhotosMobile2 from "/src/assets/follow-us/mobile/instagram_photo_2.png";
import instagramPhotosMobile3 from "/src/assets/follow-us/mobile/instagram_photo_3.png";
import instagramPhotosMobile4 from "/src/assets/follow-us/mobile/instagram_photo_4.png";
import instagramPhotosMobile5 from "/src/assets/follow-us/mobile/instagram_photo_5.png";

import InstagramSection from "@/components/web/InstagramSection";
import { Link, useLocation } from "react-router-dom";

export const generateLink = (text: string): JSX.Element => {
  const customize: boolean = true;
  const squareLink: string =
    "https://book.squareup.com/appointments/ud9yhcwfqc1fg0/location/LY7BZ89WAQ2QS/services";

  let bookLink: string;
  const parts = location.pathname.split("/");
  if (parts[1] === "meta") {
    bookLink = `/meta/book/services`;
  } else {
    bookLink = "/book/services";
  }

  if (customize) {
    return <Link to={bookLink}>{text}</Link>;
  } else {
    return <a href={squareLink}>{text}</a>;
  }
};

export default function Home() {
  localStorage.removeItem("booking_source");

  const location = useLocation();

  const getQueryParams = (search: string) => {
    return new URLSearchParams(search);
  };

  const queryParams = getQueryParams(location.search);
  const fbclid = queryParams.get("fbclid");
  const ttclid = queryParams.get("ttclid");
  const gclid = queryParams.get("gclid");

  const trackingData = {
    utm_source: queryParams.get("utm_source"),
    utm_medium: queryParams.get("utm_medium"),
    utm_campaign: queryParams.get("utm_campaign"),
    utm_content: queryParams.get("utm_content"),
    fbclid: queryParams.get("fbclid"),
  };

  localStorage.setItem("booking_source", JSON.stringify(trackingData));

  if (trackingData.fbclid && trackingData.utm_source) {
    localStorage.setItem("customer_source", JSON.stringify(trackingData));
  }

  localStorage.setItem("utm_source", queryParams.get("utm_source") || "None");
  localStorage.setItem("utm_medium", queryParams.get("utm_medium") || "None");
  localStorage.setItem(
    "utm_campaign",
    queryParams.get("utm_campaign") || "None",
  );
  localStorage.setItem("utm_content", queryParams.get("utm_content") || "None");

  if (fbclid) {
    localStorage.setItem("booking_origin", "facebook");
  } else if (ttclid) {
    localStorage.setItem("booking_origin", "tiktok");
  } else if (gclid) {
    localStorage.setItem("booking_origin", "google");
  } else {
    localStorage.setItem("booking_origin", "organic");
  }

  // const generateRoute = (route: string): string => {
  //   const parts = location.pathname.split("/");
  //   if (parts[1] === "meta") {
  //     return `/meta${route}`;
  //   } else {
  //     return route;
  //   }
  // };

  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  // });
  // const scaleY = useTransform(scrollYProgress, [0, 1], [1, 0]);
  // const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  // const [headerHeight, setHeaderHeight] = useState(0);

  const instagram_images_desktop = [
    { image: instagramPhotosDesktop1, name: "Mid Burst Fade" },
    { image: instagramPhotosDesktop2, name: "Mid Drop Fade" },
    { image: instagramPhotosDesktop3, name: "Mid Taper" },
    { image: instagramPhotosDesktop4, name: "V Low Drop Fade" },
    { image: instagramPhotosDesktop5, name: "" },
  ];

  const instagram_images_mobile = [
    instagramPhotosMobile1,
    instagramPhotosMobile2,
    instagramPhotosMobile3,
    instagramPhotosMobile4,
    instagramPhotosMobile5,
  ];

  // useEffect(() => {
  //   const style = document.createElement("style");

  //   style.innerHTML = `
  //       @keyframes move {
  //           0% { transform: translateX(100%); opacity: 0; }
  //           50% { opacity: 1; }
  //           100% { transform: translateX(-100%); opacity: 0; }
  //       }`;

  //   document.head.appendChild(style);

  //   const handleResize = () => {
  //     setScreenHeight(window.innerHeight);
  //     const header = document.querySelector("header");
  //     if (header) {
  //       // setHeaderHeight(header.clientHeight);
  //     }
  //   };

  //   handleResize();

  //   window.addEventListener("resize", handleResize);
  //   console.log("screenHeight", screenHeight);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //     document.head.removeChild(style);
  //   };
  // }, [screenHeight]);

  // const availableHeight = screenHeight - headerHeight - 1;

  return (
    <Layout>
      <Helmet>
        <title>Home - Fadelines Barber Shop</title>
        <meta
          name="description"
          content="Fadelines - A premier barber shop offering top-notch haircuts and styles."
        />
        <meta property="og:title" content="Fadelines Barber Shop" />
        <meta
          property="og:description"
          content="Fadelines - A premier barber shop offering top-notch haircuts and styles."
        />
        <meta property="og:image" content="URL to Fadelines' preview image" />
        <meta property="og:url" content="URL to Fadelines' website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <section className="flex flex-col justify-center items-center relative pt-60 md:pt-40">
        <img
          alt="hero image"
          width={500}
          height={500}
          src={BgHero2}
          className="top-0 absolute w-full h-full object-cover -z-10"
        />
        <div className="top-0 absolute w-full h-full object-cover z-0 bg-gradient-to-b from-black/80 to-black" />
        <div className="flex flex-col justify-center items-center text-center gap-6 z-10">
          <div className="flex flex-col">
            <img
              src={Logo}
              alt="Fadedlines Barber Shop"
              className="w-[20rem] md:w-[25rem] h-auto"
            />
          </div>
          <Button className="bg-[#454545] border-[0.5px] border-white text-2xl text-[#33FF00] font-bold px-16 py-7 w-max self-center hover:bg-[#454545]/80">
            {generateLink("BOOK NOW")}
          </Button>

          <div className="flex gap-4 mt-4">
            <a
              href="https://www.instagram.com/fadedlinesbarbershop"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-40 hover:opacity-100 transition-opacity"
            >
              <img alt="Instagram" src={Instagram} className="w-12 h-auto" />
            </a>
            <a
              href="https://www.tiktok.com/@faded_lines"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-40 hover:opacity-100 transition-opacity"
            >
              <img alt="TikTok" src={Tiktok} className="w-12 h-auto" />
            </a>
            <a
              href="https://maps.app.goo.gl/tBwhgZUekSLXHF4P6"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-40 hover:opacity-100 transition-opacity"
            >
              <img alt="Google Maps" src={Maps} className="w-12 h-auto" />
            </a>
            <a
              href="https://shorturl.at/72sRM"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-40 hover:opacity-100 transition-opacity"
            >
              <img alt="Google Review" src={GoogleReview} className="w-12 h-auto" />
            </a>
          </div>

          <svg
            className="w-7 mt-20"
            viewBox="0 0 55 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50.582 0.216618L54.9987 4.63745L30.9279 28.7166C30.5422 29.1048 30.0835 29.4128 29.5783 29.623C29.0731 29.8332 28.5313 29.9414 27.9841 29.9414C27.4369 29.9414 26.8951 29.8332 26.3899 29.623C25.8847 29.4128 25.4261 29.1048 25.0404 28.7166L0.957032 4.63745L5.3737 0.220782L27.9779 22.8208L50.582 0.216618Z"
              fill="#33FF00"
            />
          </svg>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center px-6">
        <h2 className="text-[#33FF00] text-center">AFRAID OF THE RESULTS?</h2>
        <p className="text-2xl md:text-3xl font-bold text-center">See Them for Yourself!</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 w-full max-w-6xl">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} className="relative rounded-xl overflow-hidden bg-[#262626] aspect-[9/16]">
              <video
                className="w-full h-full object-cover"
                controls
                preload="metadata"
              >
                <source
                  src={`https://s3.milkyano.com/milkyano/fadedlines-oakleigh/home-video/home-video-${num}.mp4`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>

        <Button className="bg-[#454545] border-[0.5px] border-white text-2xl text-[#33FF00] font-bold px-16 py-7 w-max mt-10 hover:bg-[#454545]/80">
          {generateLink("BOOK NOW")}
        </Button>
      </section>

      <section className="flex flex-col justify-center items-center">
        <h2 className="text-[#33FF00]">GALLERY</h2>
        <p>Our Results</p>

        <InstagramSection
          instagram_images_desktop={instagram_images_desktop}
          instagram_images_mobile={instagram_images_mobile}
        />
      </section>
    </Layout>
  );
}
