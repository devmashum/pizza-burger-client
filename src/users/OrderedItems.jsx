import Swal from 'sweetalert2';

const OrderedItems = ({ orderedItem }) => {
    const { img, category, food_name, price, _id } = orderedItem;

    const handleDeleteItem = (_id) => {

        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {

                    fetch(`https://pizza-burger-server.vercel.app/mycart/new/${_id}`, {
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
                                })

                            }
                        })
                }
            })
    }
    return (
        <div>
            <div className='grid lg:grid-cols-4 grid-col-1 '>
                <div className='lg:flex justify-start  gap-10'>
                    <div className="avatar">
                        <div className=" lg:mask-squircle w-22 h-20">
                            <img className='' src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div><h3 className='text-xl font-bold'>{food_name}</h3></div>
                </div>


                <div>
                    <h3 className='lg:ml-10 text-xl'>Category: {category}</h3>
                </div>

                <div>
                    <h3 className='text-xl font-bold'>${price}</h3>
                </div>
                <div>
                    <button onClick={() => handleDeleteItem(_id)} className='btn mb-3'>Delete</button></div>
            </div>
        </div>
    );
};

export default OrderedItems;