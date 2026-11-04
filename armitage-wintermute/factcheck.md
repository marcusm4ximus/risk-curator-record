---
cursor:
  subagentId: "bc-3bd3110d-1eac-5d0b-bf8e-9cd5e9633c4a"
---

# Armitage by Wintermute — Grok vs reality

**As of:** 2026-09-15  
**Grok paste:** present. One INCIDENT block plus standing checks in `twitter-grok.md`. Prefix in that paste is `WINTERMUTE-…`. Assigned prefix is **ARMITAGE**.

**Scope:** Morpho / Euler vault curation by Armitage only. Wintermute’s September 2022 hot-wallet theft is out of scope (Grok correctly excluded it). Euler: no Armitage/Wintermute vault in Euler `api/public/metadata?chainId=1` on this date.

---

## 1) Verdict on the paste

Grok got the **right first story** (Select’s related-party Wildcat credit as Morpho collateral) and the **wrong universe after it**. It treated 25 Aug 2026 PT-reUSD liquidations as “generic Morpho events at other curators.” Those liquidations ran on the **same** PT-reUSD-10DEC2026/USDC market Armitage still supplies, and Armitage’s Pendle Ecosystem USDC vault is now the **largest** supplier. It also missed Block Analitica’s July 2026 public rejection of Select and Armitage’s own forum reply.

Do not copy Grok’s `usd_lost: 0` / `pct_of_that_vault_tvl: 0` pair into the sheet as a proven P&L. Morpho shows **0 realized bad debt** on the v-wmtUSDC market as of this date; that is not the same as a reconstructed vault NAV loss, and **0% of TVL** is invented.

---

## 2) Wrong or easy-to-get-wrong

| Item | Label | Reality |
|---|---|---|
| Incident ID `WINTERMUTE-20260519-RELATEDCREDIT` | **WRONG** vs this DD’s prefix | Use `ARMITAGE-20260519-RELATEDCREDIT`. Same-event suffix `YYYYMMDD-RELATEDCREDIT` can stay. |
| `pct_of_that_vault_tvl: 0` on the related-credit listing | **WRONG** (invented %) | A collateral listing with no sourced loss is not “0% of vault TVL lost.” Leave **unknown**. BA’s 16.03% (30 Jun 2026) and today’s ~11% are **allocation shares**, not loss. |
| `usd_lost: 0` as all-time Select P&L | **CLAIM** if written as audited P&L; **FACT** only as Morpho market bad-debt = 0 on this date | Morpho v-wmtUSDC/USDC UI (2026-09-15): realized and unrealized bad debt **0.00 USDC**, “No liquidation has been executed.” No Armitage post-mortem with a crystallized Select loss was found. Sheet: `0` only with that Morpho source, or **unknown**. |
| “No dedicated public rebuttal thread to the conflict-of-interest flags was found” | **WRONG** | Armitage posted a point-by-point reply on Lazy Summer RFC #850, 2026-07-03, after Block Analitica said do not onboard Select. [Summer RFC 850](https://forum.summer.fi/t/rfc-onboard-wintermute-usdc-select-morpho-v2-vault-to-usdc-higher-risk-fleet/850) |
| “Any new incident since 2026-05-19: none sourced” / “generic Morpho market events at other curators” | **WRONG** as a curator-scoped clean bill | **FACT:** 25 Aug 2026 liquidations on PT-reUSD-10DEC2026/USDC `0x1e9d61…a4fc64` (91.5% LLTV), the market Armitage onboarded 8 Jul 2026 and still supplies. Morpho UI: 0.00 realized bad debt on listed rows; Pendle/Steakhouse said lenders were not left short. Armitage Morpho forum last post is **13 Aug 2026** — no sourced Armitage incident note. [Morpho market](https://app.morpho.org/ethereum/market/0x1e9d614631a7df0ec07fb05b2c8cb2491575fd1a63a33bf187a6afb295a4fc64); [CoinDesk 25 Aug](https://www.coindesk.com/tech/2026/08/25/a-3-token-move-just-triggered-usd36-million-in-ethereum-defi-liquidations) |
| “USDT Prime/Select reported 2026-09-02” as first appearance | **WRONG** as deploy date | Morpho API `creationTimestamp`: USDT Prime **2026-06-04**, USDT Select **2026-08-24**. 9 Sep is a docs “status” stamp, not genesis. |
| Pendle Ecosystem USDC “live 2026-08-12” as deploy date | **CLAIM** as tweet date; **WRONG** as contract birth | Morpho API: vault created **2026-08-04**. @wintermute_t announced 12 Aug 2026. |
| “v-wmtUSDC is an ERC-4626 wrapper” as FACT | **UNVERIFIED** here | BA and DefiLlama describe a wrapped Wildcat claim priced off a Wildcat market/NAV oracle (`0x6969…07e8`). Token `0xF65460B84c13eeb911303336Ab0f9D63CC79839f`. Do not copy ERC-4626 without a contract read. |
| 9.25% Wildcat APR as FACT | **CLAIM** | Grok itself tagged “launch commentary.” CryptoBriefing / Gogol / BA (citing CryptoBriefing). Armitage Select docs do **not** publish 9.25%. Agra later showed a 10% coupon on wmtUSDC. |
| Wildcat tweet: Select had “about $2.4M” in v-wmtUSDC at launch | **UNVERIFIED** | Tweet ID `2056806124930633913` snowflakes to 2026-05-19 18:36 UTC, but the body was not retrieved (X mirrors 404/451). **FACT:** absolute cap is still **$25M** / **100%** relative on Morpho UI and `/allocations` (2026-09-15). |
| Tom Wan `https://x.com/tomwanhh/status/2056757699409265120` | **UNVERIFIED** as text; date is real | Snowflake = 2026-05-19 15:23 UTC. Body not retrieved. The *substance* (exchange-rate/NAV oracle, default propagates) is independently **FACT** via Morpho oracle UI + DefiLlama risk + BA. Do not paste Wan’s wording as if quoted. |
| Bankless “Wintermute has borrowed nearly $110M through Wildcat” | **CLAIM** | Jack Inabinet, 19 May 2026. Not re-summed on-chain here. Principal/agent paragraph is commentary, directionally aligned with BA. [Bankless](https://www.bankless.com/read/news/wintermute-launches-armitage-usdc-vault-solution-on-morpho) |
| Related-party credit “did not produce a second event” | **WRONG** as a lesson check | **FACT:** Wintermute USDT Select (created 2026-08-24) allocates **~35%** to v-wmtUSDT/USDT (`0x939609…f2c3`), 99.99% supplied by that vault, $15M absolute cap, 0 liquidations, same 86% LLTV pattern. [USDT Select](https://app.morpho.org/ethereum/vault/0x500aE64100D7DbDb640531085C2F5d40cDC8930D/wintermute-usdt-select) |
| Mixing Wintermute 2022 ~$160M Profanity/hot-wallet theft into Armitage `usd_lost` | **WRONG** | Grok correctly parked it out of scope. Keep it out. |
| Morpho app “Curator has not submitted a Disclosure” means Armitage has no risk docs | **WRONG** | Own docs are live and dated (About / Risks last updated 2026-09-10). Morpho-native disclosure form is empty. Risk-docs standing check: **active** (own site), not `none`. |
| Euler 2023 or Euler V2 curator book | **WRONG** if attributed | No Euler known-vault metadata hit for Armitage/Wintermute on Ethereum in this pass. Docs say Morpho first. |

---

## 3) Unverified (do not invent)

- **Launch allocation $2.4M** (Wildcat tweet body not opened).
- **Tom Wan tweet text.**
- **Bankless ~$110M** Wildcat borrow.
- **% of Select TVL lost** — there is no sourced Select NAV drawdown. Current v-wmtUSDC allocation ~**11.4% / $5.07M** of ~$44.4M Select (2026-09-15 Morpho UI). BA: **16.03% / $5.24M of $32.71M** on 30 Jun 2026.
- **Whether Armitage sentinel/Hypernative fired** on 25 Aug 2026. Steakhouse said *it* withdrew then restored. No Armitage tx reconstruction of a full exit was done in this pass. Live book still has large PT-reUSD supply.
- **Confidential WBTC** row on Morpho curator UI (dust TVL on one scrape). Not in Armitage docs. Address not confirmed here.
- **PoC Telegram.** None found. Terms: `armitage@wintermute-trading.com`. X: `@wintermute_t`. Morpho forum user `Armitage`. `t.me/WintermuteTrading_bot` is a trading bot (Grok is right).

---

## 4) Missing from Grok (add these)

1. **On-chain birth before the press date.** USDC Prime `0x5dc53…FF2B` and USDC Select `0xA2EA…68cd` `creationTimestamp` **2026-04-22**. v-wmtUSDC market created **2026-04-27**. Public launch / Morpho forum **2026-05-19**. Standing “active since”: **2026-04**.
2. **Block Analitica / Lazy Summer, 1–3 Jul 2026.** Prime: LR, SIP-eligible. Select: **do not onboard** — sole lender, 100% relative / $25M cap, looping borrowers, liquidator = same credit, rebasing token, no DEX. Armitage replied (liquidity via RFQ ~$500k, delinquency oracle discount, internal relative cap 17.5%, offered to cut absolute cap ~3×). **On-chain $25M / 100% relative cap was not cut** as of 2026-09-15. [RFC 850](https://forum.summer.fi/t/rfc-onboard-wintermute-usdc-select-morpho-v2-vault-to-usdc-higher-risk-fleet/850) · [RFC 849 Prime](https://forum.summer.fi/t/rfc-onboard-wintermute-usdc-prime-morpho-v2-vault-to-usdc-lower-risk-fleet/849)
3. **25 Aug 2026 PT-reUSD liquidations** — curator-scoped because Armitage vaults supply the market. Add `ARMITAGE-20260825-PTREUSD`. Do not paste CoinDesk’s ~$36.4M liquidation *notional* into `usd_lost`. That is borrower liquidations, not vault loss. `usd_lost` stays **0** only as Morpho realized bad debt = 0, else **unknown**. `pct` **unknown**.
4. **Pendle Ecosystem USDC** `0x55C1…6f05` — co-curated with Pendle; 5% performance fee; **~56% / $34M** in the same PT-reUSD/USDC market (2026-09-15). Grok filed this as “product expansion only.”
5. **USDT Select v-wmtUSDT** — related-party credit **repeated** 24 Aug 2026, the day before the PT cascade. Lesson from May is **no**.
6. **Timelock 3d → 7d** on add-adapter / increase-cap (Prime executed, Select queued) — Morpho forum 8 Jul 2026. Ops hardening, not an incident.
7. **Deposit concentration.** Morpho UI 2026-09-15: one address `0x01fB…C384` ≈ 74% Prime, 69% Select, 60% USDT Select, 99.9% USDT Prime. BA already flagged 92% on 30 Jun. Seed/bootstrap, not a hack.
8. **stUSDS** was on the 19 May Select market list; **not** on the live Select book (0 allocated / cap 0 in API for leftover names). Listing drift, not a loss.
9. **Morpho roles:** Owner Safe `0xB83A…9E5e` 4/6; Curator Safe `0x4687…74D8` 3/5. Fees 0/0 on Core vaults; Pendle Eco 5% perf / 0% mgmt.

---

## 5) What to add/change in `merged.md`

- One INCIDENT per dated event. Keep Grok’s related-credit row (prefix fixed). Add PT-reUSD. Do **not** make BA’s review its own money incident; it is critics + response on the May listing.
- `usd_lost` / `pct`: **unknown** unless Morpho/curator states a number. Morpho **0.00** bad debt → `usd_lost: 0` with that source; never invent %.
- FACT vs CLAIM vs RUMOR in prose. Bankless/CryptoBriefing/Gogol = commentary until on-chain.
- Standing checks: risk docs **active**; active since **2026-04**; PoC **X: @wintermute_t** and email **armitage@wintermute-trading.com**; new since Grok = PT-reUSD (and USDT related-party as lesson repeat); Euler **none found**.

## Taxonomy applied 2026-09-16 (Class v3)

- **Keep on Events:** `ARMITAGE-20260825-PTREUSD` non-materially-affected **direct-curator-fault**. Count `0H 0M 0L 1D 0I`.
- **Allegations (Curators tab, not an Events-tab row):** Related-party Wildcat credit (v-wmtUSDC / v-wmtUSDT).
- **Not on Events tab:** `ARMITAGE-20260519-RELATEDCREDIT`. Do not keep Grok’s related-credit block as an Events-tab row.
