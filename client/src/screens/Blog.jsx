import axios from 'axios';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import Contact from './Contact';
import { NavLink } from 'react-router-dom';
import "../style/blog.css"
const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
    AOS.init({
      duration: 2000, // Set the animation duration (in ms)
      easing: 'ease-in-out', // Set the animation easing

    });
  }, []);


  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p data-aos="fade-up" data-aos-delay ="700" data-aos-duration ="1000" className="text">
        {isReadMore ? text.slice(0, 1000) : text}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
    );
  };


  const fetchBlogs = async () => {
    try {
      const response = await axios.get('http://localhost:4000/blog/blogget');
      setBlogs(response.data);
      // console.log(blogs)
    } catch (error) {
      console.error(error);
    }
  }; 

  return (
    <div className="blog">
      <div className="blog-container">
        <h2 className="blog-title"><u>Blog List</u></h2>
        {blogs.map((blog) => (
          <div className="blog-item" key={blog._id}>
            <h3>{blog.blogTitle}</h3>
            <ReadMore className='blogdesc'>{blog.blogDesc}</ReadMore>
            <p className="last_update">
              Posted at: {new Date(blog.timestamp).toLocaleString('en-US', { month: 'long', year: 'numeric' })}
            </p>
            <br></br>
            {/* <img style={{width:"400px",height:"200px",marginLeft:"40px",borderRadius:"5px",marginBottom:"30px"}} src="https://takeleap.com/assets/images/blog/7791a615d6d78d56dbaeb1cbfbfb93de.jpeg"></img> */}

            <div className="div">
              <img style={{marginBottom:"20px"}} className='img-fluid' src='https://takeleap.com/assets/images/blog/7791a615d6d78d56dbaeb1cbfbfb93de.jpeg'/>
            </div>
          </div>
        ))}
      </div>
      
      {/* <div className="contact-link">
        Looking for vox Solution ? <NavLink to="/contact">Contact</NavLink>
      </div> */}
      {/* <div className='recent'>
        <h3>RECENT POSTS</h3>
        <ul>
          <li>
          Beyond the Hype: Unraveling the True Impact of Artificial Inte
          </li>
          <li>
          Beyond the Hype: Unraveling the True Impact of Artificial Inte
          </li>
          <li>
          Beyond the Hype: Unraveling the True Impact of Artificial Inte
          </li>
          <li>
          Beyond the Hype: Unraveling the True Impact of Artificial Inte
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Blog;
