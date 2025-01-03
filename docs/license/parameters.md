---
sidebar_position: 2
---

# MTL License Parameters

The Mainstream Token License (MTL) protocol uses a parameter-based system to define the terms of a license. These parameters are encoded into a unique MTL string, which is then used to verify access to the licensed digital asset.

## Core Parameters

### License Types

-   **A (All):** Includes all types below. Can be specified as either "MTLv1-A" or simply "MTLv1".
-   **P (Personal Use):** License for individual, non-commercial use only.
-   **C (Commercial Use):** License for business and commercial applications.
-   **N (Non-Profit Use):** License for non-profit organization use.
-   **D (Derivative Work):** License allows creation of derivative works.

Note: When specifying all usage types, you can use either "MTLv1-A" or simply "MTLv1" - both are equivalent and denote full usage rights.

### Token Amount

-   Specifies the number of Mainstream Tokens (MT) required to access the licensed content.
-   A value of `0` indicates a donation-based license.

### Fee

-   Specifies the percentage fee for revenue sharing.
-   A value of `0` indicates no fee (donation).
-   Maximum value is `100`.

### Fee Collection Wallet

-   The wallet address or payment method that will receive the fees or donations.

### Revenue Splits

-   Defines how the revenue will be split between different wallets.
-   If the total is less than 100%, the remaining percentage will be allocated to the fee collection wallet.

## Optional Parameters

### Duration

-   Specifies how long the license will be valid for.
-   Can be defined in seconds, minutes, hours, days, weeks, months, or years.
-   If not specified, the license is perpetual.

### Revenue Cap

-   Maximum revenue allowed under this license.
-   Example: `1000000` for a $1M cap.

### Revenue Min

-   Minimum revenue required to maintain this license.

### Revenue Exact

-   Exact revenue amount required for this license.

### Revenue Max

-   Maximum revenue threshold that must not be exceeded.

### Region

-   Geographic regions where the license is valid.
-   Example: `US`, `EU`, or `!CN` to exclude China.

### Usage

-   Specific usage types allowed.
-   Example: `W` for web, `M` for mobile, `!G` to exclude games.

### Addendum

-   Additional license terms or references.
-   Example: `LICENSE:MIT` for MIT license.

## Parameter Encoding

The parameters are encoded into a string with the following format:

```
MTLv0.1-<LicenseTypes>/<TokenAmount>-<Fee>:<Split1>:<Split2>;+<Duration><RevenueCap><RevenueMin>=<RevenueExact>!><RevenueMax>[<Region>]{<Usage>}~<Addendum>
```

-   `MTLv0.1-`: Protocol version identifier.
-   `<LicenseTypes>`: Combination of license type codes (e.g., `P`, `PC`, `PCD`).
-   `<TokenAmount>`: Number of tokens required.
-   `<Fee>`: Percentage fee for revenue sharing.
-   `<Split1>, <Split2>`: Revenue split percentages.
-   `<Duration>`: License duration (e.g., `30D` for 30 days).
-   `<RevenueCap>`: Maximum revenue allowed.
-   `<RevenueMin>`: Minimum revenue required.
-   `<RevenueExact>`: Exact revenue amount required.
-   `<RevenueMax>`: Maximum revenue threshold.
-   `[<Region>]`: Geographic regions.
-   `(<State>)`: Geographic states.
-   `{<Usage>}`: Usage types.
-   `~<Addendum>`: Additional terms.

This section provides a detailed overview of the parameters used in the MTL protocol. For more information on how these parameters are used in practice, please refer to the sections on verification and payment.
