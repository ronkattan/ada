// lib/gtag.js
export const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace this with your actual tracking ID

// Send a pageview event
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// Send an event
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
