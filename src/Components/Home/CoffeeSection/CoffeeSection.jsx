import { FaCoffee } from "react-icons/fa";
import { Link } from "react-router-dom";


const CoffeeSection = () => {
    return (
        <div className="my-24">
            <h1 className="text-base font-raleway text-center">--- Sip & Savor ---</h1>
            <h3 className="text-6xl font-rancho text-[#331A15] my-7 mb-7 text-center font-semibold">Our Popular Products</h3>
            <div className="text-center">
                <Link to='/addCoffee'>
                    <button className="btn rounded-lg font-rancho text-shadow-xl bg-[#E3B577] text-black text-shadow-md">Add Coffee <FaCoffee className="text-black"></FaCoffee></button>
                </Link>
            </div>
        </div>
    );
};

export default CoffeeSection;