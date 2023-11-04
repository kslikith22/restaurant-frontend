import React from "react";
import Slider from "react-slick";

const Carousel = () => {
  const images = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1669150852127-2435412047f2?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVzdHVhcmFudHN8ZW58MHx8MHx8fDA%3D",
      heading: "Ambiance That Invites",
      subheading: (
        <span className="">
          Elegant Dining Atmosphere <br />
          <br />
          <span className="">Perfect for Special Occasions</span>
        </span>
      ),
    },
  ];
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    slide: "div",
    arrows: false,

  };



  return (
    <div>
      <div>
        {images.map((x) => (
          <div>
            <img
              src={x.image ? `${x.image}` : ""}
              className="w-[75%] ml-[25%]  h-[70vh]"
              alt=""
            />
            <div className="absolute top-20 px-4 h-[70vh] bg-gradient-to-r from-blue-700 via-blue-400 to-cardOverlay  w-[50%] ">
              <h1 className="text-white mt-20 font-medium text-5xl">
                {x.heading}
              </h1>
              <h1 className="text-white mt-16  font-light text-4xl">
                {x.subheading}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
