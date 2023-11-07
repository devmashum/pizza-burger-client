import logo from '../assets/images/logo-8249611_640.png'
import { GiLoveHowl } from 'react-icons/gi';

const Footer = () => {
    return (

        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">


                <div className='lg:flex justify-center items-center '>

                    <div> <img className='w-40 h-40' src={logo} alt="YAM YAM Berlin" /></div>
                    <div>
                        <p className=' hover: p-3 font-extrabold  rounded-xl bg-yellow-400 text-whiten text-2xl text-white hidden lg:block'>
                            <span>Y</span> <br />
                            <span>A</span> <br />
                            <span>M</span> <br />
                            <span>Y</span> <br />
                            <span>A</span> <br />
                            <span>M</span> <br />
                        </p>

                    </div>
                </div>
                <div className='lg:hidden block'>
                    <h1 className='text-4xl font-extrabold footer-title'>YAM YAM Berlin</h1>
                    <p className='footer-title font-title'>Schönhauser Alle 3 <br />

                        15204 Berlin <br />

                        Telephone: 03301 61 34 30 <br />

                        E-mail: info@yamyam.com</p>
                </div>
                <nav>
                    <header className="footer-title text-xl font-extrabold ">Quick Links</header>
                    <a className="link  footer-title link-hover">Home</a>
                    <a className="link  footer-title link-hover">All Foods</a>
                    <a className="link  footer-title link-hover">Blog</a>
                    <a className="link  footer-title link-hover">About</a>
                    <a className="link  footer-title link-hover">Contact</a>
                </nav>
                <nav>
                    <header className="footer-title text-xl font-extrabold">Profile</header>
                    <a className="link  footer-title link-hover">User Details</a>
                    <a className="link  footer-title link-hover">Add an Item</a>
                    <a className="link  footer-title link-hover">Added Items</a>
                    <a className="link  footer-title link-hover">Ordered Items</a>
                </nav>

                <form>
                    <header className="footer-title text-xl font-extrabold">Newsletter</header>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </fieldset>
                </form>

            </footer>
            <div className='py-5 text-center bg-neutral text-white'>
                <h1>© 2023 YAM YAM Berlin. All Rights Reserved. Designed and Develop with <span className='flex items-center justify-center  btn-outline btn-error text-4xl'><GiLoveHowl /></span> by <span className='font-extrabold'>Faisal</span></h1>
            </div>
        </div>
    );
};

export default Footer;