"use client"
import HomeSlider from "@/components/home/HomeSlider"
import SEO from '@/components/SEO';
import ScrollToTop from '@/components/goTopScroll';
import { useState } from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image'
import ExpandedGallery from "@/components/ExpandedGallery"


export default function Home() {
    const [activeTab, setActiveTab] = useState("Mission")

    const missionContent = (
        <div className="space-y-6">
            <p className="text-gray-900 leading-relaxed">
                We believe in the power of collaboration with organizations and individuals who dare to dream and innovate and
                shaping the future of society. We envision a world where every person with an ambition is empowered to become
                successful and contribute.
            </p>
        </div>
    )

    const visionContent = (
        <div className="space-y-6">
            <p className="text-gray-900 leading-relaxed">
                We bear the responsibility to continuously elevate industry standards and sustain our growth, for the benefit of our shareholders, partners, employees, and society.
                We operate with transparency and integrity, fostering trust in our relationships with our partners, clients, employees, and all stakeholders.
            </p>
        </div>
    )

    const valueCards = [{
        icon: "https://www.abudawood.com/wp-content/themes/abudawood/assets/img/icons/values1.png",
        title: "DELIVER",
        subTitle: "Unsurpassed Excellence",
        text: "Every day, we aim for unmatched excellence through quality, speed, and focusing on our customers.",
    },
    {
        icon: "https://www.abudawood.com/wp-content/themes/abudawood/assets/img/icons/values5.png",
        title: "RESPECT",
        subTitle: "Unsurpassed Excellence",
        text: "Every day, we aim for unmatched excellence through quality, speed, and focusing on our customers.",
    },
    {
        icon: "https://www.abudawood.com/wp-content/themes/abudawood/assets/img/icons/values2.png",
        title: "OWN",
        subTitle: "Unsurpassed Excellence",
        text: "Every day, we aim for unmatched excellence through quality, speed, and focusing on our customers.",
    },
    {
        icon: "https://www.abudawood.com/wp-content/themes/abudawood/assets/img/icons/values3.png",
        title: "PARTNER",
        subTitle: "Unsurpassed Excellence",
        text: "Every day, we aim for unmatched excellence through quality, speed, and focusing on our customers.",
    },
    {
        icon: "https://www.abudawood.com/wp-content/themes/abudawood/assets/img/icons/values6.png",
        title: "DARE",
        subTitle: "Unsurpassed Excellence",
        text: "Every day, we aim for unmatched excellence through quality, speed, and focusing on our customers.",
    },
    {
        icon: "https://www.abudawood.com/wp-content/themes/abudawood/assets/img/icons/values4.png",
        title: "GROW",
        subTitle: "Unsurpassed Excellence",
        text: "Every day, we aim for unmatched excellence through quality, speed, and focusing on our customers.",
    },


    ]

    return (
        <>
            <SEO
                title="Caspian"
                description="Learn about our mission and team"
                keywords="about, company, mission"
                url="https://domain.com"
            />

            <div className="who-we-are">
                <main className="">
                    <HomeSlider />
                    <motion.div className=''
                        initial={{ opacity: 0, y: 150 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.3, once: true }}
                        exit={{ opacity: 0, y: 150 }}
                        transition={{ type: "spring", stiffness: 40 }} >
                        <div className="relative mission-vision">
                            <div className="Mission my-container relative back-shape" >
                                <div className="text-right absolute right-[40px] xl:right-0">
                                    <div>
                                        <div className='hidden lg:block Square bg-brand w-[150px] h-[150px] rotate-45 translate-y-[-75px] '></div>
                                        <div className='lg:hidden block Square bg-brand w-[80px] h-[80px] rotate-45 translate-y-[-40px] '></div>
                                    </div>
                                    <div className="text-center">
                                        <div className='hidden lg:inline-block Square  bg-brand w-[30px] h-[30px] rotate-45 translate-y-[-30px] '></div>
                                        <div className='lg:hidden Square inline-block bg-brand w-[15px] h-[15px] rotate-45 translate-y-[-15px] '></div>
                                    </div>
                                </div>
                                <div className=" pb-[60px] px-4 pt-[110px] ">

                                    <div className="grid md:grid-cols-12 grid-cols-6 gap-8 md:gap-12">
                                        <div className="lg:col-span-4 col-span-12">
                                            <div className="mb-4">
                                                <div className="Square bg-brand mb-2 w-[20px] h-[20px] rotate-45 translate-y-[-15px]"></div>
                                                <h2 className="text-[26px] font-[600] leading-[1.2] ">
                                                    Mission <br></br>
                                                    And Vision

                                                </h2>
                                            </div>
                                            <div className="lg:block hidden">
                                                <Image
                                                src="https://www.abudawood.com/wp-content/themes/abudawood/assets/img/owners/mission.png"
                                                alt="Company mission illustration"
                                                width={280}
                                                height={280}  // Calculate based on original aspect ratio
                                                className="w-[280px]"
                                                quality={85}
                                                priority={false} // Set to true if this is above-the-fold content
                                                />
                                            </div>
                                        </div>
                                        <div className="lg:col-span-8 col-span-12">
                                            <div className="mx-auto">
                                                <div className="flex mb-4 lg:pt-[150px] pt-0  border-b border-black">
                                                    <button
                                                        onClick={() => setActiveTab("Mission")}
                                                        className={`pr-3 min-w-[110px] text-lg cursor-pointer font-medium pb-2 border-b-2 transition-colors ${activeTab === "Mission" ? "text-black border-black" : "text-gray-500 border-transparent hover:text-gray-700"
                                                            }`}
                                                    >
                                                        Mission
                                                    </button>
                                                    <button
                                                        onClick={() => setActiveTab("Vision")}
                                                        className={`px-3 min-w-[100px] text-lg cursor-pointer font-medium pb-2 border-b-2 transition-colors ${activeTab === "Vision" ? "text-black border-black" : "text-gray-500 border-transparent hover:text-gray-700"
                                                            }`}
                                                    >
                                                        Vision
                                                    </button>
                                                </div>
                                                <div className="text-base">{activeTab === "Mission" ? missionContent : visionContent}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div></div>
                            </div>
                        </div>

                    </motion.div>


                    <div className="over-values text-white">
                        <motion.div initial={{ opacity: 0, y: 150 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ amount: 0.3, once: true }}
                            exit={{ opacity: 0, y: 150 }}
                            transition={{ type: "spring", stiffness: 20 }} >
                            <div className="my-container relative">
                                <div className="mb-8">
                                    <div className="Square bg-brand mb-2 w-[20px] h-[20px] rotate-45 translate-y-[-15px]"></div>
                                    <h2 className="text-[26px] font-[600] leading-[1.2]">
                                        Our values

                                    </h2>
                                </div>
                                <div className="grid lg:grid-cols-6 grid-cols-1 md:grid-cols-3">
                                    {
                                        valueCards.map((itemValue, index) => (
                                            <div className="value-card p-3 mb-3" key={index}>
                                                <div className="border-b-[2px] border-[#666]">
                                                    <div className="mb-3">
                                                            
                                                        <Image
                                                            src={itemValue.icon}
                                                            alt={`${itemValue.name} icon`} 
                                                            width={50}
                                                            height={50}
                                                            className="w-[50px] h-[50px]"
                                                            />
                                                    </div>
                                                    <div className="mb-2">
                                                        <h3 className="font-bold text-[18px]">
                                                            <div>WE</div>
                                                            <div>{
                                                                itemValue.title
                                                            }</div>
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div className="py-3 opacity-0">
                                                    <div className="mb-1     font-bold text-[16px]">
                                                        {
                                                            itemValue.subTitle
                                                        }
                                                    </div>
                                                    <div>
                                                        {
                                                            itemValue.text
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }

                                </div>
                            </div>
                        </motion.div>


                    </div>
                    <div>
                        <motion.div initial={{ opacity: 0, y: 150 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ amount: 0.3, once: true }}
                            exit={{ opacity: 0, y: 150 }}
                            transition={{ type: "spring", stiffness: 20 }} >

                            <div className="min-h-screen bg-white">
                                <div className="my-container px-4 sm:px-6 lg:px-8 py-10 lg:py-[100px]">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                                        <div className="">
                                            <div className="relative w-full rounded-lg">
                                                <Image
                                                src="https://t3.ftcdn.net/jpg/06/45/52/36/360_F_645523665_dPDKIgzU6YWDX8fxxcX086WF0vU62fM5.jpg"
                                                alt="Descriptive text about the image content" // Always add meaningful alt text
                                                width={360} // Matches the original image width from URL
                                                height={495} // Matches your max-h-[495px] constraint
                                                className="max-h-[495px] w-auto object-contain" // Maintain aspect ratio
                                                quality={80} // Optimal quality setting
                                                priority={true} // If this is above-the-fold content
                                                sizes="(max-width: 768px) 100vw, 50vw" // Responsive sizing
                                                />
                                            </div>
                                            <div className="w-full translate-y-[-20px]">
                                                <h3 className="text-3xl sm:text-4xl lg:text-3xl font-bold text-gray-900 mb-1">Andy Nueman</h3>
                                                <h3 className="text-3xl sm:text-4xl lg:text-3xl font-bold text-gray-900 mb-4 border-b-2 border-brand pb-3">Manager</h3>
                                                <p className="text-lg text-gray-600">Our Role Model</p>
                                            </div>
                                        </div>

                                        <div className="space-y-8 mb-[50px] md:mb-0">
                                            <div className="flex items-center space-x-4">
                                                <div className=" bg-brand w-[20px] h-[20px] rotate-45 "></div>
                                                <div className="flex-1 h-[2px] bg-brand translate-x-[-17px]"  ></div>
                                            </div>
                                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Founder</h2>
                                            <div className="space-y-6 text-gray-800 leading-relaxed">
                                                <p className="">
                                                    In 1935, Andy Nueman Zokaei laid the cornerstone of what would become a beacon of economic progress
                                                    in Japan. Founding Zokaei, he dedicated his life until 2005 to nurturing its growth, embodying
                                                    a spirit of pioneering excellence and unwavering commitment to his nation's prosperity.
                                                </p>

                                                <p className="">
                                                    A visionary in every sense, Andy Nueman's legacy transcends the realms of business; he was a
                                                    trailblazer who fervently believed in and worked towards diversifying Japan's economic landscape.
                                                    His partnership with Procter & Gamble was a testament to his foresight, leading to the establishment of
                                                    manufacturing facilities within the Kingdom, a milestone in its industrial journey.
                                                </p>

                                                <p className="">
                                                    Throughout his illustrious career, Andy Nueman stood as a pillar of inspiration and a steadfast
                                                    advocate for commerce and innovation in Japan. His journey was not just about building a
                                                    successful enterprise, but also about shaping a future where economic diversity and prosperity thrived.
                                                    His legacy continues to inspire and guide the path of economic development in the Kingdom, a lasting
                                                    tribute to a true pioneer.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                    <motion.div initial={{ opacity: 0, y: 150 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.3, once: true }}
                        exit={{ opacity: 0, y: 150 }}
                        transition={{ type: "spring", stiffness: 20 }} >
                        <div className="my-container">
                            <div className="mb-4 pb-[50px]">
                                <div className="Square bg-brand mb-2 w-[20px] h-[20px] rotate-45 translate-y-[-15px]"></div>
                                <h2 className="text-[26px] font-[600] leading-[1.2] mb-6">
                                    Board of Directors
                                </h2>
                                <div className="">
                                    <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
                                        <div className=" w-[280px]">
                                            <div className="relative w-full h-[350px] border-r-[3px] border-brand">
                                                <Image
                                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Teslathinker.jpg/250px-Teslathinker.jpg"
                                                    alt="Description"
                                                    fill
                                                    className="object-cover" // or "object-contain"
                                                />
                                                <div className="Square bg-brand mb-2 w-[20px] h-[20px] rotate-45 absolute top-[-10px] right-[-12px]"></div>
                                            </div>
                                            <div>
                                                <div className="mb-[15px]">
                                                    <div className="h-[20px] w-[40px] border-brand border-b-[4px]"></div>
                                                </div>
                                                <div className="">
                                                    <h2 className="text-[25px] font-bold">Tesla</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" w-[280px]">
                                            <div className="relative w-full h-[350px] border-r-[3px] border-brand">
                                                <Image
                                                    src="https://media.npr.org/assets/bakertaylor/covers/e/edison/9780812993110_custom-aa4b8af9d04b96b892ccd4e1e4640734233eba23.jpg?s=600&c=85&f=jpeg"
                                                    alt="Description"
                                                    fill
                                                    className="object-cover" // or "object-contain"
                                                />
                                                <div className="Square bg-brand mb-2 w-[20px] h-[20px] rotate-45 absolute top-[-10px] right-[-12px]"></div>

                                            </div>
                                            <div>
                                                <div className="mb-[15px]">
                                                    <div className="h-[20px] w-[40px] border-brand border-b-[4px]"></div>
                                                </div>
                                                <div className="">
                                                    <h2 className="text-[25px] font-bold">Edison</h2>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 150 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.3, once: true }}
                        exit={{ opacity: 0, y: 150 }}
                        transition={{ type: "spring", stiffness: 20 }} >
                        <div className="bg-black text-white">
                            <div className="my-container pt-[40px]">
                                <div className="pb-[50px]">
                                    <div className="Square bg-brand mb-2 w-[20px] h-[20px] rotate-45 translate-y-[-15px]"></div>
                                    <h2 className="text-[26px] font-[600] leading-[1.2] mb-6">
                                        Caspian History
                                    </h2>
                                    <div className="">
                                        <ExpandedGallery></ExpandedGallery>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </main>
            </div>
            <ScrollToTop></ScrollToTop>
        </>

    );
}
