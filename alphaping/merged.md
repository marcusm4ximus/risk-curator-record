---
cursor:
  subagentId: "bc-188dff79-156e-5c97-84f1-5d8f5b4b135d"
---

# AlphaPing: merged DD draft

**Draft date:** 2026-09-25
**Inputs:** Grok paste plus Morpho vault history, market `badDebt` / `realizedBadDebt`, and primary posts. User-edit before any sheet paste.
**IDs on Events:** `ALPHAPING-20260620-MAINSTREET` (High + Direct), `ALPHAPING-20260622-ALTURA` (High + Indirect), `ALPHAPING-20260710-AZND` (High + Indirect), `ALPHAPING-20260828-DELISTING` (N + Direct).
**Labels:** readable prose. Claims sit in Critics. Do not invent USD or %.

AlphaPing (Alphaping GmbH) is a Swiss Morpho curator. Forum intro 27 Feb 2025. Site alphaping.ch. X `@0xAlphaping`. No Euler curator book was found. Featured site products on 2026-09-25 are Alpha USDC Core V2, Alpha USDC Enhanced V2, and Alpha LINK Enhanced V2. DefiLlama curator TVL was about $5.88M (Ethereum about $5.31M, Hyperliquid about $577k).

`usd_lost` is unknown on every row. `$18M`, `$23M`, `$8.3M`, `$10M`, the later msY supply mark near `$140M`, and the AVLT unrealized mark near `$5.88M` are not this curator's sourced haircut.

**Vaults checked (2026-09-25)**

| Vault | Address | Chain | What the series shows |
|---|---|---|---|
| Alpha USDC Delta V2 | `0x0bF0164D17469241B6E086dA4016DCc54FEAA334` | Ethereum | Created 2026-04-14. Share rose to 1.022348 and froze. TVL about $17.73M on 30 Jul, then 0 from 31 Jul. Deprecated, impaired-market warning. |
| Alpha USDC Asia V2 | `0x35Cbe8542E70fa2f7F9cDF129F19e593F4b4f560` | Ethereum | Created 2026-03-19. Share rose to 1.027575 and froze. TVL about $7.36M on 24 Jul, then 0 from 31 Jul. |
| Alpha USDT Prime | `0x242572d6f1AF7111bcA807ECDd0f74108cEAeD5d` | HyperEVM (999) | Created 2026-04-27. Still capped to AVLT/USD₮0 at 91.5% LLTV. Share 1.058487. Recognized assets about $577k. Liquidity $0. |
| AlphaPing USDC Prime | `0x874E7Fb1aBb4c27a7BbEeeFA39E888b63181939C` | Ethereum | Created 2025-11-08. About $3.72 in WBTC/USDC. Share about 1.033. Not the open AVLT book. |

---

EVENT
curator: AlphaPing
date: 2026-06-20
title: MainStreet
incident_id: ALPHAPING-20260620-MAINSTREET
type: collateral
impact: High
fault: direct
class: affected
severity: High
protocol_or_vault_url: https://app.morpho.org/ethereum/vault/0x0bF0164D17469241B6E086dA4016DCc54FEAA334/alpha-usdc-delta-v2
usd_lost: unknown
pct_of_that_vault_tvl: unknown
status: unresolved
what_actually_happened: MainStreet offered msY as the staked token for a market-neutral options box strategy, while msUSD was meant to be redeemable 1:1 for USDC. Alpha USDC Delta V2 was the Morpho vault lending USDC against msY. It launched on 14 Apr 2026, allowed borrowers to take USDC up to 86% of their collateral value, and was the only supplier to that market. The market used RedStone's MSY_FUNDAMENTAL/USD, a net asset value feed rather than a trading price. Morpho's hourly history shows about $20.8M supplied at 12:00 UTC on 20 Jun, just before Accountable's announcement, while the vault held about $66.7M in total assets. Accountable ended its reserve verification agreement because MainStreet could not meet its standards. Markets had relied on the feed, but outsiders could not inspect the reserves in detail, leaving real risks of fraud, missing reserves, inflated size, or a sudden exit. The announcement set off a run. People borrowed against the net asset value and sold into thin liquidity, leaving the market fully borrowed and unable to liquidate. Crypto Briefing reported msY fell 70% to 85%, while msUSD, which was supposed to stay at $1, touched about $0.06 on 21 Jun and could not be redeemed normally. Morpho later marked supply at about $22.7M on 3 Jul and $25.6M on 9 Jul. Those were not pre-event balances; they were interest building on the stuck loans.
response_summary: MainStreet called the proof of reserves dashboard shutdown a reporting problem, not a solvency problem. On 21 Jun, AlphaPing said its vaults were isolated, there was no exposure across vaults, every other Alpha vault was unaffected, and it was asking MainStreet for maturity dates. It did not rule out losses. On 22 Jun, it said only one vault was exposed and it had found no evidence of asset losses, describing withdrawal demand and liquidity constraints rather than confirmed impairment. That was not proof the vault was safe. On 26 Jun, AlphaPing said it was discussing liquidity and the price with MainStreet and the feed with RedStone. Crypto Briefing and Yahoo described about $18M stuck after msY fell. @YouAreMyYield said insiders appeared able to exit before the public note; separately, Webacy found two wallets that redeemed about $8M at full value from 15 to 20 Jun while msUSD was still near $0.9995, without showing those wallets belonged to the team. On 3 Jul, MainStreet said the remaining box spreads kept the position above 100% collateralized if valued at expiry, were expected to mature at $1, and should return lenders' original USDC principal, with interest given up. That promise is not shown as paid. On 24 Jul, AlphaPing said claims would take more than seven months. On 1 Aug, it said the vault's MainStreet shares had been burned and warned that circulating claims pages were fake. On 28 Aug, it described contract upgrades for a planned recovery, a private creditor group, and unresolved matters, while refusing to promise an outcome. By 26 Sep, 85 days after the 3 Jul promise, AlphaPing had not reported any payment. Suppliers remained in an unpaid recovery, and the loans were economically bad debt.
critics:
lesson_applied_later: no. Example: AVLT and AZND were already live in the same window, and both later needed an unwind or a claims path. The site later features CORE and Enhanced mandates. No dated LLTV or oracle-rule change was found.
funds_recovered: none
sources: primary https://x.com/Main_St_Finance/status/2068432169140400252 ; primary https://x.com/Main_St_Finance/status/2073081791792218222 ; primary https://x.com/0xAlphaping/status/2068533411032256557 ; primary https://x.com/0xAlphaping/status/2069128171480572390 ; primary https://x.com/0xAlphaping/status/2070346371476127989 ; primary https://x.com/0xAlphaping/status/2083487144538992856 ; primary https://x.com/0xAlphaping/status/2080728412499448076 ; primary https://x.com/0xAlphaping/status/2093207470760141288 ; primary https://app.morpho.org/ethereum/vault/0x0bF0164D17469241B6E086dA4016DCc54FEAA334/alpha-usdc-delta-v2 ; primary Morpho GraphQL `vaultV2ByAddress` historical `sharePrice` and `totalAssetsUsd` ; primary Morpho `marketById` `0x23a7d0ff682b323363fb8ba58327ed87001f6306e09b7fd7413bbe4698e749c8` ; commentary https://www.webacy.com/blog/msusd-anatomy-of-a-stablecoin-that-was-built-to-lose-a-run ; commentary https://r.xyz/blog/mainstreet-project-autopsy-report-msusd-and-msy-token-depeg-incident ; commentary https://cryptobriefing.com/morpho-blue-vault-msy-collapse-loss/ ; commentary https://protos.com/latest-defi-yield-vault-drama-wipes-out-69m-of-msusd-and-avlt-market-cap-1/ ; commentary https://dropstab.com/coins/main-street-yield

---

EVENT
curator: AlphaPing
date: 2026-06-22
title: Altura
incident_id: ALPHAPING-20260622-ALTURA
type: collateral
impact: High
fault: direct
class: affected
severity: High
protocol_or_vault_url: https://app.morpho.org/hyperevm/vault/0x242572d6f1AF7111bcA807ECDd0f74108cEAeD5d/alpha-usdt-prime
usd_lost: unknown
pct_of_that_vault_tvl: unknown
status: unresolved
what_actually_happened: AVLT was Altura's yield-bearing vault share. Users deposited stablecoins, and Altura deployed them across market-neutral trading, market making, and real-world asset strategies. AVLT represented their share and was meant to redeem back into stablecoins. Alpha USDT Prime was the HyperEVM Morpho vault that lent USD₮0 against AVLT. It went live on 27 Apr 2026, allowed borrowing up to 91.5% of collateral value, used a Chainlink AVLT/USD feed, and supplied that market. After the MainStreet shock, holders rushed to redeem even though Altura said it had no MainStreet exposure. Protos reported that AVLT fell 14%, from $1.09 to $0.93. Altura paused redemptions because onchain withdrawals were moving faster than its offchain positions could mature, then began an orderly wind-down. People who left early got liquidity while later users were left waiting. By 25 Sep, the Morpho market was fully borrowed with no liquidity and about $5.88M of unrealized bad debt against about $108k of collateral. Realized bad debt was still $0, but that only meant Morpho had not booked the loss. Suppliers could not withdraw, and the collateral no longer covered the debt. The $5.88M was a market estimate, not a published vault haircut.
response_summary: On 23 Jun, Altura said no exploit or loss event had occurred, paused redemptions, and started winding down its offchain positions. On 26 Jun, AlphaPing said the real-world assets were being unwound so borrowers could reduce their loans. Altura also said HyperEVM lending was unaffected by MainStreet, but that did not mean its own wind-down left lenders safe. On 24 Jul, AlphaPing said Altura had fully repaid on mainnet and HyperEVM withdrawals were expected within about a week. That did not show HyperEVM lenders had been paid. Altura later said a bank had restricted an account holding about £16.4M, blocking the final conversion to USDT, and gave no new payment date. As of 26 Sep, 64 days had passed since AlphaPing's one-week estimate. The Morpho vault still had no liquidity, and no post showed suppliers had received their money. The recovery remained unresolved.
critics:
lesson_applied_later: no. Example: the 91.5% AVLT cap is still on the HyperEVM vault, with liquidity at zero. AlphaPing said a written lesson on duration assets would wait until recoveries settled. That memo was not found.
funds_recovered: none
sources: primary https://x.com/0xAlphaping/status/2070346371476127989 ; primary https://x.com/0xAlphaping/status/2080728412499448076 ; primary https://x.com/AlturaDeFi/status/2069457415318233361 ; primary Morpho GraphQL HyperEVM vault `0x242572d6f1AF7111bcA807ECDd0f74108cEAeD5d` ; primary Morpho market `0x8eecdd03f1e12e03c04abefdb3f536067e071ad2c3f63e7b04c9a034889d0ba5` ; commentary https://protos.com/latest-defi-yield-vault-drama-wipes-out-69m-of-msusd-and-avlt-market-cap-1/ ; commentary https://crypto-economy.com/altura-blames-restricted-bank-account-for-delays-in-final-vault-redemptions/ ; commentary https://x.com/Ymaxapp/status/2071951008930890102

---

EVENT
curator: AlphaPing
date: 2026-07-10
title: AZND
incident_id: ALPHAPING-20260710-AZND
type: collateral
impact: High
fault: direct
class: affected
severity: High
protocol_or_vault_url: https://app.morpho.org/ethereum/vault/0x35Cbe8542E70fa2f7F9cDF129F19e593F4b4f560/alpha-usdc-asia-v2
usd_lost: unknown
pct_of_that_vault_tvl: unknown
status: unresolved
what_actually_happened: AZND was Mu Digital's senior USD yield token, backed by a portfolio of Asian government and corporate credit. A junior muBOND tranche was meant to absorb losses first. Alpha USDC Asia V2 was the Morpho vault that lent USDC against AZND. It went live on 19 Mar 2026, allowed borrowing up to 86% of collateral value, used a fixed $1 oracle rather than a trading price, and supplied the market. In late June, AlphaPing said the fund manager had started unwinding bonds, but the repayment expected the following week is not shown as paid. On 10 Jul, Mu Digital announced an orderly wind-down after rising redemption requests and market uncertainty. AZND lost its peg, while the Morpho market remained fully borrowed and its oracle continued to value AZND at $1. Mu Digital said redemptions would move to an official claims portal and would not be guaranteed at par because recoverable assets, realized losses, and wind-down costs would determine the payout. The vault held about $7.36M on 24 Jul, but that was exposure, not a loss figure. At the end of July, its reported assets went to zero, and its shares were burned after a claims snapshot. Suppliers were moved into a claims process with an unresolved loss. No reliable recovery percentage or dollar loss has been published.
response_summary: On 26 Jun, AlphaPing said Mu Digital's fund manager was unwinding the bonds and repayments were expected the following week. On 10 Jul, Mu Digital began the wind-down. A follow-up said an official portal was expected within 14 days and that payouts would depend on what could be recovered, not a guaranteed $1 redemption. On 24 Jul, AlphaPing said the snapshot had been taken. On 1 Aug, it said the vault's AZND shares had been burned and warned that circulating claims pages were fake. On 28 Aug, AlphaPing said outstanding matters were still unresolved and it would not promise outcomes before they were confirmed. It did not publish recovered dollars or a haircut percentage. As of 26 Sep, 78 days had passed since the wind-down began. No post showed depositors had been paid, and it was still unclear what they would get back.
critics:
lesson_applied_later: unclear. Example: alphaping.ch now features CORE and Enhanced "senior secured" products. No dated memo banning duration or private-credit collateral was found. AlphaPing said it would publish its view after settlements.
funds_recovered: none
sources: primary https://x.com/MuDigitalHQ/status/2075417387625832880 ; primary https://x.com/0xAlphaping/status/2070346371476127989 ; primary https://x.com/0xAlphaping/status/2080728412499448076 ; primary https://x.com/0xAlphaping/status/2083487144538992856 ; primary https://x.com/0xAlphaping/status/2093207470760141288 ; primary https://app.morpho.org/ethereum/vault/0x35Cbe8542E70fa2f7F9cDF129F19e593F4b4f560/alpha-usdc-asia-v2 ; primary Morpho GraphQL historical `sharePrice` and `totalAssetsUsd` ; primary https://app.mudigital.net/redemption ; commentary https://x.com/EthanDeFi_/status/2075583596396732868 ; commentary https://matrica.io/community/mu-digital

---

EVENT
curator: AlphaPing
date: 2026-08-28
title: Delisting
incident_id: ALPHAPING-20260828-DELISTING
type: ops
impact: N
fault: direct
class: non-materially-affected
severity: N
protocol_or_vault_url: https://app.morpho.org/curator/alphaping
usd_lost: unknown
pct_of_that_vault_tvl: unknown
status: unresolved
what_actually_happened: On 28 Aug 2026 AlphaPing posted a section titled Morpho Delisting. It said duration-based assets are hard to support in current DeFi rails, that some public criticism left out context, and that it would not argue in public. The same post kept the MainStreet recovery and the Mu Digital claims update. Morpho Association's listing policy says delisting is a front-end choice. Contracts remain usable on-chain. Grounds include risk signals, oracle or asset problems, and loss of curator recognition. No Morpho decision memo or effective timestamp was found. Morpho's curator search did not return an AlphaPing curator record on 2026-09-25. Delta V2, Asia V2, Ethereum Prime, Ethereum Core, PT Frontier, and HyperEVM Prime all read `listed: false`, with `not_whitelisted` warnings. Trading Strategy's curator page the same day showed 0 vaults and $0 in that aggregator, which is a listing state, not an on-chain zero. PT Frontier still had about $2,252 at share about 1.041. No new exploit is attached to this date, and no depositor haircut is attached to the UI removal. The collateral losses are the other rows. This row is the delisting itself: AlphaPing lost curator recognition on the Morpho front end. That is their own standing, with no separate user-money figure, so impact is N and fault is Direct. `usd_lost` stays unknown. Do not write 0.
response_summary: AlphaPing said recovery and user communication came first. It did not post a Morpho appeal.
critics: Ethan DeFi had already asked, on 10 Jul, for AlphaPing vaults to be removed from the Morpho UI.
lesson_applied_later: unclear. Example: the public site now leads with CORE and Enhanced mandates. Whether Morpho will list those vaults was not shown.
funds_recovered: n/a
sources: primary https://x.com/0xAlphaping/status/2093207470760141288 ; primary https://docs.morpho.org/get-started/resources/interface-listing-policy/ ; commentary https://tradingstrategy.ai/vaults/curators/alphaping

---

## Not on Events tab

- November 2025 CORE window on alphaping.ch. The site says USDC and WETH CORE vaults processed $217.5M of withdrawals from 1 Nov through 8 Nov 2025 and that no realized vault-level bad debt was observed. That is a stress note, not a loss row.
- Second msY/USDC market at 91.5% LLTV, `0xb317d11c2bc2c0c8e6ea3c6517731cf667c86f2c716624be50319a6d32a97e8d`. Supply mark about $16.2M on 2026-09-25, realized bad debt $0. Webacy did not attribute the seeder to AlphaPing.
- `@0xVelocity88` jail claim. Rumor and invective.
- DefiLlama's about $5.88M curator TVL and the stated 30-day decline. The Hyperliquid slice matches the open AVLT vault's recognized assets. No separate loss print was found.

## STANDING CHECKS

**Events (H/M/L/N/D/I):** `3H 0M 0L 1N 4D 0I`

**Risk docs:** active. alphaping.ch carries mandate language and a November 2025 stress note (withdrawals processed, site says no realized vault-level bad debt). No post-June LLTV or oracle policy memo was found. Morpho in-app disclosure text was not re-opened this pass.

**Active since:** 2025-02. Morpho forum introduction 27 Feb 2025. Earliest vault dated in this pass is Ethereum AlphaPing USDC Prime, created 8 Nov 2025.

**PoC:** X `@0xAlphaping`. Web https://alphaping.ch. The paste names founder Gabriel Weide from press. That name was not checked in a registry this pass. No official Telegram was sourced.

**Any new incident since 2026-08-28:** none. MainStreet recovery was still described as planned on that date. HyperEVM AVLT liquidity was still zero on 2026-09-25, with unrealized bad debt still on that market. Both are the June rows, not a new event. AZND payment at par is not shown. The 28 August 2026 note is cut off in public mirrors before any sentence about how many users had claimed.

**Repeated lesson:** yes. msY, AVLT, and AZND are three duration or private-credit books that hit oracle, liquidity, or unwind stress inside the same June to July window. The November 2025 CORE withdrawal note did not stop those listings.
