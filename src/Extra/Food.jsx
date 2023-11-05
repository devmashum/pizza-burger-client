

const Food = ({ food }) => {
    const { food_name, price, img } = food;

    return (
        <div className="card glass mb-5">
            <figure><img className="w-full" src={img} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{food_name}</h2>
                <p>{price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-wide w-full">Details</button>
                </div>
            </div>
        </div>
    );
};

export default Food;