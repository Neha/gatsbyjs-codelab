import React from 'react';

import Layout from "../components/layout";
import SEO from "../components/seo"

const PublicSpeaking = () => { 
        return (
            <Layout>
            <SEO title="about me" />
            <section>
              <p>Hey!! I am Neha sharma from New Delhi, India.If you ever heared the name of the <a href="www.jslovers.com" target="_blank">JSLovers</a> then I am glad to know you are at the digital footprint of the founder of JsLovers.</p>

              <ul className="lisitng">
                <li><a href="">Gatsbyjs Code-lab for beginners, Delhi</a></li>
                <li><a href="">Gatsbyjs Code-lab for beginners, Microsoft Bangalore</a></li>
                <li><a href="">Nodejs Cli Code-lab , Microsoft Bangalore</a></li>
                <li><a href="">Gatsbyjs Code-lab for beginners, GDG - Delhi</a></li>
             </ul>
            </section>
            </Layout>
        )
}

export default PublicSpeaking