import Image from "next/image";
import logo from '../images/logo.png';
import google from '../images/google.svg';
import instagram from '../images/instagram.svg';
import whatsapp from '../images/whatsapp.svg';
import Be from '../images/be.svg';
import dribbble from '../images/dribbble.svg';
const Footer = () => {
    return ( 
        <>
        <div className="my-16 px-3 md:px-[50px] lg:px-[100px] w-full flex flex-col justify-center items-center">
            <div className=" w-full flex flex-col md:flex-row items-center space-y-8 md:space-y-0 justify-center md:justify-between  border-b py-16">
                <span className=" flex items-center justify-center">
                    <Image src={ logo } className="" alt="" />
                     <p className=" font-Archivo text-lg font-normal">eek Designs</p>
                </span>
                <span className="flex items-center justify-center space-x-5">
                    <p className=" font-Archivo text-base font-light text-[#2E3833B2]">Services</p>
                    <p className=" font-Archivo text-base font-light text-[#2E3833B2]">Projects</p>
                    <p className=" font-Archivo text-base font-light text-[#2E3833B2]">About</p>
                    <p className=" font-Archivo text-base font-light text-[#2E3833B2]">Process</p>
                </span>
                <span className="flex items-center justify-center space-x-3">
                    <Image src={ google } className="" alt="" />
                    <Image src={ instagram } className="" alt="" />
                    <Image src={ whatsapp } className="" alt="" />
                    <Image src={ Be } className="" alt="" />
                    <Image src={ dribbble } className="" alt="" />
                </span>
            </div>
            <div className=" flex pt-5 justify-center items-center text-center font-Archivo font-light text-base text-[#2E3833B2]">
            © 2023 Veek Design. All Rights Reserved.
            </div>
        </div>      
        </>
     );
}
 
export default Footer;
<>
</>