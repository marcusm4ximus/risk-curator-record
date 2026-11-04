---
cursor:
  subagentId: "bc-fb666fb3-0441-5da8-bd93-652a62976384"
---

# Keyrock: Grok vs reality

**As of:** 2026-09-25
**Grok paste:** one INCIDENT, `KEYROCK-20260322-RESOLV`, severity Low, type collateral.
**Scope:** Morpho vaults. Ethereum `lostAssets` does not apply (these are V2). Share price is the NAV test.

## Keep

| Grok | Verdict |
|---|---|
| Morpho curator, first vault fall 2025 | **FACT.** Keyrock USDC `0x04422053aDDbc9bB2759b248B574e3FCA76Bc145` created 2025-10-03. Public forum note is later in October. |
| Chaos Labs listed Keyrock Morpho USDC at about $36K on 23 Mar 2026 | **FACT** as an exposure tally in [the Chaos post](https://chaoslabs.xyz/posts/defi-s-contagion-loop-when-risk-curators-become-the-risk). Not a P&L. |
| Rekt names Keyrock USDC on the vault list | **FACT** as a name on a list. No Keyrock dollar loss in that piece. |
| No Keyrock X post on Resolv that week | **FACT** for the tweet Grok cited. `@keyrock` 2036099880981049631 (23 Mar 2026 15:16 UTC) is a webinar ad. |
| April 2026 cap-to-zero exists | **FACT** for at least one market. VTrace 2045639631987786064 (18 Apr 2026) logs Keyrock USDC cap set to 0 on USDC/wstETH. That market is not Resolv. |
| No Euler curator book | **FACT** as far as this pass searched. |
| Oct 2025 "zero bad debt" forum note is not an incident | **FACT.** Leave it off the tab. |

## Wrong

| Grok | Label | Fix |
|---|---|---|
| File Resolv as a Low event | **Wrong class** | Weekly share price on Keyrock USDC rose through 19 Mar (1.032) and 26 Mar (1.034) and has only risen since (about 1.058 on 2026-09-24). No haircut printed. Chaos $36K is an exposure tally. No Keyrock cap, pause, or realloc post tied to Resolv was found. Non-exposure is not the point. A row still needs a documented defensive action or a real loss. This has neither. **Not on Events.** |
| Severity Low | **Do not keep** | Low is only for Class=`affected`. Depositors did not take a sourced loss on this vault. |
| `usd_lost: unknown` inside an event row | Drop the row | Unknown stays the right number if someone later proves a loss. It is not a reason to keep a Low row. |
| Launch date 2025-10-08 | Close | On-chain creation is 2025-10-03. Forum copy can stay 8 Oct. |

## Missing

Arc (chain 5042) Keyrock Prime USDC `0x5bEfAb92a5A3D60F578Cb51EEb4e4FD50a1e3123` is about $75.0M, listed, share price about 1.00001 (series min 0.9999998, max 1.00001, 46 points). That is Grok's "$75M Prime" as live TVL, not a loss. Morpho curator AUM is about $83.2M, which is this vault plus the Ethereum books (USDC about $7.96M, Prime USDT about $202k, RLUSD about $736).

## Not an event

- Resolv exposure tally of about $36K with a rising share price and no curator note.
- 18 Apr 2026 wstETH cap-to-zero. Ops on a blue-chip market, no sourced loss, not labeled as Resolv by Keyrock.
- Prime USDC on Arc sitting at par.
