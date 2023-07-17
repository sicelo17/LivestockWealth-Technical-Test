import "./listing.css";

const Listing = (props) => {
  return (
    <>
      <div>
        <div className="listing">
         
        </div>
        <div>
          <div className="image-container">
            <img id="listing-image" src={props.imgSrc} />
            {props.cartOverlay && (
              <div className="cart-overlay">
                <p>ADD TO CART</p>
              </div>
            )}
             {props.overlay && (
            <div className="overlay">
              <span className="bi bi-cart3"></span>
              <span className="bi bi-eye"></span>
              <span className="bi bi-heart"></span>
            </div>
          )}
          </div>
          <h3 id="listing-name">{props.name}</h3>
          <h3 id="listing-value">$ {props.value}</h3>
        </div>
      </div>
    </>
  );
};

export default Listing;
