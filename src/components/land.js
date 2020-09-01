import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import {Carousel,Card,Accordion} from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'

const Land = () => {

    return (
      <div>   
                <Nav fill variant="pills" defaultActiveKey="/">
                  <Nav.Item>
                    <Nav.Link href="/" className="activeTab">HOME</Nav.Link>
                  </Nav.Item>
                  <Nav.Item variant="danger">
                    <Nav.Link href="/services" eventKey="link-1">SERVICES</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href='/contact' eventKey="link-2">CONTACT</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                  <Nav.Link href='/blog' eventKey="link-3">BLOG</Nav.Link>
                </Nav.Item>
                </Nav>
            <Jumbotron>
            <div className="contentDiv">
            <img className="logoImg" src={require('./img/billsLogo.png')} alt='logo' />
            <h3>FAMILY OWNED AND OPERATED</h3>
                <span className="redText">SINCE 1969</span>
                <div className='d-flex justify-content-center contentDiv'>
                <Carousel>
                  <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={require('./img/gallery/img1.jpg')}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={require('./img/gallery/img2.jpg')}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={require('./img/gallery/img3.jpg')}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./img/gallery/img4.jpg')}
                      alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={require('./img/gallery/img5.jpg')}
                    alt="Second slide"
                  />
                </Carousel.Item>
              </Carousel>
              </div> 
                
              <div className="pageContent">
                <Card className="blurbCard">
                      <span className="emphText"> WE BASE OUR SERVICE ON THREE CORE VALUES.</span>
                      <span className="empthText">Click the buttons below to see why should you use Bill's Signs as your next sign partner.</span>

                    <Accordion defaultActiveKey="0" className="toggleButton">
                            <div className="contentDiv">
                            <style type="text/css">
                            {`
                            .btn-flat {
                              background-color: purple;
                              color: white;
                            }
                            `}
                            </style>
                                <Accordion.Toggle variant='flat' as={Card.Header} eventKey="1"  className="emphText toggleButton">
                                    QUALITY:
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                <div className="cardText">
                                    Cheap signs can ruin your company's image.
                                    Our signs will create and maintain a standard of professionalism.
                                </div>
                                </Accordion.Collapse>
                            </div>
                            <div className="contentDiv">
                                <Accordion.Toggle as={Card.Header} eventKey="2"  className="emphText">
                                    EXPERIENCE:
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2">
                                <div className="cardText">
                                    Make an informed decision when buying your sign;
                                    40 Years of experience means we know how to help.
                                </div>
                                </Accordion.Collapse>
                            </div>
                            <div className="contentDiv">
                                <Accordion.Toggle as={Card.Header} variant="danger" eventKey="3"  className="emphText">
                                  DEPENDABILITY:
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="3">
                                <div className="cardText">
                                  Our signs are built to last for years helping you get the most 
                                  ROI for your investment.
                                </div>
                                </Accordion.Collapse>
                            </div>
                    </Accordion>
                  </Card>
                  <Card className='d-flex justify-content-center bg-secondary text-white budgetCard'>
                      <div className="blurbCard">We specialize in creating the most effective product for each client. Contact us today and speak to one of our industry leading experts for information on:
                      <ul className="cardList">
                          <li>Daily Traffic Impressions</li>
                          <li>Best Type of Sign</li>
                          <li>Effective Sign Design</li>
                          <li>Tailoring for Your Specific Location</li>
                      </ul>
                      </div>
                    </Card>
                  </div>
                  <a href="tel:850-576-6847" className="centerInDiv contentDiv"><Button variant="danger" className='callButton'>Call Us Today</Button></a>
                  </div>
                  </Jumbotron>


                    
        </div>
        
    )
} 
export default Land