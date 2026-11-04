---
cursor:
  subagentId: "bc-f66d08a7-945d-5476-8d2e-814f1d93aba1"
---

# Telos - merged DD draft

**Draft date:** 2026-09-26
**Inputs:** Grok paste (one INCIDENT block) plus the TelosC posts that resolved, the 5 Aug 2025 pricing note, DefiLlama, and The Block's YAM citation. User-edit before any sheet paste.
**IDs on Events:** Stream (affected High).
**Labels:** readable prose. Do not invent USD or %. Slug stays `telos`.

Telos Consilium (`@TelosConsilium`, [telosc.com](https://telosc.com/)) curates Euler vaults under the TelosC name. X account joined 6 Mar 2024. The bio is on-chain yield and risk infrastructure. DefiLlama on 26 Sep 2026 reports about $92M on Plasma and about $41M on Ethereum. That is deposits, not a loss.

**Alias: Cassa.** Slug stays `telos`. No Cassa folder. Cassa's site lists Luca as co-founder and CEO and as founder of Telos Consilium. Telos's LinkedIn presents Cassa as the name on the live Euler vaults, including the EUR and CHF book. Telos Consilium's own site is still up. This draft keeps the Stream row on `telos` and does not open Cassa vaults as a second curator.

---

EVENT
curator: telos
date: 2025-11-04
title: Stream
incident_id: TELOS-20251104-STREAM
type: collateral
impact: High
fault: direct
class: affected
severity: High
protocol_or_vault_url: https://x.com/TelosConsilium/status/1985756355429613775
usd_lost: unknown
pct_of_that_vault_tvl: unknown
status: unresolved
what_actually_happened: Stream Finance ran yield vaults, and xUSD was its yield-bearing dollar token used as collateral. On 4 Nov 2025, Stream disclosed a $93M shortfall. TelosC's Euler markets had lent against Stream assets, leaving those markets exposed to the shortfall.
response_summary: TelosC had cut supply and borrow caps more than a day before the disclosure after seeing instability. On 5 Nov, it said it would try to limit losses. The affected Euler markets later reached full utilization, and lenders could not withdraw. On 7 Aug 2026, TelosC directed users to Stream's claim form. Filing did not confirm a right to payment, and no later TelosC post shows a payout.
critics: PeckShield, written up on 6 Nov 2025, said TelosC Euler vaults were at 100% utilization and that lenders could not withdraw, with about $14.3M USDC, $7.3M WBTC, and $5.5M WETH named. That is a locked-liquidity tally. The Block, citing Yields and More, put TelosC at $123.6M of Stream-linked debt, the largest curator line in that map. TelosC did not publish that dollar in the posts opened here. Protos used about $124M the same way. Euler forum users argued that curators who picked stale stable oracles should bear losses. The Euler oracle FAQ body was not re-opened here, so that charge stays a critic sentence.
lesson_applied_later: no. Example: on 5 Aug 2025 TelosC's own note said to value stablecoin collateral at the lower of the internal redemption rate or the market price. The November books still accepted Stream assets, and the August 2026 post is still the claims redirect.
funds_recovered: none
sources: primary https://x.com/TelosConsilium/status/1985756355429613775 ; primary https://x.com/TelosConsilium/status/1986159759704121537 ; primary https://x.com/TelosConsilium/status/2085627281435930982 ; primary https://telosc.com/research/stables-pricing-guidelines ; commentary https://www.theblock.co/post/377491/analysts-map-285m-in-potential-exposure-across-defi-after-stream-finances-93m-loss ; commentary https://protos.com/stream-finance-meltdown-winners-and-losers-in-defi-risk-curator-reckoning/

---

## Not on Events tab

- Cassa is the operating alias on this slug, not a second curator and not a new Events row.
- YAM about $123.6M and PeckShield's about $27M. Tallies, not `usd_lost`.
- Grok's Euler UI print of about $13.61M pending bad debt and about $90.76M on Plasma. Not re-read. Euler's indexer did not resolve.
- The unread tail of the 4 Nov and 5 Nov posts, including any unaffected-vault list.

## STANDING CHECKS (2026-09-26)

**Events (H/M/L/N/D/I):** `1H 0M 0L 0N 1D 0I`

Risk docs: stale
- "Stablecoins as Collateral: Pricing Guidelines" is dated 5 Aug 2025. The research index has later articles through Jul 2026. No post-Stream vault risk memo was opened.

Active since: 2024-03 on X (joined 6 Mar 2024). The pricing note is Aug 2025. Grok's 26 Aug 2025 start for Surge USDC was not re-queried.

PoC: X `@TelosConsilium`. Site https://telosc.com/.

Any new incident since 2025-11-04: none separate through 2026-09-26. The 7 Aug 2026 post is the same Stream book.

Whether a past lesson showed up again: yes, inside this incident. The August pricing note said to take the lower of redemption value and market price. The Stream books were still open in November. No second Telos blow-up after November 2025 was found.

Searched: the three TelosC tweets, the pricing note, DefiLlama `telos-consilium`, The Block's YAM piece, a yield page for the Ethereum USDC vault. Euler UI bad debt was not re-read.
