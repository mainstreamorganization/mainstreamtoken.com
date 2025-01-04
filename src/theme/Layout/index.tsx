import React from 'react';
import Layout from '@theme-original/Layout';
import type LayoutType from '@theme/Layout';
import LegalNotice from '@site/src/components/LegalNotice';

type Props = React.ComponentProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): JSX.Element {
  return (
    <>
      <Layout {...props} />
      <LegalNotice />
    </>
  );
}
