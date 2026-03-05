import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <nav>
          <h6 className="footer-title">CS- Ticket System</h6>
          <p className="w-[350px] mx-auto">CS- Ticket System is a modern customer support and issue tracking platform designed to help businesses manage technical, billing, and account-related requests efficiently. The dashboard provides real-time visibility into open tickets, priority levels, and customer impact, allowing teams to quickly address high-priority incidents like system outages or security vulnerabilities.</p>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Our Mission</a>
          <a className="link link-hover">Contact Saled</a>
        </nav>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Products & Services</a>
          <a className="link link-hover">Customer Stories</a>
          <a className="link link-hover">Download Apps</a>
        </nav>
        <nav>
          <h6 className="footer-title">Information</h6>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Join Us</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social Links</h6>
          <a className="link link-hover"><FaSquareXTwitter className="inline mr-1" /> @CS — Ticket System</a>
          <a className="link link-hover"><FaLinkedin className="inline mr-1" /> @CS — Ticket System</a>
          <a className="link link-hover"><FaFacebook className="inline mr-1" /> @CS — Ticket System</a>
          <a className="link link-hover"><MdEmail className="inline mr-1" /> support@cst.com</a>
         
        </nav>
      </footer>
      <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4 justify-center">
        <aside className="flex flex-col items-center justify-center text-center">
          <p>
            © 2025 CS — Ticket System. All rights reserved.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
