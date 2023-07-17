import './products.css'
import Listing from "../product-listing/ProductListing.jsx";
import products from '../../utils/data';

const Products = () => {
    return (
        <>
            <div className='listings'>
                <div className='listings-titles'>
                    <h1>Shop the latest</h1>
                    <h3>View all</h3>
                </div>

                <div className='listings-products'>
                    {products.map((product) => (
                        <Listing  name={product.name} imgSrc={product.image} value={product.price} overlay={product.overlay} cartOverlay={product.cartOverLay}/>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Products