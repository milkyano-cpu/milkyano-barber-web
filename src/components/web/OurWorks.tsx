import image1 from "@/assets/our-works/1.png";
import image2 from "@/assets/our-works/2.png";
import image3 from "@/assets/our-works/3.png";
import image4 from "@/assets/our-works/4.png";
import image5 from "@/assets/our-works/5.png";
import image6 from "@/assets/our-works/6.png";
import image7 from "@/assets/our-works/7.png";
import image8 from "@/assets/our-works/8.png";
import image9 from "@/assets/our-works/9.png";
import image10 from "@/assets/our-works/10.png";
import image11 from "@/assets/our-works/11.png";
import image12 from "@/assets/our-works/12.png";

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12];

const CarauselGallery = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 w-full max-w-screen-lg self-center mt-10 px-4 md:px-0">
      {images.map((src, index) => (
        <img
          key={src}
          src={src}
          width={500}
          height={500}
          alt={`Barber work ${index + 1}`}
          loading="lazy"
          className="w-full aspect-square object-cover rounded-2xl border border-black/10 shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-[1.02]"
        />
      ))}
    </div>
  );
};

export default CarauselGallery;
