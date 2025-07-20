"use client"

import CompaniesNavSlider from "@/components/companies/CompaniesNavSlider"
import CategoryCards from "@/components/companies/CategoryCards"
import SEO from '@/components/SEO';
import ScrollToTop from '@/components/goTopScroll';
import { useState } from 'react'
import Image from 'next/image'

export default function Companies() {
    const [activeSectionText, setActiveSectionText] = useState("logistic")

    function setMyActive(item) {
        console.log(item)
        setActiveSectionText(item)
    }

    return (
        <>
            <SEO
                title="Caspian"
                description="Learn about our mission and team"
                keywords="about, company, mission"
                url="https://domain.com"
            />

            <div className="Companies relative">
                <main className="">
                    <div className="mb-[80px]">
                        <CompaniesNavSlider />
                    </div>

                    <div className="my-container">
                        <div className="mb-4">
                            <div className="Square bg-brand mb-6 w-[20px] h-[20px] rotate-45 translate-y-[-15px]"></div>
                            <h2 className="text-[26px] font-[600] leading-[1.2] ">
                                Mission <br></br>
                                And Vision
                            </h2>
                        </div>
                        <CategoryCards activeSection={setMyActive} />
                        <div className="">
                            <div id="all-info" className="pt-[90px]" dir="ltr">
                                <div className="text-center mb-7">
                                    <div className="inline-block">
                                        <div className="Square bg-brand mb-6 w-[40px] h-[40px] rotate-45 "></div>
                                    </div>
                                    <div>
                                        <div className="inline-block h-[40px] w-[1px] bg-black"></div>
                                    </div>
                                </div>
                                
                                {/* Repeated sections with Image components */}
                                {['logistic', 'investment', 'operation', 'shared', 'distribution', 'merchandising'].map((section) => (
                                    <section 
                                        key={section}
                                        id={section} 
                                        className={`${activeSectionText == section ? 'block' : 'hidden'} scroll-mt-20`}
                                    >
                                        <div className="grid grid-cols-12 pb-16">
                                            <div className="md:col-span-3 col-span-12 mb-6">
                                                <div className="flex items-center justify-start md:justify-center h-full">
                                                    <Image 
                                                        className="max-w-[130px]"
                                                        src="/images/Yello_logo_yellow_rgb.png" 
                                                        alt="Company logo"
                                                        width={130}
                                                        height={130}
                                                    />
                                                </div>
                                            </div>
                                            <div className="md:col-span-9 col-span-12">
                                                <div className="md:border-l-[2px] border-gray-600 pl-6">
                                                    <h2 className="text-[20px] font-bold mb-2">INTEGRATED LEADING COMPANY FOR MODERN SERVICES LTD.</h2>
                                                    <div>
                                                        INTEGRATED LEADING COMPANY FOR MODERN SERVICES LIMITED known in the market as Zokaei Logistics is a premier provider of third-party logistics (3PL) services, specializing in (1) advanced storage and cooling solutions, (2) efficient port clearance and customs facilitation, (3) transportation and distribution services, and (4) managing, marketing, and renting state-of-the-art storage facilities and cold storage units to businesses across various industries.
                                                        With a commitment to optimizing supply chain efficiency, Al-Takamoul offers end-to-end 3PL solutions that are customized to enhance clients' operational capabilities while reducing costs. By integrating warehousing, transportation, inventory management, and port clearance services, the company ensures seamless and compliant logistics operations. Known for its reliability and agility, Al-Takamoul is a trusted logistics partner throughout the Kingdom and the broader region.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
                <div className="relative">
                    <div className="absolute right-0 bottom-0 -z-1">
                        <Image 
                            className="min-w-[200px] max-w-[300px]"
                            src="https://www.abudawood.com/wp-content/themes/abudawood/assets/img/bg-growing-img.png"
                            alt="Background decorative image"
                            width={300}
                            height={200}
                        />
                    </div>
                </div>
            </div>
            <ScrollToTop></ScrollToTop>
        </>
    );
}






// "use client"

// import CompaniesNavSlider from "@/components/companies/CompaniesNavSlider"
// import CategoryCards from "@/components/companies/CategoryCards"
// import SEO from '@/components/SEO';
// import ScrollToTop from '@/components/goTopScroll';
// import { useState } from 'react'


// export default function Companies() {
//     const [activeSectionText, setActiveSectionText] = useState("logistic")

//     function setMyActive(item) {
//         console.log(item)
//         setActiveSectionText(item)
//     }

//     return (
//         <>
//             <SEO
//                 title="Caspian"
//                 description="Learn about our mission and team"
//                 keywords="about, company, mission"
//                 url="https://domain.com"
//             />

//             <div className="Companies relative">
//                 <main className="">
//                     <div className="mb-[80px]">
//                         <CompaniesNavSlider />
//                     </div>

//                     <div className="my-container">
//                         <div className="mb-4">
//                             <div className="Square bg-brand mb-6 w-[20px] h-[20px] rotate-45 translate-y-[-15px]"></div>
//                             <h2 className="text-[26px] font-[600] leading-[1.2] ">
//                                 Mission <br></br>
//                                 And Vision

//                             </h2>
//                         </div>
//                         <CategoryCards activeSection={setMyActive} />
//                         <div className="">
//                             <div id="all-info" className="pt-[90px]" dir="ltr">
//                                 <div className="text-center mb-7">
//                                     <div className="inline-block">
//                                         <div className="Square bg-brand mb-6 w-[40px] h-[40px] rotate-45 "></div>
//                                     </div>
//                                     <div>
//                                         <div className="inline-block h-[40px] w-[1px] bg-black"></div>
//                                     </div>

//                                 </div>
//                                 <section id="logistic" className={`${activeSectionText == 'logistic' ? 'block' : 'hidden'} scroll-mt-20`} >
//                                     <div className="grid grid-cols-12 pb-16">
//                                         <div className="md:col-span-3 col-span-12 mb-6">
//                                             <div className="flex items-center justify-start md:justify-center h-full">
//                                                 <img className="max-w-[130px]" src="images/Yello_logo_yellow_rgb.png" alt="" />
//                                             </div>
//                                         </div>
//                                         <div className="md:col-span-9 col-span-12">
//                                             <div className=" md:border-l-[2px] border-gray-600 pl-6">
//                                                 <h2 className="text-[20px] font-bold mb-2">INTEGRATED LEADING COMPANY FOR MODERN SERVICES LTD.</h2>
//                                                 <div>
//                                                     INTEGRATED LEADING COMPANY FOR MODERN SERVICES LIMITED known in the market as Zokaei Logistics is a premier provider of third-party logistics (3PL) services, specializing in (1) advanced storage and cooling solutions, (2) efficient port clearance and customs facilitation, (3) transportation and distribution services, and (4) managing, marketing, and renting state-of-the-art storage facilities and cold storage units to businesses across various industries.
//                                                     With a commitment to optimizing supply chain efficiency, Al-Takamoul offers end-to-end 3PL solutions that are customized to enhance clients’ operational capabilities while reducing costs. By integrating warehousing, transportation, inventory management, and port clearance services, the company ensures seamless and compliant logistics operations. Known for its reliability and agility, Al-Takamoul is a trusted logistics partner throughout the Kingdom and the broader region.
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </section>

//                                 <section id="investment" className={`${activeSectionText == 'investment' ? 'block' : 'hidden'} scroll-mt-20`}>
//                                     <div className="grid grid-cols-12 pb-16">
//                                         <div className="col-span-3">
//                                             <div className="flex items-center justify-center h-full">
//                                                 <img className="max-w-[130px]" src="images/Yello_logo_yellow_rgb.png" alt="" />
//                                             </div>
//                                         </div>
//                                         <div className="col-span-9">
//                                             <div className=" md:border-l-[2px] border-gray-600 pl-6">
//                                                 <h2 className="text-[20px] font-bold mb-2">INTEGRATED LEADING COMPANY FOR MODERN SERVICES LTD.</h2>
//                                                 <div>
//                                                     INTEGRATED LEADING COMPANY FOR MODERN SERVICES LIMITED known in the market as Zokaei Logistics is a premier provider of third-party logistics (3PL) services, specializing in (1) advanced storage and cooling solutions, (2) efficient port clearance and customs facilitation, (3) transportation and distribution services, and (4) managing, marketing, and renting state-of-the-art storage facilities and cold storage units to businesses across various industries.


//                                                     With a commitment to optimizing supply chain efficiency, Al-Takamoul offers end-to-end 3PL solutions that are customized to enhance clients’ operational capabilities while reducing costs. By integrating warehousing, transportation, inventory management, and port clearance services, the company ensures seamless and compliant logistics operations. Known for its reliability and agility, Al-Takamoul is a trusted logistics partner throughout the Kingdom and the broader region.
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </section>

//                                 <section id="operation" className={`${activeSectionText == 'operation' ? 'block' : 'hidden'} scroll-mt-20`}>
//                                     <div className="grid grid-cols-12 pb-16">
//                                         <div className="col-span-3">
//                                             <div className="flex items-center justify-center h-full">
//                                                 <img className="max-w-[130px]" src="images/Yello_logo_yellow_rgb.png" alt="" />
//                                             </div>
//                                         </div>
//                                         <div className="col-span-9">
//                                             <div className="md:border-l-[2px] border-gray-600 pl-6">
//                                                 <h2 className="text-[20px] font-bold mb-2">INTEGRATED LEADING COMPANY FOR MODERN SERVICES LTD.</h2>
//                                                 <div>
//                                                     INTEGRATED LEADING COMPANY FOR MODERN SERVICES LIMITED known in the market as Zokaei Logistics is a premier provider of third-party logistics (3PL) services, specializing in (1) advanced storage and cooling solutions, (2) efficient port clearance and customs facilitation, (3) transportation and distribution services, and (4) managing, marketing, and renting state-of-the-art storage facilities and cold storage units to businesses across various industries.


//                                                     With a commitment to optimizing supply chain efficiency, Al-Takamoul offers end-to-end 3PL solutions that are customized to enhance clients’ operational capabilities while reducing costs. By integrating warehousing, transportation, inventory management, and port clearance services, the company ensures seamless and compliant logistics operations. Known for its reliability and agility, Al-Takamoul is a trusted logistics partner throughout the Kingdom and the broader region.
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </section>

//                                 <section id="shared" className={`${activeSectionText == 'shared' ? 'block' : 'hidden'} scroll-mt-20`}>
//                                     <div className="grid grid-cols-12 pb-16">
//                                         <div className="col-span-3">
//                                             <div className="flex items-center justify-center h-full">
//                                                 <img className="max-w-[130px]" src="images/Yello_logo_yellow_rgb.png" alt="" />
//                                             </div>
//                                         </div>
//                                         <div className="col-span-9">
//                                             <div className="md:border-l-[2px] border-gray-600 pl-6">
//                                                 <h2 className="text-[20px] font-bold mb-2">INTEGRATED LEADING COMPANY FOR MODERN SERVICES LTD.</h2>
//                                                 <div>
//                                                     INTEGRATED LEADING COMPANY FOR MODERN SERVICES LIMITED known in the market as Zokaei Logistics is a premier provider of third-party logistics (3PL) services, specializing in (1) advanced storage and cooling solutions, (2) efficient port clearance and customs facilitation, (3) transportation and distribution services, and (4) managing, marketing, and renting state-of-the-art storage facilities and cold storage units to businesses across various industries.


//                                                     With a commitment to optimizing supply chain efficiency, Al-Takamoul offers end-to-end 3PL solutions that are customized to enhance clients’ operational capabilities while reducing costs. By integrating warehousing, transportation, inventory management, and port clearance services, the company ensures seamless and compliant logistics operations. Known for its reliability and agility, Al-Takamoul is a trusted logistics partner throughout the Kingdom and the broader region.
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </section>

//                                 <section id="distribution" className={`${activeSectionText == 'distribution' ? 'block' : 'hidden'} scroll-mt-20`}>
//                                     <div className="grid grid-cols-12 pb-16">
//                                         <div className="col-span-3">
//                                             <div className="flex items-center justify-center h-full">
//                                                 <img className="max-w-[130px]" src="images/Yello_logo_yellow_rgb.png" alt="" />
//                                             </div>
//                                         </div>
//                                         <div className="col-span-9">
//                                             <div className="md:border-l-[2px] border-gray-600 pl-6">
//                                                 <h2 className="text-[20px] font-bold mb-2">INTEGRATED LEADING COMPANY FOR MODERN SERVICES LTD.</h2>
//                                                 <div>
//                                                     INTEGRATED LEADING COMPANY FOR MODERN SERVICES LIMITED known in the market as Zokaei Logistics is a premier provider of third-party logistics (3PL) services, specializing in (1) advanced storage and cooling solutions, (2) efficient port clearance and customs facilitation, (3) transportation and distribution services, and (4) managing, marketing, and renting state-of-the-art storage facilities and cold storage units to businesses across various industries.


//                                                     With a commitment to optimizing supply chain efficiency, Al-Takamoul offers end-to-end 3PL solutions that are customized to enhance clients’ operational capabilities while reducing costs. By integrating warehousing, transportation, inventory management, and port clearance services, the company ensures seamless and compliant logistics operations. Known for its reliability and agility, Al-Takamoul is a trusted logistics partner throughout the Kingdom and the broader region.
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </section>

//                                 <section id="merchandising" className={`${activeSectionText == 'merchandising' ? 'block' : 'hidden'} scroll-mt-20`}>
//                                     <div className="grid grid-cols-12 pb-16">
//                                         <div className="col-span-3">
//                                             <div className="flex items-center justify-center h-full">
//                                                 <img className="max-w-[130px]" src="images/Yello_logo_yellow_rgb.png" alt="" />
//                                             </div>
//                                         </div>
//                                         <div className="col-span-9">
//                                             <div className="md:border-l-[2px] border-gray-600 pl-6">
//                                                 <h2 className="text-[20px] font-bold mb-2">INTEGRATED LEADING COMPANY FOR MODERN SERVICES LTD.</h2>
//                                                 <div>
//                                                     INTEGRATED LEADING COMPANY FOR MODERN SERVICES LIMITED known in the market as Zokaei Logistics is a premier provider of third-party logistics (3PL) services, specializing in (1) advanced storage and cooling solutions, (2) efficient port clearance and customs facilitation, (3) transportation and distribution services, and (4) managing, marketing, and renting state-of-the-art storage facilities and cold storage units to businesses across various industries.


//                                                     With a commitment to optimizing supply chain efficiency, Al-Takamoul offers end-to-end 3PL solutions that are customized to enhance clients’ operational capabilities while reducing costs. By integrating warehousing, transportation, inventory management, and port clearance services, the company ensures seamless and compliant logistics operations. Known for its reliability and agility, Al-Takamoul is a trusted logistics partner throughout the Kingdom and the broader region.
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </section>
//                             </div>
//                         </div>

//                     </div>

//                 </main>
//                 <div className="relative">
//                     <div className="absolute right-0 bottom-0 -z-1">
//                         <img className="min-w-[200px] max-w-[300px]" src="https://www.abudawood.com/wp-content/themes/abudawood/assets/img/bg-growing-img.png" alt="" />
//                     </div>
//                 </div>
//             </div>
//             <ScrollToTop></ScrollToTop>
//         </>

//     );
// }
