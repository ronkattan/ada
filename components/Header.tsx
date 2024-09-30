import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => (
  <header
    id="header"
    className="relative w-full h-[70vh] text-white text-center overflow-hidden"
  >
    {/* Background Image */}
    <div className="absolute inset-0 overflow-hidden">
      <Image
        src="/images/image2.png" // Use the new image for the background
        alt="Nahalat Ada Protest"
        layout="fill"
        objectFit="cover"
        quality={90}
        className="opacity-80"
      />
    </div>

    {/* Dark Overlay to Improve Text Visibility */}
    <div className="absolute inset-0 bg-black opacity-50"></div>

    {/* Text Content */}
    <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
      <h1 className="text-6xl font-bold mb-4 text-shadow-lg">נחלת עדה בסכנה</h1>
      <p className="text-3xl max-w-2xl text-shadow-lg">
        שמים סוף להקמת המסוף בנחלת עדה!
      </p>
    </div>
  </header>
);

export default Header;
