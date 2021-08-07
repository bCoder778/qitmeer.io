---
thumbnail: 
auth: admin
layout: postNews
categories: news
title: Qitmeer Network Development Report (2020.9.28-2020.10.11)
tags:
  - news
---


# Qitmeer Network Development Report

## News

- On October 14-15, 2020, Qitmeer was invited to take part in the "Huashan Lun Jian - 2020 Network Security Conference and Blockchain Security and Application Innovation Forum" hosted by the Xi'an Municipal People's Government. The theme of this year's forum was "Evolution and Prosperity - Security Linking the Future", which mainly discussed "Blockchain Security and Application Innovation", which is conducive to the safe and healthy development of the blockchain ecosystem. 


## Project Development Progress

### Core Code Update

- Setting of startup parameters for internal development network mixnet: including pow scale, initial difficulty of pow, etc.

  code: 
https://github.com/Qitmeer/qitmeer/pull/369

- Added the event system supporting subscription, and optimized the blockchain notification.

  code:
https://github.com/Qitmeer/qitmeer/pull/370

- Fixed the bug of no coinbase transaction output information.

  code:
https://github.com/Qitmeer/qitmeer/pull/371

- Added github code security analysis system.

  code:
https://github.com/Qitmeer/qitmeer/pull/372

- Fixed allocation-size-overflow issue and explicit string(int) conversion

  code:
https://github.com/Qitmeer/qitmeer/pull/373


### Basic Products and Development Tools

- Restructured Qitmeer mining application qitmeer-miner to support GPU mining and added Opencl kernel for Qitmeer-Keccak256 algorithm.

  code: https://github.com/Qitmeer/qitmeer-miner/pull/163

- Qitmeer wallet API documents update: involves getBalanceByAddr, getAccountByAddress, getBillByAddr, getTxListByAddr and other APIs

  code:
https://github.com/Qitmeer/docs/pull/54


-----------------------

**Qitmeer Common Links**

* Qitmeer GitHub: https://github.com/Qitmeer/
* Qitmeer Homepage: https://qitmeer.io/
* Qitmeer Explorer: https://explorer.qitmeer.io/
* Qitmeer docs: https://qitmeer.github.io/docs/en/
* Qitmeer wallet: https://www.kahf.io/