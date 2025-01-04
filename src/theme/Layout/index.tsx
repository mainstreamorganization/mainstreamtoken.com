import React from 'react';
import Layout from '@theme/Layout';
import LegalNotice from '@site/src/components/LegalNotice';
import {useLocation} from '@docusaurus/router';

export default function CustomLayout(props) {
  const location = useLocation();
  const isLegalPage = location.pathname.includes('/legal/');
  
  return (
    <Layout {...props}>
      {props.children}
      {!isLegalPage && <LegalNotice />}
    </Layout>
  );
}
