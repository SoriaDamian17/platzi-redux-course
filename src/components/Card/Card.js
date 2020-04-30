import React from 'react';
import PropsType from 'prop-types';

import './Card.scss';

const Card = ({title, description, image}) => (
    <div className="card">
        <div className="card-img">
            <img src={image} className="card-img-top hidden" alt="..." />
        </div>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description.substring(1, 150)}</p>
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