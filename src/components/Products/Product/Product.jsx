import './product.scss';

const Product = ({image, title, price, description}) => {
    return (
        <div className="col-md-3 card-container h-100">
            <div className="card-body">
                <div className="img-container"><img src={image} /></div>
                <div className="text-container">
                    <div className="title-container"><h5>{title}</h5></div>
                    <div className="product-description">{description}</div>
                    <div className="price-container"><p><b className="bold">Price: </b>{price}<span>&#8364;</span></p></div>
                </div>
            </div>
            <div className="button-container">
                <button>View Product</button>
                <button>Add To Cart</button>
            </div>
        </div>                   
    );
}

export default Product;