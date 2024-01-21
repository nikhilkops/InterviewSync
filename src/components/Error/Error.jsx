import React from "react";
import './Error.css'
import { NavLink } from "react-router-dom";
const Error = () => {
  return <section class="page_404">
  <div class="error-container">
      <div class="row">	
      <div class="col-sm-12 ">
      <div class="col-sm-10 col-sm-offset-1  text-center">
       
      <div class="four_zero_four_bg">
      
      
      </div>
      
      <div class="contant_box_404">
            <h3 class="h2">
                Look like you're lost
            </h3> 
            <p>the page you are looking for not avaible!</p> 
            <NavLink to='/' style={{ borderRadius: '98px',textDecoration: 'none',background: '#012f3f',padding: '1.1rem 2rem',color: 'white',margin: '2.2rem',}}class="btn link_404 ">Go to Home</NavLink>
      </div>
      </div>
      </div>
      </div>
  </div>
</section>
};

export default Error;

