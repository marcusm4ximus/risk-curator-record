---
cursor:
  subagentId: "bc-b07e5869-4b5e-5088-8b71-d538d374ee87"
---

# UltraYield - Grok vs reality

**As of:** 2026-09-26
**Grok paste:** Desktop `ultrayield/twitter-grok.md`. Four INCIDENT blocks. Remap severity. Do not invent USD or %.

## Verdict

One affected row, one direct row, three indirect rows. Grok's Med/Low labels assumed impact ranks without a vault P&L. Only the January 2025 share-price adjustment is a stated depositor mark, and it has no size, so it is Low, not Med. The Balancer exit, the Resolv/Fluid close, and the hgETH note are listed collateral with a documented response and no sourced haircut. The ChainSecurity free-mint finding is their own UltraVault bug, corrected in review, with no depositor loss figure, so it is direct-curator-fault. Events: `0H 0M 1L 1D 3I 0A`.

**Alias.** UltraYield is Edge Capital's onchain curator team. DefiLlama says Edge Capital created UltraYield. DappRadar calls UltraYield the DeFi arm of Edge Capital. Vadim Khramov (Edge Capital) said the smart-contract team is UltraYield. The Morpho vault symbol is edgeUSDC. Slug stays `ultrayield`.

## 1) Tweet text that stands

| Grok | Verdict |
|---|---|
| 12 Jan 2025: USD0++ was in curated vaults. Hashnote T-bill principal "remains safe" after a check with Hashnote. Next post: they have to adjust share price. The change could be reverted if USD0++ recovers. No address, no NAV delta | **FACT** as https://x.com/ultrayieldapp/status/1878370724529725485 and https://x.com/ultrayieldapp/status/1878370726949830764 |
| 3 Nov 2025: minor Balancer exposure on other chains, exited all positions "without any losses" | **FACT** as https://x.com/ultrayieldapp/status/1985289871993311603. They cite CoinDesk for the exploit headline. That headline is not their P&L |
| Same day: Midas mSYRUPUSDp, mEDGE, mBASIS "curated by Edge Capital" unaffected | **FACT** as https://x.com/ultrayieldapp/status/1985314152366342633. The curator named in that sentence is Edge Capital, not a second UltraYield loss |
| 22 Mar 2026: no direct Resolv exposure. Indirect exposure is Fluid USDT0 on Plasma only, no looping. They do not expect bad debt because malicious USR was not bridged to Plasma | **FACT** as https://x.com/ultrayieldapp/status/2035808972314116335 |
| Reply to @wumpycrypto: mEDGE has no exposure. mBASIS / msyrupUSDp have indirect Fluid exposure on Plasma only | **FACT** as https://x.com/ultrayieldapp/status/2035809700944425072 |
| 24 Mar 2026: Fluid positions closed. "no negative effect on our depositors" | **FACT** as https://x.com/ultrayieldapp/status/2036396752496898302. The zero is their sentence. `usd_lost` stays unknown |
| 19 Apr 2026: all vaults except hgETH should be unaffected. Lending markets they curate have no rsETH exposure. For hgETH they are waiting on Kelp and Aave | **FACT** as https://x.com/ultrayieldapp/status/2045802874303619202 and https://x.com/ultrayieldapp/status/2045802876887261598 |
| Gitbook lists Kelp High Growth ETH (hgETH) as a curated vault, infrastructure Upshift | **FACT** as https://ultrayield.gitbook.io/ultrayield/basics/currently-curated-vaults |

## 2) Wrong or remapped

| Grok | Verdict |
|---|---|
| USD0++ severity Med | **Remap to Low.** They said a share-price adjustment was required. No NAV delta was published, so Med is not sourced. The later Morpho USDC vault did not exist yet (created 2025-04-16) and its weekly share price only rises from 1. Do not attach this markdown to `0x0562AE950276B24F3eAE0d0a518dADB7Ad2F8D66` |
| Balancer type ops, severity Low | **Remap.** They held exposure and exited it. Type `collateral`. Class `non-materially-affected`. Severity `indirect-curator-fault`. Low would mean depositors lost money |
| Resolv severity Low | **Remap to indirect-curator-fault.** They had a Fluid sleeve and closed it. No USD for that sleeve was published |
| rsETH severity Med, status unresolved | **Severity remap.** No UltraYield NAV, haircut, or all-clear figure was found. Med needs a sourced depositor loss. Class stays off H/M/L. Status stays `unresolved` because they said they were still waiting on an estimate and no later settlement post was found. A Yearn note that hgETH's rsETH share value fell by about 4.1% was not re-called on-chain here, so that percent is not booked |
| `usd_lost: unknown` on all four | **Keep.** Do not write 0 from the "without any losses" or "no negative effect" sentences |

## 3) Vault facts Grok's "no Morpho loss" line matches

Morpho curator id `ultrayield`, AUM about $636k on this pass (deposits, not a loss).

| Vault | Address | Note |
|---|---|---|
| UltraYield USDC V1 `edgeUSDC` | `0x0562AE950276B24F3eAE0d0a518dADB7Ad2F8D66` | Created 2025-04-16. Unlisted. Share about 1.073. Weekly points from 2025-04-17 do not fall. Deposits about $1.4k |
| UltraYield USDC Core V2 | `0x244f46262D9aD408B746E74aBdD010E9002fb7eE` | Created 2026-04-21. Listed. Deposits about $130k. Share field about 1.018 |
| UltraYield USDT Core V2 | `0x85F3d81a39dF458E45d5EA20f9EB937fAafd282f` | Created 2026-04-27. Listed. Deposits about $101k. API share field printed about 2.02. That print is not used as P&L |
| Forum USDC intro | https://forum.morpho.org/t/ultrayield-usdc-vault-updates/1827 | 13 Jun 2025. Lists mEDGE, csUSDL, syrupUSDC, and other markets. Performance fee 10% in that post |

TVL decline on older listings is not a haircut. The V1 USDC weekly share series does not fall.

## 4) Missing or left off the tab

- xUSD/Stream, Drift, and Neutrl "no exposure" posts in the paste. Not re-fetched. Non-exposure is not a row.
- ChainSecurity free-mint finding is now `ULTRAYIELD-20250508-FREEMINT`. Critical in the 8 May 2025 report, code corrected by removing deposit limits, no live drain and no depositor dollar. Class `non-materially-affected`, severity `direct-curator-fault`, type `ops`, `usd_lost` unknown.
- Grok's longer Resolv vault list (Kelp High/Stable Gain, Ultra BTC, Ultra ETH, Ultra USD) is wider than the reply fetched here. The fetched reply names mEDGE, mBASIS, and msyrupUSDp. Do not treat the longer list as re-verified.
- `lesson_applied_later` example that the next-day xUSD post showed they refused self-leverage. That tweet was not opened this pass, so the lesson is `unclear` rather than yes.

## 5) What to add or change

- `ULTRAYIELD-20250112-USD0PP`: affected, Low, disputed, `usd_lost` unknown.
- `ULTRAYIELD-20250508-FREEMINT`: non-materially-affected, direct-curator-fault, ops, resolved, `usd_lost` unknown.
- Curators alias: Edge Capital. Standing note in the snapshot. No second folder.
- `ULTRAYIELD-20251103-BALANCER`: non-materially-affected, indirect-curator-fault, collateral, resolved.
- `ULTRAYIELD-20260322-RESOLV`: non-materially-affected, indirect-curator-fault, collateral, resolved.
- `ULTRAYIELD-20260419-RSETH`: non-materially-affected, indirect-curator-fault, collateral, unresolved.
- Allegations: none.
