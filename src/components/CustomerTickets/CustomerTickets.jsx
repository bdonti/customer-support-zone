import React, { use, useState } from "react";
import CustomerTicket from "../CustomerTicket/CustomerTicket";
import PendingTickets from "../PendingTickets/PendingTickets";

const CustomerTickets = ({
  ticketsPromise,
  pendingTickets,
  setPendingTickets,
  resolvedTickets,
  setResolvedTickets,
}) => {
  const initialTickets = use(ticketsPromise);
  const [tickets, setTickets] = useState(initialTickets);

  return (
    <div className="mt-10 max-w-[1200px] mx-auto flex justify-between gap-10 px-4">
      <div>
        <h1 className="text-2xl">Customer Tickets</h1>
        <div className="grid grid-cols-2 items-center gap-4">
          {tickets.map((ticket) => (
            <CustomerTicket
              key={ticket.id}
              ticket={ticket}
              pendingTickets={pendingTickets}
              setPendingTickets={setPendingTickets}
              tickets={tickets}
              setTickets={setTickets}
            ></CustomerTicket>
          ))}
        </div>
      </div>
      <div className="my-2">
        <div className="my-2">
          <h1 className="text-2xl font-bold">Ticket Status</h1>
          {pendingTickets.length > 0 ? (
            <PendingTickets
              resolvedTickets={resolvedTickets}
              setResolvedTickets={setResolvedTickets}
              tickets={tickets}
              setTickets={setTickets}
              pendingTickets={pendingTickets}
              setPendingTickets={setPendingTickets}
            ></PendingTickets>
          ) : (
            <p>Select a ticket to add to Task Status</p>
          )}
        </div>
        <div className="my-2">
          <h1 className="text-2xl font-bold">Resolved Task</h1>
          <p>No Resolved task yet</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerTickets;
