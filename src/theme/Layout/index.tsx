import React from 'react';
import Layout from '@theme-original/Layout';
import type LayoutType from '@theme/Layout';
import LegalNotice from '@site/src/components/LegalNotice';
import {useLocation} from '@docusaurus/router';

type Props = React.ComponentProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): JSX.Element {
  const location = useLocation();
  const isLegalPage = location.pathname.includes('/legal/');

  return (
    <>
      <Layout {...props} />
      {!isLegalPage && <LegalNotice />}
    </>
  );
}
