"use client"

import { useState, useEffect } from "react"
import { Truck, DollarSign, Settings, Users, PackageOpen, ShoppingCart } from "lucide-react"
import { ArrowUp } from "iconsax-reactjs"

const categories = [
    {
        id: "logistic",
        title: "Logistic",
        icon: "https://www.abudawood.com/wp-content/themes/abudawood/assets/img/icons/Logistic-hover.png",
    },
    {
        id: "investment",
        title: "Investment",
        icon: "https://www.abudawood.com/wp-content/themes/abudawood/assets/img/icons/Investment-hover.png",
    },
    {
        id: "operation",
        title: "Operation and Maintenance",
        icon: "https://www.abudawood.com/wp-content/themes/abudawood/assets/img/icons/operation-maintenance-hover.png",
    },
    {
        id: "shared",
        title: "Shared Services",
        icon: "https://www.abudawood.com/wp-content/themes/abudawood/assets/img/icons/shared-services-hover.png",
    },
    {
        id: "distribution",
        title: "Distribution",
        icon: "https://www.abudawood.com/wp-content/themes/abudawood/assets/img/icons/operation-maintenance-hover.png",
    },
    {
        id: "merchandising",
        title: "Merchandising Services",
        icon: "https://www.abudawood.com/wp-content/themes/abudawood/assets/img/icons/Logistic-hover.png",
    },
]

export default function CategoryCards({ activeSection }) {
    const [activeCategory, setActiveCategory] = useState("logistic")

    // function activeSection(section:string) {
    //     console.log("fuckin tale",section)
    //     return section
    // }

    const handleCategoryClick = (categoryId: string) => {
        setActiveCategory(categoryId)
        setTimeout(() => {
            const section = document.getElementById('all-info')
            if (section) {
                section.scrollIntoView({ behavior: "smooth" })
            }
            activeSection(categoryId)
        }, 300);


    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200

            for (const category of categories) {
                const section = document.getElementById(category.id)
                if (section) {
                    const sectionTop = section.offsetTop
                    const sectionBottom = sectionTop + section.offsetHeight

                    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                        setActiveCategory(category.id)
                        break
                    }
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left items-end" dir="ltr">
            {categories.map((category) => {
                const isActive = activeCategory === category.id;
                const buttonClasses = [
                    "flex flex-col  items-start justify-start text-left transition-all duration-300 deep-shadow",
                    isActive ? "bg-brand text-black p-6 h-55" : "bg-[#f7f7f7] p-8 h-48"
                ].join(' ');

                const titleClasses = `font-medium leading-tight w-full pb-2  ${isActive ? "text-3xl " : "text-2xl border-b-[1px]"}`;

                return (
                    <a
                        key={category.id}
                        onClick={() => handleCategoryClick(category.id)}
                        className={`hover:!text-inherit ${buttonClasses} ${isActive ? "" : 'opacity-60'} `}
                        href={`#${category.id}`}
                    >

                        <img src={category.icon} className="mb-3 w-[60px]" />
                        <h3 className={`${titleClasses} mb-1`} >
                            {category.title}
                        </h3>
                        {isActive && (<div className="h-[2px] bg-black w-[50px]"></div>) }
                        
                    </a>
                );
            })}
        </div>
    );
    //   return (
    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left" dir="ltr">
    //       {categories.map((category) => (
    //         <button
    //           key={category.id}
    //           onClick={() => handleCategoryClick(category.id)}
    //           className={cn(
    //             "flex flex-col items-start justify-start text-left rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl",
    //             activeCategory === category.id
    //               ? "bg-yellow-400 text-black p-6 h-40" // Active: yellow background, smaller height
    //               : "bg-white text-gray-600 hover:bg-gray-50 p-8 h-48", // Inactive: white background, taller height
    //           )}
    //         >
    //           <category.icon size={activeCategory === category.id ? 40 : 48} className="mb-3" />
    //           <h3 className={cn("font-medium leading-tight", activeCategory === category.id ? "text-lg" : "text-xl")}>
    //             {category.title}
    //           </h3>
    //         </button>
    //       ))}
    //     </div>
    //   )
}
