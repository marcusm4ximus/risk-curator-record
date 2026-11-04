---
cursor:
  subagentId: "bc-188dff79-156e-5c97-84f1-5d8f5b4b135d"
---

# AlphaPing: Grok vs reality

**As of:** 2026-09-25
**Grok paste:** four INCIDENT blocks (msY, AVLT, AZND, delisting). All three collateral rows are severity High with `usd_lost: unknown`. Delisting is Med with `usd_lost: n/a`.
**Checked:** Morpho GraphQL vault history and market state, AlphaPing and MainStreet posts, Mu Digital wind-down post, Morpho listing policy, alphaping.ch, Trading Strategy's copy of the 28 Aug 2026 post, DefiLlama curator TVL, Webacy (3 Jul and 9 Jul 2026 on-chain receipts), Remedy, Protos, Crypto Briefing.

Headline `$18M`, `$23M`, `$8.3M`, `$10M`, the msY supply mark near `$141M`, and the AVLT unrealized mark near `$5.88M` are exposure, market state, or commentary. None is a sourced haircut of AlphaPing vault P&L. `usd_lost` stays **unknown** on every row. Do not write 0.

## Keep

| Grok | Verdict |
|---|---|
| Swiss Morpho curator, X `@0xAlphaping`, site alphaping.ch. Forum intro 27 Feb 2025. | **FACT.** [Forum intro](https://forum.morpho.org/t/introducing-alphaping/1560) names Alphaping GmbH. No Euler curator book was found this pass. |
| Alpha USDC Delta V2 launched 14 Apr 2026 and lent USDC against msY. | **FACT.** Vault `0x0bF0164D17469241B6E086dA4016DCc54FEAA334` creation timestamp is 2026-04-14. Collateral book is msY. |
| 20 Jun 2026: Accountable ended verification, msY/msUSD depegged, oracle expected to pause, msY/USDC hit 100% utilization. | **FACT** as the issuer and Webacy reads. MainStreet post [2068432169140400252](https://x.com/Main_St_Finance/status/2068432169140400252). Oracle `MSY_FUNDAMENTAL/USD` last accepted update 20 Jun 2026 11:49 UTC at $1.06396777, then stale. |
| AlphaPing 21 Jun and 22 Jun: one vault had MainStreet exposure, other vaults isolated, no identified asset losses yet. | **FACT.** [2068533411032256557](https://x.com/0xAlphaping/status/2068533411032256557), [2069128171480572390](https://x.com/0xAlphaping/status/2069128171480572390). |
| 26 Jun monitoring post covers AZND unwind, AVLT liquidity, and the MSY oracle. | **FACT.** [2070346371476127989](https://x.com/0xAlphaping/status/2070346371476127989). |
| MainStreet: book value at expiry stays at or above 100%, Morpho lenders should get principal back, excess utilization interest is sacrificed. | **FACT** as the 3 Jul 2026 issuer post [2073081791792218222](https://x.com/Main_St_Finance/status/2073081791792218222). It is a plan, not a completed payment. |
| Webacy: realized Morpho `badDebt` was $0 while utilization stayed 100%. | **FACT** for the 3 Jul and 9 Jul snapshots in that piece. Still true on 2026-09-25: both msY/USDC markets show `badDebt` $0 and `realizedBadDebt` $0. |
| AVLT was listed, including HyperEVM Alpha USDT Prime at 91.5% LLTV. AlphaPing said on 24 Jul that Altura was fully repaid on mainnet and HyperEVM was still pending. | **FACT** as the posts and the live HyperEVM cap. Vault `0x242572d6f1AF7111bcA807ECDd0f74108cEAeD5d`, created 2026-04-27. Tweet [2080728412499448076](https://x.com/0xAlphaping/status/2080728412499448076). |
| AZND: Asia V2, Mu Digital wind-down 10 Jul 2026, shares burned, snapshot claims, fake-claim warning. | **FACT.** Asia V2 `0x35Cbe8542E70fa2f7F9cDF129F19e593F4b4f560` created 2026-03-19. Mu Digital [2075417387625832880](https://x.com/MuDigitalHQ/status/2075417387625832880). AlphaPing [2083487144538992856](https://x.com/0xAlphaping/status/2083487144538992856). |
| 28 Aug post covers MainStreet contract upgrades, a Morpho delisting note, and Mu Digital claims. | **FACT.** [2093207470760141288](https://x.com/0xAlphaping/status/2093207470760141288). fxtwitter truncates it. Trading Strategy preserves the full text, including "Morpho Delisting" and "the majority of affected users have already claimed their USDC." |
| Delisting is a Morpho UI decision. Contracts stay on-chain. | **FACT.** [Listing policy](https://docs.morpho.org/get-started/resources/interface-listing-policy/). No Morpho Association memo with a timestamp was found. |
| Type collateral for msY, AVLT, and AZND. Type social for the delisting. | **Collateral stays** on the three asset rows. Delisting is **ops** (front-end curator recognition), not a fourth collateral loss. |

## Wrong

| Grok | Label | Fix |
|---|---|---|
| Severity High on msY, AVLT, and AZND, and Med on the delisting | **Remap, not all indirect** | msY and AVLT are **affected High**: suppliers are trapped and the books are economically impaired. AZND is **affected Med** and unresolved: par was not guaranteed and the payout rate is still unread. Delisting is **direct-curator-fault** (front-end removal, no separate haircut). `usd_lost` stays unknown on every row. |
| `$18M` AlphaPing loss / trapped funds as if it were the haircut | **Exposure, not P&L** | Delta V2 weekly TVL was about $65.1M on 19 Jun, about $50.4M on 20 Jun, and about $17.73M from early July through 30 Jul, while the share price rose to 1.022348 and then froze. The drop is withdrawals down to a stuck residual. On 31 Jul TVL prints 0 and from 1 Aug the share price prints 0, matching the 1 Aug burn-for-claims post. Morpho's warning now says the vault is deprecated because of an impaired market. That residual is not `usd_lost`. |
| `~$23M` Morpho bad debt | **Commentary, contradicted on-chain** | Remedy's autopsy uses that phrase. Webacy's 3 Jul API read was supply about $22.7M with `badDebt` $0 and `realizedBadDebt` $0. On 2026-09-25 the 86% msY/USDC market supply mark is about $140.3M at 100% utilization, collateral mark about $18.0M, `badDebt` $0, `realizedBadDebt` $0, warnings `oracle_unusable` and `sustained_low_liquidity`. The balloon is accrued interest on a frozen oracle. It is not a realized AlphaPing haircut. |
| AVLT `$10M` exposure, status resolved, funds full, High | **Exposure is not `usd_lost`. Class is still affected** | HyperEVM Alpha USDT Prime TVL was about $10.39M on 19 Jun and is about $576,934 on 2026-09-25 (share 1.058588). Liquidity is $0. The AVLT/USD₮0 market shows about $6.67M of debt, collateral about $108k, unrealized `badDebt` about $5.88M, `realizedBadDebt` $0. Suppliers are trapped. Do not paste $5.88M or $10M as `usd_lost`. Ethereum AVLT/USDC still has about $89k of supply and about $67k unrealized bad debt, and Morpho lists no supplying vault on it. |
| AZND `$8.3M` bad debt and `$10M` TVL as loss | **Claim and a TVL peak. Class is still affected** | `$8.3M` stays a critic claim. Asia V2 share price rose to 1.027575 and froze from 26 Jun through 30 Jul. TVL was about $7.36M on 24 Jul, then 0 on 31 Jul. The May peak on this series was about $10.36M on 15 May. That is TVL, not a haircut. Mu Digital said redemption amounts are not guaranteed at par. No rate was published. The redemption URL fetched on 2026-09-25 redirected to a restriction page, so the rate was not read. Status stays unresolved. |
| `usd_lost: n/a` on the delisting | **Use unknown** | No P&L figure. `n/a` is not a sourced dollar. |
| Trading Strategy PT Frontier about $13k versus a $141k peak | **Stale** | The curator page fetched 2026-09-25 shows 0 vaults and $0 TVL in that aggregator. Morpho still has on-chain balances, including PT Frontier `0x6701957aaA39e9352a42729Cc65436a4C945cB90` at about $2,252, share about 1.041, `listed: false`. |
| Ethereum Prime `0x874E7Fb1…1939C` as the live AVLT vault | **Wrong book today** | That contract is AlphaPing USDC Prime, created 2025-11-08, about $3.72 in WBTC/USDC, share about 1.033, unlisted. The open AVLT cap is the HyperEVM USDT Prime vault. |

## What replaces the severities

1. **msY, 20 Jun 2026.** Class `affected`, severity **High**, status **unresolved**. DropsTab all-time low is $0.1754 on 22 Jun 2026. A later print on this pass was about $0.62, still under the frozen oracle at $1.06396777. On 2026-09-25 the 86% market shows about $141.0M supply and borrow, about $18.0M oracle collateral, liquidity $0, `badDebt` $0, `realizedBadDebt` $0, warnings `oracle_unusable` and `sustained_low_liquidity`. Borrowers who do not repay keep the USDC. MainStreet's $1 principal promise and AlphaPing's 28 Aug "planned" recovery are not a completed payment. `usd_lost` unknown. Do not paste $18M, $23M, or $141M.
2. **AVLT, 22 Jun 2026.** Class `affected`, severity **High**, status **unresolved**. HyperEVM Alpha USDT Prime liquidity is $0. Recognized assets about $576,934, share about 1.058588. The AVLT/USD₮0 market shows about $6.67M supply and borrow, collateral marked about $108k, `badDebt` about $5.88M, `realizedBadDebt` $0. Suppliers are trapped and the collateral mark does not cover the debt. `usd_lost` unknown. Do not paste $5.88M or $10M. AlphaPing's "mainnet repaid" line is not this HyperEVM book.
3. **AZND, 10 Jul 2026.** Class `affected`, severity **Med**, status **unresolved**. Mu Digital said redemptions are not guaranteed at par. AlphaPing said on 28 Aug that a majority had claimed USDC and that the portal was still open. The portal fetched 2026-09-25 did not return a rate. Funds recovered: partial, with the rate unknown. `usd_lost` unknown. Do not paste $8.3M or the $10.36M May TVL peak.
4. **Delisting, 28 Aug 2026.** Type `ops`. Class `non-materially-affected`, severity **direct-curator-fault**. AlphaPing announced the Morpho front-end delisting. Vaults read `listed: false` on 2026-09-25. No depositor haircut is attached to the UI removal. The money outcomes are the three collateral rows. `usd_lost` unknown. Do not write 0. Grok's Med does not survive the remap.

## Not an event

- November 2025 CORE withdrawal window on alphaping.ch: $217.5M processed, site says no realized vault-level bad debt. Operations note, not a loss row.
- The second msY/USDC market at 91.5% LLTV (`0xb317d11c…7e8d`). Webacy could not attribute who seeded it. Supply mark about $16.2M on 2026-09-25, realized bad debt $0. Not booked as AlphaPing P&L.
- `@0xVelocity88` jail language. Invective. Not evidence.
- DefiLlama curator TVL about $5.88M on 2026-09-25 (Ethereum about $5.31M, Hyperliquid about $577k). The Hyperliquid slice matches recognized Alpha USDT Prime assets. The 30-day TVL decline was not tied to a new share-price break.
