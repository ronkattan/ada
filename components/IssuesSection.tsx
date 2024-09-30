import React from 'react';

const IssuesSection: React.FC = () => (
  <section id="issues" className="my-8 p-6 bg-gray-100 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-4">הבעיות</h2>
    <p className="mb-4">קו 33 מביא לבעיות רבות בשכונתנו...</p>
    <div className="media-content">
      <img
        src="/images/bus_small_street.jpg"
        alt="אוטובוס ברחוב צר"
        className="mb-4 rounded-md"
      />
      <video controls className="w-full rounded-md">
        <source src="/videos/bus_danger.mp4" type="video/mp4" />
        הדפדפן שלך לא תומך בנגן וידאו.
      </video>
    </div>
  </section>
);

export default IssuesSection;
