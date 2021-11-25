import { useState, useEffect } from 'react';
import validator from 'validator';
import { PayButton } from '..';
import { getAllCountries } from '../../api/country';
import getIten from '../../api/cart';
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
const priceToPay = getIten.price;

const CardForm = () => {
    const [errorMessageCard] = useState('Enter valid Number!');
    const [errorMessageEmail] = useState('Enter valid Email!');
    const [formData, setFormData] = useState(INITIAL_STATE);
    const [countries, setCountries] = useState([]);
    const [checkEmail, setCheckEmail] = useState('');
    const [checkCard, setCheckCard] = useState('');
    const [btnInfo] = useState({
        btnText: ' Pay',
        price: priceToPay,
        className: 'btn btn-backgroundcolor-b ',
    });

    useEffect(() => {
        const allCountries = async () => {
            const allCountriesAsync = await getAllCountries();
            setCountries(allCountriesAsync.data);
        };
        allCountries();
    }, []);

    const countriesToPrint = countries.sort(function (a, b) {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        return 0;
    });

    const handleFormSubmit = async (ev) => {
        ev.preventDefault();
        if (validator.isCreditCard(formData.cardNumber)) {
            if (validator.isEmail(formData.email)) {
                console.log('ok');
            }
        }
    };

    const handleInputChange = (ev) => {
        const { name, value } = ev.target;
        setFormData({ ...formData, [name]: value });
    };
    return (
        <div className="maincontainer">
            <form
                onSubmit={handleFormSubmit}
                className="form d-flex flex-wrap w-100"
            >
                <fieldset className=" fildset d-flex flex-wrap w-100">
                    <label className="form__label">Email</label>
                    {!validator.isEmail(formData.email) &&
                    formData.email.length >= 1 &&
                    checkEmail === 'check' ? (
                        <span className="alert alert-danger">
                            {errorMessageEmail}
                        </span>
                    ) : (
                        <span></span>
                    )}
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="email"
                        pattern="^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"
                        required
                        onChange={handleInputChange}
                        value={formData.email}
                        onFocus={() => setCheckEmail('')}
                        onBlur={() => setCheckEmail('check')}
                    />
                </fieldset>
                <fieldset className=" fildset d-flex flex-column align-items-start w-100 ">
                    <div className="d-flex flex-wrap w-100">
                        <label className="form__label">Card number</label>
                        {!validator.isCreditCard(formData.cardNumber) &&
                        formData.cardNumber.length >= 1 &&
                        checkCard === 'check' ? (
                            <span className="alert alert-danger alert-size">
                                {errorMessageCard}
                            </span>
                        ) : (
                            <span></span>
                        )}
                    </div>
                    <input
                        type="text"
                        name="cardNumber"
                        className="form-control"
                        id="cardNumber"
                        placeholder="1234 1234 1234 1234"
                        onChange={handleInputChange}
                        value={formData.cardNumber}
                        maxLength="16"
                        minLength="16"
                        required
                        onFocus={() => setCheckCard('')}
                        onBlur={() => setCheckCard('check')}
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
                    <label className="form__label">Name on card</label>
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
                    <label className="form__label">Country or region</label>
                    <select
                        type="selector"
                        name="country"
                        className="form-control-country"
                        id="country"
                        onChange={handleInputChange}
                        value={formData.country}
                    >
                        {countries ? (
                            countriesToPrint.map((country) => (
                                <option value={country.name} key={country.name}>
                                    {country.name}
                                </option>
                            ))
                        ) : (
                            <span> 'Loading ...'</span>
                        )}
                    </select>
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
