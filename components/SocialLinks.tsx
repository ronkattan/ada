import React from 'react';
import { FaFacebook, FaWhatsapp, FaDonate } from 'react-icons/fa';

const SocialLinks: React.FC = () => (
  <div className="my-8 p-6 bg-blue-50 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-4">הצטרפו ותמכו במאבק שלנו</h2>
    <div className="flex flex-wrap gap-4">
      <a
        href="https://www.facebook.com/groups/2736214253220531/?utm_source=facebook&utm_medium=social&utm_campaign=save_our_neighborhood"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        <FaFacebook className="mr-2" />
        קבוצת פייסבוק
      </a>

      <a
        href="https://chat.whatsapp.com/ECuDVTtztIrALAfXOc54jA/?utm_source=whatsapp&utm_medium=social&utm_campaign=save_our_neighborhood"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
      >
        <FaWhatsapp className="mr-2" />
        קבוצת וואטסאפ
      </a>

      <a
        href="https://payboxapp.page.link/jnJaSsTeR5yC2jix9/?utm_source=website&utm_medium=button&utm_campaign=save_our_neighborhood"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
      >
        <FaDonate className="mr-2" />
        תמיכה במאבק
      </a>
    </div>
  </div>
);

export default SocialLinks;
