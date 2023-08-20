"use client"; // This is a client component 👈🏽
import Image from 'next/image';
import logo from '../images/logo.png';
import row from '../images/row.svg';

const Navbar = () => {
    function overlay(){
        //check classlist
        const overlayDiv = document.getElementById('overlay');
        if(overlayDiv.classList.contains('-translate-y-[110vh]')){
            overlayDiv.classList.remove('-translate-y-[110vh]')
        }
        else if(!overlayDiv.classList.contains('-translate-y-[110vh]')){
            overlayDiv.classList.add('-translate-y-[110vh]')
        }
    };
    return ( 
        <>
        <div id="overlay" className=" w-[100%] top-0 left-0 bg-[#fff] backdrop-blur-sm h-[100vh] flex justify-center items-center -translate-y-[110vh] shadow transition-all duration-500 fixed z-[99]">
            <div className=" flex flex-col justify-center items-center space-y-5">
                <a href='/'><p className=" font-normal cursor-pointer text-lg font-IBM">Home</p></a>
                <a href='project'><p className=" font-normal cursor-pointer text-lg font-IBM">Projects</p></a>
            </div>
        </div>
        <div className=" w-full px-3 z-[99999] md:px-[50px] lg:px-[100px] fixed">
            <div className=" w-full h-[50px] lg:h-[80px] rounded-[50px] bg-[#e7e1e185] backdrop-blur-[3.7px] flex flex-row items-center justify-between py-[24px] px-[15px] md:px-[36px]">
                <span className=" flex flex-row items-end justify-end">
                    <Image src={ logo } className=" w-6 h-6 lg:h-auto lg:w-auto" alt="" />
                    <p className=" text-black text-lg lg:text-2xl -mb-1 -ml-1 font-Archivo font-normal">eek Designs</p>
                </span>
                <span className=' hidden lg:flex flex-row items-end space-x-10 -mb-2'>
                    <p className=' text-lg font-Archivo font-normal'>Home</p>
                    <p className=' text-lg font-Archivo font-normal'>Services</p>
                    <p className=' text-lg font-Archivo font-normal'>Projects</p>
                    <p className=' text-lg font-Archivo font-normal'>About</p>
                    <p className=' text-lg font-Archivo font-normal'>Process</p>
                </span>
                <button className=' h-[56px] bg-white w-[180px] rounded-[50px] space-x-3 items-center justify-center hidden lg:flex flex-row'>
                    <p className=' font-Archivo text-lg font-normal'>Contact Me</p>
                    <Image src={  row } alt="" />
                </button>
                <div onClick={ overlay } className="menu-icon block lg:hidden">
                    <input className="menu-icon__cheeckbox" type="checkbox" />
                    <div>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Navbar;