import React from "react";
import videobg from "../../assets/video.mp4";

import image1 from "../../assets/1.jpg";

import HomeCard from "../../componet/HomeCard";
import { carouselData } from "../../componet/carouselData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";

const Home = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="home padding">
      <div className="video">
        <video src={videobg} autoPlay loop muted />
        <h1 className="heading">
          YOUR GATEWAY TO WORLD CLASS COMPUTER SCIENCE EDUCATION
        </h1>
      </div>
      <div className="grid">
        <HomeCard
          title="Short Course"
          desc="Our eight week intensive certificate course is open to senior high
          school graduates, tertiary school graduates, workers and the general
          public"
        />

        <HomeCard
          title="Short Course"
          desc="Our eight week intensive certificate course is open to senior high
          school graduates, tertiary school graduates, workers and the general
          public"
        />
        <HomeCard
          title="Short Course"
          desc="Our eight week intensive certificate course is open to senior high
          school graduates, tertiary school graduates, workers and the general
          public"
        />
        <HomeCard
          title="Short Course"
          desc="Our eight week intensive certificate course is open to senior high
          school graduates, tertiary school graduates, workers and the general
          public"
        />
      </div>
      <div className="container">
        <div className="image-container">
          <img className="image1" src={image1} alt="" />
        </div>
        <div className="text">
          <h1>Departmental Events</h1>
          <p>Programmes, seminars and events organized by the department</p>
          <a href="#link">Veiw upcoming and ongoing events</a>
        </div>
      </div>
      <div className="short-course">
        <h1>Short Courses we offer</h1>
        <p>
          Our eight week intensive certificate course is open to senior high
          school graduates, tertiary students, school graduates, workers and the
          general public.
        </p>
        <p>Evening and Weekend Session Only</p>
      </div>
      <div>
        <Slider {...settings}>
          {carouselData.map((data, index) => {
            return (
              <div key={index} className="carousel-image">
                <img src={data.image} alt="" width="100%" height={200} />
                <div className="topic">
                  <h3>{data.topic}</h3>
                  <p className="desc">{data.desc}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Home;
