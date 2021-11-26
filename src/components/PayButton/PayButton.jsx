import './PayButton.scss';

const PayButton = (props) => {
    return (
        <div className="d-flex justify-content-center">
            <button type="submit" className={props.data.className}>
                {props.data.btnText ? (
                    <div d-flex flex-row>
                        <span className="btn__text">{props.data.btnText}</span>
                        <span className="btn__text">{props.data.price}</span>
                    </div>
                ) : (
                    <img
                        src={props.data.srcImage}
                        alt={props.data.altImage}
                    ></img>
                )}
            </button>
        </div>
    );
};

export default PayButton;
