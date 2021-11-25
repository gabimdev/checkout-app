import './ProductView.scss';
import productImage from '../../assets/image7.png';

const ProductView = () => {
    return (
        <div className="product-container">
            <img
                src={productImage}
                alt="name"
                className="product-container__img"
            />
            <p className="product-container__title">New mac</p>
            <div className="product-container-flex">
                <p className="product-container__price">$</p>
                <p className="product-container__price margin"> 899.00</p>
            </div>
        </div>
    );
};

export default ProductView;
