---
cursor:
  subagentId: "bc-ad41d4d2-82dc-57e0-89a4-b0c81e9031c6"
---

# Re7 Capital / Re7 Labs, merged DD draft

**Draft date:** 2026-09-15  
**Grok paste:** `twitter-grok.md` (5 INCIDENT blocks). This file is Grok + independent Morpho/Euler/Lista/forum/app research. User-edit before any Google Sheet paste.  
**Labels in prose:** FACT / CLAIM / RUMOR. `usd_lost` and `pct_of_that_vault_tvl` stay `unknown` unless a primary source states a crystallized number for **this** curator’s vault. Re7 “impact” dollars and the 223,000 USDC Merkl pool are **not** `usd_lost`.  
**IDs:** Assignment prefix `R7` (Grok wrote `R7CAPITAL`). Shared-event suffixes match Gauntlet: `20251104-STREAM`, `20260322-RESOLV`.

Re7 Capital is a DeFi investment firm (public site: [re7.capital](https://re7.capital/)). **Re7 Labs** is the vault-curation / research arm ([re7labs.xyz](https://re7labs.xyz/)). There is no separate Morpho/Euler curator named “R7 Capital.” First Morpho vault: Re7 WETH, deployed **2024-01-30**, launched **2024-02-01** ([Re7 Research](https://re7research.substack.com/p/launching-the-re7-weth-metamorpho)). Delegate intro (Morpho forum 2024-11-29): ~20 Morpho vaults, site + X: @Re7Capital. Live PoC: **X: @Re7Labs**. DefiLlama (2026-09-15): Re7 Labs curator TVL **~$86.5M** on 16 chains (World Chain ~$25M, Avalanche ~$20M, Plasma ~$14M). Morpho GraphQL this pass: 45 vaults under Re7 owner safes. Euler metadata: Re7 Labs Cluster / Earn vaults on Ethereum, BSC, Avalanche, Plasma, Linea, Sonic, Berachain, BOB, TAC. Out of scope: Re7 Capital hedge-fund performance, Mellow/Kamino except where a Re7-curated Morpho/Euler/Lista vault is the story.

Live vault URLs (non-exhaustive, 2026-09-15):

- Ethereum Re7 WETH `0x78Fc2c2eD1A4cDb5402365934aE5648aDAd094d0`, https://app.morpho.org/ethereum/vault/0x78Fc2c2eD1A4cDb5402365934aE5648aDAd094d0/re7-weth (~$715k, share ~1.077, idle)
- Ethereum Re7 USDC Core `0x341193ED21711472e71aECa4A942123452bd0ddA`, https://app.morpho.org/ethereum/vault/0x341193ED21711472e71aECa4A942123452bd0ddA/re7-usdc-core (~$18.0k, share ~1.058)
- Base Re7 USDC `0x12AFDeFb2237a5963e7BAb3e2D46ad0eee70406e`, https://app.morpho.org/base/vault/0x12AFDeFb2237a5963e7BAb3e2D46ad0eee70406e/re7-usdc (~$48.1k, **share ~0.205**)
- Base Pyth ETH `0x80D9964fEb4A507dD697b4437Fc5b25b618CE446`, https://app.morpho.org/base/vault/0x80D9964fEb4A507dD697b4437Fc5b25b618CE446/pyth-eth
- Base Re7 Resolv USR `0x00dfDb8C7295a03DCf1ADfF4D21eB5D9D19FB330`, leftover ~$7 TVL
- World Chain Re7 USDC `0xb1E80387EbE53Ff75a89736097D34dC8D9E9045B` (~$10.5M Morpho API)
- Plasma Euler Re7 Labs xUSD `0xF675FBe777E992f5D5D84AdF41161dC0f20104a6`, https://app.euler.finance/vault/0xF675FBe777E992f5D5D84AdF41161dC0f20104a6?network=plasma
- Plasma Euler Earn Re7 USDT0 Core `0xa5EeD1615cd883dD6883ca3a385F525e3bEB4E79`, https://app.euler.finance/earn/0xa5EeD1615cd883dD6883ca3a385F525e3bEB4E79?network=plasma
- Avalanche Euler Re7 Labs Cluster USDC `0x39dE0f00189306062D79eDEC6DcA5bb6bFd108f9`, https://app.euler.finance/vault/0x39dE0f00189306062D79eDEC6DcA5bb6bFd108f9?network=avalanche

Owner safes used by DefiLlama’s Re7 curator adapter include `0x46BA7bCD764a692208781B0Fdc642E272ee597bC` (ETH Morpho/Euler), `0xD8B0F4e54a8dac04E0A57392f5A630CEdb99C940` (Base Morpho), `0x187620a61f4f00Cb629b38e1b38BEe8Ea60d2B8D` (BSC Euler; also Morpho delegate).

---

EVENT
curator: Re7 Capital / Re7 Labs
date: 2025-03-02
title: Pyth lag
incident_id: R7-20250302-PYTHLAG
type: oracle
impact: Low
fault: direct
class: affected
severity: Low
protocol_or_vault_url: https://app.morpho.org/base/vault/0x80D9964fEb4A507dD697b4437Fc5b25b618CE446/pyth-eth
usd_lost: unknown
pct_of_that_vault_tvl: unknown
status: unresolved
what_actually_happened: FACT: On 2025-03-02 between 16:39:35 and 16:44:03 UTC, three positions in the Re7-curated Morpho Base cbETH/WETH market (id `0xd75387f30c983be0aec58b03b51cca52337b496e38cf4effbe995531bf34901c`, LLTV 94.5%) were liquidated for about 14 ETH. Liquidation txs: `0x90a2b7fd5d1e54bba73a20150f587d3c96eccdde2c858e8a9ab63976ba383a6c`, `0xe33c71cefae58f1e0b5ae2dd8a6812d4c4364c40a576107e29fa54a2476e6860`, `0x77b2cf6989255f3d1cefef80fb81c6a85047afa08e08235527e120b5dfab348a`. FACT (Re7 Labs, Morpho forum 2025-03-08): not feed manipulation. Last synced print 16:36:55 UTC had cbETH/ETH ≈ 1.091; a permissionless Pyth ETH/USD push at 16:39:33 UTC moved ETH/USD to $2,405.22 while cbETH/USD stayed at the prior print, so the on-chain ratio fell to ≈ 1.055 and crossed 94.5% LLTV. Spot cbETH/ETH had not depegged. FACT: borrower “jameis” / forum `chicitybulls` said an instant liquidation of 13.345129594 ETH (~$33k in that post). usd_lost unknown: 14 ETH is liquidation notional, not a settled USD P&L, and it is borrower loss, not vault-share insolvency. CLAIM (borrower): Pyth cbETH was “easily manipulated.” Re7, Pyth (Marc Tillement to Blockworks: run your own scheduler), and Morpho (oracle-agnostic; curator picks the feed) all pointed at someone else. No vault-wide bad debt is sourced. WRONG if dated March 2024.
response_summary: Re7 posted a coordinated-with-Pyth review on the Morpho forum. Promised tighter updates, evaluating an independent scheduler, Pyth Pulse, and delay monitoring. Said the issue was isolated and that no immediate change to this or similar-oracle markets was required. No compensation. The borrower asked to be paid on 4 March 2025. Re7's 8 March 2025 review did not promise payment. No later payment was found. Forum replies were readable. As of 26 September 2026, 1 year, 6 months, and 24 days have passed since 2 March 2025. Class stays affected Low.
critics: chicitybulls / jameis - https://forum.morpho.org/t/pyth-cbeth-price-feed-is-easily-manipulated-resulted-in-me-losing-33000/1577 ; Blockworks (no one paid), https://blockworks.co/news/defi-accountability-morpho-pyth
lesson_applied_later: no, example: March 2026 Re7 still listed USR on Morpho with a stale/fixed ~$1 oracle path, a worse “price is not the market” failure than unsynchronized Pyth pushes. Independent scheduler deployment was not verified on-chain in this pass.
funds_recovered: none
sources: primary, https://forum.morpho.org/t/pyth-cbeth-price-feed-is-easily-manipulated-resulted-in-me-losing-33000/1577/8 ; https://basescan.org/tx/0x90a2b7fd5d1e54bba73a20150f587d3c96eccdde2c858e8a9ab63976ba383a6c ; market, https://app.morpho.org/base/market/0xd75387f30c983be0aec58b03b51cca52337b496e38cf4effbe995531bf34901c ; commentary, https://blockworks.co/news/defi-accountability-morpho-pyth

---

EVENT
curator: Re7 Capital / Re7 Labs
date: 2025-11-04
title: Stream
incident_id: R7-20251104-STREAM
type: collateral
impact: High
fault: direct
class: affected
severity: High
protocol_or_vault_url: https://app.euler.finance/vault/0xF675FBe777E992f5D5D84AdF41161dC0f20104a6?network=plasma
usd_lost: unknown
pct_of_that_vault_tvl: unknown
status: unresolved
what_actually_happened: Stream Finance ran yield vaults, and xUSD was its yield-bearing dollar token. Re7's Euler Earn vault on Plasma lent USDT0 against xUSD in an isolated market that went live on 5 Oct 2025. After a drawdown on 10 Oct, Re7 found Stream borrowing USDT0 against its own xUSD but accepted assurances that the position was stable. By 29 Oct borrowing costs had risen, so Re7 contacted Stream again. Stream partly repaid the Plasma loan and returned $7M USDC on Worldchain. Re7 then pulled the liquidity it could, set the xUSD caps to zero, and removed the market from the Earn supply queue. On 4 Nov, Stream disclosed an external-manager loss of about $93M, froze deposits and withdrawals, and xUSD fell sharply. Re7's later recap put about $14.65M USDT0 in the isolated Plasma group. On 26 Sep 2026 the xUSD vault still showed about $14.3M of stated assets, a share price near 1.014, capped deposits, and an illiquidity warning. The share price and open-redemption label do not show that lenders could withdraw in full. No final haircut was published, but the unpaid loans and stuck liquidity remained a material economic loss.
response_summary: On 4 Nov, Re7 published an exposure note and cut the remaining caps. On 8 Nov, it published a longer recap and said it was working with external partners and legal advisers. On 21 Nov, Re7 said Pillsbury had served notices demanding repayment and preservation of evidence. Legal notices were not repayment, and Re7 did not promise to make depositors whole. On 30 Jun 2026, Stream opened a creditor-information form. That was a claims step, not a payout. As of 26 Sep 2026, 10 months and 22 days had passed since the loss disclosure, and no post showed lenders had been paid. Euler Labs said the protocol operated as designed and that its treasury would not make holders whole.
critics: Cryptopolitan depositor backlash - https://www.cryptopolitan.com/re7-labs-criticism-from-stream-insolvency/ ; Protos “nothingburger” update, https://protos.com/users-blast-curators-re7-and-silo-for-handling-of-defi-turmoil/ ; Hindenrank $27.4M write-up - https://hindenrank.com/blog/how-does-re7-labs-work
lesson_applied_later: no, example: four months later Re7 still had USR listed as Morpho collateral with a ~$1 oracle path.
funds_recovered: partial
sources: primary, Stream freeze https://www.coindesk.com/markets/2025/11/04/stream-finance-faces-usd93-million-loss-launches-legal-investigation ; Re7 X (cited, body not retrieved) https://x.com/Re7Labs/status/1985694621251387506 https://x.com/Re7Labs/status/1987204592283832531 ; indexer, https://tradingstrategy.ai/vaults/0x39de0f00189306062d79edec6dca5bb6bfd108f9 (Cluster) and https://tradingstrategy.ai/vaults/re7-labs-xusd ; commentary, https://thedefiant.io/news/defi/stream-finance-starts-collecting-creditor-claims-in-step-toward-global-resolution ; ChainCatcher paraphrase of Re7 recap https://www.chaincatcher.com/en/article/2218539

---

EVENT
curator: Re7 Capital / Re7 Labs
date: 2025-11-04
title: Elixir
incident_id: R7-20251104-ELIXIR
type: collateral
impact: High
fault: direct
class: affected
severity: High
protocol_or_vault_url: https://app.euler.finance/earn/0xa5EeD1615cd883dD6883ca3a385F525e3bEB4E79?network=plasma
usd_lost: unknown
pct_of_that_vault_tvl: unknown
status: unresolved
what_actually_happened: Elixir was a liquidity network, and deUSD was its synthetic dollar, with sdeUSD as the staked version. FACT: Elixir’s deUSD was in the Stream circular-lending graph (YAM: Elixir ~$68M lent to Stream). deUSD/sdeUSD depegged in the same week. CLAIM (Re7 recap via ChainCatcher/Bitget, 2025-11-09 wire of tweet 1987204592283832531): on 2025-10-21 Elixir asked a $6–7M distribution limit from Re7 Labs Euler Earn USDT0 on Plasma; funds were borrowed and sdeUSD/deUSD markets went to 100% util; on 2025-10-27 Re7 decided the borrower was Stream-linked and started cutting exposure; by 2025-11-06 all sdeUSD-collateral borrows on Plume were repaid; Re7 put Elixir “total impact” near $13.974M, with Bitget adding that residual sat on Morpho Worldchain plus Euler Avalanche/Plasma after Plume was clean. usd_lost unknown: “impact” ≠ haircut. FACT: Grok stacked this inside the Stream block; it is a separate listing/allocation decision (Elixir collateral, Plasma Earn USDT0). CLAIM (later Re7 legal update, RootData, 21 November 2025): Morpho Worldchain sdeUSD position fully recovered and treasury exposure cut by more than half. That line is a recovered position and a treasury-exposure cut. It is not a depositor receipt. No Re7 compensation pool was found. As of 26 September 2026, 10 months and 22 days have passed since 4 November 2025. Not independently re-run on-chain here.
response_summary: Caps/reallocations after the Stream link was identified; Plume book reportedly repaid 2025-11-06; residual Euler/Morpho books left in the legal bucket with Stream/Stables. No Re7 depositor compensation pool comparable to the later USR Merkl was found for Elixir.
critics: Same Nov 2025 curator-accountability thread as Stream (Protos, Cryptopolitan). Whistleblower list (asset selection, concentrated borrows) - https://protos.com/re7-labs-threatens-whistleblower-over-exposure-to-yield-vault-collapse/
lesson_applied_later: no, example: USR listing in March 2026 repeated yield-bearing synthetic-dollar collateral.
funds_recovered: partial
sources: commentary (Re7 recap paraphrase), https://www.chaincatcher.com/en/article/2218539 ; https://www.bitget.com/news/detail/12560605054194 ; vault, https://app.euler.finance/earn/0xa5EeD1615cd883dD6883ca3a385F525e3bEB4E79?network=plasma ; Re7 X (cited) https://x.com/Re7Labs/status/1987204592283832531

---

EVENT
curator: Re7 Capital / Re7 Labs
date: 2025-11-06
title: USDX
incident_id: R7-20251106-USDX
type: collateral
impact: High
fault: indirect
class: affected
severity: High
protocol_or_vault_url: https://blog.lista.org/the-re7-vault-forced-liquidation-a-recap-and-moving-forward
usd_lost: unknown
pct_of_that_vault_tvl: unknown
status: unresolved
what_actually_happened: Stables Labs issued USDX as a synthetic dollar, and sUSDX was its yield-bearing staked form. Re7's USD1 vault on Lista, launched on 5 Jun 2025, included a USDX collateral market. In late Oct, addresses linked to Stables Labs and Flex Yang borrowed stablecoins against USDX and sUSDX across Euler, Lista, and Silo, then sold them. On 4 Nov, Re7 flagged transfers from large USDX and sUSDX holders to Binance. It demanded repayment by 5 Nov and then disabled borrowing and lowered liquidation thresholds. On 6 Nov, as USDX fell toward $0.30, Lista approved LIP-022 at Re7's request and forced liquidation of the USDX/USD1 market. The liquidation removed about 3.526M USDX and recovered about 2.927M USD1. About 2.090M USD1 of unpaid principal was moved to a public liquidation zone. A depositor snapshot was taken on 15 Nov. On 21 Nov, Lista said about 481,801 USD1 of liquidation profit would be distributed under LIP-023. That was profit, not repayment of principal. Re7's broader $13.114M impact figure also included Euler positions and was not a loss figure for this vault alone. The unpaid principal remained unresolved.
response_summary: On 4 Nov, Re7 contacted Stables Labs after spotting the Binance flows. It set a 5 Nov repayment deadline, then asked Lista to force liquidation when the response was not adequate. Lista approved LIP-022 on 6 Nov and served withdrawals in arrival order. After the 15 Nov snapshot, LIP-023 distributed liquidation profit proportionally to depositors. On 21 Nov, Re7 said Pillsbury had served legal notices demanding repayment and preservation of evidence. No Re7-funded pool was created to repay principal. As of 26 Sep 2026, the remaining loss was still open.
critics: Lista initially told Re7 and MEV Capital to “take immediate responsibility” (Coinspeaker timeline). Same Stream-week depositor critics. Re7 named Flex / Stable Labs unresponsive.
lesson_applied_later: no, example: synthetic-dollar collateral with weak redeemability listed again (USR, March 2026).
funds_recovered: partial
sources: primary, https://blog.lista.org/the-re7-vault-forced-liquidation-a-recap-and-moving-forward ; Beosin, https://www.beosin.com/resources/analysis-of-the-stables-labs-usdx-collapse-incident-and-fund-flow-tracing ; Re7 recap tweet (cited) https://x.com/Re7Labs/status/1987204592283832531 ; Lista X LIP-022 (quoted in ForkLog/CryptoTimes)

---

EVENT
curator: Re7 Capital / Re7 Labs
date: 2026-03-22
title: Resolv
incident_id: R7-20260322-RESOLV
type: oracle
impact: High
fault: indirect
class: affected
severity: High
protocol_or_vault_url: https://app.morpho.org/base/vault/0x12AFDeFb2237a5963e7BAb3e2D46ad0eee70406e/re7-usdc
usd_lost: unknown
pct_of_that_vault_tvl: unknown
status: unresolved
what_actually_happened: FACT: On 22 March 2026 Resolv USR: a compromised SERVICE_ROLE / AWS KMS path minted about 80M unbacked USR; USR dumped on Curve (reports to about $0.025). That is Resolv extraction, not Re7 P&L. Do not use protocol-wide dollars as Re7's number. FACT: Morpho V1 docs warn that a vault listing a rich-oracle market stays donation-vulnerable via `supply(onBehalf=vault)` even at cap 0 until the market leaves the withdrawal queue. FACT (Re7 X 17:28 UTC, tweet 2035770653261869480): aware of the exploit; mRe7YIELD zero; CLAIM in that follow-on Re7 narrative (OAK citing Re7): of 184 markets only two small Morpho USR-collateral markets were hit, Re7 USDC Base and Re7 USDC Core Mainnet; monitors at 02:46 UTC; caps 0 / queues cleared by about 03:00. The public tweet time is afternoon; a carded Base tx is 11:23:17 UTC. 02:46 is not independently timestamped here. On 26 September 2026 the Base vault share price was still 0.205186, so remaining Base shares were not restored to 1. Core still looked unimpaired at the share-price level, about 1.058. CLAIM (OAK): Re7 isolated losses on two markets. Gauntlet was about 96% of Morpho-wide post-exploit flow. usd_lost unknown. The 223,000 USDC is a pool size, not usd_lost, and it is not shown as paid.
response_summary: Same-day X note, cap and queue work, and Morpho's disclosure of the donation path. On 10 June 2026 Re7 said a remediation framework with Resolv was finalized and that details would follow. On 22 June 2026 Re7 said 223,000 USDC of recovery proceeds was claimable on Merkl for wallets in Re7 USDC Base or Re7 USDC Core Mainnet snapshotted at market removal. No later post in this pass shows those wallets received the USDC. Do not call the pool paid. Do not say Re7 paid the 223,000 USDC. As of 26 September 2026, 3 months and 4 days have passed since the claim opened. On 26 September 2026 the Base vault share price was still 0.205186, so remaining Base shares were not restored to 1. Core still looked unimpaired at the share-price level.
critics: Tony Fuling on the Re7 thread (repeat synthetics; no day-one dollar figure) https://x.com/Re7Labs/status/2035770653261869480 ; OAK Research https://oakresearch.io/en/analyses/investigations/the-resolv-usr-hack-curators-face-their-responsibilities ; Unified Labs donation anatomy https://unifiedlabs.io/insights/research-anatomy-of-a-morpho-vault-nav-flash-loan-manipulation-attack-after-the-usr-depeg
lesson_applied_later: unclear. Example: response speed beat November 2025, and on 22 June 2026 Re7 opened a 223,000 USDC claim pool. That pool is not shown as paid. Listing decision still repeated yield-bearing synthetic dollar as Morpho collateral. Whether Re7 emptied withdrawal queues in time (the actual V1 fix) versus only setting caps to 0 is unverified on-chain here.
funds_recovered: none
sources: primary, https://x.com/Re7Labs/status/2035770653261869480 ; https://x.com/Re7Labs/status/2064723385335112167 ; https://x.com/Re7Labs/status/2069005026769445148 ; https://docs.morpho.org/curate/concepts/security-considerations/ ; Morpho app Base USDC / Eth Core URLs above ; commentary, https://oakresearch.io/en/analyses/investigations/the-resolv-usr-hack-curators-face-their-responsibilities ; https://thedefiant.io/news/defi/re7-labs-223k-usdc-compensation-pool-usr-exploit-victims

---

EVENT
curator: Re7 Capital / Re7 Labs
date: 2026-09-04
title: Vesu
incident_id: R7-20260904-VESU
type: oracle
impact: Low
fault: indirect
class: affected
severity: Low
protocol_or_vault_url: https://docs.vesu.xyz/blog/2026-09-13-incident-refunds
usd_lost: unknown
pct_of_that_vault_tvl: unknown
status: unresolved
what_actually_happened: On 4 September 2026 a Pragma price fault liquidated positions on Vesu. On 13 September 2026 Vesu said recovered assets are held by Vesu, Re7 Labs, and Clearstar, and that each curator refunds its own pool. Vesu's recommended rate was 95%. Pragma's 17 September 2026 note, still the latest section when read on 26 September 2026, says Vesu had not announced that every curator refund was finished. No Re7 post was found, so there was no Re7 thread to read. Re7 holds recovered funds and was supposed to refund its pools. That refund is not shown as paid. As of 26 September 2026, 22 days have passed since 4 September 2026, and 13 days have passed since the 13 September 2026 scheme. usd_lost stays unknown. Do not book protocol-wide totals.
response_summary: Vesu's 13 September 2026 scheme says each curator refunds its own pool. Re7 holds recovered funds and was supposed to refund its pools. Not shown as paid. No Re7 post states its own dollar or that its users were paid.
critics: No Re7 post was found. Pragma's 17 September 2026 note says Vesu had not announced that every curator refund was finished.
lesson_applied_later: unclear. No Re7 post on this incident was found, so no later lesson from Re7 is sourced.
funds_recovered: none
sources: primary https://docs.vesu.xyz/blog/2026-09-13-incident-refunds ; primary https://www.pragma.build/updates/vesu-incident

---


## Not on Events tab
- `R7-20251201-CEASEDESIST`, Lawyer letter / whistleblower story. No new on-chain loss.
- `R7-20251209-CLUSTER`, `E_InsufficientCash` is the November Stream/Elixir/USDX freeze, not a new exploit.

STANDING CHECKS (do these now)

**Events (H/M/L/N/D/I):** `4H 0M 2L 0N 3D 3I`

Risk docs: **none**  
Re7 Risk Index is a 2022-12 protocol-scoring essay ([substack](https://re7research.substack.com/p/introducing-re7-risk-index)), not a live per-vault Morpho/Euler memo. Homepage still markets “Re7 DeFi Ratings.” Morpho Re7 WETH/USDC pages (2026-09-15): generic Re7 Labs disclaimer, **no ratings**. No Gauntlet-style VaultBook.

Active since: **2024-02** (Re7 WETH MetaMorpho public launch 2024-02-01; factory deploy 2024-01-30). Firm LP history from 2019 is not curator-start.

PoC: **X: @Re7Labs** (attested on re7labs.xyz). Firm X: @Re7Capital. Site Telegram invite `https://t.me/+gYiPKl2kghAwYWVk`. Grok’s `@Re7labssupportlive` is **not** attested on the official site, do not sheet it. Morpho forum: `Re7-Labs`. Email on Grok: hello@re7labs.xyz (not re-checked).

Any new incident since Grok / since 22 June 2026: Vesu (`R7-20260904-VESU`, 4 September 2026). The earlier "none material" line is wrong. Stream, Elixir, and USDX remain open recovery. The 22 June 2026 Merkl notice opened a 223,000 USDC claim on the March Resolv event. It is not shown as paid, and it is not a new event.

Whether a past lesson showed up again: **yes.** After the Pyth lag and the Stream, Elixir, and USDX synthetics, Re7 listed USR as Morpho collateral on an about $1 oracle-divergence path and took a smaller but real vault hit (Base share still about 0.205 on 26 September 2026). The 223,000 USDC pool is not shown as paid. Faster ops on USR did not undo the listing pattern.

CLEAN IF EMPTY: not empty.

Search coverage: Grok paste; Morpho GraphQL + app; Euler metadata/app; Morpho forum JSON; Lista blog; Re7 site/blog/substack; DefiLlama; CoinDesk Stream; Protos C&D; OAK/Unified Labs/Beosin; Re7 X where fxtwitter resolved (USR and Merkl); Vesu refund note 13 September 2026; Pragma Vesu update. Nov 4/8 Re7 tweet bodies 404'd this pass. Impact dollars kept as CLAIM via wire paraphrase. No Re7 Vesu post was found.
