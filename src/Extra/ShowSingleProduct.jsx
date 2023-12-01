import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const ShowSingleProduct = () => {

    const singleItem = useLoaderData();
    const { img, category, food_name, price, _id, description } = singleItem;

    const handleAddToCart = (_id) => {
        console.log(_id)
        fetch('https://pizza-burger-server.vercel.app/mycart', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(singleItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })

                    Toast.fire({
                        icon: 'success',
                        title: 'Item add successfully!'
                    })
                }
            })
    };
    return (


        <div>
            <div className=" mb-6">
                <figure><img className="w-full h-80 object-cover mx-auto" src={img} /></figure>
                <div className="card-body text-center">
                    <h2 className=" text-center text-3xl font-extrabold">{food_name}</h2>
                    <h2 className=" text-center text-xl font-bold">Category: {category}</h2>
                    <h2 className=" text-center"><span className="font-bold">Description:</span> {description}</h2>
                    <p className="font-bold text-base">Price ${price}</p>
                    <div className=" justify-center">
                        {/* <Link to={`/singleproduct/${_id}`}
                        >  <button className="btn btn-wide  ">Add to Cart</button></Link> */}
                        <button onClick={() => handleAddToCart(_id)} className="btn btn-wide  ">Add to Cart</button>
                    </div>
                </div>
            </div>
            {

            }


        </div>
    );
};

export default ShowSingleProduct;


// **
// import { useLoaderData } from "react-router-dom";


// const ShowSingleProduct = () => {

//     const singleItem = useLoaderData();
//     const { img, category, food_name, price, _id, description } = singleItem;

//     return (


//         <div>
//             <div className=" mb-5">
//                 <figure><img className="w-full h-80 object-cover mx-auto" src={img} /></figure>
//                 <div className="card-body text-center">
//                     <h2 className=" text-center text-3xl font-extrabold">{food_name}</h2>
//                     <h2 className=" text-center text-xl font-bold">Category: {category}</h2>
//                     <h2 className=" text-center"><span className="font-bold">Description:</span> {description}</h2>
//                     <p className="font-bold text-base">Price ${price}</p>
//                     <div className=" justify-center">
//                         {/* <Link to={`/singleproduct/${_id}`}
//                         >  <button className="btn btn-wide  ">Add to Cart</button></Link> */}
//                         <button className="btn btn-wide  ">Add to Cart</button>
//                     </div>
//                 </div>
//             </div>


//         </div>
//     );
// };

// export default ShowSingleProduct;
// **