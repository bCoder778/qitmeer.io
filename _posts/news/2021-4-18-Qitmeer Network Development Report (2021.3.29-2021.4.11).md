---
thumbnail: 
auth: admin
layout: postNews
categories: news
title: Qitmeer Network Development Report (2021.3.29-2021.4.11)
tags:
  - news
---


# Qitmeer Network Development Report

## Project Development Progress

### Core Code Update

- Added RPC tx notify test code.

  code：
https://github.com/Qitmeer/qitmeer/pull/452

- Updated mainnet addr prefix and fixed some inconsistent in other params and fixed related unit tests.

  code:
https://github.com/Qitmeer/qitmeer/pull/457

- Added a P2P crawler API interface, you can obtain P2P network information according to different crawler configurations.

  code:
https://github.com/Qitmeer/qitmeer/pull/458/commits/8245b5ed6c32fba46fe5c8c67abbb508f5b77538

- Deleted unused configs.

  code:
https://github.com/Qitmeer/qitmeer/pull/458/commits/2842af42aa78745b8c582bfbacfede6b260c3011

- Fixed testutils.

  code:
https://github.com/Qitmeer/qitmeer/pull/459

- Fixed test address not right.

  code:
https://github.com/Qitmeer/qitmeer/pull/462

- Optimized disableTLS.

  code:
https://github.com/Qitmeer/qitmeer/pull/463

- Added support for P2P network rebroadcast.

  code:
https://github.com/Qitmeer/qitmeer/pull/465

- Defined transaction type.

  code:
https://github.com/Qitmeer/qitmeer/pull/466/commits/3d7792dc37d858eb1bfd31d6c31748947bacf4bf

- Updated genesis signscript for mainnet.

  code:
https://github.com/Qitmeer/qitmeer/pull/466/commits/c6524a85a4f0a28da5243f4a6e74906bbee142d4

- Added tx type test and fixed typo.

  code:
https://github.com/Qitmeer/qitmeer/pull/466/commits/4503549744ec9db584c2bc63ae6c1244f9dfa513

- Added more comments on tx types.

  code:
https://github.com/Qitmeer/qitmeer/pull/466/commits/44ef7a418496f64149feecd955a3f317184f01a4

- Added the tx type of genesis-spent and genesis-lock.

  code:
https://github.com/Qitmeer/qitmeer/pull/466/commits/2b05c37f1605be951fc334675157525d89814727

- Added the specification of the genesis-spent and genesis-lock tx.

  code:
https://github.com/Qitmeer/qitmeer/pull/466/commits/df258f26b0525d4b7a357e7dfc582ef5e18efb4b

- Removed TxTypeGenesisSpent.

  code:
https://github.com/Qitmeer/qitmeer/pull/466/commits/bc89de7d1aeb9546d22bcee14ca2fe8c0592fcb5

- Fixed BUG:RPC cannot exit when illegal configuration starts.

  code:
https://github.com/Qitmeer/qitmeer/pull/468/commits/ec217205310449bdf54fadc5e5d0769f5ebd195f

- Optimized RPC listen config.

  code:
https://github.com/Qitmeer/qitmeer/pull/468/commits/93aa519d0957e43f3785c2d4cdedafbc2d1d5e2f

- Implementation and testing of genesis transaction.

  code:
https://github.com/Qitmeer/qitmeer/pull/472

### Basic Products and Development Tools

- Added testutils.

  code:
https://github.com/Qitmeer/qitmeer-wallet/pull/86

--------------------------

**Qitmeer Common Links**

* Qitmeer GitHub: https://github.com/Qitmeer/
* Qitmeer Homepage: https://qitmeer.io/
* Qitmeer Explorer: https://explorer.qitmeer.io/
* Qitmeer docs: https://qitmeer.github.io/docs/en/
* Qitmeer wallet: https://www.kahf.io/