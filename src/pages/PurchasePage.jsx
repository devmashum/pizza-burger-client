import Swal from 'sweetalert2';
import banner from '../assets/images/order.jpg'



const PurchasePage = () => {




    const handleAddToList = (event) => {
        event.preventDefault();
        const form = event.target;

        // Check if the form elements exist before accessing their values
        const foodName = form.foodName ? form.foodName.value : "";
        const quantity = form.quantity ? form.quantity.value : "";
        const price = form.price ? form.price.value : "";
        const email = form.email ? form.email.value : "";
        const date = form.date ? form.date.value : "";

        const newList = { foodName, quantity, price, email, date };

        console.log(newList);

        fetch('https://pizza-burger-server.vercel.app/itemlist', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newList)
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
                        title: 'Purchase List added successfully!'
                    })
                }
            })
    }
    return (
        <div className='lg:flex md:flex justify-center '>
            <div className='lg:w-[50%]'>
                <img className='w-full h-full object-cover' src={banner} alt="" />
            </div>
            <div className="bg-base-200 lg:w-[50%]">
                <div className="hero-content flex-col  mx-auto">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Purchase List</h1>
                    </div>
                    <div className="w-full rounded-2xl bg-base-100 shadow-2xl">
                        <form onSubmit={handleAddToList} className="card-body">
                            <div className='grid grid-cols-2 gap-5 '>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Food Name</span>
                                    </label>
                                    <input name="foodName" type="text" placeholder="Food Name" className="input input-bordered" />
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Quantity</span>
                                    </label>
                                    <input name="quantity" type="text" placeholder="Quantity" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input name="price" type="text" placeholder="Price" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Buyer Name</span>
                                    </label>
                                    <input name="price" type="text" placeholder="Price" className="input input-bordered" />
                                </div>



                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Buyer Email</span>
                                    </label>
                                    <input name="email" placeholder='Email' type="text" className="input input-bordered" />
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Buying Date</span>
                                    </label>
                                    <input name="text" type="date" className="input input-bordered" />
                                </div>

                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Add List</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >

        </div >
    );
};

export default PurchasePage;