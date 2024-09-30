import React from 'react';

const videos = [
  'https://www.facebook.com/1010244640815280/videos/349901314779644/',
  'https://www.facebook.com/reel/1679056199552794',
  'https://www.facebook.com/1990919891337059/videos/3670879036462792/',
  'https://www.facebook.com/546162551/videos/1569955720586919/',
];

const videoEmbedUrls = videos.map((videoUrl) => {
  const baseUrl = 'https://www.facebook.com/plugins/video.php?href=';
  return `${baseUrl}${encodeURIComponent(videoUrl)}&show_text=false&width=500`;
});

const images = [
  '/images/image1.png',
  '/images/image2.png',
  '/images/image3.png',
];

const OppositionSection: React.FC = () => {
  return (
    <section
      id="opposition"
      className="my-8 p-6 bg-gray-100 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-semibold mb-4 text-red-700">
        התנגדות למסוף האוטובוסים בנחלת עדה
      </h2>

      <h3 className="text-xl font-semibold mb-4">תמונות מהשכונה</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <img
              src={src}
              alt={`Opposition ${index + 1}`}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>

      <h3 className="text-xl font-semibold mb-4">סרטונים מהמאבק</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {videoEmbedUrls.map((embedUrl, index) => (
          <div
            key={index}
            className="w-full rounded-lg shadow-md overflow-hidden"
          >
            <iframe
              src={embedUrl}
              width="100%"
              height="300"
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
              title={`Facebook Video ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OppositionSection;
