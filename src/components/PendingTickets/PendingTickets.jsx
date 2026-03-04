import React from 'react';
import PendingTicket from '../PendingTicket/PendingTicket';

const PendingTickets = ({pendingTickets}) => {
    return (
        <div className='space-y-6 mt-4'>
            {pendingTickets.map(ticket => <PendingTicket key={ticket.id} ticket={ticket}></PendingTicket>)}
        </div>
    );
};

export default PendingTickets;