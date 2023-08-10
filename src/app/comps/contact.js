const Contacts = () => {
    return ( 
        <>
        <div className=" mt-16 px-3 md:px-[50px] lg:px-[100px] w-full flex flex-col justify-center items-center">
            <p className=" font-Archivo text-center text-2xl md:text-[32px] lg:text-[48px] font-normal">My Process</p>
            <p className="font-Archivo text-center text-base md:text-[16px] lg:text-[24px] mt-2 font-light">My carefully crafted and tailored process.</p>
            <div className=" w-full relative my-10 flex flex-col justify-center items-center">
                <div className=" pattern space-y-5 md:space-y-7 absolute top-0 w-full z-50 bg-[#1C2124] flex justify-center items-start flex-col h-[400px] rounded-[50px] px-4 md:px-8 lg:px-16 text-white">
                    <p className=" px-3 py-2 rounded-[50px] bg-[#ffffff37] font-Archivo text-xs md:text-lg font-medium text-white">Step 1</p>
                    <p className=" font-Archivo text-lg md:text-2xl font-medium">Request & Vision</p>
                    <p className=" md:text-base font-light text-sm font-Archivo">Setting the scene for our creative journey begins with a smooth and efficient project request. The information you provide plays a crucial role in determining if I am the right fit for your vision. If I am confident in my ability to bring your project to life, I will schedule a video call to personally meet you and/or your team. Rest assured, I strive to respond to every project request within 48 hours.</p>
                </div>
                <div className=" pattern w-[95%] z-40 bg-[#46535B] flex justify-center items-center flex-col h-[400px] rounded-[50px]  absolute top-[15px]">
                </div>
                <div className=" pattern w-[90%] z-30 bg-[#1A2E56] flex justify-center items-center flex-col h-[400px] rounded-[50px]  absolute top-[30px]">
                </div>
                <div className=" pattern w-[85%] z-20 bg-[#5B80BB] flex justify-center items-center flex-col  h-[400px] rounded-[50px]  absolute top-[45px]">
                </div>
                <div className=" pattern w-[80%] z-10 bg-[#799EC8] flex justify-center items-center flex-col  h-[400px] rounded-[50px]  absolute top-[60px]">
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Contacts;