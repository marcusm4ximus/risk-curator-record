---
cursor:
  subagentId: "bc-82951055-f1d1-5687-b7f7-7c80d7e6955b"
---

# Bitwise, merged DD draft

Draft date: 2026-09-15. Prefix `BITWISE`. Combine Grok narrative (`twitter-grok.md`, 0 INCIDENT blocks) with independent Morpho/Euler/Jupiter/primary-source research. Edit before any Google Sheet paste.

**No material incidents found as of 2026-09-15.**

Searched: Morpho app + GraphQL (`curator(id:"bitwise")`, V1+V2 vaults by Bitwise owner/curator addresses), Bitwise Onchain and newsroom, Morpho blog, Basescan/Etherscan, Euler public metadata (ETH/Base/Arb/BSC/Avax/Unichain/Linea), Morpho forum search, DefiLlama curator page, Jupiter Lend docs, Resolv (DL News / Morpho founders) and Stream/xUSD curator-loss lists, X handles cited by Grok. No Bitwise Morpho/Euler vault appears on those loss lists. No pause, share-price collapse, or curator post-mortem was found. `usd_lost` and `pct_of_that_vault_tvl` stay **unknown**, do not write `0` as a proven historical PnL.

Grok’s empty blotter is kept. Count cell: `0H 0M 0L 0D 0I`. Do not mint social/comms rows (fiduciary interview vs TOS; Frambot “first strategy” marketing) onto the Events tab.

---

## Curator snapshot (not an incident)

**Bitwise Asset Management** curates Morpho Vault V2 products via **Bitwise Investment Manager, LLC (BIM)**. BIM’s SEC IA registration is **disclaimed** on PAPY: BIM is not adviser/fiduciary to vault users; Morpho contracts hold assets; Bitwise does not custody deposits.

Verified Morpho curator `id: bitwise`. Socials on Morpho: website https://bitwiseinvestments.com/ , X https://x.com/Bitwise . Press and Grok also use **X: @BitwiseInvest**. Strategy lead: Jonathan Man, CFA (X: **@0x_JMan**). No public Telegram PoC found.

**Active since: 2026-01** (curator role announced 2026-01-26). First listed Morpho vault **2026-02-09**. Flagship RWA vault public **2026-09-02**.

On-chain roles (same on both listed Morpho vaults, GraphQL 2026-09-15):

| Role | Address |
| --- | --- |
| Owner | `0x510F3b6621D9eA392d4F7632d02aBCf8ba92Bd6F` |
| Curator | `0xB5933F4E9F29e9E92dBA92b643B37a270204dE82` |
| Allocator | `0x12880Ca9B2B3F683ce7B7E90a2bA70d26e669a4b` |
| Sentinel | `0x8C7578a9E34872c3A303A4b67aDDC560413Fc3CC` |
| Perf fee recipient | `0x22a520aBeeE13BE6dBC5Be594acb4232ec7dfd57` |
| Mgmt fee recipient | `0x0d491bAC70DCc6cb4077F24F13F6a85042C5602f` |

**Euler:** none found. **Morpho V1:** none found.

**Not Morpho/Euler, still curator activity:** Jupiter Lend **Bitwise x Ethena Market** (Solana, Fluid infra, co-curated), announced 2026-05-13. Isolated USDe / USDG / SOL market. Docs: https://docs.jup.ag/user-docs/earn/lend/markets, UI https://jup.ag/lend/ethena/market . No sourced incident. Do not put Jupiter USD into Morpho `usd_lost`.

---

## Vaults they curate (snapshot 2026-09-15)

Figures are deposits, not losses.

| Vault | Chain | Address / URL | Created (UTC) | Listed | Deposits | Fees (API) | Book (UI) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Bitwise Liquid Prime USDC (BPRIME) | Base | [0x5e03…3d30](https://app.morpho.org/base/vault/0x5e03f8965e2957291B3c6990C6Cb9023c36d3d30/bitwise-liquid-prime-usdc) | 2026-02-09 | yes | ~$208k USDC | 0% / 0% | USDC vs WETH 86% ~50%; cbBTC 86% ~50%. Caps 1B / 100% relative. Morpho: **no disclosure submitted**. Adapter/cap-increase timelock **3d+1s** (Morpho recommends 7d). User table: one address ~99% of deposits. |
| Bitwise Premium RWA AUSD (PAPY) | Ethereum | [0xB344…c418](https://app.morpho.org/ethereum/vault/0xB344e331A3cDa61D329fb3Cca2Be5942da87c418/bitwise-premium-rwa-ausd) | 2026-08-24 (public launch 2026-09-02) | yes | ~$20.69M AUSD | 0% perf / **0.39%** mgmt | PST 86% ~44%; PRIME 86% ~25%; sUSDai 86% ~24%; idle ~7%. Morpho liquidity ~$2.79M. Adapter/cap-increase timelock **7d**. Onchain product: https://onchain.bitwiseinvestments.com/vaults/papy-ausd |
| rwa AUSD (rwaAUSD) | Ethereum | `0xD83c5f2ACB1824a870AA0DE429f7435Ad8cf120E` | 2026-08-11 | **no** | ~$1.60 |, | Seed/test. Warning `not_whitelisted`. Same owner/curator. |
| pjvk | Arc (5042) | `0x744Bf0312C971299505146f1558Fa32a75957a99` | 2026-06-15 | **no** | ~$1 |, | Same **curator** address, **different owner**. Dust. Unverified whether Bitwise ops. |

Morpho curator page: https://app.morpho.org/curator/bitwise (~$20.9M deposits this pass). DefiLlama (Morpho-vault methodology): https://defillama.com/protocol/bitwise, **$20.88m** (ETH $20.67m, Base $207.8k). Grok’s ~$14.43m figure is stale.

PAPY collateral as Bitwise describes it (provider-stated; Bitwise has **not independently verified**): Huma PST (short-duration payments), Hastra PRIME (home-equity warehouse / Figure), sUSDai (GPU/AI loans, Munich Re-linked warranty language). Deposit asset AUSD (Agora; VanEck/State Street reserve language in the press release).

Ops stack Bitwise advertises (CLAIM until an incident shows it firing): ForDeFi MPC execution; Hypernative monitoring / automated deallocation; 24h Slack/PagerDuty coverage.

---

## STANDING CHECKS

**Events (H/M/L/N/D/I):** `0H 0M 0L 0N 0D 0I`

**Risk docs:** `active`

PAPY Morpho page carries the full BIM disclaimer + risk-factor list. Bitwise Onchain PAPY page has Risk Management copy (underwriting, allocator bot, ForDeFi, Yubikey-signed allocator commits) plus the same legal risk factors. TOS last modified **2026-08-25** (https://onchain.bitwiseinvestments.com/tos, Schedule A Lending Vault Terms). **Gap:** Liquid Prime Morpho UI “Curator has not submitted a Disclosure.” No Morpho-forum risk memo. This is product-page/TOS active, not a Gauntlet VaultBook.

**Active since:** 2026-01 (announcement 2026-01-26; first Morpho vault 2026-02-09).

**PoC:** X: @BitwiseInvest (Morpho lists https://x.com/Bitwise). Strategy lead X: @0x_JMan. No public TG: @x found.

**Any new incident since Grok (same day, 2026-09-15):** none. Independent pass did not add a loss event Grok missed.

**Whether a past lesson showed up again:** n/a, no prior Bitwise-curator incident. Observational, not a lesson-from-loss: PAPY uses Morpho’s **7-day** adapter/cap-increase timelocks; Liquid Prime still uses **~3 days**. Both still have **0** duration on `decreaseTimelock` and fee-setting. PAPY still uses **86% LLTV** on RWA collateral and Morpho Vault V2 **with Market V1 adapters** (Bitwise Onchain). Industry lessons from Resolv (hardcoded stables, allocator bots, donation/`supply(onBehalf)`) are not documented as Bitwise repeats because those collaterals are not in the live Morpho books checked here.

**Critics:** none found naming Bitwise vaults, oracles, or pauses. Sector critic copy on Morpho curator design is not Bitwise-specific.

**ETF / securities (out of Events tab):** 2026 option-income ETF liquidations and other product closures are firm product mix, not vault NAV. BIM’s IA registration is relevant only as the **disclaimer** on PAPY (users do not get advisory protections).

**Funds recovered:** n/a (no sourced loss).

---

## Sources

- Grok paste (primary for what X-Grok asserted): `docs/curator-dd/bitwise/twitter-grok.md`
- Morpho blog 2026-01-26 (primary): https://morpho.org/blog/bitwise-joins-the-morpho-network-as-a-curator
- Bitwise newsroom 2026-01-26 (primary): https://bitwiseinvestments.com/newsroom/bitwise-expands-onchain-solutions-with-introduction-of-non-custodial-vault
- Bitwise PAPY newsroom 2026-09-02 (primary): https://bitwiseinvestments.com/newsroom/bitwise-premium-rwa-vault-papy-launches-on-morpho-with-agoras-ausd
- Morpho curator + vaults (primary): https://app.morpho.org/curator/bitwise
- PAPY Onchain (primary): https://onchain.bitwiseinvestments.com/vaults/papy-ausd
- TOS (primary): https://onchain.bitwiseinvestments.com/tos
- Basescan BPRIME (primary): https://basescan.org/address/0x5e03f8965e2957291B3c6990C6Cb9023c36d3d30
- Etherscan PAPY (primary): https://etherscan.io/address/0xB344e331A3cDa61D329fb3Cca2Be5942da87c418
- Jupiter Lend Bitwise x Ethena (primary): https://docs.jup.ag/user-docs/earn/lend/markets
- Jupiter/Bitwise PR 2026-05-13 (primary): https://www.prnewswire.com/news-releases/jupiter-lend-onboards-bitwise-to-curate-ethena-market-302771007.html
- DefiLlama curator TVL (commentary/metrics, dated this pass): https://defillama.com/protocol/bitwise
- Resolv curator names (commentary): https://www.dlnews.com/articles/defi/resolve-labs-stablecoin-falls-80-per-cent-as-millions-tokens-minted/
- Man interview / fiduciary language (commentary): https://www.marketsmedia.com/vaults-emerge-as-core-building-block-of-onchain-asset-management/
- Private-then-public vault (commentary): https://www.crypto.blockstories.io/p/bitwise-s-move-into-onchain-vaults-interview-with-jonathan-man-bitwise-and-paul-frambot-morpho
- Hypernative (vendor CLAIM): https://www.hypernative.io/insights/blog/bitwise-selects-hypernative-to-strengthen-defi-risk-management-across-15b-platform
- Grok-cited X: https://x.com/Bitwise/status/2015866766472126718 , https://x.com/Bitwise/status/2095134683688239250
