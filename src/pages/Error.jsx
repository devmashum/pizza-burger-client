import { Link } from 'react-router-dom';
import error from '../assets/images/404.jpg'

const Error = () => {
    return (
        <div>
            <img className='lg:h-[600px] mx-auto' src={error} alt="" />
            <Link to={'/'}> <div className="flex items-center -mt-10">
                <button className="mx-auto bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded lg:text-2xl">Back to Home</button>
            </div></Link>


        </div>
    );
};

export default Error;