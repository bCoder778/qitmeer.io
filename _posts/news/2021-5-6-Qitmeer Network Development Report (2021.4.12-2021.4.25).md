---
thumbnail: 
auth: admin
layout: postNews
categories: news
title: Qitmeer Network Development Report (2021.4.12-2021.4.25)
tags:
  - news
---



# Qitmeer Network Development Report

## Project Development Progress

### Core Code Update

- Optimized block DAG consensus protocol.

  code:
https://github.com/Qitmeer/qitmeer/pull/473/commits/139564ce407583840785a7013a14c2abce9d12ce

- Optimized the calling logic of "getblockadvanced" function.

  code:
https://github.com/Qitmeer/qitmeer/pull/473/commits/0bcb0de705ff9fa657eedd15c9bd011bd4f8e503

- Fixed the bug in the testutils that assert error after rescan completion.

  code:
https://github.com/Qitmeer/qitmeer/pull/476

- Fixed BUG that occured in the nil pointer dereference of p2p synchronization peer.

  code:
https://github.com/Qitmeer/qitmeer/pull/478

- Fixed BUG in payledger config.

  code:
https://github.com/Qitmeer/qitmeer/pull/479/commits/89942e9ad81c6c92115e7155360adf851e8d8f34

- Optimized save ouput file for Ledger.

  code:
https://github.com/Qitmeer/qitmeer/pull/479/commits/df2c4b5c08e5ee2da03516bca8497895b4887a13

- Payledger support generate locked payouts.

  code:
https://github.com/Qitmeer/qitmeer/pull/479/commits/cbc0848a158bbe83742dbd03a0f0cb903885b3b5

- Optimized payledger.

  code:
https://github.com/Qitmeer/qitmeer/pull/479/commits/f9fc96c6f69ba57e2b07b4ee439a4dffa0539b80

- Fixed address datarace in testutils.

  code:
https://github.com/Qitmeer/qitmeer/pull/480

- Added a new function NewScriptHashAddress: this function returns a new AddressScriptHash.

  code:
https://github.com/Qitmeer/qitmeer/pull/481/commits/e279f91b37a699df1046d1b88f8aa2e5c8ec3625

- Optimized non standard input check.

  code:
https://github.com/Qitmeer/qitmeer/pull/481/commits/38a67abd12aecc071f0122c7c87c3d5ac9f2ab2e

- Payledger test and testwallet support locktime tx.

  code:
https://github.com/Qitmeer/qitmeer/pull/481/commits/583cab512b18852b49bb678686e5288020090e15

- Payledger test for CHECK LOCK TIME VERIFY.

  code:
https://github.com/Qitmeer/qitmeer/pull/481

- Fixed BUG about P2P data race.

  code:
https://github.com/Qitmeer/qitmeer/pull/482

### Basic Products and Development Tools

- Updated Qitmeer test wallet, fixed the test cases.

  code:
https://github.com/Qitmeer/qitmeer-wallet/pull/87

- Update Qitmeer-wallet workflows logic.

  code:
https://github.com/Qitmeer/qitmeer-wallet/pull/89


--------------------

**Qitmeer Common Links**

* Qitmeer GitHub: https://github.com/Qitmeer/
* Qitmeer Homepage: https://qitmeer.io/
* Qitmeer Explorer: https://explorer.qitmeer.io/
* Qitmeer docs: https://qitmeer.github.io/docs/en/
* Qitmeer wallet: https://www.kahf.io/