import React from 'react';

const IssuesSection: React.FC = () => (
  <section id="issues" className="my-8 p-6 bg-gray-100 rounded-lg shadow-md">
    <h2 className="text-3xl font-semibold mb-4 text-center">הבעיות העיקריות</h2>
    <p className="mb-4 text-lg">
      קו 33 מביא לבעיות רבות בשכונתנו, כולל רעש, זיהום אוויר וסיכון בטיחותי
      לילדים ברחובות הצרים. יותר מ-120 אוטובוסים עוברים מדי יום דרך שכונה קטנה
      זו, מה שמסכן את איכות החיים של התושבים.
    </p>
    <ul className="list-disc text-lg pl-6 space-y-3">
      <li>רעש וזיהום אוויר כתוצאה מהמעבר של מספר רב של אוטובוסים.</li>
      <li>סיכון בטיחותי לילדים ברחובות הצרים.</li>
      <li>שימוש בתחנות קצה במקומות שאינם מותאמים לכך.</li>
    </ul>
  </section>
);

export default IssuesSection;
