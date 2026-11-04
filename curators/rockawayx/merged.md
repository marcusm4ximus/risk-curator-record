# RockawayX, merged DD draft

Curator-scoped incidents only (Morpho/Euler-style: losses or stress on vaults/products this curator allocates). Two dated rows. Protocol-wide Term Finance haul (~$8.5M) is context, not this curator’s `usd_lost`.

---

EVENT
curator: RockawayX
date: 2026-08-23
title: TermDrain
incident_id: ROCKAWAYX-20260823-TERMDRAIN
type: exploit
impact: N
fault: indirect
class: non-materially-affected
severity: N
protocol_or_vault_url: https://app.upshift.finance/pools/1/0xcd69123b3FBBfC666E1f6a501da27B564C00De54
usd_lost: 454046.26
pct_of_that_vault_tvl: unknown
status: resolved

what_actually_happened: Term Finance ran fixed-rate lending markets. RockawayX's Tori strategy held a Term position inside the Upshift Tori Ecosystem Vault. A 17 Aug 2026 snapshot showed about $45.98M in the vault and about $500,912 in the Term position. On 21 Aug, an attacker deposited 5 USDC, wrapped the entire voting supply of the Term strategy, and waited through the 49-hour minimum. The proposal removed the Zodiac delay, replaced key Term controllers with an attacker contract, set the reserve ratio to zero, and used a fake repo token with an attacker-set price. On 23 Aug at 06:47 UTC, the strategy pulled liquidity from MetaMorpho and lost 454,046.26 USDC. The loss was about 1.1% of the vault based on the earlier snapshot. RockawayX said at 12:02 UTC that the exposure had been fully covered. On 24 Aug, D2 Finance disputed parts of the method but did not identify an unpaid depositor. By 25 Aug, Term Labs had moved the leftover fixed-rate loans. A separate RockawayX Morpho vault, roxTORI, was not drained.

response_summary: At 09:23 UTC on 23 Aug, a user reported that Tori intended to cover the loss that day. At 12:02 UTC, RockawayX said the 1.1% exposure had been fully covered, and a 12:32 update said depositors were whole. Those were curator statements, not an outside payment receipt. D2 Finance disputed the attack mechanics on 24 Aug. On 25 Aug, Term Labs moved the remaining fixed-rate loans. As of 26 Sep, the dispute concerned how the attack worked, not a sourced unpaid user. RockawayX said the Term exposure had been removed and that the vault would not accept another integration of that kind.

critics: @0xGwoni at 09:23 UTC on 23 August 2026 (Term inherited; wrote that Tori had said the loss would be fully covered that day; about $480k is the user's figure, not usd_lost, against 454,046.26 FACT) https://x.com/0xGwoni/status/2091456342326493222 ; Defiprime (inherited Term governance, use for that, not for the "0.50 shares vs LP supply" percent story) https://defiprime.com/term-finance-governance-exploit ; @deepcryptodive https://x.com/deepcryptodive/status/2091534804252528739 ; D2 Finance on 24 August 2026 (Tori recap vs on-chain buffer) https://www.odaily.news/en/newsflash/512250

lesson_applied_later: unclear. Term exposure was removed from this vault (CLAIM from secondary coverage of RockawayX). No evidence RockawayX added guardian/veto monitoring on other integration DAOs. Two days later the same curator still ran ~54% of Morpho USDC Yield in a 91.5% LLTV PT-reUSD market that suffered a $36M liquidation cascade (see ROCKAWAYX-20260825-PTREUSD). Live Morpho books still violate the firm’s advertised AA 15% / single-protocol 25% caps.

funds_recovered: CLAIM full for depositors. On 23 August 2026 RockawayX stated that the 454,046 USDC loss is entirely covered and depositors are whole. That is the curator stating payment. No depositor receipt. Attacker still held proceeds per Defimon. Who reimbursed is unknown.

sources:
- primary: https://etherscan.io/tx/0x9f273f9a5a20c2fc957b06bbfa45db486390eede4a7f44fbe1a2eb6744c2e8a0 (USDC drain, 06:47:47 UTC, block 25816159)
- primary: Term strategy https://etherscan.io/address/0x6F576e5192A14F259f7FE7347ECf63b255d7f7d1
- primary: Upshift Tori vault https://app.upshift.finance/pools/1/0xcd69123b3FBBfC666E1f6a501da27B564C00De54
- primary: Defimon https://defimon.xyz/blog/term-finance-hack-august-2026 (2,841.743536 WETH + 1,679,639.290442 USDC; strategy cashed MetaMorpho then spent liquid USDC)
- primary: Defiprime transfer-log table (454,046.26 USDC this strategy; 1,679,639.29 USDC five vaults) https://defiprime.com/term-finance-governance-exploit
- primary (Term listing of the vault, 2026-08-05, Grok-cited): https://x.com/term_labs/status/2085006052420956383
- primary (read; curator stating payment, not an independent receipt): cover 12:02 UTC https://x.com/RockawayX/status/2091496293969346795 ; post-mortem 12:32 UTC https://x.com/RockawayX/status/2091503724795474387
- commentary: Term Labs leftover-loan recap https://crypto.news/term-labs-recovers-fixed-rate-positions-after-8-5m-governance-attack/ ; https://en.cryptonomist.ch/2026/09/03/term-labs-governance-attack/
- commentary: D2 Finance via Odaily https://www.odaily.news/en/newsflash/512250 ; @0xGwoni ; @deepcryptodive ; PeckShield/CertiK ~$8.5M protocol-wide (do not paste Grok’s 8,488,229)

---

EVENT
curator: RockawayX
date: 2026-08-25
title: PT-reUSD
incident_id: ROCKAWAYX-20260825-PTREUSD
type: oracle
impact: N
fault: indirect
class: non-materially-affected
severity: N
protocol_or_vault_url: https://app.morpho.org/ethereum/vault/0xE0181090c22579B6A217f1522cbf8c9f1F0C1965/rockawayx-usdc-yield
usd_lost: 0
pct_of_that_vault_tvl: 0
status: resolved

what_actually_happened: On 2026-08-25 ~04:37–04:51 UTC, Morpho Blue market `0x1e9d614631a7df0ec07fb05b2c8cb2491575fd1a63a33bf187a6afb295a4fc64` (PT-reUSD-10DEC2026 / USDC, 91.5% LLTV, oracle `0x217d6DdCDB95112C51657F6270e8C079CFDB51f0`) went through a ~$36.1–36.4M borrower liquidation cascade with $0 realized bad debt. Steakhouse Financial deployed the market and briefly pulled then restored liquidity; RockawayX did not deploy it. RockawayX USDC Yield (`roxUSDCy`, `0xE0181090c22579B6A217f1522cbf8c9f1F0C1965`) was and remains a top supplier: as of 2026-09-15 Morpho UI it still holds ~$9.97–9.98M there (~54% of vault TVL, ~$10M cap). Grok excluded this as “no loss”; it is curator-scoped because this curator’s largest Morpho book sat in the stressed market. Do not invent a depositor USD loss: DefiLlama shows no pool-level losses, and the Grok-era “RockawayX tweeted no loss” claim is unverified (403 here; that day’s public timeline was Relayer acquisition).

response_summary: Liquidations finished with $0 bad debt; Steakhouse handled market liquidity. No sourced RockawayX recap, reimbursement, or cap cut. Two days after TermDrain, and still as of 2026-09-15, USDC Yield remains ~54% in the same 91.5% LLTV sleeve.

critics: The Defiant https://thedefiant.io/news/defi/pendle-oracle-move-liquidates-usd36-million ; CoinDesk https://www.coindesk.com/tech/2026/08/25/a-3-token-move-just-triggered-usd36-million-in-ethereum-defi-liquidations ; Morpho UI (live ~54% / $10M cap, $0 bad debt)

lesson_applied_later: no. The vault is still ~54% in the same 91.5% LLTV PT-reUSD market as of 2026-09-15. That also violates the firm’s advertised AA 15% / single-protocol 25% marketing caps.

funds_recovered: n/a ($0 lost)

sources:
- primary: Morpho market https://app.morpho.org/ethereum/market/0x1e9d614631a7df0ec07fb05b2c8cb2491575fd1a63a33bf187a6afb295a4fc64
- primary: Morpho vault https://app.morpho.org/ethereum/vault/0xE0181090c22579B6A217f1522cbf8c9f1F0C1965/rockawayx-usdc-yield
- primary: oracle 0x217d6DdCDB95112C51657F6270e8C079CFDB51f0
- commentary: The Defiant https://thedefiant.io/news/defi/pendle-oracle-move-liquidates-usd36-million
- commentary: CoinDesk https://www.coindesk.com/tech/2026/08/25/a-3-token-move-just-triggered-usd36-million-in-ethereum-defi-liquidations
- commentary: DefiLlama (no pool-level losses on this vault) https://defillama.com/yields/pool/caa9ffc0-2983-4c18-9556-4e3ad4dfe6ac/risk

---



## Standing checks

**Events (H/M/L/N/D/I):** `0H 0M 0L 2N 0D 2I`

**Risk docs:** Tori Ecosystem Vault investment thesis / risk disclosure is **active** (`https://www.rockawayx.com/insights/rockawayx-tori-ecosystem-vault-investment-thesis-risk-disclosure`, dated 2026-06-15). Morpho forum intro (2026-03-20) promised monthly reports and a dashboard URL TBD, **zero reports** found; Morpho About category is still the Discourse template. Morpho app: “Curator has not submitted a Disclosure” on these vaults. Firm marketing of four-layer AA–D caps (AA 15%, single protocol 25%) does **not** match live Morpho allocations (USDC Yield ~54% PT-reUSD 91.5%; f(x) Ecosystem ~82% fxSAVE; Huma USDC Main 100% PST; wETH ~100% wstETH 96.5% LLTV vs forum “≤90%”). Treat Morpho reporting as **stale**; Tori memo **active**.

**Active since:** Kamino RWA vaults ~**2026-02** (firm/Serotonin). Morpho vaults **2026-03-23** (UI) / forum **2026-03-20**. Forum entity: VAULT MANAGEMENT CORPORATION, Panama. Curator/owner Safe `0xbBacDCFB9691DFA1066aB29edfcc4A73f6DEf918` (DefiLlama 4-of-8). Allocators include EOAs (e.g. `0x1CDa83fE97a2e0A8F94a9cF32Da947C23b72ba02`). Sentinel `0x040EAaCb689D4635a2b2c2E2383A059Ff4733A47`. V2 timelocks: `addAdapter` / cap increases often **259200s (3d)**; REST `timelock_seconds` **604800 (7d)** on several vaults. Huma blog claimed 24h timelock; chain is 3d/7d.

**Morpho vaults (2026-09-15, curator filter `?curators=rockawayx`):** USDC Yield `roxUSDCy` `0xE0181090c22579B6A217f1522cbf8c9f1F0C1965` (~$18.5M, 5% perf, ~54% PT-reUSD 91.5% / 23% strUSD / 19% PST); f(x) Ecosystem `roxFX` `0x2cA22cb25558fa2018ecb1CE4eD8AF92Ee7ea423` (~$16M, ~82% fxSAVE, 10% perf); Tori Ecosystem Morpho `roxTORI` `0x3BD9AdAE6643dDcddD02746b8B60075E56DF9478` (~$13.5M, ~67% strUSD, **not** the Term drain); Huma USDC Main `humaUSDC` `0x8aC91877b93330f52b2979a31a4879506021475c` (~$12.4M, **100% PST**, 0% fee); NUVA `0x93e0F9d502eEfce8D34924ab3478C7EA0CBC5a2E` (~$2.0M); wETH `roxWETH` `0x64C18DCC4Ccb3b8D27877a4aeBB4C3126CB39cB9` (~$0.95M, ~100% wstETH **96.5% LLTV**); Midas USDC Prime Base `0xAE4181CFB5aaA08bbE77d269c6B595672b9F9Edc` (~$581k); Midas USDC Prime ETH `0xe99A27169c2aA26a8f2757949d09Fa3f9A8f0B3B` (~$3.5k); USDC Prime `roxpUSDC` `0x5f829B1B473cBA86838E1B7BB7E144DbDE228e21` (dust ~$10); Figure USDC Main `0xd65d6E8dbC3Cd3D12418199E6f4014dB3aaa0097` (~$11, peak ~$9.8M, outflows, share price ~1.01, not a loss event); EUROP `0x9C57E02bC31e7e463f439353D97bd8f42F5a7F9c` (~$11.5k); Belem RWA EURCV `0xD6d4b804014EF27836dBe9f8f6Bf6c71251548Ec` ($1.15 dust).

**Lista (not Euler):** RockawayX PT Yield `roxptUSDT` `0xb5a30E1FA2CF3C8DEA882124B3AB5A47A27C5dd2` on BSC is a Morpho fork. TradingStrategy “Euler” tag is wrong. Euler `entities.json` has **no RockawayX**.

**Kamino RWA (out of Morpho/Euler, curator product):** first vault ~2026-02; Serotonin once ~$41.9M with **~74% OnRe**. Standing/conflict, not a dated Morpho Events-tab row.

**PoC:** X **@RockawayX** (Tori memo also **@Rockaway_X**). Email `contact@rockawayx.com`. Public Telegram not found. @GilgameshODs as PoC: unverified.

**New since Grok TermDrain:** no second empty-electorate governance drain. PT-reUSD (2026-08-25) is the add, $0 vault loss, still 54% concentrated.

**Lesson repeat:** “Watch integration DAO / empty electorate” did not show up as cutting PT-reUSD 91.5% concentration. Live Morpho books still violate advertised 15%/25% caps.

**Conflicts (standing, not a hack row):** Morpho Labs investor (forum). Cap seed investor; USDC Yield launch copy listed stcUSD. Huma curator **and** PST LP. OnRe/Kamino concentration.

**Not RockawayX Events-tab rows:** Resolv USR (Mar 2026; DefiLlama “not on this vault”); Stream/xUSD; KelpDAO; Drift; Solmate legal; Euler 2023.

**Sheet paste notes:** TermDrain: N + Indirect, `usd_lost` 454046.26, `pct` unknown. PT-reUSD: N + Indirect, `usd_lost` 0 / `pct` 0. Count `0H 0M 0L 2N 0D 2I`. Do not paste Grok’s 8,488,229 as this curator’s loss. Do not invent depositor USD lost on PT-reUSD, Figure outflows, or USDC Prime dust.
