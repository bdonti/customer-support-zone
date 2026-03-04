import React, { use } from "react";
import CustomerTicket from "../CustomerTicket/CustomerTicket";

const CustomerTickets = ({ ticketsPromise }) => {
  const tickets = use(ticketsPromise);
  return (
    <div className="mt-10 max-w-[1200px] mx-auto">
      <div>
        <h1 className="text-2xl">Customer Tickets</h1>
        <div className="grid grid-cols-2 items-center gap-4">
          {tickets.map((ticket) => (
            <CustomerTicket key={ticket.id} ticket={ticket}></CustomerTicket>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerTickets;
