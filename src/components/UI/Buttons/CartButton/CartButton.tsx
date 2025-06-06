import './cart-btn.scss';
import {MainButtonInterface} from '../../../../interfaces';

const CartButton = ({customClass, onClick, label, icon} : MainButtonInterface) => {
    return (
        <button className={customClass ? customClass : ''} onClick={onClick}>
          <div>{icon}</div>
          <div className='divider'>|</div>
          <div className='counter'>{label}</div>
        </button>
    );
}

export default CartButton;