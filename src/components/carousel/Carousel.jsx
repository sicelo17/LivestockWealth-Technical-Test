import './carousel.css'

const Carousel = () => {
    return (
        <>
            <div className='carousel'>
                <div className='carousel-data'>
                    <h1 className='carousel-title'>Gold big hoops</h1>
                    <p className='carousel-price'>$ 68,00</p>
                    <button>View Product</button>
                </div>
                <div className='carousel-markers'>
                    <div className='active'></div>
                    <div className='carousel-marker'></div>
                    <div className='carousel-marker'></div>
                    <div className='carousel-marker'></div>
                    <div className='carousel-marker'></div>
                </div>
            </div>
        </>
    )
}

export default Carousel