import Button from '@restart/ui/esm/Button';
import React from 'react';
import './FreeConsultation.css';
import img from '../../images/consultants.jpg'
import { Table } from 'react-bootstrap';

const FreeConsultation = () => {
    return (
        <div>
            <section className="free-consultation">
                <div>
                    <img className="free-img" src={img} alt="" />
                </div>
                <div>
                    <h1 className="free-title">Join A Free Consultation</h1>
                    <p className="details-us">
                        Having been taboo for decades, if not centuries, mental health is now being widely discussed. During these exceptional times of pandemic, many of us are confronted with psychological problems related to isolation, anxiety, loneliness, frustrations, addictions, insecurities, depression and – issues regularly addressed by Krishnamurti. <br /> <br />Throughout his talks and discussions, Krishnamurti reveals that we are conditioned to have problems and that taking them personally may be a fundamental error. Moreover, the realisation that one’s loneliness. <br /> <br /> ‘It is no measure of health to be well-adjusted to a profoundly sick society’ is perhaps Krishnamurti’s best-known quote, shared widely across the internet. Although we cannot attribute these exact words to Krishnamurti. <br /> <br />So, if not in relation to society, how is health, specifically mental health, to be measured, and what does it mean to be truly healthy? <br /> <br />

                    </p>
                    <Button className="book-now-btn">Book Now</Button>
                </div>
            </section>

            <section className="free-table">
                <h1 className="mb-4 text-center">Todays Avaliable Slots</h1>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Consultant</th>
                            <th>Available Slot</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Dr. Martin Otto</td>
                            <td>10:30 AM</td>
                            <td><button className="book-now-btn" >Book Now</button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob Thornton</td>
                            <td>01:05 PM</td>
                            <td><button className="book-now-btn">Book Now</button></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Dr. Larry Burn</td>
                            <td>02:30 PM</td>
                            <td><button className="book-now-btn">Book Now</button></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Harry Stuard</td>
                            <td>04:30 PM</td>
                            <td><button className="book-now-btn">Book Now</button></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Dr. Selina Yusuf</td>
                            <td>06:30 PM</td>
                            <td><button className="book-now-btn">Book Now</button></td>
                        </tr>
                    </tbody>
                </Table>

            </section>

        </div>
    );
};

export default FreeConsultation;