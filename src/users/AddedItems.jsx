import MyItems from '../Extra/MyItems';
import img1 from '../assets/images/ba.jpg'
import { useLoaderData } from 'react-router-dom';

const AddedItems = () => {
    const addedItems = useLoaderData();

    return (
        <div>
            <div>
                <img src={img1} className="w-full" />
            </div>

            <div>
                {
                    addedItems.map(myItems => <MyItems key={myItems.id} myItems={myItems}></MyItems>)
                }
            </div>

        </div>
    );
};

export default AddedItems;