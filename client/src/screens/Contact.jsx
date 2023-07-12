import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import axios from "axios";
import Qr from "../components/Qr";
import '../style/contact.css'
import Spline from '@splinetool/react-spline';
 const Contact = () => {
  const [formData, setFormData] = useState({
    fname:"",
    lname:"",
    from: "",
    phone: "",
    text: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const res = await axios.post(
        "http://localhost:4000/api/email/",
        formData
      );
      console.log(res.data);
      setFormData({
        fname:"",
        lname:"",
        from: "",
        phone: "",
        text: "",
      });
      alert("Your message has been sent!");
    } catch (err) {
      console.error(err);
    }
  };
  

  return (
    // <>
    // <section className="contact mt-5" id="connect">
      
          
    //             <h2>Get In Touch</h2>
    //             <form onSubmit={handleSubmit}>
                  
    //                 <input
    //       type="text"
    //       name="fname"
    //       id="fname"
    //       value={formData.fname}
    //       placeholder="First Name"
    //       onChange={handleChange}
    //       required
    //     />
    //                 <input
    //       type="text"
    //       name="lname"
    //       id="lname"
    //       value={formData.lname}
    //       onChange={handleChange}
    //       placeholder="Last Name"
    //       required
    //     />
                  
    //                 <input
    //       type="email"
    //       name="from"
    //       id="from"
    //       value={formData.from}
    //       onChange={handleChange}
    //       placeholder="Email"
    //       required
    //     />                    
    //                 <input
    //       type="text"
    //       name="phone"
    //       id="phone"
    //       value={formData.phone}
    //       placeholder="Phone Number"
    //       onChange={handleChange}
    //       required
    //     />                    
    //                 <textarea
    //       name="text"
    //       id="text"
    //       placeholder="Message"
    //       value={formData.text}
    //       onChange={handleChange}
    //       required
    //     />                      <button type="submit">Send</button>
                  

    //             </form>
              
    // </section>
    // <div>
    //   <Qr/>
    // </div>
    // </>
    <div class="contain">

  <div class="wrapper">

    <div class="form">
      <h4>GET IN TOUCH</h4>
      <h2 class="form-headline">Send us a message</h2>
      <form id="submit-form" action="">
        <p>
          <input id="name" class="form-input" type="text" placeholder="Your Name*"/>
          <small class="name-error"></small>
        </p>
        <p>
          <input id="email" class="form-input" type="email" placeholder="Your Email*"/>
          <small class="name-error"></small>
        </p>
        <p class="full-width">
          <input id="company-name" class="form-input" type="text" placeholder="Company Name*" required/>
          <small></small>
        </p>
        <p class="full-width">
          <textarea  minlength="20" id="message" cols="30" rows="7" placeholder="Your Message*" required></textarea>
          <small></small>
        </p>
        <p class="full-width">
          <input type="checkbox" id="checkbox" name="checkbox" /> Yes, I would like to receive communications by call / email about Company's services.
        </p>
        <p class="full-width">
          <input type="submit" class="submit-btn" value="Submit" onclick="checkValidations()"/>
        </p>
      </form>
    </div>

    <div class="contacts ">
    <Spline scene="https://prod.spline.design/fa1m0cEeTBU6B9x6/scene.splinecode" />
      {/* <ul>
        <h2>VOX SYSTEMS</h2>
        <li>  #2b, Jeeva street, <span class="highlight-text-grey">TVS TollGate, Trichy-20 </span></li>
        <span class="hightlight-contact-info">
          <li class="email-info"><i class="fa fa-envelope" aria-hidden="true"></i> info@demo.com</li>
          <li><i class="fa fa-phone" aria-hidden="true"></i> <span class="highlight-text">+91 99650 19000</span></li>
        </span>
      </ul> */}
    </div>
  </div>
</div>
  )
}
export default Contact