import React from 'react';

import logo from './assets/theme/images/logo.png';
import './assets/theme/plugins/bootstrap/css/bootstrap.css';
import './assets/theme/plugins/fontawesome/css/all.css';
import './assets/theme/plugins/animate-css/animate.css';
import './assets/theme/plugins/icofont/icofont.css';
import './assets/theme/css/style.css';


import { BrowserRouter as Router, Route, Link ,NavLink} from 'react-router-dom';


class Dotsquares extends React.Component {
  render() {
    return (
      <Router>
        <MainHeader/>

         <Route exact path="/" component={MainBanner}/>
         <Route exact strict path="/about" component={AboutArea}/>
         <Route exact strict path="/service" component={ServiceArea}/>
         <Route exact strict path="/pricing" component={PriceArea}/>
         <Route exact strict path="/blog" component={BlogArea}/>
         <Route exact strict path="/contact" component={ContactUs}/>

        <FooterArea/>
      </Router>

    );
  }
}


class MainHeader extends React.Component {
  render() {
    return (

       <nav className="navbar navbar-expand-lg fixed-top trans-navigation">
        <div className="container">
            <a className="navbar-brand" href="/">
                Logo Image
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">
                    <i className="fa fa-bars"></i>
                </span>
              </button>

            <div className="collapse navbar-collapse justify-content-end" id="mainNav">
                <ul className="navbar-nav ">
                   <li className="nav-item dropdown">
      <NavLink exact to="/" className="nav-link dropdown-toggle">Home</NavLink>
                        <div className="dropdown-menu" aria-labelledby="navbarWelcome">
                            <a className="dropdown-item " href="index.html">
                                Home-1
                            </a>
                            <a className="dropdown-item " href="index-2.html">
                                Home-2
                            </a>
                            <a className="dropdown-item " href="index-3.html" target="blank">
                                Onepage
                            </a>
                        </div>
                    </li>
                    <li className="nav-item">


      <NavLink exact strict to="/about" className="nav-link smoth-scroll">About</NavLink>
                    </li>
                    <li className="nav-item">

      <NavLink exact strict to="/service" className="nav-link smoth-scroll">Service</NavLink>
                    </li>
                    <li className="nav-item">

      <NavLink exact strict to="/pricing" className="nav-link smoth-scroll">Pricing</NavLink>
                    </li>
                    <li className="nav-item">

      <NavLink exact strict to="/blog" className="nav-link smoth-scroll">Blog</NavLink>
                    </li>
                    <li className="nav-item">
      <NavLink exact strict to="/contact" className="nav-link smoth-scroll">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </div>
      </nav>

    );
  }
}

class MainBanner extends React.Component {
  render() {
    return (

      <div className="banner-area banner-3">
          <div className="overlay dark-overlay"></div>
          <div className="d-table">
              <div className="d-table-cell">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-8 m-auto text-center col-sm-12 col-md-12">
                              <div className="banner-content content-padding">
                                  <h5 className="subtitle">A creative agency</h5>
                                  <h1 className="banner-title">We craft seo and digital markting services</h1>
                                  <p>We provide marketing services to startups and small businesses to looking for a partner for their digital media, design-area.We are a a startup company to be commited to work and time management.</p>

                                  <a href="#" className="btn btn-white btn-circled">lets start</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

    );
  }
}

class AboutArea extends React.Component {
  render() {
    return (

      <section id="intro" className="section-padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-sm-12 col-md-12">
                    <div className="section-heading">
                        <h3>ABOUT US</h3>
                        <p className="lead">We are creative digital marketing agency with expertise</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-5  d-none d-lg-block col-sm-12">
                    <div className="intro-img">
                        Image
                    </div>
                </div>
                <div className="col-lg-7 col-md-12 col-sm-12 ">
                    <div className="row">
                        <div className="col-lg-6 col-sm-6 col-md-6">
                            <div className="intro-box">
                                <span>01.</span>
                                <h4>Management</h4>
                                <p>we founded September with the goal of creating meaningful digital experiences that connect with people.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-md-6">
                            <div className="intro-box">
                                <span>02.</span>
                                <h4>Strategy</h4>
                                <p>We’re full service which means we’ve got you covered on design & content right through to digital. </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-md-6">
                            <div className="intro-box">
                                <span>03.</span>
                                <h4>Experience</h4>
                                <p>You’ll form a lasting relationship with us, collaboration is central to we do.Digital experiences connect people.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-md-6">
                            <div className="intro-box">
                                <span>04.</span>
                                <h4>Build</h4>
                                <p>Technology and design are the core of success for real estate related businesses. Leverage our years.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                           <div className="intro-cta">
                               <p className="lead ">Still have any question on mind ? <a href="#contact" className="smoth-scroll">Contact us</a></p>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

    );
  }
}

class ServiceArea extends React.Component {
  render() {
    return (
      <section id="about" className="bg-light">
          <div className="about-bg-img d-none d-lg-block d-md-block"></div>
          <div className="container">
              <div className="row">
                  <div className="col-lg-7 col-sm-12 col-md-8">
                      <div className="about-content">
                          <h3>SERVICE</h3>
                          <div className="hh">We are making beautiful <br/>design layout for your business </div>
                          <p>We craft beautiful website layout from scratch.You need not to worry about site design and other technial issue.We provide these attractive service as a bonus.Let's have atalk together for your next project.</p>

                          <ul className="about-list">
                              <li><i className="icofont icofont-check-circled"></i> Responsive site</li>

                              <li>
                                  <i className="icofont icofont-check-circled"> </i> Latest bootstrap 4
                              </li>

                              <li>
                                  <i className="icofont icofont-check-circled"> </i> Modern and clean design
                              </li>
                              <li>
                                  <i className="icofont icofont-check-circled"> </i> Working contact form
                              </li>
                              <li>
                                  <i className="icofont icofont-check-circled"> </i> Premium services and support
                              </li>
                              <li>
                                  <i className="icofont icofont-check-circled"></i> Cross browser compatiabilty
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    );
  }
}

class PriceArea extends React.Component {
  render() {
    return(
      <section id="pricing" className="section-padding bg-main">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12 col-sm-12 m-auto">
                          <div className="section-heading">
                              <h3>PRICING</h3>
                              <p>We have different type of pricing table to choose with your need. Check which one is most suitble for you and your business purpose. </p>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-lg-4 col-sm-6">
                          <div className="pricing-block ">
                              <div className="price-header">
                                  <i className="icofont-diamond"></i>

                                  <h4 className="price"><small>$</small>26</h4>
                                  <h5>Monthly pack</h5>
                              </div>
                              <div className="line"></div>
                              <ul>
                                  <li>5 GB Bandwidth</li>
                                  <li>Highest Speed</li>
                                  <li>1 GB Storage</li>
                                  <li>Unlimited Website</li>
                                  <li>Unlimited Users</li>
                                  <li>Data Security and Backups</li>
                                  <li>24x7 Great Support</li>
                                  <li>Monthly Reports and Analytics</li>
                              </ul>

                              <a href="#" className="btn btn-hero btn-circled">select plan</a>
                          </div>
                      </div>
                      <div className="col-lg-4 col-sm-6">
                          <div className="pricing-block ">
                              <div className="price-header">
                                  <i className="icofont-rocket-alt-1"></i>

                                  <h4 className="price"><small>$</small>46</h4>
                                  <h5>Monthly pack</h5>
                              </div>
                              <div className="line"></div>
                              <ul>
                                  <li>5 GB Bandwidth</li>
                                  <li>Highest Speed</li>
                                  <li>1 GB Storage</li>
                                  <li>Unlimited Website</li>
                                  <li>Unlimited Users</li>
                                  <li>Data Security and Backups</li>
                                  <li>24x7 Great Support</li>
                                  <li>Monthly Reports and Analytics</li>
                              </ul>

                              <a href="#" className="btn btn-hero btn-circled">select plan</a>
                          </div>
                      </div>
                      <div className="col-lg-4 col-sm-6">
                          <div className="pricing-block">
                              <div className="price-header">
                                  <i className="icofont-light-bulb"></i>

                                  <h4 className="price"><small>$</small>76</h4>
                                  <h5>Monthly pack</h5>
                              </div>
                              <div className="line"></div>
                              <ul>
                                  <li>5 GB Bandwidth</li>
                                  <li>Highest Speed</li>
                                  <li>1 GB Storage</li>
                                  <li>Unlimited Website</li>
                                  <li>Unlimited Users</li>
                                  <li>Data Security and Backups</li>
                                  <li>24x7 Great Support</li>
                                  <li>Monthly Reports and Analytics</li>
                              </ul>

                              <a href="#" className="btn btn-hero btn-circled">select plan</a>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
    );
  }
}

class BlogArea extends React.Component {
  render() {
    return(
      <section id="blog" className="section-padding bg-main">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12 col-sm-12 m-auto">
                      <div className="section-heading">
                          <h4 className="section-title">Latest Blog news</h4>
                          <div className="line"></div>
                          <p>Our blog journey may come handy to build a community to make more effective success for business. Latest and trend tricks will help a lot </p>
                      </div>
                  </div>
              </div>

              <div className="row">
                  <div className="col-lg-4 col-sm-6 col-md-4">
                      <div className="blog-block">
                          Image
                          <div className="blog-text">
                              <h6 className="author-name"><span>Tips and tricks</span>john Doe</h6>
                              <a href="blog-single.html" className="h5 my-2 d-inline-block">
                                 Best tips to grow your content quality and standard.
                              </a>
                              <p>If you want to grow your content quality and standard you should foolow these tips properly voluptatibus.</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 col-md-4">
                      <div className="blog-block ">
                          Image
                          <div className="blog-text">
                              <h6 className="author-name"><span>Branding</span>john Doe</h6>
                              <a href="blog-single.html" className="h5 my-2 d-inline-block">
                                  Brand your site at top in few minuts.
                              </a>
                              <p>Brand your site at top, boost your audioance corporis facilis animi voluptas alias ex saepe quo voluptatibus.</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 col-md-4">
                      <div className="blog-block ">
                          Image
                          <div className="blog-text">
                              <h6 className="author-name"><span>Marketing</span>john Doe</h6>
                              <a href="blog-single.html" className="h5 my-2 d-inline-block">
                                  How to become a best sale marketer in a year!
                              </a>
                              <p>Becomeing a best sale marketer is not easy but not impossible too.Need to follow up some proper guidance and strategy .</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    );
  }
}

class ContactUs extends React.Component {
  render() {
    return(
      <section className="section-padding">
          <div className="container">
              <div className="row">
                  <div className="col-lg-6 col-sm-12 col-md-12">
                      <div className="mb-5">
                          <h2 className="mb-2">Get in touch</h2>
                          <p>Have a project on mind,want to make an consultant. Don't hesistate to contact us.Let's have atalk together.Colaborat eyour project to done quickly</p>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-lg-7 col-sm-12">
                      FORM
                  </div>

                  <div className="col-lg-5 pl-4 mt-4 mt-lg-0">
                      <h4>Office Address</h4>
                      <p className="mb-3">J4, Jaipur, 302010</p>
                      <h4>Contact Info</h4>
                      <p className="mb-3">+91 998 877 6655</p>
                      <h4>Contact Mail</h4>
                      <p className="mb-3">Dotsquares@email.com</p>
                      <h4>Website</h4>
                      <p>www.dotsquares.com</p>
                  </div>
              </div>
          </div>
      </section>
    );
  }
}
class FooterArea extends React.Component {
  render() {
    return(
      <section id="footer" className="section-padding">
          <div className="container">
              <div className="row">
                  <div className="col-lg-5 col-sm-8 col-md-8">
                      <div className="footer-widget footer-link">
                          <h4>We concern about you<br/> to grow business rapidly.</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam hic non sunt recusandae atque unde saepe nihil earum voluptatibus aliquid optio suscipit nobis quia excepturi vel quod, iure quae.</p>
                      </div>
                  </div>
                  <div className="col-lg-2 col-sm-4 col-md-4">
                      <div className="footer-widget footer-link">
                          <h4>About</h4>
                          <ul>
                              <li><a href="#">About</a></li>
                              <li><a href="#">Service</a></li>
                              <li><a href="#">Pricing</a></li>
                              <li><a href="#">Team</a></li>
                              <li><a href="#">Testimonials</a></li>
                              <li><a href="#">Blog</a></li>
                          </ul>
                      </div>
                  </div>

                  <div className="col-lg-2 col-sm-6 col-md-6">
                      <div className="footer-widget footer-link">
                          <h4>Quick Links</h4>
                          <ul>
                              <li><a href="#">How it Works</a></li>
                              <li><a href="#">Support</a></li>
                              <li><a href="#">Privacy Policy</a></li>
                              <li><a href="#">Report Bug</a></li>
                              <li><a href="#">License</a></li>
                              <li><a href="#">Terms & Condition</a></li>
                          </ul>
                      </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-md-6">
                      <div className="footer-widget footer-text">
                          <h4>Our location</h4>
                          <p className="mail"><span>Mail:</span> Dotsquares@gmail.com</p>
                          <p><span>Phone :</span>+91 998-877-6655</p>
                          <p><span>Location:</span> J4, Jaipur, 302010,</p>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-lg-12 text-center">
                      <div className="footer-copy">
                          © 2020 Dotsquares inc. All Rights Reserved.
                      </div>
                  </div>
              </div>
          </div>
      </section>
    );
  }
}


export default Dotsquares;
