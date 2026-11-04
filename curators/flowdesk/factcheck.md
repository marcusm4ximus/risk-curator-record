---
cursor:
  subagentId: "bc-fb666fb3-0441-5da8-bd93-652a62976384"
---

# Flowdesk: Grok vs reality

**As of:** 2026-09-25
**Grok paste:** present. No `INCIDENT` blocks. Conclusion was no material incident.
**Checked:** Morpho GraphQL share-price history on the AUSD RWA vault and the confidential USDT vault, plus DefiLlama and Morpho AUM.

## Keep

| Grok | Verdict |
|---|---|
| Morpho curator from March 2026, no Euler book | **FACT.** AUSD RWA vault created 2026-03-16. Morpho id `flowdesk`. |
| AUSD RWA `0x32401B9fb79065Bc15949DE0BD43927492f02F0C` | **FACT.** Listed. Share price series from 1.000 on 2026-03-17 to about 1.033 on 2026-09-25. Minimum is the first print. |
| TVL peak then outflow | **FACT.** Weekly max about $23.5M on 2026-05-20. About $4.98M on 2026-09-25 on this vault. DefiLlama curator TVL about $14.2M, matching Morpho AUM, because the confidential vault is separate. |
| 0% max drawdown / no bad debt on the sUSDat market | **FACT** for vault share price (it never printed below 1). Market-level realized bad debt was not re-read. |
| Resolv, Stream, DIA, PT-reUSD do not name Flowdesk | **FACT** as Grok's search. Flowdesk was not on the Chaos Labs 23 Mar exposure list used this pass. |
| Saturn / sUSDat researcher note is not a Flowdesk loss | **CLAIM** about Saturn admin, per Grok. No Flowdesk haircut in the share-price series. |
| Risk docs stale after launch parameters | **FACT** as the public trail Grok described. Launch post was not re-fetched line by line. |
| Zama confidential wrapper 2026-09-15, no incident | **FACT** that the vault exists. `0xb48C056C5608bA2Ee4cD94AF2bF4b1F25295Bd7e`, about $9.21M, share price about 1.001, listed. |

## Wrong

| Grok | Label | Fix |
|---|---|---|
| DeFiLlama curator TVL "~$14m" vs one tracker "~$5.3m" treated as one book | Clarify | Both can be true. AUSD RWA is about $5.0M. Confidential USDT is about $9.2M. Sum is the about $14.2M curator AUM. |

## Missing

Confidential High Yield USDT is the larger live vault and was only a URL in the paste. Its share price is above 1. Still not an incident.

## Not an event

Mandate drift from SPYx toward sUSDat / PT-USDat. Concentration, not a dated loss. TVL decline with a rising share price is outflow.
