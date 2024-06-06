// components/Book.tsx

import React from 'react';
import headerImage from '@/public/Assets/child+psy.jpg';

const Book: React.FC = () => {
  return (
    <div
      className="relative mt-10 bg-cover bg-center flex justify-center items-center text-white text-4xl font-bold min-h-[270px] text-shadow"
      style={{ backgroundImage: `url(${headerImage.src})`, textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
    >
        Consult Psychologist
      <div className="absolute bottom-0 transform translate-y-1/2">
        <button 
          className="px-8 py-3 text-lg font-medium text-white bg-sky-950 hover:bg-blue-600 rounded-lg transition duration-300 ease-in-out transform hover:scale-105" 
          onClick={() => alert('Consulting psychologist...')}
        >
          Book a Session
        </button>
      </div>
    </div>
  );
};

export default Book;
