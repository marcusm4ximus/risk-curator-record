---
cursor:
  subagentId: "bc-fb666fb3-0441-5da8-bd93-652a62976384"
---

# August Digital: merged DD draft

**Draft date:** 2026-09-25
**Inputs:** Grok paste (one Resolv INCIDENT) plus Morpho GraphQL and Ethereum `lostAssets`. User-edit before any sheet paste.
**IDs on Events:** `AUGUSTDIGITAL-20260322-RESOLV` (affected High), `AUGUSTDIGITAL-20260611-SHAREBREAK` (affected Med).
**Labels:** FACT / CLAIM / RUMOR in prose. Do not invent USD or %.

August Digital is a Morpho curator (id `august-digital`, AUM about $8.12M on 2026-09-25). Grok dates the public intro to 2025-07-25. No Euler curator book was found. Upshift is an affiliate. Upshift's own posts are not August Morpho statements unless they name the vault.

**Vaults checked (2026-09-25)**

| Vault | Address | TVL | Share / loss |
|---|---|---|---|
| August AUSD V1 | `0x9B7cca326004967f9D2B7cF5F2328d82cF65b302` | Morpho about $674k | Share 1.066 frozen. `lostAssets` = `totalAssets` = 674,379.425 AUSD. Deposits disabled. |
| August AUSD V2 | `0xE7F8Fb5CccC3e70B922FE696ae6B550557f88Da5` | about $18 | Share about 0.978. Unlisted. Created 2025-12-15. |
| August USDC V2 | `0x7ceB0f01Cb7187a2EBED5661eCC4d5701d8F2350` | about $288k | Share about 1.048. Series min is 1. |
| August USDC V2 (Monad) | `0x80017bF0f793EBbE9679Cd61ff0e395B62CAbB59` | about $7.83M | Share about 1.030. |

---

EVENT
curator: August Digital
date: 2026-03-22
title: Resolv
incident_id: AUGUSTDIGITAL-20260322-RESOLV
type: collateral
impact: High
fault: indirect
class: affected
severity: High
protocol_or_vault_url: https://app.morpho.org/ethereum/vault/0x9B7cca326004967f9D2B7cF5F2328d82cF65b302/august-ausd
usd_lost: 674132
pct_of_that_vault_tvl: unknown
status: unresolved
what_actually_happened: Resolv was a delta-neutral stablecoin protocol. USR was its dollar token, while RLP was meant to absorb losses first. August AUSD V1 lent AUSD against RLP at an 86% liquidation threshold. On 22 Mar 2026 a compromised mint key was used to issue unbacked USR. RLP collateral then lost most of its value while the AUSD loan remained outstanding.
response_summary: August set the RLP supply cap to zero on 22 Mar, but the position did not leave the market. On 25 Sep the vault reported 674,379.425 AUSD in lost assets, with remaining deposits unable to exit. Morpho valued the loss at $674,132. No make-whole was found.
critics: Mr. Walt (@defidada16) wrote on 11 May 2026 that after the USR exploit August lending pools paid nothing on about $600k of bad debt. That is his claim. It is close to the residual and is not the on-chain `lostAssets` figure. Chaos Labs listed August AUSD V2 at about $316K and Upshift earnAUSD at about $316K in the same 23 Mar exposure tally. Those are not this V1 P&L.
lesson_applied_later: unclear. The RLP cap was set to 0 the day of the exploit, and the supply position is still on the market. Ethereum August USDC V2 share price has only risen. No published collateral post-mortem was found.
funds_recovered: none
sources: primary https://app.morpho.org/ethereum/vault/0x9B7cca326004967f9D2B7cF5F2328d82cF65b302/august-ausd ; primary https://app.morpho.org/ethereum/market/0x4b86442549b52826e0fc11770ec5154450cb3c5c14dc751a761d81dcfbe7a7b2 ; primary eth_call `lostAssets()` / `totalAssets()` on `0x9B7cca326004967f9D2B7cF5F2328d82cF65b302` ; primary Morpho GraphQL `marketPosition` and `adminEvents` `setCap` ; commentary https://chaoslabs.xyz/posts/defi-s-contagion-loop-when-risk-curators-become-the-risk ; commentary https://x.com/defidada16/status/2053983968014299558

---

EVENT
curator: August Digital
date: 2026-06-11
title: Share break
incident_id: AUGUSTDIGITAL-20260611-SHAREBREAK
type: other
impact: Med
fault: indirect
class: affected
severity: Med
protocol_or_vault_url: https://app.morpho.org/ethereum/vault/0xE7F8Fb5CccC3e70B922FE696ae6B550557f88Da5/august-ausd-v2
usd_lost: unknown
pct_of_that_vault_tvl: unknown
status: unresolved
what_actually_happened: Between 4 and 11 Jun 2026, August AUSD V2's share price fell from 1.066207 to 0.977610 while its TVL fell from about $8.04 million to $4.27 million. The loss of accrued value pushed the share price below 1.
response_summary: August did not publish a cause, explanation, rebate, or cap change. By 25 Sep the share price was still about 0.978 and TVL was about $18, so the loss had not recovered.
critics: No source was found that names this June share-price break. Trading Strategy's lifetime max drawdown of about -9.1% and last share near 0.978, cited by Grok, matches the level of this break and not a March print. Grok attached that drawdown to Resolv. The weekly series does not.
lesson_applied_later: unclear. No second break after 11 Jun. The price has drifted slightly lower, not recovered.
funds_recovered: none
sources: primary Morpho GraphQL `vaultV2ByAddress` historical `sharePrice` and `totalAssetsUsd` for `0xE7F8Fb5CccC3e70B922FE696ae6B550557f88Da5` ; primary https://app.morpho.org/ethereum/vault/0xE7F8Fb5CccC3e70B922FE696ae6B550557f88Da5/august-ausd-v2 ; commentary https://tradingstrategy.ai/vaults/august-ausd-v2

---

## Not on Events tab

- Chaos Labs' about $316K on August AUSD V2, and Upshift's about $315K RLP line on earnAUSD, are exposure tallies. They are discussed on the Resolv row. They are not a second `usd_lost`.
- `@defidada16` $600k sentence. Claim only. Not used as `usd_lost`.
- August USDC books. Ethereum V2 share price min is 1. Monad V2 is a large live book at about 1.030. Not a loss row.

## STANDING CHECKS

**Events (H/M/L/N/D/I):** `1H 1M 0L 0N 0D 2I`

**Risk docs:** stale. Morpho shows risk tabs. August's own docs are prime-brokerage and audit notes, not a living Morpho market memo. Grok's last-seen docs date of 2026-08-03 was not re-checked.

**Active since:** 2025-07 (Grok: Morpho intro 2025-07-25). AUSD V1 created 2025-12-10. AUSD V2 created 2025-12-15.

**PoC:** X `@august_digital`. Affiliate `@upshift_fi`. No Telegram found in the paste.

**Any new incident since 2026-06-11:** no further share-price break on AUSD V2 through 2026-09-25. V1 `lostAssets` is still the whole recognized book, and the RLP supply position is still there.

**Repeated lesson:** unclear. V1's RLP/Resolv book and V2's June share-price break are both still open, with no public post-mortem found for either.
