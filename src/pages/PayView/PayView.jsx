import { useState } from 'react';
import { CardForm, PayButton } from '../../components';
import './PayView.scss';
import appleLogo from '../../assets/XMLID34.png';

const PayView = () => {
    const [btnInfo] = useState({
        srcImage: appleLogo,
        altImage: 'Apple Logo',
        className: 'btn btn-backgroundcolor-a ',
    });
    return (
        <>
            <PayButton data={btnInfo} />
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
