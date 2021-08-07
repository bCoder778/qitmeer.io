---
thumbnail: 
auth: admin
layout: postNews
categories: news
title: Qitmeer Network Development Report (2020.7.20-2020.7.26)
tags:
  - news
---


# Qitmeer Network Development Report

## News 

- On July 22, 2020, the Qitmeer community, in conjunction with the HOTBIT Exchange and the HOTBIT Global community, conducted an online AMA, which elicited an overwhelming response from the international community.

- Due to the COVID-19 epidemic and the war, the survival of the Nigerian people is under serious threat due to the lack of direct access to supplies.In response to the UNHCR's call, Qitmeer Network Foundation has been authorized by the Nigeria Zakat Bureau of Sokoto, to use digital assets to realize humanitarian assistance to the affected people in Sokoto. And in doing so, it will explore the Qitmeer Charitable Defi platform to apply blockchain technology to charity.  Urgent preparations are under way.



## Community Governance

- After the bug hidden in qitmeer-0.9.x was fixed, the Qitmeer team established a follow-up solution for historical invalid transactions by coordinating and communicating with the exchange, mining pools and other community users, and created a new [Qitmeer/0.9.1-invalid-utxo](https://github.com/Qitmeer/0.9.1-invalid-utxo) project to explain the entire issue in detail, as well as provide technical support and services for users to resolve invalid transaction related issues.

- The Qitmeer Cryptonomics Research Group is studying George Samman & David Freuden's latest research paper on DAO, "DAO: A Decentralized Governance Layer for the Internet of Value". to explore the direction of Qitmeer DAO.


## Project Development Progress

### Core Code Update

- Temporarily add RPC: getrawtransactionv2, which can obtain raw transaction data, so as to obtain invalid tx.

  code: 
https://github.com/Qitmeer/qitmeer/pull/339/commits/ed1c1c0d1a5e64f8c765fa26a7cd1a90cea5ad4c
  
- Fixed bug about utxo fetching in payledger.

  code:
https://github.com/Qitmeer/qitmeer/pull/339/commits/ed1c1c0d1a5e64f8c765fa26a7cd1a90cea5ad4c

- Added new feature of invalid tx caching to replace the temporary RPC: GetRawTransactionV2, allowing to fetche invalid tx from an index DB of all transactions.

  code:
https://github.com/Qitmeer/qitmeer/pull/339/commits/8a4d18a3baacff4c5b00cb3931c3c0686d7f3654

- Fixed bug about blockinfo fetching in payledger.

  code:
https://github.com/Qitmeer/qitmeer/pull/339/commits/c40d1359bfb6c97a80008c10bda8c56e8ba433e4

- Optimized the payledger tool to increase its efficiency.

  code:
https://github.com/Qitmeer/qitmeer/pull/339/commits/8bf586cd5a26a4afeeb09e4663722d6aa4919362

- Optimized the representation function of block validation state : BlockStatus.

   code: 
https://github.com/Qitmeer/qitmeer/pull/339/commits/5b4c59afa097f0b310fc529eb6ead95eaf029d6b

- Optimized the function of calculating total subsidy.

   code:
https://github.com/Qitmeer/qitmeer/pull/339/commits/ed21abb0d62a06acb6ed7d4958a3b60db0ff6c01

- Fixed BUG about getting fees.

   code:
https://github.com/Qitmeer/qitmeer/pull/339/commits/798505aab405f7cdeb36350dc7d5e82c9da8d399

- Optimized invalid tx caching config.

  code:
https://github.com/Qitmeer/qitmeer/pull/339/commits/21116906d6b5714076c1f35ba747434085a047de

## Basic Products and Development Tools

- The Qitmeer Explorer has been optimized for displaying transactions and block validation status to make it more comprehensive and user-friendly.

  website: https://explorer.qitmeer.io/ or https://meerscan.io/



--------------------------

**Qitmeer Common Links**

- Qitmeer GitHub: https://github.com/Qitmeer/

- Qitmeer Homepage: https://qitmeer.io/

- Qitmeer Explorer: https://explorer.qitmeer.io/  

- Qitmeer docs: https://qitmeer.github.io/docs/en/

- Qitmeer wallet: https://www.kahf.io/