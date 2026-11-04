---
cursor:
  subagentId: "bc-878ecf91-2bd1-546c-8e38-7b2577f4e1f6"
---

# AlphaGrowth - Grok vs reality

**As of:** 2026-09-25
**Grok paste:** Desktop `alphagrowth/twitter-grok.md`. Zero INCIDENT blocks. Do not confuse with Alphaping.

## Verdict

Empty blotter **stands**. Indexed share prices on the two vaults opened here are above 1 with 0.0% max drawdown while TVL is far below peak. That pattern is withdrawals, not a sourced lender haircut. Do not write `usd_lost: 0`. Events: `0H 0M 0L 0D 0I 0A`.

## 1) Keep

| Grok | Verdict |
|---|---|
| Euler V2 curator, not Morpho. Not Alphaping | **FACT** as scope. Morpho curator lists were not re-crawled; no Morpho incident names AlphaGrowth |
| Stream/xUSD, Resolv, and the YO harvest are not AlphaGrowth loss events | **FACT** for Stream and Resolv on the write-ups checked (AlphaGrowth is not in those name lists). YO: see below |
| Trading Strategy “likely abandoned” is not insolvency | **FACT** as a non-row. The Falcon and YO pages opened here do not even carry that sentence; they show open deposits |
| High LTV on Falcon (sUSDf 94/95, USDC 90/91, infinite caps, bad-debt socialisation) is a design fact, not a dated loss | **CLAIM as live parameters.** Grok read them off the Euler UI. Not re-decoded from storage this pass. Do not book an Events row without a loss or a documented defensive action |
| Risk docs: none. X @alphagrowth1. Product @KyrilVlasenko. Dashboards “being built” in Jul 2026 | **Keep.** `euler.alphagrowth.io` was not fetched (Grok reported 403). No public risk memo found |
| No material incident through 2026-09-25 | **FACT** on this pass |

## 2) Snapshots (do not treat as losses)

| Vault | This pass | Grok |
|---|---|---|
| AlphaGrowth Falcon, USDf, `0x412D0E31790D77b6e7a7872a9fd6967B6E640229` | Trading Strategy stamp ~2026-07-30/08-05: TVL about 17.4k USDf, peak about 51.6M USDf, share 1.068, max drawdown 0.0%, deposits open, data starts 2025-06-19 | Grok’s “Falcon USDC peak ~$218M now ~$74k” is a different listing. Do not merge the two peaks into one loss |
| AlphaGrowth YO yoUSD Market, Base USDC `0x085178078796da17b191f9081b5e2fccc79a7ee7` | Stamp ~2026-07-21/08-04: TVL about 23.2k USDC, peak about 6.29M, share 1.061, max drawdown 0.0%, deposits open, data starts 2025-07-05 | Consistent with “TVL fell, share price did not” |

Grok’s earliest series, AlphaGrowth Base USDC from 2024-12-06, was not on these two pages. Active-since **2024-12** stays Grok-cited. The Falcon market itself starts 2025-06-19.

## 3) Not Events rows

- YO Protocol yoUSD harvest shortfall (2026-01-12, about $3.7M, YO said treasury made users whole). That is YO’s ops event. No AlphaGrowth depositor loss or AlphaGrowth response was sourced. Non-exposure plus no documented realloc is not indirect-curator-fault.
- Stream and Resolv name other curators.
- Governor `0x4f89…Fd3C` remains truncated. Grok already flagged that.

## 4) What to add or change

- No EVENT rows. Allegations: none.
- Standing design risk (high LTV, infinite caps, growth collateral) belongs in the snapshot, not the blotter.
