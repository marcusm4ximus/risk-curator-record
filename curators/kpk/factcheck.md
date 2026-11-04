---
cursor:
  subagentId: "bc-212a27bb-994c-5390-bad9-a4d384d9f90d"
---

# KPK — Grok vs reality

**As of:** 2026-09-15  
**Grok paste:** real. Four `INCIDENT` blocks plus standing checks in `twitter-grok.md`. Scope note (Morpho/Euler curator only; DAO-treasury episodes out) is correct.

**Do not copy Grok USD figures or % into the sheet.** Chaos ~$222k and The Edge $221k / $1.1k / 3.85% / 2.3% are exposure or curator-narrative numbers, not crystallized `usd_lost`.

---

## 1) Wrong or easy-to-get-wrong in the Grok paste

| Grok item | Label | Reality |
|---|---|---|
| Arbitrum Yield RLP was “tiered C with a documented 10% cap” on the live Arbitrum vault page | **WRONG** as a live-doc cite | Current [Arbitrum USDC Yield](https://docs.kpk.io/vaults/vaults/morpho/arbitrum/usdc-yield.md) lists only WETH / wstETH / WBTC / weETH. RLP is gone. Changelog: RLP onboarded 2026-01-02, cap-to-zero 2026-03-22. No 10% figure in that changelog row. |
| Docs URL `…/arbitrum/kpk-usdc-yield` | **WRONG** path | Canonical path is `…/morpho/arbitrum/usdc-yield`. |
| Chaos ~$222k **and** The Edge “$222k across Ethereum and Arbitrum” as one fact | **CLAIM** if merged | Chaos (23 Mar 2026, 1pm **EST**): “kpk Morpho USDC Yield **Mainnet**: ~$222K” in an *exposure* tally, not a loss. The Edge guest post by the **kpk Team** (25 Mar): $222k *across ETH+Arb*, $221k ETH recovered, ~$1.1k Arb. Do not treat Chaos Mainnet and Edge combined as the same measurement. |
| Effective RLP allocation “3.85% of vault TVL” | **CLAIM** (KPK guest post only) | Morpho API weekly `sharePriceUsd` on ETH USDC Yield V1 `0x9178eBE0691593184c1D785a864B62a326cc3509`: 2026-03-19 **1.0135** → 2026-03-26 **1.0159** (no NAV crash). TVL 19 Mar **$3.01M** → 26 Mar **$1.51M** (withdrawals / pause, not a haircut). Arb V1 `0x2C609d9CfC9dda2dB5C128B2a665D921ec53579d`: share 1.0213 → 1.0223 the same week; TVL $1.43M → $0.66M. $222k / ~$4.44M combined 19 Mar TVL ≈ 5%, not 3.85%. Leave `pct_of_that_vault_tvl` **unknown**. |
| Recovery txs `0x4f7f…c67f` and `0xb1a1…e245` | **UNVERIFIED** | Truncated. The Edge HTML in this pass did not expand the hashes. Do not paste stubs into Sources. |
| `funds_recovered: full` as independent P&L | **CLAIM** | KPK / Hypernative / The Edge / DL News: zero depositor loss. Independent: weekly share-price series above is **consistent with no permanent NAV hit** on the two Yield V1 vaults. That is not a reconstructed per-market P&L. RLP/USDC market `0xe1b65304…9f33` still shows large unrealized bad debt and oracle vs DefiLlama divergence as of 2026-09-15; KPK is no longer listed as a supplier. |
| Kelp “ETH Prime was the only curated Morpho vault with direct rsETH, capped at approximately 2.3% of vault TVL” | **CLAIM** (curator); **do not confuse with rsETH staking APY** | Changelog: rsETH added ETH Prime 2025-11-21; temp offboard + same-day re-enable 2026-01-20; exit / dust removal 2026-04-20. Live ETH Prime page has **no rsETH**. 2.3% is not in the changelog. StakingRewards quotes rsETH **reward rate ~2.3%** — unrelated. |
| Kelp vault URL = V2 `0xBb50A534…e65FF9` as the exit venue | **WRONG** for the cited tx | Grok’s exit hash `0x01f34dc206943dcbe359f3916684d13e81811155f8ec6195e129ae25903db6ad` is **FACT**: `MORPHO_SHUTDOWN_AGENT` on **V1** ETH Prime `0xd564F765F9aD3E7d2d6cA782100795a885e8e7C8`, moving **10.04 WETH**. First-batch size, not 2.3% of the ~$14.6M V1 TVL print on 16 Apr. Use V1 for that tx; V2 is the live product. |
| Pause txs `0x9356…77de`, `0xb8cf…549e` | **UNVERIFIED** stubs | Changelog **FACT**: 2026-04-18 USDC Prime / ETH Yield / ETH Prime pauses; USDC Prime resume same day. Expand hashes from the changelog before citing. |
| Cap pause txs `0x9d7e…2945`, `0x5c15…c828` | **UNVERIFIED** | Only [KPK automation docs](https://docs.kpk.io/vaults/infrastructure/automation.md). No Cap-protocol post found for 9 Jun 2026. Treat pause-as-MEV-false-positive as **CLAIM**. |
| `forceDeallocateFee` 0% → 0.5% on USDC Yield, then 0.01% on 17 Jul as the next chapter | **incomplete** | Tx `0x6601b8ffa2a8b6b302f45f3f30e999fcdc3920579e041e4990c0d1b46579ef4b` **FACT**: 21 Jun 2026 23:27 UTC, monitoring agent, `SetForceDeallocatePenalty` **0.5%** (`5e15`) on V2 USDC Yield `0xD5cCe260…` adapter `0x4f748955…`. Changelog also 0.5% that day on Prime / Prime Core / EURC Yield / ETH Yield. **Missing in Grok:** 2026-06-23 reset **back to 0%**, then 2026-07-17 standing **0.01%** on the V2 set. |
| Incident IDs `KPK-20260322-RESOLVRLP` and `KPK-20260418-KELPRSETH` | **change** | Same event, same suffix as other folders: `KPK-20260322-RESOLV`, `KPK-20260418-RSETH`. |
| Active since **2025-11**; Euler line from **2026-05** | **incomplete** | Morpho V1 USDC Prime / EURC / USDT Yield created **2025-09-15** (Morpho API `creationTimestamp`). Forum intro 2025-11-03 and launch blog 2025-11-13 are the *public curator* dates. Euler changelog: RLUSD market **2026-03-09**; not a May start. |
| Resolv root cause “flaw in USR minting contract” (The Edge wording Grok echoes in sources) | **WRONG** if used as SC bug | Resolv post-mortem: off-chain KMS / SERVICE_ROLE mint of 80M USR, ~$25M ETH out. Code did what it was signed to do. |

---

## 2) What Grok got right (keep)

- Curator-only scope; Gnosis GIP-143 / Balancer EURe-sDAI **out**. **FACT** for this DD.
- Four dated events, one each: Resolv 2026-03-22, Kelp 2026-04-18, Cap 2026-06-09, forceDeallocate 2026-06-21. Types: collateral / collateral / collateral (Cap stables they listed; Grok typed Cap as ops) / ops (`forceDeallocate` infra). Grok severities Med / Med / Low / Low.
- `usd_lost: unknown` on every row. Keep.
- Changelog 2026-03-22: RLP cap 0 on ETH+Arb Yield; syrupUSDC removed on Arb. **FACT.** 2026-03-23: RLP dust / withdraw-queue / re-enable supply. **FACT.**
- Chaos listed KPK in the exposure table and aimed the Public Allocator “routed into failed markets” critique at **Gauntlet** (and the class), not a KPK loss allegation. **FACT.**
- KPK does not use Morpho’s public Allocator (their docs + The Edge). **FACT** as architecture; still **CLAIM** that this is why they exited first.
- Kelp: war-room blog, changelog pauses/offboards, ENS endowment post (treasury, not vault P&L). **FACT** that they responded; **CLAIM** “zero user funds lost” (@deepcryptodive / @kpk_io).
- forceDeallocate: ecosystem griefing, 0.5% response, later 0.01% standing penalty. Directionally **FACT** (see the Jun 23 hole above).
- Standing: risk docs **active**; PoC **X: @kpk_io**; no public TG; no material *new loss* after 2026-06-21 through 2026-09-15; Euler KPK Earn: **no dated curator-loss incident** found. **FACT.**
- Closing line: no sourced depositor principal loss as of 2026-09-15. **FACT** as “not found,” not as audited $0.

---

## 3) Unverified (do not invent)

- Exact USD recovered on RLP (Edge $221k / $1.1k) and whether recovery was 100% of *peak* exposure vs remaining sleeve after caps.
- Intra-week share-price dip 22–25 Mar (API is weekly).
- Whether V2 Yield (already live, still on Vault-V1 adapter until 2026-05-04) had any RLP via that adapter.
- Cap 9 Jun pause on Cap’s own contracts (KPK-only narrative).
- “58 calls / 26 vaults” forceDeallocate campaign (KPK docs only).
- Bodies of Grok-cited X posts (`2035648055492358369`, `2036170798646349902`, Kelp trio, `2046359693677752460`) — URLs not fetched here.
- PoC Telegram: **not found**.

---

## 4) Missing from Grok (add)

1. **V1 vs V2.** Resolv and Kelp exits ran on **MetaMorpho V1.1**. Live product is V2 (Markets V1 Adapter after **2026-05-04**). V1 still holds residual TVL (Arb Yield V1 ~$24k on 2026-09-15). KPK wound down V1 curation end-May 2026 ([Morpho vault docs](https://docs.kpk.io/vaults/vaults/morpho.md)).
2. **Morpho V1 donation / `supply(onBehalf)`.** [Morpho curator security](https://docs.morpho.org/curate/concepts/security-considerations/): cap 0 does **not** stop donation if a rich-oracle market stays on the withdraw queue. Peer losses (Gauntlet/Re7) were wstUSR $1 oracle + allocator/donation. KPK listed **RLP**, not wstUSR, in the changelog. Do not credit “setCap 0” as having beaten that specific attack unless the market was also dequeued (Mar 23 changelog is the dequeue step).
3. **PT-RLP already offboarded 2026-03-04** as “underperforming”; **spot RLP stayed** until the exploit. Lesson timing.
4. **Jan 20 2026 rsETH precautionary offboard then same-day re-enable** — the listing lesson was available two months before Kelp.
5. **Hypernative** vendor blog (equity-aligned partner) and **DL News** quoting KPK — same zero-loss line as The Edge. Use as curator/vendor, not independent P&L.
6. **Resolv protocol numbers** (~80M USR, ~$25M ETH) are Resolv’s, not KPK’s bill ([Resolv post-mortem](https://resolv.xyz/blog/resolv-postmortem-march-22-2026-incident)).
7. **RLP market leftover:** Morpho UI still shows a broken RLP/USDC book (oracle ~$1.28 vs DefiLlama ~$0.11, large unrealized bad debt). Context for “we got out,” not a KPK loss line.
8. **Live vault inventory + Euler USDC Prime RWA** `0x2B47c128b35DDDcB66Ce2FA5B33c95314a7de245` (Securitize VBILL/STAC/HINC + Sentora RLUSD/PYUSD overflow). No Euler incident row.
9. **After Resolv they still list issuer-NAV / long-tail yield** in USDC Yield (savUSD, ftUSD, siUSD, srRoyUSDC) and a dedicated **USDC Yield RWA** vault (FalconX / 3Jane / mF-ONE). Isolation is a partial lesson, not a ban.
10. **Arbitrum TMC post:** KPK said curated Morpho vault Arb exposure **$1.1k (0.11% of vault)**; DAO Fluid legs are treasury, out of vault P&L. [Arbitrum forum](https://forum.arbitrum.foundation/t/kpk-treasury-management-updates/30667).

---

## 5) What to add/change in `merged.md`

- One dated block; shared suffixes `RESOLV` / `RSETH`; keep Grok’s Cap / ForceDeallocate dates.
- `usd_lost` / `pct_of_that_vault_tvl`: **unknown**. Put Chaos/Edge dollars in prose as CLAIM/FACT-as-exposure.
- Vault URLs: Yield **V1** for Resolv, ETH Prime **V1** for the Kelp exit tx, V2 for live product.
- Standing: risk docs **active**; active since **2025-09** (on-chain) / **2025-11** (public Morpho); PoC **X: @kpk_io** (risk lead **@deepcryptodive**); no TG; no new loss event 2026-06-21 → 2026-09-15.
- Drop truncated hashes until expanded.

---

## Sources used against Grok

- primary: https://docs.kpk.io/vaults/vaults/morpho/change-log.md
- primary: https://docs.kpk.io/vaults/infrastructure/automation.md
- primary: https://docs.kpk.io/vaults/infrastructure/risk-framework.md
- primary: https://docs.kpk.io/vaults/vaults/morpho.md
- primary: https://kpk.io/blog/inside-the-war-room
- primary: https://forum.morpho.org/t/introducing-kpk-curated-vaults-on-morpho/2072
- primary: https://discuss.ens.domains/t/rseth-exploit-kpk-precautionary-actions-ens-endowment-impact-summary/22076
- primary: https://resolv.xyz/blog/resolv-postmortem-march-22-2026-incident
- primary: https://docs.morpho.org/curate/concepts/security-considerations/
- primary: https://app.morpho.org/ethereum/curator/kpk
- primary: https://chaoslabs.xyz/posts/defi-s-contagion-loop-when-risk-curators-become-the-risk
- primary: etherscan `0x01f34dc2…db6ad`, `0x6601b8ff…ef4b`
- primary: Morpho GraphQL historicalState for `0x9178…3509` (eth) and `0x2C60…357d` (arb)
- commentary / vendor: https://www.the-edge.xyz/p/when-collateral-fails (kpk guest post)
- commentary / vendor: https://www.hypernative.io/blog/when-the-resolv-exploit-hit-kpks-depositors-lost-nothing
- commentary: https://www.dlnews.com/articles/defi/kpk-declares-zero-loss-to-depositors-after-resolv-stablecoin-collapse/
- commentary: https://oakresearch.io/en/analyses/investigations/the-resolv-usr-hack-curators-face-their-responsibilities
- commentary: https://forum.arbitrum.foundation/t/kpk-treasury-management-updates/30667

## Taxonomy applied 2026-09-16 (Class v3)

- **Recast:** `RESOLV` non-materially-affected **indirect-curator-fault** (listed RLP; $0 depositor loss — collateral/stack choice, was incident direct-curator-fault).
- **Keep:** `RSETH` / `CAPPAUSE` non-materially-affected **indirect-curator-fault** (was Prec); `CAPPAUSE` Type=`collateral` not ops (Cap/stcUSD listing). `FORCEDEALLOC` non-materially-affected **direct-curator-fault** (ops config they set). Count `0H 0M 0L 1D 3I`.
