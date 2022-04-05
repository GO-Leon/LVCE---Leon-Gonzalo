import instagramLogo from "../media/instagram.png";
import facebookLogo from "../media/facebook.png";
import whLogo from "../media/whatsapp.png";

const ContactPage = () => {
    return (
        <div className="contact__column">
            <div className="contact__row">
                <img src={instagramLogo} className="contact-logo" alt="instagram" />
                <h2>@lavidacolor.essen</h2>
            </div>
            <div className="contact__row">
                <img src={facebookLogo} className="contact-logo" alt="facebook" />
                <h2>La Vida Color Essen</h2>
            </div>
            <div className="contact__row">
                <img src={whLogo} className="contact-logo" alt="whatsapp" />
                <h2>1234-5678</h2>
            </div>
        </div>
            
    )
}

export default ContactPage