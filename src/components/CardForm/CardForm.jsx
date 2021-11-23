import { useState } from 'react';
import './CardForm.scss';

const INITIAL_STATE = {
    email: '',
    name: '',
    country: '',
    cardNumber: '',
    zipCode: '',
};

const CardForm = () => {
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleFormSubmit = async (ev) => {
        ev.preventDefault();
        setFormData(INITIAL_STATE);
    };

    const handleInputChange = (ev) => {
        const { name, value } = ev.target;
        setFormData({ ...formData, [name]: value });
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
                        onChange={handleInputChange}
                        value={formData.email}
                    />
                </fieldset>
                <fieldset className=" fildset d-flex flex-column align-items-start w-100 ">
                    <label>Card number</label>
                    <input
                        type="number"
                        name="cardNumber"
                        className="form-control order-0 "
                        id="cardNumber"
                        placeholder="1234 1234 1234 1234"
                        onChange={handleInputChange}
                        value={formData.cardNumber}
                    />
                    <div className="d-flex flex-row w-100">
                        <input
                            type="text"
                            onfocus="(this.type='date')"
                            className="form-control-date"
                            placeholder="MM / YY"
                        />
                        <input
                            type="number"
                            className="form-control-cvc"
                            placeholder="CVC"
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
            </form>
        </div>
    );
};

export default CardForm;
