import {useState } from 'react'

import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
        <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
                <li
                    key={nav.id}
                    className={`font-poppins font-normal cursor-pointer text-[16px] ${index === nav.length - 1 ? 'mr-0' : 'mr-10'} text-white`}
                >
                    <a href="/" className='mr-10'>
                        Home
                    </a>
                    <a href="../../Features.html" className='mr-10'>
                        Features
                    </a>
                    <a href="../../Product.html" className='mr-10'>
                        Product
                    </a>
                    <a href="../../Clients.html" className='mr-10'>
                        Clients
                    </a>
                </li>
            ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
            <img 
                src={toggle ? close : menu} 
                alt="menu"
                className="w-[28px] h-[28px] object-contain"
                onClick={() => setToggle((prev) => !prev)}
            />

            <div
                className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
            >
                <ul className="list-none flex flex-col justify-end items-center flex-1">
                    {navLinks.map((nav, index) => (
                        <li
                            key={nav.id}
                            className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}
                        >
                            <a href="/" className='mb-4'>
                                Home <br />
                            </a>
                            <a href="../../Features.html" className='mb-4'>
                                Features <br />
                            </a>
                            <a href="../../Product.html" className='mb-4'>
                                Product <br />
                            </a>
                            <a href="../../Clients.html" className='mb-4'>
                                Clients
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        
    </nav>
  )
}

export default Navbar