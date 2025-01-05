import React, { useState } from 'react';
import Layout from '@theme/Layout';
import FooterWarning from '@site/src/components/FooterWarning';
import styles from './styles.module.css';

function Decoder() {
    const [addendum, setAddendum] = useState('');
    const [paymentWallet, setPaymentWallet] = useState('');
    const [licenseString, setLicenseString] = useState('');
    const [decodedData, setDecodedData] = useState<any>(null);
    const [error, setError] = useState('');

    const decodeLicense = () => {
        try {
            // Basic validation
            if (!licenseString.trim().startsWith('```mtl:0') && !licenseString.trim().startsWith('MTLv0.1')) {
                throw new Error('Invalid license format. Must start with MTLv0.1 or be wrapped in ```mtl:0');
            }

            // Clean up the input by removing markdown code blocks if present
            const cleanLicenseString = licenseString.replace(/```mtl:0\n|\n```/g, '').trim();
            
            const lines = cleanLicenseString.split('\n').filter(line => line.trim() !== '');
            
            // Get the main license part - first line if no code block, second line if code block
            const mainPart = licenseString.includes('```') ? lines[1] : lines[0];
            
            // Get payment wallet if present
            const paymentWallets = licenseString.includes('```') ? 
                lines.slice(2).filter(line => /^[a-zA-Z]+:/.test(line)) :
                lines.slice(1).filter(line => /^[a-zA-Z]+:/.test(line));

            if (!mainPart) {
                throw new Error('Invalid license format: Empty license string');
            }

            // Validate the license format
            if (!mainPart.startsWith('MTLv0.1')) {
                throw new Error('Invalid license format. Must start with MTLv0.1');
            }

            // Split the main part into components
            const parts = mainPart.split('/');
            
            // Parse license types - default to All Uses for this format
            const types = [{
                code: 'A',
                name: 'All Uses',
                description: 'License allows all types of usage including Personal Use, Commercial Use, Non-Profit Use, and Derivative Works'
            }];
            
            console.log('Processed types:', types);

            // Parse fee and splits - not present in this format
            const feeAndSplits = null;
            
            console.log('Processed feeAndSplits:', feeAndSplits);

            // Safely handle conditions parsing
            const conditionStr = parts.length > 3 ? (parts[3] || '').split('~')[0] : '';
            console.log('Condition string:', conditionStr);
            
            // Extract duration with detailed logging
            const durationMatch = conditionStr.match(/\+([^<>\[\]\{\}=!]*)/);
            console.log('Duration match:', durationMatch);
            
            const durationValue = durationMatch ? durationMatch[1] : 'None';
            console.log('Extracted duration value:', durationValue);
            
            const conditions = {
                duration: durationValue,
                revenueCap: (conditionStr.match(/<(\d+[KMB]?)/) || [])[1] || 'None',
                revenueMin: (conditionStr.match(/>(\d+[KMB]?)/) || [])[1] || 'None',
                revenueExact: (conditionStr.match(/=(\d+[KMB]?)/) || [])[1] || 'None',
                revenueMax: (conditionStr.match(/!>(\d+[KMB]?)/) || [])[1] || 'None',
                regions: (conditionStr.match(/\[(.*?)\]/) || [])[1] || 'Global',
                states: (conditionStr.match(/\((.*?)\)/) || [])[1] || 'All',
                usage: (conditionStr.match(/\{(.*?)\}/) || [])[1] || 'All'
            };

            const decoded = {
                version: 'MTLv1',
                types: [{
                    code: 'A',
                    name: 'All Uses (Personal, Commercial, Non-Profit, Derivative)',
                    description: 'License allows all types of usage including Personal Use, Commercial Use, Non-Profit Use, and Derivative Works'
                }],
                tokens: {
                    amount: parts[2] || '0',
                    description: `Requires holding ${parts[2] || '0'} tokens to maintain this license`
                },
                fee: feeAndSplits ? {
                    percentage: feeAndSplits.fee,
                    splits: feeAndSplits.splits,
                    description: `${feeAndSplits.fee}% fee with revenue splits: ${feeAndSplits.splits.map((split, index) => `Split ${index + 1}: ${split}%`).join(', ')}`
                } : 'No fee specified',
                duration: {
                    value: conditions.duration,
                    description: getDurationDescription(conditions.duration)
                },
                feeAndSplits: feeAndSplits ? {
                    fee: `${feeAndSplits.fee}%`,
                    splits: feeAndSplits.splits.map((split, index) => 
                        `Split ${index + 1}: ${split}%`
                    ),
                    description: `${feeAndSplits.fee}% fee with revenue splits: ${feeAndSplits.splits.map((split, index) => `${split}%`).join(':')}`
                } : 'No fee or revenue splits specified',
                conditions: {
                    duration: {
                        value: conditions.duration,
                        description: getDurationDescription(conditions.duration)
                    },
                    revenue: {
                        cap: conditions.revenueCap !== 'None' ? `Cap: ${conditions.revenueCap}` : null,
                        min: conditions.revenueMin !== 'None' ? `Min: ${conditions.revenueMin}` : null,
                        exact: conditions.revenueExact !== 'None' ? `Exact: ${conditions.revenueExact}` : null,
                        max: conditions.revenueMax !== 'None' ? `Max: ${conditions.revenueMax}` : null,
                        description: getRevenueDescription(conditions)
                    },
                    regions: {
                        value: conditions.regions,
                        description: getRegionDescription(conditions.regions)
                    },
                     states: {
                        value: conditions.states,
                        description: getStateDescription(conditions.states)
                    },
                    usage: {
                        value: conditions.usage,
                        description: getUsageDescription(conditions.usage)
                    }
                },
                 addendum: lines[0].split('~')[1] ? {
                    value: lines[0].split('~')[1],
                    description: getAddendumDescription(lines[0].split('~')[1])
                } : 'No addendum specified',
                paymentWallet: paymentWallets.join('\n') || 'Not specified'
            };

            function getTypeDescription(type: string): string {
                const descriptions = {
                    'Personal Use': 'License for individual, non-commercial use only',
                    'Commercial Use': 'License for business and commercial applications',
                    'Non-Profit Use': 'License for non-profit organization use',
                    'Derivative Work': 'License allows creation of derivative works'
                };
                return descriptions[type] || 'Unknown license type';
            }

            function getDurationDescription(duration: string): string {
                if (duration === 'None') return 'No duration specified (perpetual)';
                
                console.log('Getting description for duration:', duration);
                
                const units = {
                    's': 'seconds',
                    'm': 'minutes',
                    'h': 'hours',
                    'd': 'days',
                    'w': 'weeks',
                    'M': 'months',
                    'Y': 'years',
                    '∞': 'perpetual'
                };
                
                if (duration === '∞') return 'Perpetual license';
                
                const match = duration.match(/(\d+)([smhdwMY])/);
                console.log('Duration regex match:', match);
                
                if (!match) return 'Invalid duration format';
                return `Valid for ${match[1]} ${units[match[2].toLowerCase()] || 'unknown units'}`;
            }

            function getRevenueDescription(conditions: any): string {
                const parts = [];
                if (conditions.revenueCap !== 'None') parts.push(`Maximum revenue threshold capped at ${conditions.revenueCap}`);
                if (conditions.revenueMin !== 'None') parts.push(`Must maintain minimum of ${conditions.revenueMin}`);
                if (conditions.revenueExact !== 'None') parts.push(`Must maintain exactly ${conditions.revenueExact}`);
                if (conditions.revenueMax !== 'None') parts.push(`Hard limit of ${conditions.revenueMax}`);
                return parts.length ? parts.join('; ') : 'No revenue conditions specified';
            }

            function getRegionDescription(regions: string): string {
                if (regions === 'Global') return 'Valid worldwide';
                const excluded = regions.match(/!(.*)/);
                if (excluded) return `Valid everywhere except: ${excluded[1]}`;
                return `Valid only in: ${regions}`;
            }

            function getStateDescription(states: string): string {
                if (states === 'All') return 'Valid in all states';
                const excluded = states.match(/!(.*)/);
                if (excluded) return `Valid everywhere except: ${excluded[1]}`;
                return `Valid only in: ${states}`;
            }

           function getUsageDescription(usage: string): string {
                if (usage === 'All') return 'All usage types permitted';
                const usageTypes = {
                    W: 'Web',
                    M: 'Mobile',
                    G: 'Games'
                };
                const parts = usage.split(',').map(part => {
                    const excluded = part.match(/!(.*)/);
                    if (excluded) return `No ${usageTypes[excluded[1]] || excluded[1]}`;
                    return usageTypes[part] || part;
                });
                return `Usage types: ${parts.join(', ')}`;
            }
 
             function getAddendumDescription(addendum: string): string {
                return addendum;
            }

            function getDurationUnitName(unit: string): string {
                const units = {
                    'S': 'seconds',
                    'M': 'minutes',
                    'H': 'hours',
                    'D': 'days',
                    'W': 'weeks',
                    'Q': 'quarters',
                    'Y': 'years'
                };
                return units[unit] || unit;
            }

            setDecodedData(decoded);
            setError('');
        } catch (err) {
             setError(err.message);
            setDecodedData(null);
        }
    };

    return (
        <Layout title="MTL Decoder" description="Decode MTL License Strings">
            <div className={styles.appContainer}>
                <h1>MTL Decoder</h1>
                <div className={styles.formGroup}>
                    <label>Enter License String:</label>
                    <textarea
                        value={licenseString}
                        onChange={(e) => setLicenseString(e.target.value)}                        
                        rows={12}
                        style={{ width: '100%', minWidth: '600px' }}
                    />
                </div>
                 <button 
                    className="button button--primary"
                    onClick={decodeLicense}
                >
                    Decode License
                </button>

                {error && (
                    <div className={styles.error} style={{ marginTop: '1rem' }}>
                        {error}
                    </div>
                )}

                {decodedData && (
                    <div className={styles.licenseString}>
                        <h2>Decoded License Information:</h2>
                        
                        <div className={styles.section}>
                            <h3>Version</h3>
                            <p>{decodedData.version}</p>
                        </div>

                        <div className={styles.section}>
                            <h3>License Types</h3>
                            {decodedData.types.map((type, index) => (
                                <div key={index} className={styles.subsection}>
                                    <strong>{type.name}</strong>
                                    <p>{type.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className={styles.section}>
                            <h3>Token Requirements</h3>
                            <p><strong>Amount:</strong> {decodedData.tokens.amount}</p>
                            <p>{decodedData.tokens.description}</p>
                        </div>

                        <div className={styles.section}>
                            <h3>Fee and Revenue Splits</h3>
                            {typeof decodedData.feeAndSplits === 'string' ? (
                                <p>{decodedData.feeAndSplits}</p>
                            ) : (
                                <>
                                    <p><strong>Fee:</strong> {decodedData.feeAndSplits.fee}</p>
                                    <div className={styles.subsection}>
                                        <strong>Splits:</strong>
                                        <ul>
                                            {decodedData.feeAndSplits.splits.map((split, index) => (
                                                <li key={index}>{split}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <p>{decodedData.feeAndSplits.description}</p>
                                </>
                            )}
                        </div>

                        <div className={styles.section}>
                            <h3>Conditions</h3>
                            
                            <div className={styles.subsection}>
                                <strong>Duration:</strong>
                                <p>{decodedData.conditions.duration.description}</p>
                            </div>

                            <div className={styles.subsection}>
                                <strong>Revenue Conditions:</strong>
                                <p>{decodedData.conditions.revenue.description}</p>
                                {Object.entries(decodedData.conditions.revenue)
                                    .filter(([key, value]) => key !== 'description' && value)
                                    .map(([key, value]) => (
                                        <div key={key} className={styles.detail}>
                                            {value}
                                        </div>
                                    ))}
                            </div>

                            <div className={styles.subsection}>
                                <strong>Geographic Restrictions:</strong>
                                <p>{decodedData.conditions.regions.description}</p>
                            </div>
                             <div className={styles.subsection}>
                                <strong>State Restrictions:</strong>
                                <p>{decodedData.conditions.states.description}</p>
                            </div>
                            <div className={styles.subsection}>
                                <strong>Usage Types:</strong>
                                <p>{decodedData.conditions.usage.description}</p>
                            </div>
                        </div>

                         <div className={styles.section}>
                            <h3>Payment Token & Wallet</h3>
                            <div style={{ whiteSpace: 'pre-line' }}>
                                {decodedData.paymentWallet}
                            </div>
                        </div>

                        <div className={styles.section}>
                            <h3>Addendum</h3>
                             {typeof decodedData.addendum === 'string' ? (
                                <p>{decodedData.addendum}</p>
                            ) : (
                                <>
                                    <p><strong>Value:</strong> {decodedData.addendum.value}</p>
                                    <p>{decodedData.addendum.description}</p>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
            <FooterWarning />
        </Layout>
    );
}

export default Decoder;
