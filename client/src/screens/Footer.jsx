// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import { Container, Row, Col } from "react-bootstrap";
// import navIcon1 from "../assets/nav-icon1.svg";
// import navIcon2 from "../assets/nav-icon2.svg";
// import navIcon3 from "../assets/nav-icon3.svg";
//  const Footer = () => {
//   return (
//    <><h5>---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</h5> 
//    <h4>FOOTER</h4>
//     <footer>
      
//             {/* <img src={logo} alt="Logo" /> */}
//             <h2>Vox System</h2>
//             <h6>Head Office:</h6>
//             <p>#2b, Jeeva street, TVS TollGate, Trichy-20</p>
//             <h6>Branch Office:</h6>
//             <p>No-1004,1st Floor,30th Main,Nursery road,Poornaprajna nagar, Uttrahalli,Subramaniyapura, Bangalore-560061</p>
         
//             <div className="social-icon">
//   <a href="https://www.linkedin.com/company/quick-postrichy/">Linkedin </a>
//   <a href="https://www.facebook.com/people/Quick-POS/100075954615431/">Facebook</a>
//   <a href="https://www.instagram.com/quick_pos/?__coig_restricted=1">Instagram</a>
//   <a href="https://twitter.com/quick_pos">Twitter</a>
//   <a href="https://in.pinterest.com/quickpos15/">Pinterest</a>
// </div>

//             <p>NEED HELP? For Quick Connect</p>
//             <p>+91 99650 19000 | +91 80120 19000</p>
//             <p>© 2023. All Rights Reserved</p>
          
//       <div>
//         <h5>Quick Links
//         <ul><li>
//         <NavLink to="/">Home</NavLink>
//         <NavLink to="/about">About</NavLink>
//         <NavLink to="/project">project</NavLink>
//         <NavLink to="/blog">Blog</NavLink>
//         <NavLink to="/contact">Contact Us</NavLink>
//         </li></ul>
//         </h5>
//       </div>
//     </footer></>
//   )
// }
// export default Footer



import React from 'react';
import { NavLink } from 'react-router-dom'
import '../style/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter,faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
export default function Footer()
{
    return(
        <footer class="container-fluid bg-dark text-light p-3">
        <div class="row" style={{marginLeft:"auto",marginRight:"auto"}}>
          <div class="col-md-3">
            <h4 style={{marginLeft:'auto'}}>Useful Links</h4><br/>
           <ul class="list-unstyled" style={{ padding: '0' }}>
           <li style={{ marginBottom: '10px' }}><NavLink to="/">Home</NavLink></li>
         <li style={{ marginBottom: '10px' }}><NavLink to="/about">About</NavLink></li>
        <li style={{ marginBottom: '10px' }}><NavLink to="/project">project</NavLink></li>
         <li style={{ marginBottom: '10px'}}><NavLink to="/blog">Blog</NavLink></li>
        <li style={{ marginBottom: '10px'}}><NavLink to="/contact">Contact Us</NavLink></li>
           </ul>
          </div>
          <div class="col-md-3">
            <h4>Contact Us</h4><br/>
            <ul class="list-unstyled">
           
           <li><h6>Head Office:</h6></li>
            <li><p>#2b, Jeeva street,<br/> TVS TollGate, Trichy-20</p></li>
            <li> <h6>Branch Office:</h6></li>
              <li><p>No-1004,1st Floor,30th Main,Nursery road,<br/>Poornaprajna nagar, Uttrahalli,Subramaniyapura, Bangalore-560061</p></li>
            </ul>
          </div>
          <div class="col-md-3">
            <h4>Quick Contact</h4><br/>
            <ul class="list-unstyled">
           <li><p>NEED HELP? For Quick Connect</p></li>
            <li> <p>+91 99650 19000 | +91 80120 19000</p></li>
        <li><p>
   2023. All Rights Reserved</p></li>
            </ul>
          </div>
          <div class="col-md-3">
            <h4>Follow Us</h4><br/>
            <ul class="list-unstyled" style={{ padding: '0' }}>
    <li style={{ marginBottom: '10px' }}><NavLink to="https://www.linkedin.com/company/quick-postrichy/"> <FontAwesomeIcon icon={faInstagram} className="instagram" style={{fontSize:"30px",marginRight:"6px"}}/>Instagram</NavLink></li>
  <li style={{ marginBottom: '10px' }}>  <NavLink to="https://www.facebook.com/people/Quick-POS/100075954615431/"><FontAwesomeIcon icon={faFacebook} className="facebook" style={{fontSize:"30px",marginRight:"6px"}}/>Facebook</NavLink></li>
  <li style={{ marginBottom: '10px' }}> <NavLink to="https://www.instagram.com/quick_pos/?__coig_restricted=1"><FontAwesomeIcon icon={faLinkedin} className="linkedin" style={{fontSize:"30px",marginRight:"6px"}}/>LinkedIn</NavLink></li>
   <li style={{ marginBottom: '10px' }}><NavLink to="https://twitter.com/quick_pos"><FontAwesomeIcon icon={faTwitter} className="twitter" style={{fontSize:"30px",marginRight:"6px"}}/>Twitter</NavLink></li>
            </ul>
          </div>
        </div>
      </footer>
      

    )
}