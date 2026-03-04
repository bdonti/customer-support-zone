import React from 'react';

const PendingTicket = ({ticket}) => {
    return (
        <div className='space-y-2'>
            <h3 className='text-xl mb-2'>{ticket.title}</h3>
            <button className="btn btn-active btn-success w-full">Complete</button>
        </div>
    );
};

export default PendingTicket;