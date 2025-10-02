import { useState } from "react";
import { email } from "../../utils/constants";

export default function ContactMe() {
  const [message, setMessage] = useState("");

  const handleClick = () => {
    if (!message) return;

    const subject = "Contact from my website"; // you can customize this
    const body = encodeURIComponent(message);

     window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
        subject
      )}&body=${body}`,
      "_blank"
    );
  };

  return (
    <section>
      <h4>ContactMe</h4>
      <h4>Number: 1231223123</h4>
      <h4>email: assdsadaq@gmail.com</h4>

      <h4>{new Date().getFullYear()}</h4>

      <input
        type="email"
        placeholder="Enter message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border p-2 rounded"
      />
      <button
        onClick={handleClick}
        className="ml-2 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Send Email
      </button>
    </section>
  );
}
