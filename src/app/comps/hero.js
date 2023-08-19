import Navbar from "./navbar";
import Image from "next/image";
import prodesign from '../images/prodesign.svg';
import bradesign from '../images/bradesign.svg';
import gradesign from '../images/gradesign.png';
import illus from '../images/illus.svg';
// import hero from '../images/hero.jpg';
import resuri from '../images/resuri.svg';

const Hero = () => {
    return ( 
        <div className=" py-[32px] relative">
        <Navbar/>
        <div className=" mt-[64px] px-3 md:px-[50px] lg:px-[100px]  w-full">
            <p className=" text-[28px] md:text-[45px] lg:text-[55px] mt-[120px] font-Archivo font-normal text-center leading-[28px] md:leading-[48px] lg:leading-[67px]">Transforming Ideas into Captivating Designs</p>
            <p className=" text-center font-Archivo font-extralight lg:text-[32px] mt-5 text-lg md:text-2xl leading-[18px] md:leading-[28px] lg:leading-[39px]">Discover the Creative Portfolio of a Multifaceted Designer.</p>
            <div className="hidden md:flex flex-row justify-around items-center w-full mt-[45px] lg:mt-[73px] lg:px-[40px]">
                <span className=" flex space-x-3 border-r md:pr-[25px] lg:pr-[51px]">
                    <Image src={ prodesign } className=" w-[25px] h-[25px]" alt="" />
                    <p className=" text-base lg:text-2xl font-Archivo font-light capitalize">Product designer</p>
                </span>
                <span className=" flex space-x-3">
                    <Image src={ bradesign } className=" w-[25px] h-[25px]" alt="" />
                    <p className=" text-base lg:text-2xl font-Archivo font-light capitalize">Brand designer</p>
                </span>
                <span className=" flex space-x-3 border-l md:pl-[25px] lg:pl-[51px]">
                    <Image src={ gradesign } className="  w-[25px] h-[25px]" alt="" />
                    <p className=" text-base lg:text-2xl font-Archivo font-light capitalize">Graphic designer</p>
                </span>
                <span className=" flex space-x-3 border-l md:pl-[25px] lg:pl-[51px]">
                    <Image src={ illus } className="  w-[25px] h-[25px]" alt="" />4
                    <p className=" text-base lg:text-2xl font-Archivo font-light capitalize">Illustrator</p>
                </span>
            </div>
            <div className="flex md:hidden flex-col justify-center items-center w-full mt-[45px]">
                <div className=" flex w-full items-center justify-between border-b border-[#EAEBF0] pb-3">
                    <span className=" flex w-1/2 justify-center items-center border-r border-[#EAEBF0]">
                        <Image src={ prodesign } className=" w-[14px] h-[14px]" alt="" />
                        <p className=" text-sm lg:text-2xl font-Archivo font-light capitalize ml-3">Product designer</p>
                    </span>
                    <span className=" flex w-1/2 justify-center items-center">
                        <Image src={ bradesign } className=" w-[14px] h-[14px]" alt="" />
                        <p className=" text-sm lg:text-2xl font-Archivo font-light capitalize ml-3">Brand designer</p>
                    </span>
                </div>
                <div className=" flex w-full justify-between items-center pt-3">
                    <span className=" flex w-1/2 justify-center items-center border-r border-[#EAEBF0]">
                        <Image src={ gradesign } className="  w-[14px] h-[14px]" alt="" />
                        <p className=" text-sm lg:text-2xl font-Archivo font-light capitalize ml-3">Graphic designer</p>
                    </span>
                    <span className=" flex w-1/2 justify-center items-center">
                        <Image src={ illus } className="  w-[14px] h-[14px] -ml-10" alt="" />
                        <p className=" text-sm lg:text-2xl font-Archivo font-light capitalize ml-3">Illustrator</p>
                    </span>
                </div>
            </div>
            <div className=" mt-[50px] w-full h-[350px] md:h-[290px] bg-cover lg:h-[500px] hero rounded-[35px] relative">
                <button className="absolute bottom-8 left-8 p-5 bg-[#FFFFFF43] flex justify-center items-center space-x-12 py-3 px-4 rounded-[50px] backdrop-blur">
                    <p className=" text-white font-Archivo text-sm md:text-base lg:text-2xl">My resume</p>
                    <Image src={ resuri } className=" w-[18px] h-[18px] lg:w-auto lg:h-auto" alt="" />
                </button>
            </div>
        </div>
        </div>
     );
}
 
export default Hero;