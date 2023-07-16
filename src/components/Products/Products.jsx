import './products.css'
import Listing from "../product-listing/ProductListing.jsx";
import image7 from '../../assets/img7.png'
import image5 from '../../assets/img5.png'
import image4 from '../../assets/img4.png'
import image2 from '../../assets/img2.png'
import image3 from '../../assets/img3.png'
import image6 from '../../assets/img6.png'

const Listings = () => {
    return (
        <>
            <div className='listings'>
                <div className='listings-titles'>
                    <h1>Shop the latest</h1>
                    <h3>View all</h3>
                </div>

                <div className='listings-products'>
                    <Listing name='Lira Earrings' image={image7} value='20,00' overlay={false} cartOverlay={false} />
                    <Listing name='Hal Earrings' image={image5} value='25,00' overlay={false} cartOverlay={false} />
                    <Listing name='Kaede Hair Pin Set Of 3' image={image4} value='30,00' overlay={false} cartOverlay={false} />
                    <Listing name='Hair Pin Set of 3' image={image2} value='30,00' overlay={true} cartOverlay={false} />
                    <Listing name='Plaine Necklace' image={image3} value='19,00' overlay={false} cartOverlay={false} />
                    <Listing name='Yuki Hair Pin Set of 3' image={image6} value='29,00' overlay={false} cartOverlay={true} />
                </div>
            </div>
        </>
    )
}

export default Listings