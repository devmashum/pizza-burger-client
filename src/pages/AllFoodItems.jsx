
import { useLoaderData } from 'react-router-dom';
import img1 from '../assets/images/p1.jpg'
import Food from '../Extra/Food';
import { useState } from 'react';

const AllFoodItems = () => {
    const foods = useLoaderData();
    // 
    const [filteredData, setFilteredData] = useState(foods);
    const search = (e) => {
        setFilteredData(foods.filter((item) => item.food_name.toLowerCase().includes(e.target.value.toLowerCase())));

    }
    // 
    return (
        <div>


            <div className='lg:flex justify-center items-center w-full flex-row-reverse  bg-gray-200'>
                <div>
                    <img src={img1} className="md:w-full shadow-2xl" />
                </div>
                <div className='p-10'>
                    <h1 className="text-5xl font-bold">We Deliver the Taste of Life</h1>
                    <p className="py-6">Get it Deliver Right to Your Door!</p>
                    <div >
                        <input type="text"
                            onKeyUp={search} placeholder="Search here with food name" className="input input-bordered input-success w-full" />

                    </div>

                    {/* <div>
                        {
                            filteredData.map(searchData => <Search key={searchData._id} searchData={searchData}></Search>)
                        }
                    </div> */}


                </div>

            </div>
            {/* <div className='lg:grid grid-cols-4 gap-3 lg:gap-5 p-10'>
                {
                    foods.map(food => <Food key={food._id} food={food}></Food>)
                }
            </div> */}

            <div className='lg:grid grid-cols-4 gap-3 lg:gap-5 p-10'>
                {
                    filteredData.map(food => <Food key={food._id} food={food}></Food>)
                }
            </div>

        </div>
    );
};

export default AllFoodItems;


