import Image from "next/image";
import left from '../images/left.png';
import right from '../images/right.png';
import cloud from '../images/cloud.svg';
import arrRight from '../images/arrow-right.svg';
import arrLeft from '../images/arrow-left.svg';

const Moreprojects = () => {
    return ( 
        <>
        <div className="mt-[64px] px-3 md:px-[50px] lg:px-[100px] w-full -translate-y-[760px] md:-translate-y-[560px] lg:-translate-y-[760px] flex justify-center items-center flex-col">
            <p className=" font-Archivo text-center text-2xl md:text-[32px] lg:text-[48px] font-normal">More Projects</p>
            <p className="font-Archivo text-center text-base md:text-[16px] lg:text-[24px] mt-2 font-light">View More Projects i've have worked on.</p>
            <div className=" w-full mt-16 bg-[#1C2124] flex justify-center items-center flex-col z-30 h-[400px] rounded-[50px] relative">
                <Image src={ cloud } className="" alt="" />
                <p className=" text-white font-josefin font-semibold text-[40px]">Weather App</p>
                <button className=" bg-white text-xl font-Archivo font-normal px-5 py-3 rounded-[50px]">View Project</button>
                <Image src={ left } className=" h-[370px] absolute top-0 left-0 w-[300px]" alt="" />
                <Image src={ right } className=" h-[100%] absolute top-0 right-0 w-[300px]" alt="" />
            </div>
            <div className=" w-[95%] bg-[#FDF3C0] h-[400px] rounded-[50px] z-20 -translate-y-[380px] relative">
            </div>
            <div className=" w-[90%] bg-[#FFAF24] h-[400px] rounded-[50px] z-10 -translate-y-[760px] relative">
            </div>
            <div className=" -translate-y-[700px] w-full flex flex-row items-center justify-between">
                <button className=" bg-[#f5f5f7] px-5 py-3 rounded-[50px] flex items-center justify-center space-x-3">
                    <Image src={ arrRight } className=" lg:w-" alt="" />
                   <p className=" text-base md:text-xl font-Archivo font-normal ">Previous Project</p>
                </button>
                <span className=" flex items-center space-x-8 font-Archivo text-2xl font-normal">
                    <button className="bg-[#000] text-white w-[55px] h-[55px] rounded-[50%] flex items-center justify-center">1</button>
                    <button className="bg-[#f5f5f7] w-[55px] h-[55px] rounded-[50%] flex items-center justify-center">2</button>
                    <button className="bg-[#f5f5f7] w-[55px] h-[55px] rounded-[50%] flex items-center justify-center">3</button>
                    <button className="bg-[#f5f5f7] w-[55px] h-[55px] rounded-[50%] flex items-center justify-center">4</button>
                    <button className="bg-[#f5f5f7] w-[55px] h-[55px] rounded-[50%] flex items-center justify-center">...</button>
                </span>
                <button className=" bg-[#f5f5f7] px-5 py-3 rounded-[50px] flex items-center justify-center space-x-3">
                   <p className=" text-base md:text-xl font-Archivo font-normal ">Next Project</p>
                    <Image src={ arrLeft } className="" alt="" />
                </button>
            </div>
        </div>
        </>
     );
}
 
export default Moreprojects;