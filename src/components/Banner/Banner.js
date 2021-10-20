import React from 'react';
import './Banner.css';
import { Carousel } from 'react-bootstrap';
import img1 from '../../images/carousel -1.jpg';
import img2 from '../../images/carousel -2.jpg';
import img3 from '../../images/carousel -3.jpg';


const Banner = () => {

    return (
        <div>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-70"
                            src={img2}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Live Free</h3>
                            <p>Now matter what turns you weak, wake up, solve and live free</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-70"

                            src={img1}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Enjoy while alive</h3>
                            <p>Dont let your life down. Live while youre alive with no mental illness</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-70"
                            src={img3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Be Yourself</h3>
                            <p>Have a Me Time, Find yourself, Five how you feel and express. It Matters</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

        </div>
    );
};

export default Banner;