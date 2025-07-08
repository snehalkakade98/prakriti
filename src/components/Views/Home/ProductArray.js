import Image1 from '../../../assets/images/project/project-1.jpg';
import Image2 from '../../../assets/images/project/project10.jpg';
import Image3 from '../../../assets/images/project/project9.jpg';
import Image4 from '../../../assets/images/project/project4.jpg';
import Image5 from '../../../assets/images/project/project5.jpg';


import BedIcon from '@mui/icons-material/Bed';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import BathtubIcon from '@mui/icons-material/Bathtub';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalParkingIcon from '@mui/icons-material/LocalParking';

const ProductArray = [
    {
        description:"Belewadi ,1 BHK ,2BHK.",
        productnm:"Tech Park",
        product_img:Image1

    },
    {
        description:"Kaylyan 1RK,1BHK,2BHK.",
        productnm:"Pride Purple",
        product_img:Image2


    },
    {
        description:"Kothrud, 2BHK,3BHK",
        productnm:"Yash Ones",
        product_img:Image3


    },
    {
        description:"Wakad, 1BHK,2BHK.",
        productnm:"Avani",
        product_img:Image4


    },
    {
        description:"Satara, 1BHK,2BHK,3BHK.",
        productnm:"Park Express",
        product_img:Image5


    },
    
   
    
   
];



const InternalAmenties = [
    {
        
        name:"ROOM FACILITY",
        Icon:<BedIcon/>,
        first_li:'Premium vitrified tiles',
        second_li:'Branded door lock & video door phone',
        third:'Telephone intercom system'

        
    },
    {
        
        name:"DOORS & WINDOWS",
        Icon:<MeetingRoomIcon/>,
        first_li:'Wooden door frames',
        second_li:'Anodised/powder coated aluminium sliding',
        third:'Gypsum finished internal walls'

        
    },
    {
        
        name:"BATH & WC",
        Icon:<BathtubIcon/>,
        first_li:'Quality concealed plumbing',
        second_li:'Designer wall tiles with anti-skid floor tiles',
        third:'Granite E-slab door frame'

        
    },
    {
        
        name:"CAR PARK",
        Icon:<LocalParkingIcon/>,
        first_li:'Parking & electrical charging system on the ground floor',
        second_li:'Cycle stand & bike stand',
        third:''

        
    },

    {
        
        name:"KITCHEN FACILITY",
        Icon:<RestaurantIcon/>,
        first_li:'Granite / E-slab kitchen platform',
        second_li:'Branded SS sinkes with anti-skid floor tiles',
        third:'Provision for purifier'

        
    },
    
    
   
    
   
];
export default ProductArray;
export { InternalAmenties };
