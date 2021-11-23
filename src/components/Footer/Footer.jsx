import './Footer.scss';
import redSys from '../../assets/image5.png';

const Footer = () => {
    return (
        <div className="footer">
            <span>Powered by</span>
            <span>
                <img src={redSys} alt="redSysLogo" />
            </span>
            <div>
                <a href className="footer__link">
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
