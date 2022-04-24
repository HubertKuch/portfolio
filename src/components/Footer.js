import React from "react";
import Icons from "./Icons";

export default function Footer () {
    return (
        <footer>
            <div className="footer--header">
                <div className="footer--media">
                    <p>
                        My media:
                    </p>
                    <div className="media__container">
                        <a
                            href="https://github.com/HubertKuch"
                            rel="noreferrer"
                            target="_blank"
                            aria-label="github link"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                        <a
                            href="https://www.facebook.com/monia.dawid/"
                            rel="noreferrer"
                            target="_blank"
                            aria-label="facebook link"
                        >
                            <i className="fab fa-facebook"></i>
                        </a>
                    </div>
                </div>
                <div className="footer--contact">
                    <p>Contact info:</p>
                    <div className="contact__container">
                        <a href="tel:+48 730 071 565">+48 730 071 565</a><br/>
                        <a href="mailto:kuchhubert@gmail.com">kuchhubert@gmail.com</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; Hubert Kuch</p>
            </div>
        </footer>
    )
}
