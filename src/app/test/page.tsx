
"use client"
import useEmblaCarousel from 'embla-carousel-react'
import { usePageDataStore } from '@/store/test';
import { testDataService } from '@/api'
import { motion } from 'framer-motion';

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel()
  const testTitle = usePageDataStore((state) => state.testTitle);

  const fetchUsers = async () => {
    try {

      const data = await testDataService.getAll()

    } finally {

    }
  }
  fetchUsers()

  return (
    <div>
      <motion.div className='alizoka' initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }} >
        alizoka
      </motion.div>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"
      />
      <motion.div
        whileHover={{
          y: -5,
          boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
        }}
        className="p-6 bg-white rounded-lg shadow"
      >
        Card Content
      </motion.div>
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className='alizoka'
      >
        This element will fade up when scrolled into view
      </div>
      hello _ {testTitle}



    </div>

  )
}
