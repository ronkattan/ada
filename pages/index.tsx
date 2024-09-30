import Head from 'next/head';
import Header from '../components/Header';
import IssuesSection from '../components/IssuesSection';
import ImpactSection from '../components/ImpactSection';
import CallToAction from '../components/CallToAction';
import Navigation from '../components/Navigation';
import SocialLinks from '../components/SocialLinks';
import OppositionSection from '../components/OppositionSection';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>נחלת עדה בסכנה - קו 33</title>
        <meta
          name="description"
          content="מידע על הבעיות שנגרמות בעקבות קו 33 בשכונת נחלת עדה."
        />
      </Head>
      <Navigation />
      <div className="container max-w-4xl mx-auto p-4">
        <Header />
        <IssuesSection />
        <ImpactSection />
        <CallToAction />
        <OppositionSection /> {/* New section for opposition content */}
        <SocialLinks />
      </div>
    </>
  );
};

export default Home;
