---
cursor:
  subagentId: "bc-1c15fe82-d4db-523c-8d5c-33b03c315319"
---

# Hakutora — Grok vs reality

**As of:** 2026-09-16  
**Grok paste:** `/cursor/stores/bc-ed376285-88c8-478c-b177-6340e8173377/docs/curator-dd/hakutora/twitter-grok.md` (real paste, 1 INCIDENT: `HAKUTORA-20251105-DEFENSIVE`). Independent Morpho Blue API / app, DefiLlama, X/fxtwitter, forum, Protos, Pharos, Dune, Trading Strategy, hakutora.xyz check against the same curator.

**Grok did well on the job that matters:** one dated curator-scoped event, no invented Hakutora USD-lost or TVL-%, Stream/xUSD kept off the loss list, June 2026 RLP/USDC market bad debt not assigned to this vault, empty-critic and no-Euler-loss calls match.

Do not invent `usd_lost` or `pct_of_that_vault_tvl`. Labels: **FACT** / **CLAIM** / **RUMOR**.

---

## 1) Keep (Grok matches primary sources)

| Grok | Verdict |
|---|---|
| ID `HAKUTORA-20251105-DEFENSIVE`; type `collateral`; severity Low; `usd_lost: unknown`; `pct: unknown`; `funds_recovered: n/a`; `status: resolved` | Keep. One dated incident. No sourced depositor NAV haircut. |
| 2025-11-05 X post: Hakutora USDC in a “defensive” state; mix **85.52% cbBTC** / **14.47% RLP**; RLP “does not include any USDX exposure” | **FACT** as curator-stated — [tweet 1985994409549389849](https://x.com/0xhakutora/status/1985994409549389849) at **2025-11-05 08:55:39 UTC**. Independent reconstruction of those exact percents was not done; they are the curator’s screenshot/text, not a third-party tape. |
| Stream xUSD loss disclosure **2025-11-04**; USDX depeg in the following days | **FACT** — Protos 6 Nov 2025; Pharos timeline Nov 4–8 2025. |
| MEV Capital, Re7, TelosC (and others) disclosed xUSD/USDX/deUSD losses; Hakutora is **not** named as a loser | **FACT** — [Protos](https://protos.com/stream-finance-meltdown-winners-and-losers-in-defi-risk-curator-reckoning/). Hakutora is also not in Protos’ “winners” list. |
| Vault URL Hakutora USDC `0x974c8FBf4fd795F66B85B73ebC988A51F1A040a9` | **FACT**. Morpho app + Blue API. |
| Later blue-chip tilt: USDC V1 supplying cbBTC/USDC 86% (`0x64d65c9a2d91c36d56fbc42d69e979335320169b3df63bf92789e2c8883fcc64`) | **FACT** as of 2026-09-16: **$17.44M** of **$17.44M** vault assets in that market (Grok’s ~$17.6M is a slightly stale round). Realized bad debt on that market: **0**. |
| Risk docs **none**; PoC X `@0xhakutora`; site https://hakutora.xyz/; Morpho-only Ethereum; no Euler vaults | **FACT**. Morpho UI: “Curator has not submitted a Disclosure.” Forum category empty except the 6 Mar 2025 placeholder. Euler labels search: no Hakutora. |
| Owner `0x76c303fA012109eCBb34E4bAf1789c3e9FbEb3A4` | **FACT** as MetaMorpho **creator/owner** and DefiLlama `morphoVaultOwners` ([dimension-adapters `curators.ts`](https://github.com/DefiLlama/dimension-adapters/blob/master/factory/curators.ts)). |
| Listed vaults USDC `0x974c8FBf4fd795F66B85B73ebC988A51F1A040a9` and USDT `0xa71D08A159258553a5Ac190d60Fa919425Ff02EA`; small WETH `0x6ACa9D74215e9512d9608aFF3e87dac0d9ce6218` | **FACT**. |
| DefiLlama TVL recently ~$23–25M vs site copy ~$40M | **FACT**. Llama **$23.86M** (2026-09-16); site still says “Since February 2025, we’ve accumulated $40M.” Peak Llama **$61.96M** on **2025-03-19**. |
| June 2026 RLP/USDC realized bad debt is a **market** fact, not a sourced Hakutora-vault fact; Dune text: absorbed by “a niche vault and the collateral issuer, not the major curators”; Hakutora not named | Keep the split. Morpho UI **1.181M USDC** realized; Dune **1,181,254**; Blue API **$1,181,091.67**. Do **not** paste any of those as Hakutora `usd_lost`. Current Hakutora USDC `marketPosition` on that RLP market: **0**. `supplyingVaults`: **[]**. |
| Critics none; RUMOR none; no pause tx / loss post-mortem | **FACT** in this pass. |
| Trading Strategy USDT series starts **2025-01-22** | **FACT**. USDC series starts **2025-01-20**. |

---

## 2) Wrong (change)

| Grok | Label | Fix |
|---|---|---|
| “No later primary source shows whether the 14.47% RLP sleeve was cut” / no cap-cut tx write-up | **WRONG** as of independent on-chain | Same-day curator reallocate **2025-11-05 13:19:35 UTC** (4h24m after the tweet) moved **2,000,006.82 USDC** RLP → cbBTC: [0x367bcb16aa008637…](https://etherscan.io/tx/0x367bcb16aa008637b21eec34aab91cb89e551de51615ebc0bf446d9ae1386663). Dust RLP withdraw 2025-11-07. **RLP supply cap set to 0** on **2026-03-22 16:19:35 UTC** (Resolv week): [0x42077e7fd71f2e52…](https://etherscan.io/tx/0x42077e7fd71f2e52c063230697060bc371d1e8cf6c4329e1650966dcbf5b1594). Current RLP position **0**. They never published those txs. |
| “curator said public launch **2025-02-01**” | Unsourced as a curator quote | `@0xhakutora` joined **2025-03-02**; this pass found **no** tweet saying 2025-02-01. Site says “Since February 2025, we’ve accumulated $40M.” Vaults **deployed 2025-01-16**. Treat Feb 2025 as **marketing**, Jan 2025 as **deployment**. |
| Morpho whitelist “by **2025-03-07**” as if it were all vaults | Incomplete | **FACT** for Hakutora USDC: `listingHistory.Added` **2025-03-07 16:09:43 UTC**. Hakutora USDT listed **2025-09-15 04:24:41 UTC**. Forum category created **2025-03-06** ([topic 1582](https://forum.morpho.org/t/about-the-hakutora-category/1582)), not a whitelist post. |
| WBTC “dust/small supplier on LBTC/WBTC” with no address | Weak / incomplete | Separate unlisted vault **Hakutora WBTC** `0xc82b74bC114D7e2D4047Ccf14f7a6109b654Ab91` (~$24.7k, 1-day timelock). Not reconstructed as an LBTC market. |
| Defensive mix “Resolv disclosures” | Over-precise vs tweet | Tweet: “according to recent disclosures, this does not include any USDX exposure.” It does **not** name Resolv. RLP **is** Resolv’s junior token, so the inference is reasonable **CLAIM**, not FACT that Resolv published a no-USDX attestation that day. |
| `protocol_or_vault_url` is fine; Grok also linked the cbBTC market as a source | Keep vault URL | Market URL is supporting, not the incident vault. |

---

## 3) Unverified / CLAIM (do not paste as FACT)

- **Exact 85.52 / 14.47 split** — curator-stated only. Not rebuilt from Morpho allocations at 08:55 UTC.
- **No USDX inside that RLP sleeve** — curator **CLAIM**. Independent Resolv-reserve reconstruction for 2025-11-05 was not done.
- **Residual RLP after the 2.00M USDC reallocate.** 14.47% of ~$30.70M EOD TVL would be ~$4.4M if the tweet mix applied to that day’s Llama/Morpho TVL (that % was **not** curator-tied to a dollar TVL). Next RLP vault reallocate in the admin log is a **1-unit** dust withdraw on 7 Nov. User withdrawals that week (TVL **$32.03M** 4 Nov → **$22.59M** 12 Nov) could have drained the rest via the withdraw queue; that path is **CLAIM**, not reconstructed.
- **Public launch 2025-02-01** — Grok. Not found.
- **“Optional automatic withdrawal” in extremes** — site marketing, not a documented Morpho guardian/sentinel policy.
- **Dune 82% of Morpho supply in zero-bad-debt markets / $1.18M “niche vault” absorber** — commentary. Useful for *not* tagging Hakutora; not a Hakutora primary.
- **Trading Strategy lifetime max DD 0.0%** — vendor methodology. Consistent with Morpho share-price windows below, not an audit.
- **Krain AI “Hakutora” 2026 threat-hunting agent** — name collision. Not this curator.

---

## 4) Missing (add in `merged.md`, not as extra loss incidents)

1. On-chain **roles**: owner/creator `0x76c303fA012109eCBb34E4bAf1789c3e9FbEb3A4`; Morpho `curator(id:"hakutora")` addresses `0x2413A57FBD695f6B13C1D8d7D30EE10fa61b1b02`, `0x345023d92f3051bB2B68DF79dFf760EccFEE80ED`; allocators `0x182f395622Eb1c9152FAa76085d8e7f2392b579f` (all vaults) and USDC also `0x1c7e55e00cB9c69C63Fe463147f9B628495FE748` (SAFE 2/3); fee recipient `0x7aa536c797536e94ec3cb94076ee2f3ec42bd316`; 15% performance fee; listed vaults 3-day timelock, unlisted 1-day.
2. Full vault inventory (Blue API 2026-09-16): listed USDC **$17.44M** + USDT **$6.30M**; unlisted cbBTC `0xba04de02ED8cecc3befb8575a95d56D901c9C602` ~$94.3k; WBTC `0xc82b74bC…` ~$24.7k; DAI `0x42D425Fb918acBbd73B10B851979E8fc469B3e9A` ~$2.5k; WETH ~$12. **No Morpho V2, no other chain, no Euler.**
3. **Same-week ops Grok skipped:** 5 Nov RLP→cbBTC **~$2.00M** tx above; 7 Nov `setCap` **sdeUSD = 0** ([0xa2a53d94…](https://etherscan.io/tx/0xa2a53d94bf0c3a938033f5ac0f0713c95d9bdff480f018589ff2d83f4b9e84a7)) and dust withdraws of RLP / USD0++ / syrupUSDC; 3 Dec 2025 cap-zero on PT-USDe, PT-sUSDE, PT-cUSDO, slvlUSD, srUSD, csUSDL, syrup PTs (yield-sleeve cleanup, **not** a loss row).
4. **Share-price tape (no haircut):** Hakutora USDC `sharePriceUsd` 4–12 Nov 2025 **1.05390 → 1.05486**; 20–28 Mar 2026 **1.06565 → 1.06607**; 1–10 Jun 2026 **1.07129 → 1.07239**. TVL fell in Nov via withdrawals, not NAV.
5. USDT live book (2026-09-16): **~$6.28M** wstETH/USDT 86%, **~$26k** WBTC/USDT 86%, PT-USDe-25SEP2025 cap **0**.
6. Morpho USDC listed 7 Mar 2025; USDT listed 15 Sep 2025; DefiLlama protocol listed 20 May 2025; X location Tokyo; **5** tweets / **148** followers.
7. Empty Morpho forum category (only [About](https://forum.morpho.org/t/about-the-hakutora-category/1582)).

**Do not add as incidents:** Morpho Bundler3 frontend Apr 2025 (protocol UI, not this curator); Stream/xUSD/USDX/deUSD **losses at other curators**; Resolv Mar 2026 unbacked mint (Hakutora share price did not drop; RLP cap already going to 0 that day); 2026-06-06 RLP/USDC **$1.18M** market bad debt; Krain AI namesake.

---

## 5) What to add/change in long-form

- Keep Grok’s ID and 1–2 word title (`Defensive`).
- Keep `usd_lost: unknown` and `pct: unknown` (no curator dollar figure; do not mint 0 from the share-price tape).
- Keep `status: resolved` (no remaining sourced Hakutora loss; RLP position 0).
- In `what_actually_happened` / `response_summary`, add the **5 Nov reallocate tx**, **7 Nov sdeUSD cap-zero**, and **22 Mar 2026 RLP cap-zero**.
- Standing: risk docs **none** (not stale — they never published vault DD). Active since **2025-01** (deploy) / marketing **2025-02**. Lesson: they cut USDX-adjacent and Elixir sdeUSD quickly, but **RLP remained a listed market with a non-zero cap until Resolv week**.
- No second incident row.

---

## Independent research notes (not Grok)

- Morpho curator page: https://app.morpho.org/curator/hakutora — **$23.73M** deposits (USDC V1 + USDT V1).
- DefiLlama: https://defillama.com/protocol/hakutora — **$23.86M**, Ethereum 100%, twitter `0xhakutora`.
- Tweet retrieved via fxtwitter (x.com 403 in this environment); snowflake time matches 2025-11-05 08:55:39 UTC.
- No Morpho/Euler MCP in this run; Blue API `https://blue-api.morpho.org/graphql` + public UIs used instead.

## Taxonomy applied 2026-09-16 (Class v3)

- **Keep:** `HAKUTORA-20251105-DEFENSIVE` non-materially-affected **indirect-curator-fault** (was Prec; defensive realloc; share price did not fall). Count `0H 0M 0L 0D 1I`.
