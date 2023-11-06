import { Link } from "react-router-dom";


const Food = ({ food }) => {
    const { _id, food_name, price, img } = food;



    return (
        <div className="card glass mb-5">
            <figure><img className="w-full" src={img} alt="car!" /></figure>
            <div className="card-body">
                <div className=" block gap-2">
                    <div><h2 className="text-center text-2xl h-20">{food_name}</h2></div>
                    <div> <p className="text-center font-bold  text-xl ">Price ${price}</p></div>
                </div>
                <div className="card-actions justify-center h-[50%] mt-5">
                    <Link to={`/singleproduct/${_id}`}
                    >  <button className="btn mx-auto">Show Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Food;