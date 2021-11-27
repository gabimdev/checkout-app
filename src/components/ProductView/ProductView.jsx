import './ProductView.scss';
import getIten from '../../api/cart';

const ProductView = () => {
    const img = require('../../assets/image7.png').default;

    return (
        <div className="row justify-content-center align-items-center">
            <div className="row-12 justify-content-center align-items-center order-1 order-md-2">
                <img src={img} alt="product name" className="col-6 col-md-8" />
            </div>
            <div
                className="col-6
            justify-content-center
            margin-title-box
            order-2
            order-md-1
            justify-content-md-start"
            >
                <div className="col-12 col-md-6 col-lg-4   justify-content-center">
                    <span className="product-title col-auto">
                        {getIten.name}
                    </span>
                </div>
                <div className="col-12 margin-price-box  col-md-10 col-lg-6">
                    <span className="product-price col-2 m-0">$</span>
                    <span className="product-price margin col-10 m-0">
                        {' '}
                        {getIten.price}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProductView;
