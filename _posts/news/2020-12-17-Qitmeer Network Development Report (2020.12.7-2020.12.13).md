---
thumbnail: 
auth: admin
layout: postNews
categories: news
title: Qitmeer Network Development Report (2020.12.7-2020.12.13)
tags:
  - news
---


# Qitmeer Network Development Report

## News

- The Qitmeer Medina Network token Pmeer has been launched on December 17, 2020 in the Innovation Zone of MXC exchange to open pmeer/usdt trading pairs.

  Related Announcement：https://support.mxc-exchange.com/hc/zh-cn/articles/360054420231

- QITMEER was invited to attend the 2020 Firewatch China Tour Shenzhen Conference and was nominated as the best "Public Chain" project of the year by Firewatch.


## Project Development Progress

### Core Code Update

- Expanded header nonce to 8 bytes and restructed pow framework.

  code:
https://github.com/Qitmeer/qitmeer/pull/408

- Optimized P2P error alert function.

  code:
https://github.com/Qitmeer/qitmeer/pull/409/commits/b1630b183d4b61f65e332b3b9c5f85772c0c4ed8

- Optimized p2p handler encode function.

  code:
https://github.com/Qitmeer/qitmeer/pull/409/commits/c071a921fb31843fd7dc118c64110844ea160a3a

- Optimized P2P message response system.

  code:
https://github.com/Qitmeer/qitmeer/pull/409/commits/0cdff4e1c9451ce05cdc79144c521448ca85ceb2

- Used go1.13 std error instead of pkg/errors.

  code:
https://github.com/Qitmeer/qitmeer/pull/410


### Basic Products and Development Tools

- Adapt Qitmeer-wallet to support the internal development network qitmeer 0.10-dev.

  code:
https://github.com/Qitmeer/qitmeer-wallet/pull/67
https://github.com/Qitmeer/qitmeer-wallet/pull/69
https://github.com/Qitmeer/qitmeer-wallet/pull/70

- Update exchange API library: add api services and utxo management, update compiler.

  code:
https://github.com/Qitmeer/exchange-lib/pull/4 
https://github.com/Qitmeer/exchange-lib/pull/5 

-------------------------------------

**Qitmeer Common Links**

* Qitmeer GitHub: https://github.com/Qitmeer/
* Qitmeer Homepage: https://qitmeer.io/
* Qitmeer Explorer: https://explorer.qitmeer.io/
* Qitmeer docs: https://qitmeer.github.io/docs/en/
* Qitmeer wallet: https://www.kahf.io/