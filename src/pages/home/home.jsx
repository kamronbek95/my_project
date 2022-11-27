import Hero from "../../components/hero/hero" ; 
import Section from "../../components/section/section";
import ProductsList from "../../components/productslist/productslist";

const Home = () => {
    return (
        <>
            <Hero/>
            <ProductsList/>
            <Section/>
        </>
    )
}

export default Home