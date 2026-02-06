import { useState } from "react";
import MailIcon from "../components/MailIcon";

const EmailIcon = ({ email = "syedshadaab2@gmail.com" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email); // Copy email to clipboard
    setCopied(true);

    // Hide tooltip after 2 seconds
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative flex flex-col items-center">
      <button
        onClick={handleCopy}
        className="w-8 h-8 text-slate-400 hover:text-white transition"
        aria-label="Copy email to clipboard"
      >
        <MailIcon className="w-8 h-8" />
      </button>

      {/* Tooltip */}
      {copied && (
        <span className="absolute -top-6 bg-gray-800 text-white text-xs rounded px-2 py-1">
          Copied!
        </span>
      )}
    </div>
  );
};

export default EmailIcon;
