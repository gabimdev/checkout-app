import { useState } from 'react';
import validator from 'validator';
import { PayButton } from '..';
import './CardForm.scss';

const INITIAL_STATE = {
    email: '',
    name: '',
    country: '',
    cardNumber: '',
    cardDate: '',
    cardCvc: '',
    zipCode: '',
};
const priceToPay = '$899,00';

const CardForm = () => {
    const [errorMessage] = useState('Enter valid CreditCard Number!');

    const [btnInfo] = useState({
        btnText: ' Pay',
        price: priceToPay,
        className: 'btn btn-backgroundcolor-b ',
    });
    const [formData, setFormData] = useState(INITIAL_STATE);
    const today = new Date(99, 12);
    console.log(today);

    const handleFormSubmit = async (ev) => {
        ev.preventDefault();
        if (validator.isCreditCard(formData.cardNumber)) {
            console.log('OK', ev.traget);
        }
    };

    const handleInputChange = (ev) => {
        const { name, value } = ev.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData);
    };

    return (
        <div className="maincontainer">
            <form
                onSubmit={handleFormSubmit}
                className="d-flex flex-wrap w-100"
            >
                <fieldset className=" fildset d-flex flex-wrap w-100">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="email"
                        pattern="^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"
                        required
                        onChange={handleInputChange}
                        value={formData.email}
                    />
                </fieldset>
                <fieldset className=" fildset d-flex flex-column align-items-start w-100 ">
                    <label>Card number</label>
                    {!validator.isCreditCard(formData.cardNumber) &&
                    formData.cardNumber.length >= 16 ? (
                        <span
                            style={{
                                fontWeight: 'bold',
                                color: 'red',
                            }}
                        >
                            {errorMessage}
                        </span>
                    ) : (
                        <span></span>
                    )}
                    <input
                        type="text"
                        name="cardNumber"
                        className="form-control order-0 "
                        id="cardNumber"
                        placeholder="1234 1234 1234 1234"
                        onChange={handleInputChange}
                        value={formData.cardNumber}
                        maxLength="16"
                        minLength="16"
                        required
                    />

                    <div className="d-flex flex-row w-100">
                        <input
                            type="text"
                            name="cardDate"
                            id="cardDate"
                            className="form-control-date"
                            placeholder="MM / YY"
                            pattern="^(0[1-9]|1[0-2])\/?([0-9]{2})$"
                            onChange={handleInputChange}
                            value={formData.cardDate}
                            minLength="5"
                            maxLength="5"
                        />
                        <input
                            type="text"
                            name="cardCvc"
                            id="cardCvc"
                            className="form-control-cvc"
                            placeholder="CVC"
                            onChange={handleInputChange}
                            value={formData.cardCvc}
                            maxLength="3"
                            minLength="3"
                        />
                    </div>
                </fieldset>
                <fieldset className=" fildset d-flex flex-wrap w-100">
                    <label>Name on card</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        onChange={handleInputChange}
                        value={formData.name}
                        minLength="8"
                        required
                    />
                </fieldset>
                <fieldset className=" fildset d-flex flex-wrap flex-column align-items-start w-100">
                    <label>Country or region</label>
                    <select
                        type="selector"
                        name="country"
                        className="form-control-country"
                        id="country"
                        onChange={handleInputChange}
                        value={formData.country}
                    />
                    <input
                        type="number"
                        name="zipCode"
                        className="form-control-zipCode"
                        id="zipCode"
                        placeholder="ZIP"
                        onChange={handleInputChange}
                        value={formData.zipCode}
                    />
                </fieldset>
                <PayButton data={btnInfo} />
            </form>
        </div>
    );
};

export default CardForm;
