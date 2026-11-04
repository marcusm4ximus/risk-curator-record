# K3 Capital — Grok vs reality

**As of:** 2026-09-15  
**Grok paste:** real. Two `INCIDENT` blocks plus standing checks in `twitter-grok.md` (path: `docs/curator-dd/k3-capital/twitter-grok.md`). This file fact-checks that paste against independent research. It is **not** a “Grok missing” stub.

**Do not copy Grok USD figures or % into the sheet.** Goldberg’s ~$532k is Avalanche Euler *borrower liquidations*, not a crystallized K3 vault NAV hole. The ~$2m leftover is Discord-via-press. Peak Trading Strategy TVL (~9.55m deUSD) is not a loss. Keep `usd_lost` and `pct_of_that_vault_tvl` **unknown**.

**ID prefix for this job is `K3`, not Grok’s `K3CAPITAL`.** Same dates and slugs: `K3-20250529-DEUSDORACLE`, `K3-20251104-DEUSDUNWIND`.

---

## Identity (Grok did not mix the UK shop; tighten `.net`)

| Label | Verdict | Notes |
|---|---|---|
| DeFi curator K3 Capital | **FACT** | Euler labels entity `k3-capital`, URL `https://k3.capital/` (US “Coming Soon” as of this date). X `@k3_capital`. Governor/Safe on Ethereum labels: `0xdD84A24eeddE63F10Ec3e928f1c8302A47538b6B`, `0x060DB084bF41872861f175d83f3cb1B5566dfEA3`. Same Safe `0xdD84…8b6B` on Avalanche labels. |
| Morpho + Euler curator | **FACT** | Morpho GraphQL returns three vaults under search `K3`. Euler `products.json` lists Avalanche cluster, BNB stable/yield, Ethereum Prime/Yield/Liquity Hub, Arbitrum, Plasma, Monad isolated markets, Sentora RLUSD/PYUSD now labeled K3. |
| UK AIM “K3 Capital Group” | **Not this curator** | Different company. Grok did not merge them. Keep the exclusion. |
| `https://k3-capital.net/` | **RUMOR / impersonation risk** | Grok called it a “marketing site” / “secondary” surface. Euler labels and X point to `k3.capital`. The `.net` site is a connect-wallet aggregator claiming Euler/Morpho/IPOR/Liquity and “$58M+ TVL”. **Do not treat it as official K3 marketing.** |
| Historical marketing | **FACT** | [k3c.webflow.io](https://k3c.webflow.io/). Substack [blog.k3.capital](https://blog.k3.capital/p/2025-first-half-recap) (H1 recap URL was previously 404 in an earlier pass; it resolved this pass). |

---

## 1) Wrong or easy-to-get-wrong in the Grok paste

| Grok item | Label | Reality |
|---|---|---|
| Incident IDs `K3CAPITAL-20250529-DEUSDORACLE` / `K3CAPITAL-20251104-DEUSDUNWIND` | **change** | Job prefix is `K3`. Keep Grok’s dates and slugs: `K3-20250529-DEUSDORACLE`, `K3-20251104-DEUSDUNWIND`. |
| ~$532k as if it were K3 vault USD lost | **WRONG if used as `usd_lost`** | Goldberg (tweet 3): oracle $1.0283 at block **62918673**; first liq **62918676**; **$532K wiped** at **62918677**, tx stub `snowscan.xyz/tx/0xe40c80e0e…`. Full hash **FACT**: `0xe40c80e0ec5af4041d84a7ba0654a39bb2615ddf82d1b3824cef679ff78424bd`. Sampled other liq in the same block `0xe5f9aef8a8590b1d6f0de039e8466170483a587ffed8bc87101ca390bbb61d41`: Euler EVC `Liquidate`, deUSD/`edeUSD`, path hits **Re7** deprecated vault `0xA45189636c04388ADBb4D865100DD155e55682EC`, **not** K3 deUSD vault `0xe1E549C965A4A0514D9bf80161D32924b8694822`. Grok itself said “borrower liquidations, not a proven curator-vault hole.” Keep `usd_lost: unknown`. |
| Re7 + K3 hardcoded deUSD to $1, with a cited Avalanche tx, as a fully verified on-chain fact | **CLAIM / unverified tx** | **FACT** that Goldberg tweet 5 said “Re7 and K3 updated the oracle configuration and hardcoded the value to 1” and linked `snowtrace.io/tx/0xe9d9880c6…`. The hash is **truncated**; this pass did not decode a K3 governor / oracle-router call from that stub. No matching `@k3_capital` X post. Keep Grok’s “Goldberg stated…” framing; do not paste the stub as a verified K3 tx. |
| K3 2025-05-27 cap/LTV tweet as a source *for the 29 May incident* | **misleading as incident evidence** | Tweet [1927355449155756124](https://x.com/k3_capital/status/1927355449155756124) is a **pre-spike** market update (sdeUSD cap $10m, USDT limits $70m), posted **2025-05-27**, two days *before* the VWAP. Listing params belong in the May 23 listing thread, not as a 29 May response. |
| “May 2026 Resolv exploit on Euler base markets” (exclusion list) | **WRONG month** | Resolv unauthorized mint is **2026-03-22**. Euler’s own Resolv notices sit on **DAO Frontier Plasma** and **Euler Arbitrum Yield**, not K3. K3 BNB USR vault `0x88A81184243c561026973d25384651E6cc0796A4` still `deprecated: false`, `portfolioNotice: null` on Euler metadata **2026-09-15**. Grok was right **not** to write a K3 Resolv *loss* row; the month in the exclusion line is wrong. |
| `k3-capital.net` as K3 secondary marketing | **too generous** | Unverified / impersonation risk. Official labels URL is `k3.capital`. |
| `funds_recovered: unknown` on the November unwind | **incomplete** | Grok missed Euler labels + live metadata `portfolioNotice` on `k3-avalanche`: ~**80%** Elixir recovery via [Elixir 2026-03-17](https://x.com/elixir/status/2033922212986597612); **claim period expired**. Prefer `funds_recovered: partial` (portal offered; K3 accept/reject not found). Status stays **disputed**. |
| `Any new incident since 2026-09-15: none` | **circular** | Query date = report date. Fine as a same-day check; do not treat it as a forward-looking all-clear. |
| Morpho forum posts as if they were living risk docs | **stale-but-present, not “active”** | Grok’s standing call **`stale`** is the right bucket. Morpho **app** on all three K3 vaults: “Curator has not submitted a Disclosure.” Forum listing posts (May 2025) are one-off rationales. |

---

## 2) What Grok got right (keep)

- **Two dated curator events, not stacked.** May 29 oracle / November 4 collateral. Types `oracle` / `collateral`, severities Med / High, statuses `resolved` / `disputed`. Reasonable.
- **`usd_lost: unknown` on both rows.** Keep. Do not fill Goldberg $532k or press $2m into the money fields.
- **2025-05-23 listing.** **FACT.** [K3 tweet 1925971437031965017](https://x.com/k3_capital/status/1925971437031965017): deUSD/sdeUSD into the Avalanche Euler cluster; LTVs match Grok (92.5% deUSD vs sdeUSD; 90%/85% USDT/USDC vs deUSD/sdeUSD).
- **Thin Curve swap → Chainlink VWAP → Avalanche liquidations.** Directionally **FACT** as Goldberg’s contemporaneous thread (blocks 62918673 / 76 / 77; jaredfromsubway ~210k USDT / ~202k deUSD; print ~$1.0283). Blocks exist: [62918676](https://snowscan.xyz/block/62918676) 2025-05-29 05:52:33 UTC (1 tx); [62918677](https://snowscan.xyz/block/62918677) 05:52:34 UTC (14 txs).
- **Malfunction vs VWAP-as-designed.** Grok labeled Goldberg “malfunction” as **CLAIM** and Rynes / The Block “VWAP as designed” as **FACT (advocate)**. Keep that split. Unchained and Crowdfund Insider carry the same debate.
- **No proven K3 lender hole from the May spike.** Agree. Sampled liquidation path is Re7, not K3 deUSD vault.
- **November Stream / Elixir facts.** Stream ~$93m manager loss and halt; Elixir ~$68m toward Stream; deUSD sunset. Matches [The Block 2025-11-06](https://www.theblock.co/news/markets/2025-11-06-elixir-sunsets-deusd-synthetic-stablecoin-following-stream-finance-unwinding-aims-full-redemptions-377961).
- **K3 deUSD vault `0xe1e549c965a4a0514d9bf80161d32924b8694822` later ~$40k vs ~$9.55m peak.** **FACT** as Trading Strategy prints ([k3-capital-cluster-9](https://tradingstrategy.ai/vaults/k3-capital-cluster-9): peak 9,552,091.989 deUSD; later ~40,220 deUSD). Peak ≠ loss. Grok did not treat peak as `usd_lost`.
- **Discord legal threat = CLAIM; $2m leftover = CLAIM; not on K3 X = RUMOR/unverified.** Agree. Bankless 2025-11-07 (YAM screenshot of Euler Discord). PANews/Odaily/Gate cite the same Discord + “Simeon.” No retrieved `@k3_capital` quantification.
- **K3 did not list Stream xUSD.** **FACT** (CBB / Protos). deUSD is a separate listing. Grok handled this correctly and did not give K3 a clean bill.
- **Euler FAQ: Stream/Elixir/Stables Labs isolated to curator vaults; curators chose oracles/collateral.** **FACT** that Euler said so ([Euler 2025-11-14](https://x.com/eulerfinance/status/1989388982783025238)).
- **Critics:** Goldberg thread + The Block / Unchained for May; YAM + Euler compensation thread page 2 (rzo names **K3 USDT vault** + OKX wallet) for November. Confirmed on [forum page 2](https://forum.euler.finance/t/request-for-a-formal-governance-proposal-regarding-compensation-for-users-affected-by-the-elixir-and-steam-labs-collapse/1708?page=2).
- **Lesson on May: no.** Same deUSD listing still live six months later. Agree.
- **Exclusions that are correct:** Euler v1 2023 (pre-K3); April 2026 DAO handover *to* K3 (ops transfer, not a loss — [forum 1828](https://forum.euler.finance/t/sunsetting-of-dao-managed-market-and-vaults/1828), 2026-04-10: K3 takes Euler Prime, Euler Yield, several Monad isolated, Arbitrum Theo, Euler Arbitrum, several Earn vaults); Morpho Unichain ETH Maxi / Core as *loss* events (none sourced).
- **Active since 2025-04.** **FACT** as Euler curator. [K3 2025-04-10 live tweet](https://x.com/k3_capital/status/1910310544654876981); Trading Strategy savUSD cluster data from ~2025-04-09; H1 recap “Since April, we have brought $148 million in TVL to this cluster via Avalanche.” Firm dates itself to 2021 as an asset manager — CLAIM, not the curator start month.
- **PoC: X `@k3_capital`.** **FACT.** **TG `@k3alpha`:** **FACT** that [t.me/k3alpha](https://t.me/k3alpha) exists as “K3 Capital Alpha”; Substack footer has pointed at `@k3alpha`. Keep both.
- **No sourced Morpho-vault exploit / pause / oracle failure unique to K3 Unichain.** Agree as of this pass.

---

## 3) Unverified (do not invent)

- Crystallized K3 depositor haircut in dollars or % of vault TVL for either incident.
- Decoded contents of Goldberg’s truncated hardcode tx `0xe9d9880c6…` (which contract, which governor, Re7 vs K3).
- Court docket for the cease-and-desist / civil complaint K3 said it was preparing.
- Whether residual deUSD after the Nov 4 forced sale sat in the cluster vault vs K3’s own book.
- Whether K3 (or K3 depositors) accepted Elixir’s 2026-03-17 portal (release of Elixir, Euler, and certain curators). Bankless: K3 had not issued a public statement on the settlement at publication.
- Exact Curve swap tx on Ethereum for the May 29 VWAP (Grok / Goldberg attribute ~210k USDT / ~202k deUSD to jaredfromsubway; not independently decoded here).
- H1 recap AUM “$570M+” / curated “$250M” / Morpho ~$44m across three vaults — stale CLAIMs vs 2026-09-15 Morpho TVL (ETH Maxi ~$21.7k, Core dust, Pendlend USDT ~$1.2k).

---

## 4) Missing from Grok (add in merged)

1. **Elixir ~80% recovery portal + Euler `portfolioNotice`.** Labels `43114/products.json` product `k3-avalanche` and live metadata on deprecated deUSD vault `0xe1E549…822`: eligible users could claim ~80% via Elixir 2026-03-17; **claim period expired**. Same notice on Re7 / Keyring Avalanche clusters. Deprecated K3 vaults include deUSD `0xe1E549C965A4A0514D9bf80161D32924b8694822` and USDT `0xa446938b0204Aa4055cdFEd68Ddf0E0d1BAB3E9E`.
2. **Full liquidation hash** `0xe40c80e0ec5af4041d84a7ba0654a39bb2615ddf82d1b3824cef679ff78424bd` and the **sampled Re7-path liq** in the same block. Use these instead of Goldberg’s truncated stubs.
3. **Morpho UI: “Curator has not submitted a Disclosure”** on ETH Maxi, Core Market, and Pendlend USDT. Forum listing posts exist; the *app* disclosure does not.
4. **May 27 tweet is a pre-incident cap raise**, not a 29 May IR post. Apr 10 2025 “Avalanche cluster live” tweet supports `active since 2025-04`.
5. **Resolv month correction + K3 BNB USR still listed with no notice** after 2026-03-22. Listing ≠ incident; it is the later test of the deUSD listing lesson.
6. **`k3-capital.net` impersonation / unverified**, not official marketing.
7. **Sampled May liquidation is Re7-path**, so do not imply the $532k ran through K3’s deUSD vault.

---

## 5) What to add/change in `merged.md`

- Ingest Grok. Two blocks. Prefix **`K3-`**. Keep Grok titles (`deUSD oracle`, `deUSD unwind`) and dates (`2025-05-29`, `2025-11-04`).
- `usd_lost` / `pct_of_that_vault_tvl`: **unknown**. Put $532k and $2m in prose with labels.
- Vault URL: prefer the deUSD vault `https://app.euler.finance/vault/0xe1E549C965A4A0514D9bf80161D32924b8694822?network=avalanche` (Grok used the cluster market query string; same product).
- Incident 1 `funds_recovered: n/a`. Incident 2 `funds_recovered: partial` (Elixir portal / Euler notice; K3 statement not found). Status **disputed**.
- Standing: risk docs **stale** (agree with Grok; Morpho app has no disclosure). Active since **2025-04**. PoC **X: @k3_capital ; TG: @k3alpha**. No new *loss* incident sourced after November 2025 through 2026-09-15 (Elixir portal is recovery, not a new hole; Resolv is not a K3 loss row; DAO handover is ops).
- Lesson: May hardcode $1 stops *up* VWAP on deUSD *debt*; November *down* depeg is the opposite problem. Same listing stayed live. After November, vaults deprecated + Elixir notice. They **still** list Resolv USR on BNB with no notice.

---

## Sources used against Grok

- primary: https://x.com/k3_capital/status/1925971437031965017 (listing)
- primary: https://x.com/k3_capital/status/1927355449155756124 (pre-spike caps, 2025-05-27)
- primary: https://x.com/k3_capital/status/1910310544654876981 (Avalanche live, 2025-04-10)
- primary: https://x.com/omeragoldberg/status/1928149177000726973 and https://threadreaderapp.com/scrolly/1928149177000726973
- primary: https://snowscan.xyz/block/62918676 ; https://snowscan.xyz/block/62918677
- primary: https://snowscan.xyz/tx/0xe40c80e0ec5af4041d84a7ba0654a39bb2615ddf82d1b3824cef679ff78424bd
- primary: https://snowscan.xyz/tx/0xe5f9aef8a8590b1d6f0de039e8466170483a587ffed8bc87101ca390bbb61d41 (sampled Liquidate, Re7 path)
- primary: https://github.com/euler-xyz/euler-labels/blob/master/43114/products.json
- primary: https://app.euler.finance/api/public/metadata?chainId=43114&addresses=0xe1E549C965A4A0514D9bf80161D32924b8694822
- primary: https://app.euler.finance/api/public/metadata?chainId=56&addresses=0x88A81184243c561026973d25384651E6cc0796A4 (BNB USR, no notice)
- primary: https://x.com/elixir/status/2033922212986597612
- primary: https://x.com/eulerfinance/status/1989388982783025238
- primary: https://forum.euler.finance/t/sunsetting-of-dao-managed-market-and-vaults/1828
- primary: https://forum.euler.finance/t/request-for-a-formal-governance-proposal-regarding-compensation-for-users-affected-by-the-elixir-and-steam-labs-collapse/1708?page=2
- primary: https://forum.morpho.org/t/k3-capital-eth-maxi-on-unichain/1803
- primary: https://forum.morpho.org/t/k3-capital-core-market-on-unichain/1804
- primary: https://dune.com/capital_k3/k3-avax-euler
- primary: https://t.me/k3alpha
- commentary: https://www.theblock.co/news/markets/2025-11-06-elixir-sunsets-deusd-synthetic-stablecoin-following-stream-finance-unwinding-aims-full-redemptions-377961
- commentary: https://www.bankless.com/read/news/k3-capital-threatens-legal-action-against-elixir-over-deusd-depeg
- commentary: https://www.bankless.com/read/news/elixir-launches-usdc-recovery-portal-for-lenders-impacted-by-stream-insolvency
- commentary: https://unchainedcrypto.com/trader-loses-500k-after-illiquid-deusd-market-triggers-vwap-spike/
- commentary: https://www.crowdfundinsider.com/2025/06/240883-chainlink-oracle-mishap-triggers-500k-defi-liquidation-sparks-debate/
- commentary: https://www.panewslab.com/en/articles/70acea07-20ed-4248-a02e-60542dd1fdf5 ($2m leftover CLAIM)
- commentary: https://protos.com/stream-finance-meltdown-winners-and-losers-in-defi-risk-curator-reckoning/
- commentary: https://tradingstrategy.ai/vaults/k3-capital-cluster-9 (peak TVL ≠ loss)

## Taxonomy applied 2026-09-16 (Class v3)

- **Keep:** `DEUSDORACLE` non-materially-affected **direct-curator-fault** (borrower liqs; no sourced K3 vault NAV hole; oracle they listed); `DEUSDUNWIND` affected **High**. Count `1H 0M 0L 1D 0I`.
