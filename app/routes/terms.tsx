import { Link } from '@remix-run/react';
import Footer from '../components/Footer/Footer';

export default function Terms() {
    return (
        <div className="pageContainer">
            <div className="topStickyCover"></div>
            <div className="headerBar">
                <div className="headerContent">
                    <div className="navRight">
                        <Link to="/aboutus" className="navLinkRight">
                            About Us
                        </Link>
                        <Link to="/horses" className="navLinkRight">
                            Our Horses
                        </Link>
                        <Link to="/events" className="navLinkRight">
                            Events
                        </Link>
                        <Link to="/" className="navLinkRight">Home</Link>
                        <Link to="/contactus" className="navLinkRight">Contact Us</Link>
                    </div>
                </div>
            </div>

            <div className="contactSection">
                <div className="contentWrapper">
                    <h1 className="mainHeading">Terms and Conditions</h1>
                    <p className="lastUpdated">
                      Last updated: March 22, 2025
                    </p>
                    <h2 className="subHeading">1. AGREEMENT TO OUR LEGAL TERMS</h2>
                    <p className="bodyText">
                      We are Oak Hill Farm ("Company," "we," "us," "our"), a company registered in Mississippi,
                      United States at 7030 Delay Rd, Water Valley, MS 38965. We operate the website
                      http://www.oakhillfarm.com (the "Site"), as well as any other related products and services that
                      refer or link to these legal terms (the "Legal Terms") (collectively, the "Services"). The Services
                      primarily include riding and training services, horse boarding services, and service scheduling.
                      You can contact us by email at robinson.llinda@yahoo.com or by mail to 7030 Delay Rd, Water
                      Valley, MS 38965, United States.
                    </p>
                    <h2 className="subHeading">2. USE OF SERVICES</h2>
                    <p className="bodyText">
                      These Legal Terms constitute a legally binding agreement made between you, whether
                      personally or on behalf of an entity ("you"), and Oak Hill Farm, concerning your access to and
                      use of the Services. You agree that by accessing the Services, including riding and training
                      services, you have read, understood, and agreed to be bound by all of
                      these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN
                      YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST
                      DISCONTINUE USE IMMEDIATELY.
                    </p>
                    <h2 className="subHeading">3. BOOKING AND PAYMENT TERMS</h2>
                    <p className="bodyText">
                      By using the Services to schedule a service, you agree to provide accurate and current
                      information during the booking process. You are responsible for ensuring timely payments via
                      the payment methods available on the Site. Payments must be made in full at the time of
                      booking unless otherwise stated. Any cancellation or rescheduling requests must be made at
                      least 24 hours in advance. Late cancellations may incur fees, and refunds for cancellations will
                      be issued according to our separate Refund Policy.
                    </p>
                    <h2 className="subHeading">4. USER OBLIGATIONS</h2>
                    <p className="bodyText">
                      By booking a service or participating in activities, you agree to arrive on time and dressed in proper attire
                      suitable for equine activities. Oak Hill Farm reserves the right to cancel or reschedule
                      any session if these requirements are not met.
                    </p>
                    <h2 className="subHeading">5. MODIFICATIONS TO LEGAL TERMS</h2>
                    <p className="bodyText">
                      We reserve the right, in our sole discretion, to make changes or modifications to these Legal
                      Terms at any time and for any reason. We will alert you about any changes by updating the
                      "Last updated" date of these Legal Terms, and you waive any right to receive specific notice of
                      each such change. It is your responsibility to periodically review these Legal Terms to stay informed of updates.
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
}