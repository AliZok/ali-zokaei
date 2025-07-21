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
    isOpen?: boolean
}

export default function Services() {
    const [activeTabIndex, setActiveTabIndex] = useState(0)
    const [activeChildIndex, setActiveChildIndex] = useState(0)
    const [activeChildIndex2, setActiveChildIndex2] = useState(0)
    const [activeContentId, setActiveContentId] = useState("")
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
        // setActiveChildIndex(0)

    }


    const [slideDownItems, setSlideDownItems] = useState<SlideDownItem[]>([
        {
            id: "communication",
            title: "Enhancing Your Business Relationships",
            itemsOf: [
                {
                    titleItem: "Sale Drivers",
                    contentItem: " We focus on enhancing all aspects of your brand's sales performance at retail locations.",
                    isActive: true,
                },
                {
                    titleItem: "Comperhensive",
                    contentItem: "Hello world",
                    isActive: false,
                },
            ],
            isOpen: false,
        },
        {
            id: "approach",
            title: "Efficient and Strategic Approach",
             itemsOf: [
                {
                    titleItem: "Sale Drivers",
                    contentItem: " We focus on enhancing all aspects of your brand's sales performance at retail locations.",
                    isActive: true,
                },
                {
                    titleItem: "Comperhensive",
                    contentItem: "Hello world",
                    isActive: false,
                },
            ],
            isOpen: false,
        },
    ])

     const [slideDownItems2, setSlideDownItems2] = useState<SlideDownItem[]>([
        {
            id: "communication test",
            title: "Relationships",
            itemsOf: [
                {
                    titleItem: "Sale Drivers",
                    contentItem: " We focus on enhancing all aspects of your brand's sales performance at retail locations.",
                    isActive: true,
                },
                {
                    titleItem: "Comperhensive",
                    contentItem: "Hello world",
                    isActive: false,
                },
            ],
            isOpen: false,
        },
        {
            id: "approach test",
            title: "Approach",
             itemsOf: [
                {
                    titleItem: "Sale Drivers",
                    contentItem: " We focus on enhancing all aspects of your brand's sales performance at retail locations.",
                    isActive: true,
                },
                {
                    titleItem: "Comperhensive",
                    contentItem: "Hello world",
                    isActive: false,
                },
            ],
            isOpen: false,
        },
    ])
 const [slideDownItems3, setSlideDownItems3] = useState<SlideDownItem[]>([
        {
            id: "communication",
            title: "Enhancing Your Business Relationships",
            itemsOf: [
                {
                    titleItem: "Sale Drivers",
                    contentItem: " We focus on enhancing all aspects of your brand's sales performance at retail locations.",
                    isActive: true,
                },
                {
                    titleItem: "Comperhensive",
                    contentItem: "Hello world",
                    isActive: false,
                },
            ],
            isOpen: false,
        },
        {
            id: "approach",
            title: "Efficient and Strategic Approach",
             itemsOf: [
                {
                    titleItem: "Sale Drivers",
                    contentItem: " We focus on enhancing all aspects of your brand's sales performance at retail locations.",
                    isActive: true,
                },
                {
                    titleItem: "Comperhensive",
                    contentItem: "Hello world",
                    isActive: false,
                },
            ],
            isOpen: false,
        },
    ])

      const [slideDownItems4, setSlideDownItems4] = useState<SlideDownItem[]>([
        {
            id: "communication test",
            title: "Relationships",
            itemsOf: [
                {
                    titleItem: "Sale Drivers",
                    contentItem: " We focus on enhancing all aspects of your brand's sales performance at retail locations.",
                    isActive: true,
                },
                {
                    titleItem: "Comperhensive",
                    contentItem: "Hello world",
                    isActive: false,
                },
            ],
            isOpen: false,
        },
        {
            id: "approach test",
            title: "Approach",
             itemsOf: [
                {
                    titleItem: "Sale Drivers",
                    contentItem: " We focus on enhancing all aspects of your brand's sales performance at retail locations.",
                    isActive: true,
                },
                {
                    titleItem: "Comperhensive",
                    contentItem: "Hello world",
                    isActive: false,
                },
            ],
            isOpen: false,
        },
    ])
     const [slideDownItems5, setSlideDownItems5] = useState<SlideDownItem[]>([
        {
            id: "communication test",
            title: "Relationships test",
            itemsOf: [
                {
                    titleItem: "Sale Drivers test",
                    contentItem: " We focus on enhancing all aspects of your brand's sales performance at retail locations.",
                    isActive: true,
                },
                {
                    titleItem: "Comperhensive test",
                    contentItem: "Hello world",
                    isActive: false,
                },
            ],
            isOpen: false,
        },
        {
            id: "approach test",
            title: "Approach test",
             itemsOf: [
                {
                    titleItem: "Sale Drivers",
                    contentItem: " We focus on enhancing all aspects of your brand's sales performance at retail locations.",
                    isActive: true,
                },
                {
                    titleItem: "Comperhensive",
                    contentItem: "Hello world",
                    isActive: false,
                },
            ],
            isOpen: false,
        },
    ])


    function activeSection(insideItem, itemsOf) {
        setSlideDownItems(prevItems => 
            prevItems.map(item => {
                if (item.itemsOf === itemsOf) {
                    return {
                        ...item,
                        itemsOf: item.itemsOf.map(i => ({
                            ...i,
                            isActive: i.titleItem === insideItem.titleItem
                        }))
                    }
                }
                return item
            })
        )
    }

   function activeSection2(insideItem, itemsOf) {
        setSlideDownItems2(prevItems => 
            prevItems.map(item => {
                if (item.itemsOf === itemsOf) {
                    return {
                        ...item,
                        itemsOf: item.itemsOf.map(i => ({
                            ...i,
                            isActive: i.titleItem === insideItem.titleItem
                        }))
                    }
                }
                return item
            })
        )
    }

    
    function activeSection3(insideItem, itemsOf) {
        setSlideDownItems3(prevItems => 
            prevItems.map(item => {
                if (item.itemsOf === itemsOf) {
                    return {
                        ...item,
                        itemsOf: item.itemsOf.map(i => ({
                            ...i,
                            isActive: i.titleItem === insideItem.titleItem
                        }))
                    }
                }
                return item
            })
        )
    }

        function activeSection4(insideItem, itemsOf) {
        setSlideDownItems4(prevItems => 
            prevItems.map(item => {
                if (item.itemsOf === itemsOf) {
                    return {
                        ...item,
                        itemsOf: item.itemsOf.map(i => ({
                            ...i,
                            isActive: i.titleItem === insideItem.titleItem
                        }))
                    }
                }
                return item
            })
        )
    }

     function activeSection5(insideItem, itemsOf) {
        setSlideDownItems5(prevItems => 
            prevItems.map(item => {
                if (item.itemsOf === itemsOf) {
                    return {
                        ...item,
                        itemsOf: item.itemsOf.map(i => ({
                            ...i,
                            isActive: i.titleItem === insideItem.titleItem
                        }))
                    }
                }
                return item
            })
        )
    }



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
                                                <div className="hidden md:block">
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
                                                                    className={`transition-all duration-300 ease-in-out w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[20px] border-t-brand ${isOpen
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
                                                                    {
                                                                        item?.itemsOf.map( (insideItem) =>(
                                                                        <div key={insideItem.titleItem} onClick={() => activeSection(insideItem, item.itemsOf)} className={`relative cursor-pointer h-[110px] w-[300px]  flex justify-center items-center ${insideItem.isActive ? 'bg-brand' : 'bg-gray-200'}`}>
                                                                            <div className="font-bold">
                                                                                {insideItem.titleItem}
                                                                            </div>

                                                                            <div className="absolute top-0 left-[25px] transition-all duration-300 ease-in-out w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[16px] border-t-white">
                                                                            </div>
                                                                        </div>
                                                                        ))
                                                                    }
                                                                    
                                                                </div>
                                                                {item?.itemsOf.map( (insideItem) =>(
                                                                        <div  key={insideItem.titleItem} className="">
                                                                            {insideItem.isActive && insideItem.contentItem}
                                                                           
                                                                        </div>
                                                                    )) 
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
                                (activeTabIndex == 1 ) && (
                                    <div className="mb-4">
                                        {
                                            slideDownItems2.map((item) =>
                                            (
                                                <div key={item.id} className="mb-8 pb-6">
                                                    <Collapse
                                                        trigger={(isOpen) => (
                                                            <div className="flex items-center gap-2">
                                                                <div
                                                                    className={`transition-all duration-300 ease-in-out w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[20px] border-t-brand ${isOpen
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
                                                                    {
                                                                        item?.itemsOf.map( (insideItem) =>(
                                                                        <div key={insideItem.titleItem} onClick={() => activeSection2(insideItem, item.itemsOf)} className={`relative cursor-pointer h-[110px] w-[300px]  flex justify-center items-center ${insideItem.isActive ? 'bg-brand' : 'bg-gray-200'}`}>
                                                                            <div className="font-bold">
                                                                                {insideItem.titleItem}
                                                                            </div>

                                                                            <div className="absolute top-0 left-[25px] transition-all duration-300 ease-in-out w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[16px] border-t-white">
                                                                            </div>
                                                                        </div>
                                                                        ))
                                                                    }
                                                                    
                                                                </div>
                                                                {item?.itemsOf.map( (insideItem) =>(
                                                                        <div  key={insideItem.titleItem} className="">
                                                                            {insideItem.isActive && insideItem.contentItem}
                                                                           
                                                                        </div>
                                                                    )) 
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
                                (activeTabIndex == 2 ) && (
                                    <div className="mb-4">
                                        {
                                            slideDownItems3.map((item) =>
                                            (
                                                <div key={item.id} className="mb-8 pb-6">
                                                    <Collapse
                                                        trigger={(isOpen) => (
                                                            <div className="flex items-center gap-2">
                                                                <div
                                                                    className={`transition-all duration-300 ease-in-out w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[20px] border-t-brand ${isOpen
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
                                                                    {
                                                                        item?.itemsOf.map( (insideItem) =>(
                                                                        <div key={insideItem.titleItem} onClick={() => activeSection3(insideItem, item.itemsOf)} className={`relative cursor-pointer h-[110px] w-[300px]  flex justify-center items-center ${insideItem.isActive ? 'bg-brand' : 'bg-gray-200'}`}>
                                                                            <div className="font-bold">
                                                                                {insideItem.titleItem}
                                                                            </div>

                                                                            <div className="absolute top-0 left-[25px] transition-all duration-300 ease-in-out w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[16px] border-t-white">
                                                                            </div>
                                                                        </div>
                                                                        ))
                                                                    }
                                                                    
                                                                </div>
                                                                {item?.itemsOf.map( (insideItem) =>(
                                                                        <div  key={insideItem.titleItem} className="">
                                                                            {insideItem.isActive && insideItem.contentItem}
                                                                           
                                                                        </div>
                                                                    )) 
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
                                (activeTabIndex == 3 ) && (
                                    <div className="mb-4">
                                        {
                                            slideDownItems4.map((item) =>
                                            (
                                                <div key={item.id} className="mb-8 pb-6">
                                                    <Collapse
                                                        trigger={(isOpen) => (
                                                            <div className="flex items-center gap-2">
                                                                <div
                                                                    className={`transition-all duration-300 ease-in-out w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[20px] border-t-brand ${isOpen
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
                                                                    {
                                                                        item?.itemsOf.map( (insideItem) =>(
                                                                        <div key={insideItem.titleItem} onClick={() => activeSection4(insideItem, item.itemsOf)} className={`relative cursor-pointer h-[110px] w-[300px]  flex justify-center items-center ${insideItem.isActive ? 'bg-brand' : 'bg-gray-200'}`}>
                                                                            <div className="font-bold">
                                                                                {insideItem.titleItem}
                                                                            </div>

                                                                            <div className="absolute top-0 left-[25px] transition-all duration-300 ease-in-out w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[16px] border-t-white">
                                                                            </div>
                                                                        </div>
                                                                        ))
                                                                    }
                                                                    
                                                                </div>
                                                                {item?.itemsOf.map( (insideItem) =>(
                                                                        <div  key={insideItem.titleItem} className="">
                                                                            {insideItem.isActive && insideItem.contentItem}
                                                                           
                                                                        </div>
                                                                    )) 
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
                                (activeTabIndex == 4 ) && (
                                    <div className="mb-4">
                                        {
                                            slideDownItems5.map((item) =>
                                            (
                                                <div key={item.id} className="mb-8 pb-6">
                                                    <Collapse
                                                        trigger={(isOpen) => (
                                                            <div className="flex items-center gap-2">
                                                                <div
                                                                    className={`transition-all duration-300 ease-in-out w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[20px] border-t-brand ${isOpen
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
                                                                    {
                                                                        item?.itemsOf.map( (insideItem) =>(
                                                                        <div key={insideItem.titleItem} onClick={() => activeSection5(insideItem, item.itemsOf)} className={`relative cursor-pointer h-[110px] w-[300px]  flex justify-center items-center ${insideItem.isActive ? 'bg-brand' : 'bg-gray-200'}`}>
                                                                            <div className="font-bold">
                                                                                {insideItem.titleItem}
                                                                            </div>

                                                                            <div className="absolute top-0 left-[25px] transition-all duration-300 ease-in-out w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[16px] border-t-white">
                                                                            </div>
                                                                        </div>
                                                                        ))
                                                                    }
                                                                    
                                                                </div>
                                                                {item?.itemsOf.map( (insideItem) =>(
                                                                        <div  key={insideItem.titleItem} className="">
                                                                            {insideItem.isActive && insideItem.contentItem}
                                                                           
                                                                        </div>
                                                                    )) 
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
