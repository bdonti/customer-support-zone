import React from 'react';

const PendingTicket = ({ticket, setResolvedTickets, resolvedTickets, tickets, setTickets, pendingTickets, setPendingTickets}) => {
    const handleComplete = () => {
        setResolvedTickets([...resolvedTickets, ticket]);
        setTickets(tickets.filter(t => t.id !== ticket.id));
        setPendingTickets(pendingTickets.filter(t => t.id !== ticket.id));
    };
    return (
        <div className='space-y-2'>
            <h3 className='text-xl mb-2'>{ticket.title}</h3>
            <button onClick={handleComplete} className="btn btn-active btn-success w-full">Complete</button>
        </div>
    );
};

export default PendingTicket;