---
cursor:
  subagentId: "bc-fb666fb3-0441-5da8-bd93-652a62976384"
---

# Waterline: Grok vs reality

**As of:** 2026-09-25
**Grok paste:** present. No `INCIDENT` blocks. Standing checks say no material incident. This pass checked Morpho GraphQL, on-chain `lostAssets` on the two V1 vaults, and DefiLlama.

**Scope:** Morpho curator. Do not invent USD or %.

## Keep

| Grok | Verdict |
|---|---|
| Morpho curator, no Euler book found | **FACT.** Morpho curator id is `eco-vaults-shf`, display name **Waterline**. No Euler curator id turned up in this pass. |
| DefiLlama about $24M | **FACT** as a snapshot. DefiLlama Ethereum TVL about $24.03M. Morpho curator `aum` about $24.02M on 2026-09-25. |
| Named vault addresses (Reservoir V1/V2, rUSD, InfiniFi V1/V2, M1, Tenbin) | **FACT.** All seven resolved on Morpho. Live share prices are above 1. |
| Reservoir V1 deployed 2025-11-04 | **FACT** as the creation day. GraphQL `creationTimestamp` 1762248467 is 2025-11-04. |
| No sourced loss, pause-with-haircut, oracle break, Stream, or Resolv row | **FACT** for the books checked. V1 Reservoir and V1 InfiniFi `lostAssets` are 0. V2 share-price series only rise. |
| No public risk framework, no Waterline X/TG | **FACT** as a disclosure gap, not an event. |
| Steakhouse white-label link is a claim, not a legal identity | **Soft.** Morpho itself files this curator as id `eco-vaults-shf` with name Waterline. That is stronger than the intern tweet. It is still not a corporate filing. Not an Events row. |

## Wrong

| Grok | Label | Fix |
|---|---|---|
| Nothing dated to delete | n/a | Empty blotter stands. |

## Missing

Morpho registry id `eco-vaults-shf` (Steakhouse-style slug) while the UI name is Waterline. Add that as identity context, not as Class=`allegation`.

## Not an event

TVL on Reservoir V2 peaked near $106M (week of 2026-04-16) and was about $13.1M on 2026-09-25. Share price rose from 1 to about 1.026 over that span. Outflow is not a haircut. Reservoir V1 has deposits disabled and `lostAssets` 0.
