
import { FaTimesCircle } from "react-icons/fa";
const MessageSucces = ({ message, onClose }) => {
if (!message) return null;

  return (
    <div className="relative bg-green-100 border border-green-300 text-green-800 px-4 py-3 rounded mb-4">
      <p className="text-center">{message}</p>
      <button
        onClick={onClose}
        className="absolute top-1 right-2 text-red-500 hover:text-red-700 text-lg font-bold"
        aria-label="Fermer">
        <FaTimesCircle/>
      </button>
    </div>
  );
};

export default MessageSucces;
