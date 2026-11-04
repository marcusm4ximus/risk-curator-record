---
cursor:
  subagentId: "bc-dcd201d0-0225-52bc-9fd2-84c82556e16b"
---

# Api3, merged DD draft

**Draft date:** 2026-09-16  
**Inputs:** Grok paste `twitter-grok.md` (1 INCIDENT + standing checks) + independent Morpho/DefiLlama/docs research. User-edit before any Google Sheet paste.  
**IDs:** Grok’s `API3-20260626-UTILIZATION` is not an incident (no user money; utilization working as designed) and is not on the live blotter. No extra loss rows.  
**Labels:** FACT / CLAIM / RUMOR in prose. Do not invent USD lost or %.

Api3 (API3 Foundation) is a first-party oracle team that also **curates Morpho Vault V2** books. Morpho curator id `api3`; X `@Api3DAO`; site https://api3.org/ ; docs https://docs.api3.org/curation/ . Public launch: [forum 2111](https://forum.morpho.org/t/introducing-api3-curated-vaults-on-morpho/2111) 2025-12-17 12:30 UTC (`ugur_api3`). Not found as an Euler curator. Yearn’s 2025 OEV-boosted Morpho vaults used Api3 oracles under **Yearn** curation, out of this sheet.

Pitch vs other curators: they pick long-tail collateral they can price themselves, recapture OEV, charge **5% performance / 0% management**, and say they deposit **their own treasury** alongside users ([skin in the game](https://docs.api3.org/curation/), [disclosure](https://docs.api3.org/curation/disclosure.html), alignment, **not** a backstop). Live Morpho UI on the vaults checked this pass: **“Curator has not submitted a Disclosure.”**

DefiLlama (2026-09-16) lists Api3 under **Risk Curators**, TVL **~$18.25M** (Ethereum ~$16.88M, Base ~$1.37M). Do not mix that with oracle **TVS ~$19.26M** (mostly other chains).

**Vaults they curate (Morpho V2, snapshot 2026-09-16)**

| Vault | Chain | Address | REST total assets | Notes |
|---|---|---|---|---|
| Api3 dCOMP USDC | Ethereum | `0x36cfe1568461E499391ef0A555300F1ae2da2439` | ~14.14M USDC | Largest book. [App](https://app.morpho.org/ethereum/vault/0x36cfe1568461E499391ef0A555300F1ae2da2439/api3-dcomp-usdc) |
| Api3 Core USDC | Ethereum | `0xe2221Aa07ec3266DA87763E2b1e28d07A8a4e53b` | ~1.75M USDC | wstETH / cbBTC / kBTC. [App](https://app.morpho.org/ethereum/vault/0xe2221Aa07ec3266DA87763E2b1e28d07A8a4e53b/api3-core-usdc) |
| Kabu WETH | Base | `0x4D72Fed1b6cE42F8Dea811F7b6685EbE4Ec04E01` | ~572.5 WETH (~$1.38M) | AERO / VVV / MORPHO / VIRTUAL. Owner `0x26d9aa12…B068` |
| Kabu USDC | Ethereum | `0x54210d3f1A066413891AF9E17210E787d5C6e3f4` | ~0.72M USDC | Mid-cap gov tokens. Forum launch [2134](https://forum.morpho.org/t/introducing-kabu-usdc-expanding-collateral-options-on-morpho/2134) 2026-01-14. Morpho UI **+3** exposure flag. |
| Purinta USDC | Ethereum | `0xc92A37Fd0250F4eecF092960a2F70A1334217528` | ~0.50M USDC | PEPE / SPX6900 / SHIB. Deployed ~2026-05-22. [App](https://app.morpho.org/ethereum/vault/0xc92A37Fd0250F4eecF092960a2F70A1334217528/purinta-usdc) |
| Purinta USDG | Robinhood (4663) | `0x37788ff0c1d4e45A7FE06BC7e71e0cc00121d0A8` | ~50.4k USDG | CASHCAT 38.5% LLTV. Owner `0x82B4a86c…e98A4` |

Ethereum V2 owner Safe `0xBBE0dE9757F93e3306aDBfeBE906AB285EDD13DA`; curator role `0x24DB7c6F689e480d6E5d45DaD400CC4456C832F0`; performance-fee recipient `0x8e03609ed680B237C7b6f8020472CA0687308b24`; 7-day timelock; Morpho GraphQL curator addresses also include Base `0x26d9aa12…` / `0x7D02b68d…` and Robinhood `0x370EC5d1…` / `0x82B4a86c…`. Allocators seen on ETH vaults: `0x00b8e150…`, `0x935c5559…`, plus owner. Sentinel `0x5a9AA321…`.

**V1 leftover (do not paste as the live product):** dCOMP V1 `0xE6F0ce5394B3D15b4aB1216D84F544b8f38E4D69` (~$168, created 2026-02-27); Core V1 `0xB3f4D94A209045Ef35661e657Db9ADAc584141f1` (dust, created 2025-12-17); Base “Test Api3 USDC” `0x363Ab339d660504842A73C7EafD136BE2EfE9F9a` (2025-05-13, ~$1).

**dCOMP market (live):** unique key `0x24852d8d7464402ddcd717415e009d42bf7427d6a8893487f83c75ee0f4a0ea6`, 62.5% LLTV. Vault metadata: USDC lenders earn from a **large COMP-holding borrower** posting dCOMP; wrapper keeps Compound voting power. Wrapper repo: https://github.com/api3dao/dcomp . Liquidity adapter is wstETH/USDC `0xb323495f…86cc`; Morpho allocation this pass also showed **cbBTC 86%** (~3.6%). Docs still list a **10M** dCOMP cap; app shows **12M**.

Curator UI: https://app.morpho.org/curator/api3

---

NOT A LIVE EVENT
curator: Api3
date: 2026-06-26
title: Utilization
incident_id: API3-20260626-UTILIZATION
type: ops
impact: N
fault: direct
class: non-materially-affected
severity: N
protocol_or_vault_url: https://app.morpho.org/ethereum/vault/0x36cfe1568461E499391ef0A555300F1ae2da2439/api3-dcomp-usdc
usd_lost: unknown
pct_of_that_vault_tvl: unknown
status: resolved
what_actually_happened: In the week before 26 Jun 2026, withdrawals removed the available USDC from Api3 dCOMP USDC V2. Utilization reached 100% and the supply APY rose to 74.32% as TVL fell from $10.43M on 21 Jun to $7.42M on 26 Jun.
response_summary: On 26 Jun, Api3 said the withdrawals followed a liquidity event outside the vault and that the vault was working as designed. It said rates would normalize as borrowers repaid or supply returned, and that it was monitoring the market. Api3 did not pause the vault or publish a post-mortem. By 16 Sep, utilization had fallen to 88.48%, about $2.53M could be withdrawn, and no principal loss, unpaid debt, or share-price decline had been reported.
critics: No sourced critic thread alleging a loss or curator failure on this vault. Grok cites @morgan_defi as supportive (“61% … conviction”) on the same snowflake as the Api3 OP, treat as an unrecovered reply, not a second primary URL. AlphaPing/msY coverage is another curator’s story.
lesson_applied_later: no + example: they still run a dedicated single-borrower dCOMP vault as the majority of curator TVL; Morpho cap on that market is 12M vs docs 10M (looser, not tighter); live allocation ~78% dCOMP / ~18% wstETH adapter / ~4% cbBTC. Llama 2026-07-12 APY 50.6% looks like another brief util spike with no curator note.
funds_recovered: n/a
sources: primary, https://x.com/Api3DAO/status/2070469565805727890 ; https://yields.llama.fi/chart/58c04b13-6220-4122-9fa9-6845058f1d71 ; https://app.morpho.org/ethereum/vault/0x36cfe1568461E499391ef0A555300F1ae2da2439/api3-dcomp-usdc ; https://api.morpho.org/v0/vaults-v2/1:0x36cfe1568461E499391ef0A555300F1ae2da2439 ; https://docs.api3.org/curation/ ; commentary, https://cryptobriefing.com/morpho-blue-vault-msy-collapse-loss/ ; https://tradingstrategy.ai/vaults/api3-dcomp-usdc-2 ; https://blog.vaults.fyi/may-2026-onchain-yield-report/

---



STANDING CHECKS (2026-09-16)

**Events (H/M/L/N/D/I):** `0H 0M 0L 0N 0D 0I`

Risk docs: **active** on Api3’s site (overview, [roles-and-operations](https://docs.api3.org/curation/roles-and-operations.html), [risk-management](https://docs.api3.org/curation/risk-management.html), [disclosure](https://docs.api3.org/curation/disclosure.html), liquidity delay, oracle can fail, no depositor backstop). Morpho app disclosure widget: **none** (“Curator has not submitted a Disclosure” on dCOMP / Core / Purinta this pass).

Active since: **2025-12** (forum 2111 2025-12-17; V1 Core created the same day). Base test vault 2025-05-13 is not the public mandate.

PoC: X `@Api3DAO` ; TG http://t.me/API3DAO ; Discord http://discord.gg/api3dao ; Morpho forum `ugur_api3`.

Any new incident since 2026-06-26: **no sourced loss/exploit/oracle-misreport/pause on Api3 vaults through 2026-09-16.** Llama 2026-07-12 APY 50.6% is an unverified util blip, not a second incident row. Stream, Resolv, rsETH, DIA/IMF were checked and not found in these books.

Whether a past lesson showed up again: **unclear / leaning no structural change.** June 2026 was a 100% util / redemption crunch on a concentrated single-collateral, single-borrower vault. That mandate is still the product. Cap went up. A one-day July APY spike is the only later rhyme, without a primary.

**No material curator-vault incidents found as of 2026-09-16.** The June utilization note above is not an incident and is not on the live event list. Searched Morpho forum (Api3/Kabu/Purinta listing posts only), docs.api3.org/curation, app.morpho.org/curator/api3, @Api3DAO tweet 1 of the June thread, DefiLlama curator + dCOMP chart, Euler labels, and cross-reads of Stream, Resolv, Kelp/rsETH, AlphaPing/msY, and Yearn-OEV.
