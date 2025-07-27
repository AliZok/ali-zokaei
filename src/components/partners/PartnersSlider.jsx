"use client"
import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

const SLIDES = [
    { src: '/images/test/car-test.webp', alt: 'Car showcase' },
    { src: '/images/test/wat-test.jpg', alt: 'Waterfront view' },
    { src: '/images/test/stares.jpg', alt: 'Alternative waterfront view' }
];

export default function PartnersSlider() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 8000, stopOnInteraction: false })
    ])
    const [selectedIndex, setSelectedIndex] = useState(0)

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    const scrollTo = useCallback((index) => {
        if (emblaApi) emblaApi.scrollTo(index)
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return

        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap())
        }

        emblaApi.on('select', onSelect)
        return () => {
            emblaApi.off('select', onSelect)
        }
    }, [emblaApi])

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowLeft') scrollPrev()
            if (event.key === 'ArrowRight') scrollNext()
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [scrollPrev, scrollNext])

    return (
        <div className="CompaniesNavSlider relative">
            <div className="min-h-[100vh] w-full">
                <div className="embla overflow-hidden" ref={emblaRef}>
                    <div className="embla__container flex">
                        {SLIDES.map((slide, index) => (
                            <div className="embla__slide flex-[0_0_100%] min-w-0 relative h-[100vh] text-white" key={index}>
                                <div
                                    data-aos="fade-down"
                                    data-aos-delay="100"
                                    className='absolute w-full z-10 left-[75%] md:left-[50%] bottom-[10%] translate-[-50%] md:translate-x-[-50%] translate-x-[-80%]'
                                >
                                    <div className='text-white my-container'>
                                        <div className='px-[10%]'>
                                            <div className='text-[28px] md:text-[37px] font-bold max-w-[800px]'>
                                                <div className=''>
                                                    Together, We Thrive
                                                </div>
                                                <div className='h-[4px] w-[220px] bg-brand'></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='Square z-10 absolute left-[55%] bottom-[90px] bg-brand w-[20px] h-[20px] rotate-45'></div>
                                <Image
                                    src={slide.src}
                                    alt={slide.alt}
                                    fill
                                    className="object-cover"
                                    priority={index === 0}
                                    sizes="100vw"
                                    quality={90}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={scrollPrev}
                className="hidden md:block absolute p-6 cursor-pointer left-8 top-1/2 -translate-y-1/2 z-10 text-white rounded-full hover:bg-black/50 transition-all hover:opacity-[1] opacity-[0.5]"
                aria-label="Previous slide"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                </svg>
            </button>

            <button
                onClick={scrollNext}
                className="hidden md:block absolute p-6 cursor-pointer right-8 top-1/2 -translate-y-1/2 z-10 text-white rounded-full hover:bg-black/50 transition-all hover:opacity-[1] opacity-[0.5]"
                aria-label="Next slide"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                </svg>
            </button>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center">
                <div className="flex h-1 overflow-hidden gap-1.5">
                    {SLIDES.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollTo(index)}
                            className={`h-full transition-all duration-300 w-8 cursor-pointer ${selectedIndex === index ? ' bg-brand' : ' bg-white/50 hover:bg-white/70'}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

// "use client"
// import { useCallback, useEffect } from 'react'
// import useEmblaCarousel from 'embla-carousel-react'
// import Autoplay from 'embla-carousel-autoplay'
// import Image from 'next/image'


// export default function OurReachSlider() {
//     const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
//         Autoplay({ delay: 80000, stopOnInteraction: false })
//     ])

//     const scrollPrev = useCallback(() => {
//         if (emblaApi) emblaApi.scrollPrev()
//     }, [emblaApi])

//     const scrollNext = useCallback(() => {
//         if (emblaApi) emblaApi.scrollNext()
//     }, [emblaApi])

//     useEffect(() => {
//         const handleKeyDown = (event) => {
//             if (event.key === 'ArrowLeft') scrollPrev()
//             if (event.key === 'ArrowRight') scrollNext()
//         }

//         window.addEventListener('keydown', handleKeyDown)
//         return () => window.removeEventListener('keydown', handleKeyDown)
//     }, [scrollPrev, scrollNext])

//     return (
//         <div className="CompaniesNavSlider relative">
//             <div className="min-h-[100vh] w-full">
//                 <div className="embla overflow-hidden" ref={emblaRef}>
//                     <div className="embla__container flex">
//                         {['/images/test/car-test.webp', '/images/test/wat-test.jpg', '/images/test/stares.jpg'].map((src, index) => (
//                             <div className="embla__slide flex-[0_0_100%] min-w-0 relative h-[100vh] text-white" key={index}>
//                                 <div
//                                     data-aos="fade-down"
//                                     data-aos-delay="100"
//                                     className='absolute w-full z-10 left-[75%] md:left-[50%] bottom-[10%] translate-[-50%] md:translate-x-[-50%] translate-x-[-80%]'
//                                 >
//                                     <div className='text-white my-container'>
//                                         <div className='px-[10%]'>
//                                             <div className='text-[37px] font-bold max-w-[800px]'>
//                                                 <div className=''>
//                                                     Unleashing Infinite
//                                                 </div>
//                                                 <div className=''>
//                                                     Potential Together
//                                                 </div>
//                                                 <div className='h-[4px] w-[220px] bg-brand'></div>
//                                             </div>
//                                         </div>
//                                     </div>

//                                 </div>
//                                 <div className='Square z-10 absolute left-[55%] bottom-[90px] bg-brand w-[20px] h-[20px] rotate-45'></div>

//                                 <Image
//                                     src={src}
//                                     alt={`Slide ${index + 1}`}
//                                     fill
//                                     className="object-cover"
//                                     priority={index === 0}
//                                     sizes="100vw"
//                                     quality={90}
//                                 />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             <button
//                 onClick={scrollPrev}
//                 className="hidden md:block absolute p-6 cursor-pointer left-8 top-1/2 -translate-y-1/2 z-10 text-white p-3 rounded-full hover:bg-black/50 transition-all hover:opacity-[1] opacity-[0.5]"
//                 aria-label="Previous slide"
//             >
//                 <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M15 18l-6-6 6-6" />
//                 </svg>
//             </button>

//             <button
//                 onClick={scrollNext}
//                 className="hidden md:block absolute p-6 cursor-pointer right-8 top-1/2 -translate-y-1/2 z-10 text-white p-3 rounded-full hover:bg-black/50 transition-all hover:opacity-[1] opacity-[0.5]"
//                 aria-label="Next slide"
//             >
//                 <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M9 18l6-6-6-6" />
//                 </svg>
//             </button>
//         </div>
//     )
// }
