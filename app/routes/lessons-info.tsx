import { Link } from '@remix-run/react';
import { useState } from 'react';
import styles from './infopages.module.scss'; 
import logoImage from '../../src/about_us_pictures/oakhillshdlogo.png';

export default function PrivateLessonsInfoPage() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');


  const [liabilityAgreed, setLiabilityAgreed] = useState(false);


  const handlePayment = () => {
    if (!liabilityAgreed || !firstName || !lastName || !email || !phone) {
      alert('Please fill all required fields and agree to the liability waiver.');
      return;
    }
    alert('Proceeding to payment (placeholder)... \nData: ' + JSON.stringify({ firstName, lastName, email, phone }))
  };

  //it checks if they ahave added all their crap gunk in order to allow them to click on pay
  const isFormValid = liabilityAgreed && !!firstName && !!lastName && !!email && !!phone;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.topStickyCover}></div>

     
      <div className={styles.headerBar}>
        <div className={styles.headerContent}>
          <div className={styles.navRight}>
            <Link to="/" className={styles.navLinkRight}>
              Home
            </Link>
            <Link to="/horses" className={styles.navLinkRight}>
              Our Horses
            </Link>
            <Link to="/events" className={styles.navLinkRight}>
              Events
            </Link>
            <Link to="/contactus" className={styles.navLinkRight}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.contactSection}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.mainHeading}>Private Riding Lessons</h1>
        </div>
      </div>
      <div className={styles.contactSection}>
        <div className={styles.contentWrapper} style={{ textAlign: 'left' }}>
           <h2 className={styles.subHeading}>Price</h2>
           <p className={styles.bodyText}>
             <strong>$50 per hour.</strong>
           </p>
          <h2 className={styles.subHeading}>Lesson Details & Duration</h2>
          <p className={styles.bodyText}>
            Our riding lessons are one hour long. This hour includes the time it takes to get the horse prepared for the lesson (grooming, tacking up) and post-ride care (untacking, cooling off, etc.). Beginners are taught these preparation and care steps.
          </p>
          <p className={styles.bodyText}>
            As a student progresses to where they need less supervision preparing each horse for riding, then the actual riding time increases.
          </p>
           <p className={styles.bodyText}>
            Students are responsible for cleaning and replacing all tack used for their lesson—grooming box, helmet, saddle pad, bridle, and any other items used.
          </p>
          <h2 className={styles.subHeading}>Timing & Punctuality</h2>
          <p className={styles.bodyText}>
            Your lesson begins at your scheduled time, not when you actually arrive at the barn. Most of our students arrive early, get the horse ready for the lesson, and are at the round pen at the appointed time.
          </p>
          <p className={styles.bodyText}>
             If you are late for your lesson, you still are required to get the horse ready and then join your lesson in progress. Your lesson ends at the appointed time.
          </p>
          <h2 className={styles.subHeading}>Required Attire</h2>
           <ul className={styles.bodyText} style={{ paddingLeft: '20px', listStyle: 'disc' }}>
             <li>An approved helmet must be worn by all riders anytime they are on a horse. (Helmets may be available on site - check availability).</li>
             <li>Long pants are required.</li>
             <li>Closed-toe shoes with a small heel are required (e.g., riding boots, hiking boots).</li>
             <li>Waterproof or water-resistant shoes are recommended.</li>
             <li>Specifically disallowed: Rain boots, muck boots, open-heeled or open-toed shoes (sandals, Crocs, slip-ons, etc.).</li>
          </ul>
          <p className={styles.bodyText}>
            There are places to change into riding clothes if coming from school or an after-school activity.
          </p>
          <h2 className={styles.subHeading}>Scheduling and Payment</h2>
          <p className={styles.bodyText}>
            We encourage you to schedule and pay for your lesson on our website. Once you have scheduled your lesson, you will be added to our system where you can easily manage your account and lessons.
          </p>
          <p className={styles.bodyText}>
            If you do not wish to take part in this automated system of scheduling and payment services, you may text Oak Hill at: <strong>662-202-8899</strong>.
          </p>
        </div>
      </div>

     
      <div className={styles.contactSection}>
        <div className={`${styles.contentWrapper} ${styles.formSection}`}>
          <h2 className={styles.subHeading}>Your Details to Book</h2>
          <div className={styles.formGrid}>
          
             <div className={styles.formGroup}>
              <label htmlFor="firstName">First name</label>
              <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required className={styles.formInput} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="lastName">Last name</label>
              <input type="text" id="lastName" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required className={styles.formInput} />
            </div>
            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
               <label htmlFor="email">Email</label>
               <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required className={styles.formInput} />
             </div>
            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required className={styles.formInput} />
            </div>
          </div>
        </div>
      </div>

      {/*liabily ssection*/}
      <div className={styles.contactSection}>
        <div className={`${styles.contentWrapper} ${styles.liabilitySection}`}>
          <h2 className={styles.subHeading}>Liability Waiver Requirement</h2>
           <p className={styles.bodyText}>
            A liability waiver must be signed before participation. Please read and acknowledge our liability waiver before proceeding to payment. You can view or print the full waiver form here:
          </p>
          <a href="/OakHillWaiver.pdf" target="_blank" rel="noopener noreferrer" className={styles.waiverLink} >
            View/Print Liability Waiver (PDF)
          </a>
          <div className={styles.checkboxGroup}>
            <input type="checkbox" id="liability" name="liability" checked={liabilityAgreed} onChange={(e) => setLiabilityAgreed(e.target.checked)} className={styles.formCheckbox} />
            <label htmlFor="liability" className={styles.checkboxLabel}>
              I acknowledge that I have read and agree to the terms of the Oak Hill Farm Liability Waiver.
            </label>
          </div>
        </div>
      </div>

    
      <div className={styles.contactSection}>
        <div className={`${styles.contentWrapper} ${styles.mapDownloadSection}`}> 
           <h2 className={styles.subHeading}>Important: Location & Map</h2>
           <p className={`${styles.bodyText} ${styles.mapDownloadText}`}> 
             Please note that cell phone service can be unreliable at Oak Hill Farm. We highly recommend downloading a map of the property before your visit to help you navigate the grounds.
           </p>
         
           <a
            href="/offlinemap.pdf"// i still need to somehows get a proper map but it will go hereee
            download 
            className={styles.mapDownloadButton} 
           >
             Download Property Map (PDF)
           </a>
        </div>
      </div>
    
      <div className={styles.paymentSection}>
        <button
          className={styles.paymentButton}
          onClick={handlePayment}
          disabled={!isFormValid}
        >
          {isFormValid ? 'Proceed to Payment ($50)' : 'Please fill all fields and agree to waiver'}
        </button>
      </div>


      <div className={styles.footerLogoContainer}>
        <img src={logoImage} alt="Oak Hill Farm Logo" className={styles.footerLogo} loading="lazy" />
      </div>
      <div className={styles.footerSection}>
        <div className={styles.footerLinks}>
          <Link to="/terms" className={styles.footerLink}> Terms & Conditions </Link>
          <Link to="/refund-policy" className={styles.footerLink}> Refund Policy </Link>
        </div>
        <div className={styles.copyright}>Copyright © 2025 Oak Hill Farm</div>
      </div>
    </div>
  );
}