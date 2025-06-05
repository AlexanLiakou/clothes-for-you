import './main-button.scss';
import {MainButtonInterface} from '../../../../interfaces';

const MainButton = ({customClass, label, onClick, icon} : MainButtonInterface) => {
    return (
        <button className={customClass ? customClass : ''} onClick={onClick}>
            {
                label && label
            }
            {
                icon && icon
            }
        </button>
    );
}

export default MainButton;