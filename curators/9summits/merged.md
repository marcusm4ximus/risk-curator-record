---
cursor:
  subagentId: "bc-fb666fb3-0441-5da8-bd93-652a62976384"
---

# 9Summits: merged DD draft

**Draft date:** 2026-09-25
**Inputs:** Grok paste (six INCIDENT blocks) plus tweet text, Morpho GraphQL, and `lostAssets` calls. User-edit before any sheet paste.
**IDs on Events:** Resolv (Med + Indirect), YieldETH (Low + Indirect), YieldBTC (Med + Indirect), and BNKR (N + Indirect). Kelp Aave, Kelp liquidate, and fxUSD sunset are off the tab.
**Labels:** FACT / CLAIM / RUMOR in prose. Do not invent USD or %.

9Summits (`@nine_summits`, [9summits.io](https://9summits.io/)) curates Lagoon and Morpho vaults. Morpho curator id `9summits`, AUM about $601k on 2026-09-25. That AUM is the Morpho remainder, not the Lagoon flagship books. Ethereum USDC `0x1E2aAaDcF528b9cC08F43d4fd7db488cE89F5741` was created 2025-03-03. Grok dates the X brand to 2024-10 and Flagship USDC on Lagoon to 2024-12. Those two dates were not re-checked.

---

EVENT
curator: 9Summits
date: 2026-03-22
title: Resolv
incident_id: 9SUMMITS-20260322-RESOLV
type: collateral
impact: Med
fault: indirect
class: affected
severity: Med
protocol_or_vault_url: https://app.morpho.org/ethereum/vault/0x1E2aAaDcF528b9cC08F43d4fd7db488cE89F5741/9summits-usdc
usd_lost: 41035.97
pct_of_that_vault_tvl: unknown
status: unresolved
what_actually_happened: Resolv was a delta-neutral stablecoin protocol. USR was its dollar token, while RLP was meant to absorb losses first. On 22 Mar 2026 a compromised mint key was used to issue unbacked USR. Morpho's donation path remained open and let 32 supply-on-behalf transactions route assets from 9Summits USDC into the impaired USR market.
response_summary: 9Summits set the market cap to zero early on 22 Mar and later documented the 32 transactions. On 25 Sep the vault still reported 41,035.97 USDC in lost assets, so the loss remained unresolved.
critics: OAK Research wrote that 9Summits documented 32 transactions at 12:33 UTC that got through after a 03:00 UTC intervention, and put residual bad debt at about $41,000. Rekt repeated that account. Chaos Labs listed the same magnitude as an exposure line, not as a separate loss study. 4pillars wrote that 9Summits kept supplying the impaired market for about 10 hours, in a piece aimed mostly at Gauntlet.
lesson_applied_later: yes. Example: 19 May BNKR cap-to-zero the same day Bankr reported wallet compromises, and 18 May Kelp positions on Base WETH were manually liquidated. The Resolv residual itself is still in `lostAssets`.
funds_recovered: none
sources: primary eth_call `lostAssets()` and `totalAssets()` on `0x1E2aAaDcF528b9cC08F43d4fd7db488cE89F5741` ; primary https://app.morpho.org/ethereum/vault/0x1E2aAaDcF528b9cC08F43d4fd7db488cE89F5741/9summits-usdc ; commentary https://oakresearch.io/en/analyses/investigations/the-resolv-usr-hack-curators-face-their-responsibilities ; commentary https://rekt.news/resolv-labs-rekt ; commentary https://chaoslabs.xyz/posts/defi-s-contagion-loop-when-risk-curators-become-the-risk ; commentary https://4pillars.io/en/issues/reflections-on-the-resolv-protocol-exploit

---

NOT A LIVE EVENT
curator: 9Summits
date: 2026-04-18
title: Kelp Aave
incident_id: 9SUMMITS-20260418-KELPAAVE
type: collateral
impact: N
fault: indirect
class: non-materially-affected
severity: N
protocol_or_vault_url: https://app.lagoon.finance/?curator=curator%3A9summits&pageSize=25
usd_lost: unknown
pct_of_that_vault_tvl: unknown
status: resolved
what_actually_happened: Kelp was a liquid restaking protocol, and rsETH was its restaked ETH token used as collateral. On 18 Apr 2026 the Kelp and rsETH exploit created likely bad debt in Aave V3's WETH reserve while 9Summits' Lagoon vaults were supplying Aave.
response_summary: 9Summits withdrew all Aave positions from its Lagoon vaults the same day. It said the vaults then had no Kelp exposure and depositor funds were safe. No loss was reported.
critics: No critic of this Lagoon exit was found. The curator's own funds-safe line is the claim. No counter-figure was published.
lesson_applied_later: yes. Example: on 18 May the Base Morpho WETH vaults were manually pulled off Kelp markets, and the curator said those books were bad-debt free.
funds_recovered: n/a
sources: primary https://x.com/nine_summits/status/2045621279324311971 ; primary https://app.lagoon.finance/?curator=curator%3A9summits&pageSize=25

---

NOT A LIVE EVENT
curator: 9Summits
date: 2026-05-18
title: Kelp liquidate
incident_id: 9SUMMITS-20260518-KELPLIQ
type: collateral
impact: N
fault: indirect
class: non-materially-affected
severity: N
protocol_or_vault_url: https://app.morpho.org/base/vault/0x5496b42ad0deCebFab0db944D83260e60D54f667/9summits-weth-core-1-1
usd_lost: unknown
pct_of_that_vault_tvl: unknown
status: resolved
what_actually_happened: Kelp was a liquid restaking protocol, and rsETH was its restaked ETH token used as collateral. After the Kelp exploit, 9Summits' Base Morpho WETH 1.0 and 1.1 vaults still had positions in Kelp markets.
response_summary: On 18 May 2026 9Summits said it had manually liquidated and withdrawn those positions. It said both vaults were fully liquid and free of bad debt. An on-chain read showed no lost assets for WETH 1.1, and no loss was reported.
critics: No critic of these two Base vaults was found. The curator's own bad-debt-free line is the claim the `lostAssets` read supports on WETH 1.1.
lesson_applied_later: unclear. No later Kelp listing on a 9Summits vault was found.
funds_recovered: n/a
sources: primary https://x.com/nine_summits/status/2056460027653669179 ; primary https://x.com/nine_summits/status/2056457641241546766 ; primary Base WETH 1.1 https://app.morpho.org/base/vault/0x5496b42ad0deCebFab0db944D83260e60D54f667/9summits-weth-core-1-1

---

EVENT
curator: 9Summits
date: 2026-05-19
title: BNKR cap
incident_id: 9SUMMITS-20260519-BNKRCAP
type: collateral
impact: N
fault: indirect
class: non-materially-affected
severity: N
protocol_or_vault_url: https://app.morpho.org/base/vault/0x85DfBE8C834aE0451613E58604E6E165Abb5c4Db/fxusd-agentic-stablecoin
usd_lost: unknown
pct_of_that_vault_tvl: unknown
status: resolved
what_actually_happened: Bankr was an AI trading agent, and BNKR was its utility token used as collateral. On 19 May 2026 Bankr reported compromised wallets and disabled transactions while 9Summits' fxUSD Agentic vault had an allocation to the BNKR market.
response_summary: 9Summits set the BNKR supply cap to zero and removed the full allocation the same day. It said depositors were safe, and no loss was reported. The vault was sunset on 14 Jul.
critics: No critic of the BNKR cap was found.
lesson_applied_later: yes. Example: the same vault's deposits were halted on 14 Jul 2026.
funds_recovered: n/a
sources: primary https://x.com/nine_summits/status/2056814422555795955 ; primary https://x.com/bankrbot/status/2056764771488436320 ; primary https://app.morpho.org/base/vault/0x85DfBE8C834aE0451613E58604E6E165Abb5c4Db/fxusd-agentic-stablecoin

---

EVENT
curator: 9Summits
date: 2026-06-30
title: YieldETH
incident_id: 9SUMMITS-20260630-YIELDETH
type: collateral
impact: Low
fault: indirect
class: affected
severity: Low
protocol_or_vault_url: https://app.lagoon.finance/vault/1/0x07ed467acd4ffd13023046968b0859781cb90d9b
usd_lost: unknown
pct_of_that_vault_tvl: unknown
status: resolved
what_actually_happened: YieldBasis ran leveraged Curve liquidity pools whose shares earned fees and rewards. Flagship ETH held staked cbBTC in legacy pools. Across two drawdowns, those pools fell below the value already recognized in the vault's share price.
response_summary: On 30 Jun 2026 9Summits moved the position to new pools, realizing the gap. It returned about 10.9 ETH of fees from its treasury. After the rebate, it reported an 8.35 ETH loss and a 0.43% share-price reduction. It said the YieldBasis position remained net positive overall.
critics: No named critic of the ETH figure was found.
lesson_applied_later: no. Example: eight days later Flagship cbBTC needed a treasury loan after the same YieldBasis legacy-pool migration.
funds_recovered: partial
sources: primary https://x.com/nine_summits/status/2071981485700284522 ; primary https://app.lagoon.finance/vault/1/0x07ed467acd4ffd13023046968b0859781cb90d9b

---

EVENT
curator: 9Summits
date: 2026-07-08
title: YieldBTC
incident_id: 9SUMMITS-20260708-YIELDCBBTC
type: collateral
impact: Med
fault: indirect
class: affected
severity: Med
protocol_or_vault_url: https://app.lagoon.finance/vault/1/0xb09f761cb13baca8ec087ac476647361b6314f98
usd_lost: unknown
pct_of_that_vault_tvl: unknown
status: resolved
what_actually_happened: YieldBasis ran leveraged Curve liquidity pools whose shares earned fees and rewards. Flagship cbBTC held about 108 cbBTC in one of those pools. Rewards from the legacy pool had already been counted in the vault's share price, but the pool carried a temporary redemption discount.
response_summary: On YieldBasis guidance, Tulipa Capital and 9Summits moved the position from 111.9263 to 108.506 cbBTC. On 8 Jul 2026 they disclosed that the remaining gap was 2.288 cbBTC and lent that amount to the vault for one year at 2%. This prevented a share-price reduction for depositors. The vault must repay 2.334 cbBTC.
critics: No rebuttal of Tulipa's numbers was found.
lesson_applied_later: unclear. No later YieldBasis mark event on a 9Summits vault was found after this date.
funds_recovered: n/a
sources: primary https://x.com/tulipacapital/status/2074959086433751217 ; primary https://x.com/nine_summits/status/2074963591631937661 ; primary https://app.lagoon.finance/vault/1/0xb09f761cb13baca8ec087ac476647361b6314f98

---

## Not on Events tab

- `9SUMMITS-20260714-FXUSDSUNSET`. 14 Jul sunset of fxUSD Agentic on Base. Deposits halted. Share price never fell (min 1, now about 1.007). Wind-down, not a haircut. Residual TVL about $33k.
- `9SUMMITS-20260418-KELPAAVE` and `9SUMMITS-20260518-KELPLIQ`. Kelp Aave and Kelp liquidate are not incidents and are not on the live event list. The write-ups above are research notes only.
- Flint USD tracker return. Grok: consistent with EUR/USD on euro bonds, and 9Summits warned that USDC returns vary with EUR/USD. Not re-checked. Not a loss row.
- Summer.fi / BA Labs objection to onboarding Flagship ETH/USDC because Lagoon settlement is async. Structural comment, not a dated loss.

## STANDING CHECKS

**Events (H/M/L/N/D/I):** `0H 2M 1L 1N 0D 4I`

**Risk docs:** none as a living vault-risk book. Grok: generic site disclaimer, a May 2025 factsheet, and Morpho text that the curator has not submitted a disclosure on at least one USDC vault. Those pages were not re-opened.

**Active since:** 2025-03 on Morpho (USDC vault created 2025-03-03). Grok dates `@nine_summits` to 15 Oct 2024 and Flagship USDC Lagoon to 2024-12-19. Those dates were not re-checked.

**PoC:** X `@nine_summits`. Email on https://9summits.io/ . No public Telegram found.

**Any new incident since 2026-07-14:** none material found through 2026-09-25. Grok's later product notes (Piku, Hyperliquid synth, 9Swap) were not re-opened. Resolv `lostAssets` from March is still on the USDC vault.

**Repeated lesson:** yes. YieldBasis legacy-pool marks hit Flagship ETH on 30 Jun (PPS cut, partial fee rebate) and Flagship cbBTC on 8 Jul (treasury loan, PPS held flat).
