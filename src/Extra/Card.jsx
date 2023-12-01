
import img1 from '../assets/images/1.jpg'
import img12 from '../assets/images/12.jpg'
import img2 from '../assets/images/2.jpg'
import img13 from '../assets/images/13.jpg'
import img3 from '../assets/images/3.jpg'
import img15 from '../assets/images/15.jpg'
import { Link } from 'react-router-dom'



const Card = () => {


    return (
        <div className='lg:grid grid-cols-3 gap-3 lg:gap-5 p-10'>
            <div className="card glass mb-5">
                <figure><img className="w-full" src={img1} alt="car!" /></figure>
                <div className="card-body">
                    <div className=" block gap-2">
                        <div><h2 className="text-center text-2xl h-20">Veggie Burger</h2></div>
                        <div> <p className="text-center font-bold  text-xl ">Price $9.49</p></div>
                    </div>
                    <div className="card-actions justify-center h-[50%] mt-5">

                        <Link to={'https://pizza-burger-bulls.web.app/singleproduct/654824a4ca0f3b85a16dd095'} > <button className="btn mx-auto">Show Details</button></Link>
                    </div>

                </div>
            </div>
            <div className="card glass mb-5">
                <figure><img className="w-full" src={img12} alt="car!" /></figure>
                <div className="card-body">
                    <div className=" block gap-2">
                        <div><h2 className="text-center text-2xl h-20">Margherita Pizza</h2></div>
                        <div> <p className="text-center font-bold  text-xl ">Price $10.99 </p></div>
                    </div>
                    <div className="card-actions justify-center h-[50%] mt-5">

                        <Link to={'https://pizza-burger-bulls.web.app/singleproduct/654824a4ca0f3b85a16dd0a2'} > <button className="btn mx-auto">Show Details</button></Link>
                    </div>

                </div>
            </div>
            <div className="card glass mb-5">
                <figure><img className="w-full" src={img2} alt="car!" /></figure>
                <div className="card-body">
                    <div className=" block gap-2">
                        <div><h2 className="text-center text-2xl h-20">Spicy Chicken Burger</h2></div>
                        <div> <p className="text-center font-bold  text-xl ">Price $10.99</p></div>
                    </div>
                    <div className="card-actions justify-center h-[50%] mt-5">

                        <Link to={'https://pizza-burger-bulls.web.app/singleproduct/654824a4ca0f3b85a16dd097'} > <button className="btn mx-auto">Show Details</button></Link>
                    </div>

                </div>
            </div>
            <div className="card glass mb-5">
                <figure><img className="w-full" src={img13} alt="car!" /></figure>
                <div className="card-body">
                    <div className=" block gap-2">
                        <div><h2 className="text-center text-2xl h-20">Hawaiian Pizza</h2></div>
                        <div> <p className="text-center font-bold  text-xl ">Price $12.99</p></div>
                    </div>
                    <div className="card-actions justify-center h-[50%] mt-5">

                        <Link to={'https://pizza-burger-bulls.web.app/singleproduct/654824a4ca0f3b85a16dd09a'} > <button className="btn mx-auto">Show Details</button></Link>
                    </div>

                </div>
            </div>
            <div className="card glass mb-5">
                <figure><img className="w-full" src={img3} alt="car!" /></figure>
                <div className="card-body">
                    <div className=" block gap-2">
                        <div><h2 className="text-center text-2xl h-20">Mushroom Swiss Burger</h2></div>
                        <div> <p className="text-center font-bold  text-xl ">Price $11.49</p></div>
                    </div>
                    <div className="card-actions justify-center h-[50%] mt-5">

                        <Link to={'https://pizza-burger-bulls.web.app/singleproduct/654824a4ca0f3b85a16dd099'} > <button className="btn mx-auto">Show Details</button></Link>
                    </div>

                </div>
            </div>
            <div className="card glass mb-5">
                <figure><img className="w-full" src={img15} alt="car!" /></figure>
                <div className="card-body">
                    <div className=" block gap-2">
                        <div><h2 className="text-center text-2xl h-20">Supreme Pizza</h2></div>
                        <div> <p className="text-center font-bold  text-xl ">Price $13.99 </p></div>
                    </div>
                    <div className="card-actions justify-center h-[50%] mt-5">

                        <Link to={'https://pizza-burger-bulls.web.app/singleproduct/654824a4ca0f3b85a16dd098'} > <button className="btn mx-auto">Show Details</button></Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Card;
