import img1 from '../assets/images/6.jpg'


const Hero = () => {

    return (
        <div>
            <div className='lg:flex justify-center items-center w-full flex-row-reverse  bg-gray-200'>
                <div>
                    <img src={img1} className="md:w-full shadow-2xl" />
                </div>
                <div className='p-10'>
                    <h1 className="text-5xl font-bold">We Deliver the Taste of Life</h1>
                    <p className="py-6">Get it Deliver Right to Your Door!</p>
                    <div className='flex'>
                        <input type="text" placeholder="Search here..." className="input input-bordered input-success w-10/12" />
                        <button className='btn btn-primary'>Search</button>
                    </div>

                </div>

            </div>
            {/* <div className='lg:grid grid-cols-3 w-9/12 gap-3 mx-auto mb-10 text-white mt-20'>
                <div className={`p-10 bg-gradient-to-r from-gray-500 via-stone-100 to-neutral-500 border-black rounded-lg bg-${img1}`}>
                    <p className='text-yellow-400 text-xl '>Step 1</p>
                    <h1 className='text-2xl mb-5'>Choose Location</h1>
                    <p>   Enter Your Address or choose your current location using app</p>
                </div>
                <div className='p-10 bg-slate-700 border border-black rounded-lg lg:my-0 my-4'>
                    <p className='text-yellow-400 text-xl'>Step 2</p>
                    <h1 className='text-2xl mb-5'>Order Favorite Food</h1>
                    <p>Choose your favorite food and a payment method</p>
                </div>
                <div className='p-10 bg-slate-700 border border-black rounded-lg'>
                    <p className='text-yellow-400 text-xl'>Step 3</p>
                    <h1 className='text-2xl mb-5'>First <br /> <span>Delivery</span></h1>
                    <p>Get it delivered right to your door in 1 hour or less</p>
                </div>


            </div> */}
        </div>

    );
};

export default Hero;