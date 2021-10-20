import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {

    const { id, title, description, img } = props.service;

    return (
        <div>
            <Card>
                <Card.Img variant="top" className="img-style" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="card-footer">
                    <Link to={`/booking/${id}`}><button className="book-appointment">Book Appointment <i class="far fa-calendar-check"></i></button></Link>
                </Card.Footer>
            </Card>

        </div>
    );
};

export default Service;