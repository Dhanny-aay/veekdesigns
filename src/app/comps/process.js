import Image from "next/image";
import pattern from '../images/pattern.svg';

const Process = () => {
    return ( 
        <>
        <div className=" mt-16 px-3 md:px-[50px] lg:px-[100px] w-full mb-16 flex flex-col justify-center items-center">
            <p className=" font-Archivo text-center text-2xl md:text-[32px] lg:text-[48px] font-normal">My Process</p>
            <p className="font-Archivo text-center text-base md:text-[16px] lg:text-[24px] mt-2 font-light">My carefully crafted and tailored process.</p>
            <div className=" pattern w-full mt-16 z-50 bg-[#1C2124] flex justify-center items-center flex-col h-[400px] rounded-[50px] relative">
            </div>
            <div className=" pattern w-[95%] z-40 bg-[#46535B] flex justify-center items-center flex-col -translate-y-[380px] h-[400px] rounded-[50px] relative">
            </div>
            <div className=" pattern w-[95%] z-30 bg-[#46535B] flex justify-center items-center flex-col -translate-y-[380px] h-[400px] rounded-[50px] relative">
            </div>
        </div>
        </>
     );
}
 
export default Process;