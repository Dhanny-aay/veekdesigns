import Image from 'next/image';
import logo from '../images/logo.png';
import row from '../images/row.svg';
import menu from '../images/menu.png';
const Navbar = () => {
    return ( 
        <>
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
                <Image src={ menu } className=' block lg:hidden' alt="" />
            </div>
        </div>
        </>
     );
}
 
export default Navbar;