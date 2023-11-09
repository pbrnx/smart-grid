import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import "../styles/Landing.scss";
import smart1 from "../images/smart1.png";
import smart2 from "../images/smart2.png"; 
import smart3 from "../images/smart3.png"; 

function MyCarousel() {
  return (
    <Carousel className='box rounded-5' controls={false}>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100 " src={smart1} alt="First slide" /> 
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={smart3} alt="Second slide" /> 
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100 " src={smart2} alt="Third slide" /> 
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
