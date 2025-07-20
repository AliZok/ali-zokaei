"use client"


import OurReachSlider from "@/components/our-reach/OurReachSlider"
import SEO from '@/components/SEO';
import ScrollToTop from '@/components/goTopScroll';
import Image from 'next/image'

export default function OurReach() {


    return (
        <>
            <SEO
                title="Caspian"
                description="Learn about our mission and team"
                keywords="about, company, mission"
                url="https://domain.com"
            />

            <div className="OurReach bg-black relative">
                <main className="relative pb-10">
                    <div className="mb-[80px]">
                        <OurReachSlider />
                    </div>
                    <div className="relative h-[85vh]">
                        <div className="my-container z-10 relative">
                            <div className="text-white">
                                <div className="Square bg-brand mb-6 w-[20px] h-[20px] rotate-45 translate-y-[-15px]"></div>
                                <h2 className="text-[26px] font-[600] leading-[1.2] mb-[40px]">
                                    Countries We <br></br>
                                    Operate In
                                </h2>
                                <div className="">
                                    <div className="max-w-[350px]">
                                        <h3 className="text-[22px] text-brand mb-1">
                                            Japan
                                        </h3>
                                        <div className="mb-1">
                                            Jeddah
                                        </div>
                                        <div className="h-[30px] w-[2px] bg-brand mb-1"></div>
                                        <div className="text-[13px] mb-2">
                                            Head Office6507 King Abdulaziz Branch Road, Al Muhammadiya District. Jeddah 23617
                                            Distribution Center8896, An Nakhil District, Jeddah 23242
                                        </div>
                                        <div className="text-brand">
                                            <a href="tel:+966122877900">Telephone: +966122877900</a>
                                        </div>
                                        <div className="text-brand">
                                            <a href="info@abudawood.com">info@abudawood.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute z-1 w-full right-0 md:top-0 top-[285px] text-right">
                            <Image
                                src="https://www.abudawood.com/wp-content/themes/abudawood/assets/img/saudimap.png"
                                alt="Saudi Arabia map"
                                width={800}  // Set appropriate width
                                height={600} // Set appropriate height
                                className="inline-block"
                                priority={true} // Optional: if this image is above the fold
                            />
                            </div>
                    </div>

                </main>
                <div className="relative">

                    <div className="absolute right-0 bottom-0 -z-1">
                        <Image
                            src="https://www.abudawood.com/wp-content/themes/abudawood/assets/img/bg-growing-img.png"
                            alt="Decorative background element"
                            width={300}  // Matches your max-w-[300px]
                            height={200} // Approximate height maintaining aspect ratio
                            className="min-w-[200px] max-w-[300px]"
                            quality={75} // Optional: reduces file size while maintaining quality
                            priority={false} // Set to true if this is above-the-fold
                        />
                        </div>
                </div>
            </div>
            <ScrollToTop></ScrollToTop>
        </>

    );
}
