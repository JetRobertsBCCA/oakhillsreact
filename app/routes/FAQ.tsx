import { Link } from '@remix-run/react';
import logoImage from '../../../public/images/oakhillshdlogo.png';
import styles from '../styles/FAQ.module.scss';
import global from '../styles/global.module.scss';
import Footer from '../components/Footer/Footer';

//IF YOU NEED TO ADD MORE JSUT ADD HERE much simpler
const faqData = [
    { 
        question: 'What should I wear for riding?', 
        answer: 'Long pants and closed-toe shoes with a small heel (like riding boots or hiking boots) are required. We recommend layering as the weather can change. Helmets are required while mounted (we may have some available, please inquire). Open-toed/heeled shoes (sandals, Crocs), rain boots, and muck boots are not permitted for riding.' 
    },
    { 
        question: 'What are the payment and deposit policies?', 
        answer: 'Payment details vary by service. We accept Venmo and CashApp for most transactions. For events and parties, a non-refundable deposit is typically required to reserve your spot. You can choose to pay the full amount online or pay a deposit and settle the remaining balance on-site. For lessons, payment is required at the time of booking.' 
    },
    { 
        question: 'Is there a waiver I need to sign?', 
        answer: 'Yes, a digital liability waiver must be signed by all participants (or parents/guardians for minors) before participating in any activities. The waiver includes important safety information and releases. Additionally, for horse-related activities, you must provide up-to-date Coggins documentation for your horse. No stallions are allowed for any events.' 
    },
    { 
        question: 'What if it rains?', 
        answer: 'Please contact us regarding weather concerns for specific events or lessons. Decisions about weather-related cancellations are made with safety as the top priority. We will work with you to reschedule or provide appropriate alternatives.' 
    },
    { 
        question: 'What facilities are available on the farm?', 
        answer: 'We have designated restrooms available (see property map). Please note, entry into the private house is not permitted. RVs/campers are welcome in designated areas for certain events, but sewer hookups are not available. Our facility includes five spacious stalls, a well-equipped tack room, a round pen, seven lush paddocks, and an 80 x 160 arena.' 
    },
    { 
        question: 'Are food and drinks provided?', 
        answer: 'For trail rides, Oak Hill provides one complimentary meal after the ride concludes. For other events, lessons, or camp, participants should bring their own snacks, lunches, and beverages. Bottled water is available. No glass containers are allowed on the premises.' 
    },
    { 
        question: 'What are the rules for events?', 
        answer: 'Important rules include: No entering the house, RVs/campers only allowed in designated areas (see map), no sewer hookups available, only designated restrooms to be used (see map), waterproof/resistant shoes required (no rain boots, muck boots, or open-toed shoes), and proper safety gear must be worn at all times.' 
    },
    { 
        question: 'Do you offer boarding services?', 
        answer: 'Yes, we offer stall rentals for boarding. All horses must have up-to-date vaccine documentation and Coggins documentation. No stallions are allowed. Please contact us for current rates and availability.' 
    },
    { 
        question: 'What about cell phone service?', 
        answer: 'Cell phone service can be unreliable at Oak Hill Farm. We recommend downloading the property map before your visit. The map will be provided in your confirmation email or can be downloaded from our website.' 
    },
    { 
        question: 'What are your summer camp policies?', 
        answer: 'Summer camp runs from 9:00 AM to 2:45 PM. Early drop-off is available for an additional $5.00 per day. Campers need to bring their own lunch, snacks, and drinks in a labeled cooler. Proper riding attire is required, and we provide approved headgear for riders. A nurse is on staff for safety.' 
    }
];

export default function FAQ() {
    return (
        <div>
            <div className={styles.pageWrapper}>
                <div className={styles.heroSection}>
                    <h1>Frequently Asked Questions</h1>
                </div>
                <div className={styles.faqSection}>
                    <div className={styles.faqList}>
                        {faqData.map((item, index) => (
                            <div key={index} className={styles.faqItem}>
                                <h2 className={styles.faqQuestion}>{item.question}</h2>
                                <p className={styles.faqAnswer}>{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}