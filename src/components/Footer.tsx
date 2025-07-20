import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <div className="Footer text-white bg-black">
            <div className="my-container">
                <div className="py-6 ">
                    <div className="flex justify-between mb-6 items-center pb-8 border-b border-gray-700">
                        <div>
                            <Image
  src="/images/Yello_logo_yellow_rgb.png" // Note the leading slash for public folder
  alt="Yello company logo" // Meaningful alt text
  width={80}
  height={80} // Assuming square logo (adjust if different ratio)
  className="w-[80px] h-auto" // Maintain aspect ratio
  quality={75} // Optimal for logos
  priority={true} // Logos are usually important
/>

                        </div>
                        <div>
                            <div>
                                <p className="mb-3 py-2 border-b-[2px] border-gray-700">You@email.com</p>
                                <div>
                                    <div className="text-black hover:text-white flex justify-center items-center py-2 bg-brand min-w-[200px] cursor-pointer" >
                                        Contact
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mb-6'>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 ">
                            <div className='mb-3'>
                                <h4 className="font-bold mb-8">Home</h4>
                                <div className="text-[13px]">
                                    <Link className="mb-2 block" href="/test">
                                        <div className="">About Zokaei</div>
                                    </Link>
                                    <Link className="mb-2 block" href="/test">
                                        <div className="">Numbers</div>
                                    </Link>
                                    <Link className="mb-2 block" href="/test">
                                        <div className="">Our Partners</div>
                                    </Link>
                                </div>
                            </div>
                            <div className='mb-3'>
                                <h4 className="font-bold mb-8">Who We Are</h4>
                                <div className="text-[13px]">
                                    <Link className="mb-2 block" href="/test">
                                        <div className="">Mission and Vision</div>
                                    </Link>
                                    <Link className="mb-2 block" href="/test">
                                        <div className="">Our legacy and values</div>
                                    </Link>
                                    <Link className="mb-2 block" href="/test">
                                        <div className="">Founder</div>
                                    </Link>
                                    <Link className="mb-2 block" href="/test">
                                        <div className="">Owners</div>
                                    </Link>
                                    <Link className="mb-2 block" href="/test">
                                        <div className="">Zokaei History</div>
                                    </Link>
                                </div>
                            </div>
                            <div className='mb-3'>
                                <h4 className="font-bold mb-8">Companies</h4>
                                <div className="text-[13px]">
                                    <Link className="mb-2 block" href="/test">
                                        <div className="">myCompany</div>
                                    </Link>
                                </div>
                            </div>
                            <div className='mb-3'>
                                <h4 className="font-bold mb-8">Our reach</h4>
                                <div className="text-[13px]">
                                    <Link className="mb-2 block" href="/test">
                                        <div className="">Countries We operate in</div>
                                    </Link>
                                </div>
                            </div>
                            <div className='mb-3'>
                                <h4 className="font-bold mb-8">Partners</h4>
                                <div className="text-[13px]">
                                    <Link className="mb-2 block" href="/test">
                                        <div className="">myPartner</div>
                                    </Link>
                                </div>
                            </div>
                            <div className='mb-3'>
                                <h4 className="font-bold mb-8">Services</h4>
                                <div className="text-[13px]">
                                    <Link className="mb-2 block" href="/test">
                                        <div className="">myService</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mb-[60px]'>
                        <Link className="mb-5 block" href="/test">
                            <div className="font-bold">Careers</div>
                        </Link>
                        <Link className="mb-2 block" href="/test">
                            <div className="font-bold">Contact</div>
                        </Link>
                    </div>
                    <div className='border-t border-gray-700 relative py-[10px]'>
                        <div className='flex gap-2'>
                            <div className='Square bg-brand w-[10px] h-[10px] rotate-45 translate-y-[-15px]'></div>
                            <div className='Square bg-brand w-[5px] h-[5px] rotate-45  translate-y-[-13px]'></div>
                        </div>
                        <div className='text-[12px]'>
                            © 2025 Zokaei. All Reights Reserved. Developed by Webneoo
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}