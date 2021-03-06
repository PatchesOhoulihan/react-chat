import React from 'react';
import PropTypes from 'prop-types';

const AddMessage = ({message, author}) => (
    <p>
        <i>{author}</i>: {message}
    </p>
);


AddMessage.PropTypes = {
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}

export default AddMessage