import React from 'react';
import styles from './FooterWarning.module.css';

const FooterWarning = () => {
  return (
    <div className={styles.warningBar}>
      ⚠️ Disclaimer: Mainstream Token is an AI and community-driven entertainment project with no inherent financial value or guarantee of return. <br />
      It operates without a formal team or roadmap and is intended for informational and entertainment purposes only. All content is AI-generated. <br />
        *Please review the <a href="/docs/license/overview#legal-considerations" style={{ color: 'white', textDecoration: 'underline' }}>legal considerations</a>.
    </div>
  );
};

export default FooterWarning;
