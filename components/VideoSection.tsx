import React from 'react';

const VideoSection: React.FC = () => (
  <section
    id="video-section"
    className="my-8 p-6 bg-gray-100 rounded-lg shadow-md text-center"
  >
    <h2 className="text-3xl font-semibold mb-6">המאבק שלנו - וידאו מהמחאה</h2>
    <video controls className="w-full max-w-4xl mx-auto rounded-lg shadow-lg">
      <source src="/videos/video1.mp4" type="video/mp4" />
      הדפדפן שלך לא תומך בנגן וידאו.
    </video>
  </section>
);

export default VideoSection;
