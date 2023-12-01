import { Link } from "react-router-dom";

const Hero = () => {

    return (
        <div className="hero  h-80  object-cover" style={{ backgroundImage: 'url(https://i.ibb.co/X3V65MS/2.jpg)' }}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center text-white">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-extrabold">Double good news</h1>
                    <p className="mb-5 font-bold text-base">If you don't take a bite, you're missing out twice: the new Double Hamburger Royal TS and Double Hamburger Royal cheese. Only for a short time.</p>

                    <Link to={'https://pizza-burger-bulls.web.app/allfooditems'}><button className="btn btn-primary">Try Now</button></Link>

                </div>
            </div>
        </div>

    );
};

export default Hero; 