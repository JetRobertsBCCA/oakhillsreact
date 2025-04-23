import { Link } from '@remix-run/react';
// No longer need useState for accordion
// import { useState } from 'react';
// Import shared styles
import sharedStyles from './infopages.module.scss'; // Adjust path/name if needed
// Import FAQ-specific styles
import faqStyles from './faq.module.scss';
import logoImage from '../../src/about_us_pictures/oakhillshdlogo.png';

// --- FAQ Data ---
const faqData = [
    { question: 'What should I wear for riding?', answer: 'Long pants and closed-toe shoes with a small heel (like riding boots or hiking boots) are required. We recommend layering as the weather can change. Helmets are required while mounted (we may have some available, please inquire). Open-toed/heeled shoes (sandals, Crocs), rain boots, and muck boots are not permitted for riding.' },
    { question: 'What are the payment and deposit policies?', answer: 'Payment details vary by service. Lessons are typically paid via the website or text arrangement. Events/Parties often require a non-refundable deposit to reserve a date, with options to pay the balance online or potentially on-site. Please refer to the specific service details. We accept various methods including Venmo and CashApp.' },
    { question: 'Is there a waiver I need to sign?', answer: 'Yes, a liability waiver must be signed by all participants (or parents/guardians for minors) before participating in activities involving horses. You can typically find the waiver link on the relevant booking page.' },
    { question: 'What if it rains?', answer: 'Please contact us regarding weather concerns for specific events or lessons. Decisions about weather-related cancellations are made with safety as the top priority.' },
    { question: 'What facilities are available on the farm?', answer: 'We have designated restrooms available (see property map). Please note, entry into the private house is not permitted. RVs/campers are welcome in designated areas for certain events, but sewer hookups are not available.' },
    { question: 'Are food and drinks provided?', answer: 'For trail rides, Oak Hill typically provides one complimentary meal after the ride concludes. For other events, lessons, or camp, participants should bring their own snacks, lunches, and beverages. Bottled water is often available.' },
    // Add more FAQs here...
];
// ---------------

export default function FaqPage() {
  // No longer need state for accordion
  // const [openIndex, setOpenIndex] = useState<number | null>(null);
  // const handleToggle = (index: number) => {
  //   setOpenIndex(openIndex === index ? null : index);
  // };

  return (
    // Using shared styles for overall page layout
    <div className={sharedStyles.pageContainer}>
      <div className={sharedStyles.topStickyCover}></div>

      {/* --- Header (Shared Styles) --- */}
      <div className={sharedStyles.headerBar}>
         <div className={sharedStyles.headerContent}>
            <div className={sharedStyles.navRight}>
                <Link to="/" className={sharedStyles.navLinkRight}> Home </Link>
                <Link to="/horses" className={sharedStyles.navLinkRight}> Our Horses </Link>
                <Link to="/events" className={sharedStyles.navLinkRight}> Events </Link>
                <Link to="/contactus" className={sharedStyles.navLinkRight}> Contact Us </Link>
            </div>
          </div>
      </div>

      {/* --- FAQ Title (Shared Styles) --- */}
      <div className={sharedStyles.contactSection}>
        <div className={sharedStyles.contentWrapper}>
          <h1 className={sharedStyles.mainHeading}>Frequently Asked Questions</h1>
        </div>
      </div>

      {/* --- NEW: FAQ List Section (Always Visible) --- */}
      <div className={sharedStyles.contactSection}>
        {/* Container uses FAQ-specific styles for full-width layout */}
        <div className={faqStyles.faqListContainer}>
            {faqData.map((faq, index) => (
              // Each Q&A pair is an entry
              <div key={index} className={faqStyles.faqEntry}>
                <h3 className={faqStyles.faqQuestion}>{faq.question}</h3>
                <p className={faqStyles.faqAnswer}>{faq.answer}</p>
              </div>
            ))}
        </div>
      </div>


      {/* --- Footer (Shared Styles) --- */}
      <div className={sharedStyles.footerLogoContainer}>
        <img src={logoImage} alt="Oak Hill Farm Logo" className={sharedStyles.footerLogo} loading="lazy" />
      </div>
      <div className={sharedStyles.footerSection}>
         <div className={sharedStyles.footerLinks}>
            <Link to="/terms" className={sharedStyles.footerLink}> Terms & Conditions </Link>
            <Link to="/refund-policy" className={sharedStyles.footerLink}> Refund Policy </Link>
          </div>
          <div className={sharedStyles.copyright}>Copyright © 2025 Oak Hill Farm</div>
      </div>
    </div>
  );
}