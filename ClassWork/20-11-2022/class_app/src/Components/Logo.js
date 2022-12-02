import logo from './logo.png';
import QRCode from './QRCode.PNG';
import './Card.css'
function Logo(){
    return (
        <div>
        <img src={logo} className="logo" alt="logo" />
        <h3 className="LogoHead">Company Logo</h3>
        <p className="LogoText">Graphic Solutions</p>
        <img src={QRCode} className="QRCode" alt="logo" />
        </div>
    )
}
export default Logo;