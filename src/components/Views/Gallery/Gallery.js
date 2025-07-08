import React,{useState, useEffect} from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// import AboutImg from '../../../assets/images/about.png';

import Box from '@mui/material/Box';
import GalleryArray from './GalleryArray';
import CloseIcon from '@mui/icons-material/Close';

import { Card } from 'antd';
// import CropEasy from '../Home/CropEasy';
// import Profile from '../Home/Profile';


import Aos from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {

  useEffect(()=>{
    Aos.init({duration:2000});
   }, [])

  const [imgModel, setImgModel]=useState(false);
  const [tempimgSrc, setTempimgSrc]=useState('');

  const getImg=(ImgSrc)=>{
    setTempimgSrc(ImgSrc);
    setImgModel(true);

  }
 



  return (
    
      <>




        <section className='gallerysection'> 
       
         <Container maxWidth="lg" >
          <div className='sec-title' data-aos="zoom-in" ><h2>Amenities</h2></div>


          <div className={imgModel? "imgModel open" : "imgModel"}>
            <img src={tempimgSrc} alt="" />
            <CloseIcon onClick={()=> setImgModel(false)}/>
          </div>

          <Grid container>
          {
     GalleryArray.map((val,index)=>{
       return (
        <>
     
    
          <Grid   xs={val.xs} md={val.md} lg={val.lg} onClick={()=>getImg(val.ImgSrc)} className='fac' >
         
           


<img  className="amImg" src={val.ImgSrc} alt="" data-aos={val.aos}/>
<div class="imgg_overlay">{val.name}</div>
 
          
          </Grid>

           

        </>
       )
     })
   }
          </Grid>

        </Container>

       
        </section>



      </>
  )
}

export default Gallery;
