---
cursor:
  subagentId: "bc-b07e5869-4b5e-5088-8b71-d538d374ee87"
---

# Anthias Labs - Grok vs reality

**As of:** 2026-09-26
**Grok paste:** Desktop `anthias-labs/twitter-grok.md`. Zero INCIDENT blocks. Scope in the paste is Morpho/Euler vault curation, not Moonwell Core advisory. No incident IDs were emitted.

## Verdict

One Events row. Anthias wrote the 28 Aug 2026 MAMO post-mortem as Moonwell's risk curator, so Core suppliers of cbBTC, WETH, USDC, and wstETH are this curator's depositors for that market. They face residual borrower obligations and at least one supplier could not withdraw. That is affected, High. The about $9.131 million line is residual Core debt in the post-mortem, not a booked haircut, so `usd_lost` stays unknown. Morpho Flagship and Ecosystem share prices are a separate book and do not show a haircut. Events: `1H 0M 0L 0D 0I 0A`.

## 1) Keep

| Grok | Verdict |
|---|---|
| Curator is Anthias Labs on Moonwell Morpho vaults on Base: Flagship USDC, Flagship ETH, Flagship EURC, Frontier cbBTC, Ecosystem USDC | **FACT** on the Morpho API this pass. Curator id `anthias-labs`, address `0x08eDEbFFaE68970DCf751baa826182b3a4aCFC05`. Listed V1: Flagship USDC `0xc1256Ae5FF1cf2719D4937adb3bbCCab2E00A2Ca`, Flagship ETH `0xa0E430870c4604CcfC7B38Ca7845B1FF653D0ff1`, Flagship EURC `0xf24608E0CCb972b0b0f4A6446a0BBf58c701a026`, Frontier cbBTC `0x543257eF2161176D7C8cD90BA65C2d4CaEF5a796`. Ecosystem USDC V1 `0xE1bA476304255353aEF290e6474A417D06e7b773` is the same curator and is unlisted. A listed Frontier cbBTC V2 `0xdbA76Bc542bb07538e046B40F2e8a215B409F7A8` is also that curator |
| MIP-B56 (2026-01-29) proposes moving Base Morpho vault risk curation from Block Analitica / B.Protocol to Anthias | **FACT** as the text of https://forum.moonwell.fi/t/mip-b56-transfer-risk-curatorship-for-moonwell-vaults-base-to-anthias-labs/2059. The post names USDC, WETH, EURC, cbBTC, and mwUSDC. The mwUSDC address prefix matches Flagship USDC `0xc1256Ae5...` |
| Ecosystem USDC intro 2025-10-28, lending USDC against WELL / stkWELL / MAMO | **FACT** as https://forum.morpho.org/t/anthias-labs-curator-introduction/2061. On-chain creation of the V1 Ecosystem vault is 2025-09-25, slightly before that post |
| No Euler vault with Anthias as on-chain curator found | **FACT** on this pass. No Euler listing turned up |
| MAMO August 2026 losses are Moonwell Core, not an Anthias Morpho vault haircut | **FACT** that the haircut is not on the Morpho vaults. **Change of tab.** Anthias authored the post-mortem and risk-curates that Core market, so the row is on Events. https://forum.moonwell.fi/t/post-mortem-mamo-market-incident-on-base/2208 puts residual borrower obligations at about $9.131 million on the post-mortem's oracle basis. That figure stays out of `usd_lost`. Class `affected`, severity High, because Core suppliers are impaired. Morpho share prices are not the loss |
| Ecosystem USDC has no sourced loss. Current book is small | **FACT** on the API. Share price about 1.057. Weekly points from 2025-10-02 never fall. Live allocation is stkWELL/USDC and a dust WELL/USDC line, caps at 0, market bad debt 0. Deposits disabled, unlisted. MAMO is not in the current allocation. Base MAMO/USDC markets checked have no supplying vault and 0 bad debt |
| Flagship weekly share prices do not show a haircut | **FACT** for Flagship USDC: weekly points from 2024-06-13 (share 1) to 2026-09-24 (about 1.089) have no down week. Allocated markets on Flagship USDC, ETH, EURC, and Frontier cbBTC show 0 bad debt and 0 realized bad debt on this read |
| X `@anthiasxyz`, site anthias.xyz, email team@anthias.xyz | **FACT** on the Morpho curator socials and the forum intro |
| Felix 10 Oct 2025 "no bad debt" line is advisory, not an Anthias-named vault | **FACT** as a sentence in the same forum intro. Felix is not a slug here. Searched merged and twitter-grok files plus public Felix write-ups. No sourced Felix depositor loss. Anthias says eight Felix vaults had no bad debt and no forced liquidations. Not an Events row |

## 2) Unverified (do not upgrade)

| Grok | Label |
|---|---|
| Flagship/Frontier curatorship "transferred Feb 2026" via a Moonwell recap | **Partly open.** The proposal is 2026-01-29. Morpho V2 Flagship/Frontier shells for this curator were created 2026-02-06. The recap post itself was not opened |
| Risk docs "active", dashboard `risk.anthias.xyz/moonwell/vaults/base/overview` | **Partial.** https://risk.anthias.xyz/moonwell/core/base/overview loads as a Moonwell risk dashboard. Vault-page numbers were not rendered here. Forum parameter posts continue through 2026. No standalone Morpho methodology PDF was found. Standing label stays **active** |
| "No material incidents" on Felix vaults they advise | **CLAIM** (their intro). Out of this vault book |
| Public Telegram not found | **Not contradicted.** None on the Morpho socials |

## 3) Missing

MAMO (27 Aug 2026) belongs on Events. The other Core episodes Grok lists (10 Oct 2025, 4 Nov 2025 wrsETH, 15 Feb 2026 cbETH) stay off. The 10 Oct 2025 Moonwell bad-debt table (VIRTUAL, MORPHO, AERO, about $1.72 million in Anthias's report) is not Felix.

## 4) What to add or change

- `ANTHIAS-20260827-MAMO`: affected, High, collateral, unresolved, `usd_lost` unknown. Liquidators repaid part of the debt, so funds recovered is partial. No supplier close-out.
- Not on Events: Felix (someone else's vaults, Anthias says no bad debt), the 10 Oct 2025 Moonwell Core table, Ecosystem USDC's MAMO design line with no dated Morpho loss.
- Allegations: none.
