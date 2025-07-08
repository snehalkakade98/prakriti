import React,{useEffect} from 'react'

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Aos from 'aos';
import 'aos/dist/aos.css';

import LocationImg from '../../../assets/images/location.png';

const Location = () => {

  useEffect(()=>{
    Aos.init({duration:2000});
   }, [])

  return (
    <div>
      
      <section className="location_section pdd">

      <Container maxWidth="lg" >
      <div className='sec-title' data-aos="zoom-in" ><h2>Location</h2></div>
      <Grid container spacing={2}  style={{marginTop:'30px'}}>

      <Grid  xs={12} md={6} lg={6} >
      <Box  sx={{ px: 1 }}  className=''>

      <img src={LocationImg} data-aos="fade-up" alt=""  style={{width: "100%" ,
    height: "500px"}} className="img-fluid "/>
    </Box>
  </Grid>



  <Grid  xs={12} md={6} lg={6} >
  <Grid container spacing={4}>

  <Grid  xs={12} md={6} lg={6} style={{marginTop:'48px'}} >
  <Box  sx={{ px: 1 }}  className=''>

  <div className="service-item  " data-aos="fade-up">
                    <div className="service-item-inner">
                       
                        <div className="service-content">
                            <div className="service-icon">
                            <i className="fas fa-star"></i>

                            </div>
                            <h3>Entertainment</h3>
                            <p>Janta Market
(1 Minute Walk) <br/>
Sambhaji Park (3 Minute Walk)</p>
                           
                        </div>
                    </div>
                </div>
                </Box>
  </Grid>


  <Grid  xs={12} md={6} lg={6} style={{marginTop:'48px'}} >
  <Box  sx={{ px: 1 }}  className=''>

<div className="service-item  " data-aos="fade-up">
                  <div className="service-item-inner">
                     
                      <div className="service-content">
                          <div className="service-icon">
                          <i className="fas fa-hospital"></i>

                          </div>
                          <h3>Hospitals</h3>
                            <p> Shushrusha Hospital ,

Sai Hospital ,

Krantiveer Mahatma Jyotiba Phule
Hospital
</p>
                         
                      </div>
                  </div>
              </div>
              </Box>
</Grid>

<Grid  xs={12} md={6} lg={6} style={{marginTop:'48px'}} >
<Box  sx={{ px: 1 }}  className=''>

  <div className="service-item  " data-aos="fade-up">
                    <div className="service-item-inner">
                       
                        <div className="service-content">
                            <div className="service-icon">
                            <i className="fas fa-school"></i>

                            </div>
                            <h3>Schools</h3>
                            <p>Vikas College,

Sandesh College
,
Orchids - The International School
,
Abhay International School</p>
                           
                        </div>
                    </div>
                </div>
                </Box>
  </Grid>

  <Grid  xs={12} md={6} lg={6} style={{marginTop:'48px'}}>
  <Box  sx={{ px: 1 }}  className=''>

  <div className="service-item  " data-aos="fade-up">
                    <div className="service-item-inner">
                       
                        <div className="service-content">
                            <div className="service-icon">
                            <i className="fas fa-train"></i>

                            </div>
                            <h3>Connectivity</h3>
                            <p>Eastern Express Highway ,Jogeshwari - Vikhroli Highway</p>
                           
                        </div>
                    </div>
                </div>
                </Box>
  </Grid>

 

  </Grid>


    </Grid>

     </Grid>


</Container>
      </section>
    </div>
  )
}

export default Location
