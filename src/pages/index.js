import React, { useEffect, useCallback } from 'react';

import Div100vh from 'react-div-100vh'
import Particles from 'react-particles-js'
import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"

function IndexPage() {

  const waypointChecker =()=>{
    let listItems = document.getElementsByClassName('listItem');
    let observer = new IntersectionObserver((entries, observer) => {
      const [{ isIntersecting }] = entries
      if (isIntersecting) {
        console.log('intersected');
        entries[0].target.classList.add("isActive");
      } else {
        entries[0].target.classList.remove("isActive");
      }
    }, {rootMargin: '-44% 0px -44% 0px', threshold: 0.44});

    for (var listItem of listItems) {
      observer.observe(listItem);
    }
  }

  const removeListItems =()=>{
    let listItems = document.getElementsByClassName('listItem');
    for (var listItem of listItems) {
      listItem.classList.remove("isActive");
    }
  }

  const scrollTopCheck = useCallback(() => {
    window.addEventListener('scroll', function(e) {
      let d = document.documentElement;
      let offset = d.scrollTop + window.innerHeight;
      let height = d.offsetHeight;

      if(window.scrollY <= 300){
        removeListItems();
      }

      if (offset >= height) {
        removeListItems();
      }
    });
  }, []);

  useEffect(() => {
    waypointChecker();
    scrollTopCheck();
  }, [scrollTopCheck]);

  return (
    <Layout>
      <SEO title="Home" />
      <div className="site-wrapper">
        <Particles className="particlesFixed"/>
        <Header/>
        <Div100vh className="header-100vh">
          <section className="row align-justify expanded">
            <div className="columns small-12 medium-expand hero__name">
              <h2>David <br/>Roach <br/> <em>V</em></h2>
            </div>
            <div className="columns small-12 medium-expand">
              <ul className="text-right hero__highlights">
                <li>
                  Teams Leader
                </li>
                <li>
                  Technology Director
                </li>
                <li>
                  Front End Developer
                </li>
                <li>
                  Dog Dad
                </li>
                <li>
                  Helpless Islanders Fan
                </li>
              </ul>
            </div>
          </section>
        </Div100vh>
        <section className="section-block">
          <div className="row">
            <div className="columns small-12 medium-10">
              <h1 className="lead__bio">David Roach is a <em>technology director</em>, and lead <em>front-end developer</em> in the <em>greater New York City area</em>. David is the 5th of his name, which makes any family affair (where there are multiple Davids) confusing, but generally risk-averse.</h1>
            </div>
          </div>
          <div className="row">
            <div className="columns small-10 small-offset-2 medium-9 medium-offset-3">
              <p className="lead__mini-bio">More importantly, David has 9+ years of proven development experience leading development teams as a creative technologist, technical director, and front-end developer. </p>
              <p className="lead__mini-bio">David has worked with small to large creative and development teams building best-in-class responsive, accessible web applications, microsites, and portals.</p>
              <p className="lead__mini-bio">David is craft-focused, an advocate for technology, and a practial problem solver. He believes in being technology-agnostic, but informed and well-rounded; better equipped to solve a wide range of complex business problems.</p>
              <p className="lead__mini-bio">As a teams leader, David has continually demonstrated the ability to foster great people, not just good developers.</p>
              <p className="lead__mini-bio">Articulate and with a natural ability to translate complex technical problems into cogent and manageable solutions, David is a strong client-partner and discipline lead.</p>
            </div>
          </div>
        </section>

        <section className="section-block">
          <div className="row">
            <div className="columns">
              <h3 className="block__lead">Hard Skills</h3>
            </div>
          </div>
          <div className="row block__row">
            <div className="columns">
              <ul className="skillsList">
                <li className="listItem">
                  HTML
                  <span className="skills__note">Pretty Darn Good</span>
                  <span className="skills__percentage"></span>
                </li>
                <li className="listItem">
                  CSS
                  <span className="skills__note">Like a Second Skin</span>
                  <span className="skills__percentage"></span>
                </li>
                <li className="listItem">
                  JavaScript (ES5/6)
                  <span className="skills__note">console.log('no issues here');</span>
                  <span className="skills__percentage"></span>
                </li>
                <li className="listItem">
                  React JS/React Native/Functional React
                  <span className="skills__note">What's a word for stronger?</span>
                  <span className="skills__percentage"></span>
                </li>
                <li className="skill--75 listItem">
                  TypeScript
                  <span className="skills__note">Friends, always happy to reconnect.</span>
                  <span className="skills__percentage skills__percentage--75"></span>
                </li>
                <li className="listItem">
                  Redux/MobX
                  <span className="skills__note">To be stateful, or not not to be stateful.</span>
                  <span className="skills__percentage"></span>
                </li>
                <li className="skill--75 listItem">
                  PHP (Laravel/Symfony/Cake)
                  <span className="skills__note">We have a history.</span>
                  <span className="skills__percentage skills__percentage--75"></span>
                </li>
                <li className="listItem">
                  Headless/JAMStack Development
                  <span className="skills__note">Who needs a head anyway.</span>
                  <span className="skills__percentage"></span>
                </li>
                <li className="listItem">
                  API Development & Debugging
                  <span className="skills__note">Everyone needs a good REST.</span>
                  <span className="skills__percentage"></span>
                </li>
                <li className="listItem">
                  CI/CD & Automation
                  <span className="skills__note">Just like in the Carousel of Progress.</span>
                  <span className="skills__percentage"></span>
                </li>
                <li className="listItem">
                  Gulp/Webpack/Grunt/Require
                  <span className="skills__note">That was a mouthful.</span>
                  <span className="skills__percentage"></span>
                </li>
                <li className="skill--75 listItem">
                  Node.js
                  <span className="skills__note">Overdue for a chat over a beer.</span>
                  <span className="skills__percentage skills__percentage--75"></span>
                </li>
                <li className="listItem">
                  Yarn/NPM
                  <span className="skills__note">We talk everyday.</span>
                  <span className="skills__percentage"></span>
                </li>
                <li className="listItem">
                  GIT/SVN
                  <span className="skills__note">Put a fork in it.</span>
                  <span className="skills__percentage"></span>
                </li>
                <li className="listItem">
                  AWS Certified Cloud Practioner
                  <span className="skills__note">Pending final exam.</span>
                  <span className="skills__percentage"></span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section-block">
          <div className="row">
            <div className="columns">
              <h3 className="block__lead">General <br />Experience</h3>
            </div>
          </div>
          <div className="row block__row">
            <div className="columns">
              <ul className="skillsList">
                <li className="listItem">
                  WordPress
                  <span className="skills__note">Expert</span>
                  <span className="skills__percentage"></span>
                </li>
                <li className="skill--50 listItem">
                  SiteCore
                  <span className="skills__note">Prior Experience</span>
                  <span className="skills__percentage skills__percentage--50"></span>
                </li>
                <li className="skill--50 listItem">
                  Adobe Experience Manager
                  <span className="skills__note">Prior Experience</span>
                  <span className="skills__percentage skills__percentage--50"></span>
                </li>
                <li className="skill--75 listItem">
                  Adobe Magento (Magento 2)
                  <span className="skills__note">Proficient</span>
                  <span className="skills__percentage skills__percentage--75"></span>
                </li>
                <li className="listItem">
                  Shopify
                  <span className="skills__note">Expert</span>
                  <span className="skills__percentage"></span>
                </li>
                <li className="listItem">
                  GatsbyJS
                  <span className="skills__note">Expert</span>
                  <span className="skills__percentage"></span>
                </li>
                <li className="listItem">
                  Contentful
                  <span className="skills__note">Expert</span>
                  <span className="skills__percentage"></span>
                </li>
                <li className="listItem">
                  Netlify
                  <span className="skills__note">Expert</span>
                  <span className="skills__percentage"></span>
                </li>
                <li className="skill--50 listItem">
                  Drupal
                  <span className="skills__note">Prior Experience</span>
                  <span className="skills__percentage skills__percentage--50"></span>
                </li>
                <li className="listItem">
                  Assemble.io
                  <span className="skills__note">Expert</span>
                  <span className="skills__percentage"></span>
                </li>
                <li className="listItem">
                  Hugo
                  <span className="skills__note">Expert</span>
                  <span className="skills__percentage"></span>
                </li>
                <li className="listItem">
                  Middleman
                  <span className="skills__note">Expert</span>
                  <span className="skills__percentage"></span>
                </li>
                <li className="listItem">
                  Jenkins
                  <span className="skills__note">Expert</span>
                  <span className="skills__percentage"></span>
                </li>
                <li className="listItem">
                  Atlassian Deployment Workflow
                  <span className="skills__note">Expert</span>
                  <span className="skills__percentage"></span>
                </li>
                <li className="listItem">
                  Deploybot
                  <span className="skills__note">Expert</span>
                  <span className="skills__percentage"></span>
                </li>
                <li className="skill--75 listItem">
                  Docker/Kubernetes
                  <span className="skills__note">Proficient</span>
                  <span className="skills__percentage skills__percentage--75"></span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section-block">
          <div className="row">
            <div className="columns">
              <h3 className="block__lead">Client <br />Experience</h3>
            </div>
          </div>
          <div className="row block__row">
            <div className="columns">
              <ul className="skillsList skillsList--defined">
                <li className="listItem">
                  Cadillac
                  <ul className="skills__note">
                    <li>Technology Lead</li>
                  </ul>
                  <span className="skills__line"></span>
                </li>
                <li className="listItem">
                  SiriusXM Radio
                  <ul className="skills__note">
                    <li>Technology Lead</li>
                  </ul>
                  <span className="skills__line"></span>
                </li>
                <li className="listItem">
                  American Express Travel
                  <ul className="skills__note">
                    <li>Technology Lead</li>
                  </ul>
                  <span className="skills__line"></span>
                </li>
                <li className="listItem">
                  Wyndham Vacation Ownership
                  <ul className="skills__note">
                    <li>Technology Lead</li>
                  </ul>
                  <span className="skills__line"></span>
                </li>
                <li className="listItem">
                  Jerry Seinfeld
                  <ul className="skills__note">
                    <li>Lead Front End</li>
                  </ul>
                  <span className="skills__line"></span>
                </li>
                <li className="listItem">
                  Comedians in Cars Getting Coffee
                  <ul className="skills__note">
                    <li>Lead Front End</li>
                  </ul>
                  <span className="skills__line"></span>
                </li>
                <li className="listItem">
                  The Venetian Las Vegas
                  <ul className="skills__note">
                    <li>Technology Lead</li>
                  </ul>
                  <span className="skills__line"></span>
                </li>
                <li className="listItem">
                  JetBlue
                  <ul className="skills__note">
                    <li>Technology Lead</li>
                  </ul>
                  <span className="skills__line"></span>
                </li>
                <li className="listItem">
                  VitaminWater
                  <ul className="skills__note">
                    <li>Lead Front End</li>
                  </ul>
                  <span className="skills__line"></span>
                </li>
                <li className="listItem">
                  Powerade
                  <ul className="skills__note">
                    <li>Lead Front End</li>
                  </ul>
                  <span className="skills__line"></span>
                </li>
                <li className="listItem">
                  White Castle
                  <ul className="skills__note">
                    <li>Technology Consultant</li>
                  </ul>
                  <span className="skills__line"></span>
                </li>
                <li className="listItem">
                  Vibram USA
                  <ul className="skills__note">
                    <li>Lead Front End</li>
                  </ul>
                  <span className="skills__line"></span>
                </li>
                <li className="listItem">
                  Marvel
                  <ul className="skills__note">
                    <li>Lead Front End</li>
                  </ul>
                  <span className="skills__line"></span>
                </li>
                <li className="listItem">
                  Capcom
                  <ul className="skills__note">
                    <li>Lead Front End</li>
                  </ul>
                  <span className="skills__line"></span>
                </li>
                <li className="listItem">
                  Nintendo
                  <ul className="skills__note">
                    <li>Lead Front End</li>
                  </ul>
                  <span className="skills__line"></span>
                </li>
                <li className="listItem">
                  Bandai/Namco
                  <ul className="skills__note">
                    <li>Lead Front End</li>
                  </ul>
                  <span className="skills__line"></span>
                </li>
                <li className="listItem">
                  One&Only Resorts
                  <ul className="skills__note">
                    <li>Senior Front End</li>
                  </ul>
                  <span className="skills__line"></span>
                </li>
                <li className="listItem">
                  William Grant <small>(various brands)</small>
                  <ul className="skills__note">
                    <li>Lead Front End</li>
                  </ul>
                  <span className="skills__line"></span>
                </li>
                <li className="listItem">
                  Edrington
                  <ul className="skills__note">
                    <li>Lead Front End</li>
                  </ul>
                  <span className="skills__line"></span>
                </li>
                <li className="listItem">
                  Stoli Vodka
                  <ul className="skills__note">
                    <li>Technical Lead</li>
                  </ul>
                  <span className="skills__line"></span>
                </li>
                <li className="listItem">
                  North American Breweries
                  <ul className="skills__note">
                    <li>Technical Lead</li>
                  </ul>
                  <span className="skills__line"></span>
                </li>
                <li className="listItem">
                  Sweet'N Low
                  <ul className="skills__note">
                    <li>Senior Front End</li>
                  </ul>
                  <span className="skills__line"></span>
                </li>
                <li className="listItem">
                  Pirates Booty
                  <ul className="skills__note">
                    <li>Senior Front End</li>
                  </ul>
                  <span className="skills__line"></span>
                </li>
                <li className="listItem">
                  JPMorgan Chase & Co.
                  <ul className="skills__note">
                    <li>Front End</li>
                  </ul>
                  <span className="skills__line"></span>
                </li>
                <li className="listItem">
                  New World Pasta
                  <ul className="skills__note">
                    <li>Front End</li>
                  </ul>
                  <span className="skills__line"></span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <footer className="section-block">
          <div className="row">
            <div className="columns small-12 medium-expand">
              <h2>_<strong>five</strong></h2>
            </div>
            <nav className="columns small-12 medium-expand">
              <ul className="vertical-list">
                <li><a href="mail&#116;o&#58;dro&#37;&#54;1c&#104;&#37;358%37%&#52;0gmail&#46;com" className="block__lead">Chat.</a></li>
                <li><a href="https://www.linkedin.com/in/david-roach-v-13ab4a10/" target="blank" rel="noopener noreferrer" className="block__lead">Connect.</a></li>
                <li><a href="https://www.instagram.com/droach587/" target="blank" rel="noopener noreferrer" className="block__lead">Follow.</a></li>
                <li><a href="mail&#116;o&#58;dro&#37;&#54;1c&#104;&#37;358%37%&#52;0gmail&#46;com" className="block__lead">Hire.</a> (freelance only)</li>
                <li><a href="#top" className="block__lead">Top?</a></li>
              </ul>
            </nav>
          </div>
        </footer>
      </div>
    </Layout>
  )
}

export default IndexPage
