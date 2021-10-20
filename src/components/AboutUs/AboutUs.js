import React from 'react';
import './AboutUs.css';
import img from '../../images/about-us.jpg'
import Button from '@restart/ui/esm/Button';

const AboutUs = () => {
    return (
        <div className="about-us">
            <div >
                <img src={img} className="about-img" alt="" />
            </div>

            <div className="about-desc">

                <h1 className="about-title text-center text-success">About Us</h1>
                <p className="details-us">
                    We believe in living for more, living a life worth living. Building hope in the hopeless. Finding worth in the worthless. Choosing to live destiny conscious<br /> <br />To end powerlessness in youths caused by poverty, mental illness, and social inequality
                    And empower them, regardless of background, circumstance, or history to fulfill their God given potential <br /> <br /> ‘It is no measure of health to be well-adjusted to a profoundly sick society’ is perhaps Krishnamurti’s best-known quote, shared widely across the internet. Although we cannot attribute these exact words to Krishnamurti. <br /> <br />So, if not in relation to society, how is health, specifically mental health, to be measured, and what does it mean to be truly healthy? <br /> <br />

                </p>
                <Button className="book-now-btn">Read More</Button>

            </div>
        </div>
    );
};

export default AboutUs;