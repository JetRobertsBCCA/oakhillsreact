import { Link } from '@remix-run/react';
import Logo1Png from '../../../src/assets/logo1.png';
import styles from './GlobalNav.module.scss';

export default function GlobalNav() {
    return (
        <header className="headerBar">
            <img src={Logo1Png} alt="" className={styles.img1} />
            <div className="headerContent">
                <nav>
                    <ul className="navRight">
                        <li>
                            <Link to="/" className="navLinkRight">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/aboutus" className="navLinkRight">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/faq" className="navLinkRight">
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link to="/events" className="navLinkRight">
                                Events
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact-us" className="navLinkRight">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
