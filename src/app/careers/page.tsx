"use client"


import { LeadForm } from "@/components/careers/LeadWithUs"
import SEO from '@/components/SEO';
import ScrollToTop from '@/components/goTopScroll';
import Image from 'next/image'


export default function Careers() {

    return (
        <>
            <SEO
                title="Caspian"
                description="Learn about our mission and team"
                keywords="about, company, mission"
                url="https://domain.com"
            />

            <div className="Careers relative">
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
                                                            Unlocking Strategic Excellence
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
                                    <h2 className="text-[26px] font-[600] leading-[1.2] border-b-gray-300 border-b mb-[40px] pb-4">
                                        Careers at Zokaei: Grow with Us
                                    </h2>
                                    <div>
                                        <div className="mb-4">
                                            <h3 className="font-bold text-lg">Join Our Journey</h3>
                                            <div>
                                                At Zokaei, your career is more than a job – it’s a path of growth and team success. We focus on helping you grow personally and professionally, with tailored training from our dedicated development team.
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <h3 className="font-bold text-lg">Be Part of Something Special</h3>
                                            <div>
                                                At Zokaei, your career is more than a job – it’s a path of growth and team success. We focus on helping you grow personally and professionally, with tailored training from our dedicated development team.
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <h3 className="font-bold text-lg">Be Part of Something Special</h3>
                                            <div>
                                                At Zokaei, your career is more than a job – it’s a path of growth and team success. We focus on helping you grow personally and professionally, with tailored training from our dedicated development team.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 lg:col-span-4">
                                    <LeadForm />
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
