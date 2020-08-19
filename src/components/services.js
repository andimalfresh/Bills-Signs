import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
import { Jumbotron,Button,Modal,Card,Carousel} from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { Accordion } from 'react-bootstrap'


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

  function ModalForLighted (props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Lighted Signs
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='modalDiv'>
            <img src={require('./img/lighted/img1.jpg')} alt="This is a Lighted Sign Example #1" />
            <img src={require('./img/lighted/img2.jpg')} alt="This is a Lighted Sign Example #2"/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="danger">Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function ModalForWayFinding (props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Way Finding/ Drive-thru Signs
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='modalDiv'>
            <img src={require('./img/way/img1.jpg')} alt="This is a Way Finding Example #1"/>
            <img src={require('./img/way/img2.jpg')} alt="This is a Way Finding Example #2"/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="danger">Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function ModalForChannelLetter (props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Channel Lettering Signs
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='modalDiv'>
            <img src={require('./img/channel/img1.jpg')} alt="This is a Channel Letter Sign Example #1"/>
            <img src={require('./img/channel/img2.jpg')} alt="This is a Channel Letter Sign Example #2"/>
            <img src={require('./img/channel/img3.jpg')} alt="This is a Channel Letter Sign Example #3"/>
            <img src={require('./img/channel/img4.jpg')} alt="This is a Channel Letter Sign Example #4"/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="danger">Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function ModalForMessage (props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Electronic Message Signs
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='modalDiv'>
            <img src={require('./img/electronic/img1.jpg')} alt="This is a Electronic Message Sign Example #1" />
            <img src={require('./img/electronic/img2.jpg')} alt="This is a Electronic Message Sign Example #2" />
            <img src={require('./img/electronic/img3.jpg')} alt="This is a Electronic Message Sign Example #3" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="danger">Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function ModalForFlag (props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Flag Poles
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='modalDivFlag'>
            <img src={require('./img/flag/img1.jpg')} alt="This is a Flag Pole Example #1"/>
            <img src={require('./img/flag/img2.jpg')} alt="This is a Flag Pole Example #2"/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="danger">Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function ModalForMonument (props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Monument Signs
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='modalDiv'>
            <img src={require('./img/monument/img1.jpg')} alt="This is a Monument Sign, Example #1" />
            <img src={require('./img/monument/img2.jpg')} alt="This is a Monument Sign, Example #2" />
            {/* <img src={require('./img/monument/img3.jpg')} /> */}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="danger">Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function ModalForTenant (props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Tenant Signs
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='modalDiv'>
            <img src={require('./img/tenantshopping/img1.jpg')} alt="This is a Tenant Sign, Example #1" />
            <img src={require('./img/tenantshopping/img2.jpg')} alt="This is a Tenant Sign, Example #2" />
            <img src={require('./img/tenantshopping/img3.jpg')} alt="This is a Tenant Sign, Example #3"/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="danger">Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function ModalForPlaque (props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Plaques
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='modalDiv'>
            <img src={require('./img/plaques/img1.jpg')} alt="This is a Plaque, Example #1" />
            <img src={require('./img/plaques/img2.jpg')} alt="This is a Plaque, Example #2"/>
            <img src={require('./img/plaques/img3.jpg')}alt="This is a Plaque, Example #3" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="danger">Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function ModalForPole (props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Pole Signs
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='modalDiv'>
            <img src={require('./img/pole/img1.jpg')} alt="This is a Pole Sign, Example #1" />
            <img src={require('./img/pole/img2.jpg')} alt="This is a Pole Sign, Example #2" />
            <img src={require('./img/pole/img3.jpg')} alt="This is a Pole Sign, Example #3" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="danger">Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function ModalForShoppingCenter (props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Shopping Center Signs
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='modalDiv'>
            <img src={require('./img/tenantshopping/img1.jpg')} alt="This is a Shopping Center Sign, Example #1" />
            <img src={require('./img/tenantshopping/img2.jpg')} alt="This is a Shopping Center Sign, Example #2" />
            <img src={require('./img/tenantshopping/img3.jpg')} alt="This is a Shopping Center Sign, Example #3" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="danger">Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function ModalForVinyl (props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Vinyl Lettering
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='modalDivFlag'>
            <img src={require('./img/vinyl/img1.jpg')} alt="This is a Vinyl Sign, Example #1" />
            <img src={require('./img/vinyl/img2.jpg')} alt="This is a Vinyl Sign, Example #2" />
            <img src={require('./img/vinyl/img3.jpg')} alt="This is a Vinyl Sign, Example #3"/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="danger">Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function ModalForWall (props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Wall Signs
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='modalDivFlag'>
            <img src={require('./img/wall/img1.jpg')} alt="This is a Wall Sign, Example #1" />
            <img src={require('./img/wall/img2.jpg')} alt="This is a Wall Sign, Example #2" />
            <img src={require('./img/wall/img3.jpg')} alt="This is a Wall Sign, Example #3"/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="danger">Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

const Services = () => {

    const [modalShow, setModalShow] = React.useState(false);
    const [lightedShow, setLightedShow] = React.useState(false);
    const [wayFindingShow, setWayFindingShow] = React.useState(false);
    const [channelLettersShow, setChannelLettersShow] = React.useState(false);
    const [messageShow, setMessageShow] = React.useState(false);
    const [flagShow, setFlagShow] = React.useState(false);
    const [monumentShow, setMonumentShow] = React.useState(false);
    const [tenantShow, setTenantShow] = React.useState(false);
    const [plaqueShow, setPlaqueShow] = React.useState(false);
    const [poleShow, setPoleShow] = React.useState(false);
    const [shoppingCenterShow, setShoppingCenterShow] = React.useState(false);
    const [vinylShow, setVinylShow] = React.useState(false);
    const [wallShow, setWallShow] = React.useState(false);

    return (

        <div> 
                <Helmet>
                  <meta charSet="utf-8" />
                  <title>Bill's Signs - Services </title>
                  <link rel="canonical" href="https://billssigns.com/services" />
                  <meta name="Bills Signs" content="Here is a list of services provided by Bill's Signs. Contact us today about building a new project for your business."></meta>
                </Helmet>
            <Nav fill variant="tabs" defaultActiveKey="/services">
                <Nav.Item>
                    <Nav.Link href="/" eventKey="link-1">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/services">Services</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='/contact' eventKey="link-2">Contact</Nav.Link>
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

                   <Card> <span className="redText">We are the areas leading full service sign shop, with industry proven excellence from start to finish.</span><span className="redText">We handle all aspects of production and are happy to help you with any questions you may have about the process.</span>
                   </Card>
                </div>
                <div className='exerpt cardList'>Click on any of our Services below to check out what we can make for your business.</div>
                {/* <Dropdown className="buttonPadding">
                    <Dropdown.Toggle variant="danger" id="dropdown-button-drop-$left" drop="left" key="left">
                        Services&nbsp; 
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => setFlagShow(true)}>Flag Poles</Dropdown.Item>
                        <ModalForFlag show={flagShow} onHide={() => setFlagShow(false)}/>

                        <Dropdown.Item onClick={() => setLightedShow(true)}>Lighted Signs</Dropdown.Item>
                        <ModalForLighted show={lightedShow} onHide={() => setLightedShow(false)}/>

                        <Dropdown.Item onClick={() => setChannelLettersShow(true)}>Channel Letters</Dropdown.Item>
                        <ModalForChannelLetter show={channelLettersShow} onHide={() => setChannelLettersShow(false)}/>

                        <Dropdown.Item onClick={() => setMessageShow(true)}>Electronic Message Signs</Dropdown.Item>
                        <ModalForMessage show={messageShow} onHide={() => setMessageShow(false)}/>

                        <Dropdown.Item onClick={() => setPoleShow(true)}>Pole Signs</Dropdown.Item>
                        <ModalForPole show={poleShow} onHide={() => setPoleShow(false)}/>

                        <Dropdown.Item onClick={() => setWallShow(true)}>Wall Signs</Dropdown.Item>
                        <ModalForWall show={wallShow} onHide={() => setWallShow(false)}/>

                        <Dropdown.Item onClick={() => setMonumentShow(true)}>Monument Signs</Dropdown.Item>
                        <ModalForMonument show={monumentShow} onHide={() => setMonumentShow(false)}/>

                        <Dropdown.Item onClick={() => setPlaqueShow(true)}>Plaques</Dropdown.Item>
                        <ModalForPlaque show={plaqueShow} onHide={() => setPlaqueShow(false)}/>

                        <Dropdown.Item onClick={() => setWayFindingShow(true)}>Way Finding/Drive-Thru Signs</Dropdown.Item>
                        <ModalForWayFinding show={wayFindingShow} onHide={() => setWayFindingShow(false)}/>

                        <Dropdown.Item onClick={() => setShoppingCenterShow(true)}>Shopping Center Signs</Dropdown.Item>
                        <ModalForShoppingCenter show={shoppingCenterShow} onHide={() => setShoppingCenterShow(false)}/>

                        <Dropdown.Item onClick={() => setTenantShow(true)}>Tenant Signs</Dropdown.Item>
                        <ModalForTenant show={tenantShow} onHide={() => setTenantShow(false)}/>

                        <Dropdown.Item onClick={() => setVinylShow(true)}>Vinyl Lettering</Dropdown.Item>
                        <ModalForVinyl show={vinylShow} onHide={() => setVinylShow(false)}/>
                    </Dropdown.Menu>
                </Dropdown> */}
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
            
            <div className="contentDiv"><img id="logoImgModal" src={require('./img/billsLogo.png')} alt='logo' /> </div>
            <ul className='addressList'>
                    <li>5765 Mandy Lane Tallahassee, Florida</li>
                    <li>850-576-6847 &#183; info@billssigns.com</li>
                    <li className='lisenceModal' onClick={() => setModalShow(true)}>License Info</li>
                    <ModalForLic  show={modalShow} onHide={() => setModalShow(false)}/>
            </ul>
        </div>
    )
} 
export default Services