# K3 Capital, merged DD draft

**Draft date:** 2026-09-15  
**Grok paste:** ingested (`twitter-grok.md`, two INCIDENT blocks + standing checks). Combined with independent Euler labels/metadata, Snowscan, Morpho GraphQL/forum, K3 X, Goldberg thread, Elixir/Euler posts, Bankless, The Block. User-edit before any Google Sheet paste.  
**Labels in prose:** FACT / CLAIM / RUMOR. `usd_lost` and `pct_of_that_vault_tvl` stay **unknown**. Do not put Goldberg ~$532k or press ~$2m in those fields.

**Curator:** K3 Capital (aliases: K3, `k3-capital`; not UK AIM K3 Capital Group). Euler/Morpho risk curator. Official X [@k3_capital](https://x.com/k3_capital); labels URL [k3.capital](https://k3.capital/) (US Coming Soon as of this date). Historical marketing [k3c.webflow.io](https://k3c.webflow.io/). Euler governor/Safe (labels): `0xdD84A24eeddE63F10Ec3e928f1c8302A47538b6B`. Treat [k3-capital.net](https://k3-capital.net/) as **unverified / impersonation risk**, not official marketing (Grok called it secondary; that is too generous).

**Scope:** curator-scoped (K3 vaults, oracles, collateral, ops, public response). Out: Euler v1 2023; Resolv 2026-03-22 as a *K3 loss* (listed on BNB, no K3 notice or sourced bad debt); April 2026 Euler DAO handover *to* K3; Morpho Unichain as a loss event.

---


EVENT
curator: K3 Capital
date: 2025-11-04
title: deUSD unwind
incident_id: K3-20251104-DEUSDUNWIND
type: collateral
impact: High
fault: indirect
class: affected
severity: High
protocol_or_vault_url: https://app.euler.finance/vault/0xe1E549C965A4A0514D9bf80161D32924b8694822?network=avalanche
usd_lost: unknown
pct_of_that_vault_tvl: unknown
status: unresolved
what_actually_happened: Stream Finance issued xUSD as a yield-bearing dollar token. Elixir issued deUSD as a synthetic dollar, with sdeUSD as its staked version. FACT: Stream Finance disclosed an external-manager loss of about $93m around 2025-11-03/04 and halted withdrawals; Elixir had lent about $68m toward Stream and then froze/sunset deUSD after a depeg (The Block 2025-11-06). FACT: K3 had onboarded deUSD/sdeUSD as Avalanche Euler cluster assets in May 2025 and still ran a deUSD-denominated “K3 Capital Cluster” vault `0xe1E549C965A4A0514D9bf80161D32924b8694822`, which later showed ~$40k TVL versus a ~9.55m deUSD peak (Trading Strategy; peak ≠ loss). CLAIM (Bankless, citing Euler Discord / YAM screenshot, 2025-11-07): K3 alleged a “coordinated fraudulent scheme,” said Elixir shifted from basis trading into a Stream fund-of-funds without lender consent, served Philip Forte a cease-and-desist, and prepared a civil complaint. CLAIM (PANews / Odaily / Gate, citing the same Discord and a person named Simeon): K3 asked for 1:1 redemption on 2025-11-03, got no reply, force-sold on 2025-11-04, and was left with about $2m unredeemable deUSD; Elixir then said retail/LP holders could claim 1:1 USDC but curator-vault balances would not. RUMOR / unverified: the $2m figure is not in a retrieved K3 X post, tx write-up, or official incident note. FACT (Protos / CBB): K3 was grouped with curators that did **not** take Stream xUSD; deUSD is a separate listing. FACT: Euler later stated Stream/Elixir/Stables Labs losses were isolated to curator vaults that accepted those assets, and that curators, not Euler, chose oracles and collateral. Elixir opened a lender claim page on 17 March 2026 and said claims would be available only for a limited time. Bankless the same day described an about-80% offer for eligible Euler and Morpho lenders, and said K3 had not said yes or no. K3 still has no public post that its depositors were paid. The Euler label that the claim period expired is not a fill report. Treat recovery as not shown as paid. Do not paste the claim of about $2M unredeemable deUSD into `usd_lost`. usd_lost stays unknown.
response_summary: Elixir opened a lender claim page on 17 March 2026 and said claims would be available only for a limited time. Bankless the same day described an about-80% offer for eligible Euler and Morpho lenders, and said K3 had not said yes or no. K3 still has no public post that its depositors were paid. The Euler label that the claim period expired is not a fill report. Treat recovery as not shown as paid. Offer date 17 March 2026. Not shown as paid by K3. 6 months and 9 days as of 26 September 2026.
critics: YAM / @yieldsandmore (screenshot amplified in Bankless) - https://www.bankless.com/read/news/k3-capital-threatens-legal-action-against-elixir-over-deusd-depeg . Euler depositors on the compensation thread naming the K3 USDT vault (rzo, 2025-11-13) - https://forum.euler.finance/t/request-for-a-formal-governance-proposal-regarding-compensation-for-users-affected-by-the-elixir-and-steam-labs-collapse/1708?page=2 . A 1 March 2026 user reply that K3 had already returned 80% is before the portal and is a claim, not a receipt.
lesson_applied_later: no + example: after May they reportedly hardcoded deUSD = $1 (CLAIM, Goldberg), which does not protect lenders in a down-and-insolvent depeg; the same listing stayed live until November. After the fact, Euler deprecated those vaults and posted the Elixir notice. They still list Resolv USR on the BNB stablecoin cluster (`0x88A81184243c561026973d25384651E6cc0796A4`, `deprecated: false`, `portfolioNotice: null` as of 2026-09-15) after Resolv’s 2026-03-22 unauthorized mint, listing, not a sourced K3 loss, but the synthetic-issuer lesson did not become a public ban.
funds_recovered: none
sources: primary, https://x.com/k3_capital/status/1925971437031965017 ; https://github.com/euler-xyz/euler-labels/blob/master/43114/products.json ; https://app.euler.finance/api/public/metadata?chainId=43114&addresses=0xe1E549C965A4A0514D9bf80161D32924b8694822 ; https://x.com/elixir/status/2033922212986597612 ; https://x.com/eulerfinance/status/1989388982783025238 ; https://forum.euler.finance/t/request-for-a-formal-governance-proposal-regarding-compensation-for-users-affected-by-the-elixir-and-steam-labs-collapse/1708?page=2 . commentary, https://www.theblock.co/news/markets/2025-11-06-elixir-sunsets-deusd-synthetic-stablecoin-following-stream-finance-unwinding-aims-full-redemptions-377961 ; https://www.bankless.com/read/news/k3-capital-threatens-legal-action-against-elixir-over-deusd-depeg ; https://www.bankless.com/read/news/elixir-launches-usdc-recovery-portal-for-lenders-impacted-by-stream-insolvency ; https://www.panewslab.com/en/articles/70acea07-20ed-4248-a02e-60542dd1fdf5 ($2m leftover CLAIM); https://protos.com/stream-finance-meltdown-winners-and-losers-in-defi-risk-curator-reckoning/ ; https://tradingstrategy.ai/vaults/k3-capital-cluster-9 (peak TVL ≠ loss).

---

No further dated curator-scoped loss rows as of 2026-09-15. Searched and **not** turned into Events-tab rows: Resolv USR mint (**2026-03-22**, not Grok’s “May 2026”), K3 BNB USR vault still listed, no K3 notice or sourced bad debt; Morpho Unichain ETH Maxi / Core / Ethereum Pendlend USDT, no exploit or pause attributed to K3; Stream xUSD, K3 did not list it; April 2026 Euler DAO market handover *to* K3 ([forum 1828](https://forum.euler.finance/t/sunsetting-of-dao-managed-market-and-vaults/1828)), ops transfer (Prime, Yield, Monad isolated, Arbitrum Theo, Euler Arbitrum, several Earn vaults), not a loss; Sentora RLUSD/PYUSD products later labeled K3 on Ethereum, rebrand, not a loss.

---

## Vaults this curator still/does run (snapshot, not Events-tab rows)

Euler (labels + metadata, not a TVL crawl): `k3-avalanche` (Elixir `portfolioNotice` + several deprecated Elixir-era vaults, some live LST/AVAX names); `k3-bsc-stable` (USDT `0xca522ECab584b5430ADb946edEE4224A63628362`, USDC, sUSDe, USDe, **USR** `0x88A81184243c561026973d25384651E6cc0796A4`, YUSD, PT-sUSDE, USD1); `k3-bsc-yield`; isolated BNB tokenized-equity pairs (geo `block` CA/US); Ethereum `k3-prime`, `k3-yield`, `k3-liquity-hub`, `sentora-rlusd` / `sentora-pyusd` now labeled K3; Arbitrum `k3-arbitrum-market`, `k3-capital-usdai`, `k3-theo`; Plasma `k3-capital-usdai`, `k3-yuzu`, deprecated `k3-capital-pendlend`; Monad isolated BTC/wstETH/AUSD/PT markets (several via the 2026-04 DAO handover).

Morpho GraphQL (2026-09-15): K3 Capital ETH Maxi Unichain `0xfA355999c12C63c465c591daf9C462e14ACf470b` (~$21.7k, listed false); K3 Capital Core Market Unichain `0xCfecBf93dEc86316F106712767828ACB5065C441` (dust); Pendlend USDT Ethereum `0x9646eBD6346C8C3a9f3d408f71C312eB0CbE8507` (~$1.2k). All three: Morpho UI **“Curator has not submitted a Disclosure,”** MetaMorpho v1.1, 3-day timelock, 10% fee. Forum: [ETH Maxi](https://forum.morpho.org/t/k3-capital-eth-maxi-on-unichain/1803), [Core Market](https://forum.morpho.org/t/k3-capital-core-market-on-unichain/1804).

---



## STANDING CHECKS (2026-09-15)

**Events (H/M/L/N/D/I):** `1H 0M 0L 0N 0D 1I`

Risk docs: stale
- Agree with Grok. Morpho forum listing posts exist (ETH Maxi risk line on Lido/EtherFi slashing; Core Market params) from May 2025. Morpho **app** on all three K3 vaults: curator has **not** submitted a Disclosure. No Gauntlet-style living risk framework. `https://k3.capital/` / `https://www.k3.capital/us` is Coming Soon. H1 2025 recap exists on Substack this pass; it is a marketing recap, not a living policy. Label **stale**, not `none` and not `active`.

Active since: 2025-04 (as Euler curator, sourced); firm claims 2021
- FACT: [K3 2025-04-10](https://x.com/k3_capital/status/1910310544654876981) Avalanche cluster live. Trading Strategy savUSD cluster data from ~2025-04-09. Morpho Unichain vaults deployed 2025-05-28; Morpho about/category 2025-05-29. Firm “on-chain since 2021” / AUM figures in the Morpho about post and H1 recap are CLAIM, not the curator start month.

PoC handle if public: X: @k3_capital ; TG: @k3alpha
- FACT: X is the verified public channel. FACT: [t.me/k3alpha](https://t.me/k3alpha) is titled “K3 Capital Alpha.” Euler Discord used under stress (November). CIO named in press: Simeon Rusanov. Contact `@K3Capital` appears on Substack.

Any new incident since 2026-09-15: none found in this pass (query date = report date)
- Independently, after November 2025 the dated Elixir follow-up is the 2026-03-17 claims tweet (recovery, not a new loss). No K3-attributed Resolv loss found through 2026-09-15. April 2026 DAO handover is ops, not an incident.

Whether a past lesson showed up again: yes
- May 2025: illiquid-stable VWAP liquidated leveraged deUSD *debt* on Euler Avalanche markets K3 co-curated; reported response was a $1 hardcode (CLAIM, Goldberg).
- November 2025: same issuer’s deUSD, now a down-and-insolvent *collateral*, hit the same K3 cluster; leftover deUSD (CLAIM $2m) and a legal fight. A $1 hardcode does not protect lenders in a down depeg.
- 2026: K3 BNB cluster still lists Resolv USR with no Euler notice after Resolv’s unauthorized mint. Synthetic-stable listing discipline did not clearly stick.

CLEAN IF EMPTY does not apply. One sourced Events-tab row: deUSD unwind (High + Indirect). Count `1H 0M 0L 0N 0D 1I`. Write date: 2026-09-15.
