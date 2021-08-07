---
thumbnail: 
auth: admin
layout: postNews
categories: news
title: Qitmeer Network Development Report (2021.3.15-2021.3.28)
tags:
  - news
---



# Qitmeer Network Development Report

## Project Development Progress

### Core Code Update

- It is found that individual nodes get stuck on qitmeer synchronization because their own processing ability is insufficient or the connectivity is poor, which causes the peers to be disconnected gradually, the details of this problem and processing suggestions can be found in [issue 444](https://github.com/Qitmeer/qitmeer/issues/444).

  Related optimization and explanation:
https://github.com/Qitmeer/qitmeer/pull/445

- Optimized the function of DAG network to get block by order.

  code:
https://github.com/Qitmeer/qitmeer/pull/446/commits/bdf3e2f85602503643f08047cc1d5e09c38eb097

- Optimized order storage capacity of DAG network.

  code:
https://github.com/Qitmeer/qitmeer/pull/446/commits/dff89b8a642e7061bb47b846f6121704464d6543

- Fixed bug in RPC client log.

  code:
https://github.com/Qitmeer/qitmeer/pull/447/commits/f1edb74f98bccc1cd0047c75bce6b2a047c0f754

- Optimized CoinID rule: support to use name as CoinID directly.

  code:
https://github.com/Qitmeer/qitmeer/pull/447/commits/f74daa490de8a497c6486f77e9c5e820f1151b18

- Fixed bug about scan block.

  code:
https://github.com/Qitmeer/qitmeer/pull/448

- Added Merkle tree of storage system state, its root hash: state root has the effect of caching token balance hash, which can speed up future hash verification.

  code:
https://github.com/Qitmeer/qitmeer/pull/451/commits/66aab1830a49f648f5ee496d50a1c1d26475d110

- Token state root unit testing.

  code:
https://github.com/Qitmeer/qitmeer/pull/451/commits/d993384a9a3e757f8b8b58d288bc076389a463dd

### Basic Products and Development Tools

- Qitmeer-wallet update, 0.10 dev modify synchronization logic: format adjustment, reconstruct synchronous data, modify sync startup when error occurs, add clear data, api fix, modify rescan finish status, fix sync function, modify CoinID correlation, fix fees and code specification.

  code:
https://github.com/Qitmeer/qitmeer-wallet/pull/84

- Qitmeer wallet added support for mixnet.

  code:
https://github.com/Qitmeer/qitmeer-wallet/pull/85

- Qitmeer docs update: added swap memory tutorial to solve the Out of Memory problem.

  code:
https://github.com/Qitmeer/docs/pull/62/commits/f769a6129e8c7a64b008178a5e77f269505bf21b

- Qitmeer docs update: updated getUtxo tutorial.

  code:
https://github.com/Qitmeer/docs/pull/62/commits/881465c07919638a410b0282130e19e12560d0c6

- Fixed qitmeer assets issuance desc: Qitmeer assets issuance component, OP_TOKEN, is based on UTXO (Unspent Transaction Output) transaction model, to support massive islamic economic liquidity. OP_TOKEN ensures assets backed by native currency and requires authority-owned licenses to publish assets, prevented from scammer assets.

  code:
https://github.com/Qitmeer/docs/pull/62/commits/c95c4e4e08c88114730be66f7c66836a19e80dae

-------------------

**Qitmeer Common Links**

* Qitmeer GitHub: https://github.com/Qitmeer/
* Qitmeer Homepage: https://qitmeer.io/
* Qitmeer Explorer: https://explorer.qitmeer.io/
* Qitmeer docs: https://qitmeer.github.io/docs/en/
* Qitmeer wallet: https://www.kahf.io/