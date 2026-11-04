---
cursor:
  subagentId: "bc-b07e5869-4b5e-5088-8b71-d538d374ee87"
---

# singularV - merged DD draft

**Draft date:** 2026-09-26
**Inputs:** Grok paste (one INCIDENT block) plus the 19 Apr 2026 tweet, Morpho API, and the Morpho forum intro. User-edit before any sheet paste.
**IDs on Events:** `SINGULARV-20260418-HGETH` (N + Indirect).
**Labels:** readable prose. Do not invent USD or %.

singularV (`@SingularV_xyz`, [singularv.xyz](https://www.singularv.xyz/)) is a Morpho curator. Morpho id `singularv`. Curator address `0x46057881E0B9d190920FB823F840B837f65745d5`. API AUM on this pass is about $279k. That figure is deposits, not a loss. The forum intro (22 Jul 2025) says the brand is operated by Alphanonce. No live Euler vault was found. svUSDC on Upshift is a separate product and is not a Morpho row.

**Morpho vaults checked (2026-09-26)**

| Vault | Address | Listed | Deposits (API) | Share price |
|---|---|---|---|---|
| SingularV ETH (V1) | `0x739d8a60ED4b14E4cB6DCAEAF79d2ec0Ca092237` | yes | about $126k | 1.102 |
| SingularV ETH (V2) | `0xF39AC02DEc8faE8292d5f42202e4Cd885356256B` | yes | about $153k | 1.019 |
| SingularV USDT (V1) | `0xbdd4859050468fBc11Dec07113a6e633608A1372` | no | about $33k | 1.062 |
| SingularV USDT (V2) | `0xf7c83eD78D1dcAd6736F9f74C8A2293314441De6` | no | about $74k | 1.022 |

V1 ETH was created 2025-06-19. V1 USDT was created 2025-07-08. Weekly share-price points on V1 ETH and V1 USDT do not fall.

---

EVENT
curator: singularV
date: 2026-04-18
title: hgETH
incident_id: SINGULARV-20260418-HGETH
type: collateral
impact: N
fault: indirect
class: non-materially-affected
severity: N
protocol_or_vault_url: https://app.morpho.org/ethereum/vault/0x739d8a60ED4b14E4cB6DCAEAF79d2ec0Ca092237/singularv-eth
usd_lost: unknown
pct_of_that_vault_tvl: 38.2
status: resolved
what_actually_happened: Kelp's High Growth vault used Upshift infrastructure. hgETH was its yield-bearing receipt token, backed mainly by leveraged rsETH strategies. SingularV ETH lent WETH against hgETH rather than raw rsETH. On 18 Apr 2026, Kelp's LayerZero rsETH route was drained. Aave and Kelp freezes then blocked repayment from the hgETH market.
response_summary: On 19 Apr, SingularV withdrew available liquidity and set the market's supply cap to zero. It said 491 ETH, or 38.2% of the vault, remained supplied and promised an investigation. Its 21 Apr and 30 Apr letters gave no numbered close-out. By 26 Sep, the vault no longer supplied the market. The market showed about 8.27 WETH of realized bad debt, but no source identified that amount as SingularV's loss. No refund or final close-out was published.
critics: No named critic of SingularV on this market was found. A Morpho leadership comment covered protocol isolation, not this curator's P&L. Grok cited a vaults.fyi Kelp warning. That sentence was not on the page extract this pass.
lesson_applied_later: unclear. They capped hgETH/WETH. No later public ban on nested LRT-loop receipt tokens was found. The live ETH allocation is wstETH and WBTC.
funds_recovered: n/a
sources: primary https://x.com/SingularV_xyz/status/2045656067515076797 ; primary https://app.morpho.org/ethereum/vault/0x739d8a60ED4b14E4cB6DCAEAF79d2ec0Ca092237/singularv-eth ; primary https://app.morpho.org/ethereum/market/0xec97655fab06b53bfad9d8c2358768aed5a1c97b204d3e51e2a7cb0cb786a264/hgeth-weth ; primary https://x.com/SingularV_xyz/status/2046674591402414202 ; primary https://x.com/SingularV_xyz/status/2049693027724300729 ; primary https://forum.morpho.org/t/introduction-on-singularv/1893 ; commentary https://www.panews.io/articles/019da49e-34c0-76c1-9e8e-3be5bcb0e6ae ; commentary https://curation.yearn.fi/report/kerneldao-hgeth/

---

## Not on Events tab

- svUSDC investor letters. Read again this pass. The 21 Apr 2026 letter says svUSDC had no direct rsETH exposure, that LP was reduced, that depegged sUSDe was bought for redemption, and that a USD1 position on Dolomite was kept after they confirmed no direct exposure. The 28 Apr 2026 letter, posted 30 Apr 2026, says capital held during the crunch was being redeployed, that USDC was deposited on Dolomite, and that they planned to scale the sUSDe loop. Neither letter describes a second freeze, bad debt, or haircut besides the hgETH residual. No new Events row.
- March 2026 USR/RLP "no exposure" line in the paste. Non-exposure is not a row. Not re-opened.
- Website line that they curate on Euler. No vault URL found.
- Market realized bad debt of about 8.27 WETH on hgETH/WETH. Not booked. The vault is not a current supplier and its weekly share price did not fall.
- Bad debt on PT-eUSDE/USDC and yUSD/USDC markets. SingularV USDC supply to those markets is 0 on this read.

## STANDING CHECKS (2026-09-26)

**Events (H/M/L/N/D/I):** `0H 0M 0L 1N 0D 1I`

Risk docs: stale
- One Morpho forum introduction (22 Jul 2025). No later vault risk memo was found.

Active since: 2025-06
- SingularV ETH created 2025-06-19. SingularV USDT created 2025-07-08. Forum intro 2025-07-22. X account joined 21 Jan 2025.

PoC: X `@SingularV_xyz`. Site https://www.singularv.xyz/. A Telegram group was not on the Morpho intro or the X bio checked here.

Any new incident since 2026-04-19: none separate through 2026-09-26. The 21 Apr and 28 Apr svUSDC letters were read. They do not describe another incident besides the hgETH freeze. The hgETH residual is the same event, and the vault no longer supplies that market.

Whether a past lesson showed up again: no second nested LRT-loop freeze was sourced on another SingularV Morpho vault.

Searched: the 19 Apr tweet and the two April letters, Morpho API vaults and the hgETH market, weekly share prices, forum intro 1893. No SingularV vault USD loss was sourced.
