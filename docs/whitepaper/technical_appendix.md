# Technical Appendix: MainstreamToken ($MAIN) System Specifications

This appendix provides technical details about the MainstreamToken (MT) system, including the data structure for on-chain storage, the hashing process, a client-side implementation focus, licensing standards, verification processes, and other technical specifications.

## A. Core Protocol

### License String Format (MTL v0.1):

**Base Format:** `mtl:0.1-[TYPES]/[TOKENS]-[FEE]/[SPLITS];[CONDITIONS]~[ADDENDUM]~PAY:[PAYMENT_DETAILS]`

**Payment Information:**
- `PAY:[payment_details]`: Required field specifying payment information in the format TYPE:DETAILS
- Supported payment types include:
  - WALLET: Blockchain wallet address (e.g., WALLET:0x123...abc)
  - BANK: Bank account details (e.g., BANK:SWIFT:XXXXXX|ACCT:YYYY)
  - PAYPAL: PayPal email address (e.g., PAYPAL:user@example.com)
  - STRIPE: Stripe account ID (e.g., STRIPE:acct_xxxxx)
  - OTHER: Other payment methods with description
- Revenue split information will be displayed alongside the license string
- Examples:
  - `~PAY:WALLET:sol:HWrf12...xyz`
  - `~PAY:PAYPAL:creator@domain.com`
  - `~PAY:BANK:SWIFT:CHASUS33|ACCT:000123456789`

**Payment Information:**
- `PAY:[payment_details]`: Required field specifying payment information in the format TYPE:DETAILS
- Supported payment types include:
  - WALLET: Blockchain wallet address (e.g., WALLET:0x123...abc)
  - BANK: Bank account details (e.g., BANK:SWIFT:XXXXXX|ACCT:YYYY)
  - PAYPAL: PayPal email address (e.g., PAYPAL:user@example.com)
  - STRIPE: Stripe account ID (e.g., STRIPE:acct_xxxxx)
  - OTHER: Other payment methods with description
- Revenue split information will be displayed alongside the license string
- Examples:
  - `~PAY:WALLET:sol:HWrf12...xyz`
  - `~PAY:PAYPAL:creator@domain.com`
  - `~PAY:BANK:SWIFT:CHASUS33|ACCT:000123456789`

- `[TYPES]`: Indicates the type of license
- `[TOKENS]`: The minimum token requirements
- `[FEE]`: The percentage that is required for the revenue share, if applicable
- `[SPLITS]`: The split for revenue
- `[CONDITIONS]`: The conditions for the license
- `[ADDENDUM]`: Optional addendums to the license

**Types:**
- `P` = Personal use
- `C` = Commercial use
- `N` = Non-profit use
- `D` = Derivative work

**Examples:**
Note: For license strings with revenue splits, the lines following the license string indicate the payment wallet addresses. The first wallet address is the primary fee collection wallet, followed by any additional split wallet addresses.

- ```mtl:0.1
  MTLv0.1-P/100;+32M
  sol:901234981203182301
  sol:901234981203182
  sol:9012349812031111
  ```
  (Personal use, 100 tokens, 32 months duration, with primary wallet and two split wallets)
  
- `mtl:1-C/1000-5:30:40:30;+1Y<1M[US]{W,M}~LICENSE:CC-BY~PAYMENT_WALLET:HWrf12xyz`
  sol:0x1abc...def
  (Commercial use, 1000 tokens, 5% fee, 30% to protocol, 40% to wallet, 30% to contract, 1 year duration, under 1M revenue cap, US only, web and mobile usage, CC-BY license, payment wallet)
  
- `mtl:1-N/50;+0~LICENSE:GPL~PAYMENT_WALLET:HWrf12xyz`
  sol:0x1abc...def
  (Non-profit use, 50 tokens, perpetual duration, GPL license, payment wallet)
  
- `mtl:1-D/10000-10:20:40:40;+2Q>100K[!CN]{!G}~LICENSE:CUSTOM~PAYMENT_WALLET:HWrf12xyz`
  sol:0x1abc...def
  (Derivative work, 10000 tokens, 10% fee, 20% to protocol, 40% to wallet, 40% to contract, 2 quarters duration, over 100K revenue minimum, exclude China, no games, custom license, payment wallet)

**Token Requirements:**
- Format: `[amount]`
- Examples:
  - `0` (Donation)
  - `50` (Non-Profit)
  - `100` (Personal)
  - `10K` (Commercial)

**Fee & Splits:**
- Format: `[fee]:[split1]:[split2]:[split3]`
  - `[fee]` = percentage fee
  - `[split1]` = percentage for protocol
  - `[split2]` = percentage to wallet
  - `[split3]` = percentage to contract
- Example: `5:30:40:30`
  - 5% fee, 30% to protocol, 40% to wallet, 30% to contract
  - A fee value of 0 denotes donation acceptance, meaning any amount is acceptable. The fee is a required field.

**Conditions:**
1. Time
   - `+[duration]`
   - `+12M` (12 months)
   - `+1Y` (1 year)
   - `+0` (infinite)
   - `+2Q` (2 quarters)

2. Revenue  
   - `<[cap]` or `>[min]` or `=[amount]` or `!>[max]`
   - `<1M` (under 1M cap)
   - `>100K` (minimum 100K)
   - `=500K` (exact 500K)
   - `!>2M` (must not exceed 2M)

3. Geographic
   - `[region codes]`
   - `[US]` (US only)
   - `[!CN]` (exclude China)
   - `[US,EU]` (US and EU)

4. Usage
   - `{type}`
   - `{W}` (web only)
   - `{M}` (mobile only)
   - `{W,M}` (web & mobile)
   - `{!G}` (no games)

**Asset Specification:**
- Format: `#[asset_id]`
- Examples:
  - `#A1` (Single asset reference)
  - `#NFT1` (NFT reference)
  - `#COL1` (Collection reference)
  - `#[A1,A2]` (Multiple specific assets)
  - `#[COL1:1-100]` (Range in collection)

**Asset Grouping:**
- Format: `#[collection:range]`
- Examples:
  - `#[NFT:1-10]` (NFTs 1-10)
  - `#[ART:ALL]` (Entire art collection)
  - `#[MUSIC:2024]` (2024 music releases)

**Asset ID Structure:**
Base Format: \[CATEGORY\]-\[TYPE\]-\[CREATOR\]-\[UNIQUE\]-\[VERSION\]

Categories:
- DIG = Digital Assets
- PHY = Physical Assets
- EST = Estate/Property
- LEG = Legal Documents
- CRY = Crypto Assets
- INT = Intellectual Property
- MISC = Miscellaneous/Uncategorized
- UNK = Unknown Type
- EXP = Experimental
- TMP = Temporary
- HYB = Hybrid
- OTH = Other
- FUT = Future Rights
- OPT = Options
- FWD = Forward Contracts
- RGT = Future Rights
- RSV = Reservations
- MIX = Mixed Assets
- BUN = Bundle
- PKG = Package
- SET = Set
- GRP = Group
- TMP = Temporary/Time-based
- EVT = Event
- SES = Session
- ACC = Access
- PAS = Pass

Examples:
- DIG-IMG-HWrf12-001-v1 (Digital Image, Owner HWrf12, Asset 001, Version 1)
- EST-RES-HWrf12-LA101-v1 (Physical Estate, Residential Property LA101, Owner HWrf12, Version 1)
- LEG-WIL-HWrf12-2024-v1 (Legal Will, Year 2024, Owner HWrf12, Version 1)
- MISC-UNK-HWrf12-001-v1 (Misc Unknown, Owner HWrf12, Asset 001, Version 1)
- MIX-BUN-HWrf12-2024Q1-v1 (Mixed Bundle, Owner HWrf12, Q1 2024, Version 1)
- TMP-EVT-HWrf12-META24-v1 (Temp Event, Owner HWrf12, Event META24, Version 1)

## B. Implementation

### Verification Procedure:

**Platform Verification:**

Currently Manually
Platform Post Comment:
```
LICENSE: [LICENSE STRING]
PAY TO: [Wallet Address / Pay Info]
USAGE: [URL/Location]
TX: [Transaction ID]
REVENUE: [If Commercial/Derivative]
ASSET: [Asset ID]
```

**Compliance Tracking:**

1. Token Holdings:
   - Daily balance checks
   - Minimum requirement alerts
   - Grace period: 48 hours
   - Violation notice if below minimum

2. Revenue Reporting:
   - Annual submission required
   - Payment within 30 days
   - Transaction verification
   - Split distribution tracking

**Error Handling Procedures:**

Verification Errors (100-199):
- CODE 101: Invalid License String Format
- CODE 102: Missing Required Information
- CODE 103: Incorrect Blockchain Specified
- CODE 104: Invalid Blockchain Address
- CODE 105: Invalid User Hash

Verification Pass (000-099):
- CODE 001: License Verified Successfully
- CODE 002: License Verified with User Data

Compliance Errors (200-299):
- CODE 201: Insufficient Tokens for License
- CODE 202: Missing Annual Compliance Report
- CODE 203: Late Payment Detected
- CODE 204: Invalid Compliance Proof
- CODE 205: Payment Amount Does Not Match

## C. Technical Details

### Data Structure (JSON Format):

```json
{
  "mtl_version": "0.1",
  "tx_hash": "blockchain_transaction_hash_here",
  "tx_timestamp": "timestamp_of_transaction_in_utc",
  "license_data": {
    "license_id_hash": "blake3_hash_of_license_id",
    "asset_id_hash": "blake3_hash_of_asset_id",
    "owner_address": "blockchain_address_of_owner",
    "creation_time": "timestamp_of_license_creation_in_utc",
    "expiration_time": "timestamp_of_license_expiration_in_utc",
    "license_parameters": {
      "use_type": "commercial",
      "scope": "global",
      "duration": "12 months",
      "owner_program": "blockchain_address_of_program_if_applicable",
      "promotion_urls": [
        "https://instagram.com/username",
        "https://tiktok.com/@username",
        "https://youtube.com/@username"
      ],
      "payment_details": {
        "payment_type": "WALLET|BANK|PAYPAL|STRIPE|OTHER",  // Payment method type
        "payment_info": "payment method specific details",   // Required for all licenses
        "payment_split": "5:30:40:30"                       // Optional revenue split
      }
    },
    "payment_info": {
      "type": "payment method type",
      "details": "payment method specific information"
    },
  },
  "user_data_hash": "blake3_hash_of_user_identifiable_data_offchain",
  "user_data_hash_verification_api": "/api/verify_user_data",
  "copyright_data_hash": "blake3_hash_of_copyright_information",
  "copyright_data_verification_api": "/api/verify_copyright",
  "asset_data": {
    "asset_hash": "blake3_hash_of_asset_content",
    "description": "text_description_of_asset",
    "asset_data_link": "url_of_offchain_asset_data_if_applicable",
    "asset_verification_api": "/api/verify_asset_data"
  }
}
```

### Data Processing Steps:

1. **Collect Data:** Gather all necessary information as defined in the JSON format, using web forms and other user inputs.
2. **Encode:** Convert all data to a standardized JSON string using the standard browser libraries.
3. **Hash User Data (Off-Chain):** Hash the user's identifiable information separately with BLAKE3, using a Javascript implementation of the algorithm, and store the original data securely off-chain to protect privacy.
4.  **Hash Copyright Data (Off-Chain):** Hash the copyright related information separately using BLAKE3, using a Javascript implementation of the algorithm, and store the original data securely off-chain to protect privacy.
5. **Hash All Data (JSON):** Combine all information into a JSON structure and hash the entire JSON string, using BLAKE3 in the browser.
6. **On-Chain Storage:** Create a transaction and store the resulting BLAKE3 hash of the entire JSON object in the memo field of the transaction using a javascript library (such as Solana Web3 library).

### Verification Process:

1. **Retrieve Hash:** Use a javascript library to fetch the BLAKE3 hash from the transaction's memo field.
2. **Retrieve Data:** Use a javascript library to obtain the structured JSON data.
3. **Hash Data:** Re-hash the retrieved data, using a javascript implementation of BLAKE3.
4. **Compare Hashes:** Compare the newly computed hash against the on-chain hash to verify the data integrity.
5. **Verify User:** The user must provide the private user hash, for verification of the user.

### Technology Stack:
**Programming Languages:**
*   Primary: JavaScript (specifically for browser environments). Frameworks like React, Vue, or Angular will be used to structure the application.
*   Programs: Rust or C for writing and deploying programs to Solana.
*   Hashing algorithm: BLAKE3, implemented in a JavaScript library for client-side use.
*   Blockchain Interactions: Solana web3.js library (or a similar library).
*   Off-chain Storage: IPFS or similar decentralized storage systems (accessed via JavaScript). This will be used to store larger files and content. It will be combined with pinning incentives for long-term storage.
*   JSON processing: Native JavaScript JSON parsing and stringification.

**Smart Contracts:**
*   Smart contracts for automated license verification will be written in Rust or C and deployed to the Solana blockchain.
*   The smart contracts will be open-source and available for review on the project's GitHub repository.

**APIs and Code Repositories:**
*   Specific APIs and code repositories for the hash verifications will be made available in the project's documentation.

**Performance Metrics:**
*   The system is designed to handle a large number of transactions with low transaction costs.
*   Specific performance metrics, transaction costs, and scalability strategies will be documented in the project's documentation.

### Key Data Considerations:
- **Timestamps:** All timestamps will be in the Unix timestamp format in UTC time.
- **Privacy:** All personally identifiable information (PII) will be hashed and stored off-chain to ensure user privacy.
- **Data Integrity:** The BLAKE3 hash of the entire JSON structure will be stored on-chain, ensuring the integrity of the data and that no part of it has been tampered with.
- **User Control:** Users will have control over what data is stored off-chain.
- **Long-Term Storage:** Although the blockchain is immutable, the long term storage of data is not guaranteed. For larger files, the system will use IPFS or a similar decentralized system, with pinning incentives for long-term storage.
