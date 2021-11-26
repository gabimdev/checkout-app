import './Footer.scss';
import redSys from '../../assets/image5.png';

const Footer = (props) => {
    return (
        <div className={props.class}>
            <span className="footer__text">Powered by</span>
            <span>
                <img src={redSys} alt="redSysLogo" />
            </span>
            <div>
                <a href className="footer__link first-link">
                    Terms
                </a>
                <a href className="footer__link">
                    Privacy
                </a>
            </div>
        </div>
    );
};

export default Footer;
