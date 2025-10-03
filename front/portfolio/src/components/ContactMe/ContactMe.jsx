import { useState } from "react";
import { email, number } from "../../utils/constants";
import { useLanguage } from "../Language/Language";
import { FaRegCopyright, FaTrademark } from "react-icons/fa";

export default function ContactMe() {
  const [message, setMessage] = useState("");
  const { sentences } = useLanguage();

  const handleClick = () => {
    if (!message) return;

    const subject = "";
    const body = encodeURIComponent(message);

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
        subject
      )}&body=${body}`,
      "_blank"
    );
  };

  return (
    <section className="flex flex-col items-center justify-center text-center mb-10" id="contact">
      <h2 className="training__title mb-5">{sentences?.contactMe} </h2>
      <div className="max-w-lg w-full">
        <p className="mb-2">Number: {number}</p>
        <p className="mb-2">Email: {email}</p>

        <textarea
          placeholder="Enter your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border p-3 rounded w-full h-48 resize-none"
        />
        <button
          onClick={handleClick}
          className="mt-4 w-full hover-style_v2 hover-style_v2--normal"
        >
          Send Email
        </button>

        <div className="mt-6 flex items-center justify-center gap-1 text-sm text-gray-600">
          <FaRegCopyright />
          <span>{new Date().getFullYear()} All rights reserved</span>
          <FaTrademark className="ml-1" />
        </div>
      </div>
    </section>
  );
}
