import React from 'react';
import HeaderTxt from '../../HeaderTxt/HeaderTxt';
import ContactForm from '../../ContactForm/ContactForm';
import './ContactUs.css';

const ContactUs = (props) => {
    return (
        <section className="s-contactUs" id = "s-contact-us">
            <div className="s-contactUs__wrapper">
                <div className="col-item contact-info">
                    <HeaderTxt text="Contact Us" className="header-txt" />
                    <p className="reset-pad reset-mg p1">
                        Aliquam ac justo interdum, elementum ligula et, condimentum orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>

                    <div className="paragraph-wrapper">
                        <div className="p-col">
                            <span className = "p-col__title">Info</span>
                            <div className = "info">
                                <p className = "reset-pad reset-mg">
                                    <span className = "info-label">Phone:</span><a className = "info-txt info-link"href="tel:123-456-789-456">123-456-789-456</a>
                                </p>
                                <p className = "reset-pad reset-mg">
                                    <span className = "info-label">Fax:</span><a className = "info-txt info-link"href="123-456-789-456">123-456-789-456</a>
                                </p>
                                <p className = "reset-pad reset-mg">
                                    <span className = "info-label">Email:</span><a className = "info-txt info-link"href="mailto:info@inktattoo.net">info@inktattoo.net</a>
                                </p>
                                <div className = "reset-pad reset-mg">
                                    <span className = "info-label">Address:</span>
                                    <address>1234 Street Road, City Name</address>
                                </div>
                            </div>
                        </div>
                        <div className="p-col">
                            <span className = "p-col__title">Work Hours</span>
                            <div className = "info">
                                <p className = "reset-pad reset-mg">
                                    <span className = "info-label">Monday-Friday:</span><span className = "info-txt">09AM - 18PM</span>
                                </p>
                                <p className = "reset-pad reset-mg">
                                    <span className = "info-label">Saturday:</span><span className = "info-txt">09AM - 1PM</span>
                                </p>
                                <p className = "reset-pad reset-mg">
                                    <span className = "info-label">Sunday:</span><span className = "info-txt">CLOSED</span>
                                </p>
                             
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-item contact-form">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default ContactUs;