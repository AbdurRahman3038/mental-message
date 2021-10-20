import React, { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./mentalMessage.json')
            .then(res => res.json())
            .then(data => setServices(data));

    }, [])

    return (

        <div>
            <h1 className="text-center mt-5 text-success ">Book An Appointment!</h1>

            <CardGroup className="card-container">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </CardGroup>
        </div>
    );
};

export default Services;