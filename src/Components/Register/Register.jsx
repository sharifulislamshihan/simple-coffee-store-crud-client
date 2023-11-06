
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {


    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
    }
    return (
        <div>
            <div className="flex justify-between">
                <Link to='/'>
                    <button className="btn text-base md:text-xl lg:text-2xl font-rancho md:mx-4 my-3"><FaArrowLeft></FaArrowLeft>Back To Home</button></Link>

                <Link to='/login'>
                    <button className="btn text-base md:text-xl lg:text-2xl font-rancho md:mx-4 my-3  hover:bg-slate-300 ">Login</button></Link>
            </div>

            <div className="">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold font-rancho">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-[#F4F3F0]">
                        <form onSubmit={handleRegister} className="card-body mx-auto lg:mx-32">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-raleway font-semibold">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-raleway font-semibold">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-raleway font-semibold">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>

                            <p className="font-raleway text-base font-semibold">Already have an account? please <Link to='/register'><span className="text-blue-500 underline hover:text-blue-800 ">Login</span></Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;