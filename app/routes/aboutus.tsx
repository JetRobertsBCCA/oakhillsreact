import { Link } from '@remix-run/react';
import styles from './aboutus.module.scss'; 
import global from './global.module.scss'; 
import logoImage from '../../src/about_us_pictures/oakhillshdlogo.png';

const staffMembers = [
    {
        id: 1,
        name: 'Linda Robinson',
        title: 'Ranch Manager & Head Trainer',
        bio: "With over 15 years of experience in the equestrian world, Linda is the backbone of our ranch. A certified equestrian trainer, she oversees all aspects of the ranch's operations, from horse care to training programs. Linda’s gentle yet firm approach with the horses has earned her the trust of both the animals and the riders. When she’s not working with our horses, Linda enjoys trail riding and competing in dressage.",
   
    },
    {
        id: 2,
        name: 'Tom Harris',
        title: 'Stable Manager',
        bio: 'Tom has a true love for horses and has been managing stables for the past decade. He ensures that our horses are well cared for, from grooming to feeding, and maintains the ranch’s facilities. Tom has an eye for detail and ensures that every stall is clean and every horse is happy. His background in veterinary care makes him a great resource for our team when it comes to horse health.',
     
    },
    {
        id: 3,
        name: 'Emily Williams',
        title: 'Rider & Training Assistant',
        bio: 'Emily joined us five years ago and quickly became a valued team member. She assists with training both horses and riders, ensuring that every lesson is effective and enjoyable. Emily’s knowledge of various riding styles, from Western to English, makes her a versatile instructor. Her enthusiasm for teaching and her ability to connect with both horses and students makes her a favorite among riders.',
      
    },
];


export default function Aboutus() {
    return (
       
        <div className={global.pageContainer}>
            <div className={global.headerBar}>
                <div className={global.headerContent}>
                    <div className={global.navRight}>
                        <Link to="/" className={global.navLinkRight}>
                            Home
                        </Link>
                        <Link to="/FAQ" className={global.navLinkRight}>
                            FAQ
                        </Link>
                        <Link to="/events" className={global.navLinkRight}>
                            Events
                        </Link>
                        <Link to="/contactus" className={global.navLinkRight}>
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.contactSection}>
                 <div className={styles.contentWrapper}>
                    <h1 className={styles.mainHeading}>Oak Hill Stable</h1>
                    <h2 className={styles.subHeading}>About Us</h2>
                    <p className={styles.bodyText}>
                        Oak Hill Stables is in a setting of rolling hills, low land and beautiful
                        forest. We offer horse boarding, riding lessons, horse training and birthday
                        parties in a family-friendly environment. Our mission is to create a safe,
                        clean, and fun place for horse enthusiast of all ages to enjoy riding and
                        learn new skills, in a warm, welcoming community. Our passion for horses and
                        dedication to their care shines through every aspect of our work, from our
                        well-maintained facilities to the supportive community we've built.
                    </p>
                </div>
            </div>

            <div className={styles.teamSectionWrapper}>
                <div className={styles.teamIntro}>
                     <h2 className={styles.subHeading}>Meet the Oak Hill Stable Team</h2>
                     <p className={styles.bodyText}>
                         Our dedicated and experienced staff are the heart of Oak Hill Farms. We
                         share a passion for horses and a commitment to providing exceptional care,
                         expert instruction, and a welcoming environment for everyone.
                     </p>
                 </div>

                 <div className={styles.staffList}>
                     {staffMembers.map((member, index) => (
                         <div key={member.id} className={styles.staffCard}>
                             <div
                                 className={`${styles.staffBioLayout} ${
                                     index % 2 !== 0 ? styles.layoutReverse : ''
                                 }`}
                             >
                                 <div className={styles.staffTextContent}>
                                     <h3>{member.name}</h3>
                                     <h4>{member.title}</h4>
                                     <p>{member.bio}</p>
                                 </div>

                                 <div className={styles.staffImageContainer}>
                                     <img
                                         alt={`Photo of ${member.name}, ${member.title}`}
                                         className={styles.staffImageNew}
                                         loading="lazy"
                                     />
                                 </div>
                             </div>
                         </div>
                     ))}
                 </div>
            </div>

            <div className={styles.contactSection}>
                <div className={styles.contentWrapper}>
                    <h2 className={styles.subHeading}>Our Facility</h2>
                    <p className={styles.bodyText}>
                        Our ranch boasts exceptional amenities designed to support both horses and
                        riders. We offer five spacious stalls, a well-equipped tack room, and a
                        round pen for training and groundwork. Our expansive facility includes seven
                        lush paddocks, an 80 x 160 arena for riding and events, and access to scenic
                        horse trails. Additionally, we lease an adjacent property to provide even
                        more space for our equestrian activities.
                    </p>
                </div>
            </div>
            <div className={global.footerLogoContainer}>
                 <img
                     src={logoImage}
                     alt="Oak Hill Farm Logo"
                     className={global.footerLogo}
                     loading="lazy"
                 />
             </div>
            <div className={global.footerSection}>
                <div className={global.footerLinks}>
                    <Link to="/terms" className={global.footerLink}>
                        Terms & Conditions
                    </Link>
                    <Link to="/refund-policy" className={global.footerLink}>
                        Refund Policy
                    </Link>
                </div>
                <div className={global.copyright}>Copyright © 2025 Oak Hill Farm</div>
            </div>
        </div>
    );
}