import { useState } from 'react';
import { CardForm, PayButton, ProductView, Footer } from '../../components';

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
            <div className="container">
                <div className=" row">
                    <div className="col-sm-12 col-md-6">
                        <div className="link-container col-12">
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
                        <Footer class={'footer displayNone'} />
                    </div>
                    <div className="col-12 col-md-6 justify-content-center align-items-center pay-margin-top">
                        <div className="row col-12 justify-content-center align-items-center container-padding">
                            <div className="row col-12 justify-content-center align-items-center p-0">
                                <PayButton data={btnInfo} />
                            </div>
                            <div className="divisor row-12 p-0">
                                <hr className="divisor__line col-3"></hr>
                                <span className="divisor__text col-6">
                                    Or pay with card
                                </span>
                                <hr className="divisor__line col-3"></hr>
                            </div>
                        </div>
                        <CardForm />
                    </div>
                </div>
            </div>
        </>
    );
};

export default PayView;
