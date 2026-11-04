---
cursor:
  subagentId: "bc-fb666fb3-0441-5da8-bd93-652a62976384"
---

# August Digital: Grok vs reality

**As of:** 2026-09-25
**Grok paste:** one INCIDENT, `AUGUSTDIGITAL-20260322-RESOLV`, severity Med, type collateral, `usd_lost: unknown`.
**Checked:** Morpho weekly share price and TVL, Ethereum `totalAssets` / `lostAssets`, Chaos Labs' 23 Mar exposure list, Upshift's 22 Mar post, `@defidada16` on 11 May.

## Keep

| Grok | Verdict |
|---|---|
| Morpho curator from July 2025, no Euler book found | **FACT.** August USDC V1-style vault in Grok's note. Live curator id `august-digital`, AUM about $8.12M. |
| Chaos Labs listed August AUSD V2 at about $316K on 23 Mar 2026 | **FACT** as an exposure tally. Same post lists Upshift earnAUSD at about $316K. Upshift's own post that day says earnAUSD had about $315K of RLP (0.63% of about $50M) and paused. Do not merge those two lines into one August P&L. |
| $316K is not a stated bad-debt number | **FACT.** Leave it out of `usd_lost`. |
| No August Morpho post with a realized loss, cap tx, or make-whole | **FACT.** None found this pass either. |
| Trading Strategy lifetime drawdown about -9.1% and share price about 0.978 | **Directionally FACT** for AUSD V2, wrong month. See below. |
| `@defidada16` claim of about $600k unpaid after USR | **CLAIM.** Tweet 2053983968014299558 (11 May 2026). Not a vault accounting. |
| August USDC dust / migration is not a loss | **FACT** for Ethereum August USDC V2 `0x7ceB0f01…2350`: share-price min is 1, now about 1.048, about $288k. |

## Wrong

| Grok | Label | Fix |
|---|---|---|
| Date the NAV break as 2026-03-22 Resolv | **WRONG** | AUSD V2 weekly share price was about 1.010 on 19 Mar and about 1.011 on 26 Mar, TVL still about $11.6M to $13.7M. It peaked about 1.066 on 4 Jun 2026 with TVL about $8.04M, then printed 0.97761 on 11 Jun with TVL about $4.27M. The March Resolv week did not move NAV. |
| One Med row for Resolv | **Split** | Two later, separate on-chain facts. V1 `0x9B7cca32…b302` and V2 `0xE7F8Fb5C…8Da5` are different contracts. |
| Severity Med on the March exposure | **Keep a Resolv row, on V1, as High** | August AUSD V1 listed RLP. Cap set to 0 on 2026-03-22. The supply position is still about $7.74M. Market unrealized bad debt is about $7.30M. Remaining deposits are entirely `lostAssets`. Chaos's about $316K is V2 exposure, not this `usd_lost`. |
| `status: disputed` on March | **unresolved** | The residual is still on the vault. |
| `funds_recovered: unknown` | **none** | No make-whole was found. |

## What replaces it

1. **Resolv / RLP on V1 AUSD, 22 Mar 2026.** Market `0x4b86442549b52826e0fc11770ec5154450cb3c5c14dc751a761d81dcfbe7a7b2`, collateral Resolv Liquidity Provider Token, loan AUSD, 86% LLTV. Cap set 2025-12-17, set to 0 on 2026-03-22 (`0x683238119f8b3f5c781f16562b519610ffea101bb4dd9626eee292675ad73a9d`). `marketPosition` supply is about 7,746,328 AUSD (about $7.74M). Market unrealized `badDebt` about $7.30M, collateral mark about $29.9k, `realizedBadDebt` $0, liquidity $0. eth_call 2026-09-25: `totalAssets` 674,379.425436 AUSD, `lostAssets` 674,379.425432 AUSD. Morpho deposit mark about $674,132. Liquidity near $0. Deposits disabled. Share price frozen at 1.066009. Weekly TVL was about $8.04M on 21 May and about $674k from 28 May. The queue no longer shows the RLP sleeve. wsrUSD on the queue is Wrapped Savings rUSD, dust, not Resolv. Class=`affected`, severity **High**. `usd_lost` is 674132, the Morpho USD mark of the residual that equals `lostAssets`. Do not paste $7.30M, $7.74M, $8.04M, Chaos's about $316K, or `@defidada16`'s about $600K. The old `AUGUSTDIGITAL-20260528-AUSDDEBT` id was this same residual with the collateral unnamed. It is not a second row.

2. **V2 AUSD share break between the 4 Jun and 11 Jun weekly prints.** Share price 1.066207 to 0.977610 while TVL went from about $8.04M to about $4.27M, then to about $69 by 25 Jun, and about $18 now. Price is still about 0.978. That is a realized vault-share loss in AUSD terms, not an AUSD/USD quote. `usd_lost` stays **unknown**. Do not multiply the share move by TVL. Class=`affected`, severity **Med**. Cause not in a curator post. This is not the March V2 share path, which rose. Current V2 allocation checked here is upGAMMAusdc, not RLP.

## Not an event

Chaos's about $316K on AUSD V2 and Upshift's about $315K RLP line. Monad August USDC V2 is about $7.83M at share about 1.030. No break found on the Ethereum USDC V2 series.
