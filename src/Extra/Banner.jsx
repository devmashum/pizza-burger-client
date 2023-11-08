import { Link } from 'react-router-dom';
import img from '../assets/images/16.jpg'
const Banner = () => {
    return (
        <div className=" lg:flex rounded-none justify-center items-center bg-neutral ">
            <figure className='w-2/3'><img className='rounded-none w-full' src={img} alt="Movie" /></figure>
            <div className="lg:w-3/4  text-white lg:pr-20 text-center p-5">
                <h2 className="text-5xl font-extrabold">Make Your First Order And Get <br /> <span className=' text-yellow-500 text-7xl '>50% off</span></h2>
                <p className='text-base font-bold my-3'>Get it Delivered Right To Your Door.</p>
                <p className='text-sm'>The key advantage of a Lieferdienst is the unparalleled convenience it offers. Whether you're craving a restaurant-quality meal, require groceries for the week, or need an urgent delivery, a Lieferdienst ensures that your orders are promptly and efficiently delivered, right to your door.</p>
                <div className="pt-5">
                    <Link to={'/allfooditems'}><button className="btn bg-gradient-to-r from-yellow-500 via-purple-500 to-yellow-500 text-white font-bold text-xl">Show All Items</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;