import React from  'react';
import {Container,Row,Col,ListGroup,ListGroupItem} from 'reactstrap'
import logo from '../../assets/images/res-logo.png'
import '../../styles/footer.css'
import { Link } from 'react-router-dom';
const Footer=()=>{
    return <footer className='footer'>
        <Container>
            <Row>

              <Col lg='3' md='4' sm='6'> 
              <div className="  footer_logo text-start">
                <img src={logo} alt="logo" />
                <h5>Tasty Treat</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
               </div>
              </Col>

              <Col lg='3' md='4' sm='6'> 
              <h5 className='footer_title'>Delivery Time</h5>
              <ListGroup className='delivery_time-list' >
                <ListGroupItem className='delivery_time-item border-0 '>
                    <span>Sunday - Thursday</span>
                    <p>10:00am - 11:00pm</p>
                </ListGroupItem>
                <ListGroupItem className='delivery_time-item border-0 '>
                    <span>Sunday - Thursday</span>
                    <p>Off day</p>
                </ListGroupItem>
              </ListGroup>
              </Col>

              <Col lg='3' md='4' sm='6'>
              <h5 className='footer_title'>Contact</h5>
              <ListGroup className='delivery_time-list' >
              <ListGroupItem className='delivery_time-item border-0 '>
                   <span>Location:BBD Bazar, Opposite Crown Mall, Dubai</span>
                    </ListGroupItem>
                <ListGroupItem className='delivery_time-item border-0 '>
                   <span>Phone: 7054354790</span>
                    </ListGroupItem>
                <ListGroupItem className='delivery_time-item border-0 '>
                   <span>Email: bitry21036001300@goel.edu.in</span>
                </ListGroupItem>
              </ListGroup>  
              </Col>

              <Col lg='3' md='4' sm='6'>
                <h5 className='footer_title'>Newsletter</h5> 
              <p>Subscribe our Newsletter</p>
              <div className="newsletter">
             <input type="email" placeholder='Enter your email'/>
             <span><i class="ri-send-plane-line"></i></span>
              </div>
               </Col>
            </Row>
            <Row className='mt-5'>
                <Col lg='6' md="6">
                <p className='copyright_text'>Copyright - 2023, Website made by Rohit Yadav .All Rights Reserved.</p>
                </Col>
                <Col lg='6' md='6'>
                <div className="social_links d-flex align-items-center gap-4 justify-content-end">
                    <p className='m-0'>Follow:</p>
                    <span><Link to="https://www.facebook.com/jayashkumar.yadav.5"><i className="ri-facebook-line"></i></Link></span>
                    <span><Link to="https://github.com/rohityadav7054"><i className="ri-github-line"></i></Link></span>
                    <span><Link to="https://www.linkedin.com/in/rohit-yadav-733394258/"><i className="ri-linkedin-line"></i></Link></span>
                    <span><Link to='https://www.instagram.com/itsme_jayash/'><i className="ri-instagram-line"></i></Link></span>
                </div>
                </Col>
            </Row>
        </Container>
    </footer>
    
}
export default Footer;