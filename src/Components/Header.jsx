import React,{useState} from 'react'
import logo from './../assets/Images/logo.png'
import { HiHome, HiSearch, HiStar } from 'react-icons/hi'
import { FaPlayCircle ,FaTv} from 'react-icons/fa'
import { HiPlus, HiDotsVertical } from 'react-icons/hi'
import HeaderItem from './HeaderItem'

const Header = () => {
    const [toggle,setToggle] = useState(false);
    const menu = [
        { name: 'HOME', icon: HiHome },
        { name: 'SEARCH', icon: HiSearch },
        { name: 'WATCH LIST', icon: HiPlus },
        { name: 'ORIGINALS', icon: HiStar },
        { name: 'MOVIES', icon: FaPlayCircle },
        { name: 'SERIES', icon: FaTv },

    ]

    return (
        <div className='flex justify-between p-5'>
          <div className='flex gap-8 items-center'>
            <img src={logo} className='w-[80px] object-cover md:w-[115px]' alt="Logo" />
            <div className='hidden md:flex gap-8 '>
                {menu.map((item, index) => (
                  <HeaderItem key={index} name={item.name} icon={item.icon}  />
                ))}
            </div>
            <div className='flex gap-5 md:hidden'>
                {menu.map((item, index) =>index<3 && (
                  <HeaderItem key={index} name={''} icon={item.icon}  />
                ))}
                <div className='md:hidden' onClick={()=>setToggle(!toggle)}>
                  <HeaderItem name={''} icon={HiDotsVertical} />
                    {toggle?<div className='absolute mt-3  bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4'>
                      {menu.map((item, index) => index>=3 && (
                      <HeaderItem key={index} name={item.name} icon={item.icon}  />
                      ))}
                    </div>:null}
                </div>
            </div>
            
          </div>
        <img src='https://pics.craiyon.com/2023-10-25/b65f72d6d11a48c1bc560059cc36e31f.webp' className='w-[40px] rounded-full'/>
        </div>
    )
}

export default Header
