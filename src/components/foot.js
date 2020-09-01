import React from 'react'
import { Navbar,Modal,Button } from 'react-bootstrap'

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
            <img id="logoImgLic" src={require('./img/billsLogo.png')} alt='Bills Signs and Services Logo' />    
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="danger">Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Foot = () => {

  const [modalShow, setModalShow] = React.useState(false);
    return (
        <div>               
            <ul className='addressList'>
                    <li>Bills Signs & Service's Inc</li>
                    <li>5765 Mandy Lane Tallahassee, Florida</li>
                    <li><a href="tel:850-576-6847">850-576-6847</a> &#183;<a href="mailto:info@billssigns.com"> info@billssigns.com</a></li>
                    <li className='lisenceModal' onClick={() => setModalShow(true)}>License Info</li>
                    <ModalForLic  show={modalShow}onHide={() => setModalShow(false)}/>
            </ul>
          <Navbar bg="dark" variant="dark" fixed="bottom" className="justify-content-center" >
          <Navbar.Brand href="mailto:info@billssigns.com">
            <img
              alt="Connect with us via Email"
              src={require("./img/email.png")}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Brand target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/BillsSignsAndServiceInc">
            <img
              alt="Connect with us on Facebook"
              src={require("./img/facebook.svg")}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </Navbar>
      </div>
    )
} 
export default Foot