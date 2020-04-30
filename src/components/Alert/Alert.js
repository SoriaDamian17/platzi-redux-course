import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({text}) => (
    <div className="alert alert-primary" role="alert">
        {text}
    </div>
);

Alert.defaultProps = {
    text: 'There are not results!!'
};

Alert.propTypes = {
    text: PropTypes.string
};

export default Alert;