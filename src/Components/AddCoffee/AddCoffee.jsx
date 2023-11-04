import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const AddCoffee = () => {
    return (
        <div>
            <Link to='/'>
                <button className="btn text-2xl font-rancho mx-4 my-3"><FaArrowLeft></FaArrowLeft>Back To Home</button></Link>
            <div className="my-16 bg-[#F4F3F0]">
                <h3 className="text-6xl font-rancho text-black my-7 mb-7 text-center font-semibold">Add New Coffee</h3>
                <p className="text-lg font-raleway text-center text-slate-500 my-9 mx-5 md:mx-16 lg:mx-56">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

                <div className=" mx-12 lg:mx-40">
                    <form>
                        {/* name and chef */}
                        <div className="md:flex gap-10 my-3">
                            <div className="form-control md:w-1/2 my-2">
                                <label className="label">
                                    <span className="label-text text-xl font-raleway  font-bold">Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full" />
                                </label>
                            </div>

                            <div className="form-control md:w-1/2 my-2">
                                <label className="label">
                                    <span className="label-text text-xl font-raleway  font-bold ">Chef</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="chef" placeholder="Chef" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>

                        {/* Supplier and taste */}

                        <div className="md:flex gap-10 my-3">
                            <div className="form-control md:w-1/2 my-2">
                                <label className="label">
                                    <span className="label-text text-xl font-raleway  font-bold">Supplier</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="Supplier" placeholder="Supplier Name" className="input input-bordered w-full" />
                                </label>
                            </div>

                            <div className="form-control md:w-1/2 my-2">
                                <label className="label">
                                    <span className="label-text text-xl font-raleway  font-bold ">Taste</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>

                        {/* Category and details */}

                        <div className="md:flex gap-10 my-3">
                            <div className="form-control md:w-1/2 my-2">
                                <label className="label">
                                    <span className="label-text text-xl font-raleway  font-bold">Category</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="category" placeholder="Category name" className="input input-bordered w-full" />
                                </label>
                            </div>

                            <div className="form-control md:w-1/2 my-2">
                                <label className="label">
                                    <span className="label-text text-xl font-raleway  font-bold ">Details</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>

                        {/* Photo Url */}

                        <div className="md:flex gap-10 my-3">
                            <div className="form-control md:w-1/2 my-2">
                                <label className="label">
                                    <span className="label-text text-xl font-raleway  font-bold">Photo URL</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                                </label>
                            </div>

                        </div>



                    </form>

                    <button className="btn btn-block bg-[#D2B48C] hover:bg-[#be9d74] border-black border solid font-rancho text-xl my-10">Add Coffee</button>

                </div>

            </div>
        </div>
    );
};

export default AddCoffee;