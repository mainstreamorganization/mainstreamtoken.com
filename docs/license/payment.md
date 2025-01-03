---
sidebar_position: 4
---

# MTL License Payment

The Mainstream Token License (MTL) protocol facilitates secure and transparent payments for access to licensed digital assets. This process ensures that creators receive fair compensation for their work and that users can access content with confidence.

## Payment Process

1.  **License Acquisition:** A user identifies a digital asset they wish to access, which is protected by an MTL license.
2.  **Token Requirement:** The user must hold the specified amount of Mainstream Tokens (MT) in their Solana wallet to access the content.
3.  **Payment Initiation:** When a user attempts to access the licensed content, the protocol checks if they hold the required MT tokens.
4.  **Token Transfer:** If the user holds the required tokens, the protocol initiates a transfer of the specified amount of MT tokens from the user's wallet to the designated fee collection wallet.
5.  **Revenue Splits:** If the license includes revenue splits, the protocol automatically distributes the tokens to the specified wallets according to the defined percentages.
6.  **Access Grant:** Once the payment is complete, the user is granted access to the licensed digital asset.

## Key Components

### Mainstream Token ($MAIN)

-   The primary method used for payments within the MTL protocol.
-   This can include $MAIN tokens or other payment methods as defined in the license.
-   Payments are used to verify access to licensed content and facilitate revenue distribution.

### Fee Collection Wallet

-   The Solana wallet address that receives the initial payment for the license.
-   This wallet is typically owned by the content creator or licensor.

### Revenue Splits

-   The protocol supports revenue splits, allowing creators to distribute revenue to multiple wallets.
-   Splits are defined as percentages, and the protocol automatically distributes the tokens accordingly.

### Smart Contracts

-   Smart contracts, or other payment systems, are used to automate the payment process.
-   These systems ensure that the payment process is transparent, secure, and tamper-proof.

## Payment Logic

The payment logic is implemented in the smart contracts and client-side applications. The logic includes:

-   **Token Balance Check:** Verifies that the user's wallet contains the required number of MT tokens.
-   **Token Transfer:** Transfers the specified amount of MT tokens from the user's wallet to the fee collection wallet.
-   **Revenue Distribution:** Distributes the tokens to the specified wallets according to the defined percentages.
-   **Transaction Recording:** Records all payment transactions on the Solana blockchain, ensuring transparency and accountability.

## Example

A user attempts to access a digital asset with the following MTL string:

```
LICENSE: MTLv0.1-PC/100-5:20;+30D<1000000[US]{W}
sol@CRxe1dnmcECvAUZ4eL1GvwHJqRxqZhTYnUpJ8Y3pnYHc
```

The payment process would:

1.  Check if the user holds at least 100 MT tokens.
2.  Transfer 100 MT tokens from the user's wallet to the fee collection wallet.
3.  Distribute 5% of the tokens to the fee collection wallet.
4.  Distribute 20% of the tokens to the first split wallet.
5.  Distribute the remaining 75% of the tokens to the fee collection wallet.
6.  Record the transaction on the Solana blockchain.
7.  Grant access to the digital asset.

This section provides a detailed overview of the payment process used in the MTL protocol. For more information on the different versions of the protocol, please refer to the versions section.
