# Appendices & Reference

This section provides supplementary information and references to support the main content of the MainstreamToken (MT) whitepaper.

## A. License Parameter Specification (MTL v1.0):

**Base Format:** <br />`mtl:1-[TYPES]/[TOKENS]-[FEE]/[SPLITS];[CONDITIONS]~[ADDENDUM]`
<br />`[Pay To]`

**Parameter Components:**

### Types:
*   `P` = Personal Use
*   `C` = Commercial Use
*   `N` = Non-Profit Use
*   `D` = Derivative Works

### Token Requirements:
*   Format: `[amount] tokens required`
*   Examples: `50`, `100`, `10K`

### Fee Structure:
*   Format: `[percentage]:[split1]:[split2]:[split3]`
*   Example: `5:30:40:30`

### Conditions:
*   **Time Duration:** `+[time]`
    *   Examples: `+12M`, `+1Y`, `+2Q`, `+0`
*   **Revenue Caps:** `<[amount]` or `>[min]` or `=[amount]` or `!>[max]`
    *   Examples: `<1M`, `>100K`, `=500K`, `!>2M`
*   **Geographic:** `[region]`
    *   Examples: `[US]`, `[US,EU]`, `[!CN]`
*   **Usage:** `{type}`
    *   Examples: `{W}`, `{M}`, `{W,M}`, `{!G}`

### Data Structure (JSON Format):
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

## B. Asset ID Specification

**Format:** `[CATEGORY]-[TYPE]-[CREATOR]-[UNIQUE]-[VERSION]`

### Categories:
*   `DIG` = Digital Assets
*   `PHY` = Physical Assets
*   `EST` = Estate/Property
*   `LEG` = Legal Documents
*   `CRY` = Crypto Assets
*   `INT` = Intellectual Property
*   `MISC` = Miscellaneous
*   `UNK` = Unknown Type
*   `EXP` = Experimental
*   `TMP` = Temporary
*   `HYB` = Hybrid
*   `OTH` = Other
*   `FUT` = Future Rights
*   `OPT` = Options
*   `FWD` = Forward Contracts
*   `RGT` = Future Rights
*   `RSV` = Reservations
*   `MIX` = Mixed Assets
*   `BUN` = Bundle
*   `PKG` = Package
*   `SET` = Set
*   `GRP` = Group
*   `TMP` = Temporary/Time-based
*   `EVT` = Event
*   `SES` = Session
*   `ACC` = Access
*   `PAS` = Pass

### Asset Types (Examples):
*   **Digital:** `IMG`, `VID`, `AUD`, `NFT`, `COL`, `DOC`, `GAM`
*   **Physical:** `ART`, `COL`, `MER`, `PRD`, `VEH`
*   **Estate:** `RES`, `COM`, `LND`, `IND`, `AGR`
*   **Legal:** `CNT`, `WIL`, `TRS`, `LIC`, `AGR`
*   **Crypto:** `TOK`, `NFT`, `CNT`, `WAL`
*   **IP:** `PAT`, `TRM`, `CPR`, `DES`

## C. Verification Requirements

### Verification Requirements:
**Required Information:**
*   License String
*   SOL Address
*   Usage Location/URL
*   Transaction ID
*   Revenue Report (if applicable)
*   Asset ID
*   Payment Information

**Standard Documentation Format:**
```
LICENSE: [LICENSE STRING]
WALLET: [ADDRESS]
USAGE: [URL/LOCATION]
TX: [TRANSACTION ID]
REVENUE: [If Commercial]
ASSET: [Asset ID]
PAYMENT: [Payment Details]
```

**Verification Methods:**
- Email verification with digital signature
- Social media account verification
- API-based verification
- On-chain transaction verification
- Official platform verification portals

## D. Error Codes:

### Verification Errors (100-199):
*   `CODE 101`: Invalid License String Format
*   `CODE 102`: Missing Required Information
*   `CODE 103`: Incorrect Blockchain Specified
*   `CODE 104`: Invalid Blockchain Address
*   `CODE 105`: Invalid User Hash

### Verification Pass (000-099):
*   `CODE 001`: License Verified Successfully
*   `CODE 002`: License Verified with User Data

### Compliance Errors (200-299):
*   `CODE 201`: Insufficient Tokens for License
*   `CODE 202`: Missing Annual Compliance Report
*   `CODE 203`: Late Payment Detected
*   `CODE 204`: Invalid Compliance Proof
*   `CODE 205`: Payment Amount Does Not Match

## E. Platform Integration

### Community:
*   Refer to the official website for community links: mainstreamtoken.com
*   Official communication channels (e.g., Discord, Telegram, or community forums) will be available on the website.

### Decentralized Systems:
*   Utilizing a bonding curve on a decentralized platform for initial token distribution.
*   Public verification system, and data storage on the blockchain.

### Future Updates and Versioning:
*   The MTL protocol is currently at version 1.0.
*   Future versions of the protocol will be documented and published on the project's website.
*   The community will have a say in how future versions of the protocol are defined.
