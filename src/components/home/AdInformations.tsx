/* eslint-disable @next/next/no-img-element */
export default function AdInformations() {
    return (
        <div className="AdInformations">
            <div className="my-container">

                <div className="mb-8">
                    <div className='Square bg-brand w-[20px] h-[20px] rotate-45 translate-y-[-15px]'></div>
                    <h3></h3>
                </div>

                <div className="row mb-4 border-b-[1px] border-l-[1px] border-gray-700 p-4 hover:bg-brand hover:!border-white cursor-pointer change-hover ">
                    <div className="col-md-12 hover:bg-brand">
                        <div className="flex justify-between items-center">
                            <div className="div_infos_content">
                                <h1 className="">+260,000</h1>
                                <p className="text-[20px]"> Stores Covered</p>
                            </div>
                            <div className="">
                              <img
                                src="https://www.abudawood.com/wp-content/themes/abudawood/assets/img/icons-home/Home page Icons-01.png"
                                alt=""
                                className="w-[50px] befor-hover"
                                />
                                <img
                                src="images/house-white.png"
                                alt=""
                                className="w-[50px] after-hover"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-4 mb-4">
                    <div className="md:col-span-8 col-span-12 border-b-[1px] border-l-[1px] border-gray-700 p-4 hover:bg-brand change-hover hover:!border-white cursor-pointer">
                        <div className="flex justify-between items-center">
                            <div className="div_infos_content">
                                <h1>+4000</h1>
                                <p className="text-[20px]">Committed Employees</p>
                            </div>
                            <div className="">
                                <img
                                src="https://www.abudawood.com/wp-content/themes/abudawood/assets/img/icons-home/Home page Icons-05.png"
                                alt=""
                                className="w-[50px] befor-hover"
                                />
                                <img
                                src="https://www.abudawood.com/wp-content/themes/abudawood/assets/img/icons-home/Home page Icons-11.png"
                                alt=""
                                className="w-[50px] after-hover"
                                />
                            </div>
                        </div>
                    </div>
                    <div className=" change-hover md:col-span-4 col-span-12 border-b-[1px] border-l-[1px] border-gray-700 p-4 hover:bg-brand hover:!border-white cursor-pointer">
                        <div className="flex justify-between items-center">
                            <div className="div_infos_content">
                                <h1>+1,500</h1>
                                <p className="text-[20px]">Vehicles on the Road</p>
                            </div>
                                 <div className="">
                                <img
                                src="https://www.abudawood.com/wp-content/themes/abudawood/assets/img/icons-home/Home page Icons-02.png"
                                alt=""
                                className="w-[50px] befor-hover"
                                />
                                <img
                                src="https://www.abudawood.com/wp-content/themes/abudawood/assets/img/icons-home/Home page Icons-08.png"
                                alt=""
                                className="w-[50px] after-hover"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-between">
                    <div className=" change-hover border-b-[1px] border-l-[1px] border-gray-700 p-4 hover:bg-brand hover:!border-white cursor-pointer">
                        <div className="flex justify-between items-center">
                            <div className="div_infos_content">
                                <h1>+80 Million</h1>
                                <p className="text-[20px]">Cases Delivered Annually</p>
                            </div>
                             <div className="">
                                <img
                                src="https://www.abudawood.com/wp-content/themes/abudawood/assets/img/icons-home/Home page Icons-06.png"
                                alt=""
                                className="w-[50px] befor-hover"
                                />
                                <img
                                src="https://www.abudawood.com/wp-content/themes/abudawood/assets/img/icons-home/Home page Icons-12.png"
                                alt=""
                                className="w-[50px] after-hover"
                                />
                            </div>
                        
                        </div>
                    </div>
                    <div className=" change-hover border-b-[1px] border-l-[1px] border-gray-700 p-4 hover:bg-brand hover:!border-white cursor-pointer">
                        <div className="flex justify-between items-center">
                            <div className="div_infos_content">
                                <h1>+50<span></span></h1>
                                <p className="text-[20px]">More than 50 main leading brands</p>
                            </div>
                                  <div className="">
                                <img
                                src="https://www.abudawood.com/wp-content/themes/abudawood/assets/img/icons-home/Home page Icons-04.png"
                                alt=""
                                className="w-[50px] befor-hover"
                                />
                                <img
                                src="https://www.abudawood.com/wp-content/themes/abudawood/assets/img/icons-home/Home page Icons-10.png"
                                alt=""
                                className="w-[50px] after-hover"
                                />
                            </div>


                        </div>
                    </div>
                    <div className=" change-hover border-b-[1px] border-l-[1px] border-gray-700 p-4 hover:bg-brand hover:!border-white cursor-pointer">
                        <div className="flex justify-between items-center">
                            <div className="div_infos_content">
                                <h1>+30</h1>
                                <p className="text-[20px]">Business Partners Served closely</p>
                            </div>
                            <div className="">
                                <img
                                src="https://www.abudawood.com/wp-content/themes/abudawood/assets/img/icons-home/Home page Icons-03.png"
                                alt=""
                                className="w-[50px] befor-hover"
                                />
                                <img
                                src="https://www.abudawood.com/wp-content/themes/abudawood/assets/img/icons-home/Home page Icons-09.png"
                                alt=""
                                className="w-[50px] after-hover"
                                />
                            </div>
                            

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}