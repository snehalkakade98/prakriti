import React, { useState } from 'react';
import {  Menu,Anchor, Drawer ,Dropdown } from 'antd';
import { NavLink } from 'react-router-dom';



 import Container from '@mui/material/Container';
 import Grid from '@mui/material/Grid';
 import Button from '@mui/material/Button';
 
 import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
 import logo from '../../assets/images/logo.png';

const Upper_header = () => {

  // navbar collaps 
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };




  return (
   



    <Container maxWidth="xl" className='header-top tophead'>



    <Container maxWidth="lg" className=''>

   
    <Grid container spacing={2}>
    <Grid  xs={12} md={6} lg={8} >

    
    <div className="top1">
      <div className=' child child1'><span className=" fas fa-phone-volume" ></span><a href="tel:+91 9876543210">+91 9876543210</a></div>
   
      <div className=' child child2'><span className="fas fa-hand-point-right" ></span><a href="#"><button>Booking Now</button></a></div>

      <div className=' child child3'><span className=" fas fa-envelope" ></span><a href="mailto:abc@gmail.com">abc@gmail.com</a></div>
    </div>

      </Grid>

      <Grid  xs={12} md={6} lg={4} >

      <ul className=" social-icon-one clearfix">

                    <li><a href="#"style={{background: "#3b5998"}}><i className="fab fa-facebook-f"></i></a></li>

                    <li><a href="#" style={{background: "#1DA1F2"}}  ><i className="fab fa-twitter" ></i></a></li>
                    <li><a href="#" style={{background: "#4285F4"}} ><i className="fab fa-google-plus-g" ></i></a></li>
                    <li><a href="#"  style={{background: "#FF0000"}}><i className="fab fa-youtube" ></i></a></li>
                    <li><a href="#"  style={{background: "#0072b1"}} ><i className="fab fa-linkedin-in" ></i></a></li>
                </ul>

      </Grid>
      </Grid>
  
      </Container>
      
      </Container>

  )
}

export default Upper_header

