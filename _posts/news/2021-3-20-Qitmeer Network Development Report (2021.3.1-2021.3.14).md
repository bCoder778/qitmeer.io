---
thumbnail: 
auth: admin
layout: postNews
categories: news
title: Qitmeer Network Development Report (2021.3.1-2021.3.14)
tags:
  - news
---


# Qitmeer Network Development Report

## Project Development Progress

### Core Code Update

* Fixed the bug that blockdag reports error when chain weight is updated

  code:
https://github.com/Qitmeer/qitmeer/pull/433

* Optimized block synchronization log.

  code:
https://github.com/Qitmeer/qitmeer/pull/434/commits/0aa9cd5424fe7aa44bc3552703e2b5744c438c68

* Added DNS service for relay node.

  code: 
https://github.com/Qitmeer/qitmeer/pull/435/commits/58713323e78e8d3bc37356490dd26a103ff9e12b

* README document supplement: description of memory requirements; solution of qitmeer unexpected termination problem; solution of missing go.sum entry(this problem occurs when go version is equal to or higher than 1.16).
 
  code: 
https://github.com/Qitmeer/qitmeer/pull/436

* Added go.sum to repository to agree with go1.16 module rule changes.
 
  code:
https://github.com/Qitmeer/qitmeer/pull/438

* Reorganized & upgraded readme doc.
 
  code: 
https://github.com/Qitmeer/qitmeer/pull/439
https://github.com/Qitmeer/qitmeer/pull/440

* Optimize the validation of token mint/unmint tx.
 
  code: 
https://github.com/Qitmeer/qitmeer/pull/441

* Support IsMainChainTipChange when block accept.

  code:
https://github.com/Qitmeer/qitmeer/pull/443


-------------------------

**Qitmeer Common Links**

* Qitmeer GitHub: https://github.com/Qitmeer/
* Qitmeer Homepage: https://qitmeer.io/
* Qitmeer Explorer: https://explorer.qitmeer.io/
* Qitmeer docs: https://qitmeer.github.io/docs/en/
* Qitmeer wallet: https://www.kahf.io/