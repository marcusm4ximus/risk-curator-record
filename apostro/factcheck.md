---
cursor:
  subagentId: "bc-878ecf91-2bd1-546c-8e38-7b2577f4e1f6"
---

# Apostro - Grok vs reality

**As of:** 2026-09-25
**Grok paste:** Desktop `apostro/twitter-grok.md` (ingested to the store). Two INCIDENT blocks: Sonic lock 2025-11-04, Resolv lock 2026-03-22.
**Labels:** FACT / CLAIM / RUMOR. Do not paste exposure tallies or curator lock figures into `usd_lost`.

## Verdict

Both rows stay. Class is `affected` on each (locked funds in impaired collateral, not a $0 exit). Severity stays **Med** for this curator, not the Stream or Resolv headline. `usd_lost` stays **unknown**. Grok’s dollar lines are lock or exposure snapshots, not a vault P&L.

## 1) Keep

| Grok | Verdict |
|---|---|
| Identity: Morpho/Euler/Silo curator `@apostroxyz`, site apostro.xyz, TG t.me/apostroxyz | **FACT** (X profile bio) |
| 2025-11-04 Silo Sonic “Apostro USDC” only; indirect via wstkscUSD; not a direct xUSD whitelist | **FACT** that Apostro said this. Tweet `1985831893506326801` matches Grok’s summary |
| Risk team cut that market from about $2M to $0.377M “temporarily locked”; free liquidity pulled the day before Stream’s announcement | **CLAIM** (Apostro). Not an audited P&L. Do not put 0.377M in `usd_lost` |
| Other Apostro vaults “100% unaffected”; impact smaller than most products in the event | **CLAIM** (Apostro) |
| 2025-11-05 reply: “remaining liquidity” meant unborrowed funds they could reallocate | **FACT**. Reply `1986173759590449270` is `replying_to` halaprix and says that |
| 2026-03-23 Resolv note: early ID, deposits blocked, donation vectors closed, $135.8k locked, six named lines | **FACT** that Apostro posted it (`2036168120499577009`, 23 Mar 2026 19:48 UTC). The six amounts are a lock table, not realized loss |
| Chaos Labs 23 Mar tally includes “Apostro Resolv Morpho USDC (Base + Mainnet): ~$20K” | **FACT** that Chaos published that exposure line. It is not Apostro P&L |
| No other Apostro exploit or oracle-break found through 2026-09-25 | **FACT** on this pass |

## 2) Wrong or too clean

| Grok | Label | Fix |
|---|---|---|
| Sonic and Resolv `severity: Med` with no Class | Incomplete | Class `affected`. Severity stays Med. Not High: the curator’s own lock tables are one Silo vault and a six-figure Resolv list, not the protocol loss. Not indirect-curator-fault: users did not exit at $0 |
| “Three of the nine vaults were not named” as if extra dollars sit off-list | Misleading | The six named lines are $20k + $14k + $73k + $11k + $10k + $7.8k = $135.8k. They already equal the headline. The word “nine” is Apostro’s. It is not a third sourced balance |
| Chaos ~$20k vs Apostro $20k Eth + $14k Base | Both are snapshots | Chaos is Base+Mainnet combined at 1pm EST 23 Mar. Apostro’s post the same evening splits $20k and $14k. Do not reconcile them into one loss number |
| `usd_lost: unknown` | Keep | Correct. $93M is Stream. ~$23-25M is Resolv’s extract. $135.8k and $0.377M are lock claims |
| Resolv `status: disputed` | Narrow | The allocator-push story is disputed. The lock and later bad-debt flags are not. Merged status **unresolved** |
| `funds_recovered: unknown` | Enum | No recovery close-out was found. Merged uses `none` for “no published recovery,” not a proof that zero will ever return |

## 3) Unverified

- @CarrotSticks18 (10 Dec 2025) and a 2 Aug 2026 update ask. Grok cites the Sonic thread. This pass opened Apostro’s two posts, not those replies.
- “Euler deprecated” a Resolv-exposed Apostro vault. Not re-opened on the Euler UI this pass.
- Email hello@apostro.xyz. Not on the X bio. X and TG are.
- Docs “last updated 3 years ago” (2023). The live `docs.apostro.xyz` root fetched here is a metric glossary with no visible date and no post-Resolv policy.

## 4) Missing (added in merged)

- dTrinity / Trevee post-mortem: wstkscUSD redemptions were paused because scUSD sat in MEV-curated Euler vaults lending against Stream. That is why the Sonic lock is impaired collateral, not a healthy illiquid market. dUSD’s Curve print is a different token. Do not copy it onto Apostro.
- Silo’s Stream note does not name Apostro. It does say xUSD/xBTC redemptions were permissioned and liquidations could not clear while redemptions were shut.
- Ethereum Apostro Resolv USDC `0x214B47C5…d77D78`, Trading Strategy refresh 2026-09-25: Morpho flags include `bad_debt_realized` and `bad_debt_unrealized`, deposits capped (`maxDeposit=0`), redemptions marked open, share price about 33.48 USDC, TVL about $748k vs peak about $20.2M, reported max drawdown 0.0%, displayed return above 9,999%. The share-price spike and the drawdown field are bad-debt interest artifacts. Do not read them as profit or as “no loss,” and do not paste $748k or $20.2M into `usd_lost`.
- Base Apostro Resolv USDC `0xcdDCDd18…B9e8f3` (Morpho app): deprecated, deposits disabled, liquidity $0, warning that a misconfigured oracle can leave bad debt for lenders. Displayed deposits and a six-figure APY are the same accounting distortion. Not a loss figure.
- vaults.fyi on the Ethereum vault, stamped 23 Mar 2026: about 20.23k USDC. Matches Apostro’s Ethereum line that day. Exposure snapshot only.

## 5) What to add or change

- Keep IDs `APOSTRO-20251104-SONICLOCK` and `APOSTRO-20260322-RESOLVLOCK`. Titles `Sonic lock` and `Resolv lock` shortened to `Sonic` and `Resolv` in merged (1-2 words).
- Type stays `collateral` (they listed wstkscUSD, then USR/Resolv markets). The Resolv oracle mispricing goes in the prose. A pause or cap in response does not make Type `ops`.
- Class `affected`, severity Med, `usd_lost: unknown`, `pct_of_that_vault_tvl: unknown`.
- Events count: `0H 2M 0L 0D 0I 0A`.
- Allegations: none. No own-token loop or related-party credit was sourced.
