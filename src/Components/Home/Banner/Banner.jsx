
const Banner = () => {
    return (
        <div className="h-screen bg-cover bg-center relative bg-[url(https://i.ibb.co/PxsY8Sc/3.png)] text-center md:text-left">
            <div className=" flex justify-center items-center h-full relative ">
                <div className="text-white  absolute right-0 top-1/2 transform -translate-y-1/2 md:pr-8 md:w-1/2 mx-6">
                    <h3 className="text-3xl md:text-4xl lg:text-6xl font-normal font-rancho text-white">Would you like a Cup of Delicious Coffee?</h3>
                    <p className=" text-sm md:text-lg font-raleway font-normal text-white my-3">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <button className="btn btn-active bg-[#E3B577] text-black font-rancho hover:bg-transparent hover:text-white">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;