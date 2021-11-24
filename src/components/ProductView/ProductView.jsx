import './ProductView.scss';
import productImage from '../../assets/image7.png';

const ProductView = () => {
    return (
        <div>
            <div>
                <img src={productImage} alt="name" />
            </div>
            <div>
                <p>Name</p>
            </div>
            <div>
                <p>$ 899.00</p>
            </div>
        </div>
    );
};

export default ProductView;
