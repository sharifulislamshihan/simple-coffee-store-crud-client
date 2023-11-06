import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <div className="flex justify-between">
                <Link to='/'>
                    <button className="btn text-base md:text-xl lg:text-2xl font-rancho md:mx-4 my-3"><FaArrowLeft></FaArrowLeft>Back To Home</button></Link>

                <Link to='/register'>
                    <button className="btn text-base md:text-xl lg:text-2xl font-rancho md:mx-4 my-3  hover:bg-slate-300 ">Register</button></Link>
            </div>

            <div className="hero">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold font-rancho">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-[#F4F3F0]">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-raleway font-semibold">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-raleway font-semibold">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>

                            <p className="font-raleway text-base font-semibold">Don't have any account? please <Link to='/register'><span className="text-blue-500 underline hover:text-blue-800 ">Register with us</span></Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;