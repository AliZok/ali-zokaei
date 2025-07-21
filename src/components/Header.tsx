'use client'

import { useState, useEffect } from 'react'
import { HamburgerMenu, CloseSquare } from "iconsax-reactjs"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Header() {

    const [backHeader, setBackHeader] = useState<boolean>(false);
    const [mobileMenu, setMobileMenu] = useState<boolean>(false);
    const pathname = usePathname();
   
    
   
    const [headerItems, setHeaderItems] = useState([
        {
            title: 'Home',
            path: '/',
        },
        {
            title: 'Who We Are',
            path: '/who-we-are',
        },
        {
            title: 'Companies',
            path: '/companies',
        },
        {
            title: 'Our Reach',
            path: '/our-reach',
        },
        // {
        //     title: 'Partners',
        //     path: '/partners',
        // },
        {
            title: 'Services',
            path: '/services',
        },
        {
            title: 'Careers',
            path: '/careers',
        },
        {
            title: 'Contact',
            path: '/contact',
        },])

    const openMobileMenu = () => {
        setMobileMenu(true)
    }
    const closeMobileMenu = () => {
        setMobileMenu(false)
    }
    useEffect(() => {
        const handleScroll = () => {
            // console.log("Scroll position:", window.scrollY);
            if (window.scrollY > 60) {
                setBackHeader(true)
            } else {
                setBackHeader(false)
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div id="main-header" className={`${backHeader && 'bg-[#0b0c02a3]'} Header fixed z-[100] right-0 left-0 w-full `} >
            {/* <div className="max-w-[800px] sm:max-w-[600px] md:max-w-[1200px] m-auto md:px-4 sm:px-2 px-0"> */}
            <div className="my-container px-0">
                <div className="flex w-full items-center justify-between py-2 border-b border-b-[1px] border-gray-700 px-2 md:px-0">
                    <div>
                     
                        <Image
  src="/images/Yello_logo_yellow_rgb.png"
  alt="Yello company logo" 
  width={80}
  height={80}
  className="w-[80px] h-auto"
  quality={75}
  priority={true}
/>
                    </div>
                    <div className=" gap-[2vw] text-white font-[600] hidden lg:flex">
                        {headerItems.map((item) => {
                            return (
                                <Link href={item.path} className={`${item.path == pathname ? 'text-brand' : ''} cursor-pointer hover:text-brand`} key={item.title} prefetch>
                                    {item.title}
                                </Link>
                            )
                        })}
                    </div>
                    <div className='flex lg:hidden'>
                        <div onClick={openMobileMenu} className='cursor-pointer p-1 pr-0 '>
                            <HamburgerMenu color='white' />
                        </div>
                    </div>
                </div>
            </div>
            {
                mobileMenu && <div className='fixed left-0 w-full top-0 bottom-0 bg-[#000000ba] p-3 '>
                    <div className='text-right'>
                        <div onClick={closeMobileMenu} className='inline-block cursor-pointer p-2'>
                            <CloseSquare color='white' />
                        </div>
                    </div>
                    <div className='bg-white h-[88vh] rounded-lg p-4'>
                        {headerItems.map((item) => {
                            return (
                                <Link onClick={closeMobileMenu} href={item.path} className={`${item.path == pathname ? 'text-brand' : ''} cursor-pointer hover:text-brand mb-4 block`} key={item.title} prefetch>
                                    {item.title}
                                </Link>
                            )
                        })}
                    </div>
                </div>
            }

        </div>
    );
}
