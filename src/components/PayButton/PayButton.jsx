import './PayButton.scss';

const PayButton = (props) => {
    return (
        <div className="row col-12 justify-content-center">
            <button type="submit" className={props.data.className}>
                {props.data.btnText ? (
                    <div className="btn__container">
                        <span className="btn__text">
                            {props.data.btnText} ${props.data.price}
                        </span>
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
