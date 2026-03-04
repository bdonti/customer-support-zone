import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const CustomerTicket = ({
  ticket,
  pendingTickets,
  setPendingTickets,
  tickets,
  setTickets,
}) => {
  const handleTicketClick = () => {
    const isAlreadyPending = pendingTickets.find((t) => t.id === ticket.id);

    if (isAlreadyPending) {
      toast("This ticket is already in pending status!");
      return;
    }

    const updatedTickets = tickets.map((t) =>
      t.id === ticket.id ? { ...t, status: "Pending" } : t,
    );
    setTickets(updatedTickets);
    const updatedTicket = { ...ticket, status: "Pending" };
    setPendingTickets([...pendingTickets, updatedTicket]);

    toast.success("Ticket added to pending status!");
  };

  const { id, title, description, customer, priority, status, createdAt } =
    ticket;

  const badgeClass =
    status === "Open"
      ? "badge-info"
      : status === "Pending"
        ? "badge-warning"
        : "badge-neutral";

  return (
    <div
      onClick={handleTicketClick}
      className="cursor-default hover:cursor-pointer card bg-base-100 w-96 shadow-sm"
    >
      <div className="card-body">
        <div className="flex justify-between">
          <div>
            <h2 className="card-title">{title}</h2>
          </div>
          <div className={`badge ${badgeClass} px-2 py-2 font-bold`}>
            {status}
          </div>
        </div>
        <p>{description}</p>
        <div className="my-2 flex justify-between items-center">
          <div className="space-x-1.5">
            <span>#{id}</span>
            <span
              className={`${priority === "High" ? "text-[#F83044]" : priority === "Medium" ? "text-[#FEBB0C]" : "text-[#000000]"}`}
            >
              {priority} Priority
            </span>
          </div>
          <div className="flex justify-between items-center gap-3">
            <p className="text-sm text-gray-500">{customer}</p>
            <p className="text-xs text-gray-400">
              <FaCalendarAlt className="inline mr-1" />
              {createdAt}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTicket;
