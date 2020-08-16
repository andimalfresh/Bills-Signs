import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { Jumbotron,Button,Modal,Form } from 'react-bootstrap'
import { Helmet } from 'react-helmet'


let dothis = () => {
  console.log("DeezNuts")
}

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
            <Jumbotron>
            <div className="contentDiv">
            <img className="logoImg" src={require('./img/billsLogo.png')} alt='logo' />
             <h1>Contact Us</h1>
             <div className="blurb">We would love to hear from you! Click on any of the names in <b>bold black</b> lettering below to send us an email.</div>
                <ul><span className="redText">Sales:</span>
                    <li><a variant='blk' href="mailto:bruce@billssigns.com">Bruce Screws</a></li>
                    <li><a href="mailto:wayne@billssigns.com">Wayne Funderburke</a></li>
                    <li><a href="mailto:info@billssigns.com">General Inquiries</a></li>
                </ul>
                <ul><span className="redText">Art Department:</span>
                    <li><a href="mailto:art@billssigns.com">General Inquiries</a></li>
                </ul>    
                <ul><span className="redText">Maintenance:</span>
                    <li><a href="mailto:info@billssigns.com">Maintenance</a></li>
                </ul>
            </div>

              {/* <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button onClick={dothis()} variant="danger" type="submit">
                  Submit
                </Button>
              </Form> */}
                          <a href="tel:850-576-6847"><Button variant="danger">Call Us Today</Button></a>
            </Jumbotron>
            <img id="logoImgModal" src={require('./img/billsLogo.png')} alt='logo' />    
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