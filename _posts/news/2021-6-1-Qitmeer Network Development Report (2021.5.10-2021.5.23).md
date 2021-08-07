---
thumbnail: 
auth: admin
layout: postNews
categories: news
title: Qitmeer Network Development Report (2021.5.10-2021.5.23)
tags:
  - news
---



# Qitmeer Network Development Report

## Project Development Progress

### Core Code Update

- Optimized the function of TokenState update of the blockchain.

  code:
https://github.com/Qitmeer/qitmeer/pull/484/commits/faedbe6eebe0694b891fa2c57bd9742ea81c3d10

- Transaction type verification function update: maake restrictions according to different transaction types.

  code:
https://github.com/Qitmeer/qitmeer/pull/484/commits/aabfaa324eb0f98362ce68fd891ee0d229927d35

- Token status check function update: check token status before connect block.

  code:
https://github.com/Qitmeer/qitmeer/pull/484/commits/d255b98ef7a8cf36e6265557afe3b6385d1f9aa2

- Fix bug in token state root calculation function.

  code:
https://github.com/Qitmeer/qitmeer/pull/484/commits/3321082e884d9f4cd6d585fc87ccbe42d167e894

- Added support for transaction type config.

  code:
https://github.com/Qitmeer/qitmeer/pull/484/commits/18dc91641f3da3e67e96df564a80f36ebc73413b

- Optimized new updates from transactions.

  code:
https://github.com/Qitmeer/qitmeer/pull/484/commits/f63fda0acf016ed1819ed9d357a5a2bf7976e2aa

- Token raw transaction creation function support minting transaction.

  code:
https://github.com/Qitmeer/qitmeer/pull/484/commits/8a74f84593546fc60a7cd13821ff570598db2b6f

- Added function: accept non standard transactions.

  code:
https://github.com/Qitmeer/qitmeer/pull/484/commits/bd8fc93eb32edb83e334030e0d3e84c1c4080aeb

- Fixed the error in Token minting transaction.

  code:
https://github.com/Qitmeer/qitmeer/pull/484/commits/66984098e10d596277b07a5031f35a6dc3548c00

- Implementation of Genesis lock tx generate script.

  code:
https://github.com/Qitmeer/qitmeer/pull/486

- Modified genesis mapping data format.

  code:
https://github.com/Qitmeer/qitmeer/pull/486/commits/f8c27e1840ac1701fc0eba2557839a30e2cd1673

- Optimized DAG load.

  code:
https://github.com/Qitmeer/qitmeer/pull/488

### Basic Products and Development Tools

- Qtmeer-wallet update: added version management.

  code:
https://github.com/Qitmeer/qitmeer-wallet/pull/90

- Qtmeer-wallet update: fixed red blocks causing UTXO recording errors.

  code:
https://github.com/Qitmeer/qitmeer-wallet/pull/91/commits/e2380d50f658da4f283ceb58997b8849caa554c0

- Qtmeer-wallet update: modified the red block UTXO.

  code:
https://github.com/Qitmeer/qitmeer-wallet/pull/91/commits/08b56287f58f6d7fd2019ad86ec2d93775bb9a35

- Qtmeer-wallet update: fixed the bug that wallet will generate dust transaction.

  code:
https://github.com/Qitmeer/qitmeer-wallet/pull/92


----------------

**Qitmeer Common Links**

* Qitmeer GitHub: https://github.com/Qitmeer/
* Qitmeer Homepage: https://qitmeer.io/
* Qitmeer Explorer: https://explorer.qitmeer.io/
* Qitmeer docs: https://qitmeer.github.io/docs/en/
* Qitmeer wallet: https://www.kahf.io/