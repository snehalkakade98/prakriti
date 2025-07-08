import React,{useEffect} from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import AboutImg1 from '../../../assets/images/about1.jpg';
// import redchili from '../../../assets/images/red_chili.png';
import AboutImg2 from '../../../assets/images/about2.jpg';
import Author from '../../../assets/images/author.png';

import Box from '@mui/material/Box';


import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {

  useEffect(()=>{
   Aos.init({duration:2000});
  }, [])


  return (
    
      <>

<section class="about-section">
<Container maxWidth="lg" >
<Box  sx={{ px: 1 }}  className=''>
<Grid container spacing={2}>

<Grid  xs={12} md={6} lg={5} >

<div class="about-img-wrap">
<img src={AboutImg1} alt="" data-aos="fade-up"    />
<img src={AboutImg2} alt=""    />

<div class="experience  fade-in-bottom"  data-aos="fade-up" >
                        <h3>32+ <span>years of <br/> experience</span></h3>
                    </div>
</div>

</Grid>

<Grid  xs={12} md={12} lg={7} className="mt-5 mt-lg-0">
<div class="section-heading  " >
                    <h3 data-aos="zoom-in" class="mtttt">Welcome to prakritii Highway view !</h3>
                    <h2 data-aos="fade-up">Recognized as one of the <span>leading company!</span></h2>
                    <p>With an extensive experience
of more than <b> 32 years </b> in the
Real Estate Sector, our group of
talented and dynamic real estate
professionals work tirelessly to
deliver projects on time with
efficiency. Tajj Realty have been
pioneering the league of providing
Housing and Corporate Spaces
by offering world-class amenities
to the customers. Be it building
high rise luxury housing spaces
or building Corporate spaces, we
put our heart and soul into the
development of the project and
make sure that it surpasses the
expectations of the clients.</p>
                </div>

                <ul class="about-features">
                    <li class=" fade-in-bottom" data-aos="fade-up" >
                        <div class="about-icon">
                        <i class="fas fa-user-cog"></i>
                        </div>
                        <div class="about-features-content">
                            <h3>Quality services</h3>
                            <p>Construction is a general term meaning the art.</p>
                        </div>
                    </li>
                    <li class=" fade-in-bottom" data-aos="fade-up" >
                        <div class="about-icon">
                        <i class="fas fa-user"></i>
                        </div>
                        <div class="about-features-content">
                            <h3>Skilled developers</h3>
                            <p>Construction is a general term meaning the art.</p>
                        </div>
                    </li>
                </ul>

                <div class="btn-group">
                   
                   <div class="about-author wow fade-in-bottom" >
                   <img src={Author} alt=""    />

                       <h3>Ram Patil <span>CO Founder - CEO</span></h3>
                   </div>
               </div>

</Grid>

</Grid>
</Box>

</Container>

</section>










        {/* <section className='aboutsection'>
        <div class="aniimg1">
          <img src={redchili}/>
        </div>
        <div class="aniimg2">
          <img src={redchili}/>
        </div>
         <Container maxWidth="lg" >
          <div className='sec-title' ><h2>About</h2></div>
         <Grid container spacing={2}>
        <Grid  xs={12} md={6} lg={7} >

              <Box  sx={{ pt: 4 }} className="info">
                <p> <b> "NandManohar Food Products"</b> is a food processing company that has all its processing facilities in-house. It supplies premium products across the global to all segments of market. Our products are formulated and processed under the supervision of a skilled team of professionals by using high quality pure ingredients. Material is procured from reliable and certified vendors of the market in compliance with international quality standards.</p>
              </Box>
        </Grid>
        <Grid   xs={12} md={6} lg={5}>
           <Box sx={{textAlign: 'center'}} >
           <img src={AboutImg} alt="" style={{width:'65%'}}   />
           </Box>
        </Grid>
       
      </Grid>
        </Container>
        </section> */}
      </>
  )
}

export default About
