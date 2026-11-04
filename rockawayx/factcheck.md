# RockawayX — Grok vs reality

Checked: 2026-09-15. Grok paste: `twitter-grok.md` (one INCIDENT block plus standing checks). Independent pass used Morpho/Euler UIs and public APIs, RockawayX/Term/Tori docs, Defimon/Defiprime on-chain reconstructions, and Morpho forum. X status URLs in the paste returned 403 here; those curator-tweet claims are treated as CLAIM unless a second primary repeats them.

## Grok paste quality

Real paste. One INCIDENT (`ROCKAWAYX-20260823-TERMDRAIN`) plus standing checks. The file also contains ingest preamble (“I’ll start by identifying…”) that is not DD. Strip that before any sheet paste.

## Verdict on Grok’s incident

**Keep the row.** Term Finance’s 2026-08-23 governance drain of the RockawayX-named Tori USDC *strategy* is curator-scoped: RockawayX is strategist on the depositor-facing Tori Ecosystem Vault (Upshift) and the Term instance carried that name. Amount, address, date, and empty-electorate TokenVoting path check out on independent reconstructions.

Do **not** treat this as a Morpho vault loss. Morpho `roxTORI` (`0x3BD9AdAE6643dDcddD02746b8B60075E56DF9478`) was not the drained contract.

## Wrong

| Grok | Reality | Label |
|---|---|---|
| Protocol-wide haul **8,488,229 USD** | Independent on-chain totals: **2,841.743536 WETH + 1,679,639.290442 USDC ≈ $8,466,497** at Defimon’s attack-block Chainlink ETH print ($2,388.27). PeckShield/CertiK rounded **~$8.5M**. Do not paste Grok’s extra-precise USD. | CLAIM (Grok) vs FACT (Defimon WETH/USDC) |
| **pct_of_that_vault_tvl: 1.1** as a hard cell | Grok itself says 1.1% was the first official *exposure* note and ~1% in a later note, and that minute-of-incident Upshift TVL was not published. An Upshift snapshot dated **2026-08-17** showed Term Finance **$500,912** on a **$45.98M** book (~1.09% sleeve). Drain **454,046.26 / 45.98M ≈ 0.99%** of that book, and **454k / 501k ≈ 91%** of the Term sleeve. Do not invent a live %. | CLAIM (curator %) |
| “**unallocated** USDC … deployed strategy positions were not seized” as the whole money path | Defimon: after governance takeover the strategy **cashed out its MetaMorpho sleeve, set reserve ratio to 0, then bought the attacker’s self-priced repo token** for the liquid balance (**454,046 USDC**). Term Labs later said remaining *fixed-rate loans* were moved out by **2026-08-25 14:52 UTC**. Liquid sleeve was taken; leftover term loans are a separate recovery by Term, not proof the strategy held only idle cash. | CLAIM (RockawayX phrasing) |
| “There was **no** guardian/veto/cancel path” | Veto existed as opt-in wrap + TokenVoting. Nobody had wrapped, so quorum was 5% of *wrapper* supply (≈ nothing). Delay/cooldown existed and was **set to 0 in the same proposal**. Morpho-style independent sentinel was not in this Term stack. | CLAIM (too absolute) |
| Defiprime-style reading that 0.50 shares were a rounding error vs *vault LP supply* | Defimon: USDC DAOs had **zero** prior wraps; attacker deposited **5 USDC** per vault on **2026-08-21**, wrapped 100% of `tsvRockXToriUSDC` voting supply, met 50% support / 5% of wrapped supply / 49h `minDuration`. Grok’s “100% of this vault’s governance supply” matches Defimon, not Defiprime’s LP-denominator slip. Keep Grok’s wrapper story; do not paste Defiprime’s 0.0000156% as FACT for Tori. | FACT (wrapper) / CLAIM (Defiprime LP %) |

## Unverified (leave CLAIM)

- **RockawayX same-day posts** (`x.com/RockawayX/status/2091496293969346795`, `…2091503724795474387`): 1.1% Term exposure, full cover, position bought back, mint/redeem live, only Curve/Morpho/Pendle left, no new integrations. X fetch 403 in this pass. Secondary press repeats “RockawayX and Tori said the ~454k was fully covered.” Who paid (RockawayX vs Tori vs both) is **not** proven on-chain here.
- **@GilgameshODs** as a public curation PoC. Not independently confirmed in this pass. Firm PoC that *is* sourced: **X: @RockawayX**, email `contact@rockawayx.com` on the Tori risk memo.
- **PT-reUSD “RockawayX said USDC Yield took no loss/bad debt” (2026-08-25).** No independent copy of that tweet found (the @RockawayX timeline that day shows a Relayer Capital acquisition thread). **FACT** without that tweet: Morpho’s PT-reUSD-10DEC2026 / USDC 91.5% market had **$0 realized bad debt**; Steakhouse/Pendle said lenders in *their* vaults were whole. RockawayX USDC Yield is still a top supplier (**~$9.97–9.98M**, ~54% of that vault, 15 Sep 2026 Morpho UI).
- **@0xGwoni ~$480k** — CLAIM; transfer log is **454,046.26 USDC**. Close, not a second number to paste.
- **@deepcryptodive** monitoring critique — CLAIM (tweet 403 here); the *substance* (multi-day public proposal, empty veto) is FACT on Defimon’s timeline.

## Missing from Grok (add)

1. **Two Tori surfaces.** Drained: Term strategy **`0x6F576e5192A14F259f7FE7347ECf63b255d7f7d1`** (Yearn V3 TokenizedStrategy). Depositor vault Grok linked: Upshift **`0xcd69123b3FBBfC666E1f6a501da27B564C00De54`**. Separate Morpho vault **RockawayX Tori Ecosystem / `roxTORI`** was **not** the drain address. Defiprime’s “curated a vault on Morpho, allocated part of it to Term” collapses those layers — do not copy that sentence as FACT.
2. **Attack txs (primary).** USDC five-vault drain: [`0x9f273f9a5a20c2fc957b06bbfa45db486390eede4a7f44fbe1a2eb6744c2e8a0`](https://etherscan.io/tx/0x9f273f9a5a20c2fc957b06bbfa45db486390eede4a7f44fbe1a2eb6744c2e8a0) at **2026-08-23 06:47:47 UTC**, block **25816159**. ETH meta drain (context, not RockawayX vault): `0xd354a15b15cb73d30908f411aee3f795ec86737a4d080e9a818ac4d6d3014129`.
3. **D2 Finance (2026-08-24)** — extra critic of *how* Tori plugged the hole (prepaid **250,500 trUSD** mint, Kraken hot-wallet leg, ~$17.6k public buffer). Coverage of depositors can be true while the recap path is still disputed.
4. **Morpho inventory Grok skipped.** Live curator filter [app.morpho.org/vaults?curators=rockawayx](https://app.morpho.org/vaults?curators=rockawayx) (15 Sep 2026): USDC Yield ~$18.5M; f(x) Ecosystem ~$16M; Tori Ecosystem Morpho ~$13.5M; Huma USDC Main ~$12.4M; NUVA ~$2.0M; wETH ~$0.95M; Midas USDC Prime Base ~$0.58M; dust Prime / Figure / EUROP / Belem. Curator/owner Safe **`0xbBacDCFB9691DFA1066aB29edfcc4A73f6DEf918`**. **No Euler Earn/EVK entity** in `euler-xyz/euler-labels` Ethereum `entities.json`. Lista **roxptUSDT** `0xb5a30E1FA2CF3C8DEA882124B3AB5A47A27C5dd2` is a **BNB Morpho-fork**, not Euler (TradingStrategy’s “Euler” tag is wrong).
5. **PT-reUSD 2026-08-25** as a *dated Morpho row with $0 lost*, not a silent exclude. Same 91.5% LLTV market RockawayX USDC Yield still maxes (~$10M cap, ~54% of vault). Steakhouse *did* pull then restore; no sourced RockawayX deallocate. Lesson from Term (watch integration governance / thin oracles) did **not** show up as a cap cut here.
6. **Published risk framework vs live caps.** Firm pages advertise AA max **15%** / single-protocol **25%**. Live: USDC Yield **54% PT-reUSD**; Huma USDC Main **100% PST**; Tori Morpho **~67% strUSD**; f(x) **~82% fxSAVE**; wETH **~100% wstETH at 96.5% LLTV** (forum intro said ≤90% correlated LSTs). Morpho app: **“Curator has not submitted a Disclosure”** on these vaults. Forum category still Discourse template; **zero monthly curation reports** after the 2026-03-20 promise.
7. **Huma blog vs chain.** Marketing: **24-hour** timelock. On-chain V2: **3-day** `addAdapter` / cap increases, **7-day** some other selectors (`timelock_seconds` 604800).
8. **Related-party / VC overlap (standing, not a dated hack).** Forum discloses Morpho Labs investment. RockawayX also invested in Cap while USDC Yield *launch copy* listed **stcUSD**. Huma article: curator **and** PST secondary liquidity. Serotonin: Kamino RWA book once **~74% OnRe** (portfolio name). Not an incident row unless you want a “conflicts” note on Curators.

## What to change in the sheet draft

- Keep **one** TermDrain block. Add Term strategy address + USDC tx to `protocol_or_vault_url` / sources. Set **pct** to `unknown` (optional note: curator said 1.1% exposure; Aug 17 book implies ~1%).
- `usd_lost`: **454046.26** is the strategy transfer (FACT from reconstructions citing logs). Do not paste protocol-wide $8.49M into this curator’s cell.
- `funds_recovered`: **full** for *depositors* only as CLAIM (team + press). Attacker still consolidated proceeds per Defimon; Term recovered leftover fixed-rate loans, which is not the 454k.
- Add **D2 Finance** under critics.
- Add a **second** dated block for PT-reUSD (`usd_lost: 0`) so “no Morpho loss” is a sourced cell, not a footnote.
- Standing: risk docs **stale** for Morpho reporting/disclosure; Tori memo **active**. Euler: **none**. PoC: **@RockawayX**; TG none. Do not mark Morpho monthly reports as delivered.

## Sources used in this pass

**TermDrain (primary / on-chain reconstructions):** [Defimon](https://defimon.xyz/blog/term-finance-hack-august-2026) · [Defiprime](https://defiprime.com/term-finance-governance-exploit) · [etherscan tx](https://etherscan.io/tx/0x9f273f9a5a20c2fc957b06bbfa45db486390eede4a7f44fbe1a2eb6744c2e8a0) · [strategy](https://etherscan.io/address/0x6F576e5192A14F259f7FE7347ECf63b255d7f7d1) · [Upshift Tori vault](https://app.upshift.finance/pools/1/0xcd69123b3FBBfC666E1f6a501da27B564C00De54) · Term Labs recap via [crypto.news](https://crypto.news/term-labs-recovers-fixed-rate-positions-after-8-5m-governance-attack/) / [Cryptonomist](https://en.cryptonomist.ch/2026/09/03/term-labs-governance-attack/)

**Cover / critics:** [Odaily / D2](https://www.odaily.news/en/newsflash/512250) · Grok-cited @RockawayX posts (unfetched)

**Morpho live:** [curator vaults](https://app.morpho.org/vaults?curators=rockawayx) · [USDC Yield](https://app.morpho.org/ethereum/vault/0xE0181090c22579B6A217f1522cbf8c9f1F0C1965/rockawayx-usdc-yield) · [PT-reUSD market](https://app.morpho.org/ethereum/market/0x1e9d614631a7df0ec07fb05b2c8cb2491575fd1a63a33bf187a6afb295a4fc64) · Morpho API `vaults-v2` · [DefiLlama risk](https://defillama.com/yields/pool/caa9ffc0-2983-4c18-9556-4e3ad4dfe6ac/risk)

**PT-reUSD event:** [The Defiant](https://thedefiant.io/news/defi/pendle-oracle-move-liquidates-usd36-million) · [CoinDesk](https://www.coindesk.com/tech/2026/08/25/a-3-token-move-just-triggered-usd36-million-in-ethereum-defi-liquidations)

**Curator docs:** [Morpho forum intro](https://forum.morpho.org/t/introducing-rockawayx-vaults-on-morpho/2214) · [forum category](https://forum.morpho.org/c/vaults/rockawayx/59) · [Tori risk memo](https://www.rockawayx.com/insights/rockawayx-tori-ecosystem-vault-investment-thesis-risk-disclosure) · [Morpho launch](https://www.rockawayx.com/insights/rockawayx-launches-three-curated-vaults-on-morpho) · [curation overview](https://www.rockawayx.com/insights/rockawayx-vault-curation-an-overview-of-products-capabilities) · [Huma vault](https://www.rockawayx.com/insights/introducing-the-rockawayx-huma-usdc-main-vault-on-morpho) · [Lista PT](https://www.rockawayx.com/insights/rockawayx-launches-pt-yield-vault-on-lista-dao)

## Taxonomy applied 2026-09-16 (Class v3)

- **Keep:** `TERMDRAIN` affected **Med**; `PTREUSD` non-materially-affected **direct-curator-fault** ($0 realized bad debt). Count `0H 1M 0L 1D 0I`.
