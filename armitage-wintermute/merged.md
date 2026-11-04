---
cursor:
  subagentId: "bc-3bd3110d-1eac-5d0b-bf8e-9cd5e9633c4a"
---

# Armitage by Wintermute, merged DD draft

**Draft date:** 2026-09-15  
**Grok paste:** one INCIDENT (`WINTERMUTE-20260519-RELATEDCREDIT`) plus standing checks. Related-credit is **not** an Events-tab row (Allegations). Prefix here is **ARMITAGE**. User-edit before any Google Sheet paste.  
**Labels in prose:** FACT / CLAIM / RUMOR. `usd_lost` and `pct_of_that_vault_tvl` are `unknown` unless a primary source states them. Morpho “0.00 realized bad debt” is written as `usd_lost: 0` with that source, not as a reconstructed NAV.

Armitage is Wintermute’s Morpho Vault V2 curator, operated on paper by **Corto Industries Limited** (Cayman). Terms (19 May 2026): no fiduciary duty; Wintermute affiliates may trade, liquidate, and take conflicting positions without disclosing specific trades; notices to `armitage@wintermute-trading.com`. Docs: starting on Morpho; Wintermute co-incubated Wildcat; selling point is in-house liquidations so they can list collateral other curators will not. Euler known-vault metadata on Ethereum (this pass): **no Armitage/Wintermute vaults**.

Live Morpho vaults (API + app snapshot **2026-09-15**; TVL moves):

| Vault | Address | Created (UTC) | ~Deposits | Notes |
|---|---|---|---|---|
| Wintermute USDC Prime | `0x5dc53a23AdC9f2Bed98de6F59F7F309a7c71FF2B` | 2026-04-22 | $16.5M | cbBTC / WBTC / wstETH 86%. 0% fees. |
| Wintermute USDC Select | `0xA2EAaD0D586cF9FD73bb2c09cF6A7E3e187D68cd` | 2026-04-22 | $44.4M | Blue-chip + v-wmtUSDC + PTs/reUSD. 0% fees. |
| Wintermute USDT Prime | `0xBf29043164660C60A2a72Cd15FFe2304e87B6838` | 2026-06-04 | $2.0M | Blue-chip + XAUt. ~99.9% one depositor. |
| Wintermute USDT Select | `0x500aE64100D7DbDb640531085C2F5d40cDC8930D` | 2026-08-24 | $10.0M | Includes v-wmtUSDT ~35% and PT-reUSD. |
| Pendle Ecosystem USDC | `0x55C1B6e461a6334B567bAF0FEb5D728715446f05` | 2026-08-04 | $61.0M | PT-only; 5% performance fee. |

Curator page: https://app.morpho.org/ethereum/curator/armitage (~$134M deposits this pass). Owner Safe `0xB83A77677c51aAf6c45b0b64199eAe6938559E5e` (4/6). Curator Safe `0x4687E45bB5518a995913a24BB2816fe2031d74D8` (3/5). Morpho UI: **“Curator has not submitted a Disclosure”** on vault pages; Armitage’s own risk pages are live. Apex tier: documented, **not deployed**. Morpho curator UI has listed a dust **Wintermute Confidential WBTC** row; not in Armitage docs; address **unverified** here.

**Off-list note:** Related-party Wildcat credit (v-wmtUSDC / v-wmtUSDT). Standing conflict, $0 bad debt, not a dated blotter row.

---

EVENT
curator: Armitage by Wintermute
date: 2026-08-25
title: PT-reUSD
incident_id: ARMITAGE-20260825-PTREUSD
type: oracle
impact: N
fault: indirect
class: non-materially-affected
severity: N
protocol_or_vault_url: https://app.morpho.org/ethereum/vault/0x55C1B6e461a6334B567bAF0FEb5D728715446f05/pendle-ecosystem-usdc
usd_lost: 0
pct_of_that_vault_tvl: unknown
status: resolved
what_actually_happened: FACT: On 8 Jul 2026 Armitage queued PT-reUSD-10DEC2026/USDC (`0x1e9d614631a7df0ec07fb05b2c8cb2491575fd1a63a33bf187a6afb295a4fc64`, oracle `0x217d6DdCDB95112C51657F6270e8C079CFDB51f0`, 91.5% LLTV, then $5M absolute cap) for Select, rolling from expired June PTs. FACT: Pendle Ecosystem USDC (Armitage-curated, created 2026-08-04) is mandated to PT markets Pendle approves; that book is now majority PT-reUSD. FACT: On 25 Aug 2026 ~04:37–04:51 UTC, YT-reUSD buying pushed PT-reUSD ~2.6–3% and the Morpho oracle (lower of 15-minute average vs accretion toward $1 at 10 Dec 2026) printed the lower number. Tight 91.5% LLTV loops liquidated. CLAIM (CoinDesk / secondary recaps): ~$36.4M debt repaid across USDC (~$35.2M) and USDT (~$0.96M) markets, ~33 events; do not put that notional in `usd_lost`. FACT (Morpho UI on the USDC market): listed liquidation rows show 0.00 realized bad debt; market still shows 0.00 realized/unrealized bad debt. FACT: Pendle said the oracle worked as designed and the Pendle Ecosystem Vault was “not affected” meaning lenders/bad debt, not “Armitage had no supply.” FACT (2026-09-15 Morpho UI): Pendle Ecosystem USDC supplies ~$34.1M (55.9% of that vault, 33.6% of the market); Wintermute USDC Select ~$8.63M (19.5% of Select, $10M cap); Wintermute USDT Select ~$1.33M of the sister USDT market. Grok missed this because it filed PT events as other curators’ problem. usd_lost 0 = Morpho bad-debt line. pct unknown. No sourced Armitage vault share-price wipe.
response_summary: FACT: Armitage Morpho forum thread has no post after 13 Aug 2026 (PT-USDG onboard). No sourced @wintermute_t / Armitage incident note on 25 Aug was found in this pass. FACT: Steakhouse, a co-supplier, said it withdrew from affected markets then restored; CoinDesk reported that. Whether Armitage’s allocator/sentinel/Hypernative deallocated is **unverified**; live caps and allocations show they stayed in and later ran larger than the original $5M Select cap (Select $10M; Pendle Eco $60M absolute on that market).
critics: Andrew Hong / Herd called a 2.6% PT-reUSD oracle manipulation (CLAIM), summarized in https://nulltx.com/how-a-normal-oracle-move-wiped-out-36m-in-leveraged-positions ; Re Protocol said it was investigating possible PT market-price manipulation (The Defiant). Criticism targeted oracle/LLTV design and Steakhouse’s market, not a named Armitage loss. Pendle: https://cryptorank.io/news/feed/2af08-pendle-reusd-liquidations-pt-price-drop-oracle
lesson_applied_later: no, example: they did not exit PT-reUSD; Pendle Eco is ~56% in that market three weeks later; USDT Select (created 24 Aug) still supplies the USDT PT-reUSD market. 91.5% LLTV on PTs remains Select/Ecosystem policy.
funds_recovered: n/a
sources: primary, https://forum.morpho.org/t/introducing-armitage-by-wintermute-vaults-on-morpho/2269 ; https://app.morpho.org/ethereum/market/0x1e9d614631a7df0ec07fb05b2c8cb2491575fd1a63a33bf187a6afb295a4fc64 ; https://app.morpho.org/ethereum/vault/0x55C1B6e461a6334B567bAF0FEb5D728715446f05/pendle-ecosystem-usdc ; https://app.morpho.org/ethereum/vault/0xA2EAaD0D586cF9FD73bb2c09cF6A7E3e187D68cd/wintermute-usdc-select ; https://armitage.wintermute.com/docs/vaults/ecosystem ; commentary, https://www.coindesk.com/tech/2026/08/25/a-3-token-move-just-triggered-usd36-million-in-ethereum-defi-liquidations ; https://thedefiant.io/news/defi/pendle-oracle-move-liquidates-usd36-million

---


## Not on Events tab
- `ARMITAGE-20260519-RELATEDCREDIT`, Launch disclosure of v-wmtUSDC related credit. Standing conflict, $0 bad debt, details are preserved above.

## STANDING CHECKS

**Events (H/M/L/N/D/I):** `0H 0M 0L 1N 0D 1I`

Risk docs: **active**, https://armitage.wintermute.com/docs/risks-and-monitoring (last updated 2026-09-10 in docs scrape). Morpho vault UI: curator has **not** submitted Morpho’s disclosure form.

Active since: **2026-04** (Prime/Select `creationTimestamp` 2026-04-22). Public brand launch **2026-05-19**. Morpho forum category 15 May 2026.

PoC: **X: @wintermute_t** ; email **armitage@wintermute-trading.com** (terms). Morpho forum: user `Armitage`. No dedicated public Armitage Telegram curator handle found. `t.me/WintermuteTrading_bot` is not curator PoC.

Any new incident since Grok (Grok’s own cutoff 2026-05-19): **yes**, `ARMITAGE-20260825-PTREUSD`. Grok listed Pendle Eco, USDT vaults, and Tenor/Morpho Midnight (23 Jul 2026 OTC launch partner) as expansions only. Tenor remains a product note, not an Events-tab row. No pause, exploit, or sourced bad-debt socialization on Armitage vaults as of 2026-09-15.

Whether a past lesson showed up again: **yes**, related-party unsecured credit listed again as v-wmtUSDT in USDT Select (2026-08-24). PT 91.5% LLTV kept after 25 Aug. Timelock increase 3d→7d (8 Jul 2026) is a Morpho-recommendation hardening, not a response to a loss.

Out of scope: Wintermute September 2022 firm hack; Euler v1 2023; Neuromancer name trivia; other curators’ Stream/Resolv losses unless Armitage vaults are named (they are not in those loss tables in this pass).

Searched: Armitage docs + terms + llms-full; Morpho app curator/vault/market pages + GraphQL/REST; Morpho forum Armitage category; Lazy Summer RFC 849/850; Euler `/api/public/metadata?chainId=1`; PR Newswire; Wintermute newsroom; Bankless; CryptoBriefing; Gogol; CoinDesk/Defiant/NullTX on 25 Aug; Hypernative named only in Armitage docs. No material depositor-loss number for an Armitage vault was found as of 2026-09-15.
