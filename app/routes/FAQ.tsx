import { Link } from '@remix-run/react';
import Styles from './infopages.module.scss';
import navbar from './navbarglobal.module.scss';

import logoImage from '../../src/about_us_pictures/oakhillshdlogo.png';

//IF YOU NEED TO ADD MORE JSUT ADD HERE much simpler
const faqData = [
    { question: 'What should I wear for riding?', answer: 'Long pants and closed-toe shoes with a small heel (like riding boots or hiking boots) are required. We recommend layering as the weather can change. Helmets are required while mounted (we may have some available, please inquire). Open-toed/heeled shoes (sandals, Crocs), rain boots, and muck boots are not permitted for riding.' },
    { question: 'What are the payment and deposit policies?', answer: 'Payment details vary by service. Lessons are typically paid via the website or text arrangement. Events/Parties often require a non-refundable deposit to reserve a date, with options to pay the balance online or potentially on-site. Please refer to the specific service details. We accept various methods including Venmo and CashApp.' },
    { question: 'Is there a waiver I need to sign?', answer: 'Yes, a liability waiver must be signed by all participants (or parents/guardians for minors) before participating in activities involving horses. You can typically find the waiver link on the relevant booking page.' },
    { question: 'What if it rains?', answer: 'Please contact us regarding weather concerns for specific events or lessons. Decisions about weather-related cancellations are made with safety as the top priority.' },
    { question: 'What facilities are available on the farm?', answer: 'We have designated restrooms available (see property map). Please note, entry into the private house is not permitted. RVs/campers are welcome in designated areas for certain events, but sewer hookups are not available.' },
    { question: 'Are food and drinks provided?', answer: 'For trail rides, Oak Hill typically provides one complimentary meal after the ride concludes. For other events, lessons, or camp, participants should bring their own snacks, lunches, and beverages. Bottled water is often available.' },

];

export default function FaqPage() {
  return (
    <div className={navbar.pageContainer}>
        <div className={navbar.headerBar}>
           <div className={navbar.headerContent}>
               <div className={navbar.navRight}>
                   <Link to="/" className={navbar.navLinkRight}>
                       Home
                   </Link>
                   <Link to="/aboutus" className={navbar.navLinkRight}>
                       About Us
                   </Link>
                   <Link to="/events" className={navbar.navLinkRight}>
                       Events
                   </Link>
                   <Link to="/contactus" className={navbar.navLinkRight}>
                       Contact Us
                   </Link>

                </div>
            </div>
        </div>
       <div className={Styles.contactSection}>
         <div className={Styles.contentWrapper}>
           <h1 className={Styles.mainHeading}>Frequently Asked Questions</h1>
         </div>
       </div>
       <div className={Styles.contactSection}>
       
         <div className={Styles.faqListContainer}>
            {faqData.map((faq, index) => (
              <div key={index} className={Styles.faqEntry}>
                <h3 className={Styles.faqQuestion}>{faq.question}</h3>
                <p className={Styles.faqAnswer}>{faq.answer}</p>
              </div>
            ))}
         </div>
       </div>
       <div className={Styles.footerLogoContainer}>
         <img src={logoImage} alt="Oak Hill Farm Logo" className={Styles.footerLogo} loading="lazy" />
       </div>
       <div className={Styles.footerSection}>
          <div className={Styles.footerLinks}>
            <Link to="/terms" className={Styles.footerLink}> Terms & Conditions </Link>
            <Link to="/refund-policy" className={Styles.footerLink}> Refund Policy </Link>
          </div>
          <div className={Styles.copyright}>Copyright © 2025 Oak Hill Farm</div>
       </div>
     </div>
   );
}