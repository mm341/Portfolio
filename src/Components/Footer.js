import Image from 'next/image'
import React from 'react'
import face from '../../public/assets/FirsNavbar/Facebook.png'
import insta from '../../public/assets/FirsNavbar/Instagram.png'
import twitter from '../../public/assets/FirsNavbar/Twitter.png'
import telegram from '../../public/assets/FirsNavbar/Telegram.png'
import logo from '../../public/assets/Navbar/Logo.png'
import phone from '../../public/assets/FirsNavbar/Phone.png'
import email from '../../public/assets/FirsNavbar/Vector.png'
import addresse from '../../public/assets/FirsNavbar/Vector2.png'
import vector from '../../public/assets/Navbar/Vector4.png'
import { Link } from 'react-scroll'
import { useRouter } from 'next/router'
function Footer() {



    const{push}=useRouter()
  return (
    <div className='w-screen bg-[#1D2F40] font-Roboto text-white'>
      
      <div className='container mx-auto py-[50px]'>
       
        <div className='w-full flex md:flex-row md:gap-0 flex-col gap-[30px] justify-between '>
        
        <div className='md:w-[25%] w-[80%] md:mx-0 mx-auto'>
            <div className='  w-[80%]  mx-auto flex flex-col gap-[10px] md:items-start items-center'>
                <Image src={logo} alt='logo'/>
               <span>loremb..............................................................</span>

                <div className=' flex flex-row gap-4'>
<Image src={face} alt=''/>
<Image src={insta} alt=''/>
<Image src={twitter} alt=''/>
<Image src={telegram} alt=''/>

</div>
        </div>
            </div>



            <div className=' md:w-[30%] w-[80%]md:mx-0 mx-auto '>
               
<div  className=' w-full mx-auto flex flex-col gap-[10px]  md:items-start items-center '>



<h3 className=' font-semibold text-[20px]'>
                    Information
                </h3>

                <span className=' flex flex-row items-center gap-[7px]'><Image src={phone} alt=''/>  +201101046666</span>
        <span className=' flex flex-row items-center gap-[7px]'><Image src={email} alt=''/>  info@one2twelve.com</span>
        <span className=' flex flex-row items-center gap-[7px]'><Image src={addresse} alt=''/>  Cairo, 55 Khatem Al-Mursaleen, inside Tele Egypt Factory, In<br/> front of the National Bank of Egypt and El Shabrawy, third floor.</span>

</div>
                
                            </div>


                            <div className=' md:w-[25%] w-[80%] md:mx-0 mx-auto md:items-start items-center flex flex-col gap-[10px] '>
               

                <h3 className=' font-semibold text-[20px]'>
                    Help
                </h3>

              <Link to='about'>  <span  className=' cursor-pointer flex flex-row items-center gap-[5px] hover:scale-105 duration-700'><Image src={vector} alt=''/>Who us ?</span></Link>
       <Link to='services'>  <span className=' cursor-pointer flex flex-row items-center gap-[5px] hover:scale-105 duration-700'><Image src={vector} alt=''/>Our Services</span></Link>
        <Link to='events'> <span className=' cursor-pointer flex flex-row items-center gap-[5px] hover:scale-105 duration-700'><Image src={vector} alt=''/>Our events</span></Link>
        <span onClick={()=>push("/contact")} className=' cursor-pointer flex flex-row items-center gap-[5px] hover:scale-105 duration-700'><Image src={vector} alt=''/>Contac us</span>
                            </div>
       
       
       
       
        </div>
      </div>
    </div>
  )
}

export default Footer
