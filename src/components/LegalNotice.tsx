import React, { useState, useEffect } from 'react';
import { useHistory } from '@docusaurus/router';
import styles from './LegalNotice.module.css';

// Cookie utility functions
const getCookie = (name: string): string | undefined => {
  if (typeof document === 'undefined') return undefined;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
};

const setCookie = (name: string, value: string, days = 365) => {
  if (typeof document === 'undefined') return;
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const domain = window.location.hostname;
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/;domain=${domain}`;
};

function LegalNotice() {
  const [visible, setVisible] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const hasAgreed = getCookie('legalAgreed') === 'true';
    const isLegalPage = window.location.pathname.includes('/legal/');
    setVisible(!hasAgreed && !isLegalPage);
  }, []);

  const handleAgree = () => {
    setCookie('legalAgreed', 'true');
    setVisible(false);
  };

  const handleDisagree = () => {
    setVisible(false);
    history.push('/contact/legal/disclaimer.md');
    window.location.reload(); // Ensure page reloads with new state
  };

  if (!visible) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Legal Notice and Terms of Use</h2>
        <div className={styles.content}>
          <p>
            By using this website, you agree to our:
          </p>
          <ul>
            <li><a href="/contact/legal/disclaimer.md" target="_blank">Legal Disclaimer</a></li>
            <li><a href="/contact/legal/terms.md" target="_blank">Terms of Use</a></li>
            <li><a href="/contact/legal/privacy.md" target="_blank">Privacy Policy</a></li>
            <li><a href="/contact/legal/cookies.md" target="_blank">Cookie Policy</a></li>
          </ul>
          <p>
            Please review these documents carefully before proceeding.
          </p>
        </div>
        <div className={styles.buttons}>
          <button 
            className={styles.agreeButton}
            onClick={handleAgree}
          >
            I Agree
          </button>
          <button 
            className={styles.disagreeButton}
            onClick={handleDisagree}
          >
            I Disagree
          </button>
        </div>
      </div>
    </div>
  );
}

export default LegalNotice;
