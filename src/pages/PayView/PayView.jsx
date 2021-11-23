import { CardForm, PayButton } from '../../components';
import './PayView.scss';

const PayView = () => {
    return (
        <>
            <PayButton />
            <div className="divisor d-flex flex-row">
                <span className="divisor__line">
                    <hr></hr>
                </span>
                <span className="divisor__text">Or pay with card</span>
                <span className="divisor__line">
                    <hr></hr>
                </span>
            </div>
            <CardForm />
        </>
    );
};

export default PayView;
