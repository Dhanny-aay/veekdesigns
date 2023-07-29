import Image from "next/image";
import proone from '../images/proone.svg';
const Projects = () => {
    return ( 
        <>
        <div className=" mt-[64px]  px-3 md:px-[50px] lg:px-[100px] w-full -translate-y-[760px] md:-translate-y-[560px] lg:-translate-y-[760px]">
            <p className=" font-Archivo text-center text-2xl md:text-[32px] lg:text-[48px] font-normal">My Projects</p>
            <p className="font-Archivo text-center text-base md:text-[16px] lg:text-[24px] mt-2 font-light">Projects we have worked on.</p>
            <div className=" flex flex-col md:flex-row justify-around items-center w-full mt-6 md:mt-8 lg:mt-[64px]">
                <div className=" w-full md:w-[48%] md:flex justify-between">
                    <div className=" lg:w-[500px] w-full md:w-[340px] h-[400px] md:h-[280px] lg:h-[400px] bg-transparent relative">
                        <Image src={ proone } className=" w-[100%] rounded-[50px] h-full" alt="" />
                        <button className=" absolute top-20 md:top-4 right-6 font-medium text-xs lg:text-xl bg-[#00000036] backdrop-blur-[5px] py-3 px-4 text-white font-Archivo rounded-[17px]">Swipe for more</button>
                    </div>
                </div>
                <div className="w-full md:w-[48%] space-y-3 lg:space-y-5 flex flex-col">
                    <p className=" font-Archivo text-base lg:text-[20px] font-medium">Project Name:<span className=" text-sm lg:text-base font-extralight">  Chawcad</span></p>
                    <span className="">
                        <p className=" font-Archivo text-base lg:text-[20px]  font-medium">Services Provided</p>
                        <p className=" font-Archivo text-sm lg:text-base font-light">UX Design, UI Design, Visual Design, Prototyping</p>
                    </span>
                    <span className="">
                        <p className=" font-Archivo text-base lg:text-[20px]  font-medium">Description</p>
                        <p className=" font-Archivo text-sm lg:text-base font-light">The Chawcad app is your ultimate dining companion, offering a seamless and convenient payment experience. Scan, split, and pay instantly with ease, whether you're online or offline. Trust in Chawcad's secure and reliable app to elevate your dining experience.</p>
                    </span>
                    <a className=" w-full h-[45px] lg:h-[70px] bg-[#f5f5f5] flex justify-between items-center px-6 rounded-[50px]">
                            <p className=" font-Archivo text-sm lg:text-xl font-normal">View Project</p>
                    </a>
                </div>
            </div>

            <div className=" flex flex-col md:flex-row justify-around items-center w-full mt-6 md:mt-8 lg:mt-[64px]">
                <div className="w-full md:w-[48%] space-y-3 lg:space-y-5 flex flex-col">
                    <p className=" font-Archivo text-base lg:text-[20px] font-medium">Project Name:<span className=" text-sm lg:text-base font-extralight">  Chawcad</span></p>
                    <span className="">
                        <p className=" font-Archivo text-base lg:text-[20px]  font-medium">Services Provided</p>
                        <p className=" font-Archivo text-sm lg:text-base font-light">UX Design, UI Design, Visual Design, Prototyping</p>
                    </span>
                    <span className="">
                        <p className=" font-Archivo text-base lg:text-[20px]  font-medium">Description</p>
                        <p className=" font-Archivo text-sm lg:text-base font-light">The Chawcad app is your ultimate dining companion, offering a seamless and convenient payment experience. Scan, split, and pay instantly with ease, whether you're online or offline. Trust in Chawcad's secure and reliable app to elevate your dining experience.</p>
                    </span>
                    <a className=" w-full h-[45px] lg:h-[70px] bg-[#f5f5f5] flex justify-between items-center px-6 rounded-[50px]">
                            <p className=" font-Archivo text-sm lg:text-xl font-normal">View Project</p>
                    </a>
                </div>
                <div className=" w-full md:w-[48%] md:flex justify-between">
                    <div className=" lg:w-[500px] w-full md:w-[340px] h-[400px] md:h-[280px] lg:h-[400px] bg-transparent relative">
                        <Image src={ proone } className=" w-[100%] rounded-[50px] h-full" alt="" />
                        <button className=" absolute top-20 md:top-4 right-6 font-medium text-xs lg:text-xl bg-[#00000036] backdrop-blur-[5px] py-3 px-4 text-white font-Archivo rounded-[17px]">Swipe for more</button>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Projects;