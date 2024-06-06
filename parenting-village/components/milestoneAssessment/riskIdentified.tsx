// components/RiskIdentified.tsx

import React from 'react';
import Image from 'next/image';
import riskIcon from '@/public/Assets/riskIcon.png';
import BookHeader from '@/components/milestoneAssessment/book';

const RiskIdentified: React.FC = () => {
  return (
    <div>
    <div className="flex flex-col items-center justify-center p-8 border border-gray-300 rounded-lg max-w-xl mx-auto text-center shadow-lg mt-10">
      <div className="mb-8">
        <Image src={riskIcon} alt="Risk Icon" className="mx-auto mb-4" width={50} height={50} />
        <p className="text-xl font-semibold text-gray-800">
          There is Potential risk of disorder in your child.
          <br />
          But don’t worry, we got you covered!
        </p>
      </div>
            
     
    </div>
    <BookHeader />
    </div>
  );
};

export default RiskIdentified;
