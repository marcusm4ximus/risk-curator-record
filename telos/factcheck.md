---
cursor:
  subagentId: "bc-f66d08a7-945d-5476-8d2e-814f1d93aba1"
---

# Telos - Grok vs reality

**As of:** 2026-09-26
**Grok paste:** Desktop `telos/twitter-grok.md`. One INCIDENT block. Slug stays `telos`. Do not invent USD or %.

## Verdict

One affected row. Telos Consilium (`TelosC`) curated Euler books that took Stream collateral, cut caps, and later sent users to Stream's claim form. No Telos close-out dollar was published. The $123M figure is an exposure tally. Grok's later Euler UI bad-debt print was not re-read. Events: `1H 0M 0L 0D 0I 0A`.

Alias: Cassa. Slug stays `telos`. Cassa's site lists Luca as co-founder and CEO and as founder of Telos Consilium. Telos's LinkedIn presents Cassa as the curator name on the live Euler vaults. Telos Consilium's site is still up. No Cassa folder. No new Events row. The Curators name is `Telos (Cassa)`.

## 1) Tweet text that stands

| Grok | Verdict |
|---|---|
| 4 Nov 2025: more than 24 hours earlier TelosC cut supply and borrow caps on the relevant debt and collateral markets after seeing Stream instability. Stream then disclosed a $93M shortfall. The post says this affects "the following" | **FACT** for the sentences retrieved. https://x.com/TelosConsilium/status/1985756355429613775 is a long post and the copy opened here stops at 280 characters. The vault list after that phrase was not recovered |
| 5 Nov 2025: TelosC said it would work to limit losses | **FACT** for the opening. https://x.com/TelosConsilium/status/1986159759704121537 also stops at 280 characters in the copy opened here. The unaffected-book list (Haven, f(x), Reservoir, Alamak, Wormhole) was not in the retrieved text |
| 7 Aug 2026: Stream is collecting claims. Users in TelosC Surge WBTC, USDC, and WETH on Ethereum, and TelosC Surge (tcUSDT0) on Plasma, should file the form and mark holding type "Euler" | **FACT** as https://x.com/TelosConsilium/status/2085627281435930982 |
| 5 Aug 2025 research note "Stablecoins as Collateral: Pricing Guidelines" | **FACT** as https://telosc.com/research/stables-pricing-guidelines, dated 5 Aug 2025. The page says to value stablecoin collateral at the lower of the internal redemption rate or the market price. Grok's extra line about extreme lending-market concentration was not the sentence opened here |

## 2) Wrong or remapped

| Grok | Verdict |
|---|---|
| Severity High, `usd_lost` unknown | **Keep both.** Depositors were pointed at a creditor form nine months later, and the 4 Nov post is a cap cut on Stream books. High is this curator's book, not Stream's $93M. Do not paste $123.6M, $124M, $13.61M, or $90.76M into `usd_lost` |
| Euler UI "as of late 2026": Ethereum Stream USDC about $14.39M supplied and about $13.61M pending bad debt, Plasma USDT0 about $90.76M at 100% utilization | **Not re-read.** Euler's indexer host failed DNS this pass. A yield page still shows about $14M AUM on the Ethereum TelosC USDC vault. DefiLlama on 26 Sep 2026 reports about $92M on Plasma and about $41M on Ethereum, about $133M combined. Those are book-size prints, not a realized loss |
| "Euler later stated it did not choose the oracles; curators did" and that xUSD used eOracle's contract price | **Not re-opened.** The 14 Nov 2025 Euler post retrieved here is only the intro sentence. Do not treat the oracle assignment as re-verified |
| Largest curator creditor, about $123.6M to $124M | **CLAIM.** The Block, citing Yields and More, printed TelosC at $123.6M. TelosC's retrieved posts do not state that dollar. Leave it in Critics |

## 3) What this pass did not turn into a second row

- PeckShield's about $27M locked-liquidity alert (about $14.3M USDC, $7.3M WBTC, $5.5M WETH) from 6 Nov 2025. That is a utilization tally, not a close-out.
- The 8 Nov 2025 Euler incident article and the Q1 2026 Euler blog. Not re-opened beyond Grok's citation.
- No Morpho vault under Telos or TelosC was sought as a second product after Grok's empty search. This pass did not find a Morpho curator page either.

## 4) What to add or change

- `TELOS-20251104-STREAM`: affected, High, collateral, unresolved, `usd_lost` unknown, funds recovered none.
- Do not create a Cassa folder. Do not retitle the slug. Alias `Cassa` on the Curators row and in the snapshot.
- Allegations: none.
