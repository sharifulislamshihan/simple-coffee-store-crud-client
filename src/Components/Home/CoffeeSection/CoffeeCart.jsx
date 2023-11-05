import { FaBitbucket, FaEye, FaPen } from "react-icons/fa";


const CoffeeCart = ({ coffee }) => {
    const { _id, name, chef, price, taste, category, details, photo } = coffee
    return (
        <div>

            <div className="card lg:card-side bg-[#F5F4F1] py-8">
                <figure><img className="h-44" src={photo} alt={name} /></figure>
                <div className="lg:flex gap-5 text-center lg:text-left">
                    <div className="card-body">
                        <h2 className=" font-semibold font-raleway text-lg text-center lg:text-left">Name: <span className="text-base text-slate-500">{name}</span></h2>
                        <p className="font-semibold text-lg">Price: <span className="text-slate-500">BDT {price}</span></p>
                    </div>
                    <div className="btn-group btn-group-horizontal lg:btn-group-vertical space-x-7 lg:space-x-0 lg:space-y-4 flex justify-center">
                        <button className="btn text-white text-lg bg-[#D2B48C] hover:bg-[#D2B48C]"><FaEye></FaEye></button>
                        <button className="btn text-white text-lg bg-[#3C393B] hover:bg-[#3C393B] "><FaPen></FaPen></button>
                        <button className="btn text-white text-lg bg-[#EA4744] hover:bg-[#EA4744]"><FaBitbucket></FaBitbucket></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCart;