import React from 'react'
import Domain from '../components/domain'
import '../style/about.css'


const About = () => {
 return (
 <>
 
 {/* <div className='about mt-5' style={{color:'black'}}>
 <h5>TAKELEAP is a state-of-the-art technology agency focused on enabling brands to augment their customer<br/><br/> engagement capabilities with the help of unique methods. Established in 2013, we have worked with a host of iconic<br/><br/> brands and companies over the years and have succeeded in delivering revolutionary experiences worldwide.</h5>
 
 </div>
 <div className="horizontal" style={{color:'black'}}>
 <hr/>
 </div> */}

<section class="container my-5" id="about" style={{color:'black'}}>
 <div class="row">
 <div class="col-md-6" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000" style={{color:'black'}}>
 <h2>About Us</h2>
 <p style={{color:'black'}}>TAKELEAP is a state-of-the-art technology agency focused on enabling brands to augment their customer engagement capabilities</p>
 
 <p class="fst-italic" style={{color:'black'}}>
 Raising the bar of technology consulting and service with our knowledgeable and skillful team, TAKELEAP endeavors to be the “Go-to Tech Company” across all industries.
 </p>
 <div className="list" style={{color:'black'}}>
 <ul style={{color:'black'}}>
 <p style={{color:'black'}}> This system completely automates all your library’s activities. </p>
 <p style={{color:'black'}}> The best way to maintain, organize, and handle countless books systematically is to implement a library management system software.</p>
 <p style={{color:'black'}}> A library management system is used to maintain library records. </p>
 </ul>
 </div>
 <p style={{color:'black'}}>
 Our vision is to To build a market-leading, sustainable, world-class, cutting-edge technology consulting company through continuous innovation that encompasses all stakeholders – employees, customers, partners, and shareholders.


 </p>
 </div>
 <div class="col-md-6" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">
 <img src="https://images.unsplash.com/photo-1542744095-0d53267d353e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Company Image" class="img-fluid"/>
 </div>
 </div>
 </section>





 <section id="stats" class="stats-counter">
 <div class="container" data-aos="zoom-out" data-aos-delay="100" data-aos-duration="1000">
 
 <div class="row gy-4">
 
 <div class="col-lg-3 col-md-6">
 <div class="stats-item text-center w-100 h-100">
 <h2 class="text-light" style={{color:'black'}}>1000+</h2>
 <p>Books</p>
 </div>
 </div>
 
 <div class="col-lg-3 col-md-6">
 <div class="stats-item text-center w-100 h-100">
 
 <h2 class="text-light">24</h2>
 <p>Hours</p>
 </div>
 </div>
 
 <div class="col-lg-3 col-md-6">
 <div class="stats-item text-center w-100 h-100">
 
 <h2 class="text-light">50+</h2>
 <p>Workers</p>
 </div>
 </div>
 
 <div class="col-lg-3 col-md-6">
 <div class="stats-item text-center w-100 h-100">
 
 <h2 class="text-light">10+</h2>
 <p>Locations</p>
 </div>
 </div>
 
 </div>
 
 </div>
 </section>


 <section class="process" style={{color:'black',backgroundColor:'black'}} >
 <div class="center animated fadeIn" id="canvas"></div>
 <div class="container-fluid">
 <div class="container main-content">
 <h4 class="text-center mt-5"  style={{color:'white'}}>OUR VALUE SYSTEM</h4>
 <div class="row mt-5">
 <div class="col-md-2 col-6 text-center">
 <span class="svg_ico">
 <svg xmlns="http://www.w3.org/2000/svg" width="182" height="182" viewBox="0 0 182 182">
 <g id="integritiy" transform="translate(-179 -1811)">
 <g id="Group_16603" data-name="Group 16603" transform="translate(578.152 1877.123)">
 <path id="Path_13725" data-name="Path 13725" d="M-334.4,60.19a8.052,8.052,0,0,1-8.043-8.043V37.473a26,26,0,0,1,5.913-16.482,26.09,26.09,0,0,1,14.752-8.95l1.883-.393-1.483-1.225a17.945,17.945,0,0,1-6.553-13.876,18.009,18.009,0,0,1,17.989-17.989A18.009,18.009,0,0,1-291.95-3.452,17.945,17.945,0,0,1-298.5,10.424l-1.483,1.225,1.883.393a26.09,26.09,0,0,1,14.752,8.95,26,26,0,0,1,5.913,16.482V52.147a8.052,8.052,0,0,1-8.043,8.043Zm35.87-11.413a9.933,9.933,0,0,0-9.518,7.194l-.334,1.177h22.9a5.006,5.006,0,0,0,5-5V37.473a22.961,22.961,0,0,0-22.936-22.936h-13.044A22.962,22.962,0,0,0-339.4,37.473V52.147a5.006,5.006,0,0,0,5,5h22.9l-.334-1.177a9.933,9.933,0,0,0-9.518-7.194H-329.5a1.523,1.523,0,0,1-1.521-1.521V39.1a1.523,1.523,0,0,1,1.521-1.522,1.523,1.523,0,0,1,1.521,1.522v6.631h6.631a12.95,12.95,0,0,1,10.652,5.61l.761,1.1.761-1.1a12.95,12.95,0,0,1,10.652-5.61h6.631V39.1a1.523,1.523,0,0,1,1.521-1.522,1.523,1.523,0,0,1,1.521,1.522v8.152a1.523,1.523,0,0,1-1.521,1.521ZM-309.939-18.4A14.963,14.963,0,0,0-324.885-3.452a14.963,14.963,0,0,0,14.946,14.946A14.963,14.963,0,0,0-294.993-3.452,14.963,14.963,0,0,0-309.939-18.4Z" transform="translate(0)" fill="#8dceff"/>
 <path id="Path_13726" data-name="Path 13726" d="M-208.149,264.738a1.616,1.616,0,0,1-1.15-.477l-10.285-10.284a7.809,7.809,0,0,1-2.3-5.558,7.808,7.808,0,0,1,2.3-5.558,7.809,7.809,0,0,1,5.558-2.3,7.836,7.836,0,0,1,5.219,1.983l.658.586.658-.586a7.835,7.835,0,0,1,5.219-1.983,7.809,7.809,0,0,1,5.558,2.3,7.809,7.809,0,0,1,2.3,5.558,7.81,7.81,0,0,1-2.3,5.558L-207,264.261A1.616,1.616,0,0,1-208.149,264.738Zm-5.877-20.925a4.574,4.574,0,0,0-3.257,1.349,4.574,4.574,0,0,0-1.348,3.257,4.576,4.576,0,0,0,1.347,3.257l9.134,9.134,9.134-9.134a4.612,4.612,0,0,0,0-6.514,4.576,4.576,0,0,0-3.257-1.349,4.575,4.575,0,0,0-3.257,1.349L-207,246.631a1.617,1.617,0,0,1-1.151.476,1.617,1.617,0,0,1-1.15-.476l-1.469-1.469A4.576,4.576,0,0,0-214.026,243.812Z" transform="translate(-101.79 -220.418)" fill="#8dceff"/>
 </g>
 <g id="Group_16626" data-name="Group 16626" transform="translate(-828)">
 <g id="Ellipse_100" data-name="Ellipse 100" transform="translate(1007 1811)" fill="none" stroke="#1f76b8" stroke-width="1">
 <circle cx="91" cy="91" r="91" stroke="none"/>
 <circle cx="91" cy="91" r="90.5" fill="none"/>
 </g>
 <g id="Ellipse_104" data-name="Ellipse 104" transform="translate(1014 1818)" fill="none" stroke="#00e3db" stroke-width="1">
 <circle cx="84" cy="84" r="84" stroke="none"/>
 <circle cx="84" cy="84" r="83.5" fill="none"/>
 </g>
 <g id="Group_16608" data-name="Group 16608">
 <line id="Line_93" data-name="Line 93" y2="15" transform="translate(1098.5 1811.5)" fill="none" stroke="#00e3db" stroke-width="3"/>
 <line id="Line_96" data-name="Line 96" x1="16" transform="translate(1173 1901)" fill="none" stroke="#00e3db" stroke-width="3"/>
 <line id="Line_97" data-name="Line 97" x1="15" transform="translate(1007 1901)" fill="none" stroke="#00e3db" stroke-width="3"/>
 <line id="Line_94" data-name="Line 94" y2="14" transform="translate(1098.5 1978.5)" fill="none" stroke="#00e3db" stroke-width="3"/>
 </g>
 </g>
 </g>
 </svg>
 </span>
 <h4 className='mt-4'  style={{color:'white',fontSize:"15px"}}>Integrity</h4>
 </div>
 <div class="col-md-2 col-6 text-center">
 <span class="svg_ico">
 <svg xmlns="http://www.w3.org/2000/svg" width="182" height="182" viewBox="0 0 182 182">
 <g id="perseverance" transform="translate(-455 -1811)">
 <g id="Group_16579" data-name="Group 16579" transform="translate(492.943 1848.943)">
 <path id="Path_13715" data-name="Path 13715" d="M304.226,280a5.319,5.319,0,0,0-5.313,5.313v10.673a4.577,4.577,0,0,1-3.91,4.508l-.953.137a9.108,9.108,0,1,0-14.56,0l-.953-.137a4.577,4.577,0,0,1-3.91-4.508V285.313a5.313,5.313,0,1,0-10.626,0V297.3a13.683,13.683,0,0,0,11.078,13.416l1.066.2V322.5H297.4V310.917l1.066-.2A13.683,13.683,0,0,0,309.539,297.3V285.313A5.319,5.319,0,0,0,304.226,280Zm-17.457,9.108a6.072,6.072,0,1,1-6.072,6.072A6.078,6.078,0,0,1,286.77,289.108ZM306.5,297.3a10.644,10.644,0,0,1-8.618,10.435l-3.526.679v11.059H279.18V308.409l-3.526-.68a10.641,10.641,0,0,1-8.618-10.433V285.313a2.277,2.277,0,0,1,4.554,0v10.673a7.629,7.629,0,0,0,6.517,7.514l5.412.773,3.1.008c.053,0,.1.008.156.008h1.518v0l1.518,0,5.627-.789a7.629,7.629,0,0,0,6.517-7.514V285.313a2.277,2.277,0,1,1,4.554,0Z" transform="translate(-211.539 -224.503)" fill="#8dceff"/>
 <path id="Path_13716" data-name="Path 13716" d="M86.387,37.032V8H83.228L63.1,15.318l20.379,6.794V37.032H65.6L49.969,48.285a7.2,7.2,0,0,0-2-3.818L44.29,40.786V32.413A18.025,18.025,0,0,0,56.533,22.342l3.272-7.178A5.069,5.069,0,0,0,55.134,8a4.882,4.882,0,0,0-4.391,2.715L47.652,16.9a10.117,10.117,0,0,1-4.87,4.7,8.714,8.714,0,1,0-13.625.97,13.091,13.091,0,0,0-11.083,7.485l-6.7,14.362a5.014,5.014,0,0,0,4.609,7.13A4.875,4.875,0,0,0,20.4,48.722l6.474-14.031V63.669a8.68,8.68,0,0,0-4.059,13.414l-.912-.131a4.377,4.377,0,0,1-3.739-4.311V62.435A5.081,5.081,0,1,0,8,62.435V73.895A13.084,13.084,0,0,0,18.594,86.724l1.019.2V98H39.935V86.92l1.019-.2A13.084,13.084,0,0,0,51.548,73.895V62.435a5.081,5.081,0,1,0-10.161,0V72.642a4.377,4.377,0,0,1-3.739,4.311l-.912.131a8.684,8.684,0,0,0-3.478-13.191L66.532,39.935H98v-2.9ZM71.928,15.2,83.484,11v8.055ZM35.581,10.9a5.806,5.806,0,1,1-5.806,5.806A5.812,5.812,0,0,1,35.581,10.9ZM25.942,29.774,17.761,47.507a2,2,0,0,1-1.852,1.138,2.112,2.112,0,0,1-1.906-3l6.7-14.361a10.2,10.2,0,0,1,9.208-5.865h8.653A12.991,12.991,0,0,0,50.249,18.2l3.09-6.184A2.023,2.023,0,0,1,55.206,10.9a2.156,2.156,0,0,1,2.148,2.17,2.131,2.131,0,0,1-.193.887L53.89,21.139A15.123,15.123,0,0,1,42.6,29.795l-1.214.2V41.988l4.532,4.532A4.379,4.379,0,0,1,47.194,49.6v.684l-4.355,3.135V49.5L37.633,44.29h-3.5v15.4l-4.355,3.135V29.774ZM39.935,55.508l-2.9,2.09v-9.8l2.9,2.9ZM38.059,79.826A7.3,7.3,0,0,0,44.29,72.64v-10.2a2.177,2.177,0,1,1,4.355,0V73.895A10.178,10.178,0,0,1,40.4,83.873l-3.372.649V95.1H22.516V84.522l-3.372-.65A10.176,10.176,0,0,1,10.9,73.895V62.435a2.177,2.177,0,1,1,4.355,0V72.642a7.3,7.3,0,0,0,6.232,7.185l5.175.739,2.96.007c.051,0,.1.007.15.007h1.452v0l1.452,0Zm-2.478-7.955a5.806,5.806,0,1,1-5.806-5.806A5.812,5.812,0,0,1,35.581,71.871Z" fill="#8dceff"/>
 <path id="Path_13717" data-name="Path 13717" d="M344,200h3.036v3.036H344Z" transform="translate(-275.125 -157.214)" fill="#8dceff"/>
 <path id="Path_13718" data-name="Path 13718" d="M376,200h3.036v3.036H376Z" transform="translate(-301.328 -157.214)" fill="#8dceff"/>
 <path id="Path_13719" data-name="Path 13719" d="M408,200h3.036v3.036H408Z" transform="translate(-328.216 -157.214)" fill="#8dceff"/>
 </g>
 <g id="Group_16625" data-name="Group 16625" transform="translate(-552)">
 <g id="Ellipse_100" data-name="Ellipse 100" transform="translate(1007 1811)" fill="none" stroke="#1f76b8" stroke-width="1">
 <circle cx="91" cy="91" r="91" stroke="none"/>
 <circle cx="91" cy="91" r="90.5" fill="none"/>
 </g>
 <g id="Ellipse_104" data-name="Ellipse 104" transform="translate(1014 1818)" fill="none" stroke="#00e3db" stroke-width="1">
 <circle cx="84" cy="84" r="84" stroke="none"/>
 <circle cx="84" cy="84" r="83.5" fill="none"/>
 </g>
 <g id="Group_16608" data-name="Group 16608">
 <line id="Line_93" data-name="Line 93" y2="15" transform="translate(1098.5 1811.5)" fill="none" stroke="#00e3db" stroke-width="3"/>
 <line id="Line_96" data-name="Line 96" x1="16" transform="translate(1173 1901)" fill="none" stroke="#00e3db" stroke-width="3"/>
 <line id="Line_97" data-name="Line 97" x1="15" transform="translate(1007 1901)" fill="none" stroke="#00e3db" stroke-width="3"/>
 <line id="Line_94" data-name="Line 94" y2="14" transform="translate(1098.5 1978.5)" fill="none" stroke="#00e3db" stroke-width="3"/>
 </g>
 </g>
 </g>
 </svg>
 </span>
 <h4 className='mt-4'  style={{color:'white',fontSize:"15px"}}>Perseverance</h4>
 </div>
 <div class="col-md-2 col-6 text-center">
 <span class="svg_ico">
 <svg xmlns="http://www.w3.org/2000/svg" width="182" height="182" viewBox="0 0 182 182">
 <g id="hardwork" transform="translate(-731 -1811)">
 <g id="Group_16578" data-name="Group 16578" transform="translate(769.227 1851.908)">
 <path id="Path_13710" data-name="Path 13710" d="M5.587,90.595l1.255,2.832,45.03-18.718,7.845.944L62.54,84.3l-3.765,3.618a4.541,4.541,0,0,0-1.1,5.19l1.569,3.932L85.291,86.82l-1.412-3.775a4.436,4.436,0,0,0-4.393-2.988H74.308l-2.824-6.764,6.9-3.46a4.731,4.731,0,0,0,2.353-5.82L71.8,39.95a4.83,4.83,0,0,0-6.12-2.832.153.153,0,0,0-.156.157l-6.59,2.831-.942-2.359L61.6,33.5a18.53,18.53,0,0,0,4.55-10.066l4.55-5.5A8.274,8.274,0,0,0,69.6,6.29a13.139,13.139,0,0,0-1.882-1.258,7.78,7.78,0,0,0-5.334-.472l-.471-1.416A4.534,4.534,0,0,0,55.951.313L22.846,12.267a4.606,4.606,0,0,0-2.824,5.977V18.4l.784,2.044a8.722,8.722,0,0,0-4.551,10.7,8.928,8.928,0,0,0,7.218,5.819l7.374.786a20.4,20.4,0,0,0,10.2,3.932l5.177.472.942,2.359a4.684,4.684,0,0,0-2.2,3.146L43.87,53,5.587,68.575l1.1,2.988,21.966-8.807L33.986,78.8Zm75.154-6.606.314.943L60.972,92.954l-.47-.944a2.185,2.185,0,0,1,.314-1.729l5.334-5.033,6.746-2.2h6.276A1.574,1.574,0,0,1,80.741,83.989Zm-9.884-3.775L65.208,82.1l-2.039-5.976a3.48,3.48,0,0,0,2.51-.472l2.668-1.258ZM66.62,39.635a1.556,1.556,0,0,1,2.04.786l1.255,3.3-7.688,2.517.942,2.988,7.688-2.517,1.882,5.033-7.374,2.516.942,2.989,7.531-2.517,1.883,5.033L68.5,62.126l.942,2.989L76.818,62.6l.785,2.044a1.389,1.389,0,0,1-.785,1.888L64.424,72.664a1.984,1.984,0,0,1-.942.157L52.813,71.563,47.008,54.105l1.1-5.82a1.663,1.663,0,0,1,.942-1.1ZM66.463,7.863a5.216,5.216,0,0,1,2.668,6.764,5.511,5.511,0,0,1-.784,1.258l-1.883,2.359a23.551,23.551,0,0,0-.941-4.561l-2.04-6.134A6.257,6.257,0,0,1,66.463,7.863ZM19.394,30.355a5.424,5.424,0,0,1,2.668-6.764l2.2,5.348A22.806,22.806,0,0,0,27.4,34.287L24.1,33.972A5.25,5.25,0,0,1,19.394,30.355Zm22.28,8.336A17.151,17.151,0,0,1,27.239,27.838L23.16,17.457a1.561,1.561,0,0,1,.784-2.044l33.1-11.954a1.727,1.727,0,0,1,1.256,0,1.611,1.611,0,0,1,.785.944L62.54,14.784a17.322,17.322,0,0,1-3.294,16.672l-4.864,5.662,1.412,3.775-5.648,2.359L48.577,39.32ZM31.632,61.5l3.608-1.415,3.922,11.954,2.981-.944L38.065,58.824l6.276-2.517,5.334,15.886L36.967,77.54Z" transform="translate(0 0)" fill="#8dceff"/>
 <path id="Path_13711" data-name="Path 13711" d="M368.326,56.663v1.593h3.187V56.663a7.89,7.89,0,0,1,7.967-7.967V45.509a7.889,7.889,0,0,1-7.967-7.967V35.949h-3.187v1.593a7.889,7.889,0,0,1-7.967,7.967V48.7A7.889,7.889,0,0,1,368.326,56.663Zm1.593-13.384a10.982,10.982,0,0,0,3.824,3.824,10.989,10.989,0,0,0-3.824,3.825A10.989,10.989,0,0,0,366.1,47.1,10.982,10.982,0,0,0,369.919,43.278Z" transform="translate(-285.266 -28.78)" fill="#8dceff"/>
 <path id="Path_13712" data-name="Path 13712" d="M16.749,216.47v1.593h3.187V216.47A7.89,7.89,0,0,1,27.9,208.5v-3.187a7.889,7.889,0,0,1-7.967-7.967v-1.593H16.749v1.593a7.889,7.889,0,0,1-7.967,7.967V208.5A7.889,7.889,0,0,1,16.749,216.47Zm1.593-13.384a10.98,10.98,0,0,0,3.824,3.824,10.989,10.989,0,0,0-3.824,3.825,10.989,10.989,0,0,0-3.824-3.825A10.98,10.98,0,0,0,18.342,203.086Z" transform="translate(-2.558 -157.37)" fill="#8dceff"/>
 <path id="Path_13713" data-name="Path 13713" d="M403.474,197.349v-1.593h-3.187v1.593a7.889,7.889,0,0,1-7.967,7.967V208.5a7.889,7.889,0,0,1,7.967,7.967v1.593h3.187V216.47a7.89,7.89,0,0,1,7.967-7.967v-3.187A7.889,7.889,0,0,1,403.474,197.349Zm-1.593,13.385a10.99,10.99,0,0,0-3.824-3.825,10.981,10.981,0,0,0,3.824-3.824,10.981,10.981,0,0,0,3.824,3.824A10.99,10.99,0,0,0,401.88,210.734Z" transform="translate(-310.853 -157.37)" fill="#8dceff"/>
 <path id="Path_13714" data-name="Path 13714" d="M241.622,60.339l2.231,2.231c8.763-8.763.637-22.147.159-22.626L241.3,41.7C241.463,41.7,248.633,53.329,241.622,60.339Z" transform="translate(-189.361 -31.979)" fill="#8dceff"/>
 </g>
 <g id="Group_16624" data-name="Group 16624" transform="translate(-276)">
 <g id="Ellipse_100" data-name="Ellipse 100" transform="translate(1007 1811)" fill="none" stroke="#1f76b8" stroke-width="1">
 <circle cx="91" cy="91" r="91" stroke="none"/>
 <circle cx="91" cy="91" r="90.5" fill="none"/>
 </g>
 <g id="Ellipse_104" data-name="Ellipse 104" transform="translate(1014 1818)" fill="none" stroke="#00e3db" stroke-width="1">
 <circle cx="84" cy="84" r="84" stroke="none"/>
 <circle cx="84" cy="84" r="83.5" fill="none"/>
 </g>
 <g id="Group_16608" data-name="Group 16608">
 <line id="Line_93" data-name="Line 93" y2="15" transform="translate(1098.5 1811.5)" fill="none" stroke="#00e3db" stroke-width="3"/>
 <line id="Line_96" data-name="Line 96" x1="16" transform="translate(1173 1901)" fill="none" stroke="#00e3db" stroke-width="3"/>
 <line id="Line_97" data-name="Line 97" x1="15" transform="translate(1007 1901)" fill="none" stroke="#00e3db" stroke-width="3"/>
 <line id="Line_94" data-name="Line 94" y2="14" transform="translate(1098.5 1978.5)" fill="none" stroke="#00e3db" stroke-width="3"/>
 </g>
 </g>
 </g>
 </svg>
 </span>
 <h4 className='mt-4'  style={{color:'white',fontSize:"15px"}}>HardWork</h4>
 </div>
 <div class="col-md-2 col-6 text-center">
 <span class="svg_ico">
 <svg xmlns="http://www.w3.org/2000/svg" width="182" height="182" viewBox="0 0 182 182">
 <g id="loyalty" transform="translate(-1007 -1811)">
 <g id="Group_16577" data-name="Group 16577" transform="translate(1048.021 1846.822)">
 <g id="Group_16556" data-name="Group 16556" transform="translate(2.068 6.935)">
 <g id="Group_16555" data-name="Group 16555">
 <rect id="Rectangle_3523" data-name="Rectangle 3523" width="3.167" height="6.334" transform="translate(0 2.239) rotate(-45)" fill="#8dceff"/>
 </g>
 </g>
 <g id="Group_16558" data-name="Group 16558" transform="translate(12.517 17.385)">
 <g id="Group_16557" data-name="Group 16557" transform="translate(0 0)">
 <rect id="Rectangle_3524" data-name="Rectangle 3524" width="3.167" height="6.334" transform="translate(0 2.239) rotate(-45)" fill="#8dceff"/>
 </g>
 </g>
 <g id="Group_16560" data-name="Group 16560" transform="translate(2.068 17.386)">
 <g id="Group_16559" data-name="Group 16559" transform="translate(0)">
 <rect id="Rectangle_3525" data-name="Rectangle 3525" width="6.334" height="3.167" transform="translate(0 4.479) rotate(-45)" fill="#8dceff"/>
 </g>
 </g>
 <g id="Group_16562" data-name="Group 16562" transform="translate(12.518 6.935)">
 <g id="Group_16561" data-name="Group 16561" transform="translate(0 0)">
 <rect id="Rectangle_3526" data-name="Rectangle 3526" width="6.334" height="3.167" transform="translate(0 4.479) rotate(-45)" fill="#8dceff"/>
 </g>
 </g>
 <g id="Group_16564" data-name="Group 16564" transform="translate(9.069 13.936)">
 <g id="Group_16563" data-name="Group 16563">
 <rect id="Rectangle_3527" data-name="Rectangle 3527" width="3.167" height="3.167" fill="#8dceff"/>
 </g>
 </g>
 <g id="Group_16566" data-name="Group 16566" transform="translate(81.429 19.641)">
 <g id="Group_16565" data-name="Group 16565">
 <rect id="Rectangle_3528" data-name="Rectangle 3528" width="3.167" height="6.334" transform="translate(0 2.239) rotate(-45)" fill="#8dceff"/>
 </g>
 </g>
 <g id="Group_16568" data-name="Group 16568" transform="translate(91.881 29.858)">
 <g id="Group_16567" data-name="Group 16567">
 <rect id="Rectangle_3529" data-name="Rectangle 3529" width="3.167" height="6.334" transform="translate(0 2.239) rotate(-45)" fill="#8dceff"/>
 </g>
 </g>
 <g id="Group_16570" data-name="Group 16570" transform="translate(81.43 29.858)">
 <g id="Group_16569" data-name="Group 16569">
 <rect id="Rectangle_3530" data-name="Rectangle 3530" width="6.334" height="3.167" transform="translate(0 4.479) rotate(-45)" fill="#8dceff"/>
 </g>
 </g>
 <g id="Group_16572" data-name="Group 16572" transform="translate(91.88 19.642)">
 <g id="Group_16571" data-name="Group 16571">
 <rect id="Rectangle_3531" data-name="Rectangle 3531" width="6.334" height="3.167" transform="translate(0 4.479) rotate(-45)" fill="#8dceff"/>
 </g>
 </g>
 <g id="Group_16574" data-name="Group 16574" transform="translate(88.431 26.452)">
 <g id="Group_16573" data-name="Group 16573">
 <rect id="Rectangle_3532" data-name="Rectangle 3532" width="3.167" height="3.167" fill="#8dceff"/>
 </g>
 </g>
 <g id="Group_16576" data-name="Group 16576" transform="translate(0 10.622)">
 <g id="Group_16575" data-name="Group 16575" transform="translate(0 0)">
 <path id="Path_13709" data-name="Path 13709" d="M79.934,71.814l4.757-5.347-6.024-5.6.594-.65-5.9-5.5.922-.975-8.512-7.935-.689.728L63.24,44.829a10.991,10.991,0,0,0,7.781-8.44l.291-1.479L48.788,29.535l-2.4,2.039L33.97,25.867l-.684,1.343a10.983,10.983,0,0,0,2.6,13.279l-1.9,1.615-6.62-2.71-2.675,8.382.017,3.471-5.95,26.966,2.641,1.22L0,109.7l2.562,1.809L24.291,80.77l26.6,12.281,6.338-.744.936,1.4L42.812,96.041,29.379,116.55,32,118.267,44.669,98.931l15.413-2.343L74.56,118.279l2.61-1.741-18.4-27.571-7.368.865L22.361,76.424l.864-3.916,6.688,2.339,1.036-2.96-7.043-2.463,1.21-5.485,6.68,2.336,1.036-2.96L25.8,60.854l1.628-7.377,7.3,2.553,1.036-2.96L27.837,50.3l-.01-2.043,1.491-4.673,19.146,7.838L44.449,56.07l6.178,5.746L48.562,64l8.512,7.935,1.057-1.118,6.182,5.76,3.236-3.541,6.184,5.749,4.06-4.563,18.416,26.2,2.567-1.8Zm-44.319-37.2a7.784,7.784,0,0,1-.086-4.58l8.219,3.778-5.43,4.609A7.782,7.782,0,0,1,35.615,34.615Zm1.636,8.827L49.607,32.954l17.907,4.273a7.855,7.855,0,0,1-7.206,4.88l-.189-.176H58.543l-6.569-.907-3.326,7.083Zm17.168,1.085-1.365,1.581.78-1.662ZM48.8,55.832l9.3-10.764h.22c.226.04.452.073.678.1l3.852,3.573L52.769,59.526Zm8.079,11.631-3.865-3.6.2-.212,12.7-13.424,3.63,3.384ZM65.251,70.9l-1.118,1.223-3.847-3.585L71.2,57l3.468,3.231L65.209,70.86Zm8.269,3.4L69.664,70.72l6.887-7.537,3.757,3.493Z" transform="translate(0 -25.867)" fill="#8dceff"/>
 </g>
 </g>
 </g>
 <g id="Group_16609" data-name="Group 16609">
 <g id="Ellipse_100" data-name="Ellipse 100" transform="translate(1007 1811)" fill="none" stroke="#1f76b8" stroke-width="1">
 <circle cx="91" cy="91" r="91" stroke="none"/>
 <circle cx="91" cy="91" r="90.5" fill="none"/>
 </g>
 <g id="Ellipse_104" data-name="Ellipse 104" transform="translate(1014 1818)" fill="none" stroke="#00e3db" stroke-width="1">
 <circle cx="84" cy="84" r="84" stroke="none"/>
 <circle cx="84" cy="84" r="83.5" fill="none"/>
 </g>
 <g id="Group_16608" data-name="Group 16608">
 <line id="Line_93" data-name="Line 93" y2="15" transform="translate(1098.5 1811.5)" fill="none" stroke="#00e3db" stroke-width="3"/>
 <line id="Line_96" data-name="Line 96" x1="16" transform="translate(1173 1901)" fill="none" stroke="#00e3db" stroke-width="3"/>
 <line id="Line_97" data-name="Line 97" x1="15" transform="translate(1007 1901)" fill="none" stroke="#00e3db" stroke-width="3"/>
 <line id="Line_94" data-name="Line 94" y2="14" transform="translate(1098.5 1978.5)" fill="none" stroke="#00e3db" stroke-width="3"/>
 </g>
 </g>
 </g>
 </svg>

 </span>
 <h4 className='mt-4' style={{color:'white',fontSize:"15px"}}>Loyalty</h4>
 </div>
 <div class="col-md-2 col-6 text-center">
 <span class="svg_ico">
 <svg xmlns="http://www.w3.org/2000/svg" width="182" height="182" viewBox="0 0 182 182">
 <g id="knowledge" transform="translate(-1283 -1811)">
 <g id="Group_16554" data-name="Group 16554" transform="translate(1327.133 1847.151)">
 <path id="Path_13698" data-name="Path 13698" d="M48,180h3.08v3.08H48Z" transform="translate(-38.76 -136.531)" fill="#8dceff"/>
 <path id="Path_13699" data-name="Path 13699" d="M80,180H95.4v3.08H80Z" transform="translate(-65.08 -136.531)" fill="#8dceff"/>
 <path id="Path_13700" data-name="Path 13700" d="M32,212H56.641v3.08H32Z" transform="translate(-25.84 -162.536)" fill="#8dceff"/>
 <path id="Path_13701" data-name="Path 13701" d="M32,244H50.481v3.08H32Z" transform="translate(-25.84 -188.542)" fill="#8dceff"/>
 <path id="Path_13702" data-name="Path 13702" d="M85.5,70.5H73.572l2.421-5.4A40.055,40.055,0,0,0,79.5,48.795a23.929,23.929,0,0,0-2.526-10.686,19.911,19.911,0,0,0-6.5-7.463L77.121,24H84V21H76.5a1.5,1.5,0,0,0-1.06.44l-7.609,7.61a20.033,20.033,0,0,0-21.243,2.265A23.92,23.92,0,0,1,53.56,16.06l-2.121-2.121a27.085,27.085,0,0,0-5.277,7.5A15.017,15.017,0,0,0,32.25,12a1.5,1.5,0,0,0-1.5,1.5A15.016,15.016,0,0,0,43.938,28.38a27.344,27.344,0,0,0-.351,3.062l-.06-.047A20.053,20.053,0,0,0,13.364,37.5H4.5A4.5,4.5,0,0,0,0,42V60a4.5,4.5,0,0,0,4.5,4.5h9.259c.084.2.157.4.247.6l6.677,14.868A14.452,14.452,0,0,0,22.7,83.177L15.879,90H9v3h7.5a1.5,1.5,0,0,0,1.06-.44l7.279-7.279a14.4,14.4,0,0,0,13.629,2.481L45,85.581l6.531,2.182A14.032,14.032,0,0,0,54,88.313V93a4.5,4.5,0,0,0,4.5,4.5h27A4.5,4.5,0,0,0,90,93V75A4.5,4.5,0,0,0,85.5,70.5ZM33.85,15.106A12.029,12.029,0,0,1,44.137,25.394,12.029,12.029,0,0,1,33.85,15.106ZM3,60V42a1.5,1.5,0,0,1,1.5-1.5h27A1.5,1.5,0,0,1,33,42V60a1.5,1.5,0,0,1-1.5,1.5H27A1.5,1.5,0,0,0,25.5,63v3.2l-6.667-4.444A1.511,1.511,0,0,0,18,61.5H4.5A1.5,1.5,0,0,1,3,60ZM52.479,84.918l-7-2.34a1.467,1.467,0,0,0-.948,0l-7,2.337a11.4,11.4,0,0,1-10.548-1.771l7.083-7.083-2.121-2.121-7.1,7.1a11.347,11.347,0,0,1-1.422-2.3L17.027,64.5h.524l8.622,5.748A1.5,1.5,0,0,0,28.5,69V64.5h3A4.5,4.5,0,0,0,36,60V42a4.5,4.5,0,0,0-4.5-4.5H16.855A16.95,16.95,0,0,1,30.99,30a17.138,17.138,0,0,1,10.657,3.735l2.415,1.934a1.5,1.5,0,0,0,1.875,0l2.413-1.933a17.022,17.022,0,0,1,17.2-2.407l-6.611,6.61L61.06,40.06l7.272-7.272a16.95,16.95,0,0,1,5.956,6.66A20.914,20.914,0,0,1,76.5,48.795a37.033,37.033,0,0,1-3.243,15.077l-2.473,5.515-6.951-4.635A1.5,1.5,0,0,0,61.5,66v4.5h-3A4.5,4.5,0,0,0,54,75V85.3A11.2,11.2,0,0,1,52.479,84.918ZM87,93a1.5,1.5,0,0,1-1.5,1.5h-27A1.5,1.5,0,0,1,57,93V75a1.5,1.5,0,0,1,1.5-1.5H63A1.5,1.5,0,0,0,64.5,72V68.8l6.667,4.444A1.511,1.511,0,0,0,72,73.5H85.5A1.5,1.5,0,0,1,87,75Z" transform="translate(0 0)" fill="#8dceff"/>
 <path id="Path_13703" data-name="Path 13703" d="M416,420h3.08v3.08H416Z" transform="translate(-338.321 -331.74)" fill="#8dceff"/>
 <path id="Path_13704" data-name="Path 13704" d="M320,420h15.4v3.08H320Z" transform="translate(-260.321 -331.74)" fill="#8dceff"/>
 <path id="Path_13705" data-name="Path 13705" d="M320,388h24.641v3.08H320Z" transform="translate(-260.802 -305.901)" fill="#8dceff"/>
 <path id="Path_13706" data-name="Path 13706" d="M352,356h18.481v3.08H352Z" transform="translate(-286.641 -279.563)" fill="#8dceff"/>
 <path id="Path_13707" data-name="Path 13707" d="M16,428h3.08v3.08H16Z" transform="translate(-12.92 -338.2)" fill="#8dceff"/>
 <path id="Path_13708" data-name="Path 13708" d="M464,60h3.08v3.08H464Z" transform="translate(-377.08 -38.76)" fill="#8dceff"/>
 </g>
 <g id="Group_16622" data-name="Group 16622" transform="translate(276)">
 <g id="Ellipse_100" data-name="Ellipse 100" transform="translate(1007 1811)" fill="none" stroke="#1f76b8" stroke-width="1">
 <circle cx="91" cy="91" r="91" stroke="none"/>
 <circle cx="91" cy="91" r="90.5" fill="none"/>
 </g>
 <g id="Ellipse_104" data-name="Ellipse 104" transform="translate(1014 1818)" fill="none" stroke="#00e3db" stroke-width="1">
 <circle cx="84" cy="84" r="84" stroke="none"/>
 <circle cx="84" cy="84" r="83.5" fill="none"/>
 </g>
 <g id="Group_16608" data-name="Group 16608">
 <line id="Line_93" data-name="Line 93" y2="15" transform="translate(1098.5 1811.5)" fill="none" stroke="#00e3db" stroke-width="3"/>
 <line id="Line_96" data-name="Line 96" x1="16" transform="translate(1173 1901)" fill="none" stroke="#00e3db" stroke-width="3"/>
 <line id="Line_97" data-name="Line 97" x1="15" transform="translate(1007 1901)" fill="none" stroke="#00e3db" stroke-width="3"/>
 <line id="Line_94" data-name="Line 94" y2="14" transform="translate(1098.5 1978.5)" fill="none" stroke="#00e3db" stroke-width="3"/>
 </g>
 </g>
 </g>
 </svg>

 </span>
 <h4 className='mt-4'  style={{color:'white',fontSize:"15px"}}>Knowledge</h4>
 </div>
 <div class="col-md-2 col-6 text-center">
 <span class="svg_ico">
 <svg xmlns="http://www.w3.org/2000/svg" width="182" height="182" viewBox="0 0 182 182">
 <g id="innovation" transform="translate(-1559 -1811)">
 <g id="Group_16601" data-name="Group 16601" transform="translate(879.553 567.089)">
 <g id="Group_16600" data-name="Group 16600" transform="translate(719 1289)">
 <g id="Group_16581" data-name="Group 16581" transform="translate(0 0.515)">
 <g id="Group_16580" data-name="Group 16580">
 <path id="Path_13720" data-name="Path 13720" d="M93.647,26.566h0l0,0-6.132-.874a1.574,1.574,0,0,1-.724-2.818l4.956-3.712a1.573,1.573,0,0,0,.315-2.2L86.385,9.4a1.578,1.578,0,0,0-2.207-.315L79.224,12.8a1.576,1.576,0,0,1-2.513-1.481l.876-6.124a1.575,1.575,0,0,0-1.337-1.782h0L66.892,2.073a1.576,1.576,0,0,0-1.784,1.335h0l-.876,6.124a1.577,1.577,0,0,1-2.822.723L57.694,5.3a1.578,1.578,0,0,0-2.207-.315L50.75,8.54a30.539,30.539,0,0,0-6.447,0A29.93,29.93,0,0,0,17.895,35.361c-.043.446-.058.888-.08,1.33h-.473A1.576,1.576,0,0,0,15.8,37.951L14.71,43.124l-4.363-3.005a1.578,1.578,0,0,0-2.01.183L3.608,45.024a1.573,1.573,0,0,0-.183,2.006l3,4.35L1.239,52.467A1.575,1.575,0,0,0,0,54.008v6.3a1.575,1.575,0,0,0,1.252,1.541l5.181,1.088-3,4.35a1.573,1.573,0,0,0,.183,2.006L8.35,74.013a1.578,1.578,0,0,0,2.01.183l4.355-3L15.8,76.371a1.576,1.576,0,0,0,1.542,1.259h6.305a1.576,1.576,0,0,0,1.543-1.25l1.089-5.175L30.639,74.2a1.578,1.578,0,0,0,2.008-.183L35.1,71.562v4.487a6.275,6.275,0,0,0,3.153,5.422v8.747a6.3,6.3,0,0,0,6.305,6.3h6.305a6.3,6.3,0,0,0,6.305-6.3V81.47a6.275,6.275,0,0,0,3.153-5.422V69.817a7.712,7.712,0,0,1,3.646-6.426,30.247,30.247,0,0,0,3.711-2.834l-2.1-2.346a26.832,26.832,0,0,1-3.321,2.536,10.84,10.84,0,0,0-5.085,9.069v6.231A3.151,3.151,0,0,1,54.012,79.2H41.4a3.151,3.151,0,0,1-3.153-3.149V69.687a10.589,10.589,0,0,0-5-8.885A26.679,26.679,0,0,1,47.367,11.526a1.71,1.71,0,0,0-.061.172,1.573,1.573,0,0,0,.3,1.167l3.715,4.948a1.54,1.54,0,0,1,.095,1.747,1.568,1.568,0,0,1-1.576.757l-6.132-.875a1.576,1.576,0,0,0-1.784,1.335v0l-1.338,9.35a1.575,1.575,0,0,0,1.337,1.782h0l6.132.875A1.574,1.574,0,0,1,48.78,35.6l-4.954,3.711a1.573,1.573,0,0,0-.315,2.2l5.675,7.557a1.578,1.578,0,0,0,2.207.315l4.956-3.711a1.576,1.576,0,0,1,2.5,1.481l-.875,6.124a1.575,1.575,0,0,0,1.336,1.782h0L68.678,56.4a1.75,1.75,0,0,0,.222.014,1.576,1.576,0,0,0,1.562-1.351l.875-6.124a1.577,1.577,0,0,1,2.822-.723l3.717,4.948a1.578,1.578,0,0,0,2.207.315l7.566-5.667a1.573,1.573,0,0,0,.315-2.2l-3.715-4.948a1.574,1.574,0,0,1,1.482-2.5l6.132.874A1.576,1.576,0,0,0,93.647,37.7h0l1.337-9.351A1.575,1.575,0,0,0,93.647,26.566ZM41.4,82.346H54.012v3.149H41.4Zm0,6.3H54.012v1.574a3.151,3.151,0,0,1-3.153,3.149H44.554A3.151,3.151,0,0,1,41.4,90.217ZM28.852,61.494a29.793,29.793,0,0,0,2.694,1.96,7.686,7.686,0,0,1,3.176,4.029l-3.381,3.371L28.067,68.6a3.153,3.153,0,0,0-4.874,1.944l-.826,3.931H18.62l-.826-3.925a3.155,3.155,0,0,0-4.874-1.944L9.644,70.853,6.772,67.991l2.256-3.268a3.149,3.149,0,0,0-1.945-4.869l-3.93-.826v-3.74l3.93-.826A3.147,3.147,0,0,0,9.029,49.6L6.772,46.323l2.872-2.862,3.277,2.254a3.153,3.153,0,0,0,4.872-1.946l.276-1.31A29.947,29.947,0,0,0,19.32,47.8a9.446,9.446,0,1,0,9.532,13.7ZM26.4,59.276a6.3,6.3,0,1,1-5.911-8.416h.06A29.815,29.815,0,0,0,26.4,59.276ZM90.74,35.69l-4.571-.652a4.723,4.723,0,0,0-4.452,7.509l2.77,3.689-5.044,3.778-2.771-3.687a4.73,4.73,0,0,0-8.465,2.165l-.638,4.572-6.241-.891.653-4.565a4.729,4.729,0,0,0-7.519-4.447l-3.693,2.766-3.783-5.038,3.692-2.768a4.722,4.722,0,0,0-2.167-8.454l-4.571-.652.892-6.233,4.571.652a4.723,4.723,0,0,0,4.453-7.509l-2.779-3.692,5.044-3.778,2.771,3.689a4.73,4.73,0,0,0,8.465-2.165l.653-4.565,6.241.889L73.6,10.868a4.729,4.729,0,0,0,7.519,4.446l3.693-2.766,3.783,5.038L84.9,20.353a4.722,4.722,0,0,0,2.167,8.454l4.571.652Z" transform="translate(0 -2.057)" fill="#8dceff"/>
 </g>
 </g>
 <g id="Group_16583" data-name="Group 16583" transform="translate(54.052 13.895)">
 <g id="Group_16582" data-name="Group 16582">
 <path id="Path_13721" data-name="Path 13721" d="M293.706,76.171a13.706,13.706,0,1,0,13.706,13.706A13.706,13.706,0,0,0,293.706,76.171Zm0,23.986a10.28,10.28,0,1,1,10.28-10.28A10.28,10.28,0,0,1,293.706,100.157Z" transform="translate(-280 -76.171)" fill="#8dceff"/>
 </g>
 </g>
 <g id="Group_16585" data-name="Group 16585" transform="translate(42.632 65.602)">
 <g id="Group_16584" data-name="Group 16584">
 <rect id="Rectangle_3533" data-name="Rectangle 3533" width="3.713" height="5.57" fill="#8dceff"/>
 </g>
 </g>
 <g id="Group_16587" data-name="Group 16587" transform="translate(25.593 22.565)">
 <g id="Group_16586" data-name="Group 16586">
 <path id="Path_13722" data-name="Path 13722" d="M142.387,120.789a15.374,15.374,0,0,1-2.6-27.331l-1.37-2.168a17.936,17.936,0,0,0,3.035,31.882,8.179,8.179,0,0,1,5.253,7.636h2.562A10.719,10.719,0,0,0,142.387,120.789Z" transform="translate(-130.044 -91.291)" fill="#8dceff"/>
 </g>
 </g>
 <g id="Group_16589" data-name="Group 16589" transform="translate(67.462 62.083)">
 <g id="Group_16588" data-name="Group 16588">
 <rect id="Rectangle_3534" data-name="Rectangle 3534" width="13.582" height="3.693" fill="#8dceff"/>
 </g>
 </g>
 <g id="Group_16591" data-name="Group 16591" transform="translate(68.802 64.4)">
 <g id="Group_16590" data-name="Group 16590" transform="translate(0)">
 <rect id="Rectangle_3535" data-name="Rectangle 3535" width="4.144" height="16.184" transform="translate(0 3.184) rotate(-50.201)" fill="#8dceff"/>
 </g>
 </g>
 <g id="Group_16593" data-name="Group 16593" transform="translate(67.462 63.115)">
 <g id="Group_16592" data-name="Group 16592">
 <rect id="Rectangle_3536" data-name="Rectangle 3536" width="3.693" height="12.924" fill="#8dceff"/>
 </g>
 </g>
 <g id="Group_16595" data-name="Group 16595" transform="translate(8.542 21.067)">
 <g id="Group_16594" data-name="Group 16594" transform="translate(0 0)">
 <rect id="Rectangle_3537" data-name="Rectangle 3537" width="13.919" height="3.374" transform="translate(0 3.376) rotate(-14.035)" fill="#8dceff"/>
 </g>
 </g>
 <g id="Group_16597" data-name="Group 16597" transform="translate(3.316 9.445)">
 <g id="Group_16596" data-name="Group 16596" transform="translate(0 0)">
 <rect id="Rectangle_3538" data-name="Rectangle 3538" width="4.691" height="20.188" transform="matrix(0.581, -0.814, 0.814, 0.581, 0, 3.818)" fill="#8dceff"/>
 </g>
 </g>
 <g id="Group_16599" data-name="Group 16599" transform="translate(16.87 10.026)">
 <g id="Group_16598" data-name="Group 16598" transform="translate(0)">
 <rect id="Rectangle_3539" data-name="Rectangle 3539" width="3.376" height="13.938" transform="translate(0 0.836) rotate(-14.342)" fill="#8dceff"/>
 </g>
 </g>
 </g>
 </g>
 <g id="Group_16623" data-name="Group 16623" transform="translate(552)">
 <g id="Ellipse_100" data-name="Ellipse 100" transform="translate(1007 1811)" fill="none" stroke="#1f76b8" stroke-width="1">
 <circle cx="91" cy="91" r="91" stroke="none"/>
 <circle cx="91" cy="91" r="90.5" fill="none"/>
 </g>
 <g id="Ellipse_104" data-name="Ellipse 104" transform="translate(1014 1818)" fill="none" stroke="#00e3db" stroke-width="1">
 <circle cx="84" cy="84" r="84" stroke="none"/>
 <circle cx="84" cy="84" r="83.5" fill="none"/>
 </g>
 <g id="Group_16608" data-name="Group 16608">
 <line id="Line_93" data-name="Line 93" y2="15" transform="translate(1098.5 1811.5)" fill="none" stroke="#00e3db" stroke-width="3"/>
 <line id="Line_96" data-name="Line 96" x1="16" transform="translate(1173 1901)" fill="none" stroke="#00e3db" stroke-width="3"/>
 <line id="Line_97" data-name="Line 97" x1="15" transform="translate(1007 1901)" fill="none" stroke="#00e3db" stroke-width="3"/>
 <line id="Line_94" data-name="Line 94" y2="14" transform="translate(1098.5 1978.5)" fill="none" stroke="#00e3db" stroke-width="3"/>
 </g>
 </g>
 </g>
 </svg>

 </span>
 <h4 className='mt-4'  style={{color:'white',fontSize:"15px"}}>Innovation</h4>
 </div>
</div></div></div></section>


<br/><br/>


<Domain/>



 </>

 )
}

export default About 