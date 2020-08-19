import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { Jumbotron,Button,Modal,Carousel} from 'react-bootstrap'
import { Helmet } from 'react-helmet'

function ModalForLic (props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          State Licensed and Insured
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalDiv">
        <p>The City of Tallahassee now requires sign companies to have a state license. If they don't, they cannot pull a permit!</p>
        <p>We were the First Sign Company in Tallahassee to obtain a <span className="experpt">State License ES12000087</span>.</p> 
        <p> We qualified on 4/26/2002, which was well before the City of Tallahassee required sign contractors to obtain a state license.
            Don't be duped by other Sign Companies who aren't properly qualified.</p>
            <img id="logoImgLic" src={require('./img/billsLogo.png')} alt='logo' />    
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Contact = () => {
    
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div>
            <Helmet>
                  <title>Bill's Signs - Contact </title>
                  <link rel="canonical" href="https://billssigns.com/contact" />
                  <meta name="Bills Signs" content="Reach out and Contact us today about building your next sign for your business"></meta>
            </Helmet>
            <Nav fill variant="tabs" defaultActiveKey="/contact">
                <Nav.Item>
                  <Nav.Link href="/" eventKey="link-2">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/services" eventKey="link-1">Services</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href='/contact'>Contact</Nav.Link>
                </Nav.Item>
            </Nav>
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
            <Jumbotron>
            <div className="contentDiv">
            <img className="logoImg" src={require('./img/billsLogo.png')} alt='logo' />
             <h1>Contact Us</h1>
             <h5>We would love to hear from you! Click on any of the names or departments below to send us an email.</h5>
                <ul><a href="mailto:info@billssigns.com"><span className="redText">Sales:</span></a>
                    <li><a variant='blk' href="mailto:bruce@billssigns.com">Bruce Screws</a></li>
                    <li><a href="mailto:wayne@billssigns.com">Wayne Funderburke</a></li>
                    <li><a href="mailto:info@billssigns.com">General Inquiries</a></li>
                </ul>
                <ul><a href="mailto:art@billssigns.com"><span className="redText">Art Department:</span></a>
                    <li><a href="mailto:art@billssigns.com">General Inquiries</a></li>
                </ul>    
                <ul><a href="mailto:info@billssigns.com"><span className="redText">Maintenance:</span></a>
                    <li><a href="mailto:info@billssigns.com">Maintenance</a></li>
                </ul>
            </div>
                          <a href="tel:850-576-6847"><Button variant="danger">Call Us Today</Button></a>
            </Jumbotron>
            <div className="contentDiv"><img id="logoImgModal" src={require('./img/billsLogo.png')} alt='logo' /></div>    
            <ul className='addressList'>
                    <li>5765 Mandy Lane Tallahassee, Florida</li>
                    <li>850-576-6847 &#183; info@billssigns.com</li>
                    <li className='lisenceModal' onClick={() => setModalShow(true)}>License Info</li>
                    <ModalForLic  show={modalShow}onHide={() => setModalShow(false)}/>
            </ul>
        </div>
    )
} 
export default Contact