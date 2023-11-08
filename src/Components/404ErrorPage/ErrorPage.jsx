import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <Link to='/'>
                <button className="btn text-2xl font-rancho mx-4 my-3"><FaArrowLeft></FaArrowLeft>Back To Home</button></Link>
            <img className="mx-auto" src="https://i.imgur.com/fckPbXM.gif" alt="ERROR" />
        </div>
    );
};

export default ErrorPage;