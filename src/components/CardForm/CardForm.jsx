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
    console.log(countries);

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
                setFormData(INITIAL_STATE);
            }
        }
    };

    const handleInputChange = (ev) => {
        const { name, value } = ev.target;
        setFormData({ ...formData, [name]: value });
    };
    return (
        <div className="row col-12 container justify-content-center maincontainer">
            <form
                onSubmit={handleFormSubmit}
                className="form row col-12 justify-content-center align-items-center p-0"
            >
                <fieldset className=" fildset col-12">
                    <div className="row col-12 justify-content-start">
                        <label className="form__label col-4">Email</label>
                        {!validator.isEmail(formData.email) &&
                        formData.email.length >= 1 &&
                        checkEmail === 'check' ? (
                            <span className="alert alert-danger col-8">
                                {errorMessageEmail}
                            </span>
                        ) : (
                            <span className="col-8 d-none "></span>
                        )}
                    </div>
                    <input
                        type="email"
                        name="email"
                        className="form-control col-12"
                        id="email"
                        pattern="^[a-z0-9!#$%&'*+/=?^_`{|}~-]+
                        (?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*
                        @(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+
                        [a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"
                        required
                        onChange={handleInputChange}
                        value={formData.email}
                        onFocus={() => setCheckEmail('')}
                        onBlur={() => setCheckEmail('check')}
                    />
                </fieldset>
                <fieldset className=" fildset col-12 ">
                    <div className="row col-12 justify-content-start">
                        <label className="form__label col-6">Card number</label>
                        {!validator.isCreditCard(formData.cardNumber) &&
                        formData.cardNumber.length >= 1 &&
                        checkCard === 'check' ? (
                            <span className="alert alert-danger alert-size">
                                {errorMessageCard}
                            </span>
                        ) : (
                            <span className="col-8 d-none "></span>
                        )}
                    </div>
                    <input
                        type="text"
                        name="cardNumber"
                        className="form-control card-radius col-12"
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

                    <div className="row col-12 m-0">
                        <input
                            type="text"
                            name="cardDate"
                            id="cardDate"
                            className="form-control date-radius col"
                            placeholder="MM / YY"
                            pattern="^(0[1-9]|1[0-2])\/?([0-9]{2})$"
                            onChange={handleInputChange}
                            value={formData.cardDate}
                            minLength="5"
                            maxLength="5"
                            required
                        />
                        <input
                            type="text"
                            name="cardCvc"
                            id="cardCvc"
                            className="form-control cvc-radius col"
                            placeholder="CVC"
                            onChange={handleInputChange}
                            value={formData.cardCvc}
                            maxLength="3"
                            minLength="3"
                            required
                        />
                    </div>
                </fieldset>
                <fieldset className=" fildset col-12">
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
                <fieldset className=" fildset col-12">
                    <label className="form__label">Country or region</label>
                    <select
                        type="selector"
                        name="country"
                        className="form-control country-radius"
                        id="country"
                        onChange={handleInputChange}
                        value={formData.country}
                    >
                        <option>Select country</option>
                        {countries ? (
                            countriesToPrint.map((country) => (
                                <option
                                    className="country-option"
                                    value={country.name}
                                    key={country.name}
                                >
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
                        className="form-control zipCode-radius"
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
