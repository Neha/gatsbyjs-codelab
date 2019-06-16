import React from 'react';
import {Link} from 'gatsby';

const Intro = () => {
    return(
        <section className="content">
            
            <p className="intro">Welcome to my digital space!!. This space has everything about <Link to="./about-me" >who I am?</Link>, <Link to="./public-speaking">public speaking</Link>, <Link to="./blogs">blogs</Link> and where you can <Link to="./contact-me">reach me.</Link></p>

            <p className="social-media"><a href="https://www.github.com/neha" target="_blank">Github</a> | <a href="https://www.twitter.com/hellonehha" target="_blank">Twitter</a> | <a href="https://www.linkedin.com/in/nehha/" target="_blank">Linkedin</a> | <a href="https://www.instagram.com/devgirllife" target="_blank">Instagram</a></p>
        </section>
    )
}

export default Intro;