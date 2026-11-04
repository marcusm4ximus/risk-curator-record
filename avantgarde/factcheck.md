---
cursor:
  subagentId: "bc-878ecf91-2bd1-546c-8e38-7b2577f4e1f6"
---

# Avantgarde - Grok vs reality

**As of:** 2026-09-25
**Grok paste:** Desktop `avantgarde/twitter-grok.md`. One INCIDENT: Elixir / sdeUSD, 2025-11-04, severity Med, usd_lost unknown.

## Verdict

Keep one row. Class `affected` (a distressed sleeve was left in the vault; recovery called highly uncertain). Severity stays **Med**. Do not paste “<2%”, “~1%”, “99.5%”, or Dune’s 326.8k units into `usd_lost` or as a sheet percent. MEV Capital’s ~3.6% is a different curator. Resolv stays off Events. PT-reUSD stays off Events because Avantgarde did not list that market.

## 1) Keep

| Grok | Verdict |
|---|---|
| Morpho curator; V1 from mid-2025; no Euler vaults found | **FACT** as scope. Forum intro exists. This pass did not find an Euler book |
| 4 Nov 2025 Stream ~$93M; Elixir sunset deUSD/sdeUSD on 6 Nov 2025 | **FACT** (Elixir post and The Block). The $93M and Elixir’s $68M Stream loan are not Avantgarde P&L |
| Avantgarde USDC Core `0x5b56F90340dBAa6a8693DADb141D620f0e154fE6` supplied the sdeUSD/USDC market | **FACT** that a third-party Dune dashboard lists it, per Grok. This pass did not re-open the Dune query. Treat 326.8k sdeUSD as exposure units, not realized loss |
| Curator: no direct xUSD; sdeUSD under 2% of one V1.1 vault; market locked near 100% utilization because Stream did not repay; V1.1 could not haircut share price | **CLAIM** in the 29 Apr 2026 blog, and earlier in a 14 Nov 2025 Gitcoin post (~2% of the Morpho vault, ~1% lookthrough in the DeFi Yield Vault) |
| Side pocket: shut supply, redeemed known depositors pro rata excluding the sleeve, left residuals for recovery, unidentified holders later withdrew using fee shares | **CLAIM** (curator). Gitcoin 14 Nov 2025 is the contemporaneous version: liquid ~98% moved to Aave, distressed slice left in the Morpho contract, resolution “highly uncertain” |
| Blog date 29 Apr 2026 | **FACT** on the page fetched (the site index elsewhere stamps a related headline 14 May 2026; use 29 Apr 2026 for this essay) |
| No named critic of Avantgarde’s handling | **FACT** on this pass |
| Resolv: curator says zero allocation because hardcoded oracles and proof-of-reserve screens rejected wstUSR/RLP | **CLAIM** (same blog). Independent Resolv loss tables checked here (Chaos Labs) do not name Avantgarde. Non-exposure is not an Events row |
| PT-reUSD Aug 2026: ecosystem liquidations, reports of no bad debt, Avantgarde posted an explainer, later realloc off reUSD | **No PT listing.** The RockawayX/Armitage market is `0x1e9d614631a7df0ec07fb05b2c8cb2491575fd1a63a33bf187a6afb295a4fc64` (collateral PT-reUSD-10DEC2026). Avantgarde is not in `supplyingVaultV2s`. USDC Dynamic caps a different market, spot reUSD/USDC `0x4565ac05d38b19374ccbb04c17cca60ca9353cd41824f0803d0fc7704f60eaed`, allocation 7 raw units, `badDebt` 0. Activity log: 21,116.64 USDC left that spot market on 2026-09-12. Do not add a row. |
| Risk docs: none on Morpho’s disclosure slot; methodology is blog prose. X @avantgardefi | **FACT** as Grok stated; Morpho disclosure slot not re-screenshotted this pass |
| Active since 2025-07 (forum), with a WETH Core date 2025-05-09 on the Morpho UI | **Keep Grok’s split.** Forum thread was not re-dated here |

## 2) Wrong or too sharp

| Grok | Label | Fix |
|---|---|---|
| Severity Med with no Class | Incomplete | Class `affected`, severity Med. Not indirect-curator-fault: the sleeve was not returned at par. Not High: they segregated the liquid majority and did not publish a book-wide haircut |
| `lesson_applied_later: yes` with an empty example | Incomplete | Blog says the oracle-tier and reserve screens are why they skipped Resolv. That is a stated lesson. Spot reUSD is still enabled on USDC Dynamic. That market is not PT-reUSD. Merged: yes for USR, unclear for every structured dollar |
| `funds_recovered: unknown` | Enum | Liquid majority was moved out (curator, twice). Sleeve recovery unpublished. Merged: `partial` |
| Public write-up “came months later” | Too narrow | Gitcoin got a real update on 14 Nov 2025, ten days after Stream, not only the April 2026 essay. No @avantgardefi incident thread was found, which Grok also says |

## 3) Do not invent

- usd_lost stays unknown. Dune units, “<2%”, and “~1% lookthrough” are not a crystallized vault loss.
- Do not copy MEV Capital’s Ethereum USDC bad-debt percent onto this vault.

## 4) What to add or change

- ID stays `AVANTGARDE-20251104-ELIXIR`. Title `Elixir`.
- Type `collateral`.
- Events: `0H 1M 0L 0D 0I 0A`.
- Allegations: none.
