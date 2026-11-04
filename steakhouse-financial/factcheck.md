---
cursor:
  subagentId: "bc-1e0393f1-a4bc-50b0-93c1-29d46f5e9625"
---

# Steakhouse Financial — Grok vs reality

**As of:** 2026-09-15  
**Grok paste:** present in `twitter-grok.md` — four `INCIDENT` blocks (`STEAKHOUSE-20260322-RESOLV`, `STEAKHOUSE-20260330-DNSHIJACK`, `STEAKHOUSE-20260418-KELP`, `STEAKHOUSE-20260708-EURCVYIELD`) plus standing checks. This file scores that paste against Kitchen, Morpho forum/app, Morpho GraphQL, docs, explorers, and reputable recaps.

**X in this environment:** Grok-cited `x.com/SteakhouseFi/status/…`, `@sealaunch_`, `@BTCLIN`, `@PaulFrambot` URLs returned **403**. Tweet-only numbers and timestamps are **CLAIM** until those posts are opened in a logged-in X session. Kitchen long-form is the primary that actually fetched.

**Scope:** Morpho / Euler-style vault curation. Morpho Labs frontend, LeadBlock PAXG, Euler v1 2023, Grove, Kamino are out unless they touch Steakhouse vaults or Steakhouse’s public curator response.

**Merge status:** Grok paste ingested. Four Grok IDs kept in `merged.md`; 2024–early-2026 research blocks added. Status is not “Grok missing.”

---

## 1) Grok incidents — scorecard

### STEAKHOUSE-20260322-RESOLV (title: Resolv Exit; type: collateral; Med)

| Grok claim | Label | Reality |
|---|---|---|
| Date 2026-03-22; Steakhouse was Resolv risk manager; Kitchen diagnostic 2026-03-17 | **FACT** | [Kitchen Resolv report](https://kitchen.steakhouse.financial/p/resolv-usr); LinkedIn 17 Mar engagement post |
| Compromised privileged signer; ~$80m unbacked USR; ~$23.6m extracted | **FACT** as protocol P&L (Steakhouse recap) | Kitchen 26 Mar: “~$23.6m in losses,” ~$200k in / ~$80m minted. CertiK ~$26.8m / ~80m USR. Do **not** put $23.6m in `usd_lost` |
| `usd_lost: 0` for Steakhouse vaults | **CLAIM** (curator); not contradicted | Kitchen + @SteakhouseFi (quoted in Kitchen): zero losses / none of Morpho’s ~15 vaults with >$10k Resolv exposure were theirs. Independent bad-debt reconstruction was not run |
| Peak allocation **$235,589** across USR/wstUSR; vault unpublished | **CLAIM** | Number is not in Kitchen. Only source Grok gives is X (403 here). Morpho [Steakhouse Resolv USR](https://app.morpho.org/ethereum/vault/0xbEEF8833f9Ff8e9D950Df3CEFb78DA88931C0450) shows a **2026-03-17** deploy and 22 Mar reallocs of **~287.65 USR** then **~1,300.26 USR** off “USR backed by RLP 86%,” plus a user withdraw of **1,587.27 USR** on 31 Mar. That is not $235k unless another vault/market is meant. Leave amount **unknown** |
| Flag 1.61% USR at **02:21 UTC**; unwind done by **03:02 UTC** | **CLAIM** (curator timestamps) | Kitchen 26 Mar states both. Morpho UI first USR-vault realloc is **03:05:23**; second **11:14:23**. “Fully exited by 03:02” is **not** fully true for the USR/RLP sleeve |
| First public vault note **03:30 UTC** | **UNVERIFIED** | Tweet `2035559831810249105` 403. Kitchen does not give 03:30 |
| Never listed **RLP** as collateral | **CLAIM** / overstated | Kitchen says this. **FACT:** same USR vault allocated to **USR backed by RLP 86% LLTV** and pulled it on exploit day. At most true for USD-lending vaults |
| HY USDC TVL $61m → $37m then recovered | **FACT** (Steakhouse) | Kitchen 26 Mar |
| After Resolv they added HY **deposit-pause**, used 2026-04-18 | **CLAIM** | Pause itself is not in Kitchen 22 Apr (that post only says <$0.01 Kelp exposure exited “via our socials”). Grok’s causal link is tweet-only |
| Hindenrank: flagged the attack vector 5 days prior | **CLAIM** | [Hindenrank](https://hindenrank.com/blog/is-steakhouse-financial-safe) (updated 1 Aug 2026). Grok correctly downgrades this: 17 Mar report listed generic mint/exploit failure modes + pause mitigants; it did **not** name a compromised SERVICE_ROLE key. Closing line was “institutional rigor” |
| @BTCLIN critic (`2035586051562152184`) | **UNVERIFIED** (403) | Keep as CLAIM if the tweet exists when you open it. Grok’s paraphrase (“institutional risk control” failed because Steakhouse was Resolv’s risk manager) is plausible |
| type: collateral; severity Med; status resolved | keep | Morpho drain mechanism was **oracle** (hardcoded ~$1.13 wstUSR) + Public Allocator on *other* curators. Steakhouse story is listing/exit. `type: collateral` is acceptable; do not call it a Steakhouse oracle bug |
| protocol_or_vault_url = Morpho curator index | weak | Prefer the USR vault URL above **and** Kitchen |

**Change in merge:** `usd_lost` **0** with Kitchen’s no-Steakhouse-in-the-15-vaults statement (do not write 235589 or 23.6m as loss). `pct` **unknown**. Add the USR/RLP vault as FACT. Do not treat “institutional rigor” as a successful warning of the actual key-compromise.

---

### STEAKHOUSE-20260330-DNSHIJACK (title: DNS Hijack; type: ops; Med)

| Grok claim | Label | Reality |
|---|---|---|
| 30 Mar 2026 OVH social engineering, hardware 2FA removed, DNS to cloned site + Inferno/Angelferno drainer, ~4h, domain-transfer attempt, 5-day lock | **FACT** (team + recaps) | Kitchen [6 Apr 2026](https://kitchen.steakhouse.financial/p/defi-markets-update-2026-04-06); Protos / Blockaid; secondary timelines 08:47 email notice → ~09:59 phishing live → ~12:56 OVH reclaimed → ~13:55 DNS restored |
| Vaults/contracts independent of domain; no admin key to move deposits | **FACT** (curator) | Kitchen |
| `usd_lost: 0` because “no confirmed malicious user signatures” | **CLAIM** | Team/recaps say no recorded user-fund losses. Independent mempool/drainer-victim tally **not published**. Sheet: **unknown** (vault deposits) plus note “team says 0 signatures.” Do not invent a phishing USD |
| `pct_of_that_vault_tvl: 0` | OK if it means vault principal | Contracts untouched |
| type: ops | OK | `social` also fits (phishing). Keep ops as Grok |
| Post-mortem **10 Apr**; later signer-key rotation | **CLAIM** | Kitchen narrative is **6 Apr**. X IDs `2042649690420724030` (Grok: 10 Apr post-mortem) and later rotation are tweet-only here (403). Recaps say registrar migrate, credential rotation, DNS monitoring — **FACT** at that level |
| Grok X IDs `2038655268356051330`, `2039370160549564763`, `2042649690420724030` | **UNVERIFIED** here | Keep as sources; verify in X |
| The Defiant / Phemex recaps | **FACT** as secondary | Event happened; do not treat Phemex “funds secure” as an independent victim tally |

**Change in merge:** do not copy `usd_lost: 0` into the sheet without the “team / no independent tally” qualifier — use **unknown**. Prefer Kitchen 6 Apr as the long-form primary. Keep Grok’s `type: ops`.

---

### STEAKHOUSE-20260418-KELP (title: Kelp Pause; Grok type: ops; merged Type=`collateral`; Low)

| Grok claim | Label | Reality |
|---|---|---|
| 18 Apr 2026 KelpDAO rsETH **bridge** exploit ~116.5k rsETH / ~$292m | **FACT** | Kitchen 22 Apr; Defiprime / CryptoBriefing same figures. Attack ~17:35 UTC (Defiprime); Kelp pause ~46 min later |
| Steakhouse flagged ~18:40 UTC; dust off Smokehouse ETH by 18:52; markets gone 19:31; HY **new-deposit pause** all chains | **CLAIM** | Only in Grok’s X citations (`2045606725005283762`, `2045623546114719803` — 403). Kitchen 22 Apr: “less than **$0.01** of exposure … which we exited. We communicated all changes … via our socials.” Dust vs $0.01 match in spirit. **HY pause is not in Kitchen** |
| `usd_lost: 0`; residual dust <$0.01 | **FACT** as curator | Kitchen “zero non-dust bad debt since we started curation.” Independent Morpho rsETH market reconstruction: Kitchen says Morpho-wide only ~$1M ETH borrowed vs rsETH in two isolated markets, 2 of ~500 vaults — not a Steakhouse loss line |
| Pause playbook from Resolv | **CLAIM** | Tweet-only / Grok causal link |
| This is the **only** Kelp incident | **WRONG** if implied | **Missed:** 30 Apr **2025** rsETH infinite-mint glitch — forum [1727](https://forum.morpho.org/t/kelp-incident-response/1727), **18.4 ETH** Smokehouse pulled. Different event. Keep **two** Kelp IDs |

**Change in merge:** keep 2026-04-18 with Grok’s ID. Add 2025-04-30 as `STEAKHOUSE-20250430-KELPMINT`. HY pause: CLAIM until X is opened. `usd_lost` 0 OK with Kitchen. Type=`collateral` (rsETH listing), not Grok’s `ops`.

---

### STEAKHOUSE-20260708-EURCVYIELD (title: EURCV Donations; type: social; Low)

| Grok claim | Label | Reality |
|---|---|---|
| @sealaunch_ thread ~8 Jul 2026: ~4% APY UI vs ~78% idle, allocated sleeve ~1.3–1.4%, implied organic ~0.3%; ~546,100 EURCV in ~22 weekly transfers; donation subsidy | **CLAIM** | Tweets `2074817261978735044` / `2082174954460545471` 403. **FACT today (2026-09-15 Morpho UI):** Prime EURCV `0xbeef0C075Da5D01112AE5cF34d257074fB5DDB2f` is **78.93% idle** (96.95M of ~123M EURCV). APY **capped at 3.00%**. Steakhouse app still showed **3.51% 7d native** vs **0.35% instant** with ~$92M idle — that gap is consistent with non-borrow yield (donations/incentives), not independently traced as 546,100 EURCV |
| “Includes donations” tag by 28 Jul | **UNVERIFIED** | Not visible on the Morpho vault fetch this pass (capped APY is). Do not treat Morpho UI change as a Steakhouse admission |
| No Steakhouse incident post | **FACT** as of this search | Kitchen 21 Jul brags EURCV Prime +$20m deposits; no donation disclosure |
| Pablo Veyrat replied in-thread on native-yield/network-effects | **UNVERIFIED** (403) | Keep as CLAIM commentary, not a curator admission |
| `usd_lost: 0`; type social; severity Low | keep | Disclosure issue, not theft |
| Vault URL `/steakhouse-prime-instant` | OK | Live title is **Steakhouse Prime EURCV**; slug may differ |

**Change in merge:** keep the incident and Grok’s ID. Label donation math CLAIM. Do not invent USD “hidden yield.”

---

## 2) Grok standing checks — scorecard

| Grok | Label | Reality |
|---|---|---|
| Risk docs: active | **FACT** | [steakhouse.financial/docs](https://www.steakhouse.financial/docs/) live 2026 (ratings page, Prime/HY/Turbo tables) |
| Docs hub dated 2026-03-13; market ratings updated 2026-09-14 | **UNVERIFIED** as exact page dates | Hub is live; those two calendar stamps were not re-read off GitBook this pass |
| Active since **2025-01** (Morpho forum) | **WRONG** | steakUSDC live **early January 2024** ([Kitchen 22 Jan 2024](https://kitchen.steakhouse.financial/p/steakusdc-guardian-report); forum drill 20 Jan 2024). 6 Jan 2025 is a *product-map* post, not launch. Merge: **2024-01** |
| PoC X: @SteakhouseFi ; info@steakhouse.financial ; no official support TG; booking TG @x0Miracle | **FACT** | `@x0Miracle` is event booking, not incident PoC. `@steakhousematic` is unrelated |
| New incident since 2026-07-08: none through 2026-09-15; Zama 2026-09-15 is a product launch | **WRONG** on "none" | Zama is still a product launch, not an incident. **Add** `STEAKHOUSE-20260825-PTREUSD` (after this paste's cutoff): Steakhouse deployed the PT-reUSD/USDC market and configured the oracle. [CoinDesk](https://www.coindesk.com/tech/2026/08/25/a-3-token-move-just-triggered-usd36-million-in-ethereum-defi-liquidations) and [NullTX](https://nulltx.com/how-a-normal-oracle-move-wiped-out-36m-in-leveraged-positions) report Steakhouse said lenders in its vaults were unaffected and no bad debt was created, and that it pulled liquidity then restored it. |
| Stream/Elixir omitted because zero xUSD exposure | incomplete | $0 xUSD **FACT** (Protos, CBB, Wrapped 2025). **Missing:** HY **illiquidity** (Protos) and $2.5M HY Instant seed (@SebVentures 12 Nov 2025). Worth a Low block, not a loss line |
| Euler Earn: no Steakhouse vault incident | **FACT** | No Euler Earn vault found. Hindenrank “Morpho and Euler” is **CLAIM** |
| “No material depositor-loss incidents as of 2026-09-15” | **FACT** as sourced | Do not let that erase the 2024 wM **drain-potential** oracle bug |

---

## 3) Wrong things Grok did **not** say (do not add if a later Grok rewrite does)

| Item | Label |
|---|---|
| Webacy 6 Jun 2024 **$20M** Steakhouse USDC oracle drain (`0xbb5dd2cd…`) | **WRONG** / **RUMOR** — [Webacy](https://depeg-monitor.webacy.co/vault-events/morpho-steakhouse-incident-2024). steakUSDC is `0xBEEF0173…` |
| LeadBlock PAXG/USDC ~$230k as Steakhouse | **WRONG** — [forum 891](https://forum.morpho.org/t/retrospective-paxg-usdc-market-oracle-configuration/891) |
| Morpho App 10 Apr 2025 Bundler3 ~$2.6M as Steakhouse vault | **WRONG** — [Morpho blog](https://morpho.org/blog/morpho-app-incident-april-10-2025/) |
| Stream haircut on Smokehouse | **WRONG** as loss; **FACT** as HY illiquidity |
| Euler 2023 $197m | **WRONG** (protocol, not this curator) |
| Resolv $23.6m as Steakhouse `usd_lost` | **WRONG** — Grok correctly kept this out of `usd_lost` |

---

## 4) Missing from Grok (added in `merged.md`)

1. **2024-10-14 wM oracle decimals** — only sourced Steakhouse *market-creation* fail with drain potential. [Forum 878](https://forum.morpho.org/t/retrospective-wsteth-wm-wbtc-wm-market-oracle-configuration/878). Markets `0xdf99…c05a`, `0xcc6f…db6c`. steakM `0xbEEf0075…584F5c`. User withdrew **250,000 wM** 13 Oct (`0xdbdf…188d`). **No user funds compromised.** Morpho UI still shows insane oracle quotes.
2. **2025-02-21 Bybit** — bbqUSDC auto-cut Ethena-related collateral they had listed; Prime unexposed. [Forum 1544](https://forum.morpho.org/t/bybit-incident-response/1544). Recast 2026-09-16 (v3): Class=`non-materially-affected`, Type=`collateral`, Severity=`indirect-curator-fault` (Ethena/exchange-contagion stack choice; $0 insolvent debt — not ops).
3. **2025-04-30 Kelp infinite mint** — 18.4 ETH Smokehouse; not the 2026 bridge hack. [Forum 1727](https://forum.morpho.org/t/kelp-incident-response/1727). ID: `STEAKHOUSE-20250430-KELPMINT`.
4. **2025-06-05 USDM wind-down** + later Morpho-UI withdraw tickets. [1810](https://forum.morpho.org/t/deprecation-of-usdm-vaults/1810), [1859](https://forum.morpho.org/t/steakhouse-usdm-morpho-vault-no-withdrawal-allowed/1859).
5. **2025-10-29 USDL / csUSDL** Paxos sunset. [2062](https://forum.morpho.org/t/notice-of-usdl-winddown/2062).
6. **2025-11-04 Stream** — $0 xUSD **and** HY illiquidity; $2.5M skin-in-game seed.
7. **2026-02-05 liquidations** — $234M Steakhouse-market liqs, 0 bad debt. [Kitchen](https://kitchen.steakhouse.financial/p/238m-liquidations-of-onchain-lending).
8. **MetaOracleDeviationTimelock** (29 Jun 2025) as the later oracle lesson. [Forum 1850](https://forum.morpho.org/t/steakhouse-introducing-metaoracledeviationtimelock/1850).
9. Docs still **rate** USR/wstUSR and rsETH Morpho V1 markets CC ([markets table](https://www.steakhouse.financial/docs/markets/readme/morpho-v1)) — rating ≠ current allocation.
10. **2026-08-25 PT-reUSD.** After Grok's cutoff, so the paste does not have it. ID: `STEAKHOUSE-20260825-PTREUSD`. Market `0x1e9d614631a7df0ec07fb05b2c8cb2491575fd1a63a33bf187a6afb295a4fc64` (PT-reUSD-10DEC2026 / USDC, 91.5% LLTV, oracle `0x217d6DdCDB95112C51657F6270e8C079CFDB51f0`). NullTX: Steakhouse deployed the market and configured the lower-of-TWAP-or-curve oracle. CoinDesk and NullTX: Steakhouse said lenders in its vaults were unaffected and no bad debt was created; systems withdrew liquidity, then restored it. Same Type/Class/severity as the other $0 PT-reUSD rows: `oracle` / `non-materially-affected` / `direct-curator-fault` (they ran the market; not a collateral listing they exited). `usd_lost` **0** on that Steakhouse statement. Do not paste CoinDesk's about $36.4 million or NullTX's $36.1 million borrower liquidation notional into `usd_lost`. `pct` **unknown**.

---

## 5) Unverified (do not invent)

- Tweet-only: $235,589; 03:30 UTC Resolv note; Kelp 18:40/18:52/19:31; HY deposit pause; 10 Apr DNS X post-mortem; later owner/curator key rotation; 546,100 EURCV donations; Morpho “Includes donations” tag; Pablo Veyrat in-thread reply.
- USD lost by users who signed on the hijacked domain.
- Whether other curators listed USR *because of* the 17 Mar report (Four Pillars / Oak **CLAIM**).
- Euler Earn vaults (none found; not “proven never”).
- `% of vault TVL` on any event except DNS vault principal = 0.
- A Steakhouse vault haircut on PT-reUSD. Sourced statement is no bad debt and lenders unaffected. The ~$36 million figure is borrower liquidations, not vault P&L. `pct` stays **unknown**.

---

## 6) Merge applied

- Kept Grok’s four 2026 IDs. Inserted the 2024–early-2026 blocks Grok skipped. **Two Kelp dates** — did not merge 2025 mint and 2026 bridge.
- `usd_lost` / `pct`: **unknown** unless a primary states a number; **0** only for “no user funds / no bad debt” that is not contradicted on-chain (Resolv vaults, Kelp 2026 dust, wM retrospective, Stream xUSD, Feb 2026 liqs, PT-reUSD on Steakhouse's no-bad-debt statement). DNS phishing victims stay **unknown**. PT-reUSD `pct` stays **unknown**.
- FACT / CLAIM / RUMOR in prose. User-edit before any Google Sheet paste.

Grok was directionally right on 2026 (Resolv, DNS, Kelp-2026, EURCV) and **wrong on active-since**. It under-weighted 2024 oracle ops and 2025 forum war rooms. It over-precise on tweet numbers this pass could not open.

## Taxonomy applied 2026-09-16 (Class v3)

Sheet Class/severity (this curator’s impact; user overrides). v3: Prec was renamed Indirect. v4: that bucket is `indirect-curator-fault`. Grok-vs-reality notes above still describe Grok’s original High/Med/Low.

- **Keep as non-materially-affected direct-curator-fault (direct fault):** `STEAKHOUSE-20241014-WMORACLE` (broken oracle they created); `DNSHIJACK` recast from Med — vaults untouched, no recorded user-fund loss; D = their site.
- **Keep/recast as non-materially-affected indirect-curator-fault:** `BYBIT` Type=`collateral` (Ethena-touching sleeve they listed; $0 insolvent debt); `RESOLV` (USR/RLP stack choice, $0 vault loss); `KELPMINT` / `KELP` Type=`collateral` (rsETH listing; `KELP` was Grok ops — not process/website/DNS).
- **Add (2026-08-25):** `STEAKHOUSE-20260825-PTREUSD` non-materially-affected **direct-curator-fault**, Type=`oracle`. They deployed and configured the market, then pulled liquidity and restored it. `usd_lost` 0 on Steakhouse's statement (CoinDesk, NullTX).
- Count `0H 0M 0L 3D 4I 0A`.
- **Not on Events tab:** `USDM`, `USDL`, `STREAM` (never listed xUSD; no realloc/pause — non-exposure is not indirect-curator-fault), `LIQUIDATIONS`, `EURCVYIELD` (issuer wind-down / daily ops / not a hole). Do not paste those as event rows.
