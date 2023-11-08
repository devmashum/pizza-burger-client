
import img1 from '../assets/images/member1.png'
import img2 from '../assets/images/member2.png'
import img3 from '../assets/images/member3.png'
import img4 from '../assets/images/member4.png'

const PostAndArticles = () => {
    return (
        <div>
            <div>
                <h1 className='text-5xl text-center font-bold py-20'>Our Happy Clients Say</h1>
            </div>
            <div className="carousel w-full pb-10 ng-base-200">
                <div id="slide1" className="carousel-item relative w-full max-h-screen ">
                    <div className=" card bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% w-full lg:mx-20 shadow-2xl">
                        <figure><img className='w-24 mt-5' src={img1} alt="" /></figure>
                        <div className="card-body text-center p-10">
                            <p className='text-2xl font-bold '>Michael Kross</p>
                            <p className='text-base font-bold mb-5'>Date: 12.02.2023</p>

                            <p className='mt-3 lg:text-lg '>"What a delightful dining experience! The food at this restaurant was exceptional. Each dish was beautifully presented, and the flavors were a true culinary delight. The attentive and friendly staff made our evening even more enjoyable. We can't wait to return!"</p>

                        </div>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                        <a href="#slide4" className="btn lg:ml-40 btn-circle">❮</a>
                        <a href="#slide2" className="btn lg:mr-40 btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full max-h-screen" >

                    <div className=" card bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% w-full lg:mx-20 shadow-2xl">
                        <figure><img className='w-24 mt-5' src={img2} alt="" /></figure>
                        <div className="card-body text-center p-10">
                            <p className='text-2xl font-bold '>Olivia</p>
                            <p className='text-base font-bold mb-5'>Date: 02.10.2023</p>

                            <p className='mt-3 lg:text-lg'>"I had the pleasure of dining at this restaurant last night, and it exceeded all my expectations. The ambiance was cozy and inviting, and the menu offered a great variety of delicious options. The chef's attention to detail was evident in every bite. I highly recommend this restaurant for a memorable dining experience."</p>

                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn lg:ml-40 btn-circle">❮</a>
                        <a href="#slide3" className="btn lg:mr-40 btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full max-h-screen">
                    <div className=" card bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% w-full lg:mx-20 shadow-2xl">
                        <figure><img className='w-24 mt-5' src={img3} alt="" /></figure>
                        <div className="card-body text-center p-10">
                            <p className='text-2xl font-bold '>Ethan Zimmer</p>
                            <p className='text-base font-bold mb-5'>Date: 10.08.2022</p>

                            <p className='mt-3 lg:text-lg'>"This restaurant is a hidden gem! The service was top-notch, and the food was simply outstanding. I couldn't get enough of the mouthwatering dishes, and the wine selection perfectly complemented our meal. If you're looking for a wonderful dining experience, look no further!"</p>

                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn lg:ml-40 btn-circle">❮</a>
                        <a href="#slide4" className="btn lg:mr-40 btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full max-h-screen">
                    <div className=" card bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% w-full lg:mx-20 shadow-2xl">
                        <figure><img className='w-24 mt-5' src={img4} alt="" /></figure>
                        <div className="card-body text-center p-10">
                            <p className='text-2xl font-bold '>Isabella Horst</p>
                            <p className='text-base font-bold mb-5'>Date: 29.05.2023</p>

                            <p className='mt-3 lg:text-lg'>"This restaurant is a hidden gem! The service was top-notch, and the food was simply outstanding. I couldn't get enough of the mouthwatering dishes, and the wine selection perfectly complemented our meal. If you're looking for a wonderful dining experience, look no further!"</p>

                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn lg:ml-40 btn-circle">❮</a>
                        <a href="#slide1" className="btn lg:mr-40 btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostAndArticles;