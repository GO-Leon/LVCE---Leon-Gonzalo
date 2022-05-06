import React from "react";
import instagramLogo from "../media/instagram.png";
import facebookLogo from "../media/facebook.png";
import whLogo from "../media/whatsapp.png";

const Footer = () => {
    return (
        <div className="footer__row">
            <h3>Seguinos en nuestras redes</h3>
            <div className="footer__column">
                <img src={instagramLogo} className="footer__logo" alt="instagram" />
                <h2>@lavidacolor.essen</h2>
            </div>
            <div className="footer__column">
                <img src={facebookLogo} className="footer__logo" alt="facebook" />
                <h2>La Vida Color Essen</h2>
            </div>
        </div>
            
    )
}

export default Footer