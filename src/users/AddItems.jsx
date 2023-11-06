import Swal from 'sweetalert2';
import useAuth from '../utils/useAuth';

const AddItems = () => {
    const { user } = useAuth();

    const handleAddItems = event => {
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

        const newItems = { foodname, email, category, price, quantity, image, origin, description };
        fetch('http://localhost:3000/additems', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newItems)
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
    }

    return (
        <div className="bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Add a new item</h1>
                </div>
                <div className="w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleAddItems} className="card-body">
                        <div className='grid grid-cols-2 gap-5 '>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Food Name</span>
                                </label>
                                <input name="foodname" type="text" placeholder="Food Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Food Image</span>
                                </label>
                                <input name="image" type="text" placeholder="Image" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Food Category</span>
                                </label>
                                <input name="category" type="text" placeholder="Category" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input name="quantity" type="text" placeholder="Quantity" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Origin</span>
                                </label>
                                <input name="origin" type="text" placeholder="Origin" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input name="price" type="text" placeholder="Price" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" defaultValue={user.email} type="email" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input name="description" type="text" className="input input-bordered" />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Submit Item</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddItems;
