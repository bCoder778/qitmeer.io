---
thumbnail: 
auth: admin
layout: postNews
categories: news
title: Qitmeer Network Development Report (2020.8.10-2020.8.16)
tags:
  - news
---



# Qitmeer Network Development Report

## News

- The humanitarian aid campaign for the affected people in Sokoto State, mandated by the Nigerian Zakat Bureau, will be officially launched on August 18. The Qitmeer Network, together with more than 30 media organizations, will be broadcasting live online to explain in detail the significance of the event and the vision of the Charitible DeFi, for which the Qitmeer community and related media have been actively preparing.


## Community Governance

- The Qitmeer development team shared its network-related technologies and visions with the international community to enhance information synchronization and understanding of the Qitmeer Network among the international community.

## Project Development Progress

### Core Code Update

- Improved err handling in the index manager to improve user-friendliness when bucket are not found on a corrupted database.

  code:
https://github.com/Qitmeer/qitmeer/pull/352

- Fixed bug where calling RPC isBlue could cause node crashes.

  code:
https://github.com/Qitmeer/qitmeer/pull/356

- Fixed "bucket already exists" error caused by switching on/off `cacheinvalidtx` tag multiple times.

  code:
https://github.com/Qitmeer/qitmeer/pull/357

- Optimized block export tool fastibd to enable export by block ID.

  code:
https://github.com/Qitmeer/qitmeer/pull/358


## Basic Products and Development Tools

- Updated Qitmeer API/SDK for Exchange: Added duplicate judgment of transactions;  fixed the way to get confirmed tx.

  code:
https://github.com/Qitmeer/exchange-lib/pull/3

- Released kahf 0.8.1 beta: UI optimization, line switching and transaction notes added.


**Qitmeer Common Links**

* Qitmeer GitHub: https://github.com/Qitmeer/
* Qitmeer Homepage: https://qitmeer.io/
* Qitmeer Explorer: https://explorer.qitmeer.io/
* Qitmeer docs: https://qitmeer.github.io/docs/en/
* Qitmeer wallet: https://www.kahf.io/