import Layout from "@/components/web/WebLayout";
import { Helmet } from "react-helmet-async";
import CarauselGallery from "@/components/web/OurWorks";
import CardStack from "@/components/web/CardStack";
import { motion, useScroll, useTransform } from "framer-motion";
import BookNowButton from "@/components/web/BookNowButton";

import { useLocation, useNavigate } from "react-router-dom";

export default function GalleriesPage() {
  localStorage.removeItem("booking_source");

  const location = useLocation();
  const navigate = useNavigate();

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

  const handleBookNow = () => {
    const parts = location.pathname.split("/");
    const bookLink = parts[1] === "meta" ? `/meta/book/services` : "/book/services";
    navigate(bookLink);
  };

  const { scrollYProgress } = useScroll();
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Layout gap="gap-0">
      <Helmet>
        <title>Gallery - Fadelines Barber Shop</title>
        <meta
          name="description"
          content="Fadelines - A premier barber shop offering top-notch haircuts and styles."
        />
        <meta property="og:title" content="Fadelines Barber Shop" />
        <meta
          property="og:description"
          content="Fadelines - A premier barber shop offering top-notch haircuts and styles."
        />
        <meta property="og:img" content="URL to Fadelines' preview img" />
        <meta property="og:url" content="URL to Fadelines' website" />
        <meta name="twitter:card" content="summary_large_img" />
      </Helmet>

      <div className="flex flex-col text-stone-950 bg-white w-full relative pt-28 md:pt-36">
        <section className="container relative z-30 flex flex-col md:flex-row items-center gap-8 md:gap-12 overflow-hidden rounded-[2rem] border border-black/10 bg-[#eaeae7] px-6 py-14 md:px-12 md:py-20 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em]">Faded Lines Gallery</p>
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight flex flex-col gap-2">
              <span>BE OUR NEXT</span>
              <span className="text-transparent bg-black bg-clip-text">
                MASTERPIECE
              </span>
            </h3>
            <BookNowButton
              onClick={handleBookNow}
              className="mt-8 px-12 py-4 md:px-16 md:py-5 text-xl"
            />
          </div>
          <div className="relative w-full md:w-1/2 min-h-[25rem] md:min-h-[34rem]">
            <div className="absolute inset-0 overflow-hidden">
              <div className="w-full h-full flex justify-end md:justify-center items-center rotate-[10deg] md:rotate-[12deg]">
                <CardStack />
              </div>
            </div>
          </div>
        </section>

        <div className="w-full flex justify-center py-10 relative" aria-hidden="true">
          <div className="h-24 w-[1px] bg-black/20 z-0" />
          <motion.div
            className="absolute h-24 w-[2px] bg-black origin-top z-10"
            style={{ scaleY }}
          />
        </div>

        <section className="relative z-20 bg-[#f5f5f3] border-y border-black/10 py-16 md:py-24">
          <section className=" w-full relative flex flex-col items-center text-center  container">
            <div className="w-full px-4 md:px-0 flex flex-col gap-4 ">
              <h3 className="text-2xl md:text-4xl tracking-tight font-extrabold w-full md:w-1/2 mx-auto font-poppins">
                WE’VE DONE ALL
                <br />
                <span className="text-transparent bg-black bg-clip-text">
                  YOU EVER NEED
                </span>
              </h3>
            </div>
          </section>

          <section className="relative z-20 flex flex-col gap-2 py-4 container mx-auto max-w-none px-0">
            <CarauselGallery />
          </section>
        </section>
      </div>
    </Layout>
  );
}
