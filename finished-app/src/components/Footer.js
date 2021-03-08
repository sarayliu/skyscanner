import React from 'react';
import './Footer.css';

function Footer(props) { 
    return(
        <div className="footer">
            {props.title}
            <br />
            <div className="subtitle">
            	{props.title2}
            	<br />
            	{props.title3}
            </div>
        </div>
    )
}

export default Footer;