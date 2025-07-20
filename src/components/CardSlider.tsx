import React from "react";
import Slider from "react-slick";
import Image from "next/image";
function CardSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024, // screens >= 1024px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768, // screens >= 768px and < 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480, // screens < 768px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false // optional: hide dots on small screens
        }
      }
    ]
  };

  const images = [
    { src: 'https://www.abudawood.com/wp-content/uploads/2024/05/Hersheys.jpg', alt: 'Car' },
    { src: 'https://www.abudawood.com/wp-content/uploads/2024/05/Kelloggs.jpg', alt: 'Watch 1' },
    { src: 'https://www.abudawood.com/wp-content/uploads/2024/05/STP.jpg', alt: 'Watch 2' },
    { src: 'https://www.abudawood.com/wp-content/uploads/2024/05/Doetsch.jpg', alt: 'Car' },
    { src: 'https://www.abudawood.com/wp-content/uploads/2024/05/Duracell.jpg', alt: 'Watch 1' },
    { src: 'https://www.abudawood.com/wp-content/uploads/2024/05/ArmorAll.jpg', alt: 'Watch 2' },
  ];

  return (
    <div className="CardSlider CardSlider pt-[50px]">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-1 text-center">
            <Image
              src={image.src}
              alt={image.alt || 'Default image description'} // Fallback alt text
              width={140} // Matches your max-w-[140px]
              height={140} // Calculate height
              className="max-w-[140px] !inline-block"
              style={{
                display: 'inline-block', // Ensures inline behavior
                height: 'auto' // Maintains aspect ratio
              }}
              quality={75}
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CardSlider;