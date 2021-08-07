---
thumbnail: 
auth: admin
layout: postNews
categories: news
title: Qitmeer Network Development Report (2020.7.27-2020.8.2)
tags:
  - news
---


# Qitmeer Network Development Report

## News 


- Qitmeer Network Foundation is authorized by the Sokoto Zakat Bureau of Nigeria to use the Qitmeer Network and Kahf wallet to realize humanitarian assistance to the disaster victims in Sokoto, to promote the application of Blockchain Technology in charity and to build a decentralized, open and transparent Charitable DeFi platform. The first version of the website system is already in place, enabling the donation process to be open and transparent, and the source and destination of donations to be tracked on the blockchain using the public address of where the donations are received.



## Community Governance

- Qitmeer's Cryptonomics Research Group translated and organized George Samman & David Freuden's latest research paper on DAO, "DAO: A Decentralized Governance Layer for the Internet of Value". We hope that more people interested in DAO can join the discussion on this topic to discuss the application of DAO to Qitmeer Network governance.

  Translation: https://www.qitmeertalk.org/t/dao/1239


## Project Development Progress

### Core Code Update

- Separated the invalid tx cache. By default, the invalid tx index DB will not generate unless you use the cacheinvalidtx flag, and added a separate API of invalid tx.

  code: 
https://github.com/Qitmeer/qitmeer/pull/339/commits/3de9b75b86dd648d46c6e06f6aba301a68386bb6
  
- Fixed a bug that caused nodes to crash when using the dropindex flag.

  code:
https://github.com/Qitmeer/qitmeer/pull/339/commits/fae2cf68e6b888459435023515d7d069f90f24ff

- Disabled the total subsidy function temporarily, which will be enabled in the next version.

  code:
https://github.com/Qitmeer/qitmeer/pull/339/commits/05256df66dd4f0b5f8f5d43d04ae4b0039c27979

- Fix for incompatibility with older versions when using the cacheinvalidtx flag.

  code:
https://github.com/Qitmeer/qitmeer/pull/339/commits/8dbc20a8b24f9d2fa991471d0e0bf7567366bc91

- index key naming optimization.

  code:
https://github.com/Qitmeer/qitmeer/pull/339/commits/0ccae98c627de1395d427fa5516fd7df50fb54cf

- Optimization of dropInvalidTx function.

   code: 
https://github.com/Qitmeer/qitmeer/pull/339/commits/1234fa03a5eecafd94378aa9b8362f7f39257bc6

- Optimized the function of getblocktemplate, and restructured and optimized the CheckTransactionInputs function.

   code:
https://github.com/Qitmeer/qitmeer/pull/345

- Added endpoint for fastibd, which is is a block import tool to assist Qitmeer nodes to start quickly.
   
  code:
https://github.com/Qitmeer/qitmeer/pull/339/commits/5a31469664c7a7f3b9b276a639e4d2f57dd23bee



## Basic Products and Development Tools

- Qitmeer-wallet function optimization: corrected the function of  `getListTxByAddr`.

  code:
https://github.com/Qitmeer/qitmeer-wallet/pull/57/commits/37f31faec8c8aca3403311af88dc113b9b5d61e0

- Qitmeer-wallet function optimization: fixed the display error of transaction list in qitmeer wallet web ([issue34](https://github.com/Qitmeer/qitmeer-wallet/issues/34)). And fixed the problem with the `in` and `out` parameters of the `getlisttxbyaddr` command not working.

  code:
https://github.com/Qitmeer/qitmeer-wallet/pull/57/commits/12e2f604a81cff610d49afb105e6ddaf7f5bb1bb

- Qitmeer-wallet function optimization: optimized the transaction list (txlist) display logic, and improved the readability.

  code:
https://github.com/Qitmeer/qitmeer-wallet/pull/57/commits/185e9ff667862647ee2ee9f8a529210bdefe8228

- Qitmeer-wallet function optimization: optimized the `getTx` command to return results in a user-friendly json format.

  code:
https://github.com/Qitmeer/qitmeer-wallet/pull/58/commits/88de4241526a887ed70ffd57e64e465c1f2356a5

- Qitmeer-wallet function optimization: added a listAccountsBalance command to the qitmeer-wallet console.

  code:
https://github.com/Qitmeer/qitmeer-wallet/pull/59/commits/574f0982414bc333589bfaf769b71eb4c9531b70

- The Qitmeer  has added block display details and updated the pmeer price display API.

  website: 
https://explorer.qitmeer.io/  or  https://meerscan.io/


--------------------------

**Qitmeer Common Links**

- Qitmeer GitHub: https://github.com/Qitmeer/

- Qitmeer Homepage: https://qitmeer.io/

- Qitmeer Explorer: https://explorer.qitmeer.io/  

- Qitmeer docs: https://qitmeer.github.io/docs/en/

- Qitmeer wallet: https://www.kahf.io/