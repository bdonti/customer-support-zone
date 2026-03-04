import React from 'react';
import { MdOutlineDownloadDone } from 'react-icons/md';

const ResolvedTickets = ({resolvedTickets}) => {
    return (
        <div>
            {
                resolvedTickets.map(ticket => <h1 key={ticket.id} className='mb-2 text-xl'><MdOutlineDownloadDone className="inline mr-2" />{ticket.title}</h1>)
            }
        </div>
    );
};

export default ResolvedTickets;