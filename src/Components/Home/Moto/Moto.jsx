
const Moto = () => {
    return (
        <div className="bg-[#ECEAE3] py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-16 ">
                {/*        1          */}
                <div className="card bg-[#ECEAE3]">
                    <figure><img className="mt-7 -ml-24" src="https://i.ibb.co/kS9J9Xv/1.png" alt="" /></figure>
                    <div className="card-body text-left px-5">
                        <h2 className="card-title font-rancho text-3xl">Awesome Aroma</h2>
                        <p className=" font-raleway text-base">You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                </div>
                    {/*          2                  */}
                <div className="card bg-[#ECEAE3]">
                    <figure><img className="mt-7 -ml-24" src="https://i.ibb.co/jRTqRhH/2.png" alt="" /></figure>
                    <div className="card-body text-left px-5">
                        <h2 className="card-title font-rancho text-3xl">High Quality</h2>
                        <p className=" font-raleway text-base">We served the coffee to you maintaining the best quality</p>
                    </div>
                </div>
                {/*            3               */}

                <div className="card bg-[#ECEAE3]">
                    <figure><img className="mt-7 -ml-24" src="https://i.ibb.co/Nshg8xv/3.png" alt="" /></figure>
                    <div className="card-body text-left px-5">
                        <h2 className="card-title font-rancho text-3xl">Pure Grades</h2>
                        <p className=" font-raleway text-base">The coffee is made of the green coffee beans which you will love</p>
                    </div>
                </div>
                {/*       4           */}

                <div className="card bg-[#ECEAE3]">
                    <figure><img className="mt-7 -ml-24" src="https://i.ibb.co/Xsb6wJs/4.png" alt="" /></figure>
                    <div className="card-body text-left px-5">
                        <h2 className="card-title font-rancho text-3xl">Proper Roasting</h2>
                        <p className=" font-raleway text-base">Your coffee is brewed by first roasting the green coffee beans</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Moto;