import React,{useEffect} from 'react'
import Container from '@mui/material/Container';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';



import Aos from 'aos';
import 'aos/dist/aos.css';


import Button from '@mui/material/Button';
import { Card } from 'antd';
import ProductArray from './ProductArray';



const { Meta } = Card;


const Product = () => {


  useEffect(()=>{
    Aos.init({duration:2000});
   }, [])

   
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1200 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 1200, min: 768 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 768, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


  return (
    <>
   
       <section className='productsection'>
       <div className='sec-title' data-aos="zoom-in" ><h2>Our Projects</h2></div>
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
     ProductArray.map((val,index)=>{
       return (
        <>
     
      
          <Grid key={index}  xs={12} md={12} lg={12} >
          <Box  sx={{ px: 1 }}  className=''>
          


<div className="project-item   mx-2" data-aos="fade-up">
                        <div className="project-thumb project-view">
                            <a className="venobox vbox-item" href={val.product_img} data-gall="projects"><img src={val.product_img} alt="img"/></a>
                        </div>
                        <div className="project-content">
                            <a href="javascript:void(0)" className="category"> {val.productnm}</a>
                            <h3><a href="javascript:void(0)">{val.description}</a></h3>
                        </div>
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

export default Product;
