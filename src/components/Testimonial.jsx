import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function Testimonial() {
  return (
    <div className='container testimonial shadow-4'>
        <Carousel className='pt-5 px-5 '>
    <Carousel.Item>
      <Container>
        <div className='my-5'>
        <div className='d-flex justify-content-center me-5'>
            <img src="https://avada.com/wp-content/uploads/2018/11/person_sample_2-400x400.jpg" alt="" />
        </div>
        <div className='d-flex justify-content-center'>
      <h4>Modern Websites1</h4>
        </div>
        <div className='d-flex justify-content-center'>
        <h6>Co-Worker</h6>
        </div>
        <div className='d-flex justify-content-around'>
        <p>Website adaptable to all devices ui components and animated interactions.</p>
        </div>
        <div className='d-flex justify-content-around'>
        <a><i class="uil uil-star"></i>
        <i class="uil uil-star"></i>
        <i class="uil uil-star"></i>
        <i class="uil uil-star"></i>
        <i class="uil uil-star"></i>
        </a>
        </div></div>
      </Container>
      <Carousel.Caption>
       
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <Container> <div className='my-5'>
    <div className='d-flex justify-content-center'>
            <img src="https://avada.com/wp-content/uploads/2018/11/person_sample_2-400x400.jpg" alt="" />
        </div>
        <div className='d-flex justify-content-center '>
      <h4>Modern Websites2</h4>
        </div>
        <div className='d-flex justify-content-center'>
        <h6>Co-Worker</h6>
        </div>
        <div className='d-flex justify-content-around'>
        <p>Website adaptable to all devices ui components and animated interactions.</p>
        </div>
        <div className='d-flex justify-content-around'>
        <a><i class="uil uil-star"></i>
        <i class="uil uil-star"></i>
        <i class="uil uil-star"></i>
        <i class="uil uil-star"></i>
        <i class="uil uil-star"></i>
        </a>
        </div></div></Container>
      
    </Carousel.Item>
    <Carousel.Item>
    
      <Container> <div className='my-5'>
      <div className='d-flex justify-content-center me-5'>
            <img src="https://avada.com/wp-content/uploads/2018/11/person_sample_2-400x400.jpg" alt="" />
        </div>
        <div className='d-flex justify-content-center'>
      <h4>Modern Websites3</h4>
        </div>
        <div className='d-flex justify-content-center'>
        <h6>Client</h6>
        </div>
        <div className='d-flex justify-content-around'>
        <p>Website adaptable to all devices ui components and animated interactions.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, in corporis deserunt incidunt, id officiis cum delectus odio rem, laborum nostrum praesentium non ullam quod sit perferendis. Quidem, ab aspernatur.
        </p>
        </div>
        <div className='d-flex justify-content-around'>
        <a><i class="uil uil-star"></i>
        <i class="uil uil-star"></i>
        <i class="uil uil-star"></i>
        <i class="uil uil-star"></i>
        <i class="uil uil-star"></i>
        </a>
        </div></div></Container>
    </Carousel.Item>
  </Carousel>
    </div>
  )
}

export default Testimonial