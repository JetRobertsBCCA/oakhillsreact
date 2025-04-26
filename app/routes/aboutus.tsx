import { Link } from '@remix-run/react';
import styles from './aboutus.module.scss';
import Footer from '../components/Footer/Footer';
import Pxl20250308162929633Copy1Jpg from '../../src/assets/pxl_20250308_162929633_copy1.jpg';
import Pxl20250308162929633Jpg from '../../src/assets/pxl_20250308_162929633.jpg';
import Pxl20250308163053898Jpg from '../../src/assets/pxl_20250308_163053898.jpg';

interface StaffMember {
    id: number;
    name: string;
    title: string;
    bio: string;
    image: string;
}

const staffMembers: StaffMember[] = [
    {
        id: 1,
        name: 'Linda Robinson',
        title: 'Ranch Manager & Head Trainer',
        bio: "With over 15 years of experience in the equestrian world, Linda is the backbone of our ranch. A certified equestrian trainer, she oversees all aspects of the ranch's operations, from horse care to training programs. Linda's gentle yet firm approach with the horses has earned her the trust of both the animals and the riders.",
        image: Pxl20250308162929633Copy1Jpg,
    },
    {
        id: 2,
        name: 'Tom Harris',
        title: 'Stable Manager',
        bio: "Tom has a true love for horses and has been managing stables for the past decade. He ensures that our horses are well cared for, from grooming to feeding, and maintains the ranch's facilities. Tom has an eye for detail and ensures that every stall is clean and every horse is happy.",
        image: Pxl20250308162929633Jpg,
    },
    {
        id: 3,
        name: 'Emily Williams',
        title: 'Rider & Training Assistant',
        bio: "Emily joined us five years ago and quickly became a valued team member. She assists with training both horses and riders, ensuring that every lesson is effective and enjoyable. Emily's knowledge of various riding styles, from Western to English, makes her a versatile instructor.",
        image: Pxl20250308163053898Jpg,
    },
];

export default function Aboutus() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.contentWrapper}>
                <div className={styles.infoSection}>
                    <div className={styles.infoContent}>
                        <h2>Our Story</h2>
                        <p>
                            Nestled in the heart of rolling hills, our ranch offers a serene haven
                            for horse lovers and nature enthusiasts alike. With acres of lush
                            pastures, state-of-the-art facilities, and a team dedicated to the care
                            and training of our magnificent horses, Oak Hill Farms is more than just
                            a ranch—it's a place where memories are made, and a love for horses is
                            shared.
                        </p>
                    </div>
                </div>

                <div className={styles.teamSection}>
                    <h2>Meet Our Team</h2>
                    <p className={styles.teamIntro}>
                        Our dedicated and experienced staff are the heart of Oak Hill Farms. We
                        share a passion for horses and a commitment to providing exceptional care,
                        expert instruction, and a welcoming environment for everyone.
                    </p>
                    <div className={styles.staffList}>
                        {staffMembers.map((member) => (
                            <div key={member.id} className={styles.staffCard}>
                                <div className={styles.staffImageContainer}>
                                    <img
                                        src={member.image}
                                        alt={`${member.name}, ${member.title}`}
                                        className={styles.staffImage}
                                    />
                                </div>
                                <div className={styles.staffTextContent}>
                                    <h3>{member.name}</h3>
                                    <h4>{member.title}</h4>
                                    <p>{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.facilitySection}>
                    <h2>Our Facility</h2>
                    <div className={styles.facilityContent}>
                        <div className={styles.facilityText}>
                            <p>
                                Our ranch boasts exceptional amenities designed to support both
                                horses and riders. We offer five spacious stalls, a well-equipped
                                tack room, and a round pen for training and groundwork. Our
                                expansive facility includes seven lush paddocks, an 80 x 160 arena
                                for riding and events, and access to scenic horse trails.
                            </p>
                        </div>
                        <div className={styles.facilityImages}>
                            <img
                                src={Pxl20250308162929633Copy1Jpg}
                                alt="Oak Hill Farm facility"
                                className={styles.facilityImage}
                            />
                            <img
                                src={Pxl20250308162929633Jpg}
                                alt="Oak Hill Farm arena"
                                className={styles.facilityImage}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
