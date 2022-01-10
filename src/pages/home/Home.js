import Navigation from "../../components/navigation/navigation"
import Card from "../../components/Card/Card"
import Footer from "../../components/footer/footer"
// import ProductSlider from "../../components/product-slider/product-slider"
import Banner from "../../components/banner/banner"
import "./Home.scss"

const Home = () => {

    return(
        <div className="home">
            <Navigation/>
            <div className="g-container">
                <Banner title="BUY" span1="PLAYSTATION" span2="PSN"/>
            </div>
            <Card />
            <h1 className="text-center">My Product</h1>
            {/* <ProductSlider data={[]} /> */}
            <div className="g-container-2">
                <Banner title="Lorem" span1=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quibusdam." span2="lorem"/>
            </div>
           
            <Footer />
        </div>
    )
}

export default Home