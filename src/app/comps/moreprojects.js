import Image from "next/image";
import left from '../images/left.png';
import leftmob from '../images/leftmob.png';
import rightmob from '../images/rightmob.png';
import right from '../images/right.png';
import cloud from '../images/cloud.svg';
import arrRight from '../images/arrow-right.svg';
import arrLeft from '../images/arrow-left.svg';


const Moreprojects = () => {
    return ( 
        <>
        <div className="mt-[64px] px-3 md:px-[50px] lg:px-[100px] w-full -translate-y-[760px] md:-translate-y-[560px] lg:-translate-y-[760px] flex justify-center items-center flex-col -mb-[1400px] md:-mb-[1220px] lg:-mb-[1390px]">
            <p className=" font-Archivo text-center text-2xl md:text-[32px] lg:text-[48px] font-normal">More Projects</p>
            <p className="font-Archivo text-center text-base md:text-[16px] lg:text-[24px] mt-2 font-light">View More Projects i've have worked on.</p>
            <div className=" w-full mt-16 bg-[#1C2124] flex justify-center items-center flex-col z-30 h-[400px] rounded-[50px] relative">
                <Image src={ cloud } className=" w-[74px] h-[46px] md:w-[77px] md:h-[48px] lg:w-[135px] lg:h-[84px]" alt="" />
                <p className=" text-white font-josefin font-semibold text-[30px] md:text-[32px] lg:text-[40px]">Weather App</p>
                <button className=" bg-white text-xs lg:text-xl font-Archivo font-normal px-5 py-3 rounded-[50px]">View Project</button>
                <Image src={ left } className=" h-[370px] absolute top-0 left-0 w-[300px] hidden md:block" alt="" />
                <Image src={ leftmob } className=" h-[ absolute top-0 left-0 w-[30 block md:hidden" alt="" />
                <Image src={ rightmob } className=" h-[ absolute bottom-0 right-0 w-[30 block md:hidden" alt="" />
                <Image src={ right } className=" h-[100%] absolute bottom-0 right-0 w-[300px] hidden md:block" alt="" />
            </div>
            <div className=" w-[95%] bg-[#FDF3C0] h-[400px] rounded-[50px] z-20 -translate-y-[380px] relative">
            </div>
            <div className=" w-[90%] bg-[#FFAF24] h-[400px] rounded-[50px] z-10 -translate-y-[760px] relative">
            </div>
            <div className=" -translate-y-[700px] w-full flex flex-row items-center space-x-2 md:space-x-0 justify-between">
                <button className=" bg-[#f5f5f7] px-3 py-2 lg:px-5 lg:py-3 rounded-[50px] flex items-center justify-center space-x-1 lg:space-x-3">
                    <Image src={ arrRight } className=" w-[10px] h-[10px] md:w-[18px] md:h-[18px] lg:w-auto lg:h-auto" alt="" />
                   <p className=" text-[10px] md:text-sm lg:text-xl font-Archivo font-normal ">Previous Project</p>
                </button>
                <span className=" flex items-center space-x-3 md:space-x-8 font-Archivo text-[10px] md:text-sm lg:text-2xl font-normal">
                    <button className="bg-[#000] text-white w-[20px] h-[20px] md:w-[45px] md:h-[45px] lg:w-[55px] lg:h-[55px] rounded-[50%] flex items-center justify-center">1</button>
                    <button className="bg-[#f5f5f7] w-[20px] h-[20px] md:w-[45px] md:h-[45px] lg:w-[55px] lg:h-[55px] rounded-[50%] flex items-center justify-center">2</button>
                    <button className="bg-[#f5f5f7] w-[20px] h-[20px] md:w-[45px] md:h-[45px] lg:w-[55px] lg:h-[55px] rounded-[50%] flex items-center justify-center">3</button>
                    <button className="bg-[#f5f5f7] w-[20px] h-[20px] md:w-[45px] md:h-[45px] lg:w-[55px] lg:h-[55px] rounded-[50%] flex items-center justify-center">4</button>
                    <button className="bg-[#f5f5f7] w-[20px] h-[20px] md:w-[45px] md:h-[45px] lg:w-[55px] lg:h-[55px] rounded-[50%] flex items-center justify-center">...</button>
                </span>
                <button className=" bg-[#f5f5f7] px-3 py-2 lg:px-5 lg:py-3 rounded-[50px] flex items-center justify-center space-x-1 lg:space-x-3">
                   <p className=" text-[10px] md:text-sm ld:text-xl font-Archivo font-normal ">Next Project</p>
                    <Image src={ arrLeft } className="w-[10px] h-[10px] md:w-[18px] md:h-[18px] lg:w-auto lg:h-auto" alt="" />
                </button>
            </div>
        </div>
        </>
     );
}
 
export default Moreprojects;