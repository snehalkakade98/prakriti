import React,{useEffect} from 'react'

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { Form, Input,InputNumber,message,Spin} from 'antd';

// import 'bootstrap/dist/css/bootstrap.min.css';


// import bgPatterns from '../../images/background/15.jpg';

const { TextArea } = Input;



const Contact=()=>{

    useEffect(()=>{
        Aos.init({duration:2000});
       }, [])


    // const [form] = Form.useForm();

    // const onFinish =async (values) => {
    //     var insertData  = values;
    //     console.log(insertData);

    // }

    // const cardData=[
    //     {
    //         Icon:'fas fa-globe-asia',
    //         heading:'Address',
    //         color:'blue',
    //         desc1 : 'A/p: Warananagar,Tal: Panhala, Dist : Kolhapur 416113',
    //         desc2:'',
    //     },
    //     {
    //         Icon:'fas fa-phone-volume',
    //          heading:'Call Us',
    //          color:'green',
    //          desc1 : '+ 91 8421243700',
    //          desc2:'+ 91 7972434303',
    //     },
    //     {
    //         Icon:'fas fa-envelope-open-text',
    //          heading:'Mail Us',
    //          color:'#f39c12',
    //          desc1 : 'info@nandmanoharfoods.com',
    //          desc2:'purchase@nandmanoharfoods.com',
             
    //     },
    //     {
    //         Icon:'fas fa-clock',
    //          heading:'Time',
    //          color:'red',
    //          desc1 : 'Mon - Sat: 09AM to 05 PM',
    //          desc2:'Sunday - Close',
    //     },
    // ]
    return (
         <>


{/* style={{ backgroundImage: `url(${bgPatterns})` }} */}
<section className="offer-section "   >

<div className="bg-pattern"></div>
<Container maxWidth="lg" >
<div className='sec-title' data-aos="zoom-in" ><h2>Get In Touch</h2></div>

<Grid container spacing={2}>

<Grid  xs={12} md={12} lg={6} className="content-column" >
  
<div className="inner-column">
<span className="title">Highlights</span>

<Grid container spacing={2} style={{marginTop:'20px'}}>
<Grid  xs={12} md={12} lg={6}>

<li className="text " style={{display:"flex", gap: "10px", alignItems: "center", marginBottom: "15px" }}>
                        
                        <div className="hlicon"><i className="fas fa-building"></i></div>
                        <div><p className="hltext">G+ 22 Storey Building</p></div>
 
                       </li>

                       <li className="text " style={{display:"flex", gap: "10px", alignItems: "center", marginBottom: "15px" }}>
                        
                        <div className="hlicon"><i className="fas fa-tools"></i></div>
                        <div><p className="hltext">
                        Mivan Construction</p></div>
 
                       </li>


                       <li className="text " style={{display:"flex", gap: "10px", alignItems: "center", marginBottom: "15px" }}>
                        
                        <div className="hlicon"><i className="fas fa-vector-square"></i></div>
                        <div><p className="hltext">Vastu Compliant</p></div>
 
                       </li>

                       <li className="text " style={{display:"flex", gap: "10px", alignItems: "center", marginBottom: "15px" }}>
                        
                        <div className="hlicon"><i className="fas fa-spa"></i></div>
                        <div><p className="hltext">Rooftop Amenities</p></div>
 
                       </li>
</Grid>


<Grid  xs={12} md={12} lg={6}>

<li className="text" style={{display:"flex",gap: "10px", alignItems: "center",marginBottom: "15px"}}>
                        
                        <div className="hlicon"><i className="fas fa-transgender-alt"></i></div>
                        <div><p className="hltext">No View Obstruction</p></div>
 
                       </li>

                       <li className="text" style={{display:"flex",gap: "10px", alignItems: "center",marginBottom: "15px"}}>
                        
                        <div className="hlicon"><i className="fas fa-subway"></i></div>
                        <div><p className="hltext">Great connectivity</p></div>
 
                       </li>

                       <li className="text" style={{display:"flex",gap: "10px", alignItems: "center",marginBottom: "15px"}}>
                        
                        <div className="hlicon"><i className="fas fa-leaf"></i></div>
                        <div><p className="hltext">Attached Garden</p></div>
 
                       </li>

                       <li className="text" style={{display:"flex",gap: "10px", alignItems: "center",marginBottom: "15px"}}>
                        
                        <div className="hlicon"><i className="fas fa-car"></i></div>
                        <div><p className="hltext">Ample Car Parking</p></div>
 
                       </li>

                     
</Grid>
</Grid>



<div className="fact-counter" style={{marginTop:'30px'}} data-aos="fade-up">
<Grid container spacing={2}>
<Grid  xs={12} md={4} lg={4}>

<div className="inner-column" style={{textAlign:'center'}}>
                                        <span className="icon far fa-building" style={{color:"var(--common_color)"}}></span>
                                        <div className="count-box"><span className="count-text" data-speed="3000" data-stop="2017">2017</span></div>
                                        <h4 className="counter-title">Established in the year 2017</h4>
                                    </div>



</Grid>



<Grid  xs={12} md={4} lg={4}>
<div className="inner-column" style={{textAlign:'center'}}>
                                        <span className="icon fas fa-hotel" style={{color:"var(--common_color)"}}></span>
                                        <div className="count-box"><span className="count-text" data-speed="3000" data-stop="1">1</span></div>
                                        <h4 class="counter-title">Local Branches in <br/>City Pune.</h4>
                                    </div>

</Grid>


<Grid  xs={12} md={4} lg={4}>
<div className="inner-column" style={{textAlign:'center'}}>
                                        <span className="icon fas fa-handshake" style={{color:"var(--common_color)"}}></span>
                                        <div className="count-box"><span className="count-text" data-speed="3000" data-stop="8">8</span>k</div>
                                        <h4 class="counter-title">Happy Customer <br/>with our work</h4>
                                    </div>

</Grid>



</Grid>
</div>




</div>


  
  
   </Grid>



   <Grid  xs={12} md={12} lg={6} className="form-column" data-aos="fade-up">
  
   <div class="inner-column">
                        <div class="discount-form">
                            <div class="text">Fill out the form, Our manager will contact you for further details.</div>

           
                       
                          <form role="form" id="Form" action="" method="post">
                                <div className="form-group">
                                    <div className="response"></div>
                                </div>


                                <div className="form-group">
                                   <input type="text" id="userNm" name="userNm" className="username" placeholder="Name *"  onkeypress="return onlyAlphabets(event,this)"  value="" data-parsley-trigger="change"  required />
                                    
                                 
                                    <input type="hidden" className="form-control form-control-sm" id="userId" name="userId"  value="" data-parsley-trigger="change"  required />
                                </div>

                                <div className="form-group">
                                     <input type="text" id="MobNo" name="MobNo" className="username" placeholder="Mobile no *"  onkeypress="return isNumberKey(event,this)"  value="" maxlength="10"  required/>
                                </div>

                                <div className="form-group">
                                     <input type="email" name="emailh" id="emailh" className="email" placeholder="Email *"  value=""  required/>
                                </div>

                                <div className="form-group">
                                     <input type="text" name="propertyType" id="propertyType" className="email" placeholder="Property Type *"  value=""  required/>
                                </div>
                                
                                <div className="form-group">
                                    <textarea name="Requirments" id="Requirments" className="message" placeholder="Requirments"  value=""  required></textarea>
                                </div>
                                
                                <div className="form-group">
                                    <button className="theme-btn btn-style-two" onclick="" type="button" name="save" id="save"><span className="btn-title">Submit Now</span> <span></span><span></span><span></span><span></span></button>
                                </div>

                            </form>

                            </div>
                            </div>

  
  
   </Grid>
   </Grid>



</Container>

</section>

         </>
    )
}
export default Contact;