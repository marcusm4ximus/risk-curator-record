---
cursor:
  subagentId: "bc-b819bc80-a2d7-52f3-b27e-19f61ddc29f1"
---

# Sentora — Grok vs reality

Research date: 2026-09-15. Paste: `twitter-grok.md` (real; **1 INCIDENT** + standing checks). Independent pass: Morpho app/GraphQL, Sentora.com, Morpho forum/Stories, PR Newswire, The Defiant, Euler Q1 blog, Lido/Kelp reviews. No Morpho/Euler MCP. Do not invent USD lost or %.

## Verdict in one page

Grok’s single incident (`SENTORA-20260904-EULERHANDOVER`) is **real and correctly typed**. The 4 Sep 2026 Medium note exists and matches Grok’s summary. On-chain governor change after the 8 Sep effective date was **not** independently confirmed here.

Grok is **right** that no sourced Sentora-vault haircut was found. Grok is **too aggressive** labeling Stream / Resolv / Kelp / Black Friday “no exposure” as **FACT** from *both* third-party *and* Sentora sources: Stream/Resolv/Black Friday have Sentora no-exposure posts plus peer-loss lists that omit Sentora; **Kelp does not** — Sentora’s Kelp digest never says their vaults were clean.

Grok **omitted** curator-scoped public-response events Sentora itself published (Black Friday, Stream, Elixir advisory client, Resolv) and **missed** Morpho’s empty disclosure field, live high-LLTV/RWA concentration, and the Elixir $5M advisory claim.

**Add/change in the paste before sheet use:** Euler handover is off the Events tab (routine ops). Stream / Resolv are **not** indirect-curator-fault (no defensive action). Downgrade Kelp “no exposure” from FACT; do not write `usd_lost = 0`.

---

## Grok INCIDENT — Euler handover

| Field | Grok | Label | Independent |
| --- | --- | --- | --- |
| date 2026-09-04 | Yes | **FACT** | Medium published 2026-09-04T12:06:03Z. |
| title / id | Euler handover / `SENTORA-20260904-EULERHANDOVER` | keep | Matches prefix + date + slug. |
| type ops, severity Low | Yes | **FACT** as classification | Notice is a curator transfer, not an exploit. |
| URL | medium.com/sentora/transition-of-sentoras-euler-vaults-2a57b06563fe | **FACT** | Body retrieved via Jina. Direct Medium fetch blocked. |
| Transfer before Tue 8 Sep 2026 | Yes | **FACT** (notice) | Post: “before Tuesday the 8th September 2026.” |
| Two markets: RLUSD + PYUSD | Yes | **FACT** | Named in the post. |
| With The Euler Foundation; to Euler and/or affiliates | Yes | **FACT** (notice) | Exact post language. |
| No depositor action; balances unchanged | Yes | **CLAIM** of outcome | Stated in the notice. No independent share-price/tx check. |
| No pause/oracle/exploit/loss disclosed | Yes | **FACT** *of the notice* | Notice is silent on loss. Silence ≠ proven $0. |
| usd_lost / pct unknown | Yes | **FACT** | Correct. Do not fill 0. |
| status resolved | Yes | **UNVERIFIED** as on-chain | Notice is published. Governor/admin change on EVK vaults not confirmed (RPC/app Cloudflare). `vaults.sentora.com` still branded an Euler RLUSD-cluster USDC vault as Sentora as of this pass. |
| critics none for this event | Yes | **FACT** (none found) | Euler forum sunset (K3/AlphaGrowth, Gauntlet) is a **different** handover. |
| Euler Q1 2026 blog as alignment tension, not a Sentora loss | Yes | **FACT** that it names no Sentora loss; **CLAIM** that the unnamed “competing vaults” paragraph is about Sentora | [Euler Q1](https://www.euler.finance/blog/euler-q1-2026) (Apr 2026) also calls Sentora “currently the largest curator on Euler.” |
| Dune cluster sizes | hundreds of millions | **CLAIM** / undated | [Dune](https://dune.com/diligentdeer/euler-sentora-vault-clusters) not re-run. Forum Dec 2025 self-report: ~$370M RLUSD / ~$270M PYUSD on Euler. |

**Wrong:** nothing material in the block. **Change:** status `resolved` → keep with a one-line “on-chain role transfer not independently confirmed.” `protocol_or_vault_url` can stay Medium; also point at Euler vaults that were Sentora-named: PYUSD `0xba98fC35C9dfd69178AD5dcE9FA29c64554783b5`, RLUSD `0xaF5372792a29dC6b296d6FFD4AA3386aff8f9BB2`.

---

## Grok “not an incident” claims

| Grok line | Label | Independent |
| --- | --- | --- |
| No sourced USD loss / haircut on Sentora Morpho or Euler vaults | **FACT** as of 2026-09-15 search | Peer post-mortems name other curators. Live Morpho listed vaults have no USR/wstUSR/xUSD/rsETH markets (snapshot, not 2025-11 / 2026-03-22 / 2026-04-18 reconstruction). |
| Stream (Nov 2025): Sentora vaults no exposure / zero reported losses = **FACT** from third-party **and** Sentora | **CLAIM** (Sentora) + **partial corroboration** | Sentora Pulse + Elixir note: no XUSD/deUSD in curated vaults. Independent Stream write-ups name MEV Capital, Re7, TelosC, K3, Varlamore, Gauntlet — not Sentora. Still not a reconstructed PnL. **Grok missed** the advisory-client deUSD exception ($5M claimed save). |
| Resolv 22 Mar 2026: same | **CLAIM** (Sentora) + **partial corroboration** | [Sentora Resolv report](https://sentora.com/market-events/resolv-incident-report). Frambot ~15 Morpho vaults; named losers Gauntlet, Re7, kpk, 9summits. Live PYUSD/RLUSD Main have no Resolv collateral. PYUSD Main and RLUSD Main **already existed** (2025-12-16, 2026-03-04). |
| Kelp rsETH 18 Apr 2026: same FACT from third-party **and** Sentora | **WRONG as FACT** | [Sentora Kelp digest](https://sentora.com/research/articles/ecosystem-stress-test-the-kelp-dao-contagion-defi-united) (1 May 2026) is sector commentary. **It never states Sentora had no rsETH.** Independent: Lido EarnETH ~9% rsETH; Gauntlet claimed none. Live Morpho Sentora collaterals (Sep 2026) are weETH/wstETH/BTC wrappers, not rsETH — five months later. |
| Oct 2025 Black Friday: zero reported losses = FACT | **CLAIM** (Sentora) | [Black Friday note](https://sentora.com/market-events/how-sentora-performed-during-crypto-s-black-friday): 0 client bad debt, 10k ETH Spark/Aave example. Morpho V2 PYUSD Main did not exist yet. Unverified independently. |
| Those events are “other protocols’ / other curators’ stories” | **CLAIM** (scope) | INTEL counts **public response**. Sentora published market-event posts. Treat as Low dated blocks, not peer USD. |
| @aixbt_agent 8 Mar 2026 PYUSD concentration / Feb Morpho MEV Capital | **CLAIM** (Grok’s own label is right) | Tweet not opened here. Feb 2026 MEV Capital stress is **not** a Sentora vault in primary sources checked. |
| mWIN ~86% of supply in Sentora Morpho market (Defiant 6 Aug 2026) | **FACT** as of that snapshot | [The Defiant](https://thedefiant.io/converge/defi/sentora-opens-a-lending-vault-against-wellingtons-first-native-onchain-credit-strategy): 86% of 57.13 mWIN in the market; vault ~9.65M PYUSD; 77% LLTV; 15% perf fee. **Not a loss.** By 2026-09-15 vault ~$25M, still ~99% one market, 96.7% util. |

---

## Grok standing checks

| Item | Grok | Independent |
| --- | --- | --- |
| Risk docs: active | Mostly **FACT** | Seven-bucket article 13 Nov 2025; [defirisk.sentora.com](https://defirisk.sentora.com/); GitBook vault-risk + asset reviews (Huma, Prime, Maple, mWIN). **Missing:** Morpho UI on every listed Sentora V2 vault checked: **“Curator has not submitted a Disclosure.”** Morpho Risk tab ≠ a submitted disclosure. |
| Active since: 2025-05 | **Imprecise** | Merger **FACT** 2025-05-06 (PR Newswire). First sourced **curator vault**: Euler RLUSD **2025-09-25**. Kamino PYUSD Sep 2025. Morpho V2 PYUSD Main **2025-12-16**. Use **2025-09** for curator-active. |
| PoC X @SentoraHQ | **FACT** | Morpho curator socials. |
| CEO @admff492 | **FACT** (secondary) | YesPress links https://x.com/admff492; Spaces bio “CEO of Sentora.” |
| @jrdothoughts | **FACT** | Firelight round tweet attributed to Jesus Rodriguez. |
| TG none | **Incomplete** | Legacy [t.me/intotheblock](https://t.me/intotheblock) “Sentora Insights.” |
| New incident since record | only Euler handover in last two weeks | Agree: no loss after 2026-09-04 through 2026-09-15. |
| Lesson: avoid opaque synthetics; residual RWA | **CLAIM** as “lesson applied” | Consistent with no USR/xUSD on live Morpho lists. They **did** list Ethena sUSDe at **91.5% LLTV** (~$105M on Paypal USD Main, 2026-09-15). Huma review says “low LTV”; live vault is **86% LLTV**, ~100% allocated. |

---

## Missing from Grok (add in merged)

1. **SENTORA-20251010-FLASHCRASH** — Sentora ops note; unverified $0.
2. **SENTORA-20251104-STREAM** — no XUSD on curated vaults (Sentora); not on independent loser lists. Later **not indirect-curator-fault** (no pause/action).
3. **SENTORA-20251106-ELIXIR** — same + **advisory client $5M** claimed unwind (CLAIM).
4. **SENTORA-20260322-RESOLV** — no USR in Sentora report + not among Frambot’s 15. Later **not indirect-curator-fault** (advisory only).
5. **SENTORA-20260418-KELP** — public digest; **do not** copy Grok’s “FACT no exposure.”
6. Morpho V2 vault table, fees (Paypal USD Main ≈ **1% management / 0% performance** per GraphQL; UI can look like 10% performance), owner `0xe8C9C99EcaD0686A14A00d8521c572281E938008`, SAFE 1/1, 3-day vs 7-day timelocks.
7. Trap dates: CryptoRank “Q4 2024 rebrand” **WRONG**; Fensory “Feb 1 2025 Morpho PYUSD” **WRONG**.
8. Kraken DeFi Earn / Veda; Tempo pathUSD; Kamino PYUSD + Kamino PRIME 5x–10x loop (Sentora Prime review).

---

## What to change in Grok before any sheet paste

- Keep `SENTORA-20260904-EULERHANDOVER`; usd_lost **unknown**.
- Do not paste Gauntlet ~$6M, MEV Capital ~$700k, Kelp $292M, Fluid numbers into Sentora cells.
- Kelp: drop “FACT no exposure.”
- Split Stream vs Elixir; record advisory client.
- Risk docs: active on sentora.com / GitBook; Morpho disclosure **none**.
- Active since: **2025-09** (vaults), 2025-05 (firm).

## Sources

Grok primary: https://medium.com/sentora/transition-of-sentoras-euler-vaults-2a57b06563fe  
Euler Q1: https://www.euler.finance/blog/euler-q1-2026  
Sentora: market-events Resolv, Elixir, Black Friday; Kelp digest; how-sentora-manages-risk; Huma/Prime reviews  
Morpho: https://app.morpho.org/curator/sentora and listed V2 vault URLs in `merged.md`  
Defiant mWIN: https://thedefiant.io/converge/defi/sentora-opens-a-lending-vault-against-wellingtons-first-native-onchain-credit-strategy  
Merger: PR Newswire 2025-05-06  
aixbt (CLAIM): https://x.com/aixbt_agent/status/2030486091153993861  
Kelp independent: https://research.lido.fi/t/kelp-incident-review-earneth-exposure-response-and-risk-framework-changes/11579  
Resolv independent: Frambot 15-vault statements; https://russellclare.com/crypto-morpho-resolv-contagion/

## Taxonomy applied 2026-09-16 (Class v3)

- **Keep:** none. Empty blotter. Count `0H 0M 0L 0D 0I`.
- **Not on Events tab:** `FLASHCRASH`, `STREAM` (no pause; non-exposure is not indirect-curator-fault), `ELIXIR`, `RESOLV` (advisory/no-USR; not indirect-curator-fault), `KELP`, `EULERHANDOVER`. Do not keep Grok’s Euler handover as an Events-tab row.
