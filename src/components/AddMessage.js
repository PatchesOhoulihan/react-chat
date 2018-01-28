import React from 'react';
import PropTypes from 'prop-types';

const Message = (props) => {
    let input

    return (
        <section id="new-message">
            <input 
                onKeyPress={(e) => {
                    if(e.key === 'Enter') {
                        props.dispatch(input.value, 'Me');
                        input.value = '';
                    }
                }}
                type='text'
                ref={(node) => {
                    input = node;
                }}
            />
        </section>
    );
}

Message.PropTypes = {
    dispatch: PropTypes.func.isRequired
}

export default Message;
