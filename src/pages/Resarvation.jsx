
import img5 from '../assets/images/footer.jpg'
const Resarvation = () => {
    return (
        <div className='lg:flex justify-center items-center pt-10 gap-10 pb-10'>
            <div>
                <img className='rounded-2xl w-full mb-5 pb-5 shadow-2xl bg-yellow-600' src={img5} alt="" />
            </div>
            <div>
                <div className=''>

                    <div className="card flex-shrink-0 w-full] shadow-2xl bg-base-100">

                        <form className="card-body">
                            <h1 className='text-2xl font-bold'>Make a reservation</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input type="number" placeholder="Phone" className="input input-bordered" required />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="date" placeholder="Phone" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Time</span>
                                </label>
                                <input type="time" placeholder="write your message" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Number of people</span>
                                </label>
                                <input type="number" placeholder="Number of People" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Message</span>
                                </label>
                                <input type="text" placeholder="write your message" className="input input-bordered" required />

                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resarvation;