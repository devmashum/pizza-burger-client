import React from 'react';

const OrderedItems = ({ orderedItem }) => {
    const { img, category, food_name, price, _id, description } = orderedItem;

    return (
        <div>
            <div className='grid lg:grid-cols-4 grid-col-1 '>
                <td>  <div className='lg:flex justify-start  gap-10'>
                    <div className="avatar">
                        <div className=" lg:mask-squircle w-22 h-20">
                            <img className='' src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div><h3 className='text-xl font-bold'>{food_name}</h3></div>
                </div></td>

                <td>
                    <div>
                        <h3 className='lg:ml-10 text-xl'>Category: {category}</h3>
                    </div>
                </td>
                <td>  <div>
                    <h3 className='text-xl font-bold'>${price}</h3>
                </div></td>
                <td> <div>
                    <button className='btn mb-3'>X</button></div></td>
            </div>
        </div>
    );
};

export default OrderedItems;