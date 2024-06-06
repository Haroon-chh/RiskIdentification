// components/NoRisk.tsx

import React from 'react';
import Link from 'next/link';

const NoRisk: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 border border-gray-300 rounded-lg max-w-xl mx-auto text-center shadow-lg mt-10">
      <div className="mb-6">
        <p className="text-xl font-semibold text-gray-800">
          No risk identified.
        </p>
      </div>
      <Link href="/" passHref>
        <button 
          className="px-8 py-3 text-lg font-medium text-white bg-sky-950 hover:bg-blue-600 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default NoRisk;
