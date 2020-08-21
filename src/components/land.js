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
                    <Nav.Link href="/" className="activeTab">Home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item variant="danger">
                    <Nav.Link href="/services" eventKey="link-1">Services</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href='/contact' eventKey="link-2">Contact</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                  <Nav.Link href='/blog' eventKey="link-3">Blog</Nav.Link>
                </Nav.Item>
                </Nav>
            <Jumbotron>
            <div className="contentDiv">
            <img className="logoImg" src={require('./img/billsLogo.png')} alt='logo' />
            <h1>Family Owned and Operated</h1>
                <span className="redText">Since 1969</span>
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
                      <span className='redText'>Why should you use Bill's Signs as sign partner?</span>
                      <span className="redText"> We base our service on three core values.</span>
                    <Accordion defaultActiveKey="0">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1"  className="emphText">
                                    Quality:
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                <Card.Body className="cardText">
                                    Cheap signs can ruin your company's image.
                                    Our signs will create and maintain a standard of professionalism.
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="2"  className="emphText">
                                    Experience:
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2">
                                <Card.Body className="cardText">
                                    Make an informed decision when buying your sign;
                                    40 Years of experience means we know how to help.
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="3"  className="emphText">
                                  Dependability:
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="3">
                                <Card.Body className="cardText">
                                  Our signs are built to last for years helping you get the most 
                                  ROI for your investment.
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                    </Accordion>
                    </Card>
                    </div></div>
                    </Jumbotron>
                    <Card className='d-flex justify-content-center bg-secondary text-white budgetCard'>
                      <div className="blurbCard">Get the most for your budget. Contact us today and speak to one of our industry leading experts. We specialize in creating the most effective product for each client.
                      <ul className="cardList">
                          <li>Daily Traffic</li>
                          <li>Best Type of Sign</li>
                          <li>Effective Sign Design</li>
                          <li>Tailoring for Your Specific Location</li>
                      </ul>
                      <a href="tel:850-576-6847" className="centerInDiv"><Button variant="danger" className='callButton'>Call Us Today</Button></a>
                      </div>
                    </Card>
                    
        </div>
        
    )
} 
export default Land