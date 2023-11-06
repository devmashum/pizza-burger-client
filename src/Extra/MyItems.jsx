import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyItems = ({ myItems, items, setItems }) => {
    const { _id, foodname, email, category, price, quantity, image, origin, description } = myItems;

    const handleDelete = (_id) => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:3000/additems/${_id}`, {
                    method: 'DELETE',

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remainigItems = items.filter(item => item._id !== _id);
                            setItems(remainigItems);
                        }
                    })
            }
        });
    }
    return (
        <div className="overflow-x-auto lg:w-full md:w-full">
            <table className="table ml-5">

                <tbody>

                    <tr>
                        <th>
                            <button onClick={() => handleDelete(_id)} className="btn font-extrabold text-xl">X</button>
                        </th>
                        <td className='w-1/3'>
                            <div className=" w-[30%] flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={image} alt=" Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">{foodname}</div>
                                    <div className="text-sm opacity-50">{origin}</div>
                                </div>
                            </div>
                        </td>
                        <div >
                            <td>
                                <p>E-mail: {email}</p>
                            </td>
                            <td className='font-bold w-1/3'>
                                <div >
                                    <p>Category: {category}</p>

                                </div>
                            </td>
                            <td>Quantity: {quantity}</td>
                            <td className='w-1/3'>Price ${price}</td>

                            <th className='w-1/3'>
                                <Link to={`/updateditems/${_id}`}><button className="btn">Update</button></Link>
                            </th>
                        </div>

                    </tr>


                </tbody>



            </table>
        </div >
    );
};

export default MyItems;