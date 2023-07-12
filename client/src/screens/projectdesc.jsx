import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export const Projectdesc = () => {
  return (
    <div style={{ display: 'block', width: '100%' }}>
      <style>{`
        .carousel-img {
          max-width: 100%;
          height: auto;
        }
        
        @media (max-width: 576px) {
          .carousel-img {
            height: 200px;
          }
        @media (max-width: 476px) {
          .carousel-img {
            height: 200px;
          }
        }
      `}</style>
      <Carousel>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100 carousel-img"
            src="https://takeleap.com/assets/images/sldr/e7798ada523a429510fa577bc5fec21e.jpg"
            alt="Image One"
          />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 carousel-img"
            src="https://takeleap.com/assets/images/sldr/0be3cf7c3474df1d112d8e68dd2d3809.jpg"
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 carousel-img"
            src="https://takeleap.com/assets/images/sldr/e380989695342c13e3c294a2e18d63fa.jpg"
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>



      </Carousel>
    </div>
  )
}
