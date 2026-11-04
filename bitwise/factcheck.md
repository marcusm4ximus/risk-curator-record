---
cursor:
  subagentId: "bc-82951055-f1d1-5687-b7f7-7c80d7e6955b"
---

# Bitwise — Grok vs reality

Research date: 2026-09-15. Folder slug `bitwise`. Incident prefix `BITWISE`.

Scope: Bitwise as a Morpho / Euler-style money-market vault curator. Jupiter Lend / Fluid only as adjacent curator activity. ETF/securities items only if they change curator trust. Do not invent USD lost or %.

## Grok paste status

`docs/curator-dd/bitwise/twitter-grok.md` is a **real narrative paste** (well over 500 characters). **0 `INCIDENT` blocks** — expected: Grok concluded the book is clean.

Paste quality: concatenated search notes plus a FACT/CLAIM/RUMOR body and standing checks. One markdown glitch (`sourced rather than [inferred.No](http://inferred.No) material incidents`) is paste noise, not a claim. Extra closing parens around vault addresses are noise.

Independent pass: Morpho app + GraphQL (`api.morpho.org`), Bitwise Onchain / newsroom, Morpho blog, Basescan/Etherscan, Euler public metadata, Jupiter Lend docs, DefiLlama curator page, Resolv/Stream independent coverage. No Morpho/Euler MCP. Live TVL/allocations are **2026-09-15 snapshots**.

---

## Verdict in one line

Grok’s empty incident list is **correct**. No sourced Morpho/Euler vault loss, exploit, oracle break, pause, or depositor haircut for Bitwise as of 2026-09-15. Keep `usd_lost` / `%` as **unknown** (not `0`) unless a primary says there was no loss on a named vault. Fix stale TVL, announce-vs-deploy dates, and the Morpho-native disclosure gap before any sheet paste.

---

## Claim-by-claim (Grok vs public primary)

| Grok line | Label | Reality |
| --- | --- | --- |
| Bitwise began Morpho vault curation **2026-01-26**; first strategy USDC into overcollateralized Morpho lending; target ~6% APY; lead Jonathan Man | **FACT** (announcement) | Morpho blog + Bitwise newsroom + PR Newswire that day. 6% is a **target as of 2026-01-26**, not a guaranteed rate. |
| First vault live on announcement day | **WRONG** if implied | First listed Morpho V2 **Bitwise Liquid Prime USDC (BPRIME)** `creationTimestamp` **2026-02-09**. Blockstories interview (2026-01-29): vault was **private**, public later. |
| No sourced exploit / oracle / pause / bad-debt / public-response incident on Bitwise-curated vaults | **FACT** for Morpho listed vaults | Matches this pass. Resolv named Gauntlet, Re7, kpk, 9summits — not Bitwise. Live Liquid Prime book is WETH/cbBTC 86% LLTV only. Do **not** convert that into `usd_lost: 0`. |
| Liquid Prime USDC on Base `0x5e03f8965e2957291B3c6990C6Cb9023c36d3d30` | **FACT** | Morpho listed V2; Basescan token **BPRIME**; owner `0x510F…Bd6F`; curator `0xB593…dE82`. Morpho UI also titles it “V2”. |
| PAPY / Premium RWA AUSD `0xB344e331A3cDa61D329fb3Cca2Be5942da87c418`, launched **2026-09-02** | **FACT** (public launch); deploy is earlier | Bitwise/PR Newswire 2026-09-02. Morpho `creationTimestamp` **2026-08-24**. Unlisted seed `rwa AUSD` `0xD83c…120E` created **2026-08-11**. |
| DefiLlama curator TVL **~$14.43m** (~$14.28m ETH, ~$148k Base) | **STALE CLAIM** | Grok’s URL is right. **This pass:** DefiLlama [protocol/bitwise](https://defillama.com/protocol/bitwise) **$20.88m** (ETH $20.67m, Base $207,793). Morpho GraphQL curator `aum` ~$20.90m; PAPY ~$20.69m; Liquid Prime ~$208k. Methodology: Morpho vault deposits only. Not a loss number. |
| PAPY page **~$19–21m** AUSD on 2026-09-15 | **FACT** (range) | Bitwise Onchain table **$20.700M**; Morpho UI **$20.69M**. Instant APY **disagrees** across UIs (Morpho ~8.31% vs Bitwise site ~4.91% instant / 4.56% 7D). Do not pick a “true APY.” |
| Jupiter Lend / Fluid isolated **USDe** market with Ethena on **2026-05-13** | **FACT** as curator role; **not** a Morpho vault | PR Newswire / The Block / Jupiter docs: **Bitwise x Ethena Market**, co-curated with Bitwise, isolated from the Fluid-curated Jupiter Market. Assets USDe / USDG / SOL. UI: [jup.ag/lend/ethena/market](https://jup.ag/lend/ethena/market). No sourced loss/pause. Out of Morpho/Euler incident rows unless a later event hits this market. |
| Sector critic pieces on hardcoded oracles / allocator bots / RWA credit did not name Bitwise vaults | **FACT** | Resolv/Stream coverage names other curators. Absence from those lists ≠ reconstructed historical PnL. |
| RUMOR: none sourced | **FACT** (this pass) | No Bitwise-vault rumor mill found. |
| Morpho forum: no Bitwise curator thread / post-mortem | **FACT** as of search | `site:forum.morpho.org Bitwise` did not return an intro or incident thread (unlike kpk, Api3, Armitage). |
| Euler: Bitwise not present | **FACT** | Euler `api/public/metadata` on ETH/Base/Arb/BSC/Avax/Unichain/Linea: **no Bitwise entity**. Morpho V1 `vaults(curatorAddress_in: Bitwise)` = **empty**. |
| Risk docs: **active**; TOS last modified **2026-08-25**; not a Gauntlet/Steakhouse-style forum memo | **FACT** with a gap | TOS “Last Modified: August 25, 2026” is primary. PAPY has a live Morpho risk-disclosure block + Onchain risk-factor list. **FACT gap Grok skipped:** Morpho UI on Liquid Prime: **“Curator has not submitted a Disclosure.”** Sheet dropdown stays `active` because PAPY + TOS are current product docs, not because the Morpho form is filled on every vault. |
| PoC X: **@Bitwise / @BitwiseInvest (same account)**; lead **@0x_JMan**; no TG | **FACT** for @0x_JMan and no TG; **CLAIM** that the two X URLs are one account | Morpho curator socials: `https://x.com/Bitwise`. Jan 2026 launch tweet is widely cited as **@BitwiseInvest**. Treat as the firm PoC; do not invent a Telegram. |
| No new incident as of 2026-09-15; no prior lesson to reuse | **FACT** | Same-day independent pass found nothing Grok would have missed as a *loss event*. |

---

## Wrong / easy-to-get-wrong if the sheet or a later scrape repeats them

| Item | Label | Reality |
| --- | --- | --- |
| “Bitwise’s first Morpho strategy” = PAPY (Frambot quote in the 2026-09-02 PAPY release) | **WRONG** as chronology | Morpho blog **2026-01-26** already announced Bitwise as curator; BPRIME deployed **2026-02-09**. Treat Frambot’s “first strategy on the network” as **marketing**, not the on-chain start. |
| Jan 2026 “>$15B AUM” vs Sep 2026 “$9B” as a curator-trust incident | **WRONG** for this DD | Firmwide marketing AUM, not vault NAV. Out of scope. |
| Option-income ETF liquidations / BWEB–BTOP closures (2026) as vault incidents | **WRONG** | Securities product pruning. No primary tying them to Morpho vault ops. Leave off the Events tab. |
| Resolv ~$23–25M / ~80M unbacked USR as Bitwise `usd_lost` | **WRONG** | Resolv-protocol P&L (DL News / Chainalysis). Bitwise not in the ~15 Morpho vaults with >$10k USR exposure. |
| Stream/xUSD Nov 2025 as Bitwise vault loss | **WRONG** | Bitwise was not yet a Morpho curator (announce 2026-01). |
| “We are fiduciaries” (Man, Markets Media, published 2026-03-27) as the legal posture of PAPY | **CLAIM** vs later **FACT** | Interview: Man said Bitwise treats vault risk as fiduciary. PAPY Morpho disclosure + Onchain TOS: BIM is an SEC-registered IA for a **separate** advisory business and is **not** adviser/fiduciary to vault users. That is a **standing legal contradiction**, not a dated loss. |
| “Lending markets have not suffered any bad debt; there is always an automatic liquidation mechanism” (same Markets Media piece, ~5 days after Resolv) | **CLAIM** (overbroad) | True *at most* for Bitwise’s own WETH/cbBTC markets. False as a Morpho-wide statement after 2026-03-22. Not a Bitwise vault incident. |
| Morpho “Liquid Prime USDC V2” implies a listed V1 with TVL | **UNVERIFIED** | No Bitwise Morpho V1 vault in GraphQL. “V2” is the vault standard. |
| DefiLlama $14.43m or Morpho UI $10.05m curator TVL as current | **STALE** | Use a dated snapshot. This pass: ~$20.9m Morpho curator AUM. |
| PAPY ~$1B “capacity” as TVL | **CLAIM** (marketing) | Bitwise Onchain “Capacity ~$1B”. Live deposits ~$20.7M. |
| Hypernative “automatically reduce or remove exposure” / ForDeFi MPC as proven incident response | **CLAIM** (vendor + Bitwise marketing) | Onchain vaults page and Hypernative blog (Bitwise selects Hypernative). No public log of those tools firing on a Bitwise vault. |

---

## Unverified (do not invent)

- Historical share-price path / bad debt on BPRIME or PAPY at Resolv time. Live Morpho `warnings` on both listed vaults: **[]**. That is not a 2026-03-22 replay.
- Whether Liquid Prime’s ~99% single depositor (`0x55Fa…272c` on Morpho user table this pass) is Bitwise seed capital.
- Whether unlisted Arc vault `pjvk` (`0x744B…7a99`, curator = Bitwise curator address, **different owner**) is a Bitwise test or key reuse. Dust TVL. Not an incident.
- Jupiter Lend USDe market TVL, utilization, or any loss. Grok correctly did not assign USD.
- `% of vault TVL` on anything. No primary %.
- Telegram PoC. None found.

---

## Missing from Grok (add / change)

Grok’s empty blotter is right. The paste is thin on **on-chain config** that an RWA DD user will ask about:

1. **Announce 2026-01-26 vs first vault 2026-02-09** vs PAPY public **2026-09-02** / contract **2026-08-24**.
2. **Morpho V2 only.** No Euler. No Morpho V1.
3. **Liquid Prime Morpho disclosure = none submitted.** PAPY disclosure = full legal/risk block. TOS 2026-08-25.
4. **Timelocks:** Liquid Prime `addAdapter` / cap increases **259201s (~3d+1s)** vs Morpho recommended **7d**. PAPY those selectors **604800s (7d)**. Both vaults: `decreaseTimelock`, `setManagementFee`, `setPerformanceFee` duration **0**.
5. **Roles (both listed vaults):** owner `0x510F3b6621D9eA392d4F7632d02aBCf8ba92Bd6F`, curator `0xB5933F4E9F29e9E92dBA92b643B37a270204dE82`, allocator `0x12880Ca9B2B3F683ce7B7E90a2bA70d26e669a4b`, sentinel `0x8C7578a9E34872c3A303A4b67aDDC560413Fc3CC`.
6. **Fees (API 2026-09-15):** BPRIME performance 0 / management 0. PAPY performance 0 / management **~0.39%** (matches Onchain). Recipients: perf `0x22a5…fd57`, mgmt `0x0d49…602f`.
7. **Live books:** BPRIME ~50/50 USDC vs WETH 86% and cbBTC 86%, caps 1B / 100% relative. PAPY PST ~44%, PRIME ~25%, sUSDai ~24%, idle ~7%; 86% LLTV; Morpho UI liquidity **~$2.79M** vs **~$20.69M** deposits (utilization ~92–96% on the three markets). Liquidity risk is **disclosed**, not an incident.
8. **Unlisted `rwa AUSD` seed** and dust **Arc `pjvk`**.
9. **Jupiter x Ethena** as standing curator activity (co-curated, 92% LTV USDe/USDG, 12.3× Multiply) — not a Morpho row.
10. **Fiduciary interview vs PAPY disclaimer**; Man’s post-Resolv “no bad debt” line — standing comms, not Events tab.
11. If Grok later grows INCIDENT blocks for Resolv/Stream/ETF closures: **delete**. If it invents USD/%: replace with **unknown**.

---

## What to add / change in `merged.md`

- Keep **no material incidents** as of 2026-09-15. Do not mint Low “comms” rows just to fill the grid.
- Standing checks from the combined pass (below in `merged.md`).
- Vault URLs: Morpho curator page + both listed vaults + PAPY Onchain + Jupiter Ethena market + DefiLlama (dated).

## Sources used against Grok

- Grok paste: `docs/curator-dd/bitwise/twitter-grok.md`
- Morpho: [curator/bitwise](https://app.morpho.org/curator/bitwise), [BPRIME](https://app.morpho.org/base/vault/0x5e03f8965e2957291B3c6990C6Cb9023c36d3d30/bitwise-liquid-prime-usdc), [PAPY](https://app.morpho.org/ethereum/vault/0xB344e331A3cDa61D329fb3Cca2Be5942da87c418/bitwise-premium-rwa-ausd), GraphQL `curator(id:"bitwise")` / `vaultV2ByAddress`
- Bitwise: [Jan 26 newsroom](https://bitwiseinvestments.com/newsroom/bitwise-expands-onchain-solutions-with-introduction-of-non-custodial-vault), [Morpho blog](https://morpho.org/blog/bitwise-joins-the-morpho-network-as-a-curator), [PAPY newsroom](https://bitwiseinvestments.com/newsroom/bitwise-premium-rwa-vault-papy-launches-on-morpho-with-agoras-ausd), [Onchain PAPY](https://onchain.bitwiseinvestments.com/vaults/papy-ausd), [TOS](https://onchain.bitwiseinvestments.com/tos)
- Explorers: [Basescan BPRIME](https://basescan.org/address/0x5e03f8965e2957291B3c6990C6Cb9023c36d3d30), [Etherscan PAPY](https://etherscan.io/address/0xB344e331A3cDa61D329fb3Cca2Be5942da87c418)
- Jupiter: [docs markets](https://docs.jup.ag/user-docs/earn/lend/markets), [PR Newswire 2026-05-13](https://www.prnewswire.com/news-releases/jupiter-lend-onboards-bitwise-to-curate-ethena-market-302771007.html)
- DefiLlama: [protocol/bitwise](https://defillama.com/protocol/bitwise)
- Resolv curator list: [DL News 2026-03-23](https://www.dlnews.com/articles/defi/resolve-labs-stablecoin-falls-80-per-cent-as-millions-tokens-minted/)
- Comms: [Markets Media 2026-03-27](https://www.marketsmedia.com/vaults-emerge-as-core-building-block-of-onchain-asset-management/), [Blockstories 2026-01-29](https://www.crypto.blockstories.io/p/bitwise-s-move-into-onchain-vaults-interview-with-jonathan-man-bitwise-and-paul-frambot-morpho)
- Ops marketing: [Hypernative](https://www.hypernative.io/insights/blog/bitwise-selects-hypernative-to-strengthen-defi-risk-management-across-15b-platform)
