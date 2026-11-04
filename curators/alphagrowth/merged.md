---
cursor:
  subagentId: "bc-878ecf91-2bd1-546c-8e38-7b2577f4e1f6"
---

# AlphaGrowth - merged DD draft

**Draft date:** 2026-09-25
**Grok paste:** zero INCIDENT blocks. Independent check agrees. Edit before any sheet paste.
**Not Alphaping.**

**No material incidents found as of 2026-09-25.**

AlphaGrowth is an Euler V2 risk curator. No Morpho vault incident names this firm. Tracked stablecoin AuC in Grok’s paste is about $1.9M across roughly 11 vaults. That is a snapshot, not a loss.

Two vaults opened here still show share prices above 1 and 0.0% max drawdown after large TVL drops:

| Vault | Address | Series start | Peak (indexer) | Later TVL | Share |
|---|---|---|---|---|---|
| AlphaGrowth Falcon (USDf) | `0x412D0E31790D77b6e7a7872a9fd6967B6E640229` | 2025-06-19 | ~51.6M USDf | ~17.4k USDf (stamp 2026-07-30) | 1.068 |
| YO yoUSD Market (Base USDC) | `0x085178078796da17b191f9081b5e2fccc79a7ee7` | 2025-07-05 | ~6.29M USDC | ~23.2k USDC (stamp 2026-07-21) | 1.061 |

Deposits and redemptions are marked open. A TVL drop with a rising share price is withdrawals. `usd_lost` is not 0 and not those peaks. Grok’s separate “Falcon USDC peak ~$218M” line is a different vault and was not re-opened.

Grok’s Euler UI read of the Falcon market (sUSDf max LTV 94% / LLTV 95%, USDC 90/91, caps shown as infinite, bad-debt socialisation on) is a standing design risk. It is not a dated loss and not a documented pause, so it is not an Events row.

Collateral Grok lists as live and growth-oriented: reUSD / reUSDe, Falcon USDf/sUSDf, Cap stcUSD, Pendle AUSD PTs, Balancer/Beefy mooTokens, Base names (VVV, VIRTUAL, ZRO, AERO), PAXG/mAPOLLO. Not re-audited market by market.


## Not on Events tab

- `ALPHAGROWTH-20260112-YOUSD` - YO Protocol harvest shortfall. YO said its treasury made user balances whole. No sourced AlphaGrowth depositor loss or public response.
- Stream/xUSD (Nov 2025) and Resolv/USR (Mar 2026) - AlphaGrowth is not on the curator loss lists checked. Non-exposure is not an event.
- TVL runoff on Falcon and Base USDC - withdrawals, not a haircut.

## STANDING CHECKS (2026-09-25)

**Events (H/M/L/N/D/I):** `0H 0M 0L 0N 0D 0I`

Risk docs: none
- No public risk framework or incident playbook found. Grok: Kyril Vlasenko said in Jul 2026 that internal dashboards were being built, not published. `euler.alphagrowth.io` fetch failed for Grok (403) and was not retried.

Active since: 2024-12
- Grok: AlphaGrowth Base USDC series from 2024-12-06. Not re-fetched. Falcon market data starts 2025-06-19. The firm is older as a BD shop.

PoC: X: @alphagrowth1
- Curation: X @KyrilVlasenko. Contact jobs@alphagrowth.io. No public TG for vault ops found.

Any new incident since Grok: none through 2026-09-25.

Whether a past lesson showed up again: n/a (no sourced prior lesson).

Searched: Trading Strategy Falcon and YO yoUSD pages, Falcon’s Euler Frontier announcement (product launch, not an incident), Euler forum PT-yoUSD proposal (market growth, not a loss), Stream and Resolv name lists. No AlphaGrowth bad-debt post was found.
