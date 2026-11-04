---
cursor:
  subagentId: "bc-9b0b58f2-3785-5c74-8b02-62e7eed8e194"
---

# Hyperithm — Grok vs reality

**As of:** 2026-09-15  
**Grok paste:** present at `docs/curator-dd/hyperithm/twitter-grok.md` (five `INCIDENT` blocks + standing checks). This file scores that paste against Hyperithm X (opened via fxtwitter), Telegram `@curation_hyperithm`, Morpho GraphQL, Euler Data API v3, Plasmascan, Morpho Vault V2 docs, Morpho forum, LinkedIn, and Arbitrum DRIP.

**Scope:** Morpho / Euler vault curator. Midas tokens (mHYPER, mHyperETH, mHyperBTC, aHYPER) are in scope only as collateral, loops, or public-response surface. Do not invent USD lost or %.

Snowflake dates `(id >> 22) + 1288834974657` match Grok’s calendar days. Tweet **bodies** for the numbered Hyperithm/CBB/Serenity/EroticKlaxon posts were opened this pass (not 403). Two rsETH write-up tweets are image/link-only (`text` empty); treat those stopwatch figures as **CLAIM**.

---

## 1) Keep (Grok matches primary sources)

| Grok | Verdict |
|---|---|
| Five separate dated blocks (recursive self-supply, xUSD/yUSD unwind, Stream/Plasma lock, rsETH listing, Monad `forceDeallocate`) | **Keep IDs.** Do not stack Stream + loops into one row. Grok typed rsETH as ops; merged Type is `collateral` (LRT they listed). |
| CBB 18 Oct 2025 18:22 UTC: ~35% / ~$70M Morpho liquidity into mHYPER markets; mHYPER supplied ~$35M USDC back | **CLAIM** (Grok labeled it). Primary: [@Cbb0fe/1979613970089603431](https://x.com/Cbb0fe/status/1979613970089603431). No Hyperithm cap table that day. |
| Hyperithm 19 Oct 2025: mHYPER temporarily supplied **$5M** after another curator pulled **>$10M**; interim stabilization; mHYPER is a vault share not a dollar peg; LPs can exit | **FACT** as curator posts. [@hyperithm/1979739290042306753](https://x.com/hyperithm/status/1979739290042306753) 02:40 UTC; follow-up [1979744922019541251](https://x.com/hyperithm/status/1979744922019541251) 03:02 UTC. |
| Recursive `usd_lost: 0`, no pause/bad debt disclosed | **FACT** that none was disclosed. Not a reconstructed P&L. |
| 29 Oct 2025: Hyperithm admitted unintended xUSD/yUSD ↔ mHYPER ↔ Morpho/Euler recursion; claimed yUSD **and** xUSD “fully removed”; ~$10M unlevered mHYPER GP | **FACT** as [note tweet 1983405835939463568](https://x.com/hyperithm/status/1983405835939463568) (05:29 UTC). |
| Six days later leftover xUSD on Plasma, so “fully removed” failed | **FACT.** 4 Nov table still **$2.6M** on Plasma Euler xUSD/USDT0. |
| Stream 4 Nov 2025 ~$93M external-manager loss; deposits/withdrawals frozen; xUSD depeg | **FACT** (Stream / CoinDesk / Decrypt class). Not a Hyperithm dollar. |
| Same-day Hyperithm: Morpho + Ethereum Euler **zero xUSD**; Plasma USDT0 Lending Vault **$2.6M** illiquid xUSD/USDT0; Stream ~**$75M** leveraged mHYPER | **FACT** as curator posts. [1985545281279311982](https://x.com/hyperithm/status/1985545281279311982); [1985572273240302023](https://x.com/hyperithm/status/1985572273240302023). Euler API still shows ~**$2.66M** allocated to EVK `0xF675FBe777E992f5D5D84AdF41161dC0f20104a6` (`eUSDT0-23`) — the market Hyperithm linked. |
| 11 Nov: Plasma Earn ~30% Re7 xUSD (loss-possible) / ~70% healthy mHYPER lending vault; withdrawals paused | **FACT** as X + Telegram. [1988124642918494642](https://x.com/hyperithm/status/1988124642918494642); [t.me/s/curation_hyperithm](https://t.me/s/curation_hyperithm). No contemporaneous Earn TVL dollar → 30% cannot become `usd_lost`. |
| 70% distributed as EVK tokens 30 Nov 2025; 30% locked pending Stream legal; no recovery of the locked slice through 2026-09-15 | **FACT** (distribution) / **FACT** (no later payout found). Tx [0xc0ba9e0f…010deb](https://plasmascan.to/tx/0xc0ba9e0f995e6db888e224676a106f82dd32af0ed60da340086b9c02de010deb) Success, **2025-11-30 09:41:03 UTC**, `distribute`, 143 ERC-20 transfers. Tweet [1995072076638540047](https://x.com/hyperithm/status/1995072076638540047) 10:07 UTC. Euler Earn still `availableAssets: 0`. |
| Stream `usd_lost: unknown`, `pct` unknown, status **unresolved**, severity **High**, `funds_recovered: partial` | **Keep.** Do not paste Euler `lostAssets` (~$6.36M) into `usd_lost`. |
| Kelp/Kernel rsETH 18 Apr 2026 ~116,500 / ~$292M; 1-of-1 DVN / LayerZero | **FACT** (LayerZero PDF, Hyperithm LinkedIn 27 May 2026, industry recaps). Not a Hyperithm loss. |
| Flag 17:48 UTC (+13m from 17:35); flagship aHYPER/mHYPER/mHyperBTC + stable lending vaults **no direct rsETH**; mHyperETH **$3.5M** net ($1.5M Mantle / $2.0M Ethereum) vs **$11.5M** AUM, mostly strategist seed; issuance/redemption paused | **FACT** as LinkedIn + X. [2046136627899302274](https://x.com/hyperithm/status/2046136627899302274); [2046183477020918133](https://x.com/hyperithm/status/2046183477020918133); [2046449747884736823](https://x.com/hyperithm/status/2046449747884736823); [LinkedIn report](https://www.linkedin.com/pulse/incident-report-rseth-exploit-via-layerzero-vulnerability-april-6ggvc). |
| Morpho-wide ~$1M ETH borrowed vs rsETH in isolated markets — not Hyperithm-specific | **CLAIM** (Morpho/Kitchen class of recaps). Do not book as Hyperithm `usd_lost`. |
| Monad aHYPER/USDC `forceDeallocate` is permissionless and can shove liquidity to idle | **FACT.** [Morpho Vault V2 docs](https://docs.morpho.org/developers/contracts/morpho-vaults-v2/). Live adapter `0x068F2273…07908` on Apex V2 has `forceDeallocatePenalty` **1e13 / 1e18 = 0.001%** — effectively no deterrent. |
| Market `0x9e8441e7…a626`; aHYPER principal untouched; Morpho **0.00** bad debt; extra interest refunded | **FACT** (market + bad debt). Morpho GraphQL 2026-09-15: `badDebt.usd = 0`, `realizedBadDebt.usd = 0`, supply ~$40.3M. Refund tweet is primary (below). |
| Refund **8,586 USDC to 58 addresses**, Aug 29 14:29–Aug 30 02:54 UTC (12.4h), 25.7% actual avg borrow vs 9.5% normal (16.2pp) | **FACT** as [2095787569011454095](https://x.com/hyperithm/status/2095787569011454095) (2026-09-04 08:14 UTC). Spreadsheet + Monadscan payout address in that tweet. Extra interest ≠ vault TVL destruction. |
| Risk docs stale/none as a curator framework; forum About post 2025-03-03 is a blurb; Accountable / vaults.hyperithm.com are attestation/product, not a Morpho/Euler risk manual | **FACT.** Forum category still only two topics ([Hyperithm](https://forum.morpho.org/c/vaults/hyperithm/38)): About 2025-03-03; Aragon guardian 2025-07-01. |
| PoC X `@hyperithm`; TG `@curation_hyperithm`; TG `@midas_hyperithm` | **FACT.** Curation TG is the Plasma Earn / IRM / Resolv / sunset channel. mHYPER TG exists (`t.me/s/midas_hyperithm`). |
| No new material curator incident after 2026-08-29 through 2026-09-15 | **FACT** as of this pass (fee/cap/yield notices only). |
| Lesson repeat: 29 Oct “xUSD fully removed” failed on Plasma 4 Nov | **FACT.** |
| Did **not** invent a Morpho Apex USD loss, did **not** copy Rekt’s “walked away with $10 million,” did **not** file Resolv as a Hyperithm loss | Correct scope. |

---

## 2) Wrong (change)

| Grok | Label | Fix |
|---|---|---|
| Recursive `response_summary`: Hyperithm “answered the **same day**” | **WRONG** (UTC calendar) | CBB 18 Oct 18:22 UTC. Replies **19 Oct** 02:40 / 03:02 UTC (~8–9 hours later, next UTC day). Seoul/Tokyo is 19 Oct morning — say “next UTC calendar day / same regional morning,” not “the same day.” |
| Stream `protocol_or_vault_url` = `https://app.euler.finance/earn?network=1` | **WRONG** | Ethereum Earn list. The locked book is Plasma Earn **`0x66bE42a0BdA425A8C3b3c2cF4F4Cb9EDfcAEd21d`** (`hyperEulerUSDT`, hidden on Euler UI). Lending EVK they named as leftover xUSD: **`0xF675FBe777E992f5D5D84AdF41161dC0f20104a6`**. Hyperithm USDT0 EVK: **`0x0a660B3Cbd7DF118501E7Bb0f2D6eC5E5e583Bf8`** (`eUSDT0-39`, last rebalanced **2025-11-04**). |
| rsETH `protocol_or_vault_url` = Ethereum **USDC** Apex `0x7777…777` | **WRONG** for the Morpho action | Grok’s own text is **ETH Apex** supply-queue empty. That vault is `0x6D6D386C4855d9b604D7E14c70526407F6272394`, **listed=false**, ~$285 idle WETH, no rsETH sleeve on 2026-09-15. USDC Apex is the recursive/self-collateral book, not the rsETH queue. Prefer ETH Apex + LinkedIn. |
| LoopUnwind `protocol_or_vault_url` = the X post | Weak, not false | Prefer Ethereum V1 Apex `0x7777…` and/or Ethereum Euler Earn `0x3cd3718f8f047aA32F775E2cb4245A164E1C99fB`. |
| ForceDealloc `pct_of_that_vault_tvl: 0` | **Over-precise** | Extra borrower interest is not a % of vault TVL. Use **unknown**. `usd_lost: 0` is acceptable only as “no principal / no bad debt,” not “zero economic effect.” |
| ForceDealloc ~**10,000 USDC** extra interest | **UNVERIFIED** in the two primary tweets | 30 Aug TLDR does not quantify 10k. 4 Sep refund is **8,586**. Keep ~10k as CLAIM or drop it. |
| “Vault-level safeguards queued behind a three-day timelock” / “admitted the withdrawal helper was abuseable and patched” | **UNVERIFIED** | Not in the two opened ForceDealloc tweets. Morpho V2 `setForceDeallocatePenalty` **is** timelocked in the contracts; that is protocol fact, not a proven Hyperithm post-incident patch. |
| Active since **2025-03** (forum + “first listed USDC vault 0x7777”) | **WRONG** month | V1 Apex **created 2025-02-25 08:36:11 UTC** (`creationTimestamp` 1740472571). Forum category 2025-03-03. Use **2025-02**. |
| DefiLlama “Monad V2 from **2025-12-23**” as the Apex book | **Wrong vault** | 2025-12-23 is Monad **AUSD Degen** `0x94D7162c…29f6` (dust). Flagship Monad USDC Apex `0x78999cc9…F371` created **2026-01-09 03:33 UTC**. |
| Recursive `status: resolved` | Soft | No loss, but own-token Morpho collateral **remains**. `resolved` is OK for “no drain”; lesson is not closed. |

---

## 3) Unverified / CLAIM (do not paste as FACT)

- **CBB 35% / $70M / $35M mHYPER supply** — critic snapshot. Grok already tagged CLAIM.
- **Serenity WatchList** on mHYPER/xUSD ([1983325018684809555](https://x.com/SerenityFund/status/1983325018684809555), 29 Oct 00:08 UTC) — commentary. They also said recursive lending “was not a major issue” at time of writing; that sits next to Hyperithm’s same-day unwind. Keep as critic, not as a loss proof.
- **EroticKlaxon delayed-notice** ([1983478598716825752](https://x.com/EroticKlaxon/status/1983478598716825752)): “One does wonder why it took this sustained outcry for you to notice.” **FACT** that the reply exists; the criticism is CLAIM.
- **rsETH Morpho stopwatch 18:08 / 18:22:35 UTC, SyrupUSD/USDe/wsrUSD/siUSD queue pulls, dual write-ups 24 & 30 Apr** — Grok’s X IDs `2047663530296692992` and `2049855556131959168` are **image/link-only** this pass. LinkedIn confirms T+13 / Aave unwind / Instant Redeem / ~0.85% mHyperETH. Do not treat the Morpho-queue seconds as FACT until those images are read.
- **mHyperETH ~0.85% NAV** — curator CLAIM (LinkedIn). Do not convert to dollars without a sourced TVL at T+0. Grok correctly left Morpho `usd_lost: unknown`.
- **“Fastest Morpho curator pause by their own timing chart”** — self-report.
- **Kelp blocked a second drain of ~40,373 rsETH because Hyperithm warned them** — CLAIM (LinkedIn). LayerZero/Kelp confirm the exploit, not this stopwatch credit.
- **~$10M extra ForceDealloc interest** — not in opened tweets; refund **8,586** is the sourced figure.
- **Rekt / TDeFi “quietly pulled $10 million” before Stream** — **RUMOR**. Grok did **not** copy it (good). Nearby FACT: Hyperithm’s **$10M unlevered GP** on 29 Oct is a different number.
- **Yearn: mHYPER processed $150M+ redemptions in 48 hours** during Stream — CLAIM in [Yearn mHYPER report](https://github.com/yearn/risk-score/blob/master/reports/report/midas-mhyper.md). Midas book, not Morpho share-price.
- **Euler Earn `lostAssets` 6,361,518,648,400** (6-dec USDT0 → **~$6.36M**) on Plasma `0x66bE…d21d` — **FACT** as API field 2026-09-15, with `totalAssets` ~$9.02M and `availableAssets` 0. **Do not** treat as published depositor USD lost or as 30% of peak TVL. Grok was right to leave Stream `usd_lost: unknown`. Optional footnote only.
- **Hindenrank ~$262M** — mixes Morpho + Kamino + other. Morpho curator AUM this check: **~$67.4M**.

---

## 4) Missing (add in `merged.md`)

Grok’s five blocks are the right spine. Research adds context Grok did not write as rows:

1. **HYPERITHM-20251010-REDEMPTIONS** (ops, Low/Med) — after the 10 Oct 2025 crash, Hyperithm LinkedIn (2026-07-31) says Morpho vaults paid **>$200M ~90% AUM**, no gates/bad debt. Trading Strategy Ethereum V1 Apex peak ~$220.6M, max DD **0.0%**. `usd_lost: 0` only as CLAIM + third-party NAV series.
2. **Arbitrum DRIP 7 Nov 2025** — Entropy asked Merkl to blacklist **MEV Capital USDC and Hyperithm USDC**. Morpho bad debt ~$700k is **MEV Capital**, not Hyperithm. Hyperithm was “abundance of caution.”
3. **BA Labs / Summer.fi SIP2.31–2.33 (Oct 2025)** — hold Euler Earn Hyperithm USDC because of **recursive mHYPER collateral**. This is the live design lesson, not just xUSD counterparties.
4. **Live self-collateral (2026-09-15)** — Ethereum V1 Apex still **~$1.65M mHyperBTC + ~$0.31M mHYPER** (77% LLTV). Monad V2 Apex **~$41.2M**, Morpho app snapshot **~63% aHYPER**. Ethereum V2 Apex ~$6.3M still lists mHYPER/mHyperBTC. Grok’s “recursive risk already on the unwind plan” did not retire own-token markets.
5. **Telegram ops Grok did not file as incidents** (correct): IRM curve notice for Plasma EVK; mHYPER 86%→77% LLTV migration; **“Hyperithm has no direct or indirect exposure to Resolv across all vaults”**; sunset Morpho cbBTC/ETH Apex + HyperEVM USDT0, **no bad debt**.
6. **Resolv 22 Mar 2026** — Grok correctly omitted a loss row. Nexus annex **listed** wstUSR/USR on Hyperithm USDC historically. Oak/Nexus Morpho loss tables name Gauntlet/Re7/9summits, **not** Hyperithm. Live V1 book **$0** there. Telegram zero-exposure line is curator **CLAIM** plus an empty live book.
7. **Risk-doc split** — Ethereum V1 Apex has a Morpho in-app disclosure; Arbitrum V1 / several V2 vaults **“Curator has not submitted a Disclosure.”** Euler Earn guardian **`0x0`**, 1-day timelock (Ethereum USDC and Plasma USDT).
8. **Better ForceDealloc primary** than kpk: [Morpho Vault V2 `forceDeallocate`](https://docs.morpho.org/developers/contracts/morpho-vaults-v2/).

---

## 5) Standing checks — scorecard

| Grok | Label | Reality |
|---|---|---|
| Risk docs: stale / none as a public curator risk framework | **FACT** | Forum blurb + Aragon post. Product dashboards ≠ Morpho allocation policy. |
| Active since **2025-03** | **WRONG** | **2025-02** (V1 create). |
| PoC X + two TGs | **FACT** | Independent first pass missed TG; Grok is right. |
| New incident since 2026-08-29: none through 2026-09-15 | **FACT** | |
| Lesson: xUSD leftover; later rsETH was a fast queue-kill; ForceDealloc is a new V2 path | **FACT** on xUSD. Incomplete on collateral: **aHYPER/mHYPER/mHyperBTC still back depositor USDC.** |
| Hyperbeat HYPE page “Timelock/Guardian (none??)” | **CLAIM** / out of Morpho-Euler sheet unless that vault is in scope. HyperEVM HYPE V1 is a dust Hyperithm vault (`0x92B518e1…2Cff`, ~$1.7k). |

---

## 6) What to add / change in long-form

- Keep Grok IDs: `HYPERITHM-20251018-RECURSIVE`, `HYPERITHM-20251029-XUSDLOOP`, `HYPERITHM-20251104-STREAMXUSD`, `HYPERITHM-20260418-RSETH`, `HYPERITHM-20260829-FORCEDEALLOC`.
- Insert `HYPERITHM-20251010-REDEMPTIONS` in date order. Do **not** add Resolv as a loss incident.
- Stream URL → Plasma Earn `0x66bE…d21d`. rsETH URL → ETH Apex `0x6D6D…2394` + LinkedIn. ForceDealloc `pct` → **unknown**. Recursive response → **19 Oct UTC**.
- Stream `usd_lost` stay **unknown**. Optional: Euler `lostAssets` ~$6.36M as on-chain residual, not a sheet loss cell.
- Recursive / LoopUnwind `usd_lost: 0` = none disclosed, not a proven zero.
- Standing: risk **stale**; active **2025-02**; PoC X + `@curation_hyperithm`; lesson repeat = leftover xUSD **and** self-collateral still on.
- Do not copy Hindenrank $262M or Accountable TVL into Morpho AUM (**~$67.4M** this check).

See `merged.md` in this folder.

## Taxonomy applied 2026-09-16 (Class v3)

- **Keep on Events:** `STREAMXUSD` affected **High**; `RSETH` non-materially-affected **indirect-curator-fault** (was Prec), Type=`collateral` not ops (rsETH listing/DD); `FORCEDEALLOC` non-materially-affected **direct-curator-fault** (ops / V2 infra). Count `1H 0M 0L 1D 1I`.
- **Allegations (Curators tab, not an Events-tab row):** Own-token recursive loops (mHYPER / aHYPER as Morpho collateral).
- **Not on Events tab:** `REDEMPTIONS`, `RECURSIVE`, `XUSDLOOP`. Do not keep those Grok IDs as Events-tab rows.
