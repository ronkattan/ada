import React from 'react';
import Image from 'next/image';

const MediaGallery: React.FC = () => (
  <section
    id="media-gallery"
    className="my-8 p-6 bg-white rounded-lg shadow-md"
  >
    <h2 className="text-3xl font-semibold mb-4 text-center">
      תמונות וסרטונים מהמחאה
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="rounded-lg overflow-hidden shadow-md">
        <Image
          src="/images/image1.png"
          alt="Protest in Nahalat Ada"
          width={600}
          height={400}
          className="object-cover w-full h-full"
        />
      </div>
      <iframe
        src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F1010244640815280%2Fvideos%2F349901314779644%2F"
        width="100%"
        height="300"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
        className="w-full rounded-lg shadow-md"
        title="Protest Video"
      />
      {/* Additional images/videos */}
    </div>
  </section>
);

export default MediaGallery;
