// components/NoRisk.js

import React from 'react';
import { useRouter } from 'next/router';

const NoRisk = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-lg max-w-xl mx-auto text-center">
      <div className="mb-6">
        <p className="text-lg text-gray-800">
          No risk identified.
        </p>
      </div>
      <button 
        className="px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-lg" 
        onClick={() => router.push('/')}
      >
        Go Back Home
      </button>
    </div>
  );
};

export default NoRisk;
