---
cursor:
  subagentId: "bc-f41c1427-71eb-56ab-83f9-8f7ec07521b0"
---

# Gauntlet, merged DD draft

**Draft date:** 2026-09-15  
**Inputs:** Grok paste `twitter-grok.md` (3 INCIDENT blocks) + independent Morpho/Euler research. User-edit before any Google Sheet paste.  
**IDs:** Grok’s `EZETH` (Low + Indirect) and `RESOLVUSR` (High + Indirect) remain. USD0++, Bybit/Ethena, and rsETH are N + Indirect. Stream skip and Euler handover are off the Events tab.  
**Labels:** FACT / CLAIM / RUMOR in prose. Do not invent USD lost or %.

Gauntlet Networks curates Morpho vaults (and curated Euler DAO markets until Apr 2026). Morpho announced the partnership 2024-02-27; first MetaMorpho vaults 2024-03-13 (WETH Prime, USDC Prime, MKR Blended). VaultBook (2026): 70+ Morpho vaults, tiers Prime / Balanced (UI often “Core”) / Frontier, plus partner vaults. Out of scope per Grok and this pass: Aave/Compound *steward* parameter work (including Compound deUSD 2025-11-04 and Compound rsETH oracle 2026-04), Euler v1 2023, Oct 2024 PAXG LeadBlock market.

Live vault URLs (Morpho app + API 2026-09-15, non-exhaustive):

- Ethereum USDC Prime `0xdd0f28e19C1780eb6396170735D45153D261490d`, https://app.morpho.org/ethereum/vault/0xdd0f28e19C1780eb6396170735D45153D261490d/gauntlet-usdc-prime
- Ethereum USDC Core `0x8eB67A509616cd6A7c1B3c8C21D48FF57df3d458`, https://app.morpho.org/ethereum/vault/0x8eB67A509616cd6A7c1B3c8C21D48FF57df3d458/gauntlet-usdc-core
- Ethereum USDC Frontier `0xc582F04d8a82795aa2Ff9c8bb4c1c889fe7b754e`, https://app.morpho.org/ethereum/vault/0xc582F04d8a82795aa2Ff9c8bb4c1c889fe7b754e/gauntlet-usdc-frontier
- Ethereum WETH Prime `0x2371e134e3455e0593363cBF89d3b6cf53740618`
- Ethereum LRT Core / WETH Balanced `0x4881Ef0BF6d2365D3dd6499ccd7532bcdBCE0658`, https://app.morpho.org/ethereum/vault/0x4881Ef0BF6d2365D3dd6499ccd7532bcdBCE0658/gauntlet-lrt-core
- Resolv USDC (partner) `0x132E6C9C33A62D7727cd359b1f51e5B566E485Eb`, https://app.morpho.org/ethereum/vault/0x132E6C9C33A62D7727cd359b1f51e5B566E485Eb/resolv-usdc
- Extrafi XLend USDC (Base) `0x23479229e52Ab6aaD312D0B03DF9F33B46753B5e`, https://app.morpho.org/base/vault/0x23479229e52Ab6aaD312D0B03DF9F33B46753B5e/extrafi-xlend-usdc
- Seamless USDC (Base) `0x616a4E1db48e22028f6bbf20444Cd3b8e3273738`, https://app.morpho.org/base/vault/0x616a4E1db48e22028f6bbf20444Cd3b8e3273738/seamless-usdc-vault
- Curator Safe `0x9E33faAE38ff641094fa68c65c2cE600b3410585`; owner `0xC684c6587712e5E7BDf9fD64415F23Bd2b05fAec`; guardian `0x7084bF4dB6c21e1834dD6482f6056a39A33584cD`

---

EVENT
curator: Gauntlet
date: 2024-04-24
title: ezETH
incident_id: GAUNTLET-20240424-EZETH
type: collateral
impact: Low
fault: indirect
class: affected
severity: Low
protocol_or_vault_url: https://app.morpho.org/ethereum/vault/0x4881Ef0BF6d2365D3dd6499ccd7532bcdBCE0658/gauntlet-lrt-core
usd_lost: unknown
pct_of_that_vault_tvl: 0.11
status: resolved
what_actually_happened: Renzo was a liquid restaking protocol, and ezETH was its restaked ETH token used as collateral. FACT (Grok + Morpho forum): On 2024-04-24 from 02:25 UTC, ezETH DEX liquidity thinned and the ezETH/WETH oracle printed below 1.0. First liquidation 02:29:47 UTC, block 19722269; 145 of 146 liquidations by 02:52:35 UTC. The 0.86 LLTV market accrued 10.96 WETH insolvent debt; 0.77 accrued none. Gauntlet LRT Core supplied about 65% of ~7.6k WETH in the 0.86 market, so 7.12 WETH was socialized to that vault, 11 bps of vault WETH supply. Pre-event sleeves ~5k / 2k / 400 WETH across 0.86 / 0.77 / 0.625. Primary source has no USD conversion, so usd_lost stays unknown. Afterward Gauntlet moved WETH out of 0.86 into 0.77 and 0.625. CLAIM: ecosystem “$60M+” ezETH liquidations (Gearbox/Morpho) is cascade notional, not this vault’s loss.
response_summary: FACT. Next-day Morpho forum post with liquidation counts, socialization math, and a net-positive note for depositors in before 2024-04-22 11:27 UTC. Framed as a higher-risk LRT product vs WETH Prime. VaultBook later repeats 7.12 WETH / 11 bps and the rename LRT Core/Balanced → WETH Balanced. No vault pause.
critics: PRado on the Morpho thread (young locked LRT, timelock, guardian) - https://forum.morpho.org/t/gauntlet-lrt-core-vault-market-update-4-24-2024-ezeth-price-volatility/578 . Marc Zeller (Aave), commentary in https://protos.com/depeg-of-3b-restaking-token-ezeth-causes-over-60m-in-defi-liquidations/ . Grok’s “no named institutions” is incomplete.
lesson_applied_later: yes + example (Grok): Apr 2026 rsETH note, rsETH “didn’t qualify for allocation to more conservative (Prime) vaults due to thinner liquidity, heavier LP concentration, and a shorter track record.” Also: they already ran Prime vs Core; they cut 0.86 after the event.
funds_recovered: none
sources: primary, https://forum.morpho.org/t/gauntlet-lrt-core-vault-market-update-4-24-2024-ezeth-price-volatility/578 ; https://vaultbook.gauntlet.xyz/resources/market-volatility ; commentary, https://www.thebigwhale.io/article/risk-curators-at-the-heart-of-loan-market-management-at-defi ; https://protos.com/depeg-of-3b-restaking-token-ezeth-causes-over-60m-in-defi-liquidations/

---

EVENT
curator: Gauntlet
date: 2025-01-09
title: USD0++
incident_id: GAUNTLET-20250109-USD0
type: collateral
impact: N
fault: indirect
class: non-materially-affected
severity: N
protocol_or_vault_url: https://vaultbook.gauntlet.xyz/resources/market-volatility
usd_lost: unknown
pct_of_that_vault_tvl: unknown
status: resolved
what_actually_happened: Usual issued USD0 as a dollar token, and USD0++ was its locked, yield-bearing form used as collateral. Grok missed this. FACT: Usual (9 Jan 2025) replaced 1:1 USD0++→USD0 instant exit with a 0.87-style floor / four-year horizon. USD0++ traded off ~$1. Morpho had hardcoded ~$1 oracles next to Chainlink markets. FACT (VaultBook): USD0/USD0++ lived only in Gauntlet USDC Balanced (then Core), “not yet battle-tested”, they listed the wrapper. Nine txs 21:46 2025-01-09 → 04:02 2025-01-10 withdrew all affected-market funds. Gauntlet: no insolvent debt. RUMOR: insider notice and ~$43M “before the news” (media, not VaultBook). FACT: Tarun Chitra to Blockworks, no advance notice; Usual docs updated before the txs. usd_lost unknown because they claim zero and no contrary primary was found. Listing Usual/USD0++ is the curator choice; $0 insolvency has impact N and fault Indirect.
response_summary: Same-night quantitative thread (VaultBook → https://x.com/gauntlet_xyz/status/1877825680756613372). Full exit, not a pause theatre. No public ban on hardcoded $1 oracles for other yield wrappers.
critics: Insider-timing rumor summarized in Blockworks. Hardcoded vs Chainlink Morpho debate - https://leviathannews.substack.com/p/collateral-damage-usd0-depeg-leaves
lesson_applied_later: no + example: 14 months later Core/Frontier still listed wstUSR/USR/RLP with $1-class oracles, the Resolv path.
funds_recovered: n/a
sources: primary, https://vaultbook.gauntlet.xyz/resources/market-volatility ; https://x.com/gauntlet_xyz/status/1877825680756613372 ; commentary, https://blockworks.co/news/usual-depeg-spurs-defi-instability ; https://leviathannews.substack.com/p/collateral-damage-usd0-depeg-leaves

---

EVENT
curator: Gauntlet
date: 2025-02-21
title: Bybit
incident_id: GAUNTLET-20250221-BYBIT
type: collateral
impact: N
fault: indirect
class: non-materially-affected
severity: N
protocol_or_vault_url: https://vaultbook.gauntlet.xyz/resources/market-volatility
usd_lost: unknown
pct_of_that_vault_tvl: unknown
status: resolved
what_actually_happened: Ethena issued USDe as a synthetic dollar, with sUSDe as its staked, yield-bearing form and Pendle principal tokens as fixed-term claims. Grok missed this. FACT: 21 Feb 2025 Bybit ~500k ETH via Safe frontend compromise. FACT (VaultBook): Gauntlet reallocated $28.9M from Morpho markets that could touch Ethena, $16.7M PT-sUSDE/USDC (USDC Balanced) and $12.2M PT-USDe / PT-sUSDE (DAI Balanced), after Ethena said CEX PnL went to $0 and no backing sat on Bybit. They had listed those Ethena-touching PTs. They state no insolvent debt. They added an internal Safe-hash checker so they would not trust the compromised UI. Not a Bybit custody loss of vault assets; $0 insolvency is impact N and fault Indirect (listed Ethena-touching PTs), not ops. usd_lost unknown (curator: zero).
response_summary: Preemptive realloc + VaultBook write-up + Safe-hash process change.
critics: none sourced against this handling.
lesson_applied_later: yes + example: stop trusting Safe UI hashes. Unclear whether PT-stable loops were structurally capped; those markets returned later.
funds_recovered: n/a
sources: primary, https://vaultbook.gauntlet.xyz/resources/market-volatility

---

EVENT
curator: Gauntlet
date: 2026-03-22
title: Resolv
incident_id: GAUNTLET-20260322-RESOLVUSR
type: collateral
impact: High
fault: indirect
class: affected
severity: High
protocol_or_vault_url: https://app.morpho.org/ethereum/vault/0x8eB67A509616cd6A7c1B3c8C21D48FF57df3d458/gauntlet-usdc-core
usd_lost: unknown
pct_of_that_vault_tvl: unknown
status: unresolved
what_actually_happened: FACT: 02:21:35 UTC 22 Mar 2026 tx 0xfe37f25efd67d0a4da4afe48509b258df48757b97810b28ce4c649658dc33743 minted 50M USR; 03:41 UTC 0x41b6b9376d174165cbd54ba576c8f6675ff966f17609a7b80d27d8652db1f18f minted 30M more. Resolv post-mortem: supply-chain → GitHub/CI → AWS KMS policy abuse of SERVICE_ROLE; no on-chain mint cap. ~$25M extracted as ETH (Resolv). Grok’s “first ~$50M vs ~$100k, later ~80M / ~$25M” is the right split. USR/wstUSR crashed on DEX; Morpho markets still marked USR/wstUSR/RLP near $1 (hardcoded/NAV-style). FACT (Morpho V1 docs): a rich-oracle market on the withdrawal queue is donation-vulnerable even at cap 0 via `supply(onBehalf)`. CLAIM (Chaos/OAK/Rekt): Public Allocator then shoved USDC into already-broken markets; ~96% of ~$6.2M Morpho post-exploit flow to Gauntlet. FACT (Chaos Labs, 23 Mar 13:00 ET): Gauntlet Mainnet Core+Frontier **~$6.05M**, ExtraFi Base **~$433k**, Seamless Base **~$382k**, Resolv Morpho USDC **~$1.02M**. FACT (Gauntlet): Core $4.95M in wstUSR/USDC; Frontier $1.09M wstUSR + $479k PT-RLP-9APR2026 + $374k RLP; partner Resolv USDC ~$1.03M; deposits disabled, caps 0. Those are exposures, not audited P&L. FACT: Paul Frambot, Morpho core fine; ~15 vaults >$10k. FACT: Euler Labs (Gauntlet still DAO curator that day) disabled RLP on Arbitrum Yield and stopped Earn USDC allocations; ~$500k USDC vs RLP later paused, Euler depositor loss unknown. WRONG if copied from Galborta: the bullish Resolv memo was **Steakhouse**, not Gauntlet. Grok did not make that error. usd_lost and % TVL stay unknown. Do not paste the 4,379,827 USDC Merkl pool into usd_lost.
response_summary: FACT (Grok): first public line ~05:24 UTC 22 Mar: most vaults unaffected, “a few high-yield vaults had limited exposure.” D2 posted Morpho UI $4.95M in Core wstUSR (flagship, not Frontier). Gauntlet then posted market exposures, zeroed caps, met Resolv. 1 Apr: still no Resolv remediation plan; forced removals (Core wstUSR, Frontier three markets, Seamless/Extrafi USR, Resolv USDC after timelock). 26 Mar (Grok): Base USDC Core and Mainnet Frontier V2 deallocated from Resolv markets with Gauntlet saying “no bad debt” on those sleeves. On 23 March 2026 Gauntlet posted that it was working on a compensation plan and was confident of remediation from Resolv. On 3 June 2026 it posted that affected wallets could claim 4,379,827 USDC on Merkl, immediately for USDC Core and for illiquid v1.1 vaults, and only once illiquid for USDC Frontier and Seamless. Gauntlet replied the same day: "No further distributions are expected at this time. If further claims are available to users related to this incident, we will communicate through our official channels." Remainder not shown as paid. 6 months and 3 days after the plan. 3 months and 23 days after the no further reply. Prime and USD Alpha stay unimpacted per Gauntlet. No VaultBook Resolv page found. Status stays unresolved.
critics: D2 Finance (do **not** reuse Grok’s duplicated ID `2035596979603218730` as a Gauntlet primary; that ID is the D2 screenshot post) ; Chaos Labs / Omer Goldberg - https://chaoslabs.xyz/posts/defi-s-contagion-loop-when-risk-curators-become-the-risk ; OAK, https://oakresearch.io/en/analyses/investigations/the-resolv-usr-hack-curators-face-their-responsibilities ; Four Pillars - https://4pillars.io/en/issues/reflections-on-the-resolv-protocol-exploit ; The Defiant, https://thedefiant.io/news/hacks/defi-has-seen-resolv-s-usd25m-usr-exploit-many-times-before ; Galborta flow-caps vs Steakhouse zero - https://research.galborta.com/morphos-immutability-ends-where-your-curators-flow-caps-begin/ ; Staking Rewards Core (no post-mortem within a month), https://www.stakingrewards.com/defi/0x8eb67a509616cd6a7c1b3c8c21d48ff57df3d458. Several depositors under the 3 June 2026 claim post, on 3 and 4 June 2026, said the claimable amount was about half the deposit, and below Resolv's stated 0.71 recovery term. That half is their report, not a measured vault loss. Later user reports, through 3 September 2026, still describe a locked deposit or a zero Merkl balance. No later Gauntlet post in that thread shows the other half was paid or that Frontier and Seamless claims opened.
lesson_applied_later: unclear + example: Grok points at rsETH 26 days later (caps to 0, Prime already off young LRTs, no allocator bleed into rsETH). That is a **yes** on LRT concentration, **not** a yes on hardcoded $1 stables or V1 donation. USD0++ already showed the oracle pattern. Sep 2026 PT-sUSDD Morpho markets were still promoted with Gauntlet support. V2 Market V1 adapter avoids the V1 donation edge case; flow-cap policy after Resolv is unverified.
funds_recovered: partial
sources: primary, https://resolv.xyz/blog/resolv-postmortem-march-22-2026-incident ; https://docs.morpho.org/curate/concepts/security-considerations/ ; Grok-cited Gauntlet X (verify in browser; do not use 2035596979603218730 as Gauntlet): https://x.com/gauntlet_xyz/status/2035893955666256054 ; https://x.com/gauntlet_xyz/status/2036162856518099115 ; https://x.com/gauntlet_xyz/status/2037035536351941068 ; https://x.com/gauntlet_xyz/status/2062185818698223704 ; Morpho apps above ; Chaos Labs tally (commentary, dated snapshot) ; Euler forum 1828. commentary, OAK, Four Pillars, The Defiant, Rekt, Galborta. primary https://x.com/gauntlet_xyz/status/2062222947117343026

---

EVENT
curator: Gauntlet
date: 2026-04-18
title: rsETH
incident_id: GAUNTLET-20260418-RSETH
type: collateral
impact: N
fault: indirect
class: non-materially-affected
severity: N
protocol_or_vault_url: https://x.com/gauntlet_xyz/status/2047328707082100805
usd_lost: unknown
pct_of_that_vault_tvl: unknown
status: resolved
what_actually_happened: Kelp was a liquid restaking protocol, and rsETH was its restaked ETH token used as collateral. FACT (Grok + Kelp/LayerZero reporting): 18 Apr 2026 a forged Unichain→Ethereum LayerZero message released ~116,500 unbacked rsETH (~$292M) from Kelp’s OFT adapter. Attacker looped collateral on Aave/Compound/Euler; that is **not** Gauntlet Morpho P&L. FACT (Gauntlet 23 Apr curator post-mortem, quoted on Compound forum 7772): Morpho/Aera direct exposure “non-material” and only in higher-risk sleeves, ~10 rsETH in one higher-yield WETH vault on Unichain (~2.1% of that vault) and 0.48 ETH in a Mainnet PT-agETH market via Index Coop hyETH (~0.2%). Prime had no rsETH (thinner liquidity, LP concentration, short track record). Caps on Kelp-related assets set to 0; allocations exited; precautionary zeros on other LRTs and yield-bearing stables with plausible infra ties. Gauntlet: no user losses, no bad debt across 50+ Morpho & Aera vaults. Independent on-chain reconstitution of those two sleeves was not found. usd_lost is **unknown**, not Grok’s `0`, the zero is the curator’s published result. Note: Gauntlet LinkedIn 19 Apr said “no exposure to rsETH”; 23 Apr post-mortem is the detailed, slightly non-zero map. Use the latter.
response_summary: FACT (Grok). Five days later: exposure map, cap-to-zero, market exits, idle buffers, re-enablement after extra diligence. Framed as sequenced risk-off versus Resolv. Compound-side rsETH oracle work is out of this Morpho/Euler curator sheet (Grok was right to keep it off the incident list as Compound steward).
critics: none sourced that contradict the no-loss Morpho claim.
lesson_applied_later: unclear + example (Grok): no later comparable LRT mint-and-depeg inside Gauntlet Morpho vaults sourced after this date through 2026-09-15.
funds_recovered: n/a
sources: primary, https://x.com/gauntlet_xyz/status/2047328707082100805 (Grok; X fetch 403 here) ; Gauntlet quote reproduced at https://www.comp.xyz/t/rseth-oracle-migration-and-temporary-liquidation-pause-on-ethereum-weth-and-wsteth-markets/7772 ; LinkedIn 23 Apr post-mortem teaser https://www.linkedin.com/posts/gauntlet-xyz_a-curator-perspective-how-gauntlet-handled-activity-7453126193253642242-atpy ; protocol context, Glassnode “Anatomy of a Liquidity Freeze”

---


## Not on Events tab
- `GAUNTLET-20251104-STREAM`, Zero xUSD/deUSD in Morpho books; market report only. Non-exposure is not an event.
- `GAUNTLET-20260410-EULER`, DAO sunset / handover; ops transfer, not an incident.

## STANDING CHECKS

**Events (H/M/L/N/D/I):** `1H 0M 1L 3N 0D 5I`

**Risk docs:** active  
VaultBook https://vaultbook.gauntlet.xyz/vaults/morpho-vaults (Grok + this pass). Methodology https://www.gauntlet.xyz/resources/under-the-hood-unpacking-our-morpho-vault-curation-methodology . Security page https://www.gauntlet.xyz/vaults/security . Grok: hardcoded/internal $1 pricing for stable-like wrappers still a documented design choice after Resolv (VaultBook oracle FAQ). Gap: volatility page still skips Resolv; ezETH has a forum post-mortem, Resolv does not.

**Active since:** 2024-03  
FACT: Morpho blog 27 Feb 2024; first vaults 13 Mar 2024. Agrees with Grok.

**PoC:** X: @gauntlet_xyz  
No public TG @ sourced (Grok + this pass). Morpho forum account “Gauntlet” for ezETH and Euler.

**Any new incident since Grok (Grok’s last dated row 2026-04-18):** none sourced as Morpho/Euler curator **loss** through 2026-09-15. The 3 June 2026 Merkl claim is not a new incident, and the remainder is not shown as paid. Sep 2026 PT-sUSDD listings are not incidents. Euler handover (10 Apr) is off the Events tab.

**Whether a past lesson showed up again:** yes, in part (Grok is right, incomplete). ezETH 2024 = high-LLTV young LRT; rsETH 2026 reused Prime-off-young-LRT + fast cap-to-zero and did **not** repeat Resolv allocator-bleed on rsETH. Hardcoded/internal $1 on stable-like wrappers **did** show up again: USD0++ (Jan 2025, exited, $0) → Resolv USR (Mar 2026, High). Nov 2025 “we don’t list Stream-class backing” did not generalize to Resolv. V1.1 last-depositor-bears-loss is why Frontier/Seamless Merkl waits on illiquidity.

**Clean-if-empty:** not empty as of 2026-09-15.

**Searched:** Grok paste; Gauntlet VaultBook/blog/X/LinkedIn; Morpho app, GraphQL, docs, forum; Euler forum 1828 and 1595; Resolv post-mortem + mint txs; Chaos Labs 23 Mar 2026; Compound 7772 (for rsETH quote only); OAK, Four Pillars, The Defiant, Rekt, Extrafi/Seamless docs. No dedicated Morpho/Euler MCP.
