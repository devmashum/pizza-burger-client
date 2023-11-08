
import { useLoaderData } from 'react-router-dom';
import img1 from '../assets/images/p1.jpg'
import Food from '../Extra/Food';
import { useState } from 'react';
import './AllFoodItems.css'



const AllFoodItems = () => {
    const foods = useLoaderData();
    // 
    const [filteredData, setFilteredData] = useState(foods);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(0);
    // Pagination
    const covertToNumber = foods.length;

    const numberOfPages = Math.ceil(covertToNumber / itemsPerPage);
    const pages = [...Array(numberOfPages).keys()];
    console.log(pages)

    const handleItemPerPage = e => {
        const val = parseInt(e.target.value);
        console.log(val);
        setItemsPerPage(val)
    }

    const handlePriviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNextPage = () => {
        if (currentPage < pages.length) {
            setCurrentPage(currentPage + 1)
        }
    }
    //     const search = (e) => {
    //         setFilteredData(foods.filter((item) => item.food_name.toLowerCase().includes(e.target.value.toLowerCase())));
    // }

    // Filter with name, category and price
    const search = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setFilteredData(foods.filter((item) =>
            item.food_name.toLowerCase().includes(searchTerm) ||
            item.category.toLowerCase().includes(searchTerm) ||
            item.price.toString().includes(searchTerm)
        ));
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

                </div>

            </div>


            <div className='lg:grid grid-cols-4 gap-3 lg:gap-5 p-10'>
                {
                    filteredData.map(food => <Food key={food._id} food={food}></Food>)
                }
            </div>
            <div className='pagination'>
                <p>currentPage: {currentPage}</p>
                <button onClick={handlePriviousPage}>Previous</button>
                {
                    pages.map(page => <button onClick={() => setCurrentPage(page)} className={currentPage == page && 'selected btn'} key={page} >{page}</button>)

                }
                <button onClick={handleNextPage}>Next</button>
                <select value={itemsPerPage} onChange={handleItemPerPage} id="">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>
            </div>


        </div>
    );
};

export default AllFoodItems;


