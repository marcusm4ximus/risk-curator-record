---
cursor:
  subagentId: "bc-fb666fb3-0441-5da8-bd93-652a62976384"
---

# Pangolings: Grok vs reality

**As of:** 2026-09-25
**Grok paste:** present. No `INCIDENT` blocks. Public brand is Pangolins. Slug stays `pangolings`.
**Scope:** this curator's Morpho vaults, plus the Lista/Euler USDT book Grok named. That USDT contract was re-read on Trading Strategy. The BNB contract was not share-priced on its own.

## Keep

| Grok | Verdict |
|---|---|
| Name is Pangolins, not the Avalanche DEX | **FACT.** Morpho curator id `pangolins`. |
| Base USDC `0x1401d1271C47648AC70cBcdfA3776D4A87CE006B` is the live book | **FACT.** Morpho 2026-09-25: about $12.42M, share price about 1.036, listed, no warnings. Created 2025-11-13 (`creationTimestamp` 1763007033). `lostAssets` call returned 0. |
| Ethereum USDT `0xd73270593E2542e5A43b8c7FBE4F2d5c9c4A443c` is small | **FACT.** About $658, share price about 1.028, unlisted. `lostAssets` 0. |
| DefiLlama and vaults.fyi disagree on a snapshot | **FACT** as a method note. This pass: Morpho AUM about $12.42M, DefiLlama Base about $12.42M plus Binance about $1.63M. |
| No Morpho exploit, oracle break, or haircut writeup | **FACT** for the Morpho books. Share prices are above 1 and Base `lostAssets` is 0. |
| Lista Nov 2025 USDX episode named MEV Capital and Re7, not Pangolins | **FACT.** Lista DAO's 6 Nov 2025 posts name the MEV Capital USDT vault and the Re7 USD1 vault. Pangolins is not named. |
| Risk docs are principles only | **FACT** as the public surface Grok described. Data Mode "not live" was not re-opened. |
| Lista USDT TVL collapse with 0% drawdown is not a loss | **FACT on the share price, not a loss.** Trading Strategy, refreshed 2026-09-25, last share price 1.041 USDT on 2026-09-21, lifetime max drawdown 0.0%, TVL about $1.73M, peak about $87.3M, protocol Euler, curator Pangolins, address `0xEB4F6FFB1038E1cCa701e7d53083B37ec5B6Ba33`. The "likely abandoned" line is the TVL flag. No Events row. |

## Wrong

| Grok | Label | Fix |
|---|---|---|
| Base USDC "created / series starts 2025-11-14" | Off by a day | GraphQL creation is 2025-11-13. |
| "likely abandoned" Lista vault | **CLAIM** | Leave it as a comms note. Do not file an incident. |

## Missing

DefiLlama's Binance line was about $1.63M on the prior pass. Trading Strategy's later USDT print is about $1.73M. Either way it is the Lista/Euler residual, not a second Morpho loss, and not a haircut.

## Not an event

Base TVL is the Morpho book. Ethereum USDT is dust. No share-price break on either Morpho vault. No sourced Lista incident. The BNB vault `0xcb995fb56ec7fc42e0c9a075dfa3a0b56de72484` was not given its own share-price read. Nothing in the USDX coverage names it.
