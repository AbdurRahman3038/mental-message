import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetails = () => {

    const { serviceId } = useParams();
    const [details, setDetails] = useState({});

    useEffect(() => {
        fetch('/mentalMessage.json')
            .then(res => res.json())
            .then(data => {
                const matchedDetail = data.find((details) => details.id == serviceId);
                if (matchedDetail) {
                    setDetails(matchedDetail);
                }
            });

    }, [])

    return (
        <div>
            <h3 className="text-center mt-4 text-success">Service details of "{details.title}" </h3>
            <Card className="details-card">
                <Card.Img variant="top" className="img-style" src={details.img} />
                <Card.Body>
                    <Card.Title>{details.title}</Card.Title>
                    <Card.Text>
                        {details.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link to="/not-found"><button className="book-appointment">Book <i class="far fa-calendar-check"></i></button></Link>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default ServiceDetails;