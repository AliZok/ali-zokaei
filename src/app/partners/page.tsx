"use client"


import PartnersSlider from "@/components/partners/PartnersSlider"
import BrandSection from "@/components/partners/BrandSection"
import SEO from '@/components/SEO';
import ScrollToTop from '@/components/goTopScroll';
import { useState } from 'react'
import Image from 'next/image'



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
                      <BrandSection></BrandSection>

                </main>
                <div className="relative">
                    <div className="absolute right-0 bottom-0 -z-1 ">
                       <div className="min-w-[200px] max-w-[300px] relative aspect-[3/2]">
                        <Image
                            src="https://www.abudawood.com/wp-content/themes/abudawood/assets/img/path_bg.png"
                            alt="Decorative path background"
                            fill
                            style={{ objectFit: 'contain' }}
                            quality={80}
                        />
                        </div>
                    </div>
                    
                </div>
            </div>
            <ScrollToTop></ScrollToTop>
        </>

    );
}
