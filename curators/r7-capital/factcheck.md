---
cursor:
  subagentId: "bc-ad41d4d2-82dc-57e0-89a4-b0c81e9031c6"
---

# Re7 Capital / Re7 Labs — Grok vs reality

**As of:** 2026-09-15  
**Grok paste:** present. Path `docs/curator-dd/r7-capital/twitter-grok.md`. Five INCIDENT blocks + standing checks. Real curator narrative, not the template.

**Entity:** Folder slug `r7-capital`. Public curator brand is **Re7 Labs**, innovation arm of **Re7 Capital**. No separate Morpho/Euler curator named “R7 Capital” was found. Grok got this right.

**ID prefix:** Assignment is `R7`. Grok used `R7CAPITAL`. Change every `incident_id` to `R7-YYYYMMDD-SLUG`. Shared-event suffixes should match other curator folders: Stream → `20251104-STREAM`, Resolv → `20260322-RESOLV` (Gauntlet used those suffixes).

**How this was checked:** Morpho app + GraphQL (`api.morpho.org`), Euler public metadata + app vault pages, Re7 Labs site/blog, Morpho forum (Pyth thread JSON with Basescan txs), Lista DAO blog (LIP-022 recap), Morpho curator security docs, Re7 X via fxtwitter where the tweet still resolved, DefiLlama Re7 Labs TVL, ChainCatcher/Bitget paraphrases of the Nov 2025 Re7 recap (original Nov 4 / Nov 8 tweet bodies 404’d on fxtwitter this pass), OAK / Unified Labs / Beosin / Protos / CoinDesk. No Morpho/Euler MCP.

Do not copy a Grok USD-lost or TVL-% into the sheet. Grok correctly left those `unknown`. Do not promote Re7 “impact” figures ($14.65M, $13.974M, $13.114M) or the 223,000 USDC Merkl pool into `usd_lost`.

---

## 1) Wrong

| Item | Grok | Reality |
|---|---|---|
| Opening line “March **2024** cbETH/Pyth liquidation” | **WRONG** | **FACT:** liquidations 2025-03-02 16:39:35–16:44:03 UTC. Grok’s own INCIDENT date is correct; the preamble is not. TheBigWhale-style recap that Grok itself flags also misdates it to March 2024. |
| `incident_id` prefix `R7CAPITAL-` | **WRONG** vs assignment | Use `R7-`. Example: `R7-20250302-PYTHLAG`. |
| Blockworks URL `blockworks.com/news/defi-accountability-morpho-pyth` | **WRONG** host | Live piece is [blockworks.co/news/defi-accountability-morpho-pyth](https://blockworks.co/news/defi-accountability-morpho-pyth). |
| Stream block as **one** incident covering xUSD **and** Elixir deUSD/sdeUSD | **WRONG** vs “one dated event” | Stacked. Split Elixir (see missing). Stream insolvency date is 2025-11-04; Elixir allocation request was 2025-10-21; Plume sdeUSD repayment 2025-11-06. |
| USDX incident `status: resolved` | **WRONG** if read as all Re7 USDX/sUSDX exposure closed | **FACT:** Lista LIP-022 forced-liq on the Re7 USD1/USDX *Lista* vault (2025-11-06) and later LIP-023 481,801.15 USD1 profit claims. **FACT:** contemporaneous Lista/CryptoTimes figures still had ~2.09M USD1 leftover moved to a public liq pool. **CLAIM (Re7 recap, via wire):** Stable Labs “total impact” ~$13.114M, which includes Euler BSC / sUSDX, not just Lista. Treat Lista as partial recovery, Euler residual **unresolved**. |
| Hardcoded $1 USR oracle labeled only **CLAIM (OAK)** | **Too weak** | **FACT** of the attack class: Morpho’s own curator doc ([donation / faulty oracle, V1](https://docs.morpho.org/curate/concepts/security-considerations/)) and Unified Labs post-mortem. Multiple independent write-ups state the USR/wstUSR Morpho markets used a fixed ~$1 feed. Keep “Re7 chose that oracle” as curator **FACT** of listing; do not need OAK as the sole label. |
| Re7 WETH “Market Risk Disclosures … Curator has not submitted a Disclosure” as a live 2026-09-15 UI string | **UNVERIFIED / likely stale UI copy** | This pass’s Morpho Re7 WETH page shows a generic Re7 Labs risk warning + **“No ratings available.”** Still enough to score risk docs **stale**. Do not quote a string that is not on the current page. |
| Hindenrank “Pyth pull-oracle lag caused the xUSD bad debt” (if a later sheet cell copies Hindenrank as if Grok endorsed it) | **WRONG** | Grok correctly parked Hindenrank’s **$27.4M** as commentary. Do not also import Hindenrank’s oracle mix-up: xUSD was Stream backing / circular collateral, not the March 2025 Pyth cbETH push-feed bug. |

---

## 2) Unverified (keep `unknown` / do not invent)

- **Any USD lost or % of vault TVL.** Grok left these unknown. Independent pass agrees.
- **$14.65M Plasma xUSD/USDT0** — Grok marks FACT as Re7’s 2025-11-04 statement ([tweet 1985694621251387506](https://x.com/Re7Labs/status/1985694621251387506)). This pass **could not retrieve that tweet body** (fxtwitter 404). Wire paraphrases (ChainCatcher 2025-11-09, Bitget/Foresight) describe the same recap without always printing $14.65M. **Corroboration, not a loss:** Trading Strategy still indexes Euler Plasma `Re7 Labs xUSD` `0xF675FBe777E992f5D5D84AdF41161dC0f20104a6` at **~$14.3M TVL**, share price **~1.014**, 0% displayed drawdown, flagged **illiquid / blacklisted**, deposits capped. That print is accounting TVL, not recovered cash. Leave `usd_lost` unknown.
- **$13.974M Elixir “total impact”** and **$13.114M Stable Labs “total impact”** — same Re7 recap, recovered here from news paraphrases of [tweet 1987204592283832531](https://x.com/Re7Labs/status/1987204592283832531) (body also 404 this pass). Treat as **CLAIM (Re7-stated impact)**, not crystallized haircut.
- **$27.4M / $27M combined** — **CLAIM** (Hindenrank, Metaverse Post headline). Grok is right that it is not a signed Re7 P&L. Arithmetic $13.974M + $13.114M ≈ $27.1M is commentators adding two Re7 impact lines, and it **omits** leftover Stream xUSD if that $14.65M was still stuck.
- **02:46 UTC detect / 03:00–03:02 UTC caps-to-0 on USR** — **CLAIM (Re7 / OAK citing Re7)**. The public X update [2035770653261869480](https://x.com/Re7Labs/status/2035770653261869480) is **2026-03-22 17:28:41 UTC** and cards a Base tx at **11:23:17 UTC**, not 03:00. Do not treat 02:46 as an on-chain timestamp unless the cap-zero txs are attached.
- **“184 curated markets, only two small Morpho markets hit”** — **CLAIM (Re7)**. Live Morpho GraphQL still lists many Re7-owned vaults; “184 markets” was not re-counted here.
- **mRe7YIELD / mRe7BTC zero Stream and zero USR** — **CLAIM (Re7)**. Consistent with independent curator-loss lists not naming those products; not a reconstructed allocation dump.
- **Nov 21 2025 “Morpho Worldchain sdeUSD fully recovered, treasury exposure −50%+”** — Grok put “partial” recovery in the Stream response_summary without this figure. RootData/wire copy of a later Re7 legal update. **CLAIM** until the tweet/on-chain unwind is attached.
- **@Re7labssupportlive** — Grok already says treat with care. Official site footer is invite-link Telegram + **X: @Re7Labs**. Do not put the unverified TG in the sheet as PoC.
- **Tony Fuling / Protos tweet 2036146851624128647** — not fetched this pass. Keep as Grok-cited critic URLs.

---

## 3) Missing from Grok (add these)

1. **Split Elixir** — `R7-20251104-ELIXIR`. Re7’s own recap: Oct 21 Elixir asked $6–7M from Euler Earn USDT0 on Plasma; 100% util on deUSD/sdeUSD; Oct 27 Stream link found; Plume sdeUSD repaid by Nov 6; residual “impact” cited on Worldchain Morpho + Euler Avalanche/Plasma. Vault URL: [Euler Earn Re7 USDT0 Core, Plasma](https://app.euler.finance/earn/0xa5EeD1615cd883dD6883ca3a385F525e3bEB4E79?network=plasma).
2. **Avalanche Cluster stuck withdrawals** — `R7-20251209-CLUSTER`. Euler forum 2025-12-09: deprecated Re7 Labs Cluster USDC, `E_InsufficientCash`. Vault `0x39dE0f00189306062D79eDEC6DcA5bb6bFd108f9`. Symptom of Nov cascade, not a new root exploit. Do not add a second USD-lost number.
3. **Pyth liquidation txs** (primary, Grok omitted): [0x90a2b7fd…](https://basescan.org/tx/0x90a2b7fd5d1e54bba73a20150f587d3c96eccdde2c858e8a9ab63976ba383a6c), [0xe33c71ce…](https://basescan.org/tx/0xe33c71cefae58f1e0b5ae2dd8a6812d4c4364c40a576107e29fa54a2476e6860), [0x77b2cf69…](https://basescan.org/tx/0x77b2cf6989255f3d1cefef80fb81c6a85047afa08e08235527e120b5dfab348a). Price-update txs in the same Re7 forum post.
4. **Pyth ETH vault** (curator product that sourced that market): Base `0x80D9964fEb4A507dD697b4437Fc5b25b618CE446` — [app.morpho.org](https://app.morpho.org/base/vault/0x80D9964fEb4A507dD697b4437Fc5b25b618CE446/pyth-eth).
5. **USR: both vaults + live share price.** Grok’s URL is only Re7 USDC Core (Ethereum `0x341193ED…`). Also hit: Re7 USDC Base `0x12AFDeFb2237a5963e7BAb3e2D46ad0eee70406e`. **FACT (Morpho GraphQL 2026-09-15):** Base vault `sharePriceNumber` **0.205186** (totalAssets ~48.09k USDC / totalSupply implying ~80% NAV haircut on remaining shares). Core share price **1.058**. 223k USDC Merkl ≠ share-price restore.
6. **Morpho V1 donation/security doc** as a primary, not only OAK: https://docs.morpho.org/curate/concepts/security-considerations/
7. **Lista leftover ~2.09M USD1** and flash-loan print 3,526,011 USDX / 2,927,163 USD1 recovered (Lista/CryptoTimes 2025-11-06/07), distinct from the 481,801.15 USD1 *profit* Grok cites.
8. **Protos original C&D article** instead of BitcoinEthereumNews scrape: https://protos.com/re7-labs-threatens-whistleblower-over-exposure-to-yield-vault-collapse/
9. **Vault map** (Grok standing checks skip inventory). Live 2026-09-15: DefiLlama Re7 Labs **~$86.5M** across 16 chains (World Chain ~$25M, Avalanche ~$20M, Plasma ~$14M). Morpho GraphQL: 45 vaults with Re7 owner safes; largest Morpho prints World Chain Re7 USDC `0xb1E80387…` ~$10.5M and Re7 WLD `0x348831b4…` ~$9.2M. Euler clusters on ETH/BSC/Avax/Plasma/Linea/Sonic/Bera/BOB/TAC. First Morpho vault: Re7 WETH `0x78Fc2c2eD1A4cDb5402365934aE5648aDAd094d0`, deployed **2024-01-30**, public launch **2024-02-01** ([Re7 Research](https://re7research.substack.com/p/launching-the-re7-weth-metamorpho)).

---

## 4) What Grok got right (keep)

- Identity: Re7 Capital / Re7 Labs, not a different “R7” shop.
- Pyth: date, 14 ETH, 94.5% LLTV, 1.091 → 1.055 ratio, not manipulation, no vault insolvency, no compensation, `usd_lost` unknown.
- Stream $93M external-manager disclosure + freeze (CoinDesk / Stream X, 2025-11-04).
- Refusing to put $14.65M / $13.974M / $27.4M / 223k USDC into `usd_lost`.
- USDX: Lista LIP-022, Re7 consent, 481,801.15 USD1 profit, LIP-023 claims — matches [Lista blog 2025-11-21](https://blog.lista.org/the-re7-vault-forced-liquidation-a-recap-and-moving-forward). Vault created 2025-06-05.
- C&D via Pillsbury; Re7 “fellow lender” denial; not a new on-chain loss.
- USR: mRe7YIELD zero (Re7); two Morpho USDC vaults named correctly; 223,000 USDC Merkl 2026-06-22 ([tweet 2069005026769445148](https://x.com/Re7Labs/status/2069005026769445148)); Resolv agreement 2026-06-10 ([tweet 2064723385335112167](https://x.com/Re7Labs/status/2064723385335112167)).
- Standing: risk docs **stale**; active since **2024-02**; lesson repeat (synthetics as $1 collateral); no new material curator incident after 2026-06-22 as of 2026-09-15.
- `funds_recovered: none` on Pyth; `n/a` on C&D; `partial` on USR (pool exists, not 100% NAV).

---

## 5) What to add/change in the long-form (done in `merged.md`)

- Prefix `R7-`. Align Stream/Resolv suffixes with Gauntlet. Split Elixir. Add Cluster stuck-funds as ops.
- Attach Pyth txs + Base Pyth ETH vault. Attach both USR Morpho vaults + 2026-09-15 share prices.
- Prefer Protos + Lista blog + Morpho docs + Morpho/Euler app URLs over syndicated scrapes.
- Label Re7 impact dollars **CLAIM**; live Plasma ~$14.3M TVL **FACT** of indexer print, not recovery.
- USDX status **unresolved** (Lista partial, Euler residual). Stream **unresolved**. USR curator process **resolved**, remaining Base NAV **not** restored.
- Standing PoC: **X: @Re7Labs** (site-attested). TG invite on re7labs.xyz; do not sheet `@Re7labssupportlive`.

---

## 6) Primary sources to prefer

- Pyth: https://forum.morpho.org/t/pyth-cbeth-price-feed-is-easily-manipulated-resulted-in-me-losing-33000/1577/8
- Re7 WETH launch: https://re7research.substack.com/p/launching-the-re7-weth-metamorpho (2024-02-01)
- Morpho V1 donation: https://docs.morpho.org/curate/concepts/security-considerations/
- Lista USDX: https://blog.lista.org/the-re7-vault-forced-liquidation-a-recap-and-moving-forward
- Stream freeze: https://www.coindesk.com/markets/2025/11/04/stream-finance-faces-usd93-million-loss-launches-legal-investigation
- C&D: https://protos.com/re7-labs-threatens-whistleblower-over-exposure-to-yield-vault-collapse/
- USR Re7: https://x.com/Re7Labs/status/2035770653261869480
- USR Merkl: https://x.com/Re7Labs/status/2069005026769445148
- Base Re7 USDC: https://app.morpho.org/base/vault/0x12AFDeFb2237a5963e7BAb3e2D46ad0eee70406e/re7-usdc
- Eth Re7 USDC Core: https://app.morpho.org/ethereum/vault/0x341193ED21711472e71aECa4A942123452bd0ddA/re7-usdc-core
- Plasma xUSD: https://app.euler.finance/vault/0xF675FBe777E992f5D5D84AdF41161dC0f20104a6?network=plasma
- Cluster USDC: https://app.euler.finance/vault/0x39dE0f00189306062D79eDEC6DcA5bb6bFd108f9?network=avalanche
- Euler forum stuck funds: https://forum.euler.finance/t/re7-labs-cluster-usdc-stuck-funds-e-insufficientcash-avalanche/1760
- DefiLlama: https://defillama.com/protocol/re7-labs

Commentary (not primary): Hindenrank, Cryptopolitan, BitcoinEthereumNews, Metaverse Post, The Defiant (USR pool size is useful only as a recap of the Re7 tweet).

## Taxonomy applied 2026-09-16 (Class v3)

- **Keep:** `PYTHLAG` affected **Low**; `STREAM` / `ELIXIR` / `USDX` affected **High**; `RESOLV` affected **Med**. Count `3H 1M 1L 0D 0I`.
- **Not on Events tab:** `CEASEDESIST`, `CLUSTER` (lawyer letter / duplicate freeze). Do not paste those as event rows.
