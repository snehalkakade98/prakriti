import React,{useEffect} from 'react'

import Container from '@mui/material/Container';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import bgPattern from '../../../assets/images/bg_pattern_14.png';
import amentiesBg from '../../../assets/images/amentiesBg.jpg';


import Aos from 'aos';
import 'aos/dist/aos.css';


import Button from '@mui/material/Button';
import { Card } from 'antd';
// import ProductArray from './ProductArray';
import { InternalAmenties } from '../Home/ProductArray'; 




const { Meta } = Card;


const Internal_Amenties = () => {

  useEffect(()=>{
    Aos.init({duration:2000});
   }, [])

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1200 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 1200, min: 768 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 768, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


  return (
    <>
   
       <section className='productsection' style={{ backgroundImage: `url(${amentiesBg})` }}>
       <div className='sec-title' data-aos="zoom-in"><h2>Internal Amenties</h2></div>
       <Container maxWidth="lg" >
           
       <Carousel 
       responsive={responsive}
        autoPlay={true} 
        autoPlaySpeed={2000} 
         showDots={false}
         slidesToSlide={1}
         swipeable
         keyBoardControl
         infinite
         arrows={false}
       >
      
      

       {
     InternalAmenties.map((val,index)=>{
       return (
        <>
     
    
          <Grid key={index}  xs={12} md={12} lg={12} >
          <Box  sx={{ px: 1 }}  className='amenities_content'>
          



<div className="service-box2  mx-2  e" data-aos="fade-up" style={{ backgroundImage: `url(${bgPattern})` }}>
    
<div className="service-box2_content">
  <div className="service-box2_icon">
   
   <span class="icons">{val.Icon}</span> 
</div>
    
    <h3 className="service-box2_title">
        
    <a href="javascript:void(0)" tabindex="0">{val.name} </a></h3>
    
  
 <ul className="service-box2_text">
    <li>{val.first_li}  </li>
    <li>{val.second_li}</li>
    <li>{val.third}</li>
 </ul>        

</div>

<a href="#" className="service-box2_btn background-image"  tabindex="0">READ MORE<i className="fas fa-arrow-right"></i></a>
</div>


          </Box>
          </Grid>

           
        
        </>
       )
     })
   }
       
          
      
      
        </Carousel>
        </Container>
       </section>
    </>
  )
}

export default Internal_Amenties;
