import React from 'react'
import Nav from 'react-bootstrap/Nav'
import {Accordion,Jumbotron,Button,Card,Carousel} from 'react-bootstrap'
import { Helmet } from 'react-helmet'

  

const Services = () => {

    return (

        <div> 
                <Helmet>
                  <meta charSet="utf-8" />
                  <title>Bill's Signs - Services </title>
                  <link rel="canonical" href="https://billssigns.com/services" />
                  <meta name="Bills Signs" content="Here is a list of services provided by Bill's Signs. Contact us today about building a new project for your business."></meta>
                </Helmet>
            <Nav fill variant="pills" defaultActiveKey="/services">
                <Nav.Item>
                    <Nav.Link href="/" eventKey="link-1">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/services" className="activeTab">Services</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='/contact' eventKey="link-2">Contact</Nav.Link>
                </Nav.Item>
            </Nav>
            <Jumbotron>
                <div className="contentDiv">
                <img className="logoImg" src={require('./img/billsLogo.png')} alt='Bills Signs Logo for the Top of the Services page' />
                <h1>Services</h1>
                <span className="redText">We. Do. It. All.</span>
                <ul className='servicesList'>
                            <li>• Consulting • Survey • </li> 
                            <li>• Design • Permitting  •</li>
                            <li>• Manufacture and Construction •</li>
                            <li>• Installation • Service and Maintenance  •</li>
                            <li>• Warranty •</li>
                        </ul>
                        <div className='d-flex justify-content-center'>
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
                   <Card className="contentDiv"> <span className="redText">We are the areas leading full service sign shop, with industry proven excellence from start to finish.</span><span className="redText">We handle all aspects of production and are happy to help you with any questions you may have about the process.</span>
                   </Card>
                </div>
                <div className='exerpt cardList'>Click on any of our Services below to check out what we can make for your business.</div>
                <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        Flag Poles
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <div className='modalDivFlag'>
                        <img src={require('./img/flag/img1.jpg')} alt="This is a Flag Pole Example #1"/>
                        <img src={require('./img/flag/img2.jpg')} alt="This is a Flag Pole Example #2"/>
                      </div>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2" bsClass='redText'>
                        Lighted Signs
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>
                    <div className='modalDiv'>
                          <img src={require('./img/lighted/img1.jpg')} alt="This is a Lighted Sign Example #1" />
                          <img src={require('./img/lighted/img2.jpg')} alt="This is a Lighted Sign Example #2"/>
                    </div>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                        Channel Letters
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                    <Card.Body>
                    <div className='modalDiv'>
                         <img src={require('./img/channel/img1.jpg')} alt="This is a Channel Letter Sign Example #1"/>
                         <img src={require('./img/channel/img2.jpg')} alt="This is a Channel Letter Sign Example #2"/>
                         <img src={require('./img/channel/img3.jpg')} alt="This is a Channel Letter Sign Example #3"/>
                         <img src={require('./img/channel/img4.jpg')} alt="This is a Channel Letter Sign Example #4"/>
                    </div>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="4">
                        Electronic Message Signs
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                    <Card.Body>
                    <div className='modalDiv'>
                      <img src={require('./img/electronic/img1.jpg')} alt="This is a Electronic Message Sign Example #1" />
                      <img src={require('./img/electronic/img2.jpg')} alt="This is a Electronic Message Sign Example #2" />
                      <img src={require('./img/electronic/img3.jpg')} alt="This is a Electronic Message Sign Example #3" />
                    </div>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="5">
                        Pole Signs
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="5">
                    <Card.Body>
                    <div className='modalDiv'>
                        <img src={require('./img/pole/img1.jpg')} alt="This is a Pole Sign, Example #1" />
                        <img src={require('./img/pole/img2.jpg')} alt="This is a Pole Sign, Example #2" />
                        <img src={require('./img/pole/img3.jpg')} alt="This is a Pole Sign, Example #3" />
                    </div>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="6">
                        Wall Signs
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="6">
                    <Card.Body>
                    <div className='modalDivFlag'>
                        <img src={require('./img/wall/img1.jpg')} alt="This is a Wall Sign, Example #1" />
                        <img src={require('./img/wall/img2.jpg')} alt="This is a Wall Sign, Example #2" />
                        <img src={require('./img/wall/img3.jpg')} alt="This is a Wall Sign, Example #3"/>
                   </div>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="7">
                        Monmument Signs
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="7">
                    <Card.Body>
                    <div className='modalDiv'>
                        <img src={require('./img/monument/img1.jpg')} alt="This is a Monument Sign, Example #1" />
                        <img src={require('./img/monument/img2.jpg')} alt="This is a Monument Sign, Example #2" />
                        {/* <img src={require('./img/monument/img3.jpg')} /> */}
                    </div>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="8">
                        Plaques
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="8">
                    <Card.Body>
                    <div className='modalDiv'>
                        <img src={require('./img/plaques/img1.jpg')} alt="This is a Plaque, Example #1" />
                        <img src={require('./img/plaques/img2.jpg')} alt="This is a Plaque, Example #2"/>
                        <img src={require('./img/plaques/img3.jpg')}alt="This is a Plaque, Example #3" />
                    </div>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="10">
                        Way Finding/Drive Thru Signs
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="10">
                    <Card.Body>
                    <div className='modalDiv'>
                      <img src={require('./img/way/img1.jpg')} alt="This is a Way Finding Example #1"/>
                      <img src={require('./img/way/img2.jpg')} alt="This is a Way Finding Example #2"/>
                    </div>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="11">
                        Shopping Center Signs
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="11">
                    <Card.Body>
                    <div className='modalDiv'>
                        <img src={require('./img/tenantshopping/img1.jpg')} alt="This is a Shopping Center Sign, Example #1" />
                        <img src={require('./img/tenantshopping/img2.jpg')} alt="This is a Shopping Center Sign, Example #2" />
                        <img src={require('./img/tenantshopping/img3.jpg')} alt="This is a Shopping Center Sign, Example #3" />
                    </div>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="12">
                        Tenant Signs
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="12">
                    <Card.Body>
                    <div className='modalDiv'>
                          <img src={require('./img/tenantshopping/img1.jpg')} alt="This is a Tenant Sign, Example #1" />
                          <img src={require('./img/tenantshopping/img2.jpg')} alt="This is a Tenant Sign, Example #2" />
                          <img src={require('./img/tenantshopping/img3.jpg')} alt="This is a Tenant Sign, Example #3"/>
                    </div>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="13">
                        Vinyl Lettering
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="13">
                    <Card.Body>
                    <div className='modalDivFlag'>
                        <img src={require('./img/vinyl/img1.jpg')} alt="This is a Vinyl Sign, Example #1" />
                        <img src={require('./img/vinyl/img2.jpg')} alt="This is a Vinyl Sign, Example #2" />
                        <img src={require('./img/vinyl/img3.jpg')} alt="This is a Vinyl Sign, Example #3"/>
                    </div>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
              <div className="cardList2"><a href="tel:850-576-6847"><Button variant="danger">Call Us Today</Button></a></div>
            </Jumbotron>
        </div>
    )
} 
export default Services