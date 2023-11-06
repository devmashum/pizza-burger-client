import { Link, useLoaderData } from "react-router-dom";


const ShowSingleProduct = () => {

    const singleItem = useLoaderData();
    const { img, category, food_name, price, _id, description } = singleItem;

    return (
        <div>
            <div className=" mb-5">
                <figure><img className="w-full h-80 object-cover mx-auto" src={img} /></figure>
                <div className="card-body text-center">
                    <h2 className=" text-center text-3xl font-extrabold">{food_name}</h2>
                    <h2 className=" text-center text-xl font-bold">Category: {category}</h2>
                    <h2 className=" text-center"><span className="font-bold">Description:</span> {description}</h2>
                    <p className="font-bold text-base">Price ${price}</p>
                    <div className=" justify-center">
                        <Link to={`/singleproduct/${_id}`}
                        >  <button className="btn btn-wide  ">Add to Cart</button></Link>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ShowSingleProduct;