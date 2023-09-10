import Image from "next/image";
import flash from '../images/flash.svg';
import direct from '../images/direct.svg';
const Process = () => {
    return ( 
        <>
        <div className=" mt-[48 mb-16 px-3 md:px-[50px] lg:px-[100px] w-full flex flex-col justify-center items-center">
            <p className=" font-Archivo text-center text-2xl md:text-[32px] lg:text-[48px] font-normal">Lets work - Together</p>
            <span className=" flex flex-row  mt-2 space-x-3">
                <Image src={ flash } className="" alt="" />
                <p className="font-Archivo text-center text-base md:text-[16px] lg:text-[24px] font-light">Limited availability for projects</p>
            </span>
            <button className=" mt-16 flex flex-row items-center justify-center bg-[#f5f5f7] rounded-[50px] px-8 py-6">
                <Image src={ direct } className=" w-[30px] h-[30px] md:w-auto lg:h-auto" alt="" />
                <p className=" font-Archivo text-lg md:text-2xl lg:text-[32px]">Say Hi</p>
            </button>
        </div>
        </>
     );
}
 
export default Process;