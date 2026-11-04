---
cursor:
  subagentId: "bc-878ecf91-2bd1-546c-8e38-7b2577f4e1f6"
---

# Architect - Grok vs reality

**As of:** 2026-09-25
**Grok paste:** Desktop `architect/twitter-grok.md`. Zero INCIDENT blocks. Prefix in the paste is misspelled `architech`. The slug prefix is `ARCHITECT`. No incident IDs were emitted, so nothing to rename on a blotter.

## Verdict

Empty blotter **stands**. No sourced Architect vault loss, pause announcement, oracle break, or public incident response. Do not invent USD or %. Events: `0H 0M 0L 0D 0I 0A`.

## 1) Keep

| Grok | Verdict |
|---|---|
| Morpho curator ARCHITECT; Base vault ARCHITECT Global Value `0x8effa741061aaa2d8a5012a9b09a2d31d8b628d7`; share token ARCHITECT GVI; USDC | **FACT**. Morpho forum intro 2025-11-10. Trading Strategy and vaults.fyi use that address |
| Forum legal names: Architect Systems Capital Management; Architect Systems Development AG | **FACT** as the text of the forum post |
| Data start 2025-11-17 | **FACT** on the Trading Strategy technical table |
| No Euler vault found; not named on Clearstar, Re7/cbETH, Stream, or Resolv loss lists | **FACT** on this pass. Chaos Labs’ 23 Mar 2026 Resolv tally does not list Architect |
| April 2026 `maxDeposit=0` / `maxRedeem=0` indexer flag is not an incident | **FACT** as a non-row. The vault is `morpho_v2_like`. On Morpho Vault V2 those view functions often return 0 even when the app is open. Do not book a pause |
| Risk docs: none. Only public ops surface found is the Morpho forum intro. No X or TG handle | **FACT** on this pass |
| Active since 2025-11 | **FACT** (forum 2025-11-10, series from 2025-11-17) |

## 2) Unverified (do not upgrade to FACT)

| Grok | Label |
|---|---|
| “FINMA-licensed investment manager,” first regulated institution to curate Morpho at scale; oversight FINMA & FinControl; Grant Thornton / KPMG; AIG | **CLAIM** (forum post only). A FINMA public-register check was not completed. The same post’s disclaimer says they act as a technical curator |
| Baar AG renamed from Architect Systems Development AG to Architect Systems Capital Management AG on 2026-02-06, CHE-357.651.231 | **UNVERIFIED**. Not re-opened on the Swiss register |
| Trading Strategy as of 2026-09-24/25: deposits open, share ~1.038 USDC, peak ~1.47M, 0% max drawdown | **Partly stale vs the page this pass opened.** That page’s last-updated stamp is 2026-08-04: deposits open, redemptions open, flags empty, share 1.032 USDC, TVL about 1.25M USDC, peak about 1.47M USDC. No loss either way. Do not paste those TVL figures as `usd_lost` |

## 3) Missing

Nothing that belongs on Events. The documentation gap (no risk memo, no PoC channel, license not independently checked) stays in standing checks.

## 4) What to add or change

- No EVENT rows.
- Not on Events: the April maxDeposit snapshot.
- Allegations: none.
