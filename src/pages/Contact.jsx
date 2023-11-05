import contact from '../assets/images/contact.jpg'

const Contact = () => {
    return (
        <div>
            <img className='w-full h-[300px]' src={contact} alt="" />
            <div className='lg:flex justify-center items-center lg:p-10'>

                <div className='lg:w-[50%] lg:p-20 mt-5'>
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-extrabold">YAM YAM Berlin</h1>
                        <p className="text-xl font-bold mt-5">Schönhauser Alle 3</p>
                        <p >15204 Berlin</p>
                        <p className='mt-3'>Telephone: 03301 61 34 30</p>
                        <p >E-mail: info@yamyam.com</p>
                    </div>
                </div>
                <div className='lg:w-[50%]'>
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <form className="card-body">
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
                                    <span className="label-text">Your Message</span>
                                </label>
                                <input type="text" placeholder="write your message" className="input input-bordered" required />

                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Send</button>
                            </div>
                        </form>
                    </div></div>
            </div>

        </div>
    );
};

export default Contact;