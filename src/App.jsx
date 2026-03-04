import { Suspense } from "react";
import Banner from "./components/Banner/Banner"
import CustomerTickets from "./components/CustomerTickets/CustomerTickets"
import Navbar from "./components/Navbar/Navbar"

const loadTickets = async() =>{
  const res = await fetch('./tickets.json');
  const data = await res.json();
  return data;
}

const ticketsPromise = loadTickets();

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<div className="text-center mt-10"><span className="loading loading-bars loading-xl"></span></div>}>
        <CustomerTickets ticketsPromise={ticketsPromise}></CustomerTickets>
      </Suspense>
    </>
  )
}

export default App
