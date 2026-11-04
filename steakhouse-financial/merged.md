---
cursor:
  subagentId: "bc-1e0393f1-a4bc-50b0-93c1-29d46f5e9625"
---

# Steakhouse Financial, merged DD draft

**Draft date:** 2026-09-15  
**Grok paste:** present in `twitter-grok.md` (four INCIDENT blocks + standing checks). Relabels tweet-only numbers as CLAIM where X returned 403, adds 2024–early-2026 curator-scoped events Grok skipped, then applies Class/severity taxonomy (EURCV off the Events tab). User-edit before any Google Sheet paste.  
**Labels in prose:** FACT / CLAIM / RUMOR. `usd_lost` and `pct_of_that_vault_tvl` are `unknown` unless a primary source states them.

Steakhouse Financial is the largest Morpho vault curator by deposits in public Morpho UI/API snapshots in 2025–2026. They announced a flagship USDC MetaMorpho vault on 9 Nov 2023 and launched steakUSDC in early January 2024 (Kitchen 22 Jan 2024 guardian drill: vault already live, supplying wstETH and Backed bIB01 markets). Product lines today: **Prime** (blue-chip collateral, typically 7-day timelock + Aragon DAO guardian) and **High Yield** (formerly Smokehouse; broader/exotic collateral, typically 3-day timelock, higher fees), plus **Turbo** (looping/carry). Partnership vaults include Coinbase DeFi Lend (Base USDC), Safe, Farcaster, Bitget, Crypto.com, Grove, Ethena x Steakhouse, Coinshift (csUSDL/csUSDC), M^ZERO (steakM), Angle, Reservoir, Superstate/Centrifuge RWA, VaultBridge/Katana. Own app: [app.steakhouse.financial](https://app.steakhouse.financial/). Official docs: [steakhouse.financial/docs](https://www.steakhouse.financial/docs/). Morpho forum category: [SteakHouse Financial](https://forum.morpho.org/c/vaults/steakhouse-financial/18).

**Euler:** no Steakhouse-curated Euler Earn vault found on Euler’s Earn UI or in Steakhouse product docs (those name Morpho and Kamino; Box funding modules are Aave v3 and Morpho Blue). Euler’s Q1 2026 retrospective mentions Steakhouse as a curator with a dedicated frontend, not as an Euler Earn operator.

Live Morpho snapshot (API + app, 2026-09-15, non-exhaustive; TVL moves):

- Base Prime USDC V2 `0xbeef0e0834849aCC03f0089F01f4F1Eeb06873C9`, ~$428M, https://app.morpho.org/base/vault/0xbeef0e0834849aCC03f0089F01f4F1Eeb06873C9
- Robinhood USDG `0xBeEff033F34C046626B8D0A041844C5d1A5409dd`, ~$460M
- Base High Yield USDC Edition V2 `0xbeeff2490FEffa212faC2f6553682C219E6a8845`, ~$403M
- Ethereum Prime EURCV V2 `0xbeef0C075Da5D01112AE5cF34d257074fB5DDB2f`, ~$141M
- Ethereum steakUSDC V1 `0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB`, ~$69M, https://app.morpho.org/ethereum/vault/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB/steakhouse-usdc
- Base steakUSDC V1 `0xbeeF010f9cb27031ad51e3333f9aF9C6B1228183`, ~$132M
- Ethereum Prime USDC V2 `0xbeef088055857739C12CD3765F20b7679Def0f51`, ~$107M
- Ethereum steakUSDT V1 `0xbEef047a543E45807105E51A8BBEFCc5950fcfBa`, ~$87M
- Ethereum Prime USDT V2 `0xbeef003C68896c7D2c3c60d363e8d71a49Ab2bf9`, ~$60M
- Ethereum High Yield USDC V2 `0xbeeff2C5bF38f90e3482a8b19F12E5a6D2FCa757`, ~$42M
- Ethereum Smokehouse USDC V1 `0xBEeFFF209270748ddd194831b3fa287a5386f5bC`, ~$14M, https://app.morpho.org/ethereum/vault/0xBEeFFF209270748ddd194831b3fa287a5386f5bC
- Ethereum steakETH V1 `0xBEEf050ecd6a16c4e7bfFbB52Ebba7846C4b8cD4`
- Ethereum steakM (M^ZERO) `0xbEEf0075e03A5cE0D84d4ACcF3481363E0584F5c`, https://app.morpho.org/ethereum/vault/0xbEEf0075e03A5cE0D84d4ACcF3481363E0584F5c
- Ethereum Steakhouse Resolv USR `0xbEEF8833f9Ff8e9D950Df3CEFb78DA88931C0450`, ~$0.10 idle, https://app.morpho.org/ethereum/vault/0xbEEF8833f9Ff8e9D950Df3CEFb78DA88931C0450

Morpho GraphQL `search: "Steakhouse"` returned **107** named vaults across Ethereum, Base, Arbitrum, Polygon, Katana, Monad, Hyperliquid, Unichain, World Chain, Robinhood. App UI also lists Prime ETH, Confidential Prime USDC, Ethena x Steakhouse USDC, Farcaster x Steakhouse, and others. Curator TVL on the steakM vault page showed **~$2.24B** “Curator TVL” at fetch time (Morpho’s curator rollup, not a single vault).

---

EVENT
curator: Steakhouse Financial
date: 2024-10-14
title: wM Oracle
incident_id: STEAKHOUSE-20241014-WMORACLE
type: oracle
impact: N
fault: direct
class: non-materially-affected
severity: N
protocol_or_vault_url: https://app.morpho.org/ethereum/vault/0xbEEf0075e03A5cE0D84d4ACcF3481363E0584F5c
usd_lost: 0
pct_of_that_vault_tvl: unknown
status: resolved
what_actually_happened: Steakhouse M V1 was a Morpho vault denominated in wM. It went live on 16 Aug 2024 while the product was still being set up. On 3 Sep, Steakhouse created wstETH/wM and WBTC/wM markets with the wrong price-feed decimals. The feeds overstated the collateral values by many orders of magnitude, so a borrower could have drained any vault allocated to them. Steakhouse traced the error to its market-creation scripts and a seed-position loan check that failed to display the problem. On 11 Oct, the vault's only depositor added 250,000 wM. The depositor withdrew the full 250,000 wM on 13 Oct, and Steakhouse removed the remaining liquidity from both markets on 13 and 14 Oct. Its 14 Oct account said no user funds were compromised and both markets had been removed from steakM. Morpho still shows the broken markets, but labels them unverified and shows no curator supplying them.
response_summary: Steakhouse detected the problem, notified the only depositor, and removed both markets after the depositor withdrew in full. Its 14 Oct account said future scripts would read token decimals from contracts, run checks before and after adding a market, and require another reviewer. On 29 Jun 2025, it published MetaOracleDeviationTimelock, an audited wrapper that starts from a reference price and only switches after a sustained gap. The broken markets still exist permissionlessly, but they are not a live Steakhouse allocation.
critics: none on the Morpho retrospective (0 replies). Easy mix-up with LeadBlock’s PAXG/USDC oracle retrospective the same month, that is a different curator.
lesson_applied_later: yes, example: on-chain decimal scripts + extra reviewer (stated 14 Oct 2024); MetaOracleDeviationTimelock posted 29 Jun 2025 (Cantina-audited immutable wrapper that defaults to a robust abstract price and switches to market price after sustained deviation). Residual: the two broken markets still exist permissionlessly with garbage oracles; they are unverified and ~$1–2 notionally, not a live Steakhouse allocation.
funds_recovered: n/a
sources: primary, https://forum.morpho.org/t/retrospective-wsteth-wm-wbtc-wm-market-oracle-configuration/878 ; https://app.morpho.org/ethereum/market/0xdf99a1e09b2a05d0f54a5fc4cc3de7ba9372eb0b7793cee58a18c385394bc05a ; https://app.morpho.org/ethereum/market/0xcc6fbc7f375c5d8206667dd9b1beac424983b2a5c850f1d429499fcc574ddb6c ; https://app.morpho.org/ethereum/vault/0xbEEf0075e03A5cE0D84d4ACcF3481363E0584F5c ; commentary (do not use as loss), https://depeg-monitor.webacy.co/vault-events/morpho-steakhouse-incident-2024 ; LeadBlock mix-up, https://forum.morpho.org/t/retrospective-paxg-usdc-market-oracle-configuration/891

---

EVENT
curator: Steakhouse Financial
date: 2025-02-21
title: Bybit
incident_id: STEAKHOUSE-20250221-BYBIT
type: collateral
impact: N
fault: indirect
class: non-materially-affected
severity: N
protocol_or_vault_url: https://forum.morpho.org/t/bybit-incident-response/1544
usd_lost: 0
pct_of_that_vault_tvl: unknown
status: resolved
what_actually_happened: Ethena issued USDe as a synthetic dollar, with sUSDe as its staked, yield-bearing form and Pendle principal tokens as fixed-term claims. FACT (Steakhouse forum 21 Feb 2025): Bybit was hacked ~14:16 UTC for circa 400k ETH and 90k stETH. At 15:49 UTC, following secondary-market price deviations, bbqUSDC automatically reallocated, reducing Ethena-related collateral to protect lenders, they had listed that Ethena-touching sleeve. Bybit acknowledged the hack 15:51 UTC; Steakhouse war room 15:53 UTC focused on perp-basis products (USDe, USR) used in some Smokehouse vaults. FACT: “No Steakhouse product line vaults are exposed to these collaterals.” Ethena posted limited then zero PnL exposure to Bybit (16:16 and 17:12 UTC); Resolv posted no Bybit exposure 16:25 UTC. “Exposure is now stabilized in bbqUSDC.” No bad-debt figure is stated. usd_lost 0 is “no loss reported,” not an independent reconstruction of bbqUSDC PnL. $0 insolvency has impact N and fault Indirect, not ops. Grok omitted this block.
response_summary: Automatic realloc on Smokehouse USDC before the public hack tweet; war room on basis-trade collateral; Prime line left as-is because unexposed. No pause of steakUSDC/steakUSDT reported.
critics: none found targeting Steakhouse’s Bybit handling.
lesson_applied_later: yes, example: same monitoring/realloc muscle shows up in Kelp (Apr 2025) and Resolv (Mar 2026) exits. Unclear whether Smokehouse permanently cut USDe/USR after Bybit; High Yield still lists yield-bearing stables as a mandate.
funds_recovered: n/a
sources: primary, https://forum.morpho.org/t/bybit-incident-response/1544

---

EVENT
curator: Steakhouse Financial
date: 2025-04-30
title: Kelp Mint
incident_id: STEAKHOUSE-20250430-KELPMINT
type: collateral
impact: N
fault: indirect
class: non-materially-affected
severity: N
protocol_or_vault_url: https://forum.morpho.org/t/kelp-incident-response/1727
usd_lost: 0
pct_of_that_vault_tvl: unknown
status: resolved
what_actually_happened: Kelp was a liquid restaking protocol, and rsETH was its restaked ETH token used as collateral. FACT (Steakhouse 30 Apr 2025): at 06:16 UTC Kelp suffered an infinite-mint glitch issuing ~1.69e16 rsETH. Kelp technical update 10:55 UTC: mint glitch would not produce excess insolvent secondary rsETH. Steakhouse war room 12:30 UTC decided to delist rsETH while mints/withdrawals were closed and news was volatile (secondary-market deviation risk on rsETH/ETH and rsETH/wstETH). FACT: 12:31 UTC they removed available liquidity from at-risk markets, **18.4 ETH**, “the exposure of Smokehouse vaults.” 12:37 UTC public allocator for those markets deactivated. “No remaining exposure in any Steakhouse curator vaults, notably bbqETH and bbqWSTETH.” 8 May 2025 follow-up: after review with Kelp, they judged Kelp’s circuit-breaker and response adequate; “no immediate impact”; the exit was precautionary and “ultimately did not occur” as an adverse market event. usd_lost 0: no loss stated; 18.4 ETH is exposure removed, not a haircut. Grok listed only the 2026-04-18 rsETH **bridge** exploit (`STEAKHOUSE-20260418-KELP`); this mint glitch is a separate event.
response_summary: Delist + pull 18.4 ETH + kill public allocator in minutes after the war-room call. Later reinstatement gated on extra technical DD (not confirmed here as having happened).
critics: none found.
lesson_applied_later: yes, example: same “war room then pull thin LST/LRT exposure” pattern as Bybit. High Yield still underwrites exotic collateral; this was an operational kill-switch, not a mandate change away from LSTs. 2026 Kelp Pause reused the pull, not a deposit-pause (that pause is CLAIM on Grok’s X thread).
funds_recovered: n/a
sources: primary, https://forum.morpho.org/t/kelp-incident-response/1727

---

EVENT
curator: Steakhouse Financial
date: 2026-03-22
title: Resolv Exit
incident_id: STEAKHOUSE-20260322-RESOLV
type: collateral
impact: N
fault: indirect
class: non-materially-affected
severity: N
protocol_or_vault_url: https://app.morpho.org/ethereum/vault/0xbEEF8833f9Ff8e9D950Df3CEFb78DA88931C0450
usd_lost: 0
pct_of_that_vault_tvl: unknown
status: resolved
what_actually_happened: Resolv was a delta-neutral stablecoin protocol. USR was its dollar token, while RLP was the junior token meant to absorb losses first. On 17 Mar 2026, Steakhouse published a Resolv risk report, announced that it had been hired as Resolv's risk manager, and deployed Steakhouse Resolv USR on Morpho. The vault lent USR against RLP at an 86% liquidation threshold. On 22 Mar, a compromised service-role key let an attacker mint unbacked USR. Steakhouse's monitoring detected a 1.61% USR/USDC gap at 02:21 UTC and began an automated unwind that it said finished by 03:02 UTC. The Morpho activity log still shows smaller moves from the RLP market at 03:05 and 11:14 UTC. On 23 Mar, Steakhouse reported zero losses, a peak allocation of $235,589, and no remaining exposure by 03:02. It also said it had never accepted RLP, although the dedicated USR vault had lent against RLP. A 26 Mar report gave the detailed timeline and said none of Steakhouse's vaults were among the material exposures flagged by Morpho. A user withdrew about 1,587 USR from the dedicated vault on 31 Mar. No sourced loss to Steakhouse depositors was found.
response_summary: On 22 Mar, Steakhouse added a postscript to its five-day-old risk report and said the collateral backing remained whole. On 23 Mar, it published the zero-loss and zero-exposure account. The 26 Mar report added the monitoring and unwind timeline, but did not reconcile the later RLP-market movements with the claim that exposure ended at 03:02. On 31 Mar, a user withdrawal was processed. Steakhouse later added an emergency deposit pause for High Yield vaults and used it during the 18 Apr Kelp incident. Its Resolv statements remain curator accounts, but no contrary depositor loss was sourced.
critics: @BTCLIN (https://x.com/BTCLIN/status/2035586051562152184), CLAIM (tweet 403 here) that “institutional risk control” failed because Steakhouse was Resolv’s risk manager. Hindenrank (https://hindenrank.com/blog/is-steakhouse-financial-safe), CLAIM that advisory oversight cannot replace issuer key hygiene, and that Steakhouse “flagged the attack vector 5 days prior” (Grok correctly downgrades: generic mint/exploit, not the SERVICE_ROLE key). Four Pillars / Goldberg, CLAIM that the “institutional rigor” report may have led other curators to enable Public Allocator into Resolv markets. DL News 24 Mar: Resolv hired Steakhouse; exploit hit a vulnerability class identified five days earlier. Credora: junk rating on USR beforehand; proximate cause = single privileged mint key, not Steakhouse ops.
lesson_applied_later: yes + CLAIM (Grok) High Yield deposit pause on KelpDAO day (2026-04-18), explicitly tied to Resolv. Mixed on-chain: USD-lending vaults were not in Morpho’s ~15 victims; they still stood up a USR/RLP Morpho vault the day they published the report. MetaOracle (Jun 2025) is the on-chain answer to hardcoded $1 oracles that hurt *other* curators.
funds_recovered: n/a
sources: primary, https://kitchen.steakhouse.financial/p/resolv-usr ; https://kitchen.steakhouse.financial/p/defi-markets-update ; https://app.morpho.org/ethereum/vault/0xbEEF8833f9Ff8e9D950Df3CEFb78DA88931C0450 ; https://www.linkedin.com/posts/steakhouse-financial_steakhouse-has-been-engaged-as-resolv-labs-activity-7439643885070381056-1rw9 ; primary (posts read; reply bodies were not readable), https://x.com/SteakhouseFi/status/2035559831810249105 ; https://x.com/SteakhouseFi/status/2036066224598114435 ; https://x.com/SteakhouseFi/status/2033876832895046044 ; CertiK, https://www.certik.com/blog/resolv-protocol-incident-analysis ; commentary, https://hindenrank.com/blog/is-steakhouse-financial-safe ; https://4pillars.io/en/issues/reflections-on-the-resolv-protocol-exploit ; https://www.dlnews.com/articles/defi/resolv-hack-highlights-defi-risk-management-struggle/ ; https://x.com/PaulFrambot/status/2035822674728083906 ; https://x.com/BTCLIN/status/2035586051562152184

---

EVENT
curator: Steakhouse Financial
date: 2026-03-30
title: DNS Hijack
incident_id: STEAKHOUSE-20260330-DNSHIJACK
type: ops
impact: N
fault: direct
class: non-materially-affected
severity: N
protocol_or_vault_url: https://app.steakhouse.financial/
usd_lost: unknown
pct_of_that_vault_tvl: 0
status: resolved
what_actually_happened: FACT: 30 Mar 2026 an attacker socially engineered OVHcloud support, removed hardware 2FA, and took DNS control of steakhouse.financial. A/NS records for the apex and app subdomain were pointed at a cloned site with a wallet drainer (Inferno/Angelferno family per Blockaid/The Defiant). Let’s Encrypt certs were issued for the fake host. The phishing site was reachable intermittently for about four hours. Attacker also tried a domain transfer with a 5-day lock. Secondary timelines (recaps of the postmortem): unauthorized email-change notice ~08:47 UTC, phishing live ~09:59 UTC, OVH account reclaimed ~12:56 UTC, DNS restored ~13:55 UTC. FACT: vault contracts on Morpho do not depend on that domain; team says no master/admin key can move depositor funds. Domains restored 31 Mar; team declared sites safe 1 Apr. The 1 April 2026 status URL is a tombstone. The live postmortem is the 10 April 2026 article (`2042649690420724030`). "No user signed any malicious transaction" and "all depositor funds were safe" are the curator's knowledge, plus a request that visitors self-report. Kitchen's long-form narrative is 6 April 2026. usd_lost stays unknown. Do not invent a phishing USD number. pct 0 = vault principal / contracts untouched.
response_summary: Same-day X alerts told users not to use the site or email and to use Morpho directly. DNS was blanked until the registrar account was locked. The 1 April 2026 status URL is a tombstone. The live postmortem is the 10 April 2026 article. "No user signed any malicious transaction" and "all depositor funds were safe" are the curator's knowledge, plus a request that visitors self-report. usd_lost stays unknown. Kitchen 6 Apr detailed the OVH support-desk path, TLS certs to revoke, and scope (OVH only; Google Workspace/GitHub/AWS/DO audited). CLAIM (Grok / later X): OpSec hardening and owner/curator multisig key rotation.
critics: none sourced beyond news restatements. No corroborated claim of drained vault deposits. The serious critique is structural: curator frontends remain a phishing surface even when vaults are noncustodial.
lesson_applied_later: yes + CLAIM (Grok) later public signer-key rotation after OpSec hardening (reported on @SteakhouseFi). FACT at Kitchen level: migrated off the affected domain-management provider; registrar migrate, credential rotation, DNS monitoring.
funds_recovered: n/a
sources: primary, https://kitchen.steakhouse.financial/p/defi-markets-update-2026-04-06 ; primary (posts read; reply bodies were not readable), https://x.com/SteakhouseFi/status/2038655268356051330 ; https://x.com/SteakhouseFi/status/2039370160549564763 ; https://x.com/SteakhouseFi/status/2042649690420724030 ; commentary, https://thedefiant.io/news/defi/steakhouse-financial-warns-users-of-phishing-attack ; https://phemex.com/news/article/steakhouse-financial-confirms-dns-hijacking-funds-secure-69465 ; https://protos.com/steakhouse-financial-front-end-breach-exposes-users-to-phishing-scam/

---


EVENT
curator: Steakhouse Financial
date: 2026-08-25
title: PT-reUSD
incident_id: STEAKHOUSE-20260825-PTREUSD
type: oracle
impact: Low
fault: direct
class: affected
severity: Low
protocol_or_vault_url: https://app.morpho.org/ethereum/market/0x1e9d614631a7df0ec07fb05b2c8cb2491575fd1a63a33bf187a6afb295a4fc64
usd_lost: 0
pct_of_that_vault_tvl: unknown
status: resolved
what_actually_happened: On 2026-08-25, around 04:30 UTC on Steakhouse's own account, Morpho Blue market `0x1e9d614631a7df0ec07fb05b2c8cb2491575fd1a63a33bf187a6afb295a4fc64` (PT-reUSD-10DEC2026 / USDC, 91.5% LLTV, oracle `0x217d6DdCDB95112C51657F6270e8C079CFDB51f0`) liquidated looped borrowers after PT-reUSD moved about 3%. NullTX: this lending market was deployed by Steakhouse on Morpho, and Steakhouse configured the oracle as the lower of a 15-minute PT average and a curve toward $1 at the 10 Dec 2026 maturity. CoinDesk puts borrower liquidations near $36.4 million; NullTX cites $36.1 million. That notional is not this curator's vault P&L. CoinDesk and NullTX both report Steakhouse said lenders in its vaults were unaffected, no bad debt was created, and reUSD itself was unaffected. Steakhouse pulled liquidity from the affected markets while it reviewed, then began putting it back. The RockawayX note matches that: Steakhouse deployed the market and briefly pulled then restored liquidity, with $0 realized bad debt. usd_lost 0 is that Steakhouse no-loss statement. pct unknown. Do not write the liquidation notional as loss.
response_summary: Precautionary withdraw from the affected markets, then liquidity restored. No sourced Steakhouse haircut. Pendle said the price feed was configured correctly and did what it was designed to do (CoinDesk).
critics: Andrew Hong / Herd called a 2.6% PT-reUSD oracle manipulation (CLAIM, summarized by NullTX). Pendle and Steakhouse said the oracle worked as designed and lenders were not left short. Criticism targeted the oracle and LLTV on the market Steakhouse deployed, not a named Steakhouse vault haircut.
lesson_applied_later: no. Example: they restored liquidity into the same markets after the review. No sourced LLTV or oracle change on this market in this pass.
funds_recovered: n/a
sources: primary (Steakhouse via CoinDesk) - https://www.coindesk.com/tech/2026/08/25/a-3-token-move-just-triggered-usd36-million-in-ethereum-defi-liquidations ; primary - https://app.morpho.org/ethereum/market/0x1e9d614631a7df0ec07fb05b2c8cb2491575fd1a63a33bf187a6afb295a4fc64 ; commentary - https://nulltx.com/how-a-normal-oracle-move-wiped-out-36m-in-leveraged-positions ; commentary - https://thedefiant.io/news/defi/pendle-oracle-move-liquidates-usd36-million

---


## Not on Events tab
- `STEAKHOUSE-20260418-KELP`, Removed from the Events list because Steakhouse exposure to the rsETH bridge hack was dust below $0.01.
- `STEAKHOUSE-20250605-USDM`, Issuer deprecation / forced-rate wind-down; routine ops, not an incident.
- `STEAKHOUSE-20251029-USDL`, Same Paxos/issuer playbook as USDM; routine ops, not an incident.
- `STEAKHOUSE-20251104-STREAM`, Never listed xUSD; no realloc / cap / pause / offboard. Non-exposure is not an event.
- `STEAKHOUSE-20260205-LIQUIDATIONS`, BTC/ETH crash; $234M liquidations in their markets, zero bad debt; daily ops, system working.
- `STEAKHOUSE-20260708-EURCVYIELD`, APY-composition / donation-subsidy argument, not a hole.

## STANDING CHECKS (as of 2026-09-15)

**Events (H/M/L/N/D/I):** `0H 0M 1L 5N 3D 3I`

**Risk docs:** **active**, live GitBook at [steakhouse.financial/docs](https://www.steakhouse.financial/docs/) (risk framework AA–C, allocation process, vault setup/controls, alert system, MetaOracle, Supervisor v2, current Prime/HY/Turbo address tables, legacy V1 table). Grok’s “docs hub pages dated 2026-03-13, market ratings page updated 2026-09-14” was not re-stamped off GitBook this pass; the hub is live. Morpho forum [Key information on Steakhouse branded vaults](https://forum.morpho.org/t/key-information-on-steakhouse-branded-vaults/1343) (6 Jan 2025) is a useful but stale product map (still talks wUSDM, steakUSDM). Kitchen DeFi Markets Updates continue into Apr 2026. Docs still **rate** USR/wstUSR and rsETH Morpho V1 markets CC, rating ≠ current allocation. Credora historically A+’d guardian design (Steakhouse’s own docs); that rating is marketing, not a 2026 refresh.

**Active since:** **2024-01**, steakUSDC live early January 2024 (Kitchen guardian report 22 Jan 2024; Morpho forum drill 20 Jan 2024). Announcement 9 Nov 2023. Morpho category “About SteakHouse Financial” 7 Apr 2024. **Grok was wrong** to write “Active since: 2025-01 documented on Morpho forum” (that is the 6 Jan 2025 product-map post, not launch).

**PoC handle if public:** **X: @SteakhouseFi**. Email **info@steakhouse.financial**. Forum identity “Steakhouse.” Co-founder Sébastien Derivaux **X: @SebVentures** posted during Stream ($2.5M seed) and DNS. User-support path used in 2025: Morpho Discord (albist). No verified official Telegram for incident PoC (Grok: only event booking via TG @x0Miracle). `@steakhousematic` is unrelated.

**Any new incident since Grok (cutoff 2026-07-08):** `STEAKHOUSE-20260825-PTREUSD` (2026-08-25). Zama confidential vault expansion 2026-09-15 is a product launch, not an incident (agree with Grok). EURCV Donations stays off the Events tab (not a hole).

**Whether a past lesson showed up again:**
- **Oracle decimals (Oct 2024, missed by Grok)** did not recur as a Steakhouse market-creation fail. They added reviewers/scripts and later MetaOracleDeviationTimelock (29 Jun 2025). **Hardcoded $1 / NAV oracles** still blew up *other* Morpho curators (Stream Nov 2025, Resolv Mar 2026). Steakhouse avoided the USD-vault drain both times; they still launched a tiny USR/RLP vault the day of their Resolv “institutional rigor” report.
- **PT-reUSD (2026-08-25):** they deployed the market and configured the lower-of-TWAP-or-curve oracle. Borrowers were liquidated. Steakhouse said its lenders were unaffected and no bad debt was created, pulled liquidity, then restored it. Not a repeat of the 2024 decimal bug.
- **Two Kelps:** 2025 infinite mint (pull 18.4 ETH Smokehouse) and 2026 bridge (dust <$0.01 + CLAIM HY deposit pause). Same “war room then pull thin LRT” muscle; Grok only had 2026.
- **Collateral screening:** skip xUSD (Stream, omitted by Grok as “not an incident”) vs listing USR/RLP five days before Resolv’s key-compromise. HY illiquidity warned at Smokehouse launch (Dec 2024) showed up in Stream week.
- **Issuer wind-down playbook** (USDM Jun 2025 → USDL Oct 2025) repeated; both missed by Grok.
- **DNS OpSec (Grok):** migrate off OVH domain-management; CLAIM later multisig key rotation. Frontend phishing was a *new* 2026 lesson, not a repeat of Oct 2024’s on-chain oracle bug.
- **EURCV disclosure (Grok):** lesson lives at Morpho UI (capped APY this pass; “Includes donations” tag UNVERIFIED), not clearly as a Steakhouse-owned APY breakdown.
- **Paid risk-manager vs vault curator conflict** (Resolv) has no later repeat found; flattening this into “Steakhouse lost $23M” is **WRONG**. Grok correctly kept $23.6m out of `usd_lost`.

**No material depositor-loss incidents found as of 2026-09-15** (agree with Grok on that sentence; PT-reUSD does not change it). Count **`0H 0M 0L 6N 3D 3I`**: wM oracle, DNS phishing, and PT-reUSD are N + Direct; Bybit/Ethena, Resolv, and the 2025 Kelp mint row are N + Indirect. Off the Events tab: USDM/USDL wind-downs, Stream skip (no action), Feb 2026 liquidations (zero bad debt), EURCV donations. Explicitly **not** Steakhouse vault losses: Webacy $20M, LeadBlock PAXG ~$230k, Morpho App 10 Apr 2025 $2.6M, Stream/MEV haircuts, Euler 2023, and the ~$36 million PT-reUSD borrower liquidation notional.

**Out of scope left on the cutting-room floor:** Grove Sky SubDAO credit; Kamino/Solana OnRe allocation; mF-ONE private-credit onboarding (risk, not an Events-tab row unless a later loss appears); Morpho Labs Bundler3; guardian drill Jan 2024 (test, not an Events-tab row).
