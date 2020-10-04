import React from 'react';
import Nav from 'react-bootstrap/Nav';
import {
  Jumbotron,
  Button,
  Card,
  Carousel,
  Container,
  Row,
  Col,
  Modal,
} from 'react-bootstrap';
import { Helmet } from 'react-helmet';

function ModalForLighted(props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Lighted Signs
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='modalDiv'>
        <div className='d-flex justify-content-center'>
          <Carousel className='sliderContainer'>
            <Carousel.Item>
              <img
                className='sliderContainer'
                src={require('./img/lighted/LightedSign_1.jpg')}
                alt='Cantina Tacos and Tequila Ligtht Up Wall Sign at Night'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer'
                src={require('./img/lighted/LightedSign_2.jpg')}
                alt='Red Rapid Car Wash Light Up Pole Sign at Night'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer'
                src={require('./img/lighted/LightedSign_3.jpg')}
                alt='Rik Sha Tacos Asian Street Food Light Up Wall Sign at Night'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer'
                src={require('./img/lighted/LightedSign_4.jpg')}
                alt='Yobe Frozen Yougurt Light Up Wall Sign at Night'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer'
                src={require('./img/lighted/LightedSign_5.jpg')}
                alt='Fisherman Warf Light Up Wall Sign at Night'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer'
                src={require('./img/lighted/LightedSign_6.jpg')}
                alt='Mint and Lime Asian Bistro Light Up Wall Sign at Night'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer'
                src={require('./img/lighted/LightedSign_7.jpg')}
                alt='Piggys Bar B Que Light Up Pole Sign at Night'
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className='signDescription'>
          <p>
            Lighted and Illuminated Signs have quickly become the ideal solution
            for businesses wanting to draw the attention of customers, as they
            provide a strong visual representation of your business from longer
            distances. Another benefit is almost all sign styles are able to be
            lighted, including Channel Letters, Lightboxes, Backlit Signs, Wall
            Signs, Pole Signs, Monument Signs, and LED display boards.
          </p>
          <p>
            If you are looking to make a creative impact which stands out from
            other businesses signs in your area, you need look no further than a
            Lighted Sign. Recent lighting innovations now provide up to 100,000
            hours of use from a quality LED Lighted Sign with little to no
            maintenance, very low power requirements and are able to be
            customized to any color or style to meet your businesses branding
            needs.
          </p>
          <p>
            As the first state licensed and insured sign manufacturer in
            Tallahassee, FL, Bill’s Signs and Services has over 65 years
            experience designing, fabricating and installing new Lighted and
            Illuminated Signs as well as restoring and repairing existing
            equipment to meet the needs of your business.
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant='danger'>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function ModalForChannel(props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Channel Letter Signs
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='modalDiv'>
        <div className='d-flex justify-content-center'>
          <Carousel className='sliderContainer'>
            <Carousel.Item>
              <img
                className='sliderContainer'
                src={require('./img/channel/ChannelLetterSign_1.jpg')}
                alt='Jimmy Johns Channel Letter Wall Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer'
                src={require('./img/channel/ChannelLetterSign_2.jpg')}
                alt='Great Clips Channel Letter Wall Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer'
                src={require('./img/channel/ChannelLetterSign_3.jpg')}
                alt='Verizon Wireless Channel Letter Wall Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer'
                src={require('./img/channel/ChannelLetterSign_4.jpg')}
                alt='Florida State University Credit Union Channel Letter Wall Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer'
                src={require('./img/channel/ChannelLetterSign_5.jpg')}
                alt='Allied Public Adjusters Channel Letter Wall Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer'
                src={require('./img/channel/ChannelLetterSign_6.jpg')}
                alt='M and M Monogramming on Mahan Channel Letter Wall Sign'
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className='signDescription'>
          <p>
            Channel Letter Signs are the most popular and commonly selected sign
            style for outdoor signage by retail storefronts, restaurants, bars,
            large and small offices and public buildings because Channel
            Lettering provides both customization of size, color and shape as
            well as a very clean and sophisticated look that literally stands
            out for your businesses.<p></p> To draw even more customers
            attention to your business, ask us about optional Neon or LED
            Backlit Channel Lettering or Illuminated Channel Lettering to
            increase visibility all day and night or Reverse Channel Lettering
            and Vintage Channel Lettering to stand out from other Channel Letter
            Signs in your area. No matter which style of Channel Letter Sign
            your businesses decides on, you will not be disappointed with the
            quality appearance this sign style provides. Channel Letter Signs
            also require little to no maintenance and have a very high lifespan.
          </p>
          <p>
            As the first state licensed and insured sign manufacturer in
            Tallahassee, FL, Bill’s Signs and Services is the industry leader
            with over 65 years experience designing, fabricating and installing
            all styles of Channel Letter Signs, as well as restoring and
            repairing existing equipment to meet the needs of your business.
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant='danger'>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function ModalForElectronic(props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Electronic Message Signs
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='modalDiv'>
        <div className='d-flex justify-content-center'>
          <Carousel className='sliderContainer2'>
            <Carousel.Item>
              <img
                className='sliderContainer2'
                src={require('./img/electronic/ElectronicMessageDisplaySign_1.jpg')}
                alt='Carpet One Electronic Message Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer2'
                src={require('./img/electronic/ElectronicMessageDisplaySign_2.jpg')}
                alt='The Centre of Tallahassee Electronic Message Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer2'
                src={require('./img/electronic/ElectronicMessageDisplaySign_3.jpg')}
                alt='Periodontal Associates Electronic Message Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer2'
                src={require('./img/electronic/ElectronicMessageDisplaySign_4.jpg')}
                alt='StarBucks Electronic Message Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer2'
                src={require('./img/electronic/ElectronicMessageDisplaySign_5.jpg')}
                alt='Gessler Clinic PA Electronic Message Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer2'
                src={require('./img/electronic/ElectronicMessageDisplaySign_6.jpg')}
                alt='First Baptist Arnold Electronic Message Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer2'
                src={require('./img/electronic/ElectronicMessageDisplaySign_7.jpg')}
                alt='Winsted Area Ambulance Electronic Message Sign'
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div>
          <p>
            Electronic Message Display Signs or Digital Signs are often only
            associated with indoor use at airports, restaurants, hospitals,
            retail locations, and businesses with kiosks or large lobbies, but
            EMD Digital displays are quickly becoming the most desired form of
            external signage because of their versatility and that they are now
            made of long-lasting and durable materials suitable for any climate.
          </p>
          <p>
            EMD Signs set businesses, both large and small, apart from the
            competition and catch they eye of all that pass by providing high
            resolution content, both static and video based, that can be quickly
            and conveniently updated as desired. If your businesses is actively
            involved in the community, participates in regular events, has an
            evolving product catalog, offers changing discounts or seasonal
            pricing, or your businesses has limited sign space to cover all of
            your marketing needs, an EMD Digital Display Sign is the perfect
            solution for your businesses to stand out.
          </p>
          <p>
            As the first state licensed sign manufacturer in Tallahassee, FL,
            Bill’s Signs and Services is the industry leader with over 65 years
            experience designing, fabricating and installing all styles of
            Electronic Message Display and Digital Signs, as well as restoring
            and repairing existing equipment, and providing creative assistance
            to keep your business’s EMD Sign content fresh and up to date with
            any current events, promotions and new services.
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant='danger'>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function ModalForPole(props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Pole Signs</Modal.Title>
      </Modal.Header>
      <Modal.Body className='modalDiv'>
        <div className='d-flex justify-content-center'>
          <Carousel className='sliderContainer2'>
            <Carousel.Item>
              <img
                className='sliderContainer2'
                src={require('./img/pole/PoleSign_1.jpg')}
                alt='North Florida Fair Electronic Message and Pole Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer2'
                src={require('./img/pole/PoleSign_2.jpg')}
                alt='Sonnys BBQ Pole Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer2'
                src={require('./img/pole/PoleSign_3.jpg')}
                alt='Peppers Mexican Grill and Cantina Pole Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer2'
                src={require('./img/pole/PoleSign_4.jpg')}
                alt='Dairy Queen Orange Julius Pole Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer'
                src={require('./img/pole/PoleSign_5.jpg')}
                alt='Red Hills Powersports Pole Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer2'
                src={require('./img/pole/PoleSign_6.jpg')}
                alt='University GMC Chevrolet Pole Sign'
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div>
          <p>
            Pole Signs are a great solution for businesses located in high
            traffic locations like gas stations, fast food restaurants, and
            Shopping Centers, as well as businesses with low visibility trying
            to establish location association like hotels, museums, schools, and
            churches. Pole Signs are a very cost effective branding tool, and
            can last for decades.
          </p>
          <p>
            As the first state licensed and insured sign manufacturer in
            Tallahassee, FL, Bill’s Signs and Services has over 65 years
            experience designing, fabricating and installing new Pole Signs, as
            well as restoring and repairing existing equipment to meet the needs
            of your business.
          </p>
          <p>
            Wall Signs can be fabricated from any number of materials ranging
            from metal to vinyl which are mounted or applied to a wall or window
            both inside and outside of a business. When it comes to marketing,
            consider adding a wall and window sign at a high traffic location or
            entrance to display your company tagline, a special or hours of
            service.
          </p>
          <p>
            As the first state licensed and insured sign manufacturer in
            Tallahassee, FL, Bill’s Signs and Services has over 65 years
            experience designing, fabricating and installing new Wall and Window
            Signage, as well as restoring and repairing existing signage to meet
            the needs of your business.
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant='danger'>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function ModalForWall(props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Wall Signs</Modal.Title>
      </Modal.Header>
      <Modal.Body className='modalDiv'>
        <div className='d-flex justify-content-center'>
          <Carousel className='sliderContainer'>
            <Carousel.Item>
              <img
                className='sliderContainer'
                src={require('./img/wall/WallSign_1.jpg')}
                alt='This is a Wall sign Example #1'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer'
                src={require('./img/wall/WallSign_2.jpg')}
                alt='Ginza Red Sushi Wall Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer'
                src={require('./img/wall/WallSign_3.jpg')}
                alt='Cantina Tacos and Tequila Wall Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer'
                src={require('./img/wall/WallSign_4.jpg')}
                alt='McAffee Indoor Wall Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer'
                src={require('./img/wall/WallSign_6.jpg')}
                alt='Ora Indoor Wall Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer'
                src={require('./img/wall/WallSign_7.jpg')}
                alt='Dunsheas United Realty Indoor Wall Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer'
                src={require('./img/wall/WallSign_8.jpg')}
                alt='Zingales Billards Outdoor Wall Sign'
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div>
          <p>
            As the first state licensed and insured sign manufacturer in
            Tallahassee, FL, Bill’s Signs and Services has over 65 years
            experience designing, fabricating and installing new Monument Signs,
            as well as restoring and repairing existing signage to meet the
            needs of your business.
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant='danger'>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function ModalForMonument(props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Monument Signs
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='modalDiv'>
        <div className='d-flex justify-content-center'>
          <Carousel className='sliderContainer'>
            <Carousel.Item>
              <img
                className='sliderContainer'
                src={require('./img/monument/MonumentSign_1.jpg')}
                alt='Which Wich Monument Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer'
                src={require('./img/monument/MonumentSign_2.jpg')}
                alt='The Epic at Gateway Centre Monument Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer'
                src={require('./img/monument/MonumentSign_3.jpg')}
                alt='Gessler Clinic PA Monument and Electronic Message Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer'
                src={require('./img/monument/MonumentSign_4.jpg')}
                alt='Simpsonwood United Methodist Church Monument Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer'
                src={require('./img/monument/MonumentSign_5.jpg')}
                alt='Periodontal Assoicaites Monument and Electronic Message Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer'
                src={require('./img/monument/MonumentSign_6.jpg')}
                alt='DuPont Office Centre Monument Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer'
                src={require('./img/monument/MonumentSign_7.jpg')}
                alt='State Farm Insurance Monument Sign'
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div>
          <p>
            Monument Signs are typically set between two brick columns, poles or
            even foam and give businesses external branding and marketing a very
            distinguished presentation and increased visibility. Monument Signs
            are very versatile and can be customized to meet your businesses
            needs by incorporating a Lighted Sign or EMD Display Sign between
            the columns. Monument signs are also also a great way to increase
            location identification by matching the brick or paint color to your
            building.
          </p>
          <p>
            As the first state licensed and insured sign manufacturer in
            Tallahassee, FL, Bill’s Signs and Services has over 65 years
            experience designing, fabricating and installing new Monument Signs,
            as well as restoring and repairing existing signage to meet the
            needs of your business.
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant='danger'>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function ModalForPylon(props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Pylon Signs
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='modalDiv'>
        <div className='d-flex justify-content-center'>
          <Carousel className='sliderContainer2'>
            <Carousel.Item>
              <img
                className='sliderContainer2'
                src={require('./img/pylon/PylonSign_1.jpg')}
                alt='Red Rapid Car Wash Electronic Message and Pylon Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer2'
                src={require('./img/pylon/PylonSign_2.jpg')}
                alt='ACE Hardware and Garden Center Pylon Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer2'
                src={require('./img/pylon/PylonSign_3.jpg')}
                alt='Audi Car Dealership Pylon Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer2'
                src={require('./img/pylon/PylonSign_4.jpg')}
                alt='Park North Shopping Center Pylon Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer2'
                src={require('./img/pylon/PylonSign_5.jpg')}
                alt='Volvo Car Dealershop Pylon Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer2'
                src={require('./img/pylon/PylonSign_6.jpg')}
                alt='Mackenzie Shopping Center Pylon Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer2'
                src={require('./img/pylon/PylonSign_7.jpg')}
                alt='Aldi Food Market Pylon Sign'
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div>
          <p>
            Pylon Signs are an outdoor sign style which are very economical,
            long lasting and can be constructed to display multiple business
            names or a single business name with both single or double sided. A
            Pylon Sign is an ideal solution for a shopping center, hotel,
            restaurant, gas station, car dealership, industrial plaza or large
            retail location and can be customized to meet the hight and color
            you desire.
          </p>
          <p>
            As the first state licensed and insured sign manufacturer in
            Tallahassee, FL, Bill’s Signs and Services has over 65 years
            experience designing, fabricating and installing new Pylon Signs, as
            well as restoring and repairing existing signage to meet the needs
            of your business.
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant='danger'>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function ModalForPlaques(props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Plaques</Modal.Title>
      </Modal.Header>
      <Modal.Body className='modalDiv'>
        <div className='d-flex justify-content-center'>
          <Carousel className='sliderContainer'>
            <Carousel.Item>
              <img
                className='sliderContainer'
                src={require('./img/plaques/Plaque_1.jpg')}
                alt='William Anderson Alexander Memorial Plaque'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer'
                src={require('./img/plaques/Plaque_2.jpg')}
                alt='Aplachicola Arsenal Memoral Plaque'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer'
                src={require('./img/plaques/Plaque_3.jpg')}
                alt='Florida State University Sod Cemetery Plaques'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer'
                src={require('./img/plaques/Plaque_4.jpg')}
                alt='American Legion Memorial Plaque'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer'
                src={require('./img/plaques/Plaque_5.jpg')}
                alt='Memorial Garden Plaque'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer'
                src={require('./img/plaques/Plaque_6.jpg')}
                alt='Coach Ron Schipper Memorial Plaque '
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer'
                src={require('./img/plaques/Plaque_7.jpg')}
                alt='Memorial Plaque for Fallen Soldiers'
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div>
          <p>
            As the first state licensed and insured sign manufacturer in
            Tallahassee, FL, Bill’s Signs and Services has over 65 years
            experience designing, fabricating and installing Plaques, as well as
            providing engraving services to meet any of your business or
            organizations needs.
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant='danger'>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function ModalForWay(props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Drive Thru / Way Finding Signs
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='modalDiv'>
        <div className='d-flex justify-content-center'>
          <Carousel className='sliderContainer'>
            <Carousel.Item>
              <img
                className='sliderContainer'
                src={require('./img/way/DirectionalSign_1.jpg')}
                alt='Star Bucks Drive Thru Way Finding Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer'
                src={require('./img/way/DirectionalSign_2.jpg')}
                alt='Shipping Center Enterence Way Finding Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer'
                src={require('./img/way/DirectionalSign_3.jpg')}
                alt='Commerical Building Lobby Way Finding Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer'
                src={require('./img/way/DirectionalSign_4.jpg')}
                alt='Bay View Centre Way Finding Directional Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer'
                src={require('./img/way/DirectionalSign_5.jpg')}
                alt='Jimmy Johns Drive Thru Way Finding Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer'
                src={require('./img/way/DirectionalSign_6.jpg')}
                alt='Commerical Building Classroom Way Finding Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer'
                src={require('./img/way/DirectionalSign_7.jpg')}
                alt='Parking Garage Way Finding Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer'
                src={require('./img/way/DirectionalSign_8.jpg')}
                alt='Restroom Way Finding Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer'
                src={require('./img/way/DirectionalSign_9.jpg')}
                alt='Fast Food Drive Thru Way Finding Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer'
                src={require('./img/way/DirectionalSign_10.jpg')}
                alt='McDonalds Drive Thru Way Finding Sign'
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div>
          <p>
            Way-finding and Directional Signs may be the most important type of
            sign we manufacture at Bill’s. Can you think of anything more
            important to your businesses than making sure your customers know
            where to go, and they get there quickly and safely? Way-finding
            signage is not only important for safety and convenience though.
            Have you ever imagined that Directional and Way-finding Signage can
            also promote your brand through custom colors and designs while it
            is providing location and safety information? This type of signage
            is very important and often necessary for large facilities like
            hotels, office buildings, universities, amusement parks, civic
            centers, shopping centers, parking lots and more.
          </p>
          <p>
            As the first state licensed and insured sign manufacturer in
            Tallahassee, FL, Bill’s Signs and Services has over 65 years
            experience designing, fabricating and installing Way-Finding and
            Directional Signs, as well as restoring and repairing existing
            signage to meet the needs of your business.
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant='danger'>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function ModalForShopping(props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Shopping Center Signs
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='modalDiv'>
        <div className='d-flex justify-content-center'>
          <Carousel className='sliderContainer2'>
            <Carousel.Item>
              <img
                className='sliderContainer2'
                src={require('./img/tenantshopping/ShoppingCenterSign_2.jpg')}
                alt='Target Shopping Center Multiple Tenant Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer2'
                src={require('./img/tenantshopping/ShoppingCenterSign_3.jpg')}
                alt='Marshalls PetSmart Shopping Center Multiple Tenant Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer2'
                src={require('./img/tenantshopping/ShoppingCenterSign_4.jpg')}
                alt='Towne Center at Cypress Gardens Shopping Center Multiple Tenant Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer2'
                src={require('./img/tenantshopping/ShoppingCenterSign_5.jpg')}
                alt='Lakeside Village Shopping Center Multiple Tenant Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer2'
                src={require('./img/tenantshopping/ShoppingCenterSign_6.jpg')}
                alt='Sporting Goods Staples HomeGoods Shopping Center Multiple Tenant Sign'
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div>
          <p>
            Bill's Signs and Services specializes in signs for multiple tenants
            and shopping centers. Whether your looking for a sign with three
            tenants or thirty Bill's has the knowledge and expertise to build
            you the best sign for your budget.
          </p>
          <p>
            As the first state licensed and insured sign manufacturer in
            Tallahassee, FL, Bill’s Signs and Services has over 65 years
            experience designing, fabricating and installing Way-Finding and
            Directional Signs, as well as restoring and repairing existing
            signage to meet the needs of your business.
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant='danger'>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function ModalForVinyl(props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Vinyl Lettering
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='modalDiv'>
        <div className='d-flex justify-content-center'>
          <Carousel className='sliderContainer2'>
            <Carousel.Item>
              <img
                className='sliderContainer2'
                src={require('./img/vinyl/VinylSign_1.jpg')}
                alt='Athletic Apparel Sale Vinyl Window Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer2'
                src={require('./img/vinyl/VinylSign_2.jpg')}
                alt='AllState Insurance Entry Door Vinyl Hours of Operation Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer2'
                src={require('./img/vinyl/VinylSign_3.jpg')}
                alt='Comapny Tagline and Advertisting Window Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer2'
                src={require('./img/vinyl/VinylSign_4.jpg')}
                alt='Vinyl Truck Covering for Business'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer2'
                src={require('./img/vinyl/VinylSign_5.jpg')}
                alt='Church Vinyl Logo Window Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer2'
                src={require('./img/vinyl/VinylSign_7.jpg')}
                alt='Allegro Senior Living Vinyl Vehicle Sign'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer2'
                src={require('./img/vinyl/VinylSign_8.jpg')}
                alt='Hours of Operation Vinyl Window Sign'
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div>
          <p>
            Vinyl Signs and Wraps are an economic way to increase your brands
            visibility on site and on the road. Whether you are looking for a
            Vinyl Sign to display store hours, your businesses logo, or you are
            looking for a full vehicle wrap to showcase your business on company
            cars, Bill’s Signs and Services has over 65 years experience
            designing, fabricating and installing Vinyl Signs and Wraps on any
            surface.
          </p>
          <p>
            As the first state licensed and insured sign manufacturer in
            Tallahassee, FL, Bill’s Signs and Services has over 65 years
            experience designing, fabricating and installing Way-Finding and
            Directional Signs, as well as restoring and repairing existing
            signage to meet the needs of your business.
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant='danger'>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function ModalForFlags(props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Flag Poles</Modal.Title>
      </Modal.Header>
      <Modal.Body className='modalDiv'>
        <div className='d-flex justify-content-center'>
          <Carousel className='sliderContainer2'>
            <Carousel.Item>
              <img
                className='sliderContainer2'
                src={require('./img/flag/FlagPole_1.jpg')}
                alt='Court Yard American Flag Pole'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer2'
                src={require('./img/flag/FlagPole_2.jpg')}
                alt='Sothebys Real Estate Building Flag Pole'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer2'
                src={require('./img/flag/FlagPole_3.jpg')}
                alt='Business American Flag Pole'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='sliderContainer2'
                src={require('./img/flag/FlagPole_4.jpg')}
                alt='Alexander McQueen Building Flag Pole'
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div>
          <p>
            Contact Bill's today to get more information on how we can contruct
            a flag pole for you that is built to last for years to come.
          </p>
          <p>
            As the first state licensed and insured sign manufacturer in
            Tallahassee, FL, Bill’s Signs and Services has over 65 years
            experience designing, fabricating and installing Way-Finding and
            Directional Signs, as well as restoring and repairing existing
            signage to meet the needs of your business.
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant='danger'>
          Close
        </Button>
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
        <meta charSet='utf-8' />
        <title>Bill's Signs - Services </title>
        <link rel='canonical' href='https://billssigns.com/services' />
        <meta
          name='Bills Signs'
          content="Here is a list of services provided by Bill's Signs. Contact us today about building a new project for your business."
        ></meta>
      </Helmet>
      <Nav className="navGap" fill variant='pills' defaultActiveKey='/services'>
        <Nav.Item>
          <Nav.Link href='/' eventKey='link-1'>
            HOME
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/services' className='activeTab'>
            SERVICES
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/contact' eventKey='link-2'>
            CONTACT
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/blog' eventKey='link-3'>
            BLOG
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Jumbotron className='jumbotron'>
        <div className='contentDiv'>
          <img
            className='logoImg'
            src={require('./img/billsLogo.png')}
            alt='Bills Signs Logo for the Top of the Services page'
          />
          <h1>SERVICES</h1>
          <span className='redText'>WE. DO. IT. ALL.</span>
          <ul className='servicesList'>
            <li>• Consulting • Survey • </li>
            <li>• Design • Permitting •</li>
            <li>• Manufacture and Construction •</li>
            <li>• Installation • Service and Maintenance •</li>
            <li>• Warranty •</li>
          </ul>
          <div className='d-flex justify-content-center'>
            <Carousel>
            <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={require('./img/channel/ChannelLetterSign_1.jpg')}
                  alt='First slide'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={require('./img/lighted/LightedSign_2.jpg')}
                  alt='Second slide'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={require('./img/wall/WallSign_3.jpg')}
                  alt='Second slide'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={require('./img/wall/WallSign_1.jpg')}
                  alt='Second slide'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={require('./img/channel/ChannelLetterSign_1.jpg')}
                  alt='Second slide'
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <Card className='contentDiv2Left'>
            <p>
              <span className='redText'>Lighted and Illuminated Signs</span>
              have quickly become the ideal solution for businesses wanting to
              draw the attention of customers, as they provide a strong visual
              representation of your business from longer distances. Another
              benefit is almost all sign styles are able to be lighted,
              including Channel Letters, Lightboxes, Backlit Signs, Wall Signs,
              Pole Signs, Monument Signs, and LED display boards.
            </p>
            <p>
              If you are looking to make a creative impact which stands out from
              other businesses signs in your area, you need look no further than
              a Lighted Sign. Recent lighting innovations now provide up to
              100,000 hours of use from a quality LED Lighted Sign with little
              to no maintenance, very low power requirements and are able to be
              customized to any color or style to meet your businesses branding
              needs.
            </p>
            <p>
              <span className='redText'>LED Backlit Signs</span>like other
              Lighted or Illuminated Signs are best known for their visibility
              during both the daytime and the evening and are sometimes referred
              to as Halo Signs. This sign style as able to make any logo or
              brand name stand out with it’s halo lighting effect and are a
              popular sign style for both indoor lobby’s and windows as well as
              outdoor rooftops, walls and monuments to help your businesses
              stand out or draw the attention of customers. LED Backlit Signs
              are able to be customized to any color, size and style to meet
              your businesses branding needs.
            </p>
            <p>
              As the first state licensed and insured sign manufacturer in
              Tallahassee, FL, Bill’s Signs and Services has over 65 years
              experience designing, fabricating and installing new Lighted and
              Illuminated Signs as well as restoring and repairing existing
              equipment to meet the needs of your business.
            </p>
          </Card>
        </div>
        <div className='exerpt cardList'>
          Click on any of our Services below to see galleries of what we can
          make for your business.
        </div>
        <Card>
          <Container className="servicesCard">
            <Row className='buttonRow'>
              <Col>
                <div
                  className='servicesButton'
                  onClick={() => setFlagShow(true)}
                >
                  Flag Poles
                </div>
              </Col>
              <ModalForFlags
                show={flagShow}
                onHide={() => setFlagShow(false)}
              />
              <Col>
                <div
                  className='servicesButton'
                  onClick={() => setLightedShow(true)}
                >
                  Lighted Signs
                </div>
              </Col>
              <ModalForLighted
                show={lightedShow}
                onHide={() => setLightedShow(false)}
              />
            </Row>
            <Row className='buttonRow'>
              <Col>
                <div
                  className='servicesButton'
                  onClick={() => setChannelShow(true)}
                >
                  Channel Letters
                </div>
              </Col>
              <ModalForChannel
                show={channelShow}
                onHide={() => setChannelShow(false)}
              />
              <Col>
                <div
                  className='servicesButton'
                  onClick={() => setElectronicShow(true)}
                >
                  Electronic Message Signs
                </div>
              </Col>
              <ModalForElectronic
                show={electronicShow}
                onHide={() => setElectronicShow(false)}
              />
            </Row>
            <Row className='buttonRow'>
              <Col>
                <div
                  className='servicesButton'
                  onClick={() => setPoleShow(true)}
                >
                  Pole Signs
                </div>
              </Col>
              <ModalForPole show={poleShow} onHide={() => setPoleShow(false)} />
              <Col>
                <div
                  className='servicesButton'
                  onClick={() => setWallShow(true)}
                >
                  Wall Signs
                </div>
              </Col>
              <ModalForWall show={wallShow} onHide={() => setWallShow(false)} />
            </Row>
            <Row className='buttonRow'>
              <Col>
                <div
                  className='servicesButton'
                  onClick={() => setMonumentShow(true)}
                >
                  Monument Signs
                </div>
              </Col>
              <ModalForMonument
                show={monumentShow}
                onHide={() => setMonumentShow(false)}
              />
              <Col>
                <div
                  className='servicesButton'
                  onClick={() => setPylonShow(true)}
                >
                  Pylon Signs
                </div>
              </Col>
              <ModalForPylon
                show={pylonShow}
                onHide={() => setPylonShow(false)}
              />
            </Row>
            <Row className='buttonRow'>
              <Col>
                <div
                  className='servicesButton'
                  onClick={() => setPlaquesShow(true)}
                >
                  Plaques
                </div>
              </Col>
              <ModalForPlaques
                show={plaquesShow}
                onHide={() => setPlaquesShow(false)}
              />
              <Col>
                <div
                  className='servicesButton'
                  onClick={() => setWayShow(true)}
                >
                  Way Finding/Drive Thru Signs
                </div>
              </Col>
              <ModalForWay show={wayShow} onHide={() => setWayShow(false)} />
            </Row>
            <Row className='buttonRow'>
              <Col>
                <div
                  className='servicesButton'
                  onClick={() => setShoppingShow(true)}
                >
                  Shopping Center/ Tenant Signs
                </div>
              </Col>
              <ModalForShopping
                show={shoppingShow}
                onHide={() => setShoppingShow(false)}
              />
              <Col>
                <div
                  className='servicesButton'
                  onClick={() => setVinylShow(true)}
                >
                  Vinyl Signs
                </div>
              </Col>
              <ModalForVinyl
                show={vinylShow}
                onHide={() => setVinylShow(false)}
              />
            </Row>
          </Container>
        </Card>

        <div className='contentDiv'>
          <a href='tel:850-576-6847'>
            <Button variant='danger'>Call Us Today</Button>
          </a>
        </div>
      </Jumbotron>
    </div>
  );
};
export default Services;
