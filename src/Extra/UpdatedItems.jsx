import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdatedItems = () => {
    const updateItems = useLoaderData();
    const { _id, foodname, email, category, price, quantity, image, origin, description } = updateItems;


    const handleUpdateItems = event => {
        event.preventDefault();

        const form = event.target;

        const foodname = form.foodname.value;
        const email = form.email.value;
        const category = form.category.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const image = form.image.value;
        const origin = form.origin.value;
        const description = form.description.value;

        const updatedItems = { foodname, email, category, price, quantity, image, origin, description };
        console.log(updatedItems)

        fetch(`https://pizza-burger-server.vercel.app/additems/${_id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updatedItems)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
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
                        title: 'Item updated successfully!'
                    })
                }
            })
    }
    return (
        <div className="bg-base-200 w-full max-auto">
            <div className="hero-content w-full mx-auto  flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Update this item</h1>
                </div>
                <div className="w-full shadow-2xl pb-5 rounded-xl bg-base-100">
                    <form onSubmit={handleUpdateItems} className="card-body">
                        <div className='grid grid-cols-2 gap-5 '>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Food Name</span>
                                </label>
                                <input name="foodname" type="text" defaultValue={foodname} placeholder="Food Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Food Image</span>
                                </label>
                                <input name="image" type="text" defaultValue={image} placeholder="Image" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Food Category</span>
                                </label>
                                <input name="category" type="text" defaultValue={category} placeholder="Category" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input name="quantity" type="text" defaultValue={quantity} placeholder="Quantity" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Origin</span>
                                </label>
                                <input name="origin" type="text" defaultValue={origin} placeholder="Origin" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input name="price" type="text" defaultValue={price} placeholder="Price" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" defaultValue={email} type="email" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input name="description" type="text" defaultValue={description} className="input input-bordered" />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Update Item</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdatedItems;