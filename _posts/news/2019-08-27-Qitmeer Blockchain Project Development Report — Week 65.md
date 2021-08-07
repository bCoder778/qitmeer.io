---
thumbnail: /assets/images/news/project-report-2.jpg
auth: admin
layout: postNews
categories: news
title: Qitmeer Blockchain Project Development Report — Week 65
tags:
  - news
---

* Qitmeer weekly updates usually consist of the work updates about the QIPs (Qitmeer improvement protocols), core block-DAG development, browser development, mining and mining pool development, wallet development.
#### Highlights of In this week
* Completed ERC20 Atomic Swaps Contract
* Establsihed multiple test networks of pow mixed mining through parameter configuration

### Work Completed:
#### Qitmeer Core Development
* Modify the Get Balance Interface bug
* Modify Import Private Key bug
* Complete ERC20 Atomic Swaps Contract
* Block Synchronization Improvement
* BlockDAG sharing at a security conference
* whitepaper protocol section improvement
* Setting up multiple test networks of pow mixed mining through parameter configuration
* Improve POW difficulty adjustment design
* Modify miner code: supporting three kinds of pow mixed mining
* Fix the nonce value generates bug 
* Fix Official website bugs: adding product classification
* DAG-browser code refactoring
* Improve the UI of mining pool
* Develop self-adaptive for mobile device
* Fix qitmeer-wallet transaction traversal bugs 
* Fix qitmeer-wallet address generation bugs
* Performance testing on AWS

#### Wallet Development：
* Optimize and improve the wallet app.
    - Integrated promotion function
    - Fixed bug for browsing drop-down refresh 
    - Fixed bug for show transaction detail
    - Fixed bug fro send a transaction
    - Fixed some bug with scan jumps
    - Modify the news list display
    - Fixed some data that was not displayed correctly
* Optimize and improve the wallet master program kahf
    - Fix the bug of failed application test currency
    - Add command line functionality to find detailed trading information by trade id
    - Test modified trades and output bugs
    - Fix API interface to get transaction information
    - Fixed an issue with an unspent transaction error in the same block
    - Add error codes to API interfaces
    - Add a query function API interface
    - Modify API paging to get record bugs
    - Fix the problem of the database being shut down abnormally
    - Add API and command line line node functionality
    - Add JWT authorization for API access
* Develop promotional functions for wallets
    - Complete the HLC airdrop
    - Kahf promotion is completed
    - Fix problems with wallet API SQL injection
    - Fix the official website bug
    - Fixed automatic SSL certificate renewal

### Work In Progress:
#### Qitmeer Core Development：
* Complete USDT Atomic Swaps Contract
* fix ERC20 Atomic Swaps Contract bug
* fix wallet-cli bug
* Optimization and bugfix on Block Reward and DAG consensus algorthm
* Inclusive investigation
* HIPS on Block Reward, Block reference depth and width limitation
* Investigate the problem of miner mining empty block
* DAG-browser code refactoring
* Internal testing of mining pool
* Debug the block generation bug of mining Pool
* Fix performance tests bug: mempool has a lot of transactions, but getBlockTemplate RPC method can't get any transaction.

#### Wallet Development：
* Continue to optimize and improve wallet app
* Continue to optimize and improve the wallet master program kahf
  * Add a cache service for the query function
  * Integrated JWT validation function
* Wallet address generation and transaction sending AMA