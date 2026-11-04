---
cursor:
  subagentId: "bc-b07e5869-4b5e-5088-8b71-d538d374ee87"
---

# UltraYield - merged DD draft

**Draft date:** 2026-09-26
**Inputs:** Grok paste (four INCIDENT blocks) plus the tweets and Morpho pages opened this pass. User-edit before any sheet paste.
**IDs on Events:** USD0++ (N + Indirect), UltraVault free mint (N + Direct), Balancer / Resolv (N + Indirect), hgETH (Low + Indirect).
**Labels:** readable prose. Do not invent USD or %.

UltraYield (`@ultrayieldapp`, [ultrayield.app](https://ultrayield.app/)) curates Morpho vaults and other products (Kelp hgETH, Midas sleeves, Ether.fi). Morpho curator id `ultrayield`. API AUM on this pass is about $636k. That figure is deposits, not a loss. X account joined 3 Sep 2024. Morpho forum intro for UltraYield USDC is 13 Jun 2025. The V1 USDC vault was created 16 Apr 2025, after the USD0++ posts.

**Alias: Edge Capital.** Slug stays `ultrayield`. DefiLlama describes UltraYield as created by the hedge fund Edge Capital. DappRadar calls it the DeFi arm of Edge Capital. Edge Capital's Vadim Khramov said the smart-contract team is called UltraYield, and that "ultra yield by edge capital" is this vault curator. The Morpho USDC vault symbol is edgeUSDC. A 15 Dec 2025 UltraYield LinkedIn post says the strategies are powered by Edge Capital's expertise. A 3 Nov 2025 UltraYield post separately names Edge Capital as the curator of Midas sleeves (mSYRUPUSDp, mEDGE, mBASIS). That sentence is not a second loss.

**Morpho vaults checked (2026-09-26)**

| Vault | Address | Listed | Deposits (API) | Share price |
|---|---|---|---|---|
| UltraYield USDC Core (V2) | `0x244f46262D9aD408B746E74aBdD010E9002fb7eE` | yes | about $130k | 1.018 |
| UltraYield USDT Core (V2) | `0x85F3d81a39dF458E45d5EA20f9EB937fAafd282f` | yes | about $101k | API printed about 2.02. Not used as P&L |
| UltraYield USDC (V1, edgeUSDC) | `0x0562AE950276B24F3eAE0d0a518dADB7Ad2F8D66` | no | about $1.4k | 1.073 |

V1 USDC weekly points from 17 Apr 2025 do not fall. A falling TVL on that book is not a haircut.

---

EVENT
curator: ultrayield
date: 2025-01-12
title: USD0++
incident_id: ULTRAYIELD-20250112-USD0PP
type: collateral
impact: N
fault: indirect
class: non-materially-affected
severity: N
protocol_or_vault_url: https://x.com/ultrayieldapp/status/1878370724529725485
usd_lost: unknown
pct_of_that_vault_tvl: unknown
status: unresolved
what_actually_happened: Usual issued USD0 as a dollar token, and USD0++ was its locked, yield-bearing form used as collateral. On 12 Jan 2025, a change to the USD0++ redemption price reduced its value in strategies used by UltraYield-curated vaults.
response_summary: On 12 Jan, UltraYield said it had checked with Hashnote and that the underlying Treasury bill principal remained intact. It said it would adjust vault share prices and work with Usual. It later said the adjustment could be reversed if USD0++ recovered, but it did not publish a final share price or outcome.
critics: No named critic of UltraYield on this markdown was found. The redemption change itself is Usual's policy, not a critique of this curator.
lesson_applied_later: unclear. The 13 Jun 2025 Morpho intro still listed structured collateral such as mEDGE, csUSDL, and syrupUSDC. That post has no USD0++ haircut policy.
funds_recovered: unknown
sources: primary https://x.com/ultrayieldapp/status/1878370724529725485 ; primary https://x.com/ultrayieldapp/status/1878370726949830764 ; primary https://forum.morpho.org/t/ultrayield-usdc-vault-updates/1827

---

EVENT
curator: ultrayield
date: 2025-05-08
title: Free mint
incident_id: ULTRAYIELD-20250508-FREEMINT
type: exploit
impact: N
fault: direct
class: non-materially-affected
severity: N
protocol_or_vault_url: https://www.chainsecurity.com/security-audit/ultrayield-smart-contracts
usd_lost: unknown
pct_of_that_vault_tvl: unknown
status: resolved
what_actually_happened: ChainSecurity found a critical bug in UltraVault's mint function during a review of code received on 31 Mar 2025. If a mint was below the minimum or would exceed the deposit limit, previewMint returned zero assets, allowing a caller to receive shares without paying.
response_summary: UltraYield removed the limits in the 23 Apr fix. On 8 May, ChainSecurity marked the issue corrected. The report describes no live exploit or depositor loss.
critics: ChainSecurity rated it critical. No depositor complaint about a free mint was found.
lesson_applied_later: yes. Example: the published fix version no longer has those limits. The later Morpho USDC vault is a different product.
funds_recovered: n/a
sources: primary https://www.chainsecurity.com/security-audit/ultrayield-smart-contracts ; primary https://reports.chainsecurity.com/Ultra/ChainSecurity_Ultra_UltraYield_Audit.pdf

---

EVENT
curator: ultrayield
date: 2025-11-03
title: Balancer
incident_id: ULTRAYIELD-20251103-BALANCER
type: collateral
impact: N
fault: indirect
class: non-materially-affected
severity: N
protocol_or_vault_url: https://x.com/ultrayieldapp/status/1985289871993311603
usd_lost: unknown
pct_of_that_vault_tvl: unknown
status: resolved
what_actually_happened: Balancer was a decentralized exchange built around liquidity pools. On 3 Nov 2025, a Balancer exploit affected pools on multiple chains while UltraYield had a small exposure through positions on other chains.
response_summary: UltraYield exited the positions that day and said it took no loss. It also said the Edge Capital-curated Midas vaults mSYRUPUSDp, mEDGE, and mBASIS were unaffected.
critics: No named critic of this exit was found. The zero-loss line is the curator's own sentence.
lesson_applied_later: unclear. A later xUSD refusal post is in the Grok paste and was not re-opened here.
funds_recovered: n/a
sources: primary https://x.com/ultrayieldapp/status/1985289871993311603 ; primary https://x.com/ultrayieldapp/status/1985314152366342633

---

EVENT
curator: ultrayield
date: 2026-03-22
title: Resolv
incident_id: ULTRAYIELD-20260322-RESOLV
type: collateral
impact: N
fault: indirect
class: non-materially-affected
severity: N
protocol_or_vault_url: https://x.com/ultrayieldapp/status/2035808972314116335
usd_lost: unknown
pct_of_that_vault_tvl: unknown
status: resolved
what_actually_happened: Resolv was a delta-neutral stablecoin protocol. USR was its dollar token, while RLP was the junior token meant to absorb losses first. On 22 Mar 2026, a compromised key was used to mint unbacked USR. UltraYield's exposure was indirect through Fluid USDT0 lending on Plasma.
response_summary: On 22 Mar, UltraYield said it had no direct Resolv exposure and that unbacked USR had not reached Plasma. It said mEDGE had no exposure, while mBASIS and msyrupUSDp had only the indirect Fluid exposure. On 24 Mar, it closed the Fluid positions and said depositors were not harmed.
critics: UltraYield was replying to @wumpycrypto. The reply says mEDGE was clean and that mBASIS and msyrupUSDp were only indirect. The original list was not re-opened here.
lesson_applied_later: yes. Example: they closed the Fluid sleeve instead of leaving the indirect book open. The hgETH note the next month is a different collateral.
funds_recovered: n/a
sources: primary https://x.com/ultrayieldapp/status/2035808972314116335 ; primary https://x.com/ultrayieldapp/status/2035809700944425072 ; primary https://x.com/ultrayieldapp/status/2036396752496898302

---

EVENT
curator: ultrayield
date: 2026-04-19
title: hgETH
incident_id: ULTRAYIELD-20260419-RSETH
type: collateral
impact: Low
fault: indirect
class: affected
severity: Low
protocol_or_vault_url: https://kerneldao.com/kelp/gain/growth-vault/
usd_lost: unknown
pct_of_that_vault_tvl: unknown
status: unresolved
what_actually_happened: Kelp was a liquid restaking protocol, and its High Growth vault issued hgETH backed mainly by rsETH strategies. On 19 Apr 2026, an rsETH bridge exploit exposed hgETH, one of UltraYield's curated products.
response_summary: On 19 Apr, UltraYield said its lending markets had no rsETH exposure and every curated vault except hgETH should be unaffected. It said it was waiting on Kelp and Aave to assess hgETH. A Yearn review dated 29 Jun measured the hgETH exchange rate at 0.9941 rsETH, down about 4.1% from 27 Apr, with deposits and withdrawals open. UltraYield did not publish a final impact or compensation plan, and did not show holders were made whole.
critics: No named critic of UltraYield on hgETH was found.
lesson_applied_later: unclear. The gitbook still lists Kelp High Growth ETH. That page was not dated as a post-April retirement.
funds_recovered: none
sources: primary https://x.com/ultrayieldapp/status/2045802874303619202 ; primary https://x.com/ultrayieldapp/status/2045802876887261598 ; primary https://ultrayield.gitbook.io/ultrayield/basics/currently-curated-vaults ; commentary https://curation.yearn.fi/report/kerneldao-hgeth/

---

## Not on Events tab

- xUSD/Stream (4 Nov 2025), Drift (1 Apr 2026), and Neutrl (13 Aug 2026) "no exposure" posts in the paste. Not re-fetched. Non-exposure is not a row.
- ChainSecurity free mint is on Events as `ULTRAYIELD-20250508-FREEMINT`. It is not left off.
- V1 UltraYield USDC TVL decline. Weekly share price does not fall.
- API share print of about 2.02 on UltraYield USDT Core. Not treated as a gain or a loss.

## STANDING CHECKS (2026-09-26)

**Events (H/M/L/N/D/I):** `0H 0M 1L 4N 1D 4I`

Risk docs: stale
- Morpho forum posts from 13 Jun 2025 and a gitbook curated-vaults page that still lists Kelp, Midas, Ether.fi, and others. It does not read as a current Morpho V2 risk memo. Grok's note that a Morpho USDC page says the curator has not submitted a disclosure was not re-opened.

Active since: 2024-09 on X (account joined 3 Sep 2024). Morpho USDC vault created 16 Apr 2025. Forum intro 13 Jun 2025.

PoC: X `@ultrayieldapp`. Site https://ultrayield.app/. Grok lists Telegram https://t.me/ultrayieldapp. That group was not opened here.

Any new incident since 13 August 2026: none sourced through 26 September 2026. The hgETH row is the same April thread, now affected Low, with `usd_lost` unknown and `funds_recovered` none. Not shown as made whole.

Whether a past lesson showed up again: partial. They closed indirect Resolv exposure in March 2026, then in April still had hgETH as the one product they would not call unaffected. The January share-price adjustment has no published policy in the June Morpho intro.

Searched: the January, November, March, and April tweets named above, Morpho API vaults, forum post 1827, the gitbook vault list. No USD loss figure for an UltraYield vault was sourced.
