import React from "react";

export default function FooterBottom(props){
    return(
        <section className="footer-bottom">
            <div className="footer-line"></div>
            <div className="container copyrights-container">
                <div className="footer-logo">Лого</div>
                <div className="up-btn"><a href="#header" className="up-link">up-link</a></div>
                <div className="copyrights">
                    <div className="copyright">2018 web</div>
                </div>
            </div>
        </section>
    )
}
