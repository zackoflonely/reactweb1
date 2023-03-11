import Carousel from 'react-bootstrap/Carousel';
const Recom =()=>{
    return(
    <div id='Recom' className='recommended'>
    <div className='judulmenu'>RECOMENDATION</div>
    <Carousel fade className="recommenu">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="imageMenu/cappuccino.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Cappuccino</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="imageMenu/flat-white.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Flat White</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='imageMenu/affogato.jpg'
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Macchiato</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    )
}

export default Recom;