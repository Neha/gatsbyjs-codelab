import React from 'react';
import {Link} from 'gatsby';
import Layout from "../components/layout";
import SEO from "../components/seo"

const Aboutme = () => { 
        return (
            <Layout>
            <SEO title="about me" />
            <section>
              <p>Hey!! I am Neha sharma from New Delhi,India.I am a full time <strong>Front-end Developer</strong> with 10+ years of experience. I work on <strong>HTML5, CSS3, SCSS , Javascript, Reactjs, Nodejs</strong>. I make web apps, websites, and also consultant the companies and products on UX/UI and code architecture.</p>

               <p>I have worked in the domain of Education, Travel, Ecommerce, and many more diverse background as well as for the clients across world.</p>

               <p>I am the organizer (founder) of <a href="www.jslovers.com" target="_blank">JSLovers</a>. A Meetup group focused on meetups in Delhi/NCR, Mumbai, Bangalore, Pune. I would be either organising Meetup, speaking at some meetup or doing calligraphy.</p>

               <h3>Tech Skills</h3>
               <p>HTML5, CSS3, SCSS, Javascript, Reactjs, Nodejs, Photoshop, Skechapp. Well versed with Scrum , Jira and other non-technical skills.</p>
              <p>Here is my Github profile  <a herf="www.github.com/neha" target="_blank">Github</a></p>
               

               <h3>Certifications</h3>
               <p>Design</p>
               <p>Azure</p>
               <p>Meetup</p>
               <p><Link to="/public-speaking">Speaking</Link></p>

                
            </section>
            </Layout>
        )
}

export default Aboutme