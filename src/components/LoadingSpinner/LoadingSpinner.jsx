import React from 'react';

const LoadingSpinner = () => {
    return (
        <button type="button" className="bg-indigo-500 mt-24" disabled>
            <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
            </svg>
            Processing...
        </button>
    );
};

export default LoadingSpinner;