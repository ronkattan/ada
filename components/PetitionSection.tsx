import React from 'react';

const PetitionSection: React.FC = () => (
  <section
    id="petition"
    className="my-8 p-6 bg-red-100 rounded-lg shadow-md text-center"
  >
    <h2 className="text-3xl font-semibold mb-6">חתמו על העצומה</h2>
    <p className="mb-4 text-lg">
      השכונה שלנו בסכנה ואנחנו צריכים את עזרתכם. הצטרפו אלינו במאבק נגד תחנת
      הקצה המסכנת את איכות החיים שלנו.
    </p>
    <a
      href="https://www.petitionexample.com"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-red-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-700 transition-all"
    >
      חתמו על העצומה עכשיו
    </a>
  </section>
);

export default PetitionSection;
