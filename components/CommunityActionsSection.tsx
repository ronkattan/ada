import React from 'react';

const CommunityActionsSection: React.FC = () => (
  <section
    id="community-actions"
    className="my-8 p-6 bg-gray-100 rounded-lg shadow-md"
  >
    <h2 className="text-2xl font-semibold mb-4">פעולות הקהילה</h2>
    <p className="mb-4">
      תושבי נחלת עדה יצאו להפגין והביעו את התנגדותם לקו 33 החדש. בשבוע שעבר
      השתתפו עשרות תושבים בהפגנה מול מיקום תחנת הקצה ברחוב שרעבי, והביעו את
      הדרישה לשנות את תכנון הקו. הייתה נוכחות משמעותית של התושבים והם מבקשים
      לשמור על השקט והביטחון בשכונתם.
    </p>
    <ul className="list-disc pl-5">
      <li className="mb-2">דרישה לביטול תחנת הקצה ברחוב שרעבי.</li>
      <li className="mb-2">
        קיום הפגנות מקומיות לשיבוש התנועה ולהעלאת המודעות לבעיות.
      </li>
      <li>שינוי הקו למסלול מעגלי לטובת צרכי התושבים.</li>
    </ul>
  </section>
);

export default CommunityActionsSection;
