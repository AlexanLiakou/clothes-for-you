import { useDispatch } from 'react-redux';
import {add} from '../../../store/cartSlice';
import {CartItemInterface, ProductInterface} from '../../../interfaces';
import MainButton from '../../UI/Buttons/MainButton/MainButton';
import './product.scss';

const Product = ({id, image, title, price, description} : ProductInterface) => {
    
    const dispatch = useDispatch();

    const addItemToCart = (item : CartItemInterface) => {
        dispatch(add(item) );
    }
    
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 card-container h-100">
            <div className="card-body">
                <div className="img-container"><img src={image} /></div>
                <div className="text-container">
                    <div className="title-container"><h5>{title}</h5></div>
                    <div className="product-description"><p>{description}</p></div>
                    <div className="price-container"><p><b className="bold">Price: </b>{price}<span>&#8364;</span></p></div>
                </div>
            </div>
            <div className="button-container">
                <MainButton customClass='main-btn' label={'View Product'} onClick={()=> console.log('Single View')}/>
                <MainButton customClass='main-btn' label={'Add To Cart'} onClick={() =>{addItemToCart(
                    {
                        id: id,
                        image: image,
                        name: title,
                        price: price,
                        description: description
                    }
                )}}/>
            </div>
        </div>                   
    );
}

export default Product;