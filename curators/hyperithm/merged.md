---
cursor:
  subagentId: "bc-9b0b58f2-3785-5c74-8b02-62e7eed8e194"
---

# Hyperithm, merged DD draft

**Draft date:** 2026-09-15  
**Inputs:** Grok paste `twitter-grok.md` (five INCIDENT blocks + standing checks) + independent Morpho/Euler research. User-edit before any Google Sheet paste.  
**IDs on Events tab:** Stream/xUSD (High + Indirect), rsETH (High + Indirect), ForceDealloc (N + Direct). Recursive loops are an **off-list note**, not an Events-tab row. Redemptions and LoopUnwind are off the tab. Resolv is **not** a loss event.  
**Labels:** FACT / CLAIM / RUMOR in prose. Do not invent USD lost or %.

Hyperithm is a Tokyo/Seoul digital-asset manager (founded 2018; Japan FSA SPBQII; Korea KoFIU VASP). On Morpho/Euler it is a **risk curator**: markets, caps, oracles, allocations. Separately it is **strategy manager** for Midas/Accountable tokens (mHYPER, mHyperETH, mHyperBTC, mXRP, aHYPER) that those Morpho markets often accept as collateral. Do not mix the two books when filling `usd_lost`.

Morpho curator (verified): https://app.morpho.org/curator/hyperithm, about **$67.4M** deposits on 2026-09-15. On-chain curator `0x75178137D3B4B9A0F771E0e149b00fB8167BA325`, owner SAFE `0xEe7E9bb21D5589BF657b94083dB2fA349a3918C8`. Socials: https://www.hyperithm.com/ ; X https://x.com/hyperithm ; TG https://t.me/s/curation_hyperithm ; mHYPER TG https://t.me/s/midas_hyperithm .

**Vaults they curate (Morpho / Euler; snapshot 2026-09-15)**

Morpho V1 (listed unless noted): Ethereum USDC Apex `0x777791C4d6DC2CE140D00D2828a7C93503c67777` (created **2025-02-25**, ~$1.96M; live book **~$1.65M mHyperBTC + ~$0.31M mHYPER**, 77% LLTV); Ethereum USDT Core `0x888883f0eDDF69Ca4BfD00Af93714Ff97F188888` (2025-04-18, ~$113k); Arbitrum USDC Apex `0x4B6F1C9E5d470b97181786b26da0d0945A7cf027` (2025-09-04, ~$408k; sUSDS / sUSDai / WETH / syrupUSDC, no xUSD). Ethereum ETH Apex `0x6D6D386C4855d9b604D7E14c70526407F6272394` (**listed=false**, ~$285 idle WETH; sunset notice on TG, no bad debt). Dust V1 shells on HyperEVM / Katana / Monad.

Morpho V2 (listed, largest book): Monad USDC Apex `0x78999cc96d2Ba0341588C60CcB0E91c6C33CF371` (**2026-01-09**, ~$41.2M; Morpho app ~**63% aHYPER**); Ethereum USDC Apex `0x093272C07700d3cA5301C3Bf9B3A392624179E2F` (2025-10-27, ~$6.3M); Monad cbBTC Apex and partner Apyx/Saturn names that are still Hyperithm-curated. Monad aHYPER/USDC market `0x9e8441e7af65860feac831ebc117473e3033321abf528ebc8fbde1eeaaa3a626`: supply ~$40.3M, **badDebt $0**.

Euler Earn: Ethereum Hyperithm Euler USDC `0x3cd3718f8f047aA32F775E2cb4245A164E1C99fB` (2025-09-04, ~$11.0k, `lostAssets` **0**, guardian `0x0`, 1-day timelock, residual in `eUSDC-63`). Plasma Hyperithm Euler USDT `0x66bE42a0BdA425A8C3b3c2cF4F4Cb9EDfcAEd21d` (`hyperEulerUSDT`, **hidden**; `totalAssets` ~$9.02M, `lostAssets` ~$6.36M, `availableAssets` **0**, last Hyperithm EVK rebalance **2025-11-04**). Plasma USDT0 EVK `0x0a660B3Cbd7DF118501E7Bb0f2D6eC5E5e583Bf8` (`eUSDT0-39`). Leftover xUSD-linked EVK `0xF675FBe777E992f5D5D84AdF41161dC0f20104a6` still ~**$2.66M** allocated.

Kamino / Accountable / Midas issuance are out of Morpho-Euler curator scope except as collateral inside these vaults. Hindenrank ~$262M mixes books, do not use as Morpho TVL.

**Off-list note:** Own-token recursive loops (mHYPER / aHYPER as Morpho collateral). Standing conflict, not a dated blotter row.

---

EVENT
curator: Hyperithm
date: 2025-11-04
title: StreamXUSD
incident_id: HYPERITHM-20251104-STREAMXUSD
type: collateral
impact: High
fault: direct
class: affected
severity: High
protocol_or_vault_url: https://app.euler.finance/vault/0x66bE42a0BdA425A8C3b3c2cF4F4Cb9EDfcAEd21d?network=plasma
usd_lost: unknown
pct_of_that_vault_tvl: unknown
status: unresolved
what_actually_happened: Stream Finance ran yield vaults, and xUSD was its yield-bearing dollar token used as collateral. FACT: on 2025-11-04 Stream Finance disclosed ~$93M lost at an external manager and froze deposits/withdrawals; xUSD depegged. FACT: Hyperithm the same day said mHYPER and its Morpho/Euler books had zero xUSD except the Hyperithm USDT0 Lending Vault on Euler (Plasma), which still had $2.6M in an xUSD/USDT0 market (`0xF675FBe777E992f5D5D84AdF41161dC0f20104a6`) that could not be withdrawn for lack of liquidity. FACT: separately they said Stream held ~$75M leveraged mHYPER and that Hyperithm/Midas would help unwind it. FACT: by 2025-11-11 they said the Hyperithm Euler USDT Earn Vault on Plasma (`0x66bE42a0BdA425A8C3b3c2cF4F4Cb9EDfcAEd21d`) had ~30% in the Re7 xUSD Lending Vault (loss-possible) and ~70% in the healthy mHYPER Hyperithm Lending Vault, with withdrawals paused on both. They did not publish a contemporaneous Earn-vault TVL dollar figure, so 30% cannot be turned into a reliable USD loss here. The 30 November 2025 post says the 70% slice was distributed and links the Plasmascan transaction. That part is shown as done. The 11, 16, and 26 November 2025 posts leave the other about 30% as a right to whatever is later recovered from the Re7 xUSD vault after Stream's legal process. That is a promise of a possible later recovery, not a payment. No later Hyperithm post found in this pass shows that 30% was paid. Not shown as paid. 9 months and 27 days after the distribution. 10 months and 15 days after the 11 November split. Do not paste `lostAssets` or Stream's $93M into `usd_lost`. Arbitrum DRIP (7 Nov 2025) assigned Morpho bad debt of ~$700k to **MEV Capital** and blacklisted Hyperithm USDC from rewards “out of an abundance of caution,” not as the named Morpho loss vault. Cause was curator allocation into a third-party xUSD/Re7 cluster after a public “xUSD removed” claim; effect was frozen redemptions and an unresolved residual slice.
response_summary: Same-day exposure table across Morpho and Euler; later a 70/30 split, dispute form, allocation spreadsheet, Beefy/deBridge special handling, and on-chain 70% distribution. They kept saying other Hyperithm vaults were unaffected. The other about 30% was left as a right to whatever is later recovered from the Re7 xUSD vault after Stream's legal process. That is a promise of a possible later recovery, not a payment. Yearn later cites $150M+ mHYPER redemptions in 48 hours during the Stream unwind (CLAIM, Midas book).
critics: Entropy / Arbitrum DRIP (operational, not a Hyperithm loss table) https://forum.arbitrum.foundation/t/update-stream-finance-xusd-situation-and-impact-assessment/30206 ; ecosystem coverage treated curators as a class (MEV, Re7 named with larger numbers; Hyperithm usually smaller/partial). Primary critic of Hyperithm’s own loop was earlier CBB, not a separate Stream-week exposé with a Hyperithm loss number.
lesson_applied_later: yes + later rsETH and ForceDeallocate responses used faster caps/queues and explicit “other vaults unaffected” tables; residual xUSD itself was not shown as recovered; no for the broader lesson of not lending depositor stables against the curator’s own yield token
funds_recovered: partial
sources: primary https://x.com/hyperithm/status/1985545281279311982 ; primary https://x.com/hyperithm/status/1985572273240302023 ; primary https://x.com/hyperithm/status/1988124642918494642 ; primary https://x.com/hyperithm/status/1990034616774779295 ; primary https://x.com/hyperithm/status/1993603528984789344 ; primary https://x.com/hyperithm/status/1995072076638540047 ; primary https://t.me/s/curation_hyperithm ; primary https://plasmascan.to/tx/0xc0ba9e0f995e6db888e224676a106f82dd32af0ed60da340086b9c02de010deb ; primary Earn vault https://app.euler.finance/vault/0x66bE42a0BdA425A8C3b3c2cF4F4Cb9EDfcAEd21d?network=plasma ; primary leftover market https://app.euler.finance/vault/0xF675FBe777E992f5D5D84AdF41161dC0f20104a6?network=plasma ; primary DRIP https://forum.arbitrum.foundation/t/update-stream-finance-xusd-situation-and-impact-assessment/30206 ; commentary https://www.coindesk.com/markets/2025/11/04/stream-finance-faces-usd93-million-loss-launches-legal-investigation ; commentary https://protos.com/stream-finance-meltdown-winners-and-losers-in-defi-risk-curator-reckoning/ ; commentary https://github.com/yearn/risk-score/blob/master/reports/report/midas-mhyper.md

---

EVENT
curator: Hyperithm
date: 2026-04-18
title: rsETH
incident_id: HYPERITHM-20260418-RSETH
type: collateral
impact: High
fault: indirect
class: affected
severity: High
protocol_or_vault_url: https://app.morpho.org/ethereum/vault/0x6D6D386C4855d9b604D7E14c70526407F6272394/hyperithm-eth-apex
usd_lost: unknown
pct_of_that_vault_tvl: unknown
status: resolved
what_actually_happened: Kelp was a liquid restaking protocol, and rsETH was its restaked ETH token used as collateral. mHyperETH, a Midas vault managed by Hyperithm, used an Aave loop tied to rsETH, while Hyperithm's ETH Apex supply queue also touched related markets. On 18 Apr 2026 at about 17:35 UTC, a LayerZero message approved by one verifier released about 116,500 rsETH without backing. Hyperithm's monitoring flagged the incident 13 minutes later. It notified Kelp 29 minutes in, began unwinding the mHyperETH loop at 40 minutes, and Kelp blocked transfers at 48 minutes. By 18:08 UTC Hyperithm had emptied the ETH Apex supply queue, and by 18:22 it had pulled liquidity from the agETH and mHyperETH markets. On 20 Apr, it said its flagship and curated stablecoin vaults had no direct rsETH exposure, but disclosed about $3.5M of net rsETH exposure inside mHyperETH against about $11.5M of assets. Issuance and redemption were paused while the value was reviewed. Other Midas vaults reopened on 21 Apr, but mHyperETH remained paused. Updates on 24 and 30 Apr described further queue closures. A 27 May report gave the full incident timeline. No later post showed that mHyperETH redemptions resumed.
response_summary: On 20 Apr, Hyperithm listed the vaults it considered unaffected and published the mHyperETH exposure. On 21 Apr, it reopened the other Midas vaults while leaving mHyperETH paused. The 24 and 30 Apr updates described the supply queues and markets it had closed. On 27 May, Hyperithm published a full timeline and said its warning helped Kelp block a second drain. It later treated open supply queues as an attack path. No bad debt was published for its curated stablecoin vaults, but the mHyperETH pause was not shown as resolved.
critics: none sourced that alleged Hyperithm depositor loss on the Morpho/Euler books; industry criticism targeted Kelp/LayerZero/Aave. Oak Research noted Hyperithm Aave rsETH loops on the Midas book.
lesson_applied_later: yes + they explicitly framed open supply queues as an attack path; unclear on Morpho collateral: sibling tokens mHYPER/mHyperBTC/aHYPER remain borrow collateral on Apex vaults, so a future NAV gap on those tokens would still hit Morpho lenders
funds_recovered: n/a
sources: primary https://www.linkedin.com/pulse/incident-report-rseth-exploit-via-layerzero-vulnerability-april-6ggvc ; primary https://x.com/hyperithm/status/2046136627899302274 ; primary https://x.com/hyperithm/status/2046183477020918133 ; primary https://x.com/hyperithm/status/2046449747884736823 ; primary (image write-ups; text empty this pass) https://x.com/hyperithm/status/2047663530296692992 ; https://x.com/hyperithm/status/2049855556131959168 ; primary exploit https://layerzero.network/publications/kelpdao-incident-report.pdf ; commentary https://oakresearch.io/en/analyses/investigations/kelp-dao-hack-full-picture-of-292-million-disaster ; commentary https://unchainedcrypto.com/kelpdao-hack-delays-but-doesnt-derail-tradfis-onchain-plans-morpho-ceo-unchained/ ; primary ETH Apex https://app.morpho.org/ethereum/vault/0x6D6D386C4855d9b604D7E14c70526407F6272394/hyperithm-eth-apex

---

EVENT
curator: Hyperithm
date: 2026-08-29
title: ForceDealloc
incident_id: HYPERITHM-20260829-FORCEDEALLOC
type: ops
impact: N
fault: direct
class: non-materially-affected
severity: N
protocol_or_vault_url: https://app.morpho.org/monad/market/0x9e8441e7af65860feac831ebc117473e3033321abf528ebc8fbde1eeaaa3a626/ahyper-usdc
usd_lost: 0
pct_of_that_vault_tvl: unknown
status: resolved
what_actually_happened: FACT: Morpho Vault V2 `forceDeallocate` is permissionless and moves assets from an adapter into the vault’s idle pool. A zero (or near-zero) penalty lets anyone shove allocated liquidity idle, which can spike utilization and borrow rates without stealing principal. On Monad Hyperithm USDC Apex `0x78999cc9…F371` the MorphoMarketV1 adapter `0x068F2273…07908` has `forceDeallocatePenalty` 1e13/1e18 = 0.001%. FACT: on 2026-08-30 03:01 UTC Hyperithm posted that a yield spike in the Monad aHYPER/USDC market left aHyper principal unaffected, rates were back to normal, and extra borrower interest would be refunded. FACT: on 2026-09-04 they refunded 8,586 USDC to 58 addresses for Aug 29 14:29–Aug 30 02:54 UTC (12.4h), using 25.7% actual average borrow vs 9.5% normal (16.2pp), rounded up to 1 USDC. Grok’s ~10,000 USDC extra-interest estimate is not in those two tweets (CLAIM/drop). Morpho GraphQL 2026-09-15: this market `badDebt` and `realizedBadDebt` are **0**; supply ~$40.3M. Extra interest is not vault TVL destruction, so `pct_of_that_vault_tvl` stays unknown (not 0). Independent first research pass missed this row; Grok found it.
response_summary: Same-weekend public note, rate normalized via supply, refund paid with a methodology sheet, Monadscan payout address, and a question form. Grok’s “safeguards behind a three-day timelock” was not in the opened tweets; the V2 penalty setter is timelocked at the protocol level. Penalty on this adapter is still effectively zero as of 2026-09-15.
critics: none sourced beyond describing the calls as malicious; Hyperithm itself used that framing.
lesson_applied_later: unclear + too recent to see a repeat; live penalty still 0.001%, so the V2 liquidity path remains cheap to abuse until they raise it
funds_recovered: full
sources: primary https://x.com/hyperithm/status/2093896863644839947 ; primary https://x.com/hyperithm/status/2095787569011454095 ; primary market https://app.morpho.org/monad/market/0x9e8441e7af65860feac831ebc117473e3033321abf528ebc8fbde1eeaaa3a626/ahyper-usdc ; primary vault https://app.morpho.org/monad/vault/0x78999cc96d2Ba0341588C60CcB0E91c6C33CF371/hyperithm-usdc-degen ; primary mechanism https://docs.morpho.org/developers/contracts/morpho-vaults-v2/

---

No Resolv loss row. On 22 Mar 2026 Resolv USR was exploited; Oak/Nexus Morpho loss tables name Gauntlet, Re7, 9summits, not Hyperithm. A Nexus annex listed Hyperithm USDC among vaults that had wstUSR/USR markets **enabled**; live Ethereum V1 allocation is mHyperBTC/mHYPER/idle, **$0** to USR. Telegram `@curation_hyperithm`: “Hyperithm has no direct or indirect exposure to Resolv across all vaults.” That is a curator CLAIM plus an empty live book, not a dated loss.

---


## Not on Events tab
- `HYPERITHM-20251010-REDEMPTIONS`, Redemption run (~90% AUM paid, 0% share-price DD), not a hole.
- `HYPERITHM-20251018-RECURSIVE`, Standing conflict (own-token recursive loops). Not a dated incident, details are preserved above.
- `HYPERITHM-20251029-XUSDLOOP`, Pre-Stream unwind comms. Not a second incident; Stream stays High.

## STANDING CHECKS (2026-09-15)

**Events (H/M/L/N/D/I):** `2H 0M 0L 1N 2D 1I`

Risk docs: none
- Ethereum V1 Apex has a short Morpho in-app “Risk Disclosures” paragraph. Arbitrum V1 Apex and several V2 vaults show **“Curator has not submitted a Disclosure.”**
- Morpho forum Hyperithm category: intro (2025-03-03) and Aragon guardian + 3-day timelock (2025-07-01). No parameter sheet, no incident thread, no 2026 update. https://forum.morpho.org/c/vaults/hyperithm/38
- `vaults.hyperithm.com` / `accountable.hyperithm.com` = product dashboard and reserve attestation, not a Morpho/Euler allocation manual.
- Euler Earn guardian is the zero address on both Ethereum USDC and Plasma USDT; timelock 86400s.

Active since: 2025-02
- Ethereum V1 Apex created 2025-02-25 08:36:11 UTC (Morpho GraphQL). Forum category 2025-03-03. Ethereum V2 Apex 2025-10-27. Monad USDC Apex V2 **2026-01-09** (not DefiLlama’s 2025-12-23 AUSD Degen shell). HyperEVM USDT0 2025-07-09; Arbitrum 2025-09-04.

PoC handle if public
- X: @hyperithm
- TG: @curation_hyperithm (lending-vault announcements, including Stream 70/30 and Resolv/sunset notices)
- TG: @midas_hyperithm (mHYPER)
- Website https://www.hyperithm.com/

Any new incident since Grok (after 2026-08-29)
- None material found through 2026-09-15 (fee/cap/yield notices only). ForceDealloc refund posted 2026-09-04 is the tail of that same incident, not a new one.

Whether a past lesson showed up again
- **Yes.** 29 Oct 2025 “xUSD fully removed” failed on the Plasma Euler book on 4 Nov. After Stream they published zero-exposure tables; the next real test (rsETH) was a fast queue-kill, not another silent leftover on the flagship stable vaults.
- **Also yes, self-collateral.** yUSD/xUSD counterparties were cut (CLAIM + empty live xUSD on Morpho Apex). Own-token Morpho collateral remains: mHYPER, mHyperBTC, and **aHYPER** as the majority of Monad V2. BA Labs’ Oct 2025 recursive-collateral objection still describes the live design. ForceDeallocate was a new V2-liquidity-path issue, not a repeat of xUSD selection.

CLEAN IF EMPTY
Material curator-scoped Events-tab rows **were** found (Stream High + Indirect, rsETH High + Indirect, ForceDealloc N + Direct; count `2H 0M 0L 1N 1D 2I`). Recursive loops remain an **off-list note**. There is **no evidenced Morpho Apex depositor principal loss** with a public USD figure as of 2026-09-15. The open money question is the **unresolved ~30% Plasma Euler Earn slice** (Stream/xUSD/Re7); leave `usd_lost` unknown. Searched: Morpho app + GraphQL (V1/V2, curator id `hyperithm`); Euler Data API v3 Earn/EVK Plasma+Ethereum; Plasmascan distribution tx; Morpho forum; Summer.fi SIP2.14/2.31; Arbitrum DRIP; Hyperithm X (fxtwitter) and TG; LinkedIn rsETH report; LayerZero Kelp PDF; Oak Resolv/Kelp; Yearn mHYPER report; Protos/Journal du Token/CoinDesk Stream coverage.

Other standing notes (not Events-tab rows)
- Allocator bot `0x345e…3C5f` is active on Morpho V1/V2.
- TG sunset: Mainnet cbBTC Apex + ETH Apex and HyperEVM USDT0, **no bad debt**.
- TG: mHYPER 86% LLTV markets unwinding in favor of 77% LLTV.
- CEO $TRUMP dinner (May 2025) is social color, not a vault event.
