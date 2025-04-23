
import { Link } from '@remix-run/react';
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import styles from './aboutus.module.scss';//same css as about is since its all gonan be the same crap 
import logoImage from '../../src/about_us_pictures/oakhillshdlogo.png'; 

export async function loader({}: LoaderFunctionArgs) {
  return json({ pageTitle: "Private Riding Lesson Information" });
}

export default function PrivateLessonsInfoPage() {

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
          <p className={styles.subHeading} style={{fontWeight: 'bold'}}>
            Private Riding Lesson $50 per hour.
          </p>
        </div>
      </div>

    
      <div className={styles.contactSection}>
         <div className={styles.contentWrapper} style={{textAlign: 'left'}}>

            <h2 className={styles.subHeading}>Lesson Details</h2>
            <p className={styles.bodyText}>
              Our riding lessons are one hour. This hour includes the time it takes to get the horse prepared for the lesson. Beginners are taught how to groom and tack-up a horse prior to riding. Post-ride care is also taught during the hour lesson. This includes but is not limited to untacking the horse, cooling him off, and other aspects of caring for a horse. Students are responsible for cleaning and replacing all tack used for their lesson—grooming box, helmet, saddle pad, bridle, and any other items used.
            </p>
            <p className={styles.bodyText}>
              As a student progresses to where they need less supervision preparing each horse for riding, then the actual riding time increases.
            </p>

            <h2 className={styles.subHeading}>Timing</h2>
            <p className={styles.bodyText}>
              Your lesson begins at your scheduled time, not when you actually arrive at the barn. Most of our students arrive early, get the horse ready for lesson, and are at the round pen at the appointed time. If you are late for your lesson, you still are required to get the horse ready and then join your lesson in progress. Your lesson ends at the appointed time.
            </p>

            <h2 className={styles.subHeading}>Required Attire</h2>
            <p className={styles.bodyText}>
              Proper attire is required. All riders must wear an approved helmet anytime they are on a horse. Long pants and a closed toe shoe with a small heel are required. There are places to change into riding clothes if coming from school or an after-school activity.
            </p>

            <h2 className={styles.subHeading}>Scheduling and Payment</h2>
            <p className={styles.bodyText}>
              We encourage you to schedule and pay for your lesson on our website. Once you have scheduled your lesson, you will be added to our system where you can easily manage your account and lessons.
            </p>
            <p className={styles.bodyText}>
              If you do not wish to take part in this automated system of scheduling and payment services, you may text Oak Hill: <strong style={{whiteSpace: 'nowrap'}}>662-202-8899</strong>.
            </p>
         </div>
      </div>


      <div className={styles.footerLogoContainer}>
          <img
              src={logoImage}
              alt="Oak Hill Farm Logo"
              className={styles.footerLogo}
              loading="lazy"
          />
      </div>

      <div className={styles.footerSection}>
        <div className={styles.footerLinks}>
          <Link to="/terms" className={styles.footerLink}>
            Terms & Conditions
          </Link>
          <Link to="/refund-policy" className={styles.footerLink}>
            Refund Policy
          </Link>
         
        </div>
        <div className={styles.copyright}>Copyright © 2025 Oak Hill Farm</div>
      </div>
    </div>
  );
}