"use client"

import { useState, type ReactNode } from "react"

interface CollapseProps {
  trigger: ReactNode | ((isOpen: boolean) => ReactNode)
  children: ReactNode
  defaultOpen?: boolean
  className?: string
}

export function Collapse({ trigger, children, defaultOpen = false, className = "" }: CollapseProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  const renderTrigger = () => {
    if (typeof trigger === "function") {
      return trigger(isOpen)
    }
    return trigger
  }

  return (
    <div className={className}>
      {/* Clickable Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-0 bg-transparent border-none cursor-pointer hover:opacity-80 transition-opacity"
      >
        {renderTrigger()}
      </button>

      {/* Sliding Content */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[2000px]" : "max-h-0"}`}
      >
        <div className="pt-6">{children}</div>
      </div>
    </div>
  )
}


// "use client"

// import { useState } from "react"

// export default function Component() {
//   const [isExpanded, setIsExpanded] = useState(true)

//   const capabilities = [
//     "Introduce products to retailers.",
//     "Ensure brand availability at appropriate locations.",
//     "Monitor and report on pricing.",
//     "Tackle urgent issues effectively.",
//     "Implement promotions and distribute materials.",
//     "Manage shelf and display presence.",
//     "Maintain packaging integrity.",
//   ]

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white">
//       {/* Clickable Header */}
//       <button
//         onClick={() => setIsExpanded(!isExpanded)}
//         className="flex items-center gap-2 p-0 h-auto hover:bg-transparent mb-8"
//       >
//         {/* Yellow Triangle - Down when expanded, Right when collapsed */}
//         <div
//           className={`transition-all duration-300 ease-in-out ${
//             isExpanded
//               ? "w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[20px] border-t-yellow-400"
//               : "w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[20px] border-l-yellow-400"
//           }`}
//         />
//         <h1 className="text-2xl font-semibold text-gray-900">Enhancing Brand Presence at Point of Sale</h1>
//       </button>

//       {/* Sliding Content - Only height transition, no opacity */}
//       <div
//         className={`overflow-hidden transition-all duration-500 ease-in-out ${
//           isExpanded ? "max-h-[1000px]" : "max-h-0"
//         }`}
//       >
//         {/* Cards Section */}
//         <div className="grid md:grid-cols-2 gap-6 mb-8">
//           <div className="bg-yellow-400 p-8 rounded-lg">
//             <h2 className="text-xl font-semibold text-gray-900">
//               Sales Drivers
//               <br />
//               Optimization
//             </h2>
//           </div>
//           <div className="bg-gray-200 p-8 rounded-lg">
//             <h2 className="text-xl font-semibold text-gray-900">
//               Comprehensive
//               <br />
//               Services
//             </h2>
//           </div>
//         </div>

//         {/* Description */}
//         <p className="text-gray-700 mb-6">
//           We focus on enhancing all aspects of your brand's sales performance at retail locations.
//         </p>

//         {/* Team Capabilities Section */}
//         <div className="border-t border-gray-200 pt-6">
//           <h3 className="text-lg font-semibold text-gray-900 mb-6">Our team is equipped to</h3>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {capabilities.map((capability, index) => (
//               <div key={index} className="relative">
//                 <div className="h-1 w-12 bg-yellow-400 mb-3"></div>
//                 <p className="text-gray-700 leading-relaxed text-sm">{capability}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
