import { useState } from 'react';
import MyItems from '../Extra/MyItems';
import img1 from '../assets/images/ba.jpg'
import { useLoaderData } from 'react-router-dom';

const AddedItems = () => {
    const addedItems = useLoaderData();
    const [items, setItems] = useState(addedItems);

    return (
        <div>
            <div>
                <img src={img1} className="w-full" />
            </div>

            <div>
                {
                    items.map(myItems => <MyItems key={myItems._id} myItems={myItems} items={items} setItems={setItems}></MyItems>)
                }
            </div>

        </div>
    );
};

export default AddedItems;