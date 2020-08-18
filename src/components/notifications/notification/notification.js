import React from 'react';


export const Notification = ({ notification }) => {

    const { type, message } = notification;

    return (
        <div className="notification">
            <p>{ message }</p>
            <div className={`statusBar`} />
        </div>
    );

};

