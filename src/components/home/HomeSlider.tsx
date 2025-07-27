"use client"
import { useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'


export default function HomeSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 80000, stopOnInteraction: false })
  ])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
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
    <div className="HomeSlider relative">
      <div className="min-h-[100vh] w-full">
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {['/images/test/car-test.webp', '/images/test/wat-test.jpg', '/images/test/stares.jpg'].map((src, index) => (
              <div className="embla__slide flex-[0_0_100%] min-w-0 relative h-[100vh] text-white" key={index}>
                <div
                  data-aos="fade-down"
                  data-aos-delay="100"
                  className=' absolute z-10 left-[70%] md:left-[50%] top-[50%] translate-[-50%] md:translate-x-[-50%] translate-x-[-80%]'
                >
                    
                  <div className='flex gap-4 text-[28px] md:text-[48px] font-bold'>
                    <div className='text-brand border-b-[2px] border-brand min-w-[140px] md:min-w-[230px]'>Legacy of</div>
                    <div>Excellent</div>
                  </div>
                  
                </div>
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
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

      <button
        onClick={scrollPrev}
        className="hidden md:block absolute p-6 cursor-pointer left-8 top-1/2 -translate-y-1/2 z-10 text-white p-3 rounded-full hover:bg-black/50 transition-all hover:opacity-[1] opacity-[0.5]"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="yellow" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <button
        onClick={scrollNext}
        className="hidden md:block absolute p-6 cursor-pointer right-8 top-1/2 -translate-y-1/2 z-10 text-white p-3 rounded-full hover:bg-black/50 transition-all hover:opacity-[1] opacity-[0.5]"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="yellow" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  )
}
