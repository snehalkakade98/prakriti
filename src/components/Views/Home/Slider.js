import React,{useRef} from 'react'
import { Carousel } from 'antd';
import Container from '@mui/material/Container';
import image1 from '../../../assets/images/banner/photo2.jpg';
import image2 from '../../../assets/images/banner/photo1.jpg';
import image3 from '../../../assets/images/banner/photo3.jpg';
import image4 from '../../../assets/images/banner9.jpg';


import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';



const Slider = () => {
  const slider = useRef(null);
  return (
   <>
         <Container className='slidercontent' maxWidth="xl" sx={{padding:'0px!important'}}>
          {/* <ChevronLeftIcon className='prev' onClick={() => slider.current.next()}/> */}

         <Carousel autoplay ref={slider}>
    <div className="slider_items  ">
    <img src={image1} />
    <div class="black_overlay"></div>
    <div class="sliderheading d-none d-md-block">
                    <p class="lineUp text-white text-raise ">MEET A BETTER STYLE  <br/> OF LIVING </p>
                 
                    </div>
    </div>
    <div className="slider_items  ">
    <img src={image2} />
    <div class="black_overlay"></div>
                    <div class="sliderheading d-none d-md-block">
                    <p class="lineUp text-white  text-raise">THE BEST SECURITY <br/>FOR YOUR BUILDING </p>
                 
                    </div>
    </div>
    <div className="slider_items  ">
    <img src={image3} />

    <div class="black_overlay"></div>
                    <div class="sliderheading d-none d-md-block">
                    <p class="lineUp text-white text-raise ">PROVIDE EFFECTIVE <br/> BUILDING SOLUTIONS </p>
                 
                    </div>

    </div>
    <div className="slider_items  " >
    <img src={image4} />
    <div class="black_overlay"></div>
                    <div class="sliderheading d-none d-md-block">
                    <p class="lineUp text-white text-raise ">PROVIDE EFFECTIVE <br/> BUILDING SOLUTIONS </p>
                 
                    </div>
    </div>
  </Carousel>
  {/* <ChevronRightIcon className='next' onClick={() => slider.current.next()}/> */}

         </Container>
   </>
  )
}

export default Slider
