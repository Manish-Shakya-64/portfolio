// components/Toast.jsx
import React, { useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const Toast = ({ message, type = 'success', onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000); // Auto-close after 3 seconds
        return () => clearTimeout(timer);
    }, [onClose]);

    const bgColor =
        type === 'success' ? 'bg-green-500/90 shadow-green-500/50' :
            type === 'error' ? 'bg-red-500/90 shadow-red-500/50' :
                'bg-gray-500/90 shadow-gray-500/50';

    return (
        <div
            className={`fixed bottom-6 right-6 z-50 px-6 py-3 rounded-full text-white flex items-center gap-3 shadow-lg ${bgColor} backdrop-blur-md shadow-md animate-fade-in`}
        >
            <AiOutlineInfoCircle className="text-xl" />
            <span className="font-medium">{message}</span>
            <button onClick={onClose} className="ml-2 text-xl hover:opacity-80">
                <IoMdClose />
            </button>
        </div>
    );
};

export default Toast;
