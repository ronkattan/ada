import React from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import IssuesSection from '../components/IssuesSection';
import MediaGallery from '../components/MediaGallery';
import CommunityActionsSection from '../components/CommunityActionsSection';
import PetitionSection from '../components/PetitionSection';
import SocialLinks from '../components/SocialLinks';
import VideoSection from '../components/VideoSection'; // New Video Section

const Home: React.FC = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <Navigation />

      {/* Header Section */}
      <Header />

      {/* Issues Section */}
      <IssuesSection />

      {/* Video Section */}
      <VideoSection />

      {/* Media Gallery Section */}
      <MediaGallery />

      {/* Community Actions Section */}
      <CommunityActionsSection />

      {/* Petition Section */}
      <PetitionSection />

      {/* Social Links Section */}
      <SocialLinks />
    </div>
  );
};

export default Home;
