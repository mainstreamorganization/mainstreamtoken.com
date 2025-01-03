---
sidebar_position: 5
title: MTL Parameters v0.1
---

# MainstreamToken License (MTL) v0.1 - Parameter Addendum

This document provides the technical details, and is intended for developers and other users, and is a part of the above license.

## Data Structure

```json
{
    "mtl_version": "1.0",
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
                "payment_type": "WALLET|BANK|PAYPAL|STRIPE|OTHER",
                "payment_info": "payment method specific details",
                "payment_split": "5:30:40:30"
            }
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
}
```

## Technical Implementation

## Data Processing Steps

1. **Data Collection**
   - Gather all necessary information via web forms and user inputs
   - Validate input against the JSON schema

2. **Data Processing**
   - Encode data to standardized JSON string
   - Hash user data separately (BLAKE3)
   - Hash copyright data separately (BLAKE3)
   - Generate complete JSON structure
   - Create final BLAKE3 hash of entire JSON object

3. **Blockchain Storage**
   - Store final hash in transaction memo field
   - Use Solana Web3 library for blockchain interaction

## Technology Stack

### Core Technologies
- **Frontend**: JavaScript/TypeScript with React/Vue/Angular
- **Smart Contracts**: Solidity for Solana
- **Hashing**: BLAKE3 JavaScript implementation
- **Blockchain**: Solana web3.js library
- **Storage**: IPFS with pinning incentives
- **Data Format**: JSON

### License String Format (MTL v0.1)

Base Format: `MTLv1-[TYPES]/[TOKENS]-[FEE]/[SPLITS];[CONDITIONS]~[ADDENDUM]`

- `[TYPES]`: License type (P, C, N, D)
- `[TOKENS]`: Minimum token requirements
- `[FEE]`: Revenue share percentage
- `[SPLITS]`: Revenue split ratio
- `[CONDITIONS]`: License conditions
- `[ADDENDUM]`: Optional addendums

Example: `MTLv1-PC/100-3:30:40:30;+12M<1M[US,EU]{W,M}#A1~LICENSE:MIT`

## Verification Procedure

### Verification Methods
The following verification formats are supported across various platforms:

1. **Email Verification**
```
LICENSE: [LICENSE STRING]
PAY TO: [Wallet Address / Pay Info]
USAGE: [URL/Location]
TX: [Transaction ID]
REVENUE: [If Commercial/Derivative]
ASSET: [Asset ID]
```

2. **Social Media Posts**
Same format as above, posted on verified social media accounts.

3. **API Verification**
Direct API calls using the same data structure.

4. **Blockchain Verification**
On-chain verification using transaction memo fields.

## Rights Management Structure

### Token Requirements
- Personal: 100 tokens
- Non-Profit: 50 tokens
- Commercial: 10,000 tokens
- Derivative: 10,000 tokens

### Revenue Share
- Commercial: 3% annual revenue
  * Format: [%]:[chain]@[address]
- Derivative: 5% annual revenue
  * Format: [%]:[chain]@[address]

## Documentation Templates

### Initial Verification
```
[LICENSE STRING]
HOLDER: [SOL ADDRESS]
USAGE: [TYPE]
LOCATION: [URL]
TX: [ID]
```

### Annual Report
```
PERIOD: [YYYY]
REVENUE: [AMOUNT]
PAYMENT: [TX HASH]
HOLDINGS: [TOKEN AMOUNT]
```

## Validation Rules

### License String Validation
FORMAT: `MTLv1-[TYPES]/[TOKENS]-[FEE]/[SPLITS];[CONDITIONS]~[ADDENDUM]`

Rules:
- Version must be v1
- Types must be P, C, N, or D only
- Tokens must be numeric
- Fee must be between 0-100
- Splits must be a series of numbers separated by colons
- Must include all components

### Error Handling
- CODE 101: Invalid format: Request resubmission
- CODE 102: Wrong version: Update required
- CODE 103: Invalid type: Format correction needed

## Update/Renewal Process

### Annual Verification
Submission Window:
- 30 days before expiry
- Grace period: 7 days
- Auto-reminder at 14 days

Requirements:
- Current token balance
- Usage proof
- Revenue report (if applicable)
- Payment confirmation

## Compliance Tracking

### Token Holdings
- Daily balance checks
- Minimum requirement alerts
- Grace period: 48 hours
- Violation notice if below minimum

### Revenue Reporting
- Annual submission required
- Payment within 30 days
- Transaction verification
- Split distribution tracking

## Error Handling Procedures

### Verification Errors (100-199)
- CODE 101: Invalid License String Format
- CODE 102: Missing Required Information
- CODE 103: Incorrect Blockchain Specified
- CODE 104: Invalid Blockchain Address
- CODE 105: Invalid User Hash

### Verification Pass (000-099)
- CODE 001: License Verified Successfully
- CODE 002: License Verified with User Data

### Compliance Errors (200-299)
- CODE 201: Insufficient Tokens for License
- CODE 202: Missing Annual Compliance Report
- CODE 203: Late Payment Detected
- CODE 204: Invalid Compliance Proof
- CODE 205: Payment Amount Does Not Match

## Renewal Process

### Annual Renewal Steps
1. Verification check
2. Token balance confirmation
3. Revenue report submission
4. Payment processing
5. License extension

## Termination Procedures

### Automatic Termination
- Token balance is less than the minimum requirement for >48 hours
- Missing annual report
- Non-payment of fees
- Invalid usage proof

### Manual Termination
- User request
- Violation report
- Community verification
