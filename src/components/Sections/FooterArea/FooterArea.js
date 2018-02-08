import React from 'react';
import './FooterArea.css';

const FooterArea = (props) => {
    return(
        <footer className = "FooterArea">
            <span>&copy; {new Date().getFullYear()} Inktattoo. All rights Reserved - Assets designed by theuncreativelab.com</span>
        </footer>
    );
};

export default FooterArea;