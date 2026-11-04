# Galaxy Curation, merged DD draft

Draft for later human edit. Do **not** paste this into Google Sheets until edited. Combines the ingested Grok narrative (`twitter-grok.md`, 2026-09-15; **0 INCIDENT blocks, expected**) with independent research the same day. Labels: FACT / CLAIM / RUMOR. Do not invent USD lost or %.

Curator slug: `galaxy-curation`. ID prefix: `GALAXY`. Legal name on Morpho vault disclosures: **Galaxy Curation LLC**. Morpho curator id `galaxy` (verified). Parent marketing: Galaxy Digital Inc. (Nasdaq: GLXY). Email: **curation@galaxy.com**. X: **@galaxyhq**.

Grok headline and independent research **agree**: no material, curator-scoped incident as of 2026-09-15.

---

## Curator snapshot (not an incident)

**FACT.** Galaxy Curation publishes Morpho V2 vaults (Ethereum, Base, and dust-size Circle Arc) and documents a Kamino USDT vault on Solana. No Euler vaults found in Euler’s public metadata APIs this pass. Morpho V1 search for “Galaxy” returned no vaults.

**FACT.** First listed Morpho V2 Quality vaults deployed **2026-04-06** (Ethereum USDC and USDT). WETH Quality **2026-04-20**. Base USDC Quality **2026-04-29**. Enhanced **2026-06-16**. Public “Galaxy Curator” / Fireblocks Earn launch **2026-07-16** (Galaxy newsroom, PR Newswire, CoinDesk). Named spokesperson: **Zane Glauber**, Global Head of Distribution.

**FACT.** Owner (ETH + Base): `0x42D510eDeb9257f8D920d5B9f5109D95cB22419d` (Morpho GraphQL + DefiLlama `factory/curators.ts` id `"galaxy"`). Allocator: `0xA13094eCEd689b7419BAbA12851374424c1486f1` (plus `0xD1fCd938008a582E5F356bfe0d92604ffB7d3171` on USDC Quality). Sentinel: `0xB4b1c558af077B34f071B1b6e4cCA0fB8A34aEE0`.

**FACT.** Morpho curator page snapshot this pass: **~$77.4–77.5M** across five listed vaults (four Ethereum + one Base). Trading Strategy peak TVL on Ethereum USDC Quality ~$71.12M and USDT Quality ~$68.5M versus ~$22M each now, share-price max drawdown reported **0.0%**. TVL drop without NAV loss is not an incident.

**CLAIM (Galaxy).** Quality = conservative blue-chip; Enhanced = LRTs, Pendle PTs, Ethena; Hypernative + TRM on all vaults; allocations published before reallocations; Quality curator fee 0%. Live configuration diverges (see standing checks). Hypernative + TRM were not independently verified on-chain this pass.

**RUMOR / mix-up (exclude).** “K3 x Galaxy Lending” on Monad is **K3-curated credit to Galaxy as borrower**, not a Galaxy Curation Morpho/Euler vault. Morpho’s Galaxy *borrow* story is Galaxy as institutional borrower. “Galaxy Finance” BUSD is a different protocol. Tokenized GLXY as Kamino Superstate collateral is issuer/stock tokenization, not this curator’s USDT vault.

---

## CLEAN: No material incidents found as of 2026-09-15

Grok logged zero `INCIDENT` blocks. Independent research found none to add.

Do **not** create a dated `GALAXY-*` row from any of the following. They were checked so they are not later mis-attributed:

| Adjacent / non-event | Date | Why it is not a Galaxy Curation incident |
| --- | --- | --- |
| Resolv / USR Morpho cascade | 2026-03-22 | **Before** Galaxy’s first listed V2 vaults (2026-04-06). Named Morpho-side curators: Gauntlet, Re7, kpk, 9summits. Galaxy not in the ~15 affected vaults. |
| KelpDAO / rsETH | 2026-04-18 | Morpho CEO: ~$1M ETH borrow vs rsETH in two isolated markets / two of 500+ vaults. **Galaxy not named.** Galaxy WETH Quality deployed **2026-04-20**. Live WETH markets this pass are wstETH / weETH / LsETH / cbBTC / WBTC, **not rsETH**. Galaxy Research Kelp article is the research desk. |
| Stream / xUSD | 2026 (ecosystem) | No primary source puts Galaxy vaults in the blast radius. |
| Clearstar cUSDO oracle | 2026 (Clearstar IR) | Clearstar’s own post-mortem. Galaxy not named. |
| Resupply reUSD issuer depeg | 2026-06-24 | Collateral-issuer history. Enhanced went live **2026-06-16** and **does** hold a reUSD sleeve (~26% this pass). **No sourced Galaxy NAV loss.** Trading Strategy Enhanced max DD 0.0% (series from 2026-06-27). **usd_lost: unknown. Do not invent.** |
| Trading Strategy `maxDeposit=0` / `maxRedeem=0` on USDC Quality | snapshot ~2026-04-28 | Morpho Vault V2 `maxDeposit`/`maxRedeem` **always return 0**. Later snapshot (~2026-09-03) and this pass: deposits/redemptions **Open**, permissionless. Not a documented ops pause. |
| Xerberus “gating” + “curator identity unverified” | third-party | Galaxy Digital is Nasdaq: GLXY. Morpho curator id `galaxy` is verified. Current status pages: open. Not an incident. |
| USDC/USDT Quality TVL peak → ~$22M | 2026 Q2–Q3 | Share-price max DD **0.0%**. Withdrawals, not a haircut. |

**usd_lost: n/a. pct: n/a.** Nexus Mutual Blue Chip annex: **no “Galaxy”**, do not imply coverage.

---

## Listed Morpho V2 vaults (2026-09-15 snapshots; not usd_lost)

| Vault | Chain | Address | Deployed UTC | TVL (this pass) | Fee (Morpho API) |
| --- | --- | --- | --- | --- | --- |
| USDC Quality | Ethereum | `0x91600E31fBeDc72433d4a57F16639cfe661Be7d8` | 2026-04-06 | ~$22.11M | 0% |
| USDT Quality | Ethereum | `0x71ffB6a81786eC285D429d531Cf655107B9D878d` | 2026-04-06 | ~$22.99M | 0% |
| WETH Quality | Ethereum | `0x1878805799273d10aE96a58201A6f5254CF9824F` | 2026-04-20 | ~$22.3M | **~0.20% mgmt** (docs say Quality 0%) |
| USDC Enhanced | Ethereum | `0xd95fE7adF5075fad9D6Bf853E0f9Fe53369E8D96` | 2026-06-16 | ~$8.06M | ~0.40% |
| USDC Quality | Base | `0x1e9e47583f15D45a10Df48c0b1846E0492c795D7` | 2026-04-29 | ~$2.03M (Morpho UI this pass; Trading Strategy Base series was stale ~$26.5K as of 2026-08-04) | 0% |

### Unlisted / extra (same curator addresses; Grok missed)

| Vault | Chain | Address | Note |
| --- | --- | --- | --- |
| Anchorage/Galaxy USDC Quality | Ethereum | `0xD254F9F09a0Ea777D42D91645614363F5F6e1373` | 2026-05-27; ~$1; ~0.20% fee |
| Galaxy USDC | Arc (5042) | `0x8E357432CC12ff425c36432F312968aEb16112AF` | 2026-06-12; ~$10.5 |
| Galaxy EURC | Arc (5042) | `0x389abDf4355e0cF4f19298179991705a98f21c18` | 2026-09-14; ~$1 |
| Fee Wrapper 1 USDCq | Ethereum | `0x6Bb9d07BE70d5C2c80C30B469759be92F6405C6b` | 2026-04-09; ~$1.18M; ~0.40% fee |
| Kamino USDT | Solana | `FPQNECVaw9qCHTJ7JRQXQUV94YffmhX3he5khUgx4m3j` | Documented; RPC account exists; **TVL unknown** this pass (Kamino Earn UI 0 vaults) |

Galaxy `deployed-vaults` omits Base and Arc. Product overview still says “all Morpho V2” / Ethereum-centric copy.

### Live books that matter for risk (not incidents)

**FACT (Morpho UI 2026-09-15).** Enhanced: cbBTC ~36%; Huma **PST** ~30% (5M cap); Resupply **reUSD** ~26% (10M cap, 91.5% LLTV); Lombard **LBTC** ~7%; PT-USDat small; Hastra **PRIME** small; weETH 0%. **No Ethena market in the live table.** PST token `0x22aE3D9A738471F405169af055d31c687087d4c7`. PRIME market: $0 realized bad debt this pass.

**FACT.** Quality WETH: wstETH 94.5% ~58%, **weETH 94.5% ~41%**, LsETH ~1.5%. Quality USDC: cbBTC / WBTC / wstETH; weETH enabled at 0%; **infinite caps**; `addAdapter` / increase caps **3 days** (Morpho recommends 7); `decreaseTimelock` = 0.

**FACT.** `app.curation.galaxy.com` vault records **2026-08-17**, still **0 published allocations** as of 2026-09-15.

**CLAIM (wrapper).** Fee Wrapper 1 (~$1.18M) → Fireblocks Earn mapping **UNVERIFIED**.

---

## STANDING CHECKS

**Events (H/M/L/N/D/I):** `0H 0M 0L 0N 0D 0I`

**Risk docs:** **active.** `https://docs.curation.galaxy.com/` (risk philosophy, Quality / Enhanced / Kamino product pages, deployed-vault list). Marketing site `https://curation.galaxy.com/`.

**Active since:** **FACT on-chain 2026-04-06** (first Morpho V2 Quality vaults). **FACT public launch 2026-07-16** (Fireblocks Earn). Grok’s “2026-03 / docs dated 2026-03-27” is **UNVERIFIED** this pass, do not prefer it over the onchain date.

**PoC handle if public:** No dedicated curator Telegram found. X: **@galaxyhq** (corporate; launch `status/2077745163724574778`). No public `@GalaxyCurator` operator account (that handle is unrelated). Email: **curation@galaxy.com**. Spokesperson in launch copy: **Zane Glauber**.

**Any new incident since Grok’s 2026-09-15 cutoff:** none found (same-day independent pass; none found all-time either).

**Whether a past lesson showed up again:** n/a as a repeated *incident*. Product-level split is still live: Quality docs say blue-chip / 0% fee, but WETH Quality is ~41% weETH at ~0.20% fee; Enhanced docs still name Ethena while the live book is PST + **reUSD** + LBTC. That is configuration drift, not a dated loss event.

---

## Sheet hygiene

- Keep **zero** Events-tab rows for this curator until a primary source names **these vaults**. Count cell: `0H 0M 0L 0D 0I`.
- Do **not** paste listed TVL or peak TVL into `usd_lost`.
- Do **not** paste 0.0% max drawdown into a loss/% column as if it were a recovered incident.
- Do **not** file the Apr 28 Trading Strategy `maxDeposit=0` snapshot as a pause.
- Do **not** file reUSD’s issuer depeg as Galaxy `usd_lost` without a vault NAV source.
- Name collisions stay out: K3×Galaxy Monad, Morpho Galaxy-as-borrower, Galaxy Finance BUSD, Superstate GLXY on Kamino.

Primary sources that both Grok and this pass used: Galaxy docs + newsroom + PR Newswire, Morpho app vault pages, DefiLlama curator registry, CoinDesk 2026-07-16, Trading Strategy vault series. Independent extras: Morpho GraphQL (fees, owner/allocator/sentinel, unlisted vaults, share-price samples), Morpho UI live allocation tables, Euler metadata APIs, Nexus Mutual annex (no Galaxy), Kamino/Solana RPC, Pharos reUSD depeg log (issuer only).
