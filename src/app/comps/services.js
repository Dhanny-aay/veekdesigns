import Image from "next/image";
import send from '../images/send.png';
const Servies = () => {
    return ( 
        <>
        <div className=" mt-[64px]  px-3 md:px-[50px] lg:px-[100px] flex flex-col justify-center items-center w-full">
            <p className=" font-Archivo text-center text-2xl md:text-[32px] lg:text-[48px] font-normal">My Services</p>
            <p className=" font-Archivo text-center text-base md:text-[16px] lg:text-[24px] mt-2 font-light"> Several services I offer.</p>
            <div className=" flex flex-col md:flex-row justify-between items-center w-full mt-6 md:mt-8 lg:mt-[64px] relative ">
                <div className=" flex flex-col items-center w-full md:w-[48%] ">
                    <div className=" w-[100%] lg:w-[400px] h-[400px] md:h-[300px] lg:h-[400px] bg-[#FFFAE5] rounded-[50px] z-30">

                    </div>
                    <div className=" w-[95%] lg:w-[380px] h-[400px] md:h-[300px] lg:h-[400px] bg-[#3FB8FC] rounded-[50px] -translate-y-[380px] md:-translate-y-[280px] lg:-translate-y-[380px] z-20">

                    </div>
                    <div className=" w-[90%] lg:w-[360px] h-[400px] md:h-[300px] lg:h-[400px] bg-[#1F86FB] rounded-[50px] -translate-y-[760px] md:-translate-y-[560px] lg:-translate-y-[760px] z-10">

                    </div>
                </div>
                <div className=" w-full md:w-[48%] flex flex-col -translate-y-[760px] md:-translate-y-[280px] lg:-translate-y-[380px] ">
                    <button className=" w-full flex flex-row justify-between py-[20px] lg:py-[35px] border-b px-3">
                        <p className=" font-Archivo font-normal text-lg md:text-base lg:text-xl">Brand Identity Design</p>
                        <Image src={ send } className="w-[16px] h-[16px] md:w-[18px] md:h-[18px] lg:w-auto lg:h-auto" alt="" />
                    </button>
                    <button className=" w-full flex flex-row justify-between py-[20px] lg:py-[35px] border-b px-3">
                        <p className=" font-Archivo font-normal text-lg md:text-base lg:text-xl">Product Design and Development</p>
                        <Image src={ send } className="w-[16px] h-[16px] md:w-[18px] md:h-[18px] lg:w-auto lg:h-auto" alt="" />
                    </button>
                    <button className=" w-full flex flex-row justify-between py-[20px] lg:py-[35px] border-b px-3">
                        <p className=" font-Archivo font-normal text-lg md:text-base lg:text-xl">Graphic Design and Visual Design</p>
                        <Image src={ send } className="w-[16px] h-[16px] md:w-[18px] md:h-[18px] lg:w-auto lg:h-auto" alt="" />
                    </button>
                    <button className=" w-full flex flex-row justify-between py-[20px] lg:py-[35px] border-b px-3">
                        <p className=" font-Archivo font-normal text-lg md:text-base lg:text-xl">Illustration and Art Direction</p>
                        <Image src={ send } className="w-[16px] h-[16px] md:w-[18px] md:h-[18px] lg:w-auto lg:h-auto" alt="" />
                    </button>
                </div>

            </div>
        </div>
        </>
     );
}
 
export default Servies;