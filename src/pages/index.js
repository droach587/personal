import React, { useEffect, useCallback } from 'react';

import Div100vh from 'react-div-100vh'
import Particles from 'react-particles-js'
import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BrandBoldSvg from "../components/brandBoldSvg"

import { Controller, Scene } from 'react-scrollmagic';

function IndexPage() {

  const waypointChecker =()=>{
    let listItems = document.getElementsByClassName('listItem');
    let intersectionRoot = document.querySelector('.site-wrapper');
    let observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if(entry.intersectionRatio ===1){
          entry.target.classList.add('isActive');
        }
        if(entry.intersectionRatio === 0){
          entry.target.classList.remove('isActive');
        }
      });
    }, {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: '-43% 0px -43% 0px',
        root: intersectionRoot
    });

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

  const toTop =(e)=>{
    let wrapper = document.querySelector('.site-wrapper');
    wrapper.scrollTop = 0;
    e.preventDefault();
  }

  const scrollTopCheck = useCallback(() => {
    let elem = document.querySelector('.site-wrapper');
    let header = document.querySelector('.mainHeader');
    let whiteHero = document.querySelector('#hp-white');
    let particles = document.querySelector('.particlesFixed');
    header.classList.add('inverted');
    whiteHero.classList.add('isVisible');
    particles.classList.add('inverted');
    elem.addEventListener('scroll', function(e) {
      let d = document.documentElement;
      let offset = d.scrollTop + elem.innerHeight;
      let height = d.offsetHeight;

      if(elem.scrollTop <= 300){
        removeListItems();
        header.classList.add('inverted');
        whiteHero.classList.add('isVisible');
        particles.classList.add('inverted');
      }else{
        header.classList.remove('inverted');
        whiteHero.classList.remove('isVisible');
        particles.classList.remove('inverted');
      }

      if (offset >= height) {
        removeListItems();
      }
    });
  }, []);

  useEffect(() => {
    waypointChecker();
    scrollTopCheck();
    setTimeout(function(){
      let intro = document.querySelector('.intro');
      intro.classList.add('inActive');
    }, 4500);
  }, [scrollTopCheck]);

  return (
    <Layout>
      <SEO title="Home" />
      <div className="intro">
        <BrandBoldSvg animated="true"/>
      </div>
      <div className="site-wrapper">
        <Particles className="particlesFixed"/>
        <Header id="top"/>
        <Div100vh className="header-100vh">
              <div id="hp-white" className="innerWhite">
                <section className="row align-justify">
                  <div className="columns small-12 medium-expand left-left medium-text-center">
                    <div className="hero__name">
                      <h2>I Build Awesome Products.</h2>
                    </div>
                    <div className="hero__scroll">
                      <h4>Scroll to learn more. <br/>&darr;</h4>
                    </div>
                  </div>
                </section>
              </div>
        </Div100vh>
        <Div100vh className="header-100vh">
          <div className="row">
            <div className="columns">
            <Controller>
              <Scene triggerElement="#name-intro" triggerHook="0.9" duration="150%" offset="50%" classToggle="isVisible">
                <div id="name-intro" className="row hero__name animateScene">
                  <div className="columns large-offset-3">
                    <h2>David <br/>Roach <em>V</em></h2>
                  </div>
                </div>
              </Scene>
            </Controller>
            <Controller>
              <Scene triggerElement="#highlight-intro" triggerHook="0.9" duration="150%" offset="50%" classToggle="isVisible">
                <div id="highlight-intro" className="row animateScene">
                  <div className="columns small-offset-2 large-offset-6">
                    <ul className="hero__highlights">
                      <li>Teams Leader</li>
                      <li>Technology Director</li>
                      <li>Front End Developer</li>
                      <li>Dog Dad</li>
                      <li>Helpless Islanders Fan</li>
                    </ul>
                  </div>
                </div>
              </Scene>
            </Controller>
            </div>
          </div>
        </Div100vh>
        <section className="section-block">
          <Controller>
            <Scene triggerElement="#hp-intro" triggerHook="0.9" duration="150%" offset="50%" classToggle="isVisible">
              <div className="row animateScene" id="hp-intro">
                <div className="columns small-12 medium-10">
                  <h1 className="lead__bio">David Roach is a <em>technology director</em>, and lead <em>front-end developer</em> in the <em>greater New York City area</em>. David is the 5th of his name (hence, "five"), which makes any family affair (where there are multiple Davids) pretty complex.</h1>
                </div>
              </div>
            </Scene>
          </Controller>
          <Controller>
            <Scene triggerElement="#hp-lead" triggerHook="0.9" duration="150%" offset="50%" classToggle="isVisible">
              <div className="row animateScene" id="hp-lead">
                <div className="columns small-10 small-offset-1 medium-7 medium-offset-3">
                  <p className="lead__mini-bio">More importantly, David has 11 years of proven development experience leading development teams as a technical director and front-end developer.</p>
                  <p className="lead__mini-bio">David has worked with small to large creative and development teams building best-in-class responsive, accessible web applications, microsites, and portals.</p>
                  <p className="lead__mini-bio">David is craft-focused, an advocate for technology, and a pragmatic problem solver. He believes in being technology-agnostic, yet informed and well-rounded; better equipped to solve for a broad range of complex business problems.</p>
                  <p className="lead__mini-bio">As a team leader, David has continuously demonstrated the ability to foster great people, not just good developers.</p>
                  <p className="lead__mini-bio">Articulate and with a real ability to translate complex technical problems into cogent and flexible solutions, David is a strong client-partner and discipline lead.</p>
                </div>
              </div>
            </Scene>
          </Controller>
        </section>


        <section className="section-block">
          <Controller>
            <Scene triggerElement="#hp-top" triggerHook="0.9" duration="150%" offset="50%" classToggle="isVisible">
              <div className="row animateScene high-stack" id="hp-top">
                <div className="columns small-12 medium-12">
                  <h4>Fast Facts</h4>
                </div>
                <div className="columns small-12 medium-expand">
                  <h3 className="block__lead">11 Years</h3>
                  <h4>of experience(s)</h4>
                  <h6>mostly good</h6>
                </div>
                <div className="columns small-12 medium-4">
                  <h3 className="block__lead">One</h3>
                  <h4>91-pound lab named <a className="inline-link" href="https://www.instagram.com/barneythechocolate/" target="_blank" rel="noopener noreferrer">Barney</a></h4>
                </div>
                <div className="columns small-12 medium-4">
                  <h3 className="block__lead">25+ Brands</h3>
                  <h4>from finance to travel, hospitality, food/beverage, and luxury automotive</h4>
                </div>
                <div className="columns small-12 medium-4">
                  <h3 className="block__lead">108 Years</h3>
                  <h4>the approximate age of <a className="inline-link" href="https://en.wikipedia.org/wiki/1918" target="_blank" rel="noopener noreferrer">our house</a></h4>
                  <h6>which we're slowly modernizing</h6>
                </div>
                <div className="columns small-12 medium-4">
                  <h3 className="block__lead">Fmaj7 add(b5)</h3>
                  <h4>my favorite <a className="inline-link" href="https://www.youtube.com/watch?v=v9n14v_inCA" target="_blank" rel="noopener noreferrer">guitar chord</a></h4>
                </div>
                <div className="columns small-12 medium-4">
                  <h3 className="block__lead">2 Years</h3>
                  <h4>and counting, as husband-in-chief</h4>
                  <h6>she's my boss</h6>
                </div>
              </div>
            </Scene>
          </Controller>
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
                  <span className="skills__note">Pretty darn good</span>
                  <span className="skills__percentage"></span>
                </li>
                <li className="listItem">
                  CSS
                  <span className="skills__note">Like a second-skin</span>
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
                  <span className="skills__note">Friends. Always happy to reconnect.</span>
                  <span className="skills__percentage skills__percentage--75"></span>
                </li>
                <li className="listItem">
                  Redux/MobX
                  <span className="skills__note">To be stateful, or not not to be stateful?</span>
                  <span className="skills__percentage"></span>
                </li>
                <li className="skill--75 listItem">
                  PHP (Laravel/Symfony/Cake)
                  <span className="skills__note">We have a history.</span>
                  <span className="skills__percentage skills__percentage--75"></span>
                </li>
                <li className="listItem">
                  Headless/JAMStack Development
                  <span className="skills__note">Who needs a head anyway?</span>
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
              <ul className="skillsList skillsList--clients">
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
          <div className="row align-bottom">
            <nav className="columns small-12 medium-expand">
              <ul className="vertical-list">
                <li><a href="mail&#116;o&#58;dro&#37;&#54;1c&#104;&#37;358%37%&#52;0gmail&#46;com" className="block__lead">Chat.</a></li>
                <li><a href="https://www.linkedin.com/in/david-roach-v-13ab4a10/" target="blank" rel="noopener noreferrer" className="block__lead">Connect.</a></li>
                <li><a href="https://www.instagram.com/droach587/" target="blank" rel="noopener noreferrer" className="block__lead">Follow.</a></li>
                <li><a href="mail&#116;o&#58;dro&#37;&#54;1c&#104;&#37;358%37%&#52;0gmail&#46;com" className="block__lead">Hire.</a> (freelance only)</li>
                <li><a href="#top" className="block__lead" onClick={toTop}>Top?</a></li>
              </ul>
            </nav>
            <Controller>
              <Scene triggerElement="#bold-brand" triggerHook="0.9" duration="150%" offset="50%" classToggle="isVisible">
                  <div id="bold-brand" className="columns small-12 medium-expand animateScene text-center medium-text-right">
                    <BrandBoldSvg/>
                  </div>
                </Scene>
              </Controller>
          </div>
        </footer>
      </div>
    </Layout>
  )
}

export default IndexPage
