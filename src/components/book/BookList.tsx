import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BookingListButton from "@/components/book/BookingListButton";
import {
  BarberResponse,
  BarberServices,
  ServicesResponse,
  ServicesItem,
} from "@/interfaces/BookingInterface";
import { getAllBarber, getAllService } from "@/utils/barberApi";
import Spinner from "../web/Spinner";
import Logo from "@/components/react-svg/logo";
import { ChevronDown, ChevronUp } from "lucide-react";

import Dejan from "@/assets/web/barbers/booking-list/dejan-book.webp";
import Rayhan from "@/assets/web/barbers/booking-list/rayhan-book.webp";
import Jay from "@/assets/web/barbers/booking-list/jay-book.svg";
import Wyatt from "@/assets/web/barbers/booking-list/wyatt-book.svg";
import Emman from "@/assets/web/barbers/booking-list/emman-book.svg";
import Niko from "@/assets/web/barbers/booking-list/niko-book.svg";
import Noah from "@/assets/web/barbers/booking-list/noah-book.png";
import Amir from "@/assets/web/barbers/booking-list/amir-book.png";
import Jamie from "@/assets/web/barbers/booking-list/jamie-book.jpg";
import Lucas from "@/assets/web/barbers/booking-list/lucas-book.jpg";
import Can from "@/assets/web/barbers/booking-list/can-book.png";
import Leon from "@/assets/web/barbers/booking-list/leon-book.png";
import EnisBook from "@/assets/web/barbers/booking-list/enis-book.jpeg";
import Kosta from "@/assets/web/barbers/booking-list/kosta-book.jpeg";
import Stevan from "@/assets/web/barbers/booking-list/stevan-book.webp";
import LineBottomBorder from "@/assets/book/line-bottom-border.svg";
import InstagramIcon from "@/assets/book/mdi_instagram.svg";
// import Hero from "@/assets/web/home/hero.svg";

const barberImages: { [key: string]: string } = {
  DEJAN: Dejan,
  LUCAS: Lucas,
  CAN: Can,
  RAYHAN: Rayhan,
  JAY: Jay,
  WYATT: Wyatt,
  EMMAN: Emman,
  NIKO: Niko,
  NOAH: Noah,
  AMIR: Amir,
  JAMIE: Jamie,
  LEON: Leon,
  ENIS: EnisBook,
  KOSTA: Kosta,
  STEVAN: Stevan,
  // MUSTAFA: Hero,
};

// Barbers that should always show the "Available Now" badge, regardless of
// whether their Square display name includes the "(Available Now)" tag.
const ALWAYS_AVAILABLE_BARBERS = ["DEJAN", "LEON", "ENIS", "KOSTA"];

// Instagram handles that override whatever is parsed from the Square display
// name, for barbers whose Square profile has a stale or missing handle.
const INSTAGRAM_OVERRIDES: { [key: string]: string } = {
  DEJAN: "@dejantomic__",
  STEVAN: "@krivothebarber",
};

const getInstagramHandle = (displayName: string): string => {
  const upperName = displayName.toUpperCase();
  for (const [key, handle] of Object.entries(INSTAGRAM_OVERRIDES)) {
    if (upperName.includes(key)) {
      return handle;
    }
  }
  return displayName.match(/@[^\s)]+/)?.[0] || "";
};

const isAvailableNow = (displayName: string): boolean => {
  const upperName = displayName.toUpperCase();
  return (
    displayName.includes("(Available Now)") ||
    ALWAYS_AVAILABLE_BARBERS.some((name) => upperName.includes(name))
  );
};

const BookList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [barberServices, setBarberServices] = useState<BarberServices>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [expandedBarber, setExpandedBarber] = useState<string | null>(null);

  useEffect(() => {
    // ✅ Fixed joinBarbersAndServices function
    const joinBarbersAndServices = (
      barbers: BarberResponse | undefined,
      services: ServicesResponse | undefined,
      specificBarber: string | null,
    ) => {
      const barberServices: BarberServices = { data: [] };

      const sortOrder = [
        "DEJAN",
        "LUCAS",
        "CAN",
        "JAMIE",
        "AMIR",
        "RAYHAN",
        "JAY",
        "NOAH",
        "EMMAN",
        "NIKO",
        "LEON",
        "ENIS",
        "KOSTA",
        "STEVAN",
        "ANTHONY",
        "CHRISTOS",
        "WYATT",
      ];

      const hiddenBarbers = ["JOSH", "ADMIN", "LUCAS"];

      // 1. Use all available profiles, excluding hidden barbers
      let sortedProfiles = (barbers?.team_member_booking_profiles ?? []).filter(
        (profile) =>
          !hiddenBarbers.some((name) =>
            profile.display_name.toUpperCase().includes(name),
          ),
      );

      // 2. Filter for a specific barber if provided
      if (specificBarber && specificBarber !== "book") {
        sortedProfiles = sortedProfiles.filter((profile) =>
          profile.display_name
            .toUpperCase()
            .includes(specificBarber.toUpperCase()),
        );
      }

      // 3. Sort based on predefined sortOrder, unknowns go to bottom
      sortedProfiles = sortedProfiles.sort((a, b) => {
        const aIndex = sortOrder.findIndex((name) =>
          a.display_name.toUpperCase().includes(name),
        );
        const bIndex = sortOrder.findIndex((name) =>
          b.display_name.toUpperCase().includes(name),
        );
        const aSort = aIndex !== -1 ? aIndex : 999;
        const bSort = bIndex !== -1 ? bIndex : 999;
        return aSort - bSort;
      });

      // 4. Match services with each barber
      if (sortedProfiles && services) {
        for (let i = 0; i < sortedProfiles.length; i++) {
          const servicesForBarber = services.objects.filter((service) => {
            const hasTeamMemberMatch = service.item_data.variations.some(
              (variation) =>
                variation.item_variation_data.team_member_ids?.includes(
                  sortedProfiles[i].team_member_id,
                ),
            );

            if (!hasTeamMemberMatch) return false;

            // If service name contains "by [BarberName]", restrict to that barber only
            const serviceName = service.item_data.name?.toUpperCase() ?? "";
            const namedBarber = sortOrder.find((name) =>
              serviceName.includes(`BY ${name}`),
            );

            if (namedBarber) {
              return sortedProfiles[i].display_name
                .toUpperCase()
                .includes(namedBarber);
            }

            return true;
          });

          barberServices.data.push({
            barber: sortedProfiles[i],
            services: servicesForBarber,
          });
        }
      }

      setBarberServices(barberServices);

      // Auto-expand if there's only one barber
      if (
        barberServices.data.length === 1 &&
        barberServices.data[0].barber.team_member_id
      ) {
        setExpandedBarber(barberServices.data[0].barber.team_member_id);
      }
    };

    const fetchData = async () => {
      setIsLoading(true);
      const parts = location.pathname.split("/");

      // Determine which barber to show
      let specificBarber = null;
      let barber;
      let query;
      let type;

      // Handle different URL patterns
      parts[1] === "meta" ? (barber = parts[2]) : (barber = parts[1]);
      parts[1] === "meta" ? (type = "M") : (type = "O");

      const isBookingPath =
        parts.includes("book") || parts.includes("services");

      // Set the specific barber based on URL
      if (barber && barber !== "book" && isBookingPath) {
        specificBarber = barber;
      }

      // Determine query for API
      if (parts.length > 3) {
        barber === "dejan" ||
        barber === "anthony" ||
        barber === "christos" ||
        barber === "wyatt" ||
        barber === "noah" ||
        barber === "book"
          ? // barber === "mustafa"
            (query = "all")
          : (query = barber);
      } else {
        query = "";
      }

      const fetchedBarbers = await getAllBarber();
      const fetchedServices = await getAllService(query, type);

      // console.log(
      //   "DEBUG JSON",
      //   JSON.stringify({
      //     fetchedBarbers,
      //     fetchedServices,
      //   }),
      // );

      // console.log("DEBUG OBJECT", {
      //   fetchedBarbers,
      //   fetchedServices,
      // });

      console.log(
        "TEAM MEMBERS:",
        fetchedBarbers.team_member_booking_profiles.map((profile) => ({
          id: profile.team_member_id,
          name: profile.display_name,
          bookable: profile.is_bookable,
        }))
      );

      joinBarbersAndServices(fetchedBarbers, fetchedServices, specificBarber);
      setIsLoading(false);
    };

    console.log(barberServices);
    fetchData();
  }, [location.pathname]);

  const handleBookNowClick = async (item: ServicesItem) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 100));
      localStorage.removeItem("bookedItems");
      const updatedBookings = [item];
      localStorage.setItem("bookedItems", JSON.stringify(updatedBookings));
      const parts = location.pathname.split("/");
      const newPath = "/" + parts.slice(1, parts.length - 1).join("/");
      navigate(`${newPath}/appointment`);
    } catch (error) {
      console.error("Error booking the item:", error);
    }
  };

  const toggleBarberServices = (barberId: string) => {
    setExpandedBarber(expandedBarber === barberId ? null : barberId);
  };

  const getBarberImage = (displayName: string) => {
    const upperName = displayName.toUpperCase();
    for (const [key, value] of Object.entries(barberImages)) {
      if (upperName.includes(key)) {
        return value;
      }
    }
    return null;
  };

  const extractPriceRange = (services: ServicesItem[]) => {
    const prices = services
      .map((service) => {
        const priceAmount = service.item_data.variations[0].item_variation_data.price_money.amount;
        // Convert from cents to dollars
        return priceAmount / 100;
      })
      .filter((price) => price > 0);

    if (prices.length === 0) return "";

    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);

    return minPrice === maxPrice ? `$${minPrice}` : `$${minPrice}-$${maxPrice}`;
  };

  const cleanDisplayName = (name: string): string => {
    // Remove (Available Now), (O), (M), surcharge text and any extra spaces
    return name
      .replace(/\(Available Now\)/gi, "")
      .replace(/\(O\)/g, "")
      .replace(/\(M\)/g, "")
      .replace(/\+\s*\[15%\s*Surcharge\s*On\s*Sundays\]/gi, "")
      .trim()
      .replace(/\s+/g, " "); // Replace multiple spaces with single space
  };

  const formatPrice = (priceAmount: number): string => {
    // Convert from cents to dollars
    const dollars = priceAmount / 100;
    return `$${dollars.toFixed(2)}`;
  };

  const getPriceDisplay = (service: ServicesItem, barberName: string): string => {
    const basePrice = formatPrice(
      service.item_data.variations[0].item_variation_data.price_money.amount
    );
    const isAmir = barberName.toUpperCase().includes("AMIR");
    return isAmir
      ? `${basePrice} + [15% surcharge on Sundays]`
      : basePrice;
  };

  return (
    <section className="relative bg-[#f5f5f3] min-h-screen text-black">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md px-6 py-4 flex justify-center md:justify-start border-b border-black/10 shadow-sm">
        <Link to="/home">
          <Logo className="w-48 md:w-[12rem] h-auto" />
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-32 pb-20 md:pt-36">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center gap-6 min-h-[calc(100vh-12rem)] md:min-h-[calc(100vh-8rem)] md:pt-16">
            <h3 className="text-xl font-bold text-black">Loading data...</h3>
            <Spinner />
          </div>
        ) : (
          <div className="space-y-8 md:space-y-12">
            {barberServices?.data.map((item) => (
              <div key={item.barber.team_member_id} className="relative rounded-[2rem] border border-black/10 bg-white p-4 pb-8 md:p-8 shadow-[0_16px_50px_rgba(0,0,0,0.06)]">
                <div className="flex flex-col md:grid md:grid-cols-[380px,1fr] gap-7 md:gap-10">
                  {/* Barber Image Section */}
                  <div className="relative">
                    {/* Mobile: Card with white border and info overlay */}
                    <div className="md:hidden w-full sm:w-[85%] mx-auto relative">
                      {/* White border container with curved bottom */}
                      <div className="relative rounded-[20px] overflow-visible ring-1 ring-black/20 shadow-md">
                        <div className="relative rounded-[20px] overflow-hidden bg-white">
                        {/* Image */}
                        <div className="aspect-[1/1] overflow-hidden">
                          <img
                            src={getBarberImage(item.barber.display_name) ?? undefined}
                            alt={item.barber.display_name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Info section with neutral background at bottom */}
                        <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm px-5 py-4 rounded-b-[18px]">
                          <h2 className="text-[32px] font-extrabold font-inter text-black uppercase mb-1.5">
                            {item.barber.display_name.split(" ")[0]}
                          </h2>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <img
                                src={InstagramIcon}
                                alt="Instagram"
                                className="w-[14px] h-[14px]"
                              />
                              <p className="text-[13px] font-medium font-inter text-black/90">
                                {getInstagramHandle(item.barber.display_name)}
                              </p>
                            </div>
                            {isAvailableNow(item.barber.display_name) && (
                              <span className="text-xs text-black border border-black px-2 py-1 rounded-full">
                                Available Now
                              </span>
                            )}
                          </div>
                        </div>
                        </div>

                        {/* Curved bottom border with glow effect */}
                        <div className="absolute -bottom-[11px] left-1/2 -translate-x-1/2 w-56">
                          <img
                            src={LineBottomBorder}
                            alt=""
                            className="w-full h-auto"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Desktop: Card with white border and info overlay (same as mobile) */}
                    <div className="hidden md:block w-[380px] mx-auto relative">
                      {/* White border container with curved bottom */}
                      <div className="relative rounded-[20px] overflow-visible ring-1 ring-black/20 shadow-md">
                        <div className="relative rounded-[20px] overflow-hidden bg-white">
                          {/* Image */}
                          <div className="aspect-[3/4] overflow-hidden">
                            <img
                              src={getBarberImage(item.barber.display_name) ?? undefined}
                              alt={item.barber.display_name}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Info section with neutral background at bottom */}
                          <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm px-5 py-4 rounded-b-[18px]">
                            <h2 className="text-[32px] font-extrabold font-inter text-black uppercase mb-1.5">
                              {item.barber.display_name.split(" ")[0]}
                            </h2>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <img
                                  src={InstagramIcon}
                                  alt="Instagram"
                                  className="w-[14px] h-[14px]"
                                />
                                <p className="text-[13px] font-medium font-inter text-black/90">
                                  {getInstagramHandle(item.barber.display_name)}
                                </p>
                              </div>
                              {isAvailableNow(item.barber.display_name) && (
                                <span className="text-xs text-black border border-black px-2 py-1 rounded-full">
                                  Available Now
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Curved bottom border with glow effect */}
                        <div className="absolute -bottom-[11.5px] left-1/2 -translate-x-1/2 w-56">
                          <img
                            src={LineBottomBorder}
                            alt=""
                            className="w-full h-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col">

                    {/* Services Section */}
                    <div className="w-full">
                      {/* Desktop: Dropdown Button */}
                      <Button
                        onClick={() =>
                          toggleBarberServices(item.barber.team_member_id)
                        }
                        className="hidden md:flex w-full bg-[#f5f5f3] hover:bg-[#eaeae7] text-black justify-between h-14 md:h-16 py-4 md:py-5 border border-black/15 rounded-xl"
                      >
                        <span className="flex items-center gap-3">
                          <span className="text-lg md:text-xl font-semibold">View Services</span>
                          <span className="text-sm md:text-base text-stone-600">
                            {extractPriceRange(item.services)} AUD
                          </span>
                        </span>
                        {expandedBarber === item.barber.team_member_id ? (
                          <ChevronUp className="ml-2 h-5 w-5 md:h-6 md:w-6" />
                        ) : (
                          <ChevronDown className="ml-2 h-5 w-5 md:h-6 md:w-6" />
                        )}
                      </Button>

                      {/* Mobile: 2-Column Grid - Always Visible */}
                      <div className="md:hidden w-full sm:w-[85%] mx-auto grid grid-cols-2 gap-3">
                        {item.services.map((service) => (
                          <div
                            key={service.id}
                            className="bg-[#f5f5f3] p-3 flex flex-col gap-2 border border-black/10 rounded-xl"
                          >
                            <div className="flex-1">
                              <h3 className="text-black text-xs font-bold font-inter text-center">
                                {cleanDisplayName(service.item_data.name)}
                              </h3>
                              <p className="text-stone-600 text-xs mt-1 text-center">
                                {getPriceDisplay(service, item.barber.display_name)}
                              </p>
                            </div>
                            <BookingListButton
                              onClick={() => handleBookNowClick(service)}
                              className="w-full h-10 text-xs"
                            >
                              BOOK NOW
                            </BookingListButton>
                          </div>
                        ))}
                      </div>

                      {/* Desktop: Expandable Service List */}
                      {expandedBarber === item.barber.team_member_id && (
                        <div className="hidden md:block">
                          {item.services.map((service) => (
                            <div
                              key={service.id}
                              className="bg-white border-b border-black/10 last:border-b-0"
                            >
                              <div className="flex flex-col md:flex-row md:items-center gap-4 p-4 md:py-6 md:pl-6 md:pr-0">
                                <div className="flex-1 md:min-w-0">
                                  <h3 className="text-black text-base md:text-lg font-medium font-inter text-center md:text-left">
                                    {cleanDisplayName(service.item_data.name)}
                                  </h3>
                                  <p className="text-stone-600 text-sm mt-1 text-center md:text-left">
                                    {getPriceDisplay(service, item.barber.display_name)}
                                  </p>
                                </div>
                                <BookingListButton
                                  onClick={() => handleBookNowClick(service)}
                                  className="w-full md:w-52 md:h-14 md:flex-shrink-0 whitespace-nowrap"
                                >
                                  BOOK NOW
                                </BookingListButton>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BookList;
