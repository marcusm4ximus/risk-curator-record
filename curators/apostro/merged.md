---
cursor:
  subagentId: "bc-878ecf91-2bd1-546c-8e38-7b2577f4e1f6"
---

# Apostro - merged DD draft

**Draft date:** 2026-09-25
**Inputs:** Grok paste (two INCIDENT blocks) plus Apostro’s own posts, Chaos Labs, dTrinity, Silo, Morpho app, Trading Strategy. Edit before any sheet paste.
**Count:** `0H 2M 0L 0N 0D 2I`. Both rows are this curator’s depositors stuck in collateral they listed. Stream’s ~$93M and Resolv’s ~$23-25M extract are not Apostro P&L.

Apostro (`@apostroxyz`) curates money-market vaults on Morpho, Euler, and Silo. Site apostro.xyz. Support TG t.me/apostroxyz (X bio). X account created 2022-02-18. Ethereum Resolv USDC on Trading Strategy has history from 2025-01-09.

Live stress on the Resolv book (2026-09-25, not a new incident): Ethereum vault `0x214B47C50057eFaa7adc1B1C2608C3751Cd77D78` carries Morpho flags `bad_debt_realized` and `bad_debt_unrealized`, deposits capped, share price about 33.48 USDC. Base vault `0xcdDCDd18A16ED441F6CB10c3909e5e7ec2B9e8f3` is deprecated, deposits disabled, liquidity $0, with an oracle warning. Those screens are impairment signals. They are not a dollar loss.


---

EVENT
curator: Apostro
date: 2025-11-04
title: Sonic
incident_id: APOSTRO-20251104-SONICLOCK
type: collateral
impact: Med
fault: indirect
class: affected
severity: Med
protocol_or_vault_url: https://x.com/apostroxyz/status/1985831893506326801
usd_lost: unknown
pct_of_that_vault_tvl: unknown
status: unresolved
what_actually_happened: Stream Finance ran yield vaults and issued xUSD. On 4 Nov 2025 it disclosed an external-manager loss and xUSD withdrawals stopped. Apostro USDC on Silo Sonic held wstkscUSD, whose underlying scUSD had been allocated to Euler vaults that lent against Stream assets. Trevee paused wstkscUSD redemptions, the wrapper lost its peg, and borrowed liquidity became locked.
response_summary: Apostro had pulled the remaining unborrowed liquidity the day before Stream's announcement. On 4 Nov it said this was its only affected vault and that it was working with partners on recovery. Apostro said liquidity in these markets was reduced from $2M to $0.377M that is temporarily locked. It later clarified that this liquidity had been moved to other markets, not paid to lenders in the locked sleeve. No later post showed a full withdrawal or recovery.
critics: @halaprix questioned the liquidity-removal wording. Apostro answered that the phrase meant unborrowed funds they could still reallocate. Grok also attributes later “any update?” posts to @CarrotSticks18 and an August 2026 ask on the same thread. Silo’s transparency report criticizes the Stream redemption deadlock at protocol level and does not discuss Apostro’s vault.
lesson_applied_later: no + example: March 2026 they were still running Resolv/USR markets that then locked. Nested synthetic-dollar collateral was not retired after Sonic.
funds_recovered: none
sources: primary https://x.com/apostroxyz/status/1985831893506326801 ; primary https://x.com/apostroxyz/status/1986173759590449270 ; primary https://web.archive.org/web/20260310032801/https://www.dtrinity.org/post/sonic-incident-post-mortem-next-steps ; commentary https://silofinance.medium.com/stream-finance-incident-transparency-report-cc21fb76f0b5 ; commentary https://decrypt.co/347285/stream-finance-stablecoin-plunges-77-protocol-fund-manager-loses-93-million

---

EVENT
curator: Apostro
date: 2026-03-22
title: Resolv
incident_id: APOSTRO-20260322-RESOLVLOCK
type: collateral
impact: Med
fault: indirect
class: affected
severity: Med
protocol_or_vault_url: https://app.morpho.org/ethereum/vault/0x214B47C50057eFaa7adc1B1C2608C3751Cd77D78/apostro-resolv-usdc
usd_lost: unknown
pct_of_that_vault_tvl: unknown
status: unresolved
what_actually_happened: Resolv was a delta-neutral stablecoin protocol. USR was its dollar token, while RLP was meant to absorb losses first. On 22 Mar 2026 a compromised key was used to mint about 80 million unbacked USR. Apostro's Morpho, Euler, and Silo vaults had lent stablecoins into Resolv-linked markets.
response_summary: On 23 Mar Apostro said it had secured the remaining liquidity, blocked new deposits, and closed donation paths. It reported $135,800 still locked across nine vaults and directed users to Resolv. No later post showed that the locked funds were paid.
critics: Chaos Labs put Apostro on the curator-contagion tally and argued allocators kept supplying failed USR markets. Credora wrote that rated Morpho vaults had no USR and that affected vaults were unrated, which is a class comment, not an Apostro audit. Unified Labs described hardcoded 1:1 USR oracles and Morpho NAV games without naming Apostro.
lesson_applied_later: unclear + example: deposits are disabled and the Base vault is deprecated, but no written collateral-policy change was found. The Sonic lesson (nested yield-bearing stables) did not stop the Resolv listing.
funds_recovered: none
sources: primary https://x.com/apostroxyz/status/2036168120499577009 ; primary https://app.morpho.org/ethereum/vault/0x214B47C50057eFaa7adc1B1C2608C3751Cd77D78/apostro-resolv-usdc ; primary https://app.morpho.org/base/vault/0xcdDCDd18A16ED441F6CB10c3909e5e7ec2B9e8f3/apostro-resolv-usdc ; primary https://resolv.xyz/blog/resolv-postmortem-march-22-2026-incident ; commentary https://chaoslabs.xyz/posts/defi-s-contagion-loop-when-risk-curators-become-the-risk ; commentary https://tradingstrategy.ai/trading-view/vaults/apostro-resolv-usdc ; commentary https://blog.credora.network/2026/04/03/morpho-vault-risk-rated-vs-unrated-vaults-during-the-resolv-exploit/ ; commentary https://www.chainalysis.com/blog/lessons-from-the-resolv-hack/

---

## Not on Events tab

None. The “other vaults 100% unaffected” line is Apostro’s claim inside the Sonic row, not a second event.

## STANDING CHECKS (2026-09-25)

**Events (H/M/L/N/D/I):** `0H 2M 0L 0N 0D 2I`

Risk docs: stale
- `docs.apostro.xyz` as fetched is a metric glossary (TVL, utilization, a generic bad-debt definition). No per-vault memo and no post-Resolv policy page. Grok’s “last updated 3 years ago” date was not on that page. Legal pack Grok cites: https://legal.apostro.xyz/vaults.pdf (not re-fetched).

Active since: 2022-02 as an X account; Morpho Resolv USDC series from 2025-01-09 (Trading Strategy). Curator role on Silo/Euler is older than that vault but not separately dated here.

PoC: X: @apostroxyz ; TG: @apostroxyz (t.me/apostroxyz). Email hello@apostro.xyz is Grok-cited only.

Any new incident since Grok (Grok’s last row 2026-03-22): none found through 2026-09-25. The September bad-debt flags are the same Resolv vault, still unresolved.

Whether a past lesson showed up again: yes. Sonic was indirect exposure to a Stream-linked wrapped stable. Resolv was another curator-chosen synthetic dollar. Same failure class: collateral and issuer risk, not an Apostro-authored oracle contract.

Searched: Apostro X posts above (fxtwitter), docs.apostro.xyz, Morpho app Ethereum and Base Resolv vaults, Trading Strategy Apostro Resolv USDC, Chaos Labs 23 Mar 2026, dTrinity Sonic post-mortem, Silo Stream note, Resolv post-mortem, vaults.fyi 23 Mar snapshot. No dedicated Morpho/Euler MCP.
