"use client"
import CardSlider from "@/components/CardSlider"
import { motion } from 'framer-motion';


export default function SlideGallery() {
    return (
        <div className=" SlideGallery">
            <div className="my-container">
                <motion.div initial={{ opacity: 0, scale: 0 }} 
                    whileInView={{
                        opacity: 1,
                        scale: 1, 
                    }}
                    viewport={{ amount: 0.3, once: true }}
                    transition={{
                        duration: 1.2, ease: "easeOut",

                    }}
                    style={{
                        transformOrigin: "center", 
                    }}>
                    <div className="relative">
                        <div className="grid grid-cols-12">
                            <div className="lg:col-span-3 col-span-12">
                                <div className="">
                                    <div className="Square bg-brand mb-2 w-[20px] h-[20px] rotate-45 translate-y-[-15px]"></div>
                                    <h2 className="text-[26px] font-[600]">Our <br></br> Partners</h2>
                                </div>
                            </div>
                            <div className="lg:col-span-9 col-span-12">
                                <CardSlider></CardSlider>
                            </div>
                        </div>
                    </div>

                </motion.div>

            </div>
        </div>
    )
}