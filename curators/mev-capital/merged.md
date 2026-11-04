---
cursor:
  subagentId: "bc-f66d08a7-945d-5476-8d2e-814f1d93aba1"
---

# MEV Capital - merged DD draft

**Draft date:** 2026-09-26
**Inputs:** Grok paste (four INCIDENT blocks) plus the tweets, Morpho weekly share prices, the Morpho forum thread, and the DefiLlama adapter comments. User-edit before any sheet paste.
**IDs on Events:** Stream xUSD (High + Indirect), Elixir (Med + Indirect), Resolv (Low + Indirect), USD0++ (N + Direct). The former Usual stake row was folded into USD0++.
**Labels:** readable prose. Do not invent USD or %.

MEV Capital (`@MEVCapital`) curates Morpho vaults and other lending books. X account joined 11 Nov 2021. The Ethereum USDC vault used in the January, Elixir, and Resolv posts was created 24 Jul 2024 and is still listed under the name Usual Boosted USDC. API deposits on that vault this pass are about $1.98M. That figure is deposits, not a loss.

**Morpho vaults checked (2026-09-26)**

| Vault | Listed | Deposits (API) | Share price |
|---|---|---|---|
| Usual Boosted USDC (Ethereum) | yes | about $1.98M | 1.127 |
| MEV Capital USDC (Arbitrum) | no | about $652k | 1.026 |
| MEV Capital Resolv USR | no | about $41k | 1.053 |
| MEV Capital wETH | yes | about $5.0M | 1.081 |

Arbitrum USDC has deposits disabled. Resolv USR has deposits disabled and is idle USR. wETH's live allocation is wstETH.

---

EVENT
curator: mev-capital
date: 2025-01-10
title: USD0++
incident_id: MEVCAPITAL-20250110-USD0ORACLE
type: oracle
impact: N
fault: direct
class: non-materially-affected
severity: N
protocol_or_vault_url: https://app.morpho.org/ethereum/vault/0xd63070114470f685b75B74D60EEc7c1113d33a3D/mev-capital-usdc
usd_lost: unknown
pct_of_that_vault_tvl: unknown
status: resolved
what_actually_happened: On 10 Jan 2025 MEV Capital said it learned of Usual's USD0++ early-redemption change the night before, with no advance notice. The Usual USDC vault had been supplying USDC into markets that priced USD0++ at a hardcoded about $1. MEV suspended reallocation into those markets and deployed a "USD0++ naked" market priced at $0.87 so borrowers could move. The same day it suspended curator fees. On 12 Jan it said the vault had not produced bad debt, lenders remained safe, and about 400k remained in hardcoded markets, under 0.2% of that vault. Weekly share price rose from about 1.052 on 9 Jan to about 1.055 on 16 Jan while TVL fell from about $446M to about $350M. That TVL move is withdrawals. `usd_lost` stays unknown. Do not write 0. PANews also wrote that Adli was both a MEV Capital shareholder and a Usual co-founder, and called the fixed $1 price a conflict. No primary filing of that ownership claim was found.
response_summary: Same-day fee pause and a lower-priced market. Two days later they said lenders were safe and that fees would return. They said a fuller post-mortem would follow. No MEV post-mortem URL was opened here.
critics: Usual's Adli wrote on the Morpho forum that curators, including MEV, were told at the same time as everyone else and that hardcoded markets would be replaced with floor-priced markets. Commentators, including a Binance Square essay, said a Usual co-founder's stake in MEV Capital was a conflict and compared the hardcoded $1 oracle to UST. That ownership claim was not checked against a filing here. The UST comparison is commentary.
lesson_applied_later: no. Example: the same Ethereum USDC vault later realized an Elixir sdeUSD mark, and the Arbitrum USDC vault later realized a Stream xUSD loss.
funds_recovered: n/a
sources: primary https://x.com/MEVCapital/status/1877699650783687078 ; primary https://x.com/MEVCapital/status/1877744081045995970 ; primary https://x.com/MEVCapital/status/1878437031413502253 ; primary https://forum.morpho.org/t/usual-boosted-usdc-vault-whitelisting/686 ; commentary https://www.coindesk.com/markets/2025/01/10/red-hot-de-fi-platform-usual-faces-backlash-as-protocol-update-triggers-sell-off

---

EVENT
curator: mev-capital
date: 2025-11-05
title: Stream xUSD
incident_id: MEVCAPITAL-20251105-STREAMXUSD
type: collateral
impact: High
fault: direct
class: affected
severity: High
protocol_or_vault_url: https://app.morpho.org/arbitrum/vault/0xa60643c90A542A95026C0F1dbdB0615fF42019Cf/mev-capital-usdc
usd_lost: 600000
pct_of_that_vault_tvl: unknown
status: unresolved
what_actually_happened: Stream Finance ran yield vaults, and xUSD was its yield-bearing dollar token used as collateral. On 5 Nov 2025 MEV Capital said it was aware of Stream's about $93M shortfall. It said actively managed mainnet products had no direct Stream exposure. It listed permissionless books that did: Silo Avalanche USDC about $7.2M and 164.3 BTC.b, Morpho Arbitrum USDC about $628k, Euler Sonic USDC about $3.4M, and Euler Sonic scUSD about $7.02M. Those are allocation snapshots. On 13 Nov, after the Morpho timelock, it removed the Arbitrum xUSD/USDC market and said that vault realized about 600k USDC out of the remaining about 5M USDC. On 17 Mar 2026 it said the Arbitrum vault was Stream, not Elixir. The 600k is the booked P&L. Weekly share price on the Arbitrum vault rose from about 1.019 on 6 Nov to about 1.024 on 13 Nov while TVL fell from about $19.9M to about $5.2M, so the 600k is not reconstructed from the share series. Euler and Silo dollars were not published. DefiLlama still comments the Arbitrum vault and two Avalanche Silo vaults out of TVL as Stream bad debt. That comment is not an extra dollar.
response_summary: Same-day exposure list, parameter changes, and legal outreach to Stream. Eight days later the Arbitrum market was removed. They said they would update lenders when recovery information existed. No Euler or Silo close-out was found. Replies from 13 November 2025 through 26 March 2026 still ask for Euler Sonic, Silo Avalanche, and Lista USDT, and MEV answered "stay tuned" and "it's coming." Not shown as paid. 10 months and 13 days after 13 November 2025. 6 months and 9 days after 17 March 2026. Do not add Silo, Euler, or Lista dollars.
critics: The Arbitrum DRIP update called Morpho bad debt about $700k on the MEV Capital vault and blacklisted that vault from DRIP rewards. Yields and More's about $25.4M figure, repeated by The Block and BlockEden, is an exposure tally. Protos described a 12% Arbitrum haircut beside a 3.5% Ethereum figure. The 12% matches this 600k against the remaining about 5M. It is not a second measurement, and the Ethereum percent is the Elixir row. On 12 Nov 2025 @O2debt replied to MEV Capital and asked about Euler vaults it governed and an undisclosed xUSD contagion from USDC collateral. MEV's 5 Nov post had already listed Euler Sonic USDC and scUSD as Stream allocation snapshots. That reply does not publish a close-out dollar, so it is not a second event and not a standing conflict. One reply names a personal 111,000 USDC balance. That is one wallet, not a curator loss.
lesson_applied_later: no. Example: the Ethereum USDC vault still had a Resolv RLP sleeve in March 2026.
funds_recovered: none
sources: primary https://x.com/MEVCapital/status/1986038314642595857 ; primary https://x.com/MEVCapital/status/1989048013893812549 ; primary https://x.com/MEVCapital/status/2033944621655458159 ; primary https://forum.arbitrum.foundation/t/update-stream-finance-xusd-situation-and-impact-assessment/30206 ; commentary https://protos.com/high-yields-to-haircuts-has-defi-learned-anything-from-yield-vault-collapse/ ; commentary https://github.com/DefiLlama/DefiLlama-Adapters/blob/main/projects/mev-capital/index.js ; commentary https://x.com/O2debt/status/1988593353651576847 primary https://x.com/MEVCapital/status/2033936402472202339 primary https://x.com/MEVCapital/status/2037194072817803772

---

EVENT
curator: mev-capital
date: 2025-11-12
title: Elixir
incident_id: MEVCAPITAL-20251112-ELIXIRSDEUSD
type: collateral
impact: Med
fault: direct
class: affected
severity: Med
protocol_or_vault_url: https://app.morpho.org/ethereum/vault/0xd63070114470f685b75B74D60EEc7c1113d33a3D/mev-capital-usdc
usd_lost: unknown
pct_of_that_vault_tvl: 3.6
status: unresolved
what_actually_happened: Elixir was a liquidity network, and deUSD was its synthetic dollar, with sdeUSD as the staked version. On 11 Nov 2025 a Morpho forum depositor, Jeanrrr, said the MEV Capital USDC vault showed a 3.6% loss and that they had withdrawn. On 12 Nov MEV Capital said the Ethereum vault had removed the Elixir sdeUSD/USDC market and realized bad debt equal to nearly 3.6% of vault TVL at the time, after which it had no Elixir exposure. No dollar was published. Weekly share price fell from about 1.121 on 6 Nov (TVL about $109M) to about 1.085 on 13 Nov (TVL about $46.6M). Do not turn that percent into a dollar. The 3.6% is their figure, so this is Med rather than High. On 17 March 2026 MEV told those depositors they could claim through Elixir's partner portal. "You can claim" is a link, not a receipt. Not shown as paid. 6 months and 9 days as of 26 September 2026.
response_summary: The realization post on 12 Nov, then a claim link on 17 March 2026. That link is not a receipt. Not shown as paid. 6 months and 9 days as of 26 September 2026. Morpho forum staff pointed Jeanrrr at the 12 Nov post. No MEV table of how much of the 3.6% was filled was found. A forum reply that the loss was "redeemable" is not a recovery figure.
critics: Jeanrrr asked whether the 3.6% was permanent. Hindenrank later wrote a 3.5% Ethereum loss and a 12% Arbitrum loss as one Elixir story. The 12% is the Stream close-out on the other vault. Bankless described Elixir's later settlement design. That is Elixir's offer, not a fill rate for this vault.
lesson_applied_later: no. Example: this vault still needed a Resolv RLP exit in March 2026.
funds_recovered: none
sources: primary https://x.com/MEVCapital/status/1988581694476071222 ; primary https://x.com/MEVCapital/status/2033936402472202339 ; primary https://forum.morpho.org/t/usdc-vault-loss-mev-capital/2078 ; primary https://x.com/elixir/status/1986443495351927257

---

EVENT
curator: mev-capital
date: 2026-03-22
title: Resolv
incident_id: MEVCAPITAL-20260322-RESOLVRLP
type: collateral
impact: Low
fault: indirect
class: affected
severity: Low
protocol_or_vault_url: https://app.morpho.org/ethereum/vault/0xd63070114470f685b75B74D60EEc7c1113d33a3D/mev-capital-usdc
usd_lost: 47000
pct_of_that_vault_tvl: unknown
status: unresolved
what_actually_happened: Resolv was a delta-neutral stablecoin protocol. USR was its dollar token, while RLP was the junior token meant to absorb losses first. On 22 Mar 2026 Resolv's mint key was compromised and unbacked USR was minted. That protocol loss is not this vault's P&L. On 26 Mar MEV Capital said the Ethereum USDC vault had fully exited the RLP/USDC market after the timelock, removed a residual of about 47k USDC, less than 0.65% of remaining TVL, and reopened deposits. The about 47k is the booked figure. Weekly share price fell from about 1.105 on 26 Mar to about 1.099 on 2 Apr. The separate Resolv USR vault's weekly share did not fall that week (about 1.053 both prints) while its TVL fell from about $140k to about $59k. DefiLlama comments that USR vault, and a USD0 vault, out of TVL as Resolv bad debt. No MEV dollar was published for either, so they are not a second `usd_lost`.
response_summary: Exit post on 26 March 2026, deposits reopened. Actively following up on 26 March 2026 is not a payment. Not shown as paid. 6 months as of 26 September 2026. No depositor payout confirmation for the 47k was found.
critics: Chaos Labs' 23 Mar debrief listed MEV among smaller residual names. Grok read that tally as about $53k. That article body was not re-opened here. Chaos Labs' about $53k is an exposure line, not a second loss. OAK Research grouped MEV with other Morpho curators hit by the mint. Ecosystem totals for public-allocator bad debt are not this vault.
lesson_applied_later: unclear. The USDC residual was small and was removed on the timelock. The collateral had still been listed.
funds_recovered: none
sources: primary https://x.com/MEVCapital/status/2037194072817803772 ; commentary https://oakresearch.io/en/analyses/investigations/the-resolv-usr-hack-curators-face-their-responsibilities ; commentary https://github.com/DefiLlama/DefiLlama-Adapters/blob/main/projects/mev-capital/index.js

---

## Not on Events tab

- `MEVCAPITAL-20250110-STAKE` was folded into `MEVCAPITAL-20250110-USD0ORACLE` and removed from the event list under the two-tag schema.

- April 2026 Kelp / rsETH. MEV Capital wETH weekly share rose through April, and the live allocation is wstETH. No MEV post was opened.
- YAM about $25.4M and the 5 Nov allocation list. Exposure, not a second loss.
- DefiLlama comments on the Resolv USR vault, a USD0 vault, and the Elixir USDC vault. No curator dollar. The Elixir USDC share print of about 224 is not used.
- Mainnet "no direct Stream exposure" on 5 Nov. The Ethereum loss that week is the Elixir row.

## STANDING CHECKS (2026-09-26)

**Events (H/M/L/N/D/I):** `1H 1M 1L 1N 3D 1I`

Risk docs: stale
- Morpho forum vault threads exist (Usual USDC, USD0, Elixir USDC, Resolv USR, PTs). No post-March 2026 risk memo was opened.

Active since: 2021-11 on X (joined 11 Nov 2021). Ethereum USDC vault created 24 Jul 2024.

PoC: X `@MEVCapital`. Grok also lists Telegram `@mevcapital_support` and contact@mevcapital.com. Those were not re-opened.

Any new incident since 2026-03-26: none sourced through 2026-09-26. The wETH book does not show an April share drop.

Whether a past lesson showed up again: yes. The January hardcoded USD0++ oracle was followed by an Elixir sdeUSD mark in November 2025, a Stream xUSD realization the next day on Arbitrum, and a smaller Resolv residual in March 2026.

Searched: the January, November, and March tweets named above, Morpho API vaults and weekly share prices, Morpho forum 2078 and the Usual whitelist thread, the DefiLlama MEV adapter, the Arbitrum DRIP note. Euler's indexer did not resolve this pass.
