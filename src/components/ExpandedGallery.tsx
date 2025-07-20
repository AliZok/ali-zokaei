"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const galleryItems = [
  {
    id: 1,
    number: "01",
    title: "Establishment",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Teslathinker.jpg/250px-Teslathinker.jpg",
    description: "Foundation and early beginnings",
  },
  {
    id: 2,
    number: "02",
    title: "Manufacturing",
    image:
      "https://media.npr.org/assets/bakertaylor/covers/e/edison/9780812993110_custom-aa4b8af9d04b96b892ccd4e1e4640734233eba23.jpg?s=600&c=85&f=jpeg",
    description: "Production and development phase",
  },
  {
    id: 3,
    number: "03",
    title: "Expansion",
    image:
      "https://www.neh.gov/sites/default/files/styles/1000x1000_square/public/2018-07/2014-05-06_Isaacson_Conversation_04.jpg?h=76d1f544&itok=6NnSdLcc",
    description: "Growth and scaling operations",
  },
  {
    id: 4,
    number: "04",
    title: "Partnership",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Teslathinker.jpg/250px-Teslathinker.jpg",
    description: "Collaboration and strategic alliances",
  },
]

export default function Component() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIsMobile()
    window.addEventListener("resize", checkIsMobile)

    return () => window.removeEventListener("resize", checkIsMobile)
  }, [])

  return (
    <div className="w-full h-auto max-h-none lg:max-h-[700px] md:h-[75vh] bg-black overflow-hidden">
      <div className="flex flex-col md:flex-row h-full">
        {galleryItems.map((item) => (
          <motion.div
            key={item.id}
            className="relative cursor-pointer overflow-hidden h-full md:h-auto min-h-[240px] w-full"
            animate={
              !isMobile
                ? {
                    width: hoveredId === item.id ? "55%" : hoveredId ? "8.33%" : "25%",
                  }
                : {}
            }
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="absolute inset-0">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover grayscale"
                priority
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="absolute top-4 left-4 md:top-8 md:left-8 z-20">
              <span className="text-2xl md:text-4xl font-bold text-brand">{item.number}</span>
            </div>

            {/* Only show vertical title on desktop or when not hovered on mobile */}
            {(!isMobile || (isMobile && hoveredId !== item.id)) && (
              <motion.div
                className="absolute bottom-4 left-4 md:bottom-8 md:left-8 z-20"
                animate={{
                  opacity: !isMobile && hoveredId === item.id ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="md:transform md:-rotate-90 md:origin-bottom-left">
                  <span className="text-lg md:text-2xl font-semibold text-brand whitespace-nowrap">{item.title}</span>
                </div>
              </motion.div>
            )}

            <AnimatePresence>
              {hoveredId === item.id && (
                <motion.div
                  className="absolute inset-0 z-30 flex flex-col justify-center items-center text-center p-6 md:p-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <motion.h2
                    className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {item.title}
                  </motion.h2>
                  <motion.p
                    className="text-sm md:text-xl text-gray-300 max-w-md"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    {item.description}
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Only show indicator bar on desktop */}
            {!isMobile && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-brand z-20"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredId === item.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ transformOrigin: "left" }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}



// "use client"

// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import Image from "next/image"

// const galleryItems = [
//     {
//         id: 1,
//         number: "01",
//         title: "Establishment",
//         image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Teslathinker.jpg/250px-Teslathinker.jpg",
//         description: "Foundation and early beginnings",
//     },
//     {
//         id: 2,
//         number: "02",
//         title: "Manufacturing",
//         image: "https://media.npr.org/assets/bakertaylor/covers/e/edison/9780812993110_custom-aa4b8af9d04b96b892ccd4e1e4640734233eba23.jpg?s=600&c=85&f=jpeg",
//         description: "Production and development phase",
//     },
//     {
//         id: 3,
//         number: "03",
//         title: "Expansion",
//         image: "https://www.neh.gov/sites/default/files/styles/1000x1000_square/public/2018-07/2014-05-06_Isaacson_Conversation_04.jpg?h=76d1f544&itok=6NnSdLcc",
//         description: "Growth and scaling operations",
//     },
//     {
//         id: 4,
//         number: "04",
//         title: "Partnership",
//         image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Teslathinker.jpg/250px-Teslathinker.jpg",
//         description: "Collaboration and strategic alliances",
//     },
// ]

// export default function Component() {
//     const [hoveredId, setHoveredId] = useState<number | null>(null)

//     return (
//         <div className="w-full h-[75vh] max-h-[700px] bg-black overflow-hidden">
//             <div className="flex h-full">
//                 {galleryItems.map((item) => (
//                     <motion.div
//                         key={item.id}
//                         className="relative cursor-pointer overflow-hidden"
//                         initial={{ width: "25%" }}
//                         animate={{
//                             width: hoveredId === item.id ? "55%" : hoveredId ? "8.33%" : "25%",
//                         }}
//                         transition={{
//                             duration: 0.6,
//                             ease: [0.25, 0.46, 0.45, 0.94],
//                         }}
//                         onMouseEnter={() => setHoveredId(item.id)}
//                         onMouseLeave={() => setHoveredId(null)}
//                     >

//                         <div className="absolute inset-0">
//                             <Image
//                                 src={item.image || "/placeholder.svg"}
//                                 alt={item.title}
//                                 fill
//                                 className="object-cover grayscale"
//                                 priority
//                             />

//                             <div className="absolute inset-0 bg-black/40" />
//                         </div>

//                         <div className="absolute top-8 left-8 z-20">
//                             <span className="text-4xl font-bold text-brand">{item.number}</span>
//                         </div>

//                         <motion.div
//                             className="absolute bottom-8 left-8 z-20"
//                             animate={{
//                                 opacity: hoveredId === item.id ? 0 : 1,
//                             }}
//                             transition={{ duration: 0.3 }}
//                         >
//                             <div className="transform -rotate-90 origin-bottom-left">
//                                 <span className="text-2xl font-semibold text-brand whitespace-nowrap">{item.title}</span>
//                             </div>
//                         </motion.div>

//                         <AnimatePresence>
//                             {hoveredId === item.id && (
//                                 <motion.div
//                                     className="absolute inset-0 z-30 flex flex-col justify-center items-center text-center p-12"
//                                     initial={{ opacity: 0, y: 20 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     exit={{ opacity: 0, y: 20 }}
//                                     transition={{ duration: 0.4, delay: 0.2 }}
//                                 >
//                                     <motion.h2
//                                         className="text-2xl font-bold text-white mb-4"
//                                         initial={{ opacity: 0, scale: 0.8 }}
//                                         animate={{ opacity: 1, scale: 1 }}
//                                         transition={{ duration: 0.5, delay: 0.3 }}
//                                     >
//                                         {item.title}
//                                     </motion.h2>
//                                     <motion.p
//                                         className="text-xl text-gray-300 max-w-md"
//                                         initial={{ opacity: 0, y: 10 }}
//                                         animate={{ opacity: 1, y: 0 }}
//                                         transition={{ duration: 0.4, delay: 0.5 }}
//                                     >
//                                         {item.description}
//                                     </motion.p>
//                                 </motion.div>
//                             )}
//                         </AnimatePresence>

//                         <motion.div
//                             className="absolute bottom-0 left-0 right-0 h-1 bg-brand z-20"
//                             initial={{ scaleX: 0 }}
//                             animate={{ scaleX: hoveredId === item.id ? 1 : 0 }}
//                             transition={{ duration: 0.3 }}
//                             style={{ transformOrigin: "left" }}
//                         />
//                     </motion.div>
//                 ))}
//             </div>
//         </div>
//     )
// }
