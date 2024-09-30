import React from 'react';
import { FaFacebook, FaWhatsapp, FaHandHoldingUsd } from 'react-icons/fa';

const SocialLinks: React.FC = () => {
  return (
    <section
      id="social-links"
      className="my-8 p-6 bg-blue-100 rounded-lg shadow-md text-center"
    >
      <h2 className="text-2xl font-semibold mb-6">קישורים חשובים</h2>
      <div className="flex justify-center items-center space-x-8 space-x-reverse">
        {/* Support Donation */}
        <a
          href="https://payboxapp.page.link/jnJaSsTeR5yC2jix9"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-600 hover:text-yellow-800 flex flex-col items-center"
        >
          <FaHandHoldingUsd size={36} />
          <span className="mt-2">תמכו בנו</span>
        </a>

        {/* WhatsApp Group */}
        <a
          href="https://chat.whatsapp.com/ECuDVTtztIrALAfXOc54jA"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 hover:text-green-800 flex flex-col items-center"
        >
          <FaWhatsapp size={36} />
          <span className="mt-2">WhatsApp</span>
        </a>

        {/* Facebook Group */}
        <a
          href="https://www.facebook.com/groups/2736214253220531"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 flex flex-col items-center"
        >
          <FaFacebook size={36} />
          <span className="mt-2">Facebook</span>
        </a>
      </div>
    </section>
  );
};

export default SocialLinks;
