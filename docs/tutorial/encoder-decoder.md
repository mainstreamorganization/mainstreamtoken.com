---
sidebar_position: 3
title: Using the MTL Encoder and Decoder
description: Learn how to use the MTL Encoder and Decoder apps to create and verify license strings
---

# Using the MTL Encoder and Decoder

This tutorial will guide you through using the MTL Encoder and Decoder apps to create and understand Mainstream Token Licenses (MTL).

## MTL Encoder

The MTL Encoder app allows you to create custom MTL strings by specifying various parameters.

### Accessing the Encoder

1.  Navigate to the "Apps" menu in the navigation bar.
2.  Select "MTL Generator" from the dropdown menu.

### Using the Encoder

1.  **License Type:** Select one or more license types (Personal, Commercial, Non-Profit, Derivative).
2.  **Token Amount:** Enter the number of Mainstream Tokens (MT) required for the license.
3.  **Fee:** Enter the percentage fee for revenue sharing (0-100).
4.  **Payment Token & Wallet:** Enter the payment token type (e.g., sol:) followed by the wallet address that will receive fees or donations.
5.  **Revenue Splits:** Define how the revenue will be split between different payment token wallets.
6.  **Duration:** Specify how long the license will be valid for.
7.  **Revenue Cap:** Set the maximum revenue allowed under this license.
8.  **Revenue Min:** Set the minimum revenue required to maintain this license.
9.  **Revenue Exact:** Set the exact revenue amount required for this license.
10. **Revenue Max:** Set the maximum revenue threshold that must not be exceeded.
11. **Region:** Specify geographic regions where the license is valid.
12. **Usage:** Specify usage types allowed (e.g., web, mobile, games).
13. **Addendum:** Add additional license terms or references.
14. Click "Generate License String" to create the MTL string.
15. Click "Copy" to copy the generated license string to your clipboard.

## MTL Decoder

The MTL Decoder app allows you to decode an existing MTL string to understand its parameters.

### Accessing the Decoder

1.  Navigate to the "Apps" menu in the navigation bar.
2.  Select "MTL Decoder" from the dropdown menu.

### Using the Decoder

1.  **License String:** Paste the MTL string you want to decode into the text area.
2.  Click "Decode License" to view the decoded parameters.
3.  Review the decoded information, including license types, token amount, fee, splits, duration, revenue conditions, region, usage, and addendum.

## Example

Let's say you want to create a license for commercial use, requiring 1000 MT tokens, with a 5% fee, a 30% split to the protocol, 40% to the creator, and 30% to a smart contract, valid for 1 year, with a revenue cap of $1 million, for use in the US, on the web, with a CC-BY license, accepting Solana for payments.

Using the MTL Encoder, you would:

1.  Select "Commercial Use".
2.  Enter "1000" for the token amount.
3.  Enter "5" for the fee.
4.  Enter the fee collection wallet.
5.  Add the revenue splits.
6.  Enter "1" for the duration value and select "Y" for years.
7.  Enter "1000000" for the revenue cap.
8.  Enter "US" for the region.
9.  Enter "W" for the usage.
10. Enter "LICENSE:CC-BY" for the addendum.
11. Click "Generate License String".

The generated MTL string would be:

<pre>
```mtl:1
MTLv0.1-C/1000-5:30:40:30;+1Y<1000000[US]{W}~LICENSE:CC-BY
sol:CRxe1dnmcECvAUZ4eL1GvwHJqRxqZhTYnUpJ8Y3pnYHc
eth:0x742d35Cc6634C0532925a3b844Bc454e4438f44e
btc:bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh
```
</pre>

This example shows multiple payment token options (Solana, Ethereum, and Bitcoin) for fee collection.

You can then use the MTL Decoder to verify the parameters of this license string.

This tutorial provides a basic overview of how to use the MTL Encoder and Decoder apps. For more detailed information, please refer to the specific sections on parameters, verification, and payment.
