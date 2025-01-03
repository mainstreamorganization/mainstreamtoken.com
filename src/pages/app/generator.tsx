import React, { useState } from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css';

function App() {
    const [licenseString, setLicenseString] = useState('');
    const [licenseError, setLicenseError] = useState('');
    const [licenseTypes, setLicenseTypes] = useState({
        P: false,
        C: false,
        N: false,
        D: false,
    });
    const [tokenAmount, setTokenAmount] = useState('');
    const [fee, setFee] = useState('');
    const [splits, setSplits] = useState([{ percentage: '', wallet: '' }]);
    const [durationValue, setDurationValue] = useState('');
    const [durationUnit, setDurationUnit] = useState('M');
    const [revenueCap, setRevenueCap] = useState('');
    const [revenueMin, setRevenueMin] = useState('');
    const [revenueExact, setRevenueExact] = useState('');
    const [revenueMax, setRevenueMax] = useState('');
    const [region, setRegion] = useState('');
    const [state, setState] = useState('');
    const [usage, setUsage] = useState('');
    const [addendum, setAddendum] = useState('');
    const [feeWallet, setFeeWallet] = useState('');

    const validateLicenseString = (license: string) => {
        const regex = /^MTLv0\.1-[P|C|N|D]*\/\d+(?:-\d+(?::\d+)*)?;(?:\+\d+)?(?:<\d+)?(?:>\d+)?(?:=\d+)?(?:!>\d+)?(?:\[[^\]]*\])?(?:\{[^\}]*\})?(?:~[^~]*)?$/;
        return regex.test(license);
    };


    const generateLicenseString = () => {
        // Check if any license type is selected
        const selectedTypes = Object.keys(licenseTypes).filter(key => licenseTypes[key]);
        if (selectedTypes.length === 0) {
            setLicenseError('At least one license type must be selected');
            return;
        }

        // Check if token amount is provided
        if (!tokenAmount) {
            setLicenseError('Token amount is required');
            return;
        }

        let license = `MTLv0.1-${selectedTypes.join('')}/${tokenAmount}`;

        // Only add fee and splits if fee is provided
        if (fee) {
            if (!feeWallet) {
                setLicenseError('Fee wallet is required when fee is set');
                return;
            }
            license += `-${fee}`;
            // Only add splits if they have both percentage and wallet
            const validSplits = splits.filter(split => split.percentage && split.wallet);
            validSplits.forEach((split, index) => {
                license += `:${split.percentage}`;
            });
        }
        license += ';';

        if (durationValue && durationUnit) {
            let durationInSeconds;
            switch (durationUnit) {
                case 's':
                    durationInSeconds = parseInt(durationValue);
                    break;
                case 'm':
                    durationInSeconds = parseInt(durationValue) * 60;
                    break;
                case 'h':
                    durationInSeconds = parseInt(durationValue) * 60 * 60;
                    break;
                case 'd':
                    durationInSeconds = parseInt(durationValue) * 60 * 60 * 24;
                    break;
                case 'w':
                    durationInSeconds = parseInt(durationValue) * 60 * 60 * 24 * 7;
                    break;
                case 'M':
                    durationInSeconds = parseInt(durationValue) * 60 * 60 * 24 * 30;
                    break;
                case 'Y':
                    durationInSeconds = parseInt(durationValue) * 60 * 60 * 24 * 365;
                    break;
                default:
                    durationInSeconds = 0;
            }
            license += `+${durationInSeconds}`;
        }
        if (revenueCap) {
            license += `<${revenueCap}`;
        }
        if (revenueMin) {
            license += `>${revenueMin}`;
        }
        if (revenueExact) {
            license += `=${revenueExact}`;
        }
        if (revenueMax) {
            license += `!>${revenueMax}`;
        }
        if (region) {
            license += `[${region}]`;
        }
         if (state) {
            license += `(${state})`;
        }
        if (usage) {
            license += `{${usage}}`;
        }
        if (addendum) {
            license += `~${addendum}`;
        }

        if (validateLicenseString(license)) {
            setLicenseString(license);
            setLicenseError('');
        } else {
            setLicenseString('');
            setLicenseError('Invalid License String');
        }
    };


    return (
        <Layout title="MTL Generator" description="Generate MTL License Strings">
            <div className={styles.appContainer}>
                <h1>MTL Generator</h1>
                <div className={styles.formGroup}>
                    <label>License Type: (Required)</label>
                    <div className={styles.checkboxGroup}>
                        <label>
                            <input
                                type="checkbox"
                                checked={licenseTypes.P}
                                onChange={(e) => setLicenseTypes({ ...licenseTypes, P: e.target.checked })}
                            />
                            Personal Use
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                checked={licenseTypes.C}
                                onChange={(e) => setLicenseTypes({ ...licenseTypes, C: e.target.checked })}
                            />
                            Commercial Use
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                checked={licenseTypes.N}
                                onChange={(e) => setLicenseTypes({ ...licenseTypes, N: e.target.checked })}
                            />
                            Non-Profit Use
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                checked={licenseTypes.D}
                                onChange={(e) => setLicenseTypes({ ...licenseTypes, D: e.target.checked })}
                            />
                            Derivative Work
                        </label>
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <label>Token Amount: (Required)</label>
                    <div className={styles.tooltip}>Enter the number of tokens required for this license (e.g., 100, 1000)</div>
                    <input 
                        type="text" 
                        value={tokenAmount} 
                        onChange={(e) => {
                            const value = e.target.value;
                            if (value === '' || /^\d*$/.test(value)) {
                                setTokenAmount(value);
                            }
                        }}
                        className={!tokenAmount ? styles.inputError : ''}
                    />
                    {!tokenAmount && <div className={styles.error}>Token amount is required</div>}
                </div>
                <div className={styles.formGroup}>
                    <label>Fee: (Optional)</label>
                    <div className={styles.tooltip}>Enter the percentage fee for revenue sharing (0-100)</div>
                    <input 
                        type="text" 
                        value={fee} 
                        onChange={(e) => {
                            const value = e.target.value;
                            if (value === '' || (/^\d*$/.test(value) && (!value || parseInt(value) <= 100))) {
                                setFee(value);
                            }
                        }}
                    />
                    {fee && parseInt(fee) > 100 && <div className={styles.error}>Fee must be between 0 and 100</div>}
                </div>
                <div className={styles.formGroup}>
                    <label>Fee Collection Wallet: (Required if Fee is set)</label>
                    <div className={styles.tooltip}>Enter the Solana wallet address that will receive the fees</div>
                    <input 
                        type="text" 
                        value={feeWallet} 
                        onChange={(e) => setFeeWallet(e.target.value)}
                        className={fee && !feeWallet ? styles.inputError : ''}
                    />
                    {fee && !feeWallet && <div className={styles.error}>Wallet address is required when fee is set</div>}
                </div>
                <div className={styles.formGroup}>
                    <label>Revenue Splits: (Optional)</label>
                    <div className={styles.tooltip}>Define how the revenue will be split between different wallets. If the total is less than 100%, the remaining percentage will be allocated to the fee collection wallet</div>
                    {splits.map((split, index) => (
                        <div key={index} style={{ display: 'flex', marginBottom: '5px' }}>
                            <input
                                type="text"
                                placeholder="Percentage (0-100)"
                                value={split.percentage}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    if (value === '' || (/^\d*$/.test(value) && (!value || parseInt(value) <= 100))) {
                                        const newSplits = [...splits];
                                        newSplits[index].percentage = value;
                                        setSplits(newSplits);
                                    }
                                }}
                                className={fee && (!split.percentage || parseInt(split.percentage) > 100) ? styles.inputError : ''}
                                style={{ marginRight: '5px', width: '120px' }}
                            />
                            <input
                                type="text"
                                placeholder="Wallet Address"
                                value={split.wallet}
                                onChange={(e) => {
                                    const newSplits = [...splits];
                                    newSplits[index].wallet = e.target.value;
                                    setSplits(newSplits);
                                }}
                                style={{ marginRight: '5px' }}
                            />
                            {index > 0 && (
                                <button
                                    type="button"
                                    onClick={() => {
                                        const newSplits = [...splits];
                                        newSplits.splice(index, 1);
                                        setSplits(newSplits);
                                    }}
                                >
                                    Remove
                                </button>
                            )}
                        </div>
                    ))}
                    {splits.length < 10 && (
                        <button
                            type="button"
                            onClick={() => setSplits([...splits, { percentage: '', wallet: '' }])}
                        >
                            Add Split
                        </button>
                    )}
                </div>
                <div className={styles.formGroup}>
                    <label>Duration: (Optional)</label>
                    <div className={styles.tooltip}>Specify how long the license will be valid for</div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input
                            type="number"
                            value={durationValue}
                            onChange={(e) => setDurationValue(e.target.value)}
                            style={{ marginRight: '5px' }}
                        />
                        <select value={durationUnit} onChange={(e) => setDurationUnit(e.target.value)}>
                            <option value="s">Seconds</option>
                            <option value="m">Minutes</option>
                            <option value="h">Hours</option>
                            <option value="d">Days</option>
                            <option value="w">Weeks</option>
                            <option value="M">Months</option>
                            <option value="Y">Years</option>
                        </select>
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <label>Revenue Cap: (Optional)</label>
                    <div className={styles.tooltip}>Maximum revenue allowed under this license (e.g., 1000000 for $1M cap)</div>
                    <input 
                        type="text" 
                        value={revenueCap} 
                        onChange={(e) => {
                            const value = e.target.value;
                            if (value === '' || /^\d*$/.test(value)) {
                                setRevenueCap(value);
                            }
                        }}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label>Revenue Min: (Optional)</label>
                    <div className={styles.tooltip}>Minimum revenue required to maintain this license</div>
                    <input 
                        type="text" 
                        value={revenueMin} 
                        onChange={(e) => {
                            const value = e.target.value;
                            if (value === '' || /^\d*$/.test(value)) {
                                setRevenueMin(value);
                            }
                        }}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label>Revenue Exact: (Optional)</label>
                    <div className={styles.tooltip}>Exact revenue amount required for this license</div>
                    <input 
                        type="text" 
                        value={revenueExact} 
                        onChange={(e) => {
                            const value = e.target.value;
                            if (value === '' || /^\d*$/.test(value)) {
                                setRevenueExact(value);
                            }
                        }}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label>Revenue Max: (Optional)</label>
                    <div className={styles.tooltip}>Maximum revenue threshold that must not be exceeded</div>
                    <input 
                        type="text" 
                        value={revenueMax} 
                        onChange={(e) => {
                            const value = e.target.value;
                            if (value === '' || /^\d*$/.test(value)) {
                                setRevenueMax(value);
                            }
                        }}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label>Region: (Optional)</label>
                    <div className={styles.tooltip}>Geographic regions where the license is valid (e.g., US, EU, or !CN to exclude China)</div>
                    <input type="text" value={region} onChange={(e) => setRegion(e.target.value)} />
                </div>
                 <div className={styles.formGroup}>
                    <label>State: (Optional)</label>
                    <div className={styles.tooltip}>Geographic states where the license is valid (e.g., CA, NY, or !TX to exclude Texas)</div>
                    <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
                </div>
                <div className={styles.formGroup}>
                    <label>Usage: (Optional)</label>
                    <div className={styles.tooltip}>Specific usage types allowed (e.g., W for web, M for mobile, !G to exclude games)</div>
                    <input type="text" value={usage} onChange={(e) => setUsage(e.target.value)} />
                </div>
                <div className={styles.formGroup}>
                    <label>Addendum: (Optional)</label>
                    <div className={styles.tooltip}>Additional license terms or references (e.g., LICENSE:MIT for MIT license)</div>
                    <input type="text" value={addendum} onChange={(e) => setAddendum(e.target.value)} />
                </div>
                <button className="button button--primary" onClick={generateLicenseString}>Generate License String</button>
                {licenseError && (
                    <div className={styles.licenseString}>
                        <h2 style={{ color: 'red' }}>Error:</h2>
                        <p style={{ color: 'red' }}>{licenseError}</p>
                    </div>
                )}
                {licenseString && !licenseError && (
                    <div className={styles.licenseString}>
                        <h2>Generated License String:</h2>
			<p>```mtl</p>
                        <p>{licenseString}</p>
                        <p>{feeWallet}</p>
			<p>```</p>
                    </div>
                )}
            </div>
        </Layout>
    );
}

export default App;
