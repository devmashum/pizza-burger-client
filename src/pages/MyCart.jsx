
import { useLoaderData } from 'react-router-dom';
import OrderedItems from '../users/OrderedItems';

const MyCart = () => {
    const orderedItems = useLoaderData();

    return (
        <div>
            <div className='w-full ml-20 mx-auto '>
                {
                    orderedItems.map(orderedItem => <OrderedItems key={orderedItem._id} orderedItem={orderedItem}></OrderedItems>)
                }
            </div>
        </div>
    );
};

export default MyCart;