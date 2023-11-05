import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const ViewCoffee = () => {
    const coffeeData = useLoaderData();
    return (
        <div>
            <Link to='/'>
                <button className="btn text-2xl font-rancho mx-4 my-3"><FaArrowLeft></FaArrowLeft>Back To Home</button>
            </Link>
            <div className=" md:flex justify-center gap-20 my-24">
                <img className="h-72 mx-auto" src={coffeeData?.photo} alt="" />
                <div className="space-y-7 text-center">
                    <h3 className="text-6xl font-rancho font-semibold text-[#331A15]">Niceties</h3>
                    <div className="space-y-2">
                        {/* // name, chef, price, taste, category, details, photo */}
                        <h3 className="text-xl font-raleway font-semibold">Name: <span className="text-slate-500">{coffeeData?.name}</span></h3>

                        <h3 className="text-xl font-raleway font-semibold">Chef: <span className="text-slate-500">{coffeeData?.chef}</span></h3>

                        <h3 className="text-xl font-raleway font-semibold">Price: BDT <span className="text-slate-500">{coffeeData?.price}</span></h3>

                        <h3 className="text-xl font-raleway font-semibold">Taste: <span className="text-slate-500">{coffeeData?.taste}</span></h3>

                        <h3 className="text-xl font-raleway font-semibold">Category: <span className="text-slate-500">{coffeeData?.category}</span></h3>

                        <h3 className="text-xl font-raleway font-semibold">Details: <span className="text-slate-500">{coffeeData?.details}</span></h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewCoffee;