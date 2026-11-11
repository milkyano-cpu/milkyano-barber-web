import Layout from "@/components/web/WebLayout";
// import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef, useCallback } from "react";
import { getAllBarber, getAllService } from "@/utils/barberApi";
import { BarberResponse, ServicesResponse, ServicesItem } from "@/interfaces/BookingInterface";
import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import BookNowButton from "@/components/web/BookNowButton";
import BgHero2 from "@/assets/web/home/hero.svg";
import Logo from "@/assets/web/icons/new-logo.svg";
import Instagram from "@/assets/web/icons/Instagram.svg";
import Tiktok from "@/assets/web/icons/Tiktok.svg";
import Maps from "@/assets/web/icons/Maps.svg";
import GoogleReview from "@/assets/web/icons/GoogleReview.svg";
import Phone from "@/assets/web/icons/Phone.svg";
import useEmblaCarousel from "embla-carousel-react";

// Preview images (for large preview)
import Dejan from "@/assets/web/barbers/dejan.webp";
import Amir from "@/assets/web/barbers/amir.webp";
import Rayhan from "@/assets/web/barbers/rayhan.webp";
import Jay from "@/assets/web/barbers/jay.webp";
import Emman from "@/assets/web/barbers/emman.webp";
import Niko from "@/assets/web/barbers/niko.webp";
import Noah from "@/assets/web/barbers/noah.webp";
import Can from "@/assets/web/barbers/can.webp";
import Leon from "@/assets/web/barbers/leon.webp";
import Enis from "@/assets/web/barbers/enis.webp";
import Kosta from "@/assets/web/barbers/kosta.webp";
import Stevan from "@/assets/web/barbers/stevan.webp";

// Gallery images (for grid thumbnails)
import DejanGallery from "@/assets/web/barbers/barbers-gallery/dejan.webp";
import AmirGallery from "@/assets/web/barbers/barbers-gallery/amir.webp";
import RayhanGallery from "@/assets/web/barbers/barbers-gallery/rayhan.webp";
import JayGallery from "@/assets/web/barbers/barbers-gallery/jay.webp";
import EmmanGallery from "@/assets/web/barbers/barbers-gallery/emman.webp";
import NikoGallery from "@/assets/web/barbers/barbers-gallery/niko.webp";
import NoahGallery from "@/assets/web/barbers/barbers-gallery/noah.webp";
import CanGallery from "@/assets/web/barbers/barbers-gallery/can.webp";
import LeonGallery from "@/assets/web/barbers/barbers-gallery/leon.webp";
import EnisGallery from "@/assets/web/barbers/barbers-gallery/enis.webp";
import KostaGallery from "@/assets/web/barbers/barbers-gallery/kosta.webp";
import StevanGallery from "@/assets/web/barbers/barbers-gallery/stevan.webp";

// CTA Button SVGs - Barber-specific
import AmirCTA from "@/assets/web/barbers/cta-button/amir.svg";
import AmirCTAHover from "@/assets/web/barbers/cta-button/amir-hover.svg";
import CanCTA from "@/assets/web/barbers/cta-button/can.svg";
import CanCTAHover from "@/assets/web/barbers/cta-button/can-hover.svg";
import RayhanCTA from "@/assets/web/barbers/cta-button/rayhan.svg";
import RayhanCTAHover from "@/assets/web/barbers/cta-button/rayhan-hover.svg";
import NoahCTA from "@/assets/web/barbers/cta-button/noah.svg";
import NoahCTAHover from "@/assets/web/barbers/cta-button/noah-hover.svg";
import JayCTA from "@/assets/web/barbers/cta-button/jay.svg";
import JayCTAHover from "@/assets/web/barbers/cta-button/jay-hover.svg";
import EmmanCTA from "@/assets/web/barbers/cta-button/emman.svg";
import EmmanCTAHover from "@/assets/web/barbers/cta-button/emman-hover.svg";
import NikoCTA from "@/assets/web/barbers/cta-button/niko.svg";
import NikoCTAHover from "@/assets/web/barbers/cta-button/niko-hover.svg";

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

  // Gallery state management
  const [selectedBarber, setSelectedBarber] = useState(0);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [barberMinPrices, setBarberMinPrices] = useState<Record<string, number>>({});
  const previewImageRef = useRef<HTMLDivElement>(null);
  const bookNowButtonRef = useRef<HTMLDivElement>(null);

  // Embla Carousel setup with infinite loop
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    containScroll: false,
  });

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

  const generateRoute = (route: string): string => {
    const parts = location.pathname.split("/");
    if (parts[1] === "meta") {
      return `/meta${route}`;
    } else {
      return route;
    }
  };

  // const generateLink = (text: string): JSX.Element => {
  //   const customize: boolean = true;
  //   const squareLink: string =
  //     "https://book.squareup.com/appointments/ud9yhcwfqc1fg0/location/LY7BZ89WAQ2QS/services";

  //   let bookLink: string;
  //   const parts = location.pathname.split("/");
  //   if (parts[1] === "meta") {
  //     bookLink = `/meta/book/services`;
  //   } else {
  //     bookLink = "/book/services";
  //   }

  //   if (customize) {
  //     return <Link to={bookLink}>{text}</Link>;
  //   } else {
  //     return <a href={squareLink}>{text}</a>;
  //   }
  // };

  // const generateLink = () => {
  //   const squareLink: string =
  //     "https://book.squareup.com/appointments/ud9yhcwfqc1fg0/location/LY7BZ89WAQ2QS/services";

  //   let bookLink: string;
  //   const parts = location.pathname.split("/");
  //   if (parts[1] === "meta") {
  //     bookLink = `/meta/book/services`;
  //   } else {
  //     bookLink = "/book/services";
  //   }

  //   const customize: boolean = true;
  //   if (customize) {
  //     return bookLink;
  //   } else {
  //     return squareLink;
  //   }
  // };

  const barberSvgs = [
    {
      svg: Dejan,
      thumbnail: DejanGallery,
      link: generateRoute("/dejan"),
      landing: true,
      slug: "dejan",
    },
    {
      svg: Stevan,
      thumbnail: StevanGallery,
      link: generateRoute("/stevan"),
      landing: false,
      slug: "stevan",
    },
    {
      svg: Noah,
      thumbnail: NoahGallery,
      link: generateRoute("/noah"),
      landing: true,
      slug: "noah",
    },
    {
      svg: Can,
      thumbnail: CanGallery,
      link: generateRoute("/can"),
      landing: true,
      slug: "can",
    },
    {
      svg: Rayhan,
      thumbnail: RayhanGallery,
      link: generateRoute("/rayhan"),
      landing: true,
      slug: "rayhan",
    },
    {
      svg: Jay,
      thumbnail: JayGallery,
      link: generateRoute("/jay"),
      landing: true,
      slug: "jay",
    },
    {
      svg: Amir,
      thumbnail: AmirGallery,
      link: generateRoute("/amir"),
      landing: true,
      slug: "amir",
    },
    {
      svg: Emman,
      thumbnail: EmmanGallery,
      link: generateRoute("/emman"),
      landing: true,
      slug: "emman",
    },
    {
      svg: Niko,
      thumbnail: NikoGallery,
      link: generateRoute("/niko"),
      landing: true,
      slug: "niko",
    },
    {
      svg: Leon,
      thumbnail: LeonGallery,
      link: generateRoute("/leon"),
      landing: true,
      slug: "leon",
    },
    {
      svg: Enis,
      thumbnail: EnisGallery,
      link: generateRoute("/enis"),
      landing: false,
      slug: "enis",
    },
    {
      svg: Kosta,
      thumbnail: KostaGallery,
      link: generateRoute("/kosta"),
      landing: false,
      slug: "kosta",
    },
  ];

  // CTA Button mapping for each barber, keyed by slug.
  // Barbers without an entry fall back to the generic BookNowButton.
  const barberCTAButtons: Record<string, { normal: string; hover: string }> = {
    noah: { normal: NoahCTA, hover: NoahCTAHover },
    can: { normal: CanCTA, hover: CanCTAHover },
    rayhan: { normal: RayhanCTA, hover: RayhanCTAHover },
    jay: { normal: JayCTA, hover: JayCTAHover },
    amir: { normal: AmirCTA, hover: AmirCTAHover },
    emman: { normal: EmmanCTA, hover: EmmanCTAHover },
    niko: { normal: NikoCTA, hover: NikoCTAHover },
  };

  // Transform barberSvgs into gallery-friendly format
  const galleryBarbers = barberSvgs.map((barber, index) => ({
    image: barber.svg, // For preview/placeholder
    thumbnail: barber.thumbnail, // For grid thumbnails
    name: barber.link.split('/').pop()?.toUpperCase() || `BARBER ${index + 1}`,
    link: barber.link,
    landing: barber.landing,
    slug: barber.slug,
  }));

  // Embla: Sync selected slide with state
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedBarber(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on('select', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    const barberAliases: Record<string, string[]> = {
      dejan: ["DEJAN"],
      noah: ["NOAH"],
      can: ["CAN"],
      rayhan: ["RAYHAN"],
      jay: ["JAY"],
      amir: ["AMIR"],
      emman: ["EMMAN"],
      niko: ["NIKO"],
      leon: ["LEON"],
      enis: ["ENIS"],
      kosta: ["KOSTA"],
      stevan: ["STEVAN"],
    };

    const fetchPrices = async () => {
      try {
        const [fetchedBarbers, fetchedServices]: [BarberResponse, ServicesResponse] = await Promise.all([
          getAllBarber(),
          getAllService("all", "O"),
        ]);

        const prices: Record<string, number> = {};

        for (const [slug, aliases] of Object.entries(barberAliases)) {
          const barberProfile = fetchedBarbers?.team_member_booking_profiles?.find((p) =>
            aliases.some((a) => p.display_name.toUpperCase().includes(a))
          );

          if (!barberProfile) continue;

          const services: ServicesItem[] = fetchedServices?.objects?.filter((service) => {
            const serviceName = service.item_data.name.toUpperCase();
            const nameMatch = aliases.some((a) => serviceName.includes(`BY ${a}`));
            const idMatch = service.item_data.variations.some((v) =>
              v.item_variation_data.team_member_ids?.includes(barberProfile.team_member_id)
            );
            return nameMatch && idMatch;
          }) ?? [];

          const servicePrices = services
            .map((s) => s.item_data.variations[0].item_variation_data.price_money.amount)
            .filter((p) => p > 0);

          if (servicePrices.length > 0) {
            prices[slug] = Math.min(...servicePrices) / 100;
          }
        }

        setBarberMinPrices(prices);
      } catch {
        // silently fail — badge just won't show
      }
    };

    fetchPrices();
  }, []);

  // Handler for hero Book Now button - scroll to gallery Book Now
  const handleHeroBookNowClick = () => {
    if (bookNowButtonRef.current) {
      const isMobile = window.innerWidth < 768;
      const yOffset = isMobile ? -550 : -700;
      const y = bookNowButtonRef.current.getBoundingClientRect().top +
                window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Interaction handlers for gallery
  const handleThumbnailClick = (index: number, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    // Use Embla to scroll to the selected index
    if (emblaApi) {
      emblaApi.scrollTo(index);
    }

    // Smooth scroll to preview with offset
    setTimeout(() => {
      if (previewImageRef.current) {
        // Responsive offset: mobile vs desktop
        const isMobile = window.innerWidth < 768; // Tailwind 'md' breakpoint
        const yOffset = isMobile ? -220 : -150; // Mobile needs more offset
        const y = previewImageRef.current.getBoundingClientRect().top +
                  window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 50);
  };

  const handleNameClick = (index: number) => {
    // Use Embla to scroll to the selected index
    if (emblaApi) {
      emblaApi.scrollTo(index);
    }

    // Scroll to preview
    setTimeout(() => {
      if (previewImageRef.current) {
        // Responsive offset: mobile vs desktop
        const isMobile = window.innerWidth < 768; // Tailwind 'md' breakpoint
        const yOffset = isMobile ? -220 : -150; // Mobile needs more offset
        const y = previewImageRef.current.getBoundingClientRect().top +
                  window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 50);
  };

  useEffect(() => {
    // Create a new style element
    const style = document.createElement("style");

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

  return (
    <Layout gap="gap-0">
      <Helmet>
        <title>Barbers - Fadelines Barber Shop</title>
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

      <section className="flex min-h-[620px] md:min-h-[760px] flex-col justify-center items-center relative overflow-hidden pt-28 pb-20 md:pt-40 md:pb-28">
        <img
          alt="hero image"
          width={500}
          height={500}
          src={BgHero2}
          className="top-0 absolute w-full h-full object-cover -z-10 scale-[1.02] blur-[2px]"
        />
        <div className="top-0 absolute w-full h-full object-cover z-0 bg-gradient-to-b from-white/25 via-white/55 to-[#f5f5f3]" />
        <div className="flex flex-col justify-center items-center text-center gap-6 z-10">
          <div className="flex flex-col">
            <img
              src={Logo}
              alt="Fadedlines Barber Shop"
              className="w-[20rem] md:w-[25rem] h-auto"
            />
          </div>
          <BookNowButton onClick={handleHeroBookNowClick} className="px-14 md:px-16 py-4 md:py-5" />

          <div className="flex gap-4 mt-4">
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
            <a
              href="tel:0390021055"
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
              <img alt="Phone" src={Phone} className="w-12 h-auto" />
            </a>
          </div>

          <svg
            className="w-7 mt-8 md:mt-12"
            viewBox="0 0 55 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50.582 0.216618L54.9987 4.63745L30.9279 28.7166C30.5422 29.1048 30.0835 29.4128 29.5783 29.623C29.0731 29.8332 28.5313 29.9414 27.9841 29.9414C27.4369 29.9414 26.8951 29.8332 26.3899 29.623C25.8847 29.4128 25.4261 29.1048 25.0404 28.7166L0.957032 4.63745L5.3737 0.220782L27.9779 22.8208L50.582 0.216618Z"
              fill="#111111"
            />
          </svg>
        </div>
      </section>

      <section className="relative z-20 w-full flex flex-col justify-center md:max-w-screen-xl mx-auto my-0 md:my-14 py-10 md:py-16 bg-[#eaeae7] border-y md:border border-black/15 md:rounded-[2.5rem] shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
        <div className="container mx-auto px-4 md:px-8">

          <div className="mb-8 md:mb-12 text-center text-black">
            <p className="text-xs md:text-sm font-bold tracking-[0.35em] uppercase">Faded Lines</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-black tracking-tight">OUR BARBERS</h2>
            <div className="w-16 h-1 bg-black mx-auto mt-5" />
          </div>

          {/* BARBER NAME CAROUSEL HEADER */}
          <div
            ref={emblaRef}
            className="relative overflow-hidden mb-6 md:mb-8 pt-2 pb-[5px]"
          >
            <div className="flex items-center">
              {galleryBarbers.map((barber, index) => {
                return (
                  <div
                    key={index}
                    className="flex-[0_0_auto] min-w-0 px-2 md:px-4"
                  >
                    <button
                      onClick={() => handleNameClick(index)}
                      className={`relative flex flex-col items-center gap-1 md:gap-2 px-3 md:px-6 py-1 transition-all duration-500 cursor-pointer ${
                        selectedBarber === index
                          ? "text-black"
                          : "text-stone-500"
                      }`}
                    >
                  {/* Thumbnail Image */}
                  <div className={`w-20 h-20 md:w-32 md:h-32 rounded-md overflow-hidden ${
                    selectedBarber === index
                      ? "ring-2 ring-black"
                      : ""
                  }`}>
                    <img
                      src={barber.thumbnail}
                      alt={barber.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Barber Name with underline wrapper */}
                  <div className="relative pb-0">
                    <span className="text-lg md:text-4xl font-bold font-poppins whitespace-nowrap">
                      {barber.name}
                    </span>

                    {/* Black underline for the active barber */}
                    {selectedBarber === index && (
                      <div className="absolute bottom-[-8px] md:bottom-[-10px] left-0 right-0 h-[2px] md:h-[4px] bg-black"></div>
                    )}
                  </div>

                  {/* Subtle dark spotlight behind the active barber */}
                  {selectedBarber === index && (
                    <>
                      {/* Main spotlight layer - narrower and positioned below */}
                      <div className="absolute inset-0 -z-10 pointer-events-none" style={{ overflow: 'visible' }}>
                        <div
                          className="absolute left-1/2 -translate-x-1/2"
                          style={{
                            width: '180%',
                            height: '250%',
                            bottom: '-15%',
                            background: "radial-gradient(ellipse 80% 55% at 50% 100%, rgba(0, 0, 0,0.20) 0%, rgba(0, 0, 0,0.12) 15%, rgba(0, 0, 0,0.07) 30%, rgba(0, 0, 0,0.03) 50%, rgba(0, 0, 0,0) 75%)",
                            filter: "blur(18px)",
                          }}
                        />
                      </div>
                      {/* Secondary glow layer - even narrower */}
                      <div className="absolute inset-0 -z-10 pointer-events-none" style={{ overflow: 'visible' }}>
                        <div
                          className="absolute left-1/2 -translate-x-1/2"
                          style={{
                            width: '140%',
                            height: '200%',
                            bottom: '-10%',
                            background: "radial-gradient(ellipse 70% 45% at 50% 100%, rgba(0, 0, 0,0.18) 0%, rgba(0, 0, 0,0.10) 25%, rgba(0, 0, 0,0.05) 45%, rgba(0, 0, 0,0) 70%)",
                            filter: "blur(10px)",
                          }}
                        />
                      </div>
                    </>
                  )}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* MAIN PREVIEW IMAGE */}
          <div
            ref={previewImageRef}
            className="relative w-full max-w-[260px] md:max-w-sm mx-auto mb-4 md:mb-8 overflow-hidden rounded-xl border border-black/20 shadow-[0_18px_45px_rgba(0,0,0,0.18)] aspect-[0.7]"
          >
            <img
              key={selectedBarber}
              src={galleryBarbers[selectedBarber].image}
              alt={galleryBarbers[selectedBarber].name}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Black divider line with booking button */}
          <div ref={bookNowButtonRef} className="w-full max-w-screen-md mx-auto mb-4 md:mb-6 flex items-center justify-center gap-2 md:gap-4">
            <div className="h-[2px] flex-1 bg-black" aria-hidden="true" />
            <Link className="flex shrink-0 items-center justify-center" to={`${generateRoute(`/${galleryBarbers[selectedBarber].slug}/book/services`)}`}>
              {barberCTAButtons[galleryBarbers[selectedBarber].slug] ? (
                <img
                  src={isButtonHovered ? barberCTAButtons[galleryBarbers[selectedBarber].slug].hover : barberCTAButtons[galleryBarbers[selectedBarber].slug].normal}
                  alt={`Book With ${galleryBarbers[selectedBarber].name}`}
                  className="w-auto cursor-pointer h-[90px] md:h-[130px]"
                  onMouseEnter={() => setIsButtonHovered(true)}
                  onMouseLeave={() => setIsButtonHovered(false)}
                />
              ) : (
                <BookNowButton className="px-14 md:px-16 py-4 md:py-5">
                  BOOK WITH {galleryBarbers[selectedBarber].name}
                </BookNowButton>
              )}
            </Link>
            <div className="h-[2px] flex-1 bg-black" aria-hidden="true" />
          </div>

          {/* THUMBNAIL GRID (3 columns) */}
          <div className="w-full max-w-[360px] md:max-w-screen-md mx-auto relative px-1 md:px-0">

            <div className="grid grid-cols-3 gap-x-4 gap-y-6 md:gap-x-9 md:gap-y-12">
              {galleryBarbers.map((barber, index) => (
                <div
                  key={index}
                  onClick={(e) => handleThumbnailClick(index, e)}
                  className={`aspect-square cursor-pointer relative transition-all duration-200 ${
                    selectedBarber === index ? "scale-100" : "hover:scale-105"
                  }`}
                >
                  <div className={`w-full h-full overflow-hidden rounded-md md:rounded-lg ${
                    selectedBarber === index
                      ? "ring-2 md:ring-4 ring-black opacity-100"
                      : "hover:opacity-80"
                  }`}>
                    <img
                      src={barber.thumbnail}
                      alt={barber.name}
                      className="w-full h-full object-cover pointer-events-none"
                      loading="lazy"
                    />
                  </div>
                  {barberMinPrices[barber.slug] !== undefined && (
                    <span
                      className="absolute -top-3 -left-2.5 z-10 bg-white/75 text-black text-xs md:text-sm font-bold px-2 md:px-3 py-1 md:py-1.5 rounded-lg border border-black/50 backdrop-blur-sm tracking-wide pointer-events-none shadow-md shadow-black/60"
                    >
                      ${barberMinPrices[barber.slug] % 1 === 0
                        ? barberMinPrices[barber.slug]
                        : barberMinPrices[barber.slug].toFixed(2)}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
}
