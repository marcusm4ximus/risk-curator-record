---
cursor:
  subagentId: "bc-878ecf91-2bd1-546c-8e38-7b2577f4e1f6"
---

# Avantgarde - merged DD draft

**Draft date:** 2026-09-25
**Inputs:** Grok paste (one INCIDENT) plus the 29 Apr 2026 curator essay and the 14 Nov 2025 Gitcoin update. Edit before any sheet paste.

Avantgarde Finance curates Morpho vaults (V1 from 2025, V2 later). No Euler book was found. X: @avantgardefi. The only Events row is the Elixir/sdeUSD sleeve in Avantgarde USDC Core.


---

EVENT
curator: Avantgarde
date: 2025-11-04
title: Elixir
incident_id: AVANTGARDE-20251104-ELIXIR
type: collateral
impact: Med
fault: direct
class: affected
severity: Med
protocol_or_vault_url: https://app.morpho.org/ethereum/vault/0x5b56F90340dBAa6a8693DADb141D620f0e154fE6/avantgarde-usdc-core
usd_lost: unknown
pct_of_that_vault_tvl: unknown
status: unresolved
what_actually_happened: Elixir issued deUSD as a synthetic dollar, with sdeUSD as its staked version. Elixir had lent heavily to Stream Finance. On 4 Nov 2025 Stream halted withdrawals after an external-manager loss, and on 6 Nov Elixir halted deUSD minting and redemption. Avantgarde USDC Core had lent about 2% of its assets into the sdeUSD market. Stream stopped repaying, the market became fully borrowed, and accrued interest inflated the value shown for the distressed sleeve.
response_summary: Avantgarde closed the supply queue and moved about 98% of the vault's liquid assets to Aave. It left the distressed sleeve in a side pocket and processed redemptions without counting that sleeve. Its 29 Apr 2026 post said recovery remained off-chain and uncertain. No later payment on the sleeve was found.
critics: No named critic published a sourced attack on Avantgarde’s handling. The curator’s own later note says some other managers delayed write-downs. That is their comparison, not a third-party loss figure for this vault.
lesson_applied_later: yes + example: the April 2026 essay says a four-tier oracle screen and an off-chain reserve check are why they held no wstUSR or RLP into the March 2026 Resolv mint. Unclear on every structured dollar: USDC Dynamic still has a spot reUSD market enabled. That is not the 25 Aug 2026 PT-reUSD market. See the note under Not on Events tab.
funds_recovered: partial
sources: primary https://avantgarde.finance/post/capital-stewardship-on-morpho-why-risk-comes-before-reward ; primary https://gov.gitcoin.co/t/sgtm-004-generating-yield-on-dao-treasury-assets-to-support-runway/20217/27 ; primary https://app.morpho.org/ethereum/vault/0x5b56F90340dBAa6a8693DADb141D620f0e154fE6/avantgarde-usdc-core ; primary https://forum.morpho.org/t/avantgarde-finance-vault-curation/1878 ; primary https://x.com/elixir/status/1986443495351927257 ; commentary https://www.dune.com/milt_frid/nov2025-depeg-incident-in-morpho ; commentary https://www.theblock.co/news/markets/2025-11-06-elixir-sunsets-deusd-synthetic-stablecoin-following-stream-finance-unwinding-aims-full-redemptions-377961

---

## Not on Events tab

- `AVANTGARDE-20260322-RESOLV` - Curator says zero allocation after an oracle and reserve screen. Chaos Labs’ exposure tally does not name them. Non-exposure is not an event.
- `AVANTGARDE-20260825-PTREUSD` - No sourced listing of the PT-reUSD-10DEC2026/USDC market (`0x1e9d614631a7df0ec07fb05b2c8cb2491575fd1a63a33bf187a6afb295a4fc64`, the 25 Aug 2026 liquidation market). Morpho `supplyingVaultV2s` on that market does not include Avantgarde. USDC Dynamic (`0x8E56CB6Bc1a8961ed9062B99045D3299b27CDb4D`) does cap a different market, spot reUSD/USDC `0x4565ac05d38b19374ccbb04c17cca60ca9353cd41824f0803d0fc7704f60eaed` (collateral `reUSD` `0x5086bf358635B81D8C47C66d1C8b9E567Db70c72`, 91.5% LLTV). Live allocation is 7 raw units. The vault activity log shows 21,116.64 USDC moved off that spot reUSD market on 2026-09-12. That market’s `badDebt` and `realizedBadDebt` are both 0. No Events row.

## STANDING CHECKS (2026-09-25)

**Events (H/M/L/N/D/I):** `0H 1M 0L 0N 1D 0I`

Risk docs: none
- Morpho disclosure slot: Grok reports “Curator has not submitted a Disclosure” on USDC Dynamic and WETH Core. Methodology exists as blog prose, not a living parameter memo. Curator page: https://app.morpho.org/curator/avantgarde

Active since: 2025-07
- Forum intro July 2025. Grok also cites Morpho UI deployment 2025-05-09 on Avantgarde WETH Core. Use July 2025 as the public curator start unless that May timestamp is the vault to cite.

PoC: X: @avantgardefi
- Email info@avantgarde.finance and governance@avantgarde.finance (Grok). No public curator Telegram found.

Any new incident since Grok (last row 2025-11-04): no additional sourced Avantgarde vault loss, oracle failure, or depositor shortfall through 2026-09-25. Resolv stays off the tab. The PT-reUSD market was checked and is not an Avantgarde listing.

Whether a past lesson showed up again: partly. They publish the Elixir case as why USR was rejected. Spot reUSD is still an enabled market on USDC Dynamic, cut down to dust on 2026-09-12. That is a different market from PT-reUSD-10DEC2026.

Searched: Avantgarde essay, Gitcoin post 27, Morpho forum 1878, Elixir sunset coverage, Chaos Labs Resolv tally (Avantgarde absent), Morpho `marketById` for both reUSD markets and `vaultV2ByAddress` caps on USDC Dynamic. No dedicated Morpho MCP.
