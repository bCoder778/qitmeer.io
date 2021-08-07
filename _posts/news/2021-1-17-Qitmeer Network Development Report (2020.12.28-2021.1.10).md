---
thumbnail: 
auth: admin
layout: postNews
categories: news
title: Qitmeer Network Development Report (2020.12.28-2021.1.10)
tags:
  - news
---

# Qitmeer Network Development Report


## Project Development Progress

### Core Code Update

- Updated RPC client management function: support block information acquisition,

  code:
https://github.com/Qitmeer/qitmeer/pull/414/commits/61b5d268f194019bcf2025b272ffa7206db6f3b9

- Updated RPC client management function: support get block by ID.

  code:
https://github.com/Qitmeer/qitmeer/pull/414/commits/d243a96a338961e880754fd1dd0d894e13a6c395

- Updated RPC client management function: support miner management and transaction management.

  code:
https://github.com/Qitmeer/qitmeer/pull/414/commits/033619862b5455b5cf99267fed78996ff9be4826

- Updated RPC client management function: support log level setting.

  code:
https://github.com/Qitmeer/qitmeer/pull/414/commits/74b993e8cef8815420ef095cccf6428551d06cbc

- Optimized RPC client example about TLS.

  code:
https://github.com/Qitmeer/qitmeer/pull/414/commits/70b927fd22d65865cb05571a9321dcabed75fdd5

- Add RPC notification of accepted blocks being reorganized.

  code:
https://github.com/Qitmeer/qitmeer/pull/415

- The draft token enhancement for qitmeer have been merged: Initial token issuance function has been realized.

  - Currently only works for privnet.
  - The tokenstatedb has not been fully implemented yet so does the illegal check for the token balance.
  - Token only issued on genesis at the current stage, it will refactor to using the token-mint/unmint tx in the future.
  - More integrated test on token-mint and token-unmint will be added in the future.

  code:
https://github.com/Qitmeer/qitmeer/pull/416



### Basic Products and Development Tools

- Updated Qitmeer-wallet compilation files to work with Qitmeer development versions.

  code:
https://github.com/Qitmeer/qitmeer-wallet/pull/71/commits/57e77d0ed80ceb20578fcbf99d27bac10fc6db49

- Updated Qitmeer API/SDK library for exchange: added an automatic processing cost tag.

  code: 
https://github.com/Qitmeer/exchange-lib/pull/6


-----------------------

**Qitmeer Common Links**

* Qitmeer GitHub: https://github.com/Qitmeer/
* Qitmeer Homepage: https://qitmeer.io/
* Qitmeer Explorer: https://explorer.qitmeer.io/
* Qitmeer docs: https://qitmeer.github.io/docs/en/
* Qitmeer wallet: https://www.kahf.io/