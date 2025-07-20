import Image from "next/image";
export default function BrandSection() {
    const brands = [
        {
            name: "Agthia",
            logo: "/images/test/butterfly.jpg",
            location: "Bahrain",
        },
        {
            name: "Armor All",
            logo: "/images/test/butterfly.jpg",
            location: "Bahrain",
        },
        {
            name: "Panzani",
            logo: "/images/test/butterfly.jpg",
            location: "Bahrain",
        },
        {
            name: "Clorox",
            logo: "/images/test/butterfly.jpg",
            location: "KSA, Bahrain, Iraq",
        },
        {
            name: "Coty",
            logo: "/images/test/butterfly.jpg",
            location: "Bahrain",
        },
        {
            name: "Dilmah",
            logo: "/images/test/butterfly.jpg",
            location: "Bahrain",
        },
        {
            name: "DG Doetsch Grether AG",
            logo: "/images/test/butterfly.jpg",
            location: "Bahrain",
        },
        {
            name: "Dr. Oetker",
            logo: "/images/test/butterfly.jpg",
            location: "Bahrain",
        },
        {
            name: "Panzani",
            logo: "/images/test/butterfly.jpg",
            location: "Bahrain",
        },
        {
            name: "Clorox",
            logo: "/images/test/butterfly.jpg",
            location: "KSA, Bahrain, Iraq",
        },
        {
            name: "Coty",
            logo: "/images/test/butterfly.jpg",
            location: "Bahrain",
        },
        {
            name: "Dilmah",
            logo: "/images/test/butterfly.jpg",
            location: "Bahrain",
        },
        {
            name: "DG Doetsch Grether AG",
            logo: "/images/test/butterfly.jpg",
            location: "Bahrain",
        },
        {
            name: "Dr. Oetker",
            logo: "/images/test/butterfly.jpg",
            location: "Bahrain",
        },
    ]

    return (
        <div className=" py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {brands.map((brand, index) => (
                        <div key={index} className="flex flex-col items-center space-y-4">
                            <div className="bg-white  p-6 w-full h-24 flex items-center justify-center">
                                <Image
                                    src={brand.logo || "/placeholder.svg"}
                                    alt={brand.name || "Brand logo"}
                                    width={200}  // Set appropriate maximum width
                                    height={120} // Matches your min-h-[120px]
                                    className="max-w-full max-h-full object-contain min-h-[120px]"
                                    style={{
                                        objectFit: 'contain',
                                        height: 'auto'
                                    }}
                                    quality={80}
                                    />
                            </div>
                            <div className="bg-brand text-black font-semibold px-6 py-2 rounded-md text-sm w-full text-center">
                                {brand.location}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
