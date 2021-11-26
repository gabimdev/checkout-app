import './ProductView.scss';
import getIten from '../../api/cart';

const ProductView = () => {
    const img = require('../../assets/image7.png').default;

    return (
        <div className="product-container">
            <div className="product-container__image-title">
                <img src={img} alt="product name" className="img-fluid" />
                <p className="product-container__title">{getIten.name}</p>
            </div>
            <div className="product-container-flex">
                <p className="product-container__price">$</p>
                <p className="product-container__price margin">
                    {' '}
                    {getIten.price}
                </p>
            </div>
        </div>
    );
};

export default ProductView;
