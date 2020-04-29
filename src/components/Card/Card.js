import React from 'react';
import PropsType from 'prop-types';

const Card = ({title, description, src}) => (
    <div className="card">
        <img src={src} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
        </div>
    </div>
);

Card.defaultProps = {
    title: '',
    description: ''
};

Card.propsType = {
    title: PropsType.string,
    description: PropsType.string
};

export default Card;