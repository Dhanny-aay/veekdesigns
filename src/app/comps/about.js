import Image from "next/image";
import send from '../images/send.png';

const About = () => {
    return ( 
        <>
        <div className="px-3 md:px-[50px] lg:px-[100px] w-full">
            <p className=" font-Archivo text-center text-2xl md:text-[32px] lg:text-[48px] font-normal">About</p>
            <p className="font-Archivo text-center text-base md:text-[16px] lg:text-[24px] mt-2 font-light">Little details about me.</p>
            <div className=" flex flex-col-reverse md:flex-row items-center justify-between w-full mt-[32px] md:mt-[64px]">
                <div className=" flex flex-col w-full md:w-[48%] space-y-10">
                    <p className=" font-Archivo font-light text-base md:text-2xl mt-6 md:mt-0">My name is Asuquo Victor. The Product Designer, helping startups organize the pixels and embrace the chaos in design. For the last few months, I designed web, desktop, and mobile apps for amazing startups, including,</p>
                    <span className="">
                        <button className=" w-full flex flex-row justify-between py-[20px] lg:py-[30px] border-b px-3">
                            <p className=" font-Archivo font-normal text-lg md:text-base lg:text-xl">Brand Identity Design</p>
                            <Image src={ send } className="w-[16px] h-[16px] md:w-[18px] md:h-[18px] lg:w-auto lg:h-auto" alt="" />
                        </button>
                        <button className=" w-full flex flex-row justify-between py-[20px] lg:py-[30px] border-b px-3">
                            <p className=" font-Archivo font-normal text-lg md:text-base lg:text-xl">Product Design and Development</p>
                            <Image src={ send } className="w-[16px] h-[16px] md:w-[18px] md:h-[18px] lg:w-auto lg:h-auto" alt="" />
                        </button>
                        <button className=" w-full flex flex-row justify-between py-[20px] lg:py-[30px] border-b px-3">
                            <p className=" font-Archivo font-normal text-lg md:text-base lg:text-xl">Graphic Design and Visual Design</p>
                            <Image src={ send } className="w-[16px] h-[16px] md:w-[18px] md:h-[18px] lg:w-auto lg:h-auto" alt="" />
                        </button>
                    </span>
                    <a className=" w-full h-[45px] lg:h-[70px] bg-[#f5f5f5] flex justify-between items-center px-6 rounded-[50px]">
                        <p className=" font-Archivo text-sm lg:text-xl font-normal">View Project</p>
                    </a>
                </div>
                <div className=" w-full md:w-[48%] bg-[#1C2124] rounded-[50px] h-[600px]">

                </div>
            </div>
        </div>
        </>
     );
}
 
export default About;