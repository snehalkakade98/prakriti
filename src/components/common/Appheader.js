import React, { useState } from 'react';
import {  Menu,Anchor, Drawer ,Dropdown } from 'antd';
import { NavLink } from 'react-router-dom';



 import Container from '@mui/material/Container';
 import Button from '@mui/material/Button';
 
 import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
 import logo from '../../assets/images/logo.png';
 import Upper_header from '../common/Upper_header';
//  const { Link } = Anchor;
//  const items = [
//     {
//       key: '1',
//       label: (
//         <NavLink className='link' to='/gallery'><span className='fas fa-home icon'> </span> Image Gallery</NavLink>
//       ),
//     },
//     {
//       key: '2',
//       label: (
//         <NavLink className='link' to='/user/Admin'><span className='fas fa-home icon'> </span> Video Gallery</NavLink>
//       ),
//     },
    
//   ];
const Appheader = () => {

  // navbar collaps 
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };




  return (
   



    <Container maxWidth="xl">



    <Container maxWidth="lg" className='navbar'>

   
      <div className='header'>
      <div className="logo" >
        <a href='#'> <img src={logo} alt="logo"  /> </a>
      </div>
     
    

{/*  desktop menu start */}

  <div className="mobileHidden">
    <Anchor targetOffset="65">
          

     <div className='menus'>
      <NavLink className='link link1' to='/'>
        <span className='fas fa-home icon'> </span> Home</NavLink>
        </div>
          <div className='menus'><NavLink className='link link1'  to='/about'><span className='fas fa-user icon'> </span> About</NavLink></div>

           {/*<div className='menus'>
          <Dropdown
        menu={{
          items,
        }}
        placement="bottom"
      >
            <NavLink className='link' to='/gallery'><span className='fas fa-user icon'> </span> Gallery</NavLink></Dropdown></div> */}


          <div className='menus'><NavLink className='link link1' to='/project'><span className='fas fa-building icon'> </span> Projects</NavLink></div>

          <div className='menus'><NavLink className='link link1' to='/Amenities'><span className='fas fa-camera-retro'> </span> Amenities</NavLink></div>

          <div className='menus'><NavLink className='link link1' to='/contact'><span className='fas fa-envelope icon'> </span> Contact</NavLink></div>
  </Anchor>
      </div>

      
{/*  mobile menu start */}
<div className="mobileVisible">
{/* <Button type="primary" > */}
<Button variant="text">
<FormatAlignRightIcon  onClick={showDrawer}  style={{color:'white',display:'flex'}} />

</Button>
      {/* </Button> */}
     
      <Drawer   placement="left" closable={false} onClose={onClose} visible={visible}>
        
      <div className="logo" style={{textAlign:'center',paddingBottom:'34px'}} >
        <a href='#'> <img src={logo} alt="logos" height={56}  /> </a>
      </div>
      <Anchor targetOffset="65">
           

            <div className='menus'><NavLink className='link linkmob'  to='/'><span className='fas fa-home icon'> </span> Home</NavLink></div>

          <div className='menus'><NavLink className='link linkmob'  to='/about'><span className='fas fa-user icon'> </span> About</NavLink></div>

          <div className='menus'><NavLink className='link linkmob'  to='/project'><span className='fas fa-building icon'> </span> Projects</NavLink></div>

          <div className='menus'><NavLink className='link linkmob'  to='/Amenities'><span className='fas fa-camera-retro'> </span> Amenities</NavLink></div>

          <div className='menus'><NavLink className='link linkmob'  to='/contact'><span className='fas fa-envelope icon'> </span> Contact</NavLink></div>
           
  </Anchor>
      </Drawer>
   
      </div>
      </div>
  
      </Container>
      
      </Container>

  )
}

export default Appheader

