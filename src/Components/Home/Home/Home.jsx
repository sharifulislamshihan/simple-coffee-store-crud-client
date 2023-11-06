// import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import CoffeeSection from "../CoffeeSection/CoffeeSection";
import FollowUs from "../FollowUs/FollowUs";
import Moto from "../Moto/Moto";


const Home = () => {
    return (
        <div>
            {/* <div className="flex justify-end">

                <div>
                    <Link to='/login'>
                        <button className="btn text-base md:text-xl lg:text-2xl font-rancho md:mx-4 my-3  hover:bg-slate-300 ">Register</button>
                    </Link>
                    <Link to='/register'>
                        <button className="btn text-base md:text-xl lg:text-2xl font-rancho md:mx-4 my-3  hover:bg-slate-300 ">Register</button>
                    </Link>
                </div>
            </div> */}
            <Banner></Banner>
            <Moto></Moto>
            <CoffeeSection></CoffeeSection>
            <FollowUs></FollowUs>
        </div>
    );
};

export default Home;