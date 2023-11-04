import Banner from "../Banner/Banner";
import CoffeeSection from "../CoffeeSection/CoffeeSection";
import FollowUs from "../FollowUs/FollowUs";
import Moto from "../Moto/Moto";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Moto></Moto>
            <CoffeeSection></CoffeeSection>
            <FollowUs></FollowUs>
        </div>
    );
};

export default Home;