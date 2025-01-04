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
    // Check if user has already agreed
    const hasAgreed = getCookie('legalAgreed') === 'true';
    if (!hasAgreed) {
      setVisible(true);
    }
  }, []);

  const handleAgree = () => {
    setCookie('legalAgreed', 'true');
    setVisible(false);
  };

  const handleDisagree = () => {
    history.push('/contact/legal/disclaimer');
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
            <li><a href="/contact/legal/disclaimer" target="_blank">Legal Disclaimer</a></li>
            <li><a href="/contact/legal/terms" target="_blank">Terms of Use</a></li>
            <li><a href="/contact/legal/privacy" target="_blank">Privacy Policy</a></li>
            <li><a href="/contact/legal/cookies" target="_blank">Cookie Policy</a></li>
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
