import React from 'react'
import Nav from 'react-bootstrap/Nav'
import {Jumbotron,Button,Card,Carousel,Container,Row,Col,Modal} from 'react-bootstrap'
import { Helmet } from 'react-helmet'




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
        <Modal.Body className="modalDiv">
            <div className='d-flex justify-content-center'>
                <Carousel className="sliderContainer">
                    <Carousel.Item >
                        <img
                        className="sliderContainer"
                        src={require('./img/lighted/img1.jpg')} alt="This is a Lighted Sign Example #1" />
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                        className="sliderContainer"
                        src={require('./img/lighted/img2.jpg')} alt="This is a Lighted Sign Example #2"/>
                    </Carousel.Item>
                </Carousel>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="danger">Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  function ModalForChannel (props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Channel Letter Signs
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalDiv">
            <div className='d-flex justify-content-center'>
                <Carousel className="sliderContainer">
                    <Carousel.Item >
                        <img
                        className="sliderContainer"
                        src={require('./img/channel/img1.jpg')} alt="This is a Channel LetterExample #1" />
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                        className="sliderContainer"
                        src={require('./img/channel/img2.jpg')} alt="This is a Channel Letter Example #2"/>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                        className="sliderContainer"
                        src={require('./img/channel/img3.jpg')} alt="This is a Channel Letter Example #3"/>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                        className="sliderContainer"
                        src={require('./img/channel/img4.jpg')} alt="This is a Channel Letter Example #4"/>
                    </Carousel.Item>
                </Carousel>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="danger">Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  function ModalForElectronic (props) {
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
        <Modal.Body className="modalDiv">
            <div className='d-flex justify-content-center'>
                    <Carousel className="sliderContainer">
                    <Carousel.Item >
                        <img
                        className="sliderContainer"
                        src={require('./img/electronic/img1.jpg')} alt="This is a Electronic LetterExample #1" />
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                        className="sliderContainer"
                        src={require('./img/electronic/img2.jpg')} alt="This is a Electronic Letter Example #2"/>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                        className="sliderContainer"
                        src={require('./img/electronic/img3.jpg')} alt="This is a Electronic Letter Example #3"/>
                    </Carousel.Item>
                </Carousel>
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
        <Modal.Body className="modalDiv">
            <div className='d-flex justify-content-center'>
                <Carousel className="sliderContainer">
                    <Carousel.Item >
                        <img
                        className="sliderContainer"
                        src={require('./img/pole/img1.jpg')} alt="This is a pole sign Example #1" />
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                        className="sliderContainer"
                        src={require('./img/pole/img2.jpg')} alt="This is a pole sign Example #2"/>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                        className="sliderContainer"
                        src={require('./img/pole/img3.jpg')} alt="This is a pole sign Example #3"/>
                    </Carousel.Item>
                </Carousel>
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
        <Modal.Body className="modalDiv">
            <div className='d-flex justify-content-center'>
                <Carousel className="sliderContainer">
                    <Carousel.Item >
                        <img
                        className="sliderContainer"
                        src={require('./img/wall/img1.jpg')} alt="This is a Wall sign Example #1" />
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                        className="sliderContainer"
                        src={require('./img/wall/img2.jpg')} alt="This is a Wall sign Example #2"/>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                        className="sliderContainer"
                        src={require('./img/wall/img3.jpg')} alt="This is a Wall sign Example #3"/>
                    </Carousel.Item>
                </Carousel>
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
        <Modal.Body className="modalDiv">
            <div className='d-flex justify-content-center'>
                <Carousel className="sliderContainer">
                    <Carousel.Item >
                        <img
                        className="sliderContainer"
                        src={require('./img/monument/img1.jpg')} alt="This is a monument sign Example #1" />
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                        className="sliderContainer"
                        src={require('./img/monument/img2.jpg')} alt="This is a monument sign Example #2"/>
                    </Carousel.Item>
                </Carousel>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="danger">Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  function ModalForPylon (props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Pylon Signs
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalDiv">
            <div className='d-flex justify-content-center'>
                <Carousel className="sliderContainer">
                    <Carousel.Item >
                        <img
                        className="sliderContainer"
                        src={require('./img/pylon/img1.jpg')} alt="This is a Pylon Signs Example #1" />
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                        className="sliderContainer"
                        src={require('./img/pylon/img2.jpg')} alt="This is a Pylon Signs Example #2"/>
                    </Carousel.Item>
                </Carousel>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="danger">Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  function ModalForPlaques (props) {
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
        <Modal.Body className="modalDiv">
            <div className='d-flex justify-content-center'>
                <Carousel className="sliderContainer">
                    <Carousel.Item >
                        <img
                        className="sliderContainer"
                        src={require('./img/plaques/img1.jpg')} alt="This is a Plaque Example #1" />
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                        className="sliderContainer"
                        src={require('./img/plaques/img2.jpg')} alt="This is a Plaque Example #2"/>
                    </Carousel.Item>
                </Carousel>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="danger">Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  function ModalForWay (props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Drive Thru / Way Finding Signs
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalDiv">
            <div className='d-flex justify-content-center'>
                <Carousel className="sliderContainer">
                    <Carousel.Item >
                        <img
                        className="sliderContainer"
                        src={require('./img/way/img1.jpg')} alt="This is a Drive Thru Example #1" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="sliderContainer"
                        src={require('./img/way/img2.jpg')} alt="This is a Drive Thru Example #2"/>
                    </Carousel.Item>
                </Carousel>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="danger">Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  function ModalForShopping (props) {
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
        <Modal.Body className="modalDiv">
            <div className='d-flex justify-content-center'>
                <Carousel className="sliderContainer">
                    <Carousel.Item >
                        <img
                        className="sliderContainer"
                        src={require('./img/tenantshopping/img1.jpg')} alt="This is a Shopping Center Example #1" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="sliderContainer"
                        src={require('./img/tenantshopping/img2.jpg')} alt="This is a Shopping Center Example #2"/>
                    </Carousel.Item>
                </Carousel>
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
        <Modal.Body className="modalDiv">
        <div className='d-flex justify-content-center'>
            <Carousel className="sliderContainer">
                <Carousel.Item >
                    <img
                    className="sliderContainer"
                    src={require('./img/vinyl/img1.jpg')} alt="This is a Vinyl Signs Example #1" />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="sliderContainer"
                    src={require('./img/vinyl/img2.jpg')} alt="This is a Vinyl Signs Example #2"/>
                </Carousel.Item>
            </Carousel>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="danger">Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

function ModalForFlags (props) {
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
        <Modal.Body className="modalDiv">
            <div className='d-flex justify-content-center'>
                <Carousel className="sliderContainer">
                    <Carousel.Item >
                        <img
                        className="sliderContainer"
                        src={require('./img/flag/img1.jpg')} alt="This is a flag Example #1" />
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                        className="sliderContainer"
                        src={require('./img/flag/img2.jpg')} alt="This is a flag Example #2"/>
                    </Carousel.Item>
                </Carousel>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="danger">Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

const Services = () => {


    const [lightedShow, setLightedShow] = React.useState(false);
    const [flagShow, setFlagShow] = React.useState(false);
    const [channelShow, setChannelShow] = React.useState(false);
    const [electronicShow, setElectronicShow] = React.useState(false);
    const [poleShow, setPoleShow] = React.useState(false);
    const [wallShow, setWallShow] = React.useState(false);
    const [monumentShow, setMonumentShow] = React.useState(false);
    const [pylonShow, setPylonShow] = React.useState(false);
    const [plaquesShow, setPlaquesShow] = React.useState(false);
    const [wayShow, setWayShow] = React.useState(false);
    const [shoppingShow, setShoppingShow] = React.useState(false);
    const [vinylShow, setVinylShow] = React.useState(false);


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
                    <Nav.Link href="/" eventKey="link-1">HOME</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/services" className="activeTab">SERVICES</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='/contact' eventKey="link-2">CONTACT</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href='/blog' eventKey="link-3">BLOG</Nav.Link>
                </Nav.Item>
            </Nav>
            <Jumbotron className="jumbotron">
                <div className="contentDiv">
                <img className="logoImg" src={require('./img/billsLogo.png')} alt='Bills Signs Logo for the Top of the Services page' />
                <h1>SERVICES</h1>
                <span className="redText">WE. DO. IT. ALL.</span>
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
                   <Card className="contentDiv contentDiv2"><span className="redText">We are the areas leading full service sign shop, with industry proven excellence from start to finish. We handle all aspects of production and are happy to help you with any questions you may have about the process.</span>
                   </Card>
                </div>
                <div className='exerpt cardList'>Click on any of our Services below to galleries of what we can make for your business.</div>
                <Card>
                    <Container>
                        <Row className="buttonRow">
                            <Col><div className="servicesButton" onClick={() => setFlagShow(true)}>Flag Poles</div></Col>
                            <ModalForFlags show={flagShow} onHide={() => setFlagShow(false)}/>
                            <Col><div className="servicesButton" onClick={() => setLightedShow(true)}>Lighted Signs</div></Col>
                            <ModalForLighted show={lightedShow} onHide={() => setLightedShow(false)}/>
                        </Row>
                        <Row className="buttonRow">
                            <Col><div className="servicesButton" onClick={() => setChannelShow(true)}>Channel Letters</div></Col>
                            <ModalForChannel show={channelShow} onHide={() => setChannelShow(false)}/>
                            <Col><div className="servicesButton" onClick={() => setElectronicShow(true)}>Electronic Message Signs</div></Col>
                            <ModalForElectronic show={electronicShow} onHide={() => setElectronicShow(false)}/>
                        </Row>
                        <Row className="buttonRow">
                            <Col><div className="servicesButton" onClick={() => setPoleShow(true)}>Pole Signs</div></Col>
                            <ModalForPole show={poleShow} onHide={() => setPoleShow(false)}/>
                            <Col><div className="servicesButton" onClick={() => setWallShow(true)}>Wall Signs</div></Col>
                            <ModalForWall show={wallShow} onHide={() => setWallShow(false)}/>
                        </Row>
                        <Row className="buttonRow">
                            <Col><div className="servicesButton" onClick={() => setMonumentShow(true)}>Monument Signs</div></Col>
                            <ModalForMonument show={monumentShow} onHide={() => setMonumentShow(false)}/>
                            <Col><div className="servicesButton" onClick={() => setPylonShow(true)}>Pylon Signs</div></Col>
                            <ModalForPylon show={pylonShow} onHide={() => setPylonShow(false)}/>
                        </Row>
                        <Row className="buttonRow">
                            <Col><div className="servicesButton" onClick={() => setPlaquesShow(true)}>Plaques</div></Col>
                            <ModalForPlaques show={plaquesShow} onHide={() => setPlaquesShow(false)}/>
                            <Col><div className="servicesButton" onClick={() => setWayShow(true)}>Way Finiding/Drive Thru Signs</div></Col>
                            <ModalForWay show={wayShow} onHide={() => setWayShow(false)}/>
                        </Row>
                        <Row className="buttonRow">
                            <Col><div className="servicesButton" onClick={() => setShoppingShow(true)}>Shopping Center/ Tenant Signs</div></Col>
                            <ModalForShopping show={shoppingShow} onHide={() => setShoppingShow(false)}/>
                            <Col><div className="servicesButton" onClick={() => setVinylShow(true)}>Vinyl Signs</div></Col>
                            <ModalForVinyl show={vinylShow} onHide={() => setVinylShow(false)}/>
                        </Row>
                    </Container>
                </Card>
                
              <div className="contentDiv"><a href="tel:850-576-6847"><Button variant="danger">Call Us Today</Button></a></div>
            </Jumbotron>
        </div>
    )
} 
export default Services