import { Suspense, useState } from "react";
import Banner from "./components/Banner/Banner";
import CustomerTickets from "./components/CustomerTickets/CustomerTickets";
import Navbar from "./components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";

const loadTickets = async () => {
  const res = await fetch("./tickets.json");
  const data = await res.json();
  return data;
};

const ticketsPromise = loadTickets();

function App() {
  const [pendingTickets, setPendingTickets] = useState([]);
  return (
    <>
      <Navbar></Navbar>
      <Banner pendingTickets={pendingTickets}></Banner>
      <Suspense
        fallback={
          <div className="text-center mt-10">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        }
      >
        <CustomerTickets
          ticketsPromise={ticketsPromise}
          pendingTickets={pendingTickets}
          setPendingTickets={setPendingTickets}
        ></CustomerTickets>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;
