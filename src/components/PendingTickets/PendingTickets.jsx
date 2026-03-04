import React from "react";
import PendingTicket from "../PendingTicket/PendingTicket";

const PendingTickets = ({
  pendingTickets,
  resolvedTickets,
  setResolvedTickets,
  tickets,
  setTickets,
  setPendingTickets,
}) => {
  return (
    <div className="space-y-6 mt-4">
      {pendingTickets.map((ticket) => (
        <PendingTicket
          key={ticket.id}
          ticket={ticket}
          resolvedTickets={resolvedTickets}
          setResolvedTickets={setResolvedTickets}
          tickets={tickets}
          setTickets={setTickets}
          pendingTickets={pendingTickets}
          setPendingTickets={setPendingTickets}
        ></PendingTicket>
      ))}
    </div>
  );
};

export default PendingTickets;
