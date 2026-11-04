---
cursor:
  subagentId: "bc-f66d08a7-945d-5476-8d2e-814f1d93aba1"
---

# Valamore - Grok vs reality

**As of:** 2026-09-26
**Grok paste:** Desktop `valamore/twitter-grok.md`. Three INCIDENT blocks. The live curator is Varlamore Capital. Prefix stays `VALAMORE`. Do not invent USD or %.

## Verdict

One affected row, one indirect row, one direct row. The Stability cut has no published Varlamore write-down, so it is not Low. Stream has no Varlamore ledger dollar, so the $14M and $19M lines stay claims. The July 2026 dollar is Lazy Summer's loss, not Varlamore vault P&L. Events: `1H 0M 0L 1D 1I 0A`.

## 1) Tweet text that stands

| Grok | Verdict |
|---|---|
| 5 Aug 2025: Stability said metavaults were hit by a Credix exploit, not a Stability contract bug, and that Credix said funds were recoverable | **FACT** as https://x.com/stabilitydao/status/1952823589771854072 |
| 6 Aug 2025: Varlamore cut Silo Sonic vgUSDC allocation to wmetaUSD to 0% and vS allocation to wmetaS to under 1%, and said the situation was under control | **FACT** as https://x.com/VarlamoreCap/status/1952933617921081494. No dollar loss in that post |
| 4 Nov 2025: Varlamore USD Growth vaults had xUSD exposure. xUSD markets were removed from supply queues and caps set to zero. Users told not to deposit | **FACT** as https://x.com/VarlamoreCap/status/1985720425759064489 |
| 6 Nov 2025: Varlamore pointed users at Silo's LP restoration form | **FACT** as https://x.com/VarlamoreCap/status/1986290754688541003 |
| Silo transparency report: xUSD and xBTC oracles still used Stream's pre-loss vault exchange rate, redemptions were closed, and liquidations could not clear | **FACT** as the 4 to 6 Nov 2025 Medium report. The page text does not print a Varlamore dollar. Grok's "over $19 million across five xUSD vaults" is not in the text opened here |
| 20 Nov 2025: Silo said about $1.49M USDC repaid into the Arbitrum xUSD/USDC market let many users withdraw, primarily through the Varlamore vault | **FACT** as https://x.com/SiloFinance/status/1991469688501727412. That is returned liquidity, not a full P&L |
| 6 Jul 2026: Lazy Summer lost about $5.64M and about $0.40M of its own USDC after an attacker donated Silo "Varlamore USDC Growth" tokens that still reported a pre-Stream value | **FACT** for Lazy Summer, as https://blog.summer.fi/lazy-summer-usdc-vault-exploit-post-mortem-what-happened-and-what-comes-next/. Not a Varlamore depositor P&L |

## 2) Wrong or remapped

| Grok | Verdict |
|---|---|
| Stability severity Low, `usd_lost` unknown | **Remap.** They held Stability wrappers and cut them. No write-down was published. Class `non-materially-affected`. Severity `indirect-curator-fault`. Type `collateral`. Low would mean Varlamore depositors lost money |
| Stream severity High, `usd_lost` unknown | **Keep.** Affected, High, because the curator told users not to deposit and Silo later described withdrawals coming back only in part. Do not book the DRIP about $14M or Protos' "over $19 million" |
| Stale shares severity Med, `usd_lost` unknown | **Remap.** The about $6.04M is Lazy Summer. Class `non-materially-affected`. Severity `direct-curator-fault`. Type `other`. The uncorrected Growth-vault rate is the Varlamore-side fact. Status stays disputed |
| Lesson that they launched Avalanche vgAUSD / vgUSDT and marketed savUSD and xUSD on 14 to 18 Aug 2025 | **Not re-opened.** No such post was retrieved. The verified later fact is the 4 Nov post that USD Growth vaults were in xUSD |
| `@sumatrone` status id ending in many zeros | **Do not cite.** Grok marked it as not re-verified. It was not fetched |

## 3) What this pass adds

- Homepage https://varlamore.capital/ names a "Varlamore Risk Framework" and does not link a PDF or a dated policy page. Risk docs stay none.
- vaults.fyi still flags Varlamore USDC Growth as possibly hit by Stream xUSD and prints a very large APY on about $1.22M. That APY is not a loss figure and was not booked.
- X account joined 10 Mar 2025. No Varlamore Morpho vault was part of this check. Grok's "no Morpho book" was not contradicted.

## 4) What to add or change

- `VALAMORE-20250806-STABILITY`: non-materially-affected, indirect-curator-fault, collateral, resolved, `usd_lost` unknown.
- `VALAMORE-20251104-STREAM`: affected, High, collateral, unresolved, `usd_lost` unknown, funds recovered partial.
- `VALAMORE-20260706-STALESHARES`: non-materially-affected, direct-curator-fault, other, disputed, `usd_lost` unknown.
- Allegations: none. The "Varlamore is Silo" line was not re-opened and is not a standing-conflict flag.
