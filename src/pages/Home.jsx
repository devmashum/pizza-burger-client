import Banner from "../Extra/Banner";
import Card from "../Extra/Card";
import Hero from "../Extra/Hero";
import PopularDishes from "../Extra/PopularDishes";
import PostAndArticles from "../Extra/PostAndArticles";




const Home = () => {

    return (
        <div >
            <Hero></Hero>
            <Card></Card>
            <PopularDishes></PopularDishes>
            <Banner></Banner>
            <PostAndArticles></PostAndArticles>
        </div>
    );
};

export default Home;