"use client"


import BrandSection from "@/components/partners/BrandSection"
import SEO from '@/components/SEO';
import ScrollToTop from '@/components/goTopScroll';
import { useState } from 'react'
import Image from 'next/image'
import { title } from "process";
import { ChevronDown, ChevronRight, Triangle } from "lucide-react"
import { div } from "framer-motion/client";
import { Collapse } from "@/components/Collaps"

interface SlideDownItem {
    id: string
    title: string
    content: React.ReactNode
    isOpen?: boolean
}

export default function Services() {
    const [activeTabIndex, setActiveTabIndex] = useState(0)
    const [activeChildIndex, setActiveChildIndex] = useState(0)
    const TabItems = [
        {
            title: "Key Account Management Services",
            icon: "https://www.abudawood.com/wp-content/themes/abudawood/assets/img/icons/keyaccount_black.png",
            iconActive: "https://www.abudawood.com/wp-content/themes/abudawood/assets/img/icons/keyaccount_white.png",
            isActive: true,
        },
        {
            title: "Retail Sales Services",
            icon: "https://www.abudawood.com/wp-content/themes/abudawood/assets/img/icons/retailsales_black.png",
            iconActive: "https://www.abudawood.com/wp-content/themes/abudawood/assets/img/icons/keyaccount_white.png",
            isActive: false,
        },
        {
            title: "Van Sales Services",
            iconActive: "https://www.abudawood.com/wp-content/themes/abudawood/assets/img/icons/van_white.png",
            icon: "https://www.abudawood.com/wp-content/themes/abudawood/assets/img/icons/van_black.png",
            isActive: false,
        },
        {
            title: "Logistics Services",
            iconActive: "https://www.abudawood.com/wp-content/themes/abudawood/assets/img/icons/logisitcis_white.png",
            icon: "https://www.abudawood.com/wp-content/themes/abudawood/assets/img/icons/logisitcis_black.png",
            isActive: false,
        },
        {
            title: "Hello World",
            iconActive: "https://www.abudawood.com/wp-content/themes/abudawood/assets/img/icons/merchandise_white.png",
            icon: "https://www.abudawood.com/wp-content/themes/abudawood/assets/img/icons/merchandise_black.png",
            isActive: false,
        },
    ]

    function activeTab(item, index) {
        setActiveTabIndex(index)
        setActiveChildIndex(0)

    }
    function activeSection(number) {
        setActiveChildIndex(number)
    }

    const [slideDownItems] = useState<SlideDownItem[]>([
        {
            id: "communication",
            title: "Enhancing Your Business Relationships",
            content: (
                <div className="p-4 space-y-3">
                    <p>Our communication strategy ensures that all stakeholders are kept informed through:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Regular progress reports and updates</li>
                        <li>Scheduled review meetings with key decision makers</li>
                        <li>Transparent sharing of performance metrics</li>
                        <li>Continuous feedback loops for service improvement</li>
                    </ul>
                </div>
            ),
            isOpen: false,
        },
        {
            id: "approach",
            title: "Efficient and Strategic Approach",
            content: (
                <div className="p-4 space-y-3">
                    <p>We optimize resource allocation and strategic planning through:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Data-driven decision making processes</li>
                        <li>Streamlined operational workflows</li>
                        <li>Proactive problem identification and resolution</li>
                        <li>Strategic alignment with your business objectives</li>
                    </ul>
                </div>
            ),
            isOpen: false,
        },
    ])


    const [slideDownItems2] = useState<SlideDownItem[]>([
        {
            id: "communication",
            title: "Hello test",
            content: (
                <div className="p-4 space-y-3">
                    <p>Our communication strategy ensures that all stakeholders are kept informed through:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Regular progress reports and updates</li>
                        <li>Scheduled review meetings with key decision makers</li>
                        <li>Transparent sharing of performance metrics</li>
                        <li>Continuous feedback loops for service improvement</li>
                    </ul>
                </div>
            ),
            isOpen: false,
        },
        {
            id: "approach",
            title: "Efficient and Strategic Approach",
            content: (
                <div className="p-4 space-y-3">
                    <p>We optimize resource allocation and strategic planning through:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Data-driven decision making processes</li>
                        <li>Streamlined operational workflows</li>
                        <li>Proactive problem identification and resolution</li>
                        <li>Strategic alignment with your business objectives</li>
                    </ul>
                </div>
            ),
            isOpen: false,
        },
    ])


    return (
        <>
            <SEO
                title="Caspian"
                description="Learn about our mission and team"
                keywords="about, company, mission"
                url="https://domain.com"
            />

            <div className="Services relative">
                <main className="relative pb-10">
                    <div className="">
                        <div className="min-h-[100vh] w-full">
                            <div className="embla overflow-hidden">
                                <div className="embla__container flex">

                                    <div className="embla__slide flex-[0_0_100%] min-w-0 relative h-[100vh] text-white" >
                                        <div
                                            data-aos="fade-down"
                                            data-aos-delay="100"
                                            className='absolute w-full z-10 left-[75%] md:left-[50%] bottom-[10%] translate-[-50%] md:translate-x-[-50%] translate-x-[-80%]'
                                        >
                                            <div className='text-white my-container'>
                                                <div className='px-[10%]'>
                                                    <div className='text-[28px] md:text-[37px] font-bold max-w-[800px]'>
                                                        <div className=''>
                                                            Unlocking Strategic Excellence
                                                        </div>
                                                        <div className='h-[4px] w-[220px] bg-brand'></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='Square z-10 absolute left-[55%] bottom-[90px] bg-brand w-[20px] h-[20px] rotate-45'></div>
                                        <Image
                                            src="/images/test/car-test.webp"
                                            alt="service"
                                            fill
                                            className="object-cover"
                                            sizes="100vw"
                                            quality={90}
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex justify-center flex-col md:!flex-row">
                            {
                                TabItems.map((item, index) => (
                                    <div onClick={() => activeTab(item, index)} key={index} className={`${index == activeTabIndex ? 'bg-black text-white' : 'bg-[#e3e3e3]'} relative flex-1 flex-auto`}>
                                        <div className="flex gap-3 items-center justify-start md:justify-center py-3 md:py-10 px-2 cursor-pointer">
                                            <div>
                                                {
                                                    index == activeTabIndex ? (
                                                    <Image
                                                        src={item.iconActive}
                                                        alt={`${item.name} icon`}
                                                        width={50}
                                                        height={50}  
                                                        className="w-[50px] h-[50px]" 
                                                        quality={60} 
                                                        loading="lazy" 
                                                        />
                                                    ) : (
                                                    <Image
                                                        src={item.icon}
                                                        alt={`${item.name} icon`}
                                                        width={50}
                                                        height={50}  
                                                        className="w-[50px] h-[50px]" 
                                                        quality={60} 
                                                        loading="lazy" 
                                                        />
                                                    )
                                                }
                                               
                                            </div>
                                            <div>{item.title}</div>
                                        </div>
                                        {
                                            item.title != "Hello World" && (
                                                <div>
                                                    <div className="Square z-10 absolute right-[-10px] bottom-[37%] translate-y-[-50%] bg-brand w-[20px] h-[20px] rotate-45"></div>
                                                    <div className="Square z-9 absolute right-[-2px] bg-white w-[3px] h-[80px] !bottom-[-17px] translate-y-[-50%] "></div>
                                                </div>
                                            )
                                        }

                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="my-container">
                        <div className="pt-[60px]">
                            {
                                (activeTabIndex == 0) && (
                                    <div className="mb-4">
                                        {
                                            slideDownItems.map((item) =>
                                            (
                                                <div key={item.id} className="mb-8 pb-6">
                                                    <Collapse
                                                        trigger={(isOpen) => (
                                                            <div className="flex items-center gap-2">
                                                                <div
                                                                    className={`transition-all duration-300 ease-in-out w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[20px] border-t-yellow-400 ${isOpen
                                                                        ? ""
                                                                        : "rotate-[-90deg]"
                                                                        }`}
                                                                />
                                                                <h2 className="text-xl font-semibold text-gray-900">{item.title}</h2>
                                                            </div>
                                                        )}
                                                        defaultOpen={item.isOpen}
                                                        className="w-full"
                                                    >
                                                        <div className="pt-6">
                                                            <div className="">
                                                                <div className="flex gap-5 mb-3">
                                                                    <div onClick={() => activeSection(0)} className={`relative cursor-pointer h-[110px] w-[300px]  flex justify-center items-center ${activeChildIndex == 0 ? 'bg-amber-300' : 'bg-gray-200'}`}>
                                                                        <div className="font-bold">
                                                                            Sale Drivers
                                                                        </div>

                                                                        <div className="absolute top-0 left-[25px] transition-all duration-300 ease-in-out w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[16px] border-t-white">
                                                                        </div>
                                                                    </div>
                                                                    <div onClick={() => activeSection(0.1)} className={`relative cursor-pointer h-[110px] w-[300px]  flex justify-center items-center ${activeChildIndex == 0.1 ? 'bg-amber-300' : 'bg-gray-200'}`}>
                                                                        <div className="font-bold">
                                                                            Comperhensive
                                                                        </div>
                                                                        <div className="absolute top-0 left-[25px] transition-all duration-300 ease-in-out w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[16px] border-t-white">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {activeChildIndex == 0 ? (
                                                                    <div className="">
                                                                        We focus on enhancing all aspects of your brand's sales performance at retail locations.
                                                                    </div>
                                                                ) :
                                                                    (
                                                                        <div className="pt-4">
                                                                            <h3 className="mb-4 font-bold text-xl">Our team is equipped to</h3>
                                                                            <div>
                                                                                <div className="grid grid-cols-4 gap-3">
                                                                                    <div>
                                                                                        <div className="w-[40px] h-[3px] bg-amber-300 mb-1"></div>
                                                                                        <div>
                                                                                            Introduce products to retailers.
                                                                                        </div>
                                                                                    </div>
                                                                                    <div>
                                                                                        <div className="w-[40px] h-[3px] bg-amber-300 mb-1"></div>
                                                                                        <div>
                                                                                            Introduce products to retailers.
                                                                                        </div>
                                                                                    </div>
                                                                                    <div>
                                                                                        <div className="w-[40px] h-[3px] bg-amber-300 mb-1"></div>
                                                                                        <div>
                                                                                            Introduce products to retailers.
                                                                                        </div>
                                                                                    </div>
                                                                                    <div>
                                                                                        <div className="w-[40px] h-[3px] bg-amber-300 mb-1"></div>
                                                                                        <div>
                                                                                            Introduce products to retailers.
                                                                                        </div>
                                                                                    </div>
                                                                                    <div>
                                                                                        <div className="w-[40px] h-[3px] bg-amber-300 mb-1"></div>
                                                                                        <div>
                                                                                            Introduce products to retailers.
                                                                                        </div>
                                                                                    </div>
                                                                                    <div>
                                                                                        <div className="w-[40px] h-[3px] bg-amber-300 mb-1"></div>
                                                                                        <div>
                                                                                            Introduce products to retailers.
                                                                                        </div>
                                                                                    </div>

                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    )

                                                                }

                                                            </div>
                                                        </div>
                                                    </Collapse>
                                                </div>
                                            )
                                            )
                                        }


                                    </div>

                                )
                            }
                            {

                                activeTabIndex == 1 && (
                                    <div className="mb-4">
                                        {
                                            slideDownItems2.map((item) =>
                                            (
                                                <div key={item.id} className="mb-8 pb-6">
                                                    <Collapse
                                                        trigger={(isOpen) => (
                                                            <div className="flex items-center gap-2">
                                                                <div
                                                                    className={`transition-all duration-300 ease-in-out w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[20px] border-t-yellow-400 ${isOpen
                                                                        ? ""
                                                                        : "rotate-[-90deg]"
                                                                        }`}
                                                                />
                                                                <h2 className="text-xl font-semibold text-gray-900">{item.title}</h2>

                                                            </div>
                                                        )}
                                                        defaultOpen={item.isOpen}
                                                        className="w-full"
                                                    >
                                                        <div className="pt-6">
                                                            <div className="">
                                                                <div className="flex gap-5 mb-3">
                                                                    <div onClick={() => activeSection(0)} className={`cursor-pointer h-[110px] w-[300px]  flex justify-center items-center ${activeChildIndex == 0 ? 'bg-amber-300' : 'bg-gray-200'}`}>
                                                                        <div className="font-bold">
                                                                            Sale Drivers
                                                                        </div>
                                                                    </div>
                                                                    <div onClick={() => activeSection(0.1)} className={`cursor-pointer h-[110px] w-[300px]  flex justify-center items-center ${activeChildIndex == 0.1 ? 'bg-amber-300' : 'bg-gray-200'}`}>
                                                                        <div className="font-bold">
                                                                            Comperhensive
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {activeChildIndex == 0 ? (
                                                                    <div className="">
                                                                        We focus on enhancing all aspects of your brand's sales performance at retail locations.
                                                                    </div>
                                                                ) :
                                                                    (
                                                                        <div className="pt-4">
                                                                            <h3 className="mb-4 font-bold text-xl">Our team is equipped to</h3>
                                                                            <div>
                                                                                <div className="grid grid-cols-4 gap-3">
                                                                                    <div>
                                                                                        <div className="w-[40px] h-[3px] bg-amber-300 mb-1"></div>
                                                                                        <div>
                                                                                            Introduce products to retailers.
                                                                                        </div>
                                                                                    </div>
                                                                                    <div>
                                                                                        <div className="w-[40px] h-[3px] bg-amber-300 mb-1"></div>
                                                                                        <div>
                                                                                            Introduce products to retailers.
                                                                                        </div>
                                                                                    </div>
                                                                                    <div>
                                                                                        <div className="w-[40px] h-[3px] bg-amber-300 mb-1"></div>
                                                                                        <div>
                                                                                            Introduce products to retailers.
                                                                                        </div>
                                                                                    </div>
                                                                                    <div>
                                                                                        <div className="w-[40px] h-[3px] bg-amber-300 mb-1"></div>
                                                                                        <div>
                                                                                            Introduce products to retailers.
                                                                                        </div>
                                                                                    </div>
                                                                                    <div>
                                                                                        <div className="w-[40px] h-[3px] bg-amber-300 mb-1"></div>
                                                                                        <div>
                                                                                            Introduce products to retailers.
                                                                                        </div>
                                                                                    </div>
                                                                                    <div>
                                                                                        <div className="w-[40px] h-[3px] bg-amber-300 mb-1"></div>
                                                                                        <div>
                                                                                            Introduce products to retailers.
                                                                                        </div>
                                                                                    </div>

                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    )

                                                                }

                                                            </div>
                                                        </div>
                                                    </Collapse>
                                                </div>
                                            )
                                            )
                                        }


                                    </div>
                                )
                            }
                            {
                                activeTabIndex == 2 && (
                                    <div className="mb-4">
                                        {
                                            slideDownItems.map((item) =>
                                            (
                                                <div key={item.id} className="mb-8 pb-6">
                                                    <Collapse
                                                        trigger={(isOpen) => (
                                                            <div className="flex items-center gap-2">
                                                                <div
                                                                    className={`transition-all duration-300 ease-in-out w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[20px] border-t-yellow-400 ${isOpen
                                                                        ? ""
                                                                        : "rotate-[-90deg]"
                                                                        }`}
                                                                />
                                                                <h2 className="text-xl font-semibold text-gray-900">{item.title}</h2>

                                                            </div>
                                                        )}
                                                        defaultOpen={item.isOpen}
                                                        className="w-full"
                                                    >
                                                        <div className="pt-6">
                                                            <div className="">
                                                                <div className="flex gap-5 mb-3">
                                                                    <div onClick={() => activeSection(0)} className={`cursor-pointer h-[110px] w-[300px]  flex justify-center items-center ${activeChildIndex == 0 ? 'bg-amber-300' : 'bg-gray-200'}`}>
                                                                        <div className="font-bold">
                                                                            Sale Drivers
                                                                        </div>
                                                                    </div>
                                                                    <div onClick={() => activeSection(0.1)} className={`cursor-pointer h-[110px] w-[300px]  flex justify-center items-center ${activeChildIndex == 0.1 ? 'bg-amber-300' : 'bg-gray-200'}`}>
                                                                        <div className="font-bold">
                                                                            Comperhensive
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {activeChildIndex == 0 ? (
                                                                    <div className="">
                                                                        We focus on enhancing all aspects of your brand's sales performance at retail locations.
                                                                    </div>
                                                                ) :
                                                                    (
                                                                        <div className="pt-4">
                                                                            <h3 className="mb-4 font-bold text-xl">Our team is equipped to</h3>
                                                                            <div>
                                                                                <div className="grid grid-cols-4 gap-3">
                                                                                    <div>
                                                                                        <div className="w-[40px] h-[3px] bg-amber-300 mb-1"></div>
                                                                                        <div>
                                                                                            Introduce products to retailers.
                                                                                        </div>
                                                                                    </div>
                                                                                    <div>
                                                                                        <div className="w-[40px] h-[3px] bg-amber-300 mb-1"></div>
                                                                                        <div>
                                                                                            Introduce products to retailers.
                                                                                        </div>
                                                                                    </div>
                                                                                    <div>
                                                                                        <div className="w-[40px] h-[3px] bg-amber-300 mb-1"></div>
                                                                                        <div>
                                                                                            Introduce products to retailers.
                                                                                        </div>
                                                                                    </div>
                                                                                    <div>
                                                                                        <div className="w-[40px] h-[3px] bg-amber-300 mb-1"></div>
                                                                                        <div>
                                                                                            Introduce products to retailers.
                                                                                        </div>
                                                                                    </div>
                                                                                    <div>
                                                                                        <div className="w-[40px] h-[3px] bg-amber-300 mb-1"></div>
                                                                                        <div>
                                                                                            Introduce products to retailers.
                                                                                        </div>
                                                                                    </div>
                                                                                    <div>
                                                                                        <div className="w-[40px] h-[3px] bg-amber-300 mb-1"></div>
                                                                                        <div>
                                                                                            Introduce products to retailers.
                                                                                        </div>
                                                                                    </div>

                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    )

                                                                }

                                                            </div>
                                                        </div>
                                                    </Collapse>
                                                </div>
                                            )
                                            )
                                        }


                                    </div>
                                )
                            }
                            {
                                activeTabIndex == 3 && (
                                    <div className="mb-4">
                                        {
                                            slideDownItems2.map((item) =>
                                            (
                                                <div key={item.id} className="mb-8 pb-6">
                                                    <Collapse
                                                        trigger={(isOpen) => (
                                                            <div className="flex items-center gap-2">
                                                                <div
                                                                    className={`transition-all duration-300 ease-in-out w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[20px] border-t-yellow-400 ${isOpen
                                                                        ? ""
                                                                        : "rotate-[-90deg]"
                                                                        }`}
                                                                />
                                                                <h2 className="text-xl font-semibold text-gray-900">{item.title}</h2>

                                                            </div>
                                                        )}
                                                        defaultOpen={item.isOpen}
                                                        className="w-full"
                                                    >
                                                        <div className="pt-6">
                                                            <div className="">
                                                                <div className="flex gap-5 mb-3">
                                                                    <div onClick={() => activeSection(0)} className={`cursor-pointer h-[110px] w-[300px]  flex justify-center items-center ${activeChildIndex == 0 ? 'bg-amber-300' : 'bg-gray-200'}`}>
                                                                        <div className="font-bold">
                                                                            Sale Drivers
                                                                        </div>
                                                                    </div>
                                                                    <div onClick={() => activeSection(0.1)} className={`cursor-pointer h-[110px] w-[300px]  flex justify-center items-center ${activeChildIndex == 0.1 ? 'bg-amber-300' : 'bg-gray-200'}`}>
                                                                        <div className="font-bold">
                                                                            Comperhensive
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {activeChildIndex == 0 ? (
                                                                    <div className="">
                                                                        We focus on enhancing all aspects of your brand's sales performance at retail locations.
                                                                    </div>
                                                                ) :
                                                                    (
                                                                        <div className="pt-4">
                                                                            <h3 className="mb-4 font-bold text-xl">Our team is equipped to</h3>
                                                                            <div>
                                                                                <div className="grid grid-cols-4 gap-3">
                                                                                    <div>
                                                                                        <div className="w-[40px] h-[3px] bg-amber-300 mb-1"></div>
                                                                                        <div>
                                                                                            Introduce products to retailers.
                                                                                        </div>
                                                                                    </div>
                                                                                    <div>
                                                                                        <div className="w-[40px] h-[3px] bg-amber-300 mb-1"></div>
                                                                                        <div>
                                                                                            Introduce products to retailers.
                                                                                        </div>
                                                                                    </div>
                                                                                    <div>
                                                                                        <div className="w-[40px] h-[3px] bg-amber-300 mb-1"></div>
                                                                                        <div>
                                                                                            Introduce products to retailers.
                                                                                        </div>
                                                                                    </div>
                                                                                    <div>
                                                                                        <div className="w-[40px] h-[3px] bg-amber-300 mb-1"></div>
                                                                                        <div>
                                                                                            Introduce products to retailers.
                                                                                        </div>
                                                                                    </div>
                                                                                    <div>
                                                                                        <div className="w-[40px] h-[3px] bg-amber-300 mb-1"></div>
                                                                                        <div>
                                                                                            Introduce products to retailers.
                                                                                        </div>
                                                                                    </div>
                                                                                    <div>
                                                                                        <div className="w-[40px] h-[3px] bg-amber-300 mb-1"></div>
                                                                                        <div>
                                                                                            Introduce products to retailers.
                                                                                        </div>
                                                                                    </div>

                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    )

                                                                }

                                                            </div>
                                                        </div>
                                                    </Collapse>
                                                </div>
                                            )
                                            )
                                        }


                                    </div>
                                )
                            }
                            {
                                activeTabIndex == 4 && (
                                    <div className="mb-4">
                                        {
                                            slideDownItems.map((item) =>
                                            (
                                                <div key={item.id} className="mb-8 pb-6">
                                                    <Collapse
                                                        trigger={(isOpen) => (
                                                            <div className="flex items-center gap-2">
                                                                <div
                                                                    className={`transition-all duration-300 ease-in-out w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[20px] border-t-yellow-400 ${isOpen
                                                                        ? ""
                                                                        : "rotate-[-90deg]"
                                                                        }`}
                                                                />
                                                                <h2 className="text-xl font-semibold text-gray-900">{item.title}</h2>

                                                            </div>
                                                        )}
                                                        defaultOpen={item.isOpen}
                                                        className="w-full"
                                                    >
                                                        <div className="pt-6">
                                                            <div className="">
                                                                <div className="flex gap-5 mb-3">
                                                                    <div onClick={() => activeSection(0)} className={`cursor-pointer h-[110px] w-[300px]  flex justify-center items-center ${activeChildIndex == 0 ? 'bg-amber-300' : 'bg-gray-200'}`}>
                                                                        <div className="font-bold">
                                                                            Sale Drivers
                                                                        </div>
                                                                    </div>
                                                                    <div onClick={() => activeSection(0.1)} className={`cursor-pointer h-[110px] w-[300px]  flex justify-center items-center ${activeChildIndex == 0.1 ? 'bg-amber-300' : 'bg-gray-200'}`}>
                                                                        <div className="font-bold">
                                                                            Comperhensive
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {activeChildIndex == 0 ? (
                                                                    <div className="">
                                                                        We focus on enhancing all aspects of your brand's sales performance at retail locations.
                                                                    </div>
                                                                ) :
                                                                    (
                                                                        <div className="pt-4">
                                                                            <h3 className="mb-4 font-bold text-xl">Our team is equipped to</h3>
                                                                            <div>
                                                                                <div className="grid grid-cols-4 gap-3">
                                                                                    <div>
                                                                                        <div className="w-[40px] h-[3px] bg-amber-300 mb-1"></div>
                                                                                        <div>
                                                                                            Introduce products to retailers.
                                                                                        </div>
                                                                                    </div>
                                                                                    <div>
                                                                                        <div className="w-[40px] h-[3px] bg-amber-300 mb-1"></div>
                                                                                        <div>
                                                                                            Introduce products to retailers.
                                                                                        </div>
                                                                                    </div>
                                                                                    <div>
                                                                                        <div className="w-[40px] h-[3px] bg-amber-300 mb-1"></div>
                                                                                        <div>
                                                                                            Introduce products to retailers.
                                                                                        </div>
                                                                                    </div>
                                                                                    <div>
                                                                                        <div className="w-[40px] h-[3px] bg-amber-300 mb-1"></div>
                                                                                        <div>
                                                                                            Introduce products to retailers.
                                                                                        </div>
                                                                                    </div>
                                                                                    <div>
                                                                                        <div className="w-[40px] h-[3px] bg-amber-300 mb-1"></div>
                                                                                        <div>
                                                                                            Introduce products to retailers.
                                                                                        </div>
                                                                                    </div>
                                                                                    <div>
                                                                                        <div className="w-[40px] h-[3px] bg-amber-300 mb-1"></div>
                                                                                        <div>
                                                                                            Introduce products to retailers.
                                                                                        </div>
                                                                                    </div>

                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    )

                                                                }

                                                            </div>
                                                        </div>
                                                    </Collapse>
                                                </div>
                                            )
                                            )
                                        }


                                    </div>
                                )
                            }
                        </div>
                    </div>

                </main>
                <div className="relative">
                    <div className="absolute right-0 bottom-0 -z-1 ">
                        <Image
                        src="https://www.abudawood.com/wp-content/themes/abudawood/assets/img/path_bg.png"
                        alt="Decorative path background"
                        width={300}
                        height={200} // 3:2 aspect ratio
                        className="min-w-[200px] max-w-[300px]"
                        quality={80}
                        priority={false}
                        />
                    </div>
                </div>
            </div>
            <ScrollToTop></ScrollToTop>
        </>

    );
}
