import { Link } from '@remix-run/react';
import Logo1Png from '../../../src/assets/logo1.png';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLogoContainer}>
        <img src={Logo1Png} alt="Oak Hill Farm Logo" className={styles.footerLogo} />
      </div>
      <div className={styles.footerLinks}>
        <Link to="/terms" className={styles.footerLink}>
          Terms & Conditions
        </Link>
        <Link to="/refund-policy" className={styles.footerLink}>
          Refund Policy
        </Link>
      </div>
      <div className={styles.copyright}>Copyright © 2025 Oak Hill Farm</div>
    </footer>
  );
} 