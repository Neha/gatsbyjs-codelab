import React from 'react';
import {Link} from 'gatsby';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><Link to="./" activeStyle={{ color: "red" }}>Home</Link></li>
                <li><Link to="./about-me" >About Us</Link></li>
                 <li><Link to="./public-speaking">Public Speaking</Link></li>
                <li><Link to="./contact-me">Contact Us</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation;