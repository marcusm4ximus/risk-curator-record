# Galaxy Curation — Grok vs reality

Research date: 2026-09-15. Incident prefix: `GALAXY`. Folder slug: `galaxy-curation`.

## Grok paste status

**Present.** Path: `docs/curator-dd/galaxy-curation/twitter-grok.md`. Real Grok narrative (~7,025 characters). Concatenated into few paragraphs (few newlines); readable. **0 `INCIDENT` blocks — expected** for this curator. Includes a headline (“No material incidents found as of 2026-09-15”), adjacent-event exclusions, a non-incident log, `STANDING CHECKS`, listed vaults/owner, and a source list.

This file fact-checks that narrative against independent research on the same date.

## Verdict in one line

Grok’s empty-incident conclusion **stands**. No sourced exploit, oracle failure, bad-debt event, curator pause, or public incident response was found where **Galaxy Curation’s vaults** were the story. **usd_lost: n/a. Do not invent USD or %.** Sheet rows for this curator stay empty of incident blocks. Several Grok **standing / product** claims are stale, incomplete, or wrong; those are not incidents.

---

## Grok claims vs reality

| Grok claim (paraphrased from the paste) | Label | Reality |
| --- | --- | --- |
| No material incidents as of 2026-09-15; no sourced exploit / oracle / bad debt / curator pause / public IR on **this curator’s vaults**; USD lost n/a; Quality share-price max DD 0.0% | **FACT (conclusion stands)** | Independent Morpho GraphQL, Morpho vault pages, Galaxy docs/newsroom, CoinDesk, Trading Strategy, DefiLlama, Euler metadata, and adjacent post-mortems agree. Trading Strategy: max DD **0.0%** on ETH USDC Quality, ETH USDT Quality, ETH USDC Enhanced, Base USDC Quality. Morpho API share-price samples this pass are monotonically rising. **usd_lost: n/a.** |
| Morpho Vault V2 curator; onchain from early April 2026; Fireblocks Earn launch 2026-07-16 | **FACT** | First listed Morpho V2 Quality vaults created **2026-04-06** (ETH USDC `0x91600E31fBeDc72433d4a57F16639cfe661Be7d8`, ETH USDT `0x71ffB6a81786eC285D429d531Cf655107B9D878d`). WETH Quality **2026-04-20**. Base USDC Quality **2026-04-29**. Enhanced **2026-06-16**. Galaxy newsroom + PR Newswire + CoinDesk: institutional Fireblocks Earn launch **2026-07-16**. |
| Owner `0x42D510eDeb9257f8D920d5B9f5109D95cB22419d` on ETH + Base | **FACT** | Matches Morpho `curators` GraphQL and DefiLlama `factory/curators.ts` (`id: "galaxy"`). Same owner on listed ETH + Base vaults. |
| Not Euler; no Galaxy Euler vaults in DefiLlama curator map or Morpho/Euler listings | **FACT** | Euler public metadata APIs (Ethereum, Base, Arbitrum, BSC, Avalanche, Sonic, Unichain, Monad, Plasma, Berachain): **no “Galaxy”**. Morpho V1 `vaults(where: { search: "Galaxy" })`: **no V1 vaults**. |
| Resolv/USR 2026-03-22 is **before** Galaxy vault creation ~2026-04-06; do not attribute | **FACT** | Named Morpho-side curators at the time: Gauntlet, Re7, kpk, 9summits. Galaxy’s first listed V2 vaults are **2026-04-06**. No Galaxy vault in the ~15 affected Morpho vaults. |
| KelpDAO/rsETH 2026-04-18: Morpho CEO ~$1M borrow vs rsETH in two isolated markets / two of 500+ vaults; **Galaxy not named** | **FACT (quotes check out; Galaxy still not in the blast radius)** | Frambot / Morpho CEO contemporaneous quotes match Grok’s summary. Galaxy WETH Quality was deployed **2026-04-20** (after Apr 18). Live WETH Quality markets this pass: wstETH, **weETH**, LsETH, cbBTC, WBTC — **not rsETH**. Galaxy Research published a KelpDAO article; that is the research desk, not this curator’s vault book. |
| Stream/xUSD and Clearstar cUSDO oracle: no primary source puts Galaxy vaults in those blast radii | **FACT** | Clearstar published its own cUSDO post-mortem; Galaxy is not named. Stream/xUSD coverage does not name Galaxy Curation vaults. |
| Quality allocates to blue-chip Morpho markets (wstETH, cbBTC, WBTC and similar) | **FACT (incomplete / slightly stale)** | ETH USDC Quality live book is cbBTC / WBTC / wstETH (weETH **enabled at 0%**). ETH **WETH Quality** is **not** that set: **wstETH ~58% and weETH ~41%** (LsETH ~1.5%). weETH is an LRT. Quality ≠ “blue-chip only” on the WETH vault. |
| Enhanced allocates to LRTs, Pendle PTs, Ethena; one observed allocation PST/USDC with $0 realized bad debt on that market page | **FACT (docs/marketing) + CLAIM (Ethena as live book) + FACT (PST $0 BD this pass)** | Docs + 2026-07-16 newsroom still name LRTs / Pendle PTs / Ethena. **Live Morpho Enhanced book 2026-09-15:** cbBTC ~36%, Huma **PST** ~30% (5M cap), Resupply **reUSD** ~26% (10M cap, 91.5% LLTV), Lombard LBTC ~7%, small PT-USDat and Hastra PRIME, weETH 0%. **No Ethena market in the live table.** PST token `0x22aE3D9A738471F405169af055d31c687087d4c7`. PRIME market 0 realized bad debt this pass. PST $0 BD is consistent with this pass’s market page. **Grok did not mention the live reUSD sleeve.** |
| Galaxy USDC Quality peak TVL ~$71.1M then later ~$22M; max DD 0.0%; TVL drop without NAV loss is not an incident | **FACT** | Trading Strategy: peak ~$71.12M USDC Quality; USDT Quality peak ~$68.5M; both ~$22M now. Max DD 0.0%. Morpho listed curator total this pass ~**$77.4–77.5M**. |
| Trading Strategy ~2026-04-28 snapshot `maxDeposit=0` / `maxRedeem=0` on USDC Quality; later ~2026-09-03 Open/permissionless; treat as utilization, not ops pause | **CLAIM (Grok) — likely a Morpho V2 API misread, not an incident** | Morpho Vault V2 docs: `maxDeposit` / `maxRedeem` **always return 0**. Grok correctly refuses to call it a documented ops pause, but the Apr 28 snapshot is **not evidence of gates**. Current Trading Strategy: permissionless, deposits/redemptions **Open**. **Do not write a pause incident from this.** |
| Xerberus: “gating restrictions on redemptions” + “curator identity unverified”; Galaxy Digital is public (Nasdaq: GLXY); later pages show open redemptions; not an incident | **CLAIM (Xerberus) / FACT (GLXY listing + open status now)** | Legal name on Morpho disclosures: **Galaxy Curation LLC**. Parent: Galaxy Digital (Nasdaq: GLXY). Morpho curator id `galaxy` is **verified**. Current vault-status pages: open. Xerberus is third-party commentary. **Not an incident.** |
| Out of scope: Galaxy as **borrower** (Morpho; K3 Capital AUSD on Monad) | **FACT** | K3 × Galaxy Lending: **K3 Capital curates**; Galaxy **borrows**. Morpho “Galaxy” borrow coverage is the trading desk as borrower, not this curator product. Correct exclusion. |
| Risk docs: active | **FACT** | `docs.curation.galaxy.com` risk philosophy, Quality/Enhanced/Kamino product pages, deployed-vault list are live. |
| Active since 2026-03 (docs site dated 2026-03-27); first vaults ~2026-04-06; Fireblocks 2026-07-16 | **UNVERIFIED (March 27 docs date) / FACT (onchain April + July launch)** | Onchain first vaults **2026-04-06** is solid. Public launch **2026-07-16** is solid. A **2026-03-27** “docs dated” stamp was **not independently reproduced** this pass; possible mix-up with unrelated “Galaxy Project” bioinformatics newsletter dating. Prefer **onchain 2026-04** as “active since.” |
| No dedicated curator TG; X `@galaxyhq`; no public `@GalaxyCurator` (that handle is unrelated); spokesperson Zane Glauber | **FACT** | `@galaxyhq` is the corporate account (launch post `status/2077745163724574778`). Email on Morpho: **curation@galaxy.com**. Zane Glauber, Global Head of Distribution, is quoted in Fireblocks Earn launch copy. No dedicated curator Telegram found this pass. |
| New incident since 2026-09-15: none; lesson reuse n/a | **FACT as of this pass’s clock** | Same-day research. Nothing newer. No prior Galaxy Curation incident to “reuse.” |
| Kamino USDT `FPQNECVaw9qCHTJ7JRQXQUV94YffmhX3he5khUgx4m3j` — same curator brand, not Morpho/Euler | **FACT (account exists; TVL unknown this pass)** | Address is in Galaxy `deployed-vaults`. Solana RPC account exists. Kamino Earn UI returned **0 vaults** for this pass’s query, so **TVL unknown**. Do not paste a TVL into `usd_lost`. |
| Grok searched Nexus Mutual covered-vault annex | **FACT (search happened; coverage is not implied)** | Independent check of the Nexus Mutual Blue Chip annex: **no “Galaxy”**. Do not imply coverage. |
| DefiLlama `factory/curators.ts` has `galaxy` / owner `0x42D5…419d` | **FACT** | Confirmed. DefiLlama protocol page `defillama.com/protocol/galaxy-curation` exists. |
| Listed vaults: ETH USDC/USDT/WETH Quality, ETH USDC Enhanced, Base USDC Quality, Kamino USDT | **FACT (incomplete inventory)** | Those five Morpho + Kamino match Galaxy’s public list. Base USDC Quality: `0x1e9e47583f15D45a10Df48c0b1846E0492c795D7` (Morpho UI ~$2.03M this pass). Grok **missed** unlisted / extra vaults sharing the same curator addresses: Anchorage/Galaxy USDC Quality `0xD254F9F09a0Ea777D42D91645614363F5F6e1373` (2026-05-27, ~$1, ~0.20% fee); Arc (5042) USDC `0x8E357432CC12ff425c36432F312968aEb16112AF` (~$10.5, 2026-06-12) and EURC `0x389abDf4355e0cF4f19298179991705a98f21c18` (2026-09-14, ~$1); Fee Wrapper 1 USDCq `0x6Bb9d07BE70d5C2c80C30B469759be92F6405C6b` (~$1.18M, ~0.40%, 2026-04-09). Base + Arc are also missing from Galaxy’s own `deployed-vaults` page. |

---

## What Grok got wrong or left stale (not incidents)

1. **Ethena as if it were a live Enhanced sleeve.** Docs/newsroom still say Ethena. Live Enhanced book on 2026-09-15 had **no Ethena market**. Dominant sleeves: cbBTC, Huma PST, **Resupply reUSD**, Lombard LBTC.
2. **Quality = blue-chip only.** True-ish for USDC Quality. **False for WETH Quality**, which is ~41% weETH.
3. **Apr 28 `maxDeposit=0`/`maxRedeem=0` as even a “utilization” CLAIM.** Morpho V2 those view functions **always return 0**. Grok was right not to call it a pause; the snapshot still should not be treated as liquidity tightness evidence.
4. **Active since 2026-03 / docs dated 2026-03-27.** Onchain and launch dates are fine. The March docs stamp is **UNVERIFIED**.
5. **Quality 0% fee implied across the suite.** Docs say Quality curator fee 0%. Morpho API: ETH USDC + USDT Quality and Base USDC Quality = 0. **WETH Quality managementFee ≈ 0.20%.** Enhanced ≈ 0.40%. Unlisted Anchorage/Galaxy Quality ≈ 0.20%. Fee Wrapper 1 ≈ 0.40%.
6. **“All current vaults are Morpho V2 on Ethereum”** is still on Galaxy’s product overview. Grok partially corrected (Base + Kamino) but still missed Arc, Anchorage, and the fee wrapper.

## What Grok did not contribute (independent research)

- Live Enhanced book (PST / reUSD / LBTC mix) and the **reUSD depeg 2026-06-24** as **issuer history**, not Galaxy NAV loss. Enhanced deployed **2026-06-16**. Trading Strategy Enhanced max DD **0.0%** (series starts 2026-06-27). **usd_lost unknown; do not invent.**
- WETH Quality weETH concentration (~41%).
- Timelocks / caps: Quality USDC **infinite caps**; `addAdapter` / increase caps **3 days** (Morpho recommends 7); `decreaseTimelock` = 0.
- `app.curation.galaxy.com` vault records dated **2026-08-17**, still **0 published allocations** as of 2026-09-15 — contradicts the “allocations published before reallocations” CLAIM in Galaxy’s own risk copy.
- Hypernative + TRM = **Galaxy CLAIM only** this pass (not independently verified on-chain).
- Allocator `0xA13094eCEd689b7419BAbA12851374424c1486f1` (+ `0xD1fCd938008a582E5F356bfe0d92604ffB7d3171` on USDC Quality). Sentinel `0xB4b1c558af077B34f071B1b6e4cCA0fB8A34aEE0`.
- Name collisions: Galaxy Finance BUSD; Superstate tokenized GLXY on Kamino; Morpho Galaxy **borrow** story; K3×Galaxy Monad.
- Wrapper → Fireblocks Earn mapping: **UNVERIFIED**.

## What to add or change before any sheet paste

- **Keep zero incident rows.** Do not mint a `GALAXY-YYYYMMDD-*` block from Resolv, Kelp/rsETH, Stream, Clearstar, reUSD issuer depeg, Xerberus, or the Apr 28 Trading Strategy snapshot.
- **Do not put TVL (~$77M listed / peaks ~$71M) in `usd_lost`.**
- **Do not put 0.0% max DD in a loss column as if it were a recovered incident.**
- Standing-check “active since”: write **2026-04 on-chain / 2026-07-16 public Fireblocks launch**, not an unverified 2026-03-27 docs date.
- Product notes (not incidents): live Enhanced ≠ Ethena; WETH Quality holds weETH; disclosure app still empty; 3-day timelock vs Morpho’s 7-day recommendation.

Grok sources that independently check out as primary or fair commentary: `docs.curation.galaxy.com` (index, deployed-vaults, risk-philosophy), Galaxy newsroom + PR Newswire, `x.com/galaxyhq/status/2077745163724574778`, DefiLlama `factory/curators.ts`, Morpho WETH Quality URL, CoinDesk 2026-07-16, tradingstrategy.ai/vaults/galaxy-usdc-quality, xerberus morpho-galaxy-usdc-vault, defillama.com/protocol/galaxy-curation. `x.com/tomwanhh/status/2077759169398989235` is commentary; not required for the empty-incident conclusion.
