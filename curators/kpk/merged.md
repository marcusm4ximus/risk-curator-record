---
cursor:
  subagentId: "bc-212a27bb-994c-5390-bad9-a4d384d9f90d"
---

# KPK, merged DD draft

**Draft date:** 2026-09-15  
**Grok paste:** ingested (`twitter-grok.md`, four INCIDENT blocks). Combined with independent docs, Morpho/Euler UIs, changelog, explorers, Chaos Labs, Resolv post-mortem. User-edit before any Google Sheet paste.  
**Labels in prose:** FACT / CLAIM / RUMOR. `usd_lost` and `pct_of_that_vault_tvl` stay **unknown** unless a primary source states a crystallized vault loss.

KPK (formerly karpatkey) is a Morpho and Euler vault curator. Public Morpho intro 2025-11-03; agent-powered vault blog 2025-11-13. First MetaMorpho V1 vaults (USDC Prime, EURC Yield, USDT Yield) created **2025-09-15**. V1 curation wound down end of May 2026; live product is Morpho V2 via Markets V1 Adapter (switch **2026-05-04**). Out of scope: DAO treasury mandates except where the same incident hit a *curated vault*.

Live Morpho curator page (2026-09-15): [https://app.morpho.org/ethereum/curator/kpk](https://app.morpho.org/ethereum/curator/kpk), about **$44.7M** deposits.

### Live Morpho V2 (non-exhaustive)

| Vault | Address | URL |
|---|---|---|
| USDC Prime | `0x4Ef53d2cAa51C447fdFEEedee8F07FD1962C9ee6` | https://app.morpho.org/ethereum/vault/0x4Ef53d2cAa51C447fdFEEedee8F07FD1962C9ee6/kpk-usdc-prime |
| USDC Yield | `0xD5cCe260E7a755DDf0Fb9cdF06443d593AaeaA13` | https://app.morpho.org/ethereum/vault/0xD5cCe260E7a755DDf0Fb9cdF06443d593AaeaA13/kpk-usdc-yield |
| ETH Prime | `0xBb50A5341368751024ddf33385BA8cf61fE65FF9` | https://app.morpho.org/ethereum/vault/0xBb50A5341368751024ddf33385BA8cf61fE65FF9/kpk-eth-prime-v2 |
| ETH Yield | `0x5dbf760b4fd0cDdDe0366b33aEb338b2A6d77725` | https://app.morpho.org/ethereum/vault/0x5dbf760b4fd0cDdDe0366b33aEb338b2A6d77725/kpk-eth-yield |
| EURC Yield | `0xa877D5bb0274dcCbA8556154A30E1Ca4021a275f` | https://app.morpho.org/ethereum/vault/0xa877D5bb0274dcCbA8556154A30E1Ca4021a275f/kpk-eurc-yield |
| USDT Prime | `0x870F0BF29A25A40E7CC087cD5C53e70C11F2C8A8` | https://app.morpho.org/ethereum/vault/0x870F0BF29A25A40E7CC087cD5C53e70C11F2C8A8/kpk-usdt-prime-v2 |
| USDC Prime Core | `0x1a1985F50352b58090eb36425AfdFacbaC7806F4` | https://app.morpho.org/ethereum/vault/0x1a1985F50352b58090eb36425AfdFacbaC7806F4/kpk-usdc-prime-core |
| USDC Yield RWA | `0x7a72bcD2c3F7F7e4D6679170a0625bAB15D7DDa1` | https://app.morpho.org/ethereum/vault/0x7a72bcD2c3F7F7e4D6679170a0625bAB15D7DDa1 |
| USDC Yield Arb | `0x5837e4189819637853a357aF36650902347F5e73` | https://app.morpho.org/arbitrum/vault/0x5837e4189819637853a357aF36650902347F5e73/kpk-usdc-yield |
| Base USDC Yield | `0x392B3CCf36C8adB8094F45573346B457414cD752` | https://app.morpho.org/base/vault/0x392B3CCf36C8adB8094F45573346B457414cD752/kpk-usdc-yield |

Legacy V1 still on-chain (not actively curated): ETH USDC Yield `0x9178eBE0691593184c1D785a864B62a326cc3509`; Arb USDC Yield `0x2C609d9CfC9dda2dB5C128B2a665D921ec53579d` (~$24k residual); ETH Prime `0xd564F765F9aD3E7d2d6cA782100795a885e8e7C8`; USDC Prime `0xe108fbc04852B5df72f9E44d7C29F47e7A993aDd`.

### Euler

USDC Prime RWA Earn `0x2B47c128b35DDDcB66Ce2FA5B33c95314a7de245`, [docs](https://docs.kpk.io/vaults/vaults/euler/ethereum/usdc-rwa.md), [kpk app](https://app.kpk.io/vaults/euler-earn-rwa-usdc-mainnet). Curator Safe `0x1572063377a9a4f8065BD7bA0D7fa135cd13051F`. Securitize VBILL/STAC/HINC + Sentora RLUSD/PYUSD overflow. **No dated Euler curator incident found.**

---

EVENT
curator: KPK
date: 2026-03-22
title: Resolv
incident_id: KPK-20260322-RESOLV
type: collateral
impact: N
fault: indirect
class: non-materially-affected
severity: N
protocol_or_vault_url: https://app.morpho.org/ethereum/vault/0x9178eBE0691593184c1D785a864B62a326cc3509/kpk-usdc-yield
usd_lost: unknown
pct_of_that_vault_tvl: unknown
status: resolved
what_actually_happened: Resolv was a delta-neutral stablecoin protocol. USR was its dollar token, while RLP was the junior token meant to absorb losses first. FACT: On 22 Mar 2026 02:21:35 UTC Resolv’s compromised SERVICE_ROLE minted 50M unbacked USR; 03:41 UTC another 30M; Resolv later said ~$25M extracted as ETH (protocol figure, not KPK P&L). FACT: KPK Morpho changelog 2026-03-22 set RLP/USDC allocation caps to zero on USDC Yield Ethereum and Arbitrum and removed Arbitrum syrupUSDC as second-order Resolv risk; 2026-03-23 reallocated RLP dust, updated the withdraw queue, re-enabled supply. FACT: they had already offboarded PT-RLP-9APR2026 on 2026-03-04 as underperforming but kept spot RLP. FACT (Chaos Labs, 23 Mar 1pm EST exposure tally, not a loss): “kpk Morpho USDC Yield Mainnet: ~$222K.” CLAIM (The Edge, kpk guest post 25 Mar): $222k at risk across ETH+Arb Yield; effective RLP allocation 3.85% of TVL; Ethereum ~$221k recovered in the same block as a borrower repayment; Arbitrum leftover ~$1.1k closed by a treasury batch; first curator out of the RLP market; they do not use Morpho’s Public Allocator. FACT: those Edge recovery hashes were published truncated and were not independently expanded here. FACT (Morpho API weekly): ETH Yield V1 share price 19 Mar 1.0135 → 26 Mar 1.0159; Arb Yield V1 1.0213 → 1.0223, no weekly NAV crash. TVL fell (ETH $3.01M → $1.51M; Arb $1.43M → $0.66M) consistent with withdrawals/pause, not a haircut. CLAIM (KPK/Hypernative/DL News): zero depositor loss, same-block queue drain, no manual intervention. FACT: Morpho V1 docs warn cap-to-zero does not block `supply(onBehalf)` donation if a rich-oracle market stays on the withdraw queue; peer curator losses were mostly wstUSR $1-oracle + allocator/donation. KPK’s listed Resolv asset in the changelog is RLP, not wstUSR. FACT: RLP/USDC market `0xe1b65304edd8ceaea9b629df4c3c926a37d1216e27900505c04f14b2ed279f33` still looks impaired on Morpho UI (oracle vs DefiLlama gap, large unrealized bad debt) with no KPK vault listed as of this pass. usd_lost unknown: no independent crystallized bad-debt line.
response_summary: Same-day cap-to-zero (changelog). KPK X notes cited by Grok (bodies not fetched here) plus DL News 25 Mar: limited RLP in Yield, treasuries/Prime framed as unaffected, Ethereum funds recovered, deposits back 23 Mar, plan to tighten oracle-divergence monitors and automated exits. Hypernative (vendor, 30 Mar) repeats zero-loss and API-triggered exit agent.
critics: Chaos Labs listed KPK in the exposure table but aimed “routed capital into already-failed markets” at Public Allocator users, especially Gauntlet - https://chaoslabs.xyz/posts/defi-s-contagion-loop-when-risk-curators-become-the-risk . OAK/4pillars on curator class and donation; 4pillars names kpk among shops that listed Resolv-related markets, not as a proven KPK haircut. Cryptonews paraphrases Goldberg including kpk in auto-allocation, CLAIM, conflicts with KPK’s no-Public-Allocator architecture.
lesson_applied_later: yes, example: 23 Mar withdraw-queue work; later V2 + Markets V1 Adapter (donation edge case does not apply when not supplying through a V1 vault adapter); Cap 9 Jun used soft-shutdown without zeroing caps. Partial only: Yield still lists issuer-NAV / long-tail stables, plus a dedicated RWA Yield vault with fundamental oracles.
funds_recovered: full
sources: primary, https://docs.kpk.io/vaults/vaults/morpho/change-log.md ; https://chaoslabs.xyz/posts/defi-s-contagion-loop-when-risk-curators-become-the-risk ; https://resolv.xyz/blog/resolv-postmortem-march-22-2026-incident ; https://docs.morpho.org/curate/concepts/security-considerations/ ; Morpho API historicalState `0x9178eBE0…3509` / `0x2C609d9C…357d` ; Grok-cited https://x.com/kpk_io/status/2035648055492358369 https://x.com/kpk_io/status/2036170798646349902 . commentary/vendor, https://www.the-edge.xyz/p/when-collateral-fails ; https://www.hypernative.io/blog/when-the-resolv-exploit-hit-kpks-depositors-lost-nothing ; https://www.dlnews.com/articles/defi/kpk-declares-zero-loss-to-depositors-after-resolv-stablecoin-collapse/ ; https://forum.arbitrum.foundation/t/kpk-treasury-management-updates/30667 ($1.1k / 0.11% CLAIM on Arb curated vault).

---

EVENT
curator: KPK
date: 2026-04-18
title: rsETH
incident_id: KPK-20260418-RSETH
type: collateral
impact: N
fault: indirect
class: non-materially-affected
severity: N
protocol_or_vault_url: https://app.morpho.org/ethereum/vault/0xd564F765F9aD3E7d2d6cA782100795a885e8e7C8/kpk-eth-prime
usd_lost: unknown
pct_of_that_vault_tvl: unknown
status: resolved
what_actually_happened: Kelp was a liquid restaking protocol, and rsETH was its restaked ETH token used as collateral. FACT: 18 Apr 2026 Kelp’s LayerZero V2 Unichain→Ethereum rsETH route (1-of-1 DVN) released 116,500 unbacked rsETH. Aave and others froze; ETH liquidity seized up. FACT (KPK changelog): ETH Prime had rsETH from 2025-11-21; a 2026-01-20 “risk alert” offboarded it then re-enabled the same day; 2026-04-18 precautionary pauses on USDC Prime (re-enabled same day), ETH Yield, ETH Prime; 2026-04-20 ETH Prime fully offboarded rsETH and savETH (indirect Aave) and re-enabled deposits; 2026-04-22 re-enabled markets judged clear of Aave/rsETH contagion. FACT: exit tx `0x01f34dc206943dcbe359f3916684d13e81811155f8ec6195e129ae25903db6ad`, shutdown agent on **V1** ETH Prime `0xd564F765…`, 10.04 WETH moved vs Morpho. That is a first-batch size, not a TVL%. CLAIM (KPK / Grok): ETH Prime was the only curated Morpho vault with direct rsETH, “capped at ~2.3% of vault TVL.” Not in the changelog; do not confuse with rsETH staking APY. FACT (war-room blog 10 Jun): alert was human-channel first, war room ~20 minutes, first on-chain exit ~13 minutes later; 97 new monitors and ~17s forced-rebalance claimed afterwards. FACT (ENS forum 21 Apr): endowment had no direct rsETH; they exited Morpho ETH Prime v2 and Aave USDS as precaution; netto.eth thanked them. That is treasury, not vault depositor P&L. CLAIM: “zero user funds lost / no bad debt” on curated vaults. usd_lost unknown. Morpho API ETH Prime V1 USD share price tracks ETH and is not a clean NAV-loss series; TVL 16 Apr ~$14.6M → 23 Apr ~$1.72M (pauses/exits/migration).
response_summary: Same-day pauses and rsETH cap/exit path; 21 Apr ETH Prime deposits back, rsETH sleeve gone (KPK X, Grok-cited); 29 Apr unaffected markets re-enabled and permanent offboards listed. June war-room post-mortem is the long-form. Gearbox re-tune is adjacent, not a Morpho/Euler loss row.
critics: none sourced alleging a KPK vault haircut. @deepcryptodive “zero user funds lost” is a team CLAIM - https://x.com/deepcryptodive/status/2046359693677752460
lesson_applied_later: yes, example: rsETH permanently offboarded; more monitors / PagerDuty / depeg methodology per war-room blog. Incomplete: they had already flinched on 20 Jan and put rsETH back.
funds_recovered: n/a
sources: primary, https://docs.kpk.io/vaults/vaults/morpho/change-log.md ; https://kpk.io/blog/inside-the-war-room ; https://etherscan.io/tx/0x01f34dc206943dcbe359f3916684d13e81811155f8ec6195e129ae25903db6ad ; https://discuss.ens.domains/t/rseth-exploit-kpk-precautionary-actions-ens-endowment-impact-summary/22076 ; Grok-cited https://x.com/kpk_io/status/2045622576563818647 https://x.com/kpk_io/status/2046547936281055305 https://x.com/kpk_io/status/2049525030036353103 . commentary, Aave rsETH incident report https://governance.aave.com/t/rseth-incident-report-april-20-2026/24580

---

EVENT
curator: KPK
date: 2026-06-09
title: Cap
incident_id: KPK-20260609-CAPPAUSE
type: collateral
impact: N
fault: indirect
class: non-materially-affected
severity: N
protocol_or_vault_url: https://docs.kpk.io/vaults/infrastructure/automation.md
usd_lost: unknown
pct_of_that_vault_tvl: unknown
status: resolved
what_actually_happened: Cap was a stablecoin credit protocol. cUSD was its dollar token, while stcUSD was the yield-bearing staked form. CLAIM (KPK automation docs only): 9 Jun 2026 22:23 UTC Cap paused cUSD; Hypernative + PagerDuty to the desk in seconds; soft shutdown on stcUSD, DUSD, srRoyUSDC; first deallocation ~15s later; caps left untouched; Cap called it an MEV false positive and unpaused ~20 minutes later; markets re-enabled after human review without a timelocked unpause. Grok’s trigger/dealloc hashes are truncated and were not confirmed on an explorer in this pass. No Cap-protocol post for that timestamp was found. Changelog has no 9 Jun row (expected if caps did not change). Later FACT: 2026-07-16 USDC Yield removed stcUSD/USDC for dwindling liquidity, separate, not this pause. usd_lost unknown; no sourced haircut.
response_summary: Published as the textbook soft-shutdown example after Resolv. No separate crisis thread found.
critics: none sourced
lesson_applied_later: yes, example: this is the reversible exit-agent path they said they wanted after Resolv (drain, don’t hard-zero caps on a maybe-false signal).
funds_recovered: n/a
sources: primary, https://docs.kpk.io/vaults/infrastructure/automation.md

---

## Not on Events tab

- `KPK-20260621-FORCEDEALLOC`, Removed.

## STANDING CHECKS

**Events (H/M/L/N/D/I):** `0H 0M 0L 3N 0D 3I`

**Risk docs:** active, [Risk framework](https://docs.kpk.io/vaults/infrastructure/risk-framework.md) (150+ checks / 12 dimensions, tiers A–D, Hypernative/Cyvers/Pharos), per-vault pages, [Morpho changelog](https://docs.kpk.io/vaults/vaults/morpho/change-log.md) through 2026-09-03, [Euler changelog](https://docs.kpk.io/vaults/vaults/euler/change-log.md) through 2026-08-20.

**Active since:** **2025-09** on-chain (V1 USDC Prime / EURC / USDT Yield, Morpho API creation 2025-09-15). Public Morpho curator intro **2025-11-03**. Euler Earn public line from at least **2026-03-09** (RLUSD enable), not May.

**PoC:** X: [@kpk_io](https://x.com/kpk_io). Risk lead X: [@deepcryptodive](https://x.com/deepcryptodive). Docs/sales: sales@karpatkey.com. Public Telegram PoC: **not found**.

**Any new incident since Grok (paste covers through 2026-06-21):** no material curator-loss or disputed pause found **2026-06-21 → 2026-09-15**. Changelog after that is routine (stcUSD offboard 16 Jul, USDC Yield RWA launch 27 Jul, Base Yield 27 Aug, weETH Prime hard shutdown 3 Sep).

**Whether a past lesson showed up again:** Concentration caps + exit agent: Resolv → Kelp → Cap (claimed). **Repeat risk family:** they still allocate to issuer-NAV / long-tail yield after RLP (savUSD, ftUSD, siUSD, srRoyUSDC in Yield; FalconX/3Jane/mF-ONE in Yield RWA), isolated into higher-tier products rather than banned. **rsETH:** January offboard-then-relist, then April exploit, lesson stuck only the second time. **forceDeallocate:** 0.5% → 0% → 0.01%.

**No material depositor-loss event found as of 2026-09-15.** Searched: docs.kpk.io (Morpho/Euler/automation/risk/changelogs), Morpho app/API (V1+V2), Euler/kpk app, forum.morpho.org, ENS/Arbitrum KPK posts, Chaos Labs Resolv tally, Resolv post-mortem, Morpho curator security docs, Hypernative, DL News, The Edge, OAK/4pillars, explorer txs above.
