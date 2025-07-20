"use client"


import PartnersSlider from "@/components/partners/PartnersSlider"
import BrandSection from "@/components/partners/BrandSection"
import SEO from '@/components/SEO';
import ScrollToTop from '@/components/goTopScroll';
import { useState } from 'react'



export default function OurReach() {
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

            <div className="OurReach  relative">
                <main className="relative pb-10">
                    <div className="mb-[80px]">
                        <PartnersSlider />
                    </div>
                    {/* <div className="relative h-[85vh]">
                      
                        <div className="absolute z-1 w-full right-0 md:top-0 top-[285px] text-right">
                            <img className="inline-block" src="https://www.abudawood.com/wp-content/themes/abudawood/assets/img/saudimap.png" alt="" />
                        </div>
                    </div> */}
                      <BrandSection></BrandSection>

                </main>
                <div className="relative">
                    <div className="absolute right-0 bottom-0 -z-1 ">
                        <img className="min-w-[200px] max-w-[300px] " src="https://www.abudawood.com/wp-content/themes/abudawood/assets/img/path_bg.png" alt="" />
                    </div>
                </div>
            </div>
            <ScrollToTop></ScrollToTop>
        </>

    );
}
