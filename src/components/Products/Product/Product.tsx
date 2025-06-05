import './product.scss';
import {ProductInterface} from '../../../interfaces';
import MainButton from '../../UI/Buttons/MainButton/MainButton';

const Product = ({image, title, price, description} : ProductInterface) => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 card-container h-100">
            <div className="card-body">
                <div className="img-container"><img src={image} /></div>
                <div className="text-container">
                    <div className="title-container"><h5>{title}</h5></div>
                    <div className="product-description">{description}</div>
                    <div className="price-container"><p><b className="bold">Price: </b>{price}<span>&#8364;</span></p></div>
                </div>
            </div>
            <div className="button-container">
                <MainButton label={'View Product'} onClick={()=> console.log('Single View')}/>
                <MainButton label={'Add To Cart'} onClick={()=> console.log('Added to Cart')}/>
            </div>
        </div>                   
    );
}

export default Product;