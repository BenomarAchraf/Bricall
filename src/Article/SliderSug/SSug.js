import React , { useState } from 'react'
import { FcPrevious, FcNext } from "react-icons/fc";
import Slider from "react-slick";
import { data } from './data';
import "./SSug.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SSug = () => {

    const [datae , setDatae]=useState(data);

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: true,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

      const Next = (props) => {
        const { className, onClick } = props;
        return (
          <div id="prev" className={className} onClick={onClick}>
            <FcNext
              style={{
                position: "relative",
            top: "-1rem",
            color: "gray",
            right: "-1.5rem",
            fontSize: "45px",
              }}
            />
          </div>
        );
      };
    
      const Prev = (props) => {
        const { className, onClick } = props;
        return (
          <div id="prev" className={className} onClick={onClick}>
            <FcPrevious
              style={{
                position: "relative",
                top: "-1rem",
                left: "-1.5rem",
                color: "gray",
                fontSize: "45px",
              }}
            />
          </div>
        );
      };

  return (
    <div className=''>
        <div className="aze">
        <Slider
          className="azin"
          {...settings}
          prevArrow={<Prev />}
          nextArrow={<Next />}
        >
          {datae.map((item, i) => {
        
            return (
              <div key={i} className="tailleSlider">
                {item}
              </div>
            );
          })}
          
        </Slider>
      </div>
    </div>
  )
}

export default SSug