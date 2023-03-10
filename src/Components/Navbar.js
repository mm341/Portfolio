import logo from '../../public/assets/Navbar/Logo.png'
// import language from '../../public/assets/homeImges/language-selector-color.svg.png'
// 
import { BsFillCaretDownFill } from "react-icons/bs";
// import { useTranslation } from 'react-i18next';
// import { useDispatch, useSelector } from 'react-redux';
// import { changeState } from '../Features/IconsSlice';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

import { FaBars, FaPage4 } from "react-icons/fa";

import { AiOutlineClose } from "react-icons/ai";


import phone from '../../public/assets/FirsNavbar/Phone.png'
import email from '../../public/assets/FirsNavbar/Vector.png'
import addresse from '../../public/assets/FirsNavbar/Vector2.png'
import face from '../../public/assets/FirsNavbar/Facebook.png'
import insta from '../../public/assets/FirsNavbar/Instagram.png'
import twitter from '../../public/assets/FirsNavbar/Twitter.png'
import telegram from '../../public/assets/FirsNavbar/Telegram.png'

import { Link } from 'react-scroll'
function Navbar() {





// const mode=useSelector(state=>state.mode.mode)

// const dispatch =useDispatch();


const [mission,setMission]=useState(false)

const [impact,setImpact]=useState(false)

const [leader,setLeader]=useState(false)

// const handelLanguage=()=>{
//   dispatch(changeState());
//   mode ? i118n.changeLanguage('ar') : i118n.changeLanguage('en')
// }


const{push}=useRouter();

const ourBrands=(e)=>{

  if(e.target){
    setLeader(!leader)
    setImpact(false)
    setMission(false)
  }
   
}


const ourImpact=()=>{
  setImpact(!impact)
  setLeader(false)
  setMission(false)
}

const ourStory=()=>{
  setImpact(false)
  setLeader(false)
  setMission(!mission)
}

const logo1=()=>{
  setImpact(false)
  setLeader(false)
  setMission(false)
  push("/")
}

const leaderShip=()=>{
  
  setLeader(false);

  
  push("/it_services")
}





const staff=()=>{
  push("/programming_services")
  setLeader(false);
}

const staff2=()=>{
  push("/marketing_services")
  setLeader(false);
}

const staff3=()=>{
  push("/request_service")
  setLeader(false);
}


const impact1=()=>{
  
  push("/it")
  setImpact(false);
}

const impact2=()=>{
  
  push("/programming")
  setImpact(false);
}

const impact3=()=>{
  
  push("/marketing")
  setImpact(false);
}


const mission1=()=>{
  
  // navigate("/mission")
  setMission(false);
}


let menuRef=useRef();


useEffect(()=>{
  const handler=(e)=>{
    if(!menuRef?.current?.contains(e.target)){
  
    setLeader(false)

    setImpact(false);
    
    setMission(false);
  }}

  document.addEventListener('mousedown',handler)

  return()=>{
    document.removeEventListener('mousedown',handler)
  }
},[])


  
  
  
  
  
  
  
const [close, SetClose] = useState(false);
 
const leaderShip2=()=>{
  
  SetClose(false);
  
  push("/it_services")
}


const staff2_1=()=>{
  
  SetClose(false);
  
  push("/programming_services")
}

const staff2_2=()=>{
  
  SetClose(false);
  
  push("/marketing_services")
}

const staff2_3=()=>{
  
  SetClose(false);
  
  push("/request_service")
}


  
  return (


    <div     className=' z-[1000] fixed top-0 w-screen   font-Roboto bg-[#1D2F40]  font-bold text-[14px] text-white'>
       

        <div className=' container mx-auto'>
        
        <div className=' w-full mx-auto  flex flex-row items-center justify-between   py-[5px]   '>
          


        {close && (
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, type: "tween" }}
          >
           
            <div
             
              className={
                close
                  ? "z-[1000] w-screen h-screen  md:hidden block absolute top-0 right-0 bg-[#000000ab] text-white text-[18px]"
                  : "hidden"
              }
            >
              <span
                onClick={() => SetClose(false)}
                className=" cursor-pointer absolute right-[7%] top-[30px] text-[35px] text-[#E5CE87]"
              >
                <AiOutlineClose />
              </span>

              <ul className=" flex flex-col gap-[17px]  mx-auto  py-[20px] my-[10px]   absolute left-[20%] top-[70px] ">
                <li
                 onClick={()=>{SetClose(false)
                push("/")
                }}
                  className=" cursor-pointer  hover:text-[#E5CE87] duration-700"
                >
                  homePage
                </li>
                
                <Link to='about'>
                
                <li
                  onClick={()=>SetClose(false)}
                  className=" cursor-pointer  hover:text-[#E5CE87] duration-700"
                >
                about us
                </li>

                </Link>


<Link to='services'>
                <li
                  onClick={()=>SetClose(false)}
                  className=" cursor-pointer  hover:text-[#E5CE87] duration-700"
                >
                  services
                </li>
                </Link>


                <Link to='gallery'>
                <li
                  className=" cursor-pointer  hover:text-[#E5CE87] duration-700"
                  onClick={()=>SetClose(false)}
                >
                gallery
                </li>
                </Link>


                <Link to='brands'>
                <li
                  onClick={()=>SetClose(false)}
                  className=" hover:text-[#E5CE87] duration-700 cursor-pointer"
                >
                  brands
                </li>
                </Link>

                <Link to='events'>
                <li
                  onClick={()=>SetClose(false)}
                  className=" hover:text-[#E5CE87] duration-700 cursor-pointer"
                >
               events
                </li>
                </Link>
                
                <li
                  onClick={()=>{SetClose(false)
                push("/contact")
                }}
                  className=" hover:text-[#E5CE87] duration-700 cursor-pointer"
                >
                  contact us
                </li>
               
              </ul>
            
            </div>
          </motion.div>
        )}





            <Image src={logo} alt='logo' onClick={logo1} className='md:w-[10%] w-[150px] md:h-[70px] h-[80px]   cursor-pointer'/>
          
            <div ref={menuRef} className=' lg:text-[18px] md:text-[16px] lg:w-[80%] md:w-[80%]  hidden relative md:flex flex-row items-center justify-center  xl:gap-[40px] lg:gap-[30px] md:gap-[15px] ' >
          
            <h3 onClick={()=>push("/")}  className=' relative after:content-[""] after:absolute after:bottom-[-7px] after:w-0 hover:after:w-full  after:left-0 after:h-[5px] after:bg-[#716F91] cursor-pointer   opacity-50 hover:opacity-100 after:duration-700 duration-700  capitalize'>Home Page</h3>

          <Link to='about'> <h3   className='relative  after:content-[""] after:absolute after:bottom-[-7px] after:w-0 hover:after:w-full  after:left-0 after:h-[5px] after:bg-[#716F91] cursor-pointer   opacity-50 hover:opacity-100  capitalize after:duration-700 duration-700'>About Us</h3></Link> 




           
           

           <Link to='services'>  <h3   className='after:duration-700   relative after:content-[""] after:absolute after:bottom-[-7px] after:w-0 hover:after:w-full  after:left-0 after:h-[5px] after:bg-[#716F91]  duration-700  cursor-pointer  capitalize  opacity-50 hover:opacity-100'>Services</h3></Link>   
               
             


                
                
                
             
         <Link to='gallery'>     <h3  className='after:duration-700 relative after:content-[""] after:absolute after:bottom-[-7px] after:w-0 hover:after:w-full  after:left-0 after:h-[5px] after:bg-[#716F91]  duration-700 opacity-50 hover:opacity-100  cursor-pointer   capitalize '>Gallery</h3></Link>
               
              
              
                
              

   <Link to='brands'><h3   className='after:duration-700  relative after:content-[""] after:absolute after:bottom-[-7px] after:w-0 hover:after:w-full  after:left-0 after:h-[5px] after:bg-[#716F91] cursor-pointer    capitalize opacity-60 hover:opacity-100 duration-700'>Brands</h3></Link>

   <Link to='events'>  <h3    className='after:duration-700  relative after:content-[""] after:absolute after:bottom-[-7px] after:w-0 hover:after:w-full  after:left-0 after:h-[5px] after:bg-[#716F91] cursor-pointer   capitalize opacity-60 hover:opacity-100 duration-700'>Events</h3></Link>

<h3 onClick={()=>push('/contact')}  className='after:duration-700  after:content-[""] after:absolute after:bottom-[-7px] after:w-0 hover:after:w-full relative  after:left-0 after:h-[5px] after:bg-[#716F91] cursor-pointer   capitalize opacity-60 hover:opacity-100 duration-700'>Contact Us</h3>


           
            </div>
            
            <div className=' md:w-[10%] w-[50%] justify-center gap-[20px] flex flex-row  items-center '>
           
            {/* <Image src={language} alt='' className=' cursor-pointer w-[28px]   object-contain ' /> */}

            <span
                onClick={() => SetClose(true)}
                className=" cursor-pointer md:hidden block text-[30px]"
              >
                <FaBars />
              </span>
               
                </div>
        </div>
        
        
        </div>
    </div>
  )
}

export default Navbar



