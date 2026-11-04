---
cursor:
  subagentId: "bc-029d35d2-73d7-507b-9a2b-92db40bf7d49"
---

# Clearstar, merged DD draft

**Draft date:** 2026-09-15  
**Inputs:** Grok paste `twitter-grok.md` (4 INCIDENT blocks, ingest byte-identical to Desktop) + independent Morpho/Euler/X/Basescan/forum research. User-edit before any Google Sheet paste.  
**IDs:** Grok’s `CUSDOORACLE` / `RESOLVRLP` / `REORACLE` kept. `ORACLETRUNC` is off the events list. Added `CLEARSTAR-20260904-VESU`.  
**Labels:** FACT / CLAIM / RUMOR in prose. Do not invent USD lost or %.

Clearstar (Clearstar Labs) is a Swiss Morpho/Euler risk curator. Operating company **NovaFusion SA** (firm founded 2022). Site: https://www.clearstar.xyz/ (risk-curation, due-diligence, reports, about; contact `info@clearstar.xyz`). X: [@ClearstarLabs](https://x.com/ClearstarLabs). Morpho curator: https://app.morpho.org/curator/clearstar.

Morpho listed the curator category **11 Mar 2025**. First vault announced **17 Mar 2025** ([forum 1615](https://forum.morpho.org/t/announcing-clearstar-openeden-usdc-vault-exclusive-collaboration-boosted-rewards/1615)). Treat **2025-03** as Morpho curator start, not company founding.

On-chain curator addresses (Morpho `curator(id: "clearstar")`):

- `0x30988479C2E6a03E7fB65138b94762D41a733458` (main)
- `0x5634520dd1C044fD8E589A7113C2d8f8f279fc24`
- `0x72882eb5D27C7088DFA6DDE941DD42e5d184F0ef`
- `0xb3CF59A5f12cA319861376C5e63Eef4790a42B44`

First Morpho V1 vault: **Clearstar OpenEden USDC** `0x1D3b1Cd0a0f242d598834b3F2d126dC6bd774657` on Base, created ~2025-03-07, later shown as **Clearstar USDC Reactor**. Launch markets (forum 1615): cUSDO/USDC Aerodrome LP, cUSDO, PT-USR-24APR2025, RLP, cbBTC. Later listings included mBASIS (7 Apr 2025) and PT-cUSDO-15JUL2025 (1 May 2025).

Live vault URLs (Morpho app + Blue API 2026-09-15, non-exhaustive):

- Base V1 Reactor (ex-OpenEden) `0x1D3b1Cd0a0f242d598834b3F2d126dC6bd774657`, https://app.morpho.org/base/vault/0x1D3b1Cd0a0f242d598834b3F2d126dC6bd774657/clearstar-usdc-reactor
- Base V1 Yield USDC `0xE74c499fA461AF1844fCa84204490877787cED56`, https://app.morpho.org/base/vault/0xE74c499fA461AF1844fCa84204490877787cED56/yield-clearstar-usdc
- ETH V1 Yield USDC `0x9B5E92fd227876b4C07a8c02367E2CB23c639DfA`, https://app.morpho.org/ethereum/vault/0x9B5E92fd227876b4C07a8c02367E2CB23c639DfA/clearstar-yield-usdc
- ETH V1 Reactor `0x62fE596d59fB077c2Df736dF212E0AFfb522dC78`, https://app.morpho.org/ethereum/vault/0x62fE596d59fB077c2Df736dF212E0AFfb522dC78/clearstar-usdc-reactor
- ETH V2 Yield USDC `0xFa17f7AAdbfAc2C5d3C8125555404c1AE17Df853`, https://app.morpho.org/ethereum/vault/0xFa17f7AAdbfAc2C5d3C8125555404c1AE17Df853/clearstar-yield-usdc (~$557k assets, **$0 liquidity**, `low_liquidity` + `not_whitelisted`)
- ETH Re Ecosystem V2 `0xD1E9242e075Db4bdd3f3c721D7d5fd4180A94A7e`, https://app.morpho.org/ethereum/vault/0xD1E9242e075Db4bdd3f3c721D7d5fd4180A94A7e/re-ecosystem-vault
- ETH 3Jane Ecosystem V2 `0xe05faDf242331808f504661BEA65972594869826`, https://app.morpho.org/ethereum/vault/0xe05faDf242331808f504661BEA65972594869826/3jane-ecosystem-vault
- Base V2 cbAssets `0x91C056B6d4311a743614FBc03ac32d4E6A2d3a3c`, https://app.morpho.org/base/vault/0x91C056B6d4311a743614FBc03ac32d4E6A2d3a3c/clearstar-cbassets-vault
- Arb V1 High Yield USDC `0x64CA76e2525fc6Ab2179300c15e343d73e42f958`, https://app.morpho.org/arbitrum/vault/0x64CA76e2525fc6Ab2179300c15e343d73e42f958/clearstar-high-yield-usdc
- Base V2 Boring USDC `0x0282159ecCaabA941bD1f4C518944D8fDCdc0681`, https://app.morpho.org/base/vault/0x0282159ecCaabA941bD1f4C518944D8fDCdc0681/clearstar-boring-usdc (this is **not** the “no disclosure” example; Grok mixed it up)
- Base V1 Boring USDC `0x43e623Ff7D14d5b105F7bE9c488F36dbF11D1F46`, tiny V1 sibling

Also listed: Core ETH/USDC, Accountable AUSD (Monad), Katana USDT/USDC, Noon Ecosystem, Institutional USDC/USDT, plus dust/test vaults. Out of scope as **loss rows**: Euler Fusion/Noon/RWA/Re/Earn/Horizon cluster (Horizon USDC `0x9f936cD7bC9c7aA90Bbb27Ce1B961655434754cB` had USR/wstUSR/RLP config, peak ~$75k, last data ~Feb 2026 / ~0 TVL, **no sourced depositor-loss event**); Alterscope LRT rebrand (Euler labels PR #600, 12 May 2026); IPOR Fusion Jan 2026 ~$336k (different vault); yoUSD Looopeer Trading Strategy DD; Stream/xUSD.

---

EVENT
curator: Clearstar
date: 2025-05-25
title: CUSDO Oracle
incident_id: CLEARSTAR-20250525-CUSDOORACLE
type: oracle
impact: Low
fault: direct
class: affected
severity: Low
protocol_or_vault_url: https://app.morpho.org/base/vault/0x1D3b1Cd0a0f242d598834b3F2d126dC6bd774657/clearstar-usdc-reactor
usd_lost: 49303
pct_of_that_vault_tvl: unknown
status: resolved
what_actually_happened: FACT (Grok + Morpho forum 1794 + Basescan): On 2025-05-25 at 23:29:09 UTC an attacker manipulated the Aerodrome cUSDO/USDC sAMM LP price oracle used by a Morpho market listed in the Clearstar OpenEden USDC vault (now Clearstar USDC Reactor, `0x1D3b1Cd0a0f242d598834b3F2d126dC6bd774657`). Attack tx: https://basescan.org/tx/0xd8c4f742e223735abdc4ee7df0c0d608430d04ac0d4e696f7b6d48a2e56ca2ba. The LP oracle valued the token from raw pool reserves plus a hardcoded USDO=$1 assumption (USDC from Chainlink, cUSDO via ERC-4626) and did not account for swap-fee / reserve distortion under a flash-loan swap. Borrower contract `0xE11…` flash-loaned **6,666,666.67 USDC**; helper/supplier `0x8F5…` posted liquidity so the same wallet was not simultaneously lender and borrower. The attacker inflated then collapsed the reported LP price, over-borrowed, self-liquidated, and left realized bad debt on that market. Curator headline: **49,303.14 USDC** bad debt, fully compensated. Coverage tx 2025-05-26 20:35:57 UTC deposited **49,304 USDC** into the vault: https://basescan.org/tx/0x9a75859269b437c633e3958b8d6af04942dc53d087f212fa5499edd27bcea02e. Same post-mortem also says “~48k USDC” and writes a walkthrough total of **40,303.47 USDC**; the listed steps 72,242.78 + 11,541.64 − 34,480.95 actually equal **49,303.47**, so 40,303.47 is almost certainly a typo, not a second loss. Sheet field **49303** matches the curator headline. Vault TVL at the minute of the attack was not published. `UpdateLastTotalAssets` immediately before the coverage deposit was **3,675,194.81 USDC** (derived ≈1.34%, **not** curator-published; `pct` stays unknown). CLAIM: “full recovery” is curator-framed (they funded the vault); not an independent depositor-level audit. RUMOR: none found.
response_summary: FACT. Next-day Morpho-forum post-mortem; market set to close-only with allocations at 0; Morpho contracts framed as behaving as designed; fault sat in LP-oracle curation. Curator covered the shortfall internally within hours and stated OpenEden vault depositors had no remaining loss.
critics: none located on this specific event beyond the curator’s own admission that LP-oracle curation was the failure.
lesson_applied_later: unclear + example (Grok): they documented reserve-based LP oracles as unsafe, then still listed other non-spot collaterals (RLP, PTs) whose pricing assumptions later became the story (see RESOLVRLP and REORACLE).
funds_recovered: full
sources: primary, https://forum.morpho.org/t/post-mortem-aerodrome-cusdo-usdc-amm-lp-oracle-manipulation-on-morpho-lending-market/1794 ; https://basescan.org/tx/0xd8c4f742e223735abdc4ee7df0c0d608430d04ac0d4e696f7b6d48a2e56ca2ba ; https://basescan.org/tx/0x9a75859269b437c633e3958b8d6af04942dc53d087f212fa5499edd27bcea02e ; launch, https://forum.morpho.org/t/announcing-clearstar-openeden-usdc-vault-exclusive-collaboration-boosted-rewards/1615

---

EVENT
curator: Clearstar
date: 2026-03-22
title: Resolv RLP
incident_id: CLEARSTAR-20260322-RESOLVRLP
type: collateral
impact: High
fault: indirect
class: affected
severity: High
protocol_or_vault_url: https://app.morpho.org/ethereum/vault/0x9B5E92fd227876b4C07a8c02367E2CB23c639DfA/clearstar-yield-usdc
usd_lost: unknown
pct_of_that_vault_tvl: unknown
status: unresolved
what_actually_happened: Resolv was a delta-neutral stablecoin protocol. USR was its dollar token, while RLP was the junior token meant to absorb losses first. FACT: On 22 Mar 2026 Resolv’s off-chain mint signer was compromised and a large unbacked USR mint hit the market (industry/coverage figure **CLAIM** ~80m unbacked USR / ~$25m extract, The Block). USR depegged; RLP (junior tranche) became impaired and illiquid. Clearstar had listed RLP as an initial OpenEden market in Mar 2025 and still had RLP in Yield USDC vaults on the exploit day. Same-day curator post (07:58 UTC): Yield USDC on Morpho had an RLP allocation and that market was illiquid; they argued RLP was not meant to underwrite smart-contract risk. That tweet’s exploit sketch ($50M USR for ~$100k) is **incomplete**, do not copy it as event size. https://x.com/ClearstarLabs/status/2035627098551746751 Next-day official exposure list (**FACT** as curator-stated exposure, **not** realized loss) https://x.com/ClearstarLabs/status/2036020661911503182 : Clearstar Yield USDC (Ethereum) **1,000,652 USDC** direct RLP; USDC Reactor (Ethereum) **≈294,100 USDC** indirect wstUSR via mAPOLLO/PT-mAPOLLO; USDC Reactor (Base) **≈91,780 USDC** indirect RLP via yoUSD; High Yield USDC (Arbitrum) **4,320 USDC** direct RLP. Chaos Labs the same week listed Clearstar Morpho USDC Mainnet (Yield + Reactor) at **~$1.00M**. Sentora later grouped Clearstar with curators whose Resolv impact was “under $1M.” Morpho API share prices on ETH Yield / Base Yield / Base Reactor around 22–24 Mar 2026 did **not** crash; TVL fell via withdrawals (illiquidity/lockup, not an instant NAV haircut). No primary source publishes a final net USD loss after recovery, so `usd_lost` is unknown. Do **not** sum the four sleeves into the loss field. CLAIM (Spearmint, 24 Mar 2026): Clearstar disabled normal V2 withdrawals, leaving ~$2M V2 depositors unable to exit the usual way, and queued a 48-hour RLP delist that would write off ~$1M as bad debt; forceDeallocate still worked (juan.hl rescue path). CLAIM (depositors on X, May–Jun 2026, e.g. @markbaghdady via Asset Rovers): funds remained stuck for weeks while Gauntlet already had a Resolv deal. RUMOR: none separately sourced. Do not treat Morpho V1 donation / Public Allocator as a proven Clearstar Events-tab row. On 23 June 2026 Clearstar said it had reached an agreement with Resolv and that recovery proceeds would be distributed in USDC through Merkl to eligible depositors. The public text ends at "Morpho V1 - Clearstar", so the vault list is not fully readable. That post is a promise. It is not shown as paid. As of 26 September 2026, 95 days have passed (3 months and 3 days). The 15 September 2026 writeup still had Ethereum V2 Yield at $0 withdrawable liquidity. Do not sum the March exposure sleeves into `usd_lost`. Do not copy Gauntlet's or Re7's Merkl pools onto this row.
response_summary: FACT. Clearstar posted within hours, blocked deposits on exposed vaults, automated withdrawals from RLP-first markets, and reopened Reactor vaults after yoUSD/mAPOLLO liquidity returned (Base Reactor reopened with a **2.91% fee**). Yield USDC Ethereum and High Yield Arbitrum stayed locked until RLP was clarified. 24 Mar: all vaults resuming except ETH Yield still RLP-exposed. 30 Mar: eight days, no concrete RLP unlock; pressing Resolv ToS. On 23 June 2026 Clearstar said it had reached an agreement with Resolv and that recovery proceeds would be distributed in USDC through Merkl to eligible depositors. The public text ends at "Morpho V1 - Clearstar", so the vault list is not fully readable. That post is a promise. It is not shown as paid. As of 26 September 2026, 95 days have passed (3 months and 3 days). The 15 September 2026 writeup still had Ethereum V2 Yield at $0 withdrawable liquidity. Grok **CLAIM**: remaining holders of Morpho V1 Yield USDC `0x9B5E92fd227876b4C07a8c02367E2CB23c639DfA` and V2 Yield USDC `0xFa17f7AAdbfAc2C5d3C8125555404c1AE17Df853`, pro-rata to exploit-time exposure net of later withdrawals, plus expected later RESOLV token unlocks. Dollar size of that first tranche was not stated; the 23 Jun tweet text truncates at “Morpho V1 - Clearstar” on fxtwitter, so treat those two addresses as CLAIM until the rest of the tweet is recovered. As of **2026-09-15**, ETH V2 Yield still shows **$0 withdrawable liquidity**, ~$557k `totalAssetsUsd` in one adapter, Morpho warnings `low_liquidity` and `not_whitelisted`. That is why status is **disputed**, not Grok’s `resolved`.
critics: Chaos Labs / Omer Goldberg, curator-contagion write-up listing Clearstar ~$1.00M https://x.com/chaoslabs/status/2036145976952365218 ; Spearmint (@0xSpearmint) https://x.com/0xSpearmint/status/2036358837658431586 ; juan.hl (@0xjuaan) rescue-exit thread quoted therein; depositor Mark (@markbaghdady) via replies summarized at https://x.com/assetrovers/status/2063539422868435016 ; Rekt listed Clearstar Yield USDC among Morpho vaults with >$10k liquidity impact.
lesson_applied_later: yes + example (Grok): after this they still allocated the Re Ecosystem Vault to PT-reUSD / reUSD markets that later saw an oracle-manipulation liquidation wave (see CLEARSTAR-20260825-REORACLE), i.e. concentrated ecosystem-collateral risk returned.
funds_recovered: none
sources: primary, https://x.com/ClearstarLabs/status/2035627098551746751 ; https://x.com/ClearstarLabs/status/2036020661911503182 ; https://x.com/ClearstarLabs/status/2036348707470205244 ; https://x.com/ClearstarLabs/status/2038584706560659782 ; https://x.com/ClearstarLabs/status/2069493588405203389 ; https://forum.morpho.org/t/announcing-clearstar-openeden-usdc-vault-exclusive-collaboration-boosted-rewards/1615 ; commentary, https://sentora.com/research/articles/the-resolv-hack-25m-from-a-single-compromised-key ; https://x.com/chaoslabs/status/2036145976952365218 ; https://x.com/0xSpearmint/status/2036358837658431586 ; https://www.theblock.co/post/394582/resolvs-usr-stablecoin-depegs-after-attacker-mints-80-million-unbacked-tokens-extracts-roughly-25-million ; Morpho V1 donation caveat, https://docs.morpho.org/curate/concepts/security-considerations/

---

EVENT
curator: Clearstar
date: 2026-08-25
title: Re Oracle
incident_id: CLEARSTAR-20260825-REORACLE
type: oracle
impact: N
fault: indirect
class: non-materially-affected
severity: N
protocol_or_vault_url: https://app.morpho.org/ethereum/vault/0xD1E9242e075Db4bdd3f3c721D7d5fd4180A94A7e/re-ecosystem-vault
usd_lost: unknown
pct_of_that_vault_tvl: unknown
status: resolved
what_actually_happened: FACT: Clearstar curates the Re Ecosystem Vault on Morpho (live Dec 2025; PT-reUSD-Dec 2026 listed 24 Jun 2026 - https://x.com/ClearstarLabs/status/2069867189499285897). On 25 Aug 2026 05:33 UTC @deficrimewatch reported an oracle-manipulation attack on the Morpho PT-reUSD market that let a freshly funded wallet (`0x854e3f3b521dbae34cb111ebef0dce41d8b5690d`) buy YTs and liquidate **~$37m of loops** (CLAIM, borrower-loop notional, not vault TVL loss). Clearstar replied the same morning that they were looking into it and that the Morpho V2 Re Ecosystem Vault **share price was not affected** because the liquidations created **no bad debt**. No curator post quantifying vault lender loss was found. Independent share-price reconstruction was **not** done this pass. Grok put `usd_lost: 0` / `pct: 0` from that tweet; those are curator-asserted. Sheet fields stay **unknown**. RUMOR: none on Clearstar-specific loss.
response_summary: FACT. One public reply asserting no vault bad debt and no share-price hit. No later post-mortem from Clearstar on this market was found as of 2026-09-15.
critics: Defi Crime Watch (@deficrimewatch) https://x.com/deficrimewatch/status/2092123224637112681
lesson_applied_later: unclear + example (Grok): too recent to show a subsequent design change. Same family as CUSDO/Resolv: non-spot / PT collateral plus a manipulable oracle, even if Clearstar reports no vault bad debt that day.
funds_recovered: n/a
sources: primary, https://x.com/ClearstarLabs/status/2092134333976830231 ; https://x.com/ClearstarLabs/status/2069867189499285897 ; commentary, https://x.com/deficrimewatch/status/2092123224637112681

---

EVENT
curator: Clearstar
date: 2026-09-04
title: Vesu
incident_id: CLEARSTAR-20260904-VESU
type: oracle
impact: Low
fault: indirect
class: affected
severity: Low
protocol_or_vault_url: https://docs.vesu.xyz/blog/2026-09-13-incident-refunds
usd_lost: unknown
pct_of_that_vault_tvl: unknown
status: unresolved
what_actually_happened: Clearstar has curated a Vesu pool since 28 January 2026. On 4 September 2026 a Pragma price fault liquidated positions. On 13 September 2026 Vesu said recovered assets are held by Vesu, Re7 Labs, and Clearstar, and that each curator refunds its own pool. The recommended rate is 95%. Pragma's 17 September 2026 note, still the latest section when read on 26 September 2026, says Vesu had not announced that every curator refund was finished. No Clearstar post states its own dollar or that its users were paid. `usd_lost` stays unknown. Do not book protocol-wide recovered, lender-claim, or seized-collateral totals as `usd_lost`.
response_summary: Compensation was recommended on 13 September 2026. It is not shown as paid by Clearstar. As of 26 September 2026, 13 days have passed since that note, and 22 days have passed since 4 September 2026. No Clearstar post states that its users were paid.
critics: No Clearstar post was found, so there was no Clearstar thread to read. Pragma's 17 September 2026 note says Vesu had not announced that every curator refund was finished.
lesson_applied_later: unclear. No later Clearstar rule for this pool was found.
funds_recovered: none
sources: primary https://docs.vesu.xyz/blog/2026-09-13-incident-refunds ; primary https://www.pragma.build/updates/vesu-incident

---

## Not on Events tab
- `CLEARSTAR-20260716-ORACLETRUNC`, Removed because it was not their market and not their fault.

## STANDING CHECKS

**Events (H/M/L/N/D/I):** `1H 0M 2L 1N 1D 3I`

**Risk docs:** none  
https://www.clearstar.xyz/ (risk-curation, due-diligence, protocol-DD) still serving. Morpho curator page live. Gap: some Morpho V2 vault pages show incomplete vault-level disclosure even though marketing DD pages exist. **FACT:** ETH V2 Yield `0xFa17f7AAdbfAc2C5d3C8125555404c1AE17Df853` is `not_whitelisted` + `$0` liquidity as of 2026-09-15. Grok’s example “Clearstar Yield USDC / Boring USDC on Base” is the **wrong vault**: Base Boring USDC V2 `0x0282159ecCaabA941bD1f4C518944D8fDCdc0681` is a NovaFusion SA product (research pass: Morpho disclosure present). Do not copy Grok’s Boring example into a sheet.

**Active since:** 2025-03  
FACT: Morpho forum category 11 Mar 2025; first vault 17 Mar 2025; Base V1 vault created ~2025-03-07. Firm founded 2022. Agrees with Grok.

**PoC:** X: @ClearstarLabs  
Email `info@clearstar.xyz`. Team/comms also answering as @0xGuzzla is Grok **CLAIM** (not independently verified). No public Telegram handle sourced. Site: https://www.clearstar.xyz/

**Any new incident since 2026-08-25:** Vesu on 4 September 2026 (`CLEARSTAR-20260904-VESU`). Not shown as paid by Clearstar as of 26 September 2026.

**Whether a past lesson showed up again:** yes (Grok). The 2025 LP-oracle failure and the 2026 Resolv RLP lockup are both “non-spot collateral + optimistic pricing.” The Aug 2026 Re/PT-reUSD liquidation wave is the same family on a different issuer, even if Clearstar reports no vault bad debt that day. Jul 2026 truncation is a near-miss in the same oracle-hygiene bucket.

**Clean-if-empty:** not empty as of 2026-09-15.

**Searched:** Grok paste; Morpho app curator page, Blue API V1+V2, docs, forum 1615/1794; clearstar.xyz; @ClearstarLabs keyword sweep (exploit, pause, oracle, RLP, Resolv, withdrawal, bad debt); Resolv coverage (Chaos Labs, Sentora, The Block); Euler Horizon USR/RLP config (no loss event); Stream/xUSD (Grok: Clearstar said no exposure 4 Nov 2025; Protos 6 Nov “mostly” unexposed, not a loss row); Trading Strategy / vaults.fyi / Dune curator views; HypurrFi handoff (Grok; not independently researched; no loss). No Euler-specific Clearstar loss event was sourced.
