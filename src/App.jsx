import Navbar from "./components/navbar/Navbar.jsx";
import Carousel from "./components/carousel/Carousel.jsx";
import Listings from "./components/listings/Listings.jsx";
import Footer from "./components/footer/Footer.jsx";
import SearchInput from "./components/search/SearchInput.jsx";
import Categories from "./components/categories/Category.jsx";
import "./App.css";
const App = () => {
    return (
        <>
            <div>
                <Navbar />
                <SearchInput />
                <Categories />
                <Carousel />
                <Listings />
                <Footer />
            </div>
        </>
    )
}

export default App