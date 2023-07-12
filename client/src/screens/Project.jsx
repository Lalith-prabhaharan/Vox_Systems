import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../style/card.css"
const Project = (props) => {
  const navigate=useNavigate();
  const [userProfiles, setUserProfiles] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/api/user-profiles') 
      .then((res) => {
        const userProfiles = res.data;
        setUserProfiles(userProfiles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
   
  const click=()=>{
    navigate('/projectdesc')
  }

  return (
<div className='project'>
     <ul> {userProfiles.map((userProfile) => (
              <li key={userProfile._id}>
                {console.log(userProfile.profileImg)}
<div className="card">
  
      {/* <div className="card-image">
        <img src={userProfile.profileImg} alt="Card" />
        
      </div> */}
      <div className="card-content">
        {/* <h3 className="card-title">{userProfile.title}</h3>
        <p className="card-description">{userProfile.desc}</p> */}
       {/* <Button>
        <a href={userProfile.githublink}>{userProfile.title}</a>
        </Button> */}
        {/* <button className="button">
  {userProfile.title}
</button> */}
<button onClick={click} style={{"--clr":'#0FF0FC'}}><span>{userProfile.title}</span><i></i></button>
      </div>

    </div>
    </li>
        ))}
        </ul>
    </div>
    
  );
};


export default Project;