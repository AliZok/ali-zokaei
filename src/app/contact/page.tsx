"use client"


import { ContactUs } from "@/components/contact/ContactUs"
import SEO from '@/components/SEO';
import ScrollToTop from '@/components/goTopScroll';
import Image from 'next/image'


export default function Contact() {

    return (
        <>
            <SEO
                title="Caspian"
                description="Learn about our mission and team"
                keywords="about, company, mission"
                url="https://domain.com"
            />

            <div className="Contact relative">
                <main className="relative pb-[150px]">
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
                                                            Connect With Us
                                                        </div>
                                                        <div className='h-[4px] w-[220px] bg-brand'></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
                        <div className="my-container relative">
                            <div className="grid grid-cols-12 gap-5">
                                <div className="col-span-12 lg:col-span-8 pt-[90px]">
                                    <div className="Square bg-brand mb-6 w-[20px] h-[20px] rotate-45 translate-y-[-10px]"></div>
                                    <h2 className="text-[26px] font-[600] leading-[1.2] mb-[20px] pb-4">
                                        Get in Touch <br></br>
                                        with Zokaei
                                    </h2>
                                    <div className="max-w-[400px]">
                                        <div className="mb-4">
                                            <div>
                                                We&#39;re Here for You
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <h3 className="font-[500] text-sm mb-1">Got questions? Need some help?</h3>
                                            <h3 className="font-[500] text-sm">We&#39;re just a message away.</h3>
                                        </div>
                                        <div className="mb-4">
                                            <h3 className="font-[500] text-sm ">Contact us using the details below, and let&#39;s talk about how we can assist you. Your queries and concerns are important to us, and we're eager to connect with you.</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 lg:col-span-4">
                                    <ContactUs />
                                </div>
                            </div>
                        </div>
                    </div>

                </main>

            </div>
            <ScrollToTop></ScrollToTop>
        </>

    );
}
