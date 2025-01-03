import React from 'react';
import Layout from '@theme/Layout';
import FooterWarning from '@site/src/components/FooterWarning';
import styles from './styles.module.css';

function Payment() {
    return (
        <Layout title="Make MTL Payment" description="Make payment for MTL License">
            <div className={styles.appContainer}>
                <h1>Make MTL Payment</h1>
                <p>Payment feature coming soon!</p>
            </div>
            <FooterWarning />
        </Layout>
    );
}

export default Payment;
