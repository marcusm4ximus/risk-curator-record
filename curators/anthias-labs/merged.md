---
cursor:
  subagentId: "bc-b07e5869-4b5e-5088-8b71-d538d374ee87"
---

# Anthias Labs - merged DD draft

**Draft date:** 2026-09-26
**Grok paste:** zero INCIDENT blocks. Independent check agrees. Edit before any sheet paste.

**IDs on Events:** Moonwell Core MAMO (affected High).
**Labels:** readable prose. Do not invent USD or %. Morpho vault share prices are a separate book.

Anthias Labs (`@anthiasxyz`, [anthias.xyz](https://anthias.xyz/)) is the Morpho curator on Moonwell's Base vaults. Morpho curator id `anthias-labs`. Curator address `0x08eDEbFFaE68970DCf751baa826182b3a4aCFC05`. Morpho API AUM on this pass is about $10.47 million. That figure is deposits, not a loss. No Euler vault under this name was found.

**Morpho vaults (2026-09-26)**

| Vault | Address | Listed | Deposits (API) | Share price |
|---|---|---|---|---|
| Moonwell Flagship USDC | `0xc1256Ae5FF1cf2719D4937adb3bbCCab2E00A2Ca` | yes | about $4.10M | 1.089 |
| Moonwell Flagship ETH | `0xa0E430870c4604CcfC7B38Ca7845B1FF653D0ff1` | yes | about $4.31M | 1.033 |
| Moonwell Frontier cbBTC | `0x543257eF2161176D7C8cD90BA65C2d4CaEF5a796` | yes | about $1.13M | 1.207 |
| Moonwell Flagship EURC | `0xf24608E0CCb972b0b0f4A6446a0BBf58c701a026` | yes | about $0.93M | 1.031 |
| Moonwell Frontier cbBTC (V2) | `0xdbA76Bc542bb07538e046B40F2e8a215B409F7A8` | yes | about $0.37M | 1.000 |
| Moonwell Ecosystem USDC | `0xE1bA476304255353aEF290e6474A417D06e7b773` | no | about $19.1k | 1.057 |

Flagship USDC, ETH, and EURC were created in 2024, before this curator. MIP-B56 (29 Jan 2026) proposes moving Base vault risk curation from Block Analitica / B.Protocol to Anthias. V2 shells for this curator were created 2026-02-06. Ecosystem USDC was created 2025-09-25. The Morpho intro on 2025-10-28 says it lends USDC against WELL, stkWELL, and MAMO.

Weekly share-price points for Flagship USDC (from 2024-06-13) and Ecosystem USDC (from 2025-10-02) do not fall. Allocated markets on the listed V1 vaults show 0 bad debt on this read. Ecosystem USDC is unlisted, deposits are disabled, and the live book is stkWELL/USDC plus dust WELL. Caps on those lines are 0. MAMO is not in the current allocation. Base MAMO/USDC markets checked have no supplying vault and 0 bad debt.


---

EVENT
curator: anthias-labs
date: 2026-08-27
title: MAMO
incident_id: ANTHIAS-20260827-MAMO
type: collateral
impact: High
fault: indirect
class: affected
severity: High
protocol_or_vault_url: https://forum.moonwell.fi/t/post-mortem-mamo-market-incident-on-base/2208
usd_lost: unknown
pct_of_that_vault_tvl: unknown
status: unresolved
what_actually_happened: Mamo was an automated yield app on Base. MAMO was its utility token and was used as collateral in Moonwell's Core markets. On 27 Aug 2026, an actor inflated MAMO collateral accounting and pushed its price feed. The actor then borrowed cbBTC, WETH, USDC, and wstETH supplied to those markets.
response_summary: On 27 Aug, Moonwell cut the borrow caps on the borrowed assets and the MAMO supply cap to nominal amounts. On 28 Aug, Anthias published a post-mortem that put remaining borrower obligations at about $9.131M on Moonwell's oracle basis. Its 3 Sep update showed about $2.535M of Base USDC bad debt and 100% utilization. On 10 Sep, Anthias put bad debt at about $2.311M. On 17 Sep, it reported about $2.317M of gross exposure and average USDC utilization of 100%. One depositor reported withdrawing on 18 Sep, while another said on 19 Sep that only about $4,000 remained available. No Anthias post gave a final repayment amount, withdrawal plan, or haircut.
critics: Alej, a MAMO supplier, asked on 31 Aug 2026 whether reserves could let suppliers exit, and said available liquidity was a small fraction of supply. Dr_Bahmani said on 4 Sep 2026 they deposited USDC through Mamo after the post-mortem and then could not withdraw. On 18 September 2026 Dr_Bahmani wrote that they had withdrawn their position. On 19 September 2026 Tom wrote that they still could not withdraw more than $4,000 split between a Mamo USDC position and direct Moonwell mUSDC, and that the team had not answered. No Anthias reply is on that page. A forum comment said to bring Gauntlet back. None of those posts states a final haircut.
lesson_applied_later: unclear. Caps were cut the same day. No later public rule against thin-token Core listings was found in this pass.
funds_recovered: none
sources: primary https://forum.moonwell.fi/t/post-mortem-mamo-market-incident-on-base/2208 ; primary https://forum.moonwell.fi/t/anthias-labs-weekly-market-updates/1772?page=5 ; primary https://forum.moonwell.fi/t/governance-request-fair-withdrawal-mechanism-for-the-illiquid-base-musdc-market/2230 ; commentary https://forum.moonwell.fi/t/formal-governance-request-treatment-of-post-incident-depositors-and-recovery-plan-for-the-base-musdc-core-market/2224

---

## Not on Events tab

- Other Core episodes the paste lists (10 Oct 2025, 4 Nov 2025 wrsETH, 15 Feb 2026 cbETH). The 10 Oct 2025 Moonwell report is Anthias's, and it is not the Felix row. See Felix below.
- Felix. Anthias's 28 Oct 2025 Morpho intro says the 10 Oct 2025 crash produced no bad debt and no forced liquidations on eight Felix vaults they advise. Felix Protocol is its own Hyperliquid curator. It is not a slug in this book. No sourced Felix depositor loss was found, so no Events row. The about $1.72 million bad-debt table in Anthias's 10 Oct 2025 Moonwell report is VIRTUAL, MORPHO, and AERO on Moonwell Core, not Felix.
- Ecosystem USDC was designed to include MAMO. No dated loss, pause announcement, or bad debt on that Morpho vault was sourced. The Core MAMO row above is the Moonwell market, not this vault.

## STANDING CHECKS (2026-09-26)

**Events (H/M/L/N/D/I):** `1H 0M 0L 0N 0D 1I`

Risk docs: active
- Moonwell risk site https://risk.anthias.xyz/moonwell/core/base/overview and ongoing forum parameter posts. No standalone Morpho-vault methodology PDF was found.

Active since: 2025-09 for Ecosystem USDC (vault created 2025-09-25; forum intro 2025-10-28). Flagship and Frontier Base vaults show this curator on-chain now. The transfer proposal is 2026-01-29. V2 shells are dated 2026-02-06. Moonwell Core risk work is older and is not vault curation.

PoC: X `@anthiasxyz`. Email team@anthias.xyz. Site https://anthias.xyz. No public Telegram on the Morpho socials.

Any new incident since Grok: the paste left Core MAMO off the vault book. This pass puts it on Events because Anthias wrote the post-mortem as the risk curator of that market. Morpho vault USD loss is still unsourced.

Whether a past lesson showed up again: n/a on the Morpho vault book. The Core MAMO caps were cut the same day. No second thin-token Core loss was added here.

Searched: Morpho API curator `anthias-labs` and vault allocations, MIP-B56, Morpho forum intro 2061, Moonwell MAMO post-mortem, the 10 Oct 2025 Moonwell report, Felix vault mentions in merged and twitter-grok files, Base MAMO/USDC markets. No Morpho vault USD loss was sourced. No Felix depositor loss was sourced.
