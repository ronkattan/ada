import React from 'react';
import Image from 'next/image';

const MediaSection: React.FC = () => (
  <section id="media" className="my-8 p-6 bg-gray-100 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-4">תמונות וסרטונים מהמאבק</h2>

    {/* Images Section */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      <div className="overflow-hidden rounded-lg shadow-md">
        <Image
          src="/images/eyeon_israel_image1.jpg" // Replace with your hosted image URLs
          alt="מחאה בשכונת נחלת עדה"
          width={600}
          height={400}
          className="w-full h-auto object-cover"
        />
      </div>
      {/* Additional images */}
    </div>

    {/* Videos Section */}
    <h3 className="text-xl font-semibold mb-4">סרטונים מהמאבק</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <iframe
        src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F1010244640815280%2Fvideos%2F349901314779644%2F"
        width="100%"
        height="300"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
        className="w-full rounded-lg shadow-md"
        title="Protest Video 1"
      />
      {/* Additional embedded videos */}
    </div>
  </section>
);

export default MediaSection;
