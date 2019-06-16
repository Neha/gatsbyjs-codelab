import React from 'react';

import Layout from "../components/layout";
import SEO from "../components/seo"

const Contactme = () => { 
        return (
            <section className="container">
            <Layout>
            <SEO title="about me" />
            <section>
               <h2>Contact Me</h2>
               <ul>
                <li><a href="www.twitter.com/hellonehha" target="_blank">Twitter</a></li>
                 <li><a href="www.twitter.com/hellonehha" target="_blank">Linkedin</a></li>
               </ul>
               <p>Anything related to JSLovers you can reach me at neha@jslovers.com. For everything else reach me at nsharma215@gmail.com</p>

              
            </section>
            </Layout>
            </section>
        )
}

export default Contactme