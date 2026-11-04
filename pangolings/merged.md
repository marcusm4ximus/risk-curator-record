---
cursor:
  subagentId: "bc-fb666fb3-0441-5da8-bd93-652a62976384"
---

# Pangolins: merged DD draft

**Draft date:** 2026-09-25
**Inputs:** Grok paste (no INCIDENT blocks) plus Morpho GraphQL, a Base/Ethereum `lostAssets` read, and DefiLlama. Slug is `pangolings`. Brand is Pangolins. User-edit before any sheet paste.
**IDs:** none on the Events tab.

Pangolins (`@PangolinsVault`, [pangolins.io](https://pangolins.io)) is a Morpho curator. Morpho id `pangolins`, AUM about $12.42M on 2026-09-25. DefiLlama splits that as Base about $12.42M and Binance about $1.63M. This is not Avalanche Pangolin.

**Morpho vaults (2026-09-25)**

| Vault | Chain | Address | TVL | Share price |
|---|---|---|---|---|
| Pangolins USDC | Base | `0x1401d1271C47648AC70cBcdfA3776D4A87CE006B` | about $12.42M | 1.036 |
| Pangolins USDT | Ethereum | `0xd73270593E2542e5A43b8c7FBE4F2d5c9c4A443c` | about $658 | 1.028 |

Base USDC was created 2025-11-13, listed, `lostAssets` 0. Ethereum USDT is unlisted, `lostAssets` 0. Extra V2 shells (`0x12fBcA25…` on Base, `0x509289cC…` on Ethereum) are about $100 each and were not treated as the product.

Grok also attributes Lista Lending (BSC) USDT `0xEB4F6FFB1038E1cCa701e7d53083B37ec5B6Ba33` and BNB `0xcb995fb56ec7fc42e0c9a075dfa3a0b56de72484`. The USDT contract was re-read on Trading Strategy, which labels it an Euler vault curated by Pangolins (Lista Lending sits on that stack). As of the 2026-09-21 print, share price was 1.041 USDT, lifetime max drawdown 0.0%, TVL about $1.73M, peak about $87.3M. The TVL drop is not a share-price haircut. Trading Strategy's "likely abandoned" line is that TVL flag. The Nov 2025 Lista USDX liquidation posts name MEV Capital and Re7 Labs, not Pangolins. No sourced Lista loss was found, so no Events row. The BNB contract was not share-priced on its own this pass, and those USDX posts do not name it either.

## Not on Events tab

- Lista USDT TVL drop from a peak of about $87.3M to about $1.73M. Share price 1.041 and lifetime max drawdown 0.0% on the 2026-09-21 Trading Strategy print. No haircut. No Events row.
- Thin public risk surface (principles only, Data Mode not live). Disclosure gap.
- Nov 2025 Lista USDX liquidations named other curators, not Pangolins.

## STANDING CHECKS

**Events (H/M/L/N/D/I):** `0H 0M 0L 0N 0D 0I`

**Risk docs:** none. Site principles only. No market memo or incident log was found.

**Active since:** 2025-11 on Morpho (Base USDC created 2025-11-13). Grok dates the X account to 2025-05-09 and the Lista USDT vault to 2025-05-12. Those two dates were not re-opened.

**PoC:** X `@PangolinsVault`. Site https://pangolins.io . No public Telegram found.

**Any new incident since the paste:** none on the Morpho books through 2026-09-25. No sourced Lista loss on the USDT vault either.

**Repeated lesson:** n/a.
