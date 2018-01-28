import React from 'react';
import PropTypes from 'prop-types';

const MessageList = ({message, author}) => (
    <section id="message-list">
        <ul>
            {message.map(message => (
                <Messages 
                    key={message.id}
                    {...message}
                />
            ))}
        </ul>
    </section>
);

MessageList.PropTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired
        }).isRequired
    ).isRequired

}

export default MessageList;