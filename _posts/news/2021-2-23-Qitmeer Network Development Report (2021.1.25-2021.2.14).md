---
thumbnail: 
auth: admin
layout: postNews
categories: news
title: Qitmeer Network Development Report (2021.1.25-2021.2.14)
tags:
  - news
---


# Qitmeer Network Development Report


## Project Development Progress

### Core Code Update

- Added block fee map in getBlockTemplate RPC.

  code:
  https://github.com/Qitmeer/qitmeer/pull/421
  
- Updated coin config in layer2.
  code:
  https://github.com/Qitmeer/qitmeer/pull/422
  
- Fixed BUG about token fees check.

  code:
  https://github.com/Qitmeer/qitmeer/pull/422/commits/4998892afad9171e395dea77468176bf2bfd4506
  
- Code optimization, fixed token amount test BUG.

  code:
  https://github.com/Qitmeer/qitmeer/pull/422/commits/4d39227e6cf31fbddfa3ccb5ee07f36ced7382ab

- Added mixnet coin test payouts. 

  code:
  https://github.com/Qitmeer/qitmeer/pull/424

- Fixed BUG that unable to synchronize data during initial startup.

  code:
  https://github.com/Qitmeer/qitmeer/pull/426

- Fixed BUG about DAG synchronization.

  code:
  https://github.com/Qitmeer/qitmeer/pull/427

- Added peer store for P2P.

  code:
  https://github.com/Qitmeer/qitmeer/pull/429

### Basic Products and Development Tools


- Updated Qitmeer-wallet: removed useless trade judgments.

  code:
  https://github.com/Qitmeer/qitmeer-wallet/pull/77

- Updated Qitmeer-wallet: optimized coinbase transaction spending.

  code:
  https://github.com/Qitmeer/qitmeer-wallet/pull/81

- Updated Qitmeer-wallet: added coinbase maturity config.

  code:
  https://github.com/Qitmeer/qitmeer-wallet/pull/80

-----------------------------------

**Qitmeer Common Links**

* Qitmeer GitHub: https://github.com/Qitmeer/
* Qitmeer Homepage: https://qitmeer.io/
* Qitmeer Explorer: https://explorer.qitmeer.io/
* Qitmeer docs: https://qitmeer.github.io/docs/en/
* Qitmeer wallet: https://www.kahf.io/