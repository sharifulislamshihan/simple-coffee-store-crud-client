import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from 'react-icons/fa';
const Footer = () => {
    return (
        <div>
            <footer className="footer grid grid-cols-1 md:grid-cols-2 my-6">
                <div className="mx-20">
                    <img className="w-16 h-16" src="https://i.ibb.co/tB4RvHX/logo1.png" alt="" />
                    <h3 className="text-6xl font-rancho text-[#331A15] mt-3 font-semibold">Coffee Shop</h3>
                    <p className=" text-base font-raleway text-black my-8">Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                    {/* socail media icon */}
                    <div className='flex gap-6'>
                        <FaFacebook className='w-10 h-10 text-[#331A15]'></FaFacebook>
                        <FaTwitter className='w-10 h-10 text-[#331A15]'></FaTwitter>
                        <FaInstagram className='w-10 h-10 text-[#331A15]'></FaInstagram>
                        <FaLinkedin className='w-10 h-10 text-[#331A15]'></FaLinkedin>

                    </div>
                    <h3 className="text-5xl font-rancho text-[#331A15] my-7 font-semibold">Get In Touch</h3>
                    {/* contant information */}
                    <div>
                        {/* call */}
                        <div className='flex gap-5 my-2'>
                            <FaPhone className='rotate-90 w-4 h-4 text-[#331A15] mt-2'></FaPhone>
                            <h3 className='text-lg font-semibold text-[#331A15]'>+88 01533 333 333</h3>
                        </div>
                        {/* mail */}
                        <div className='flex gap-5 mb-2'>
                            <img className=' w-4 h-4' src="https://i.ibb.co/NTtbkZC/email.png" alt="" />
                            <h3 className='text-lg font-semibold text-[#331A15]'>info@gmail.com</h3>
                        </div>
                        {/* location */}
                        <div className='flex gap-5'>
                            <img className=' w-4 h-4' src="https://i.ibb.co/0DXdJW0/location.png" alt="" />
                            <h3 className='text-lg font-semibold text-[#331A15]'>72, Wall street, King Road, Dhaka</h3>
                        </div>
                    </div>
                </div>
                <div className='mt-20  mx-3'>
                    <form>
                        <header className="footer-title text-6xl font-rancho text-[#331A15] font-semibold">Contact With Us</header>

                        <div className='my-20' >
                            <div className='my-3'>
                                <input type="text" placeholder="name" className="input input-bordered w-full pr-16" />
                            </div>
                            <div className='my-3'>
                                <input type="email" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            </div>
                            <div className='my-3'>

                                <textarea className="input input-bordered w-full pr-16" name="" id="" cols="30" rows="10" placeholder="send message"></textarea>
                            </div>

                            <button className="btn border border-[#331A15] rounded-xl font-rancho">Send message</button>

                        </div>

                    </form>
                </div>
            </footer>

            <div className=" py-2 bg-cover bg-center bg-[url(https://i.ibb.co/XxyfWr1/15.jpg)]">

                <h3 className="text-xl font-rancho text-center text-white font-normal ">Copyright Espresso Emporium ! All Rights Reserved</h3>
            </div>
        </div>
    );
};

export default Footer;