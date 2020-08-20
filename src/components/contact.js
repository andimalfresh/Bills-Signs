import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { Jumbotron,Button,Card} from 'react-bootstrap'
import { Helmet } from 'react-helmet'

const Contact = () => {
    
    return (
        <div>
            <Helmet>
                  <title>Bill's Signs - Contact </title>
                  <link rel="canonical" href="https://billssigns.com/contact" />
                  <meta name="Bills Signs" content="Reach out and Contact us today about building your next sign for your business"></meta>
            </Helmet>
            <Nav fill variant="pills" defaultActiveKey="/contact">
                <Nav.Item>
                  <Nav.Link href="/" eventKey="link-2">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/services" eventKey="link-1">Services</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href='/contact' className="activeTab">Contact</Nav.Link>
                </Nav.Item>
            </Nav>

            <Jumbotron>
            <div className="contentDiv">
            <img className="logoImg" src={require('./img/billsLogo.png')} alt='logo' />
              <div className="contentDiv2"><h1>Contact Us</h1>
                <span className="redText">We would love to hear from you!</span>
              </div>
                <Card className="blurbCard">
                <ul><a href="mailto:info@billssigns.com"><span className="redText2">Sales:</span></a>
                    <li><a variant='blk' href="mailto:bruce@billssigns.com">✉ Bruce Screws</a></li>
                    <li><a href="mailto:wayne@billssigns.com">✉ Wayne Funderburke</a></li>
                    <li><a href="mailto:info@billssigns.com">✉ General Inquiries</a></li>
                </ul>
                <ul><a href="mailto:art@billssigns.com"><span className="redText2">Art Department:</span></a>
                    <li><a href="mailto:art@billssigns.com">✉ General Inquiries</a></li>
                </ul>    
                <ul><a href="mailto:info@billssigns.com"><span className="redText2">Maintenance:</span></a>
                    <li><a href="mailto:info@billssigns.com">✉ Maintenance</a></li>
                </ul>
                </Card>
            </div>
            <div className="contentDiv">
                          <a href="tel:850-576-6847"><Button className="cardList2"variant="danger">Call Us Today</Button></a>
            </div>
            </Jumbotron>
        </div>
    )
} 
export default Contact