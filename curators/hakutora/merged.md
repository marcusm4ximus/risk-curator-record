---
cursor:
  subagentId: "bc-1c15fe82-d4db-523c-8d5c-33b03c315319"
---

# Hakutora, merged DD draft

**Draft date:** 2026-09-16  
**Inputs:** Grok paste `twitter-grok.md` (1 INCIDENT, `HAKUTORA-20251105-DEFENSIVE`) + independent Morpho Blue API/app, DefiLlama, X/fxtwitter, forum, Protos, Pharos, Dune, Trading Strategy, hakutora.xyz. User-edit before any Google Sheet paste.  
**IDs:** Grok’s `DEFENSIVE` is not an incident and is not on the live blotter. No extra loss rows.  
**Labels:** FACT / CLAIM / RUMOR in prose. Do not invent USD lost or %.

Hakutora is a Tokyo-based Morpho risk curator (X location). Site: https://hakutora.xyz/. X: [@0xhakutora](https://x.com/0xhakutora) (joined 2025-03-02; 5 tweets / 148 followers as of this pass). Morpho curator: https://app.morpho.org/curator/hakutora (**$23.73M** deposits 2026-09-16). DefiLlama: https://defillama.com/protocol/hakutora (**$23.86M**, Ethereum only, category Risk Curators, twitter `0xhakutora`).

On-chain (Morpho Blue API):

- Owner / creator (also DefiLlama `morphoVaultOwners`): `0x76c303fA012109eCBb34E4bAf1789c3e9FbEb3A4`
- Curator-role addresses (`curator(id: "hakutora")`): `0x2413A57FBD695f6B13C1D8d7D30EE10fa61b1b02`, `0x345023d92f3051bB2B68DF79dFf760EccFEE80ED`
- Allocator (all six vaults): `0x182f395622Eb1c9152FAa76085d8e7f2392b579f`
- Extra USDC allocator (SAFE 2/3): `0x1c7e55e00cB9c69C63Fe463147f9B628495FE748`
- Performance fee recipient: `0x7aa536c797536e94ec3cb94076ee2f3ec42bd316` (15% fee)

All six MetaMorpho V1 vaults were created **2025-01-16** on Ethereum. Hakutora USDC was Morpho-UI listed **2025-03-07 16:09:43 UTC**; Hakutora USDT listed **2025-09-15 04:24:41 UTC**. Unlisted vaults use a **1-day** timelock; listed USDC/USDT use **3 days**. No Morpho V2 vaults, no other chain, **no Euler** product (euler-labels search empty).

Live vault URLs (2026-09-16):

- Hakutora USDC V1 `0x974c8FBf4fd795F66B85B73ebC988A51F1A040a9`, **$17.44M**, listed, https://app.morpho.org/ethereum/vault/0x974c8FBf4fd795F66B85B73ebC988A51F1A040a9/hakutora-usdc, 100% USDC/cbBTC 86% (`0x64d65c9a2d91c36d56fbc42d69e979335320169b3df63bf92789e2c8883fcc64`); Morpho: “Curator has not submitted a Disclosure.”
- Hakutora USDT V1 `0xa71D08A159258553a5Ac190d60Fa919425Ff02EA`, **$6.30M**, listed, https://app.morpho.org/ethereum/vault/0xa71D08A159258553a5Ac190d60Fa919425Ff02EA/hakutora-usdt, ~$6.28M wstETH/USDT 86%, ~$26k WBTC/USDT 86%; PT-USDe-25SEP2025 cap 0; also “no Disclosure.”
- Hakutora cbBTC `0xba04de02ED8cecc3befb8575a95d56D901c9C602`, ~$94.3k, unlisted
- Hakutora WBTC `0xc82b74bC114D7e2D4047Ccf14f7a6109b654Ab91`, ~$24.7k, unlisted
- Hakutora DAI `0x42D425Fb918acBbd73B10B851979E8fc469B3e9A`, ~$2.5k, unlisted
- Hakutora WETH `0x6ACa9D74215e9512d9608aFF3e87dac0d9ce6218`, ~$12, unlisted

Site copy still cites **~$40M** TVL “since February 2025.” DefiLlama peak **$61.96M** on **2025-03-19**; current **$23.86M**. Trading Strategy: USDC data from 2025-01-20 (peak ~$61.95M, lifetime max DD **0.0%**, vendor **CLAIM**); USDT from 2025-01-22. Marketing on hakutora.xyz (spread/carry/depeg/liquidation arb; “optional automatic withdrawal” in extremes) is not a risk policy, parameter schedule, or oracle standard.

Morpho forum category exists and is empty except the placeholder [About the Hakutora category](https://forum.morpho.org/t/about-the-hakutora-category/1582) (6 Mar 2025). Out of scope as **loss rows**: Morpho App Bundler3 10 Apr 2025; Stream/xUSD/USDX/deUSD losses at MEV Capital / Re7 / TelosC / others; Resolv Mar 2026 unbacked mint as a protocol event; 2026-06-06 RLP/USDC market realized bad debt; Krain AI’s unrelated “Hakutora” agent.

No material loss, exploit, oracle-break, or ops-pause **incident** found as of 2026-09-16. The defensive Stream-week note below is not an incident and is not on the live event list.

---

NOT A LIVE EVENT
curator: Hakutora
date: 2025-11-05
title: Defensive
incident_id: HAKUTORA-20251105-DEFENSIVE
type: collateral
impact: N
fault: direct
class: non-materially-affected
severity: N
protocol_or_vault_url: https://app.morpho.org/ethereum/vault/0x974c8FBf4fd795F66B85B73ebC988A51F1A040a9/hakutora-usdc
usd_lost: unknown
pct_of_that_vault_tvl: unknown
status: resolved
what_actually_happened: Stream Finance issued xUSD, Stables Labs issued USDX, and Elixir issued deUSD. Resolv's RLP was the junior first-loss token behind USR. On 4 Nov 2025, Stream disclosed losses, halted withdrawals, and xUSD lost its peg. USDX and deUSD broke in the following days. At the time, Hakutora USDC's collateral mix was 85.52% cbBTC and 14.47% RLP.
response_summary: On 5 Nov, Hakutora said the vault had entered a defensive state and that RLP did not include USDX exposure. Later that day, it moved 2,000,006.82 USDC from RLP into cbBTC. On 7 Nov, it set the sdeUSD cap to 0 and moved the remaining RLP, USD0++, and syrupUSDC into cbBTC. The vault's share price did not fall that week, and Hakutora published no loss or post-mortem. On 3 Dec, it set caps to 0 on several yield principal tokens. On 22 Mar 2026, it set the RLP supply cap to 0. By 16 Sep 2026, the vault held no RLP and was fully allocated to cbBTC.
critics: none sourced against this curator on this date. Protos/Pharos cover Stream-cluster losers (MEV Capital, Re7, TelosC, Silo, Varlamore, Mithras) without naming Hakutora.
lesson_applied_later: yes + example: they reduced RLP the day of the tweet and later ran a blue-chip book (cbBTC 86% / wstETH 86% on USDT). Incomplete on the same lesson: the RLP **market stayed listed with a non-zero cap until 2026-03-22**, when Resolv blew up and they zeroed the cap. They did not publish a “RLP removed” note.
funds_recovered: n/a
sources: primary, https://x.com/0xhakutora/status/1985994409549389849 ; https://app.morpho.org/ethereum/vault/0x974c8FBf4fd795F66B85B73ebC988A51F1A040a9/hakutora-usdc ; https://app.morpho.org/ethereum/variable/0x64d65c9a2d91c36d56fbc42d69e979335320169b3df63bf92789e2c8883fcc64/usdc-cbbtc ; https://etherscan.io/tx/0x367bcb16aa008637b21eec34aab91cb89e551de51615ebc0bf446d9ae1386663 ; https://etherscan.io/tx/0xa2a53d94bf0c3a938033f5ac0f0713c95d9bdff480f018589ff2d83f4b9e84a7 ; https://etherscan.io/tx/0x4687e4730c59d4289fce0324a65ca6db9ca05764dbb43e1694beddd94ecfd3a6 ; https://etherscan.io/tx/0x42077e7fd71f2e52c063230697060bc371d1e8cf6c4329e1650966dcbf5b1594 ; Morpho Blue API vault historicalState / adminEvents / marketPosition ; commentary, https://protos.com/stream-finance-meltdown-winners-and-losers-in-defi-risk-curator-reckoning/ ; https://pharos.watch/learn/case-studies/stream-elixir-contagion-2025/ ; https://dune.com/xpertknight/morpho-curated-lending-risk-concentration ; https://app.morpho.org/ethereum/variable/0xe1b65304edd8ceaea9b629df4c3c926a37d1216e27900505c04f14b2ed279f33/usdc-rlp

---



## STANDING CHECKS

**Events (H/M/L/N/D/I):** `0H 0M 0L 0N 0D 0I`

**Risk docs:** none  
FACT: Morpho USDC and USDT vault pages show “Curator has not submitted a Disclosure.” Forum category has no DD, parameters, or oracle note. hakutora.xyz is marketing (arb strategies + optional auto-withdraw), not a living risk policy. Not “stale”, nothing was published to go stale.

**Active since:** 2025-01  
FACT: six vaults created 2025-01-16; Trading Strategy USDC 2025-01-20 / USDT 2025-01-22; DefiLlama TVL series starts 2025-01-18. Site markets “since February 2025.” X account 2025-03-02. Morpho USDC listed 2025-03-07. Grok’s “public launch 2025-02-01” was **not** found as a curator post.

**PoC:** X: @0xhakutora  
Site https://hakutora.xyz/. No public Telegram handle sourced. Account is quiet (5 tweets).

**Any new incident since 2025-11-05:** none sourced through 2026-09-16 as a Hakutora **loss** row. Related later ops, not incidents: 2026-03-22 RLP cap → 0 (Resolv week; USDC share price 1.06565→1.06607 over 20–28 Mar); 2026-06-06 RLP/USDC market realized **1.181M USDC** bad debt (Morpho UI / Dune ~1,181,254 / API ~$1,181,092) with Hakutora USDC supply **0** and Dune attributing absorption to “a niche vault and the collateral issuer, not the major curators.”

**Whether a past lesson showed up again:** unclear / partial. Nov 2025 lesson was “don’t sit in Stream-cluster / USDX-tainted sleeves.” They moved RLP and killed sdeUSD the same week, then spent 2026 in cbBTC/wstETH 86% markets. They still left an RLP **cap** open until Resolv week in Mar 2026, same collateral family, delayed hard cut. No second sourced loss.

**Clean-if-empty:** empty on the live list. The defensive note is not an incident. Count `0H 0M 0L 0N 0D 0I`.

**Searched:** Grok paste; Morpho app curator + USDC/USDT vaults + cbBTC 86% + RLP 86% markets; Blue API curator/vaults/adminEvents/historicalState/marketPosition; DefiLlama protocol + `curators.ts` owner; hakutora.xyz; Alchemy dapp blurb; Trading Strategy curator + USDC vault; vaults.fyi; fxtwitter @0xhakutora timeline/tweet 1985994409549389849; Morpho forum category 39 / topic 1582; Protos Stream curator reckoning; Pharos Stream-Elixir case; Dune xpertknight Morpho concentration; Euler app/labels (no hit); web queries hakutora + exploit/hack/pause/oracle/bad debt/xUSD/USDX/RLP/Stream/Euler. No pause tx, no curator loss post-mortem, no named critic thread on this vault.
