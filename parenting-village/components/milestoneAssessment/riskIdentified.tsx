// components/RiskIdentified.tsx

import React from 'react';
import Image from 'next/image';
import riskIcon from '@/public/Assets/riskIcon.png';

const RiskIdentified: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 border border-gray-300 rounded-lg max-w-xl mx-auto text-center shadow-lg">
      <div className="mb-8">
        <Image src={riskIcon} alt="Risk Icon" className="mx-auto mb-4" width={50} height={50} />
        <p className="text-xl font-semibold text-gray-800">
          There is Potential risk of disorder in your child.
          <br />
          But don’t worry, we got you covered!
        </p>
      </div>
      <button 
        className="px-8 py-3 text-lg font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-300 ease-in-out transform hover:scale-105" 
        onClick={() => alert('Consulting psychologist...')}
      >
        Consult Psychologist
      </button>
    </div>
  );
};

export default RiskIdentified;
