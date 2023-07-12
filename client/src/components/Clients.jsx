import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "../style/clients.css"

const Clients = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get('http://localhost:4000/clientapi/clientget');
      setImages(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase:"linear"
  };



  return (
        <div className="mainContainer">
          <h2>Our Clients!!</h2>
          <Slider {...settings}>
            {
              images.map((image)=>(
                <div className='container'>
                  <img src={image.clientImg}></img>
                </div>
              ))
            }
            <div className="container">
              <img src="https://plus.unsplash.com/premium_photo-1668116307088-583ee0d4aaf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
            </div>
            <div className="container">
              <img src="https://plus.unsplash.com/premium_photo-1668116307088-583ee0d4aaf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
            </div>
            <div className="container">
              <img src="https://plus.unsplash.com/premium_photo-1668116307088-583ee0d4aaf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
            </div>
            <div className="container">
              <img src="https://plus.unsplash.com/premium_photo-1668116307088-583ee0d4aaf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
            </div>
            <div className="container">
              <img src="https://plus.unsplash.com/premium_photo-1668116307088-583ee0d4aaf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
            </div>
            <div className="container">
              <img src="https://plus.unsplash.com/premium_photo-1668116307088-583ee0d4aaf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
            </div>
            <div className="container">
              <img src="https://plus.unsplash.com/premium_photo-1668116307088-583ee0d4aaf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
            </div>
            <div className="container">
              <img src="https://plus.unsplash.com/premium_photo-1668116307088-583ee0d4aaf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
            </div>
            <div className="container">
              <img src="https://plus.unsplash.com/premium_photo-1668116307088-583ee0d4aaf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
            </div>
            <div className="container">
              <img src="https://plus.unsplash.com/premium_photo-1668116307088-583ee0d4aaf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
            </div>
          </Slider>
        </div>
  );
};

export default Clients;
