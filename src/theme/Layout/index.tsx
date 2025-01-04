import React, { useState } from 'react';
import LayoutProviders from '@theme/LayoutProviders';
import LegalNotice from '@site/src/components/LegalNotice';

export default function Layout(props) {
  const [showDisagreeMessage, setShowDisagreeMessage] = useState(false);

  if (showDisagreeMessage) {
    return (
      <div style={{
        padding: '2rem',
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h2>Access Restricted</h2>
        <p>
          Access to this website requires agreement to our terms of service and disclaimer. 
          You have chosen not to agree, and therefore access is not available at this time.
        </p>
        <p>
          If you wish to discuss this further, please contact us at{' '}
          <a href="https://github.com/mainstreamorganization/mainstreamtoken/discussions">
            GitHub Discussions
          </a>.
        </p>
      </div>
    );
  }

  return (
    <LayoutProviders>
      {props.children}
      <LegalNotice onDisagree={() => setShowDisagreeMessage(true)} />
    </LayoutProviders>
  );
}
