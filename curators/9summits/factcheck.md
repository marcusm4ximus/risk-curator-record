---
cursor:
  subagentId: "bc-fb666fb3-0441-5da8-bd93-652a62976384"
---

# 9Summits: Grok vs reality

**As of:** 2026-09-25
**Grok paste:** six INCIDENT blocks (Kelp Aave exit, Kelp liquidate, BNKR cap, YieldETH, YieldBTC, fxUSD sunset). No Resolv block.
**Checked:** tweet bodies via fxtwitter, Tulipa quote, Morpho share prices, Ethereum `lostAssets` on 9Summits USDC, Base `lostAssets` on WETH 1.1, Chaos Labs and OAK/Rekt on Resolv.

## Keep

| Grok | Verdict |
|---|---|
| 18 Apr 2026 Kelp/Aave post: withdrew Aave across Lagoon vaults, no Kelp in those vaults, funds safe | **FACT** as the tweet. [2045621279324311971](https://x.com/nine_summits/status/2045621279324311971) 21:51 UTC. |
| 18 May 2026: Base WETH 1.0 and 1.1 bad-debt free after manual Kelp liquidation | **FACT** as the tweets. [2056457641241546766](https://x.com/nine_summits/status/2056457641241546766) and [2056460027653669179](https://x.com/nine_summits/status/2056460027653669179). Vaults are Base `0xF540D790…cb78` (WETH Core) and `0x5496b42a…f667` (WETH Core 1.1). WETH 1.1 `lostAssets` is 0. |
| 19 May 2026 BNKR cap to 0 and full deallocation, depositors safe | **FACT** as [2056814422555795955](https://x.com/nine_summits/status/2056814422555795955). Bankr had posted an investigation note the same day. fxUSD vault share price did not fall (about 1.001 on 21 May, about 1.007 now). |
| 30 Jun 2026 Flagship ETH: net -8.35 ETH, PPS -0.0043188 (-0.43%), 10.9 ETH fee rebate | **FACT** as [2071981485700284522](https://x.com/nine_summits/status/2071981485700284522). No USD in the post. |
| 8 Jul 2026 cbBTC: Tulipa note, 2.288 cbBTC loan, LPs see zero PPS reduction | **FACT** as Tulipa [2074959086433751217](https://x.com/tulipacapital/status/2074959086433751217), quoted by 9Summits. The 1.56% is a counterfactual, not a printed PPS cut. |
| 14 Jul 2026 fxUSD sunset, no loss alleged | **FACT** as the sunset tweet. Share price series min is 1.00 at creation and about 1.007 now. TVL fell from about $1.58M (19 Mar) to about $33k. |
| Risk docs none / Morpho disclosure missing | **FACT** as Grok stated. Not re-scraped. USDC vault is unlisted and deposits are disabled, which matches a wound-down V1 book. |

## Wrong

| Grok | Label | Fix |
|---|---|---|
| Kelp Aave exit typed `ops`, severity Low | **On the tab** | They withdrew 100% of Aave positions across Lagoon vaults after likely Kelp bad debt on Aave V3 WETH. That is exposure they had, then closed. Type=`collateral`. No depositor loss was published. Class=`non-materially-affected`, severity **indirect-curator-fault**. `usd_lost` stays unknown. Do not write 0. |
| Kelp liquidate typed `ops`, severity Low | **Remap** | They had listed Kelp markets and then liquidated them. Type=`collateral`. No depositor loss was corroborated (`lostAssets` 0 on WETH 1.1). Severity **indirect-curator-fault**, not Low. `usd_lost` stays unknown. Do not write 0. |
| BNKR severity Low | **Remap** | Same pattern. Type stays `collateral`. Class=`non-materially-affected`, severity **indirect-curator-fault**. fxUSD share price only rose. |
| YieldETH severity Med, `pct_of_that_vault_tvl: 0.43` | **Remap** | Depositors did take a published NAV hit, so Class=`affected`. -0.43% PPS is **Low**, not Med. 0.43 is the curator's PPS change, not a percent of vault TVL. `pct` stays unknown. `usd_lost` stays unknown (ETH, not USD). |
| YieldBTC severity Med, `funds_recovered: full` | **Remap** | Tulipa says LPs see zero PPS reduction. The 1.56% did not print. Class=`non-materially-affected`, severity **indirect-curator-fault**, type=`collateral`. `funds_recovered: n/a`. The vault owes the 2.288 cbBTC loan (2.334 cbBTC with 2% over one year). That is not a haircut. |
| fxUSD sunset as Low `ops` | **Off the tab** | Issuer-style wind-down. Share price did not fall. No loss alleged. |
| No Resolv row | **MISSING** | 9Summits USDC `0x1E2aAaDc…5741` `lostAssets` is 41,035.97 USDC today, out of `totalAssets` 54,317.48 USDC. OAK and Rekt call that residual bad debt about $41,000 after a donation attack on wstUSR/USDC, and say 9Summits intervened at 03:00 UTC then still saw 32 transactions at 12:33 UTC. Chaos Labs' 23 Mar tally lists the same about $41K as exposure. Weekly share price rose (V1.1 does not cut share price for `lostAssets`): 1.0668 on 19 Mar with TVL about $403k, 1.0694 on 26 Mar with TVL about $58k. Class=`affected`, severity **Med**. This is the loss Grok did not file. |

## Not an event

Flint USD EUR/USD move, Morpho "no disclosure" widget, Summer.fi objection to Lagoon async settlement. Grok was right to leave those off.
