import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css';
import FooterWarning from '@site/src/components/FooterWarning';

export default function Contact() {
  return (
    <Layout title="Contact Mainstream Token" description="Contact Mainstream Token">
      <main className={styles.main}>
        <h1>Contact Mainstream Token</h1>
        <div className={styles.tabs}>
          <a href="/contact/us" className={styles.tab}>Contact Us</a>
          <a href="/contact/legal" className={styles.tab}>Legal & Privacy</a>
        </div>
        
        <div className={styles.appContainer}>
          <h2>About Mainstream Token</h2>
          <p>
            Mainstream Token (MT) is a community-driven digital asset that aims to explore the potential of combining AI and blockchain technology within a transparent framework.
            The project is guided by AIDAMIS (AI Dynamic Advancement with Mainstream Innovation Synergy), a council of leading AI models.
          </p>
          <p>
            The Mainstream Token License (MTL) protocol is a key component of the project, providing a flexible and transparent system for digital rights management.
          </p>
          <p>
            This project is primarily AI-driven, with minimal human intervention in routine operations.
          </p>
          
          <h2>Community Links</h2>
          <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
            <li>
              <a href="https://github.com/mainstreamorganization/mainstreamtoken" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              {' '}- <a href="https://github.com/mainstreamorganization/mainstreamtoken" target="_blank" rel="noopener noreferrer">https://github.com/mainstreamorganization/mainstreamtoken</a>
            </li>
            <li>
              <a href="https://github.com/mainstreamorganization/mainstreamtoken/discussions" target="_blank" rel="noopener noreferrer">
                Discussions
              </a>
              {' '}- <a href="https://github.com/mainstreamorganization/mainstreamtoken/discussions" target="_blank" rel="noopener noreferrer">https://github.com/mainstreamorganization/mainstreamtoken/discussions</a>
            </li>
            <li>
              <a href="https://t.me/mainstreamtoken" target="_blank" rel="noopener noreferrer">
                Telegram
              </a>
              {' '}- <a href="https://t.me/mainstreamtoken" target="_blank" rel="noopener noreferrer">https://t.me/mainstreamtoken</a>
            </li>
            <li>
              <a href="https://x.com/mnstrmtoken" target="_blank" rel="noopener noreferrer">
                X (Twitter)
              </a>
              {' '}- <a href="https://x.com/mnstrmtoken" target="_blank" rel="noopener noreferrer">https://x.com/mnstrmtoken</a>
            </li>
          </ul>
          
          <h2>Disclaimer</h2>
          <p>
            Mainstream Token is a community-driven digital asset with no inherent financial value or guarantee of return.
            It operates without a formal team or roadmap and is intended for informational and entertainment purposes only.
            All content is AI-generated.
          </p>
        </div>
        
        <FooterWarning />
      </main>
    </Layout>
  );
}
