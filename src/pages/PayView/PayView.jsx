import { useState } from 'react';
import { CardForm, PayButton, ProductView } from '../../components';
import './PayView.scss';
import appleLogo from '../../assets/XMLID34.png';
import arrow from '../../assets/arrow-left.svg';

const PayView = () => {
    const [btnInfo] = useState({
        srcImage: appleLogo,
        altImage: 'Apple Logo',
        className: 'btn btn-backgroundcolor-a ',
    });
    return (
        <>
            <div className=" row">
                <div className="col-sm-12 col-md-6">
                    <div className="link-container">
                        <a href className="link-container__link">
                            <img
                                className="link-container__img"
                                src={arrow}
                                alt="arrow-left"
                                width="16px"
                                height="14.6px"
                            />
                            <p className="link-container__title">
                                {' '}
                                Back to Market
                            </p>
                        </a>
                    </div>
                    <ProductView />
                </div>
                <div className="col-sm-12 col-md-6">
                    <PayButton data={btnInfo} />
                    <div className="divisor">
                        <span className="divisor__line">
                            <hr></hr>
                        </span>
                        <span className="divisor__text">Or pay with card</span>
                        <span className="divisor__line">
                            <hr></hr>
                        </span>
                    </div>
                    <CardForm />
                </div>
            </div>
        </>
    );
};

export default PayView;
