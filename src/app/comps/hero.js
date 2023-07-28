import Navbar from "./navbar";
import Image from "next/image";
import prodesign from '../images/prodesign.svg';
import bradesign from '../images/bradesign.svg';
import gradesign from '../images/gradesign.png';
import illus from '../images/illus.svg';
import hero from '../images/hero.jpg';

const Hero = () => {
    return ( 
        <div className=" py-[32px] relative">
        <Navbar/>
        <div className=" mt-[64px]  px-3 md:px-[50px] lg:px-[100px]  w-full">
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
                    <Image src={ illus } className="  w-[25px] h-[25px]" alt="" />
                    <p className=" text-base lg:text-2xl font-Archivo font-light capitalize">Illustrator</p>
                </span>
            </div>
            <div className=" mt-[50px] w-full h-[350px] md:h-[290px] bg-cover lg:h-[500px] hero rounded-[35px]">

            </div>
        </div>
        </div>
     );
}
 
export default Hero;