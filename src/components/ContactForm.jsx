// import emailjs from "emailjs-com";
// import { useState } from "react";

// const ContactForm = () => {
//   const [sent, setSent] = useState(false);

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm(
//       "YOUR_SERVICE_ID",   // Step 3
//       "YOUR_TEMPLATE_ID",  // Step 4
//       e.target,
//       "YOUR_PUBLIC_KEY"    // Step 5
//     ).then(() => {
//       setSent(true);
//       e.target.reset();
//     }).catch((err) => console.error(err));
//   };

//   return (
//     <form
//       onSubmit={sendEmail}
//       className="max-w-xl space-y-4 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10"
//     >
//       <input
//         name="name"
//         required
//         placeholder="Your Name"
//         className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white"
//       />

//       <input
//         name="email"
//         type="email"
//         required
//         placeholder="Your Email"
//         className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white"
//       />

//       <textarea
//         name="message"
//         required
//         rows="4"
//         placeholder="Your Message"
//         className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white"
//       />

//       <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl w-full">
//         Send Message
//       </button>

//       {sent && (
//         <p className="text-green-400 text-sm text-center">
//           Message sent successfully!
//         </p>
//       )}
//     </form>
//   );
// };

export default ContactForm;

