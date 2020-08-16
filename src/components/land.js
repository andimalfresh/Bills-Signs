import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import {Modal,Carousel} from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'


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
            <img id="logoImgModal" src={require('./img/billsLogo.png')} alt='logo' />         
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant='danger'>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Land = () => {


  

  const [modalShow, setModalShow] = React.useState(false);



    return (
      <div className="landingContainer">   
                <Nav fill variant="tabs" defaultActiveKey="/">
                  <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item variant="danger">
                    <Nav.Link href="/services" eventKey="link-1">Services</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href='/contact' eventKey="link-2">Contact</Nav.Link>
                  </Nav.Item>
                </Nav>
            <Jumbotron>
            <img className="logoImg" src={require('./img/billsLogo.png')} alt='logo' />
                <h3>Family Owned and Operated since 1969</h3>

                <div className='d-flex justify-content-center'>
                <Carousel className='p-2 carouselPadding'>
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

                    <span className='redText'>
                        <b>Three important things to look for in your sign partner:</b>
                    </span>
                    
                    <div className='emphText'>Quality:</div>
                    <p> 
                        Cheap signs can ruin your company's image.
                        Our signs will create and maintain a positive image.
                    </p>
                    <div className='emphText'>Experience:</div>
                    <p> 
                        Make an informed decision when buying your sign;
                        40 Years of experience means we know how to help.
                    </p>
                    <div className='emphText'>Dependability:</div>
                    <p> 
                        Our signs are backed with industry leading warranties.
                        Get a great sign and peace of mind!
                        How much do you spend per month on advertisement with meager results?
                    </p>

                    <ul className='blurb'><span className='emphText'>Get the most for your budget. Call us about:</span> 
                        <li>Daily Traffic</li>
                        <li>Best Type of Sign</li>
                        <li>Effective Sign Design</li>
                        <li>All Tailored for Your Specific Location</li>
                    </ul>
                    
                      
                    
                        <a href="tel:850-576-6847"><Button variant="danger" className='callButton'>Call Us Today</Button></a>
                       
                </Jumbotron>
                <img id="logoImgModal" src={require('./img/billsLogo.png')} alt='logo' />            
                <ul className='addressList'>
                    <li><a href="https://www.google.com/maps/place/Bill's+Signs+%26+Services+Inc/@30.43918,-84.372066,15z/data=!4m5!3m4!1s0x0:0xbee05e2b1418f560!8m2!3d30.43918!4d-84.372066">5765 Mandy Lane Tallahassee, Florida</a></li>
                    <li>850-576-6847 &#183; info@billssigns.com</li>
                    <li className='lisenceModal' onClick={() => setModalShow(true)}>License Info</li>
                    <ModalForLic  show={modalShow}onHide={() => setModalShow(false)}/>
                </ul>
        </div>
        
    )
} 
export default Land