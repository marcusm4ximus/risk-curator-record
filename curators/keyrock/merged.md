---
cursor:
  subagentId: "bc-fb666fb3-0441-5da8-bd93-652a62976384"
---

# Keyrock: merged DD draft

**Draft date:** 2026-09-25
**Inputs:** Grok paste (one Resolv INCIDENT) plus Morpho GraphQL and the Chaos Labs Resolv tally. User-edit before any sheet paste.
**IDs:** none on the Events tab. Grok's `KEYROCK-20260322-RESOLV` is off the tab.
**Labels:** FACT / CLAIM / RUMOR in prose. Do not invent USD or %.

Keyrock is a Morpho curator (id `keyrock`). Morpho AUM about $83.2M on 2026-09-25. DefiLlama's Ethereum line is about $8.21M and does not include the Arc vault. No Euler curator role was found.

**Vaults (2026-09-25)**

| Vault | Chain | Address | TVL | Share price |
|---|---|---|---|---|
| Keyrock USDC | Ethereum | `0x04422053aDDbc9bB2759b248B574e3FCA76Bc145` | about $7.96M | 1.058 |
| Keyrock Prime USDT | Ethereum | `0xE9BE5f0e92E941A025d3dd32038250577756a73f` | about $202k | 1.009 |
| Keyrock RLUSD | Ethereum | `0x41BA71cf6b366C7489AA31D2013e9A26F4c3E2d7` | about $736 | 1.004 |
| Keyrock Prime USDC | Arc (5042) | `0x5bEfAb92a5A3D60F578Cb51EEb4e4FD50a1e3123` | about $75.0M | 1.00001 |

Keyrock USDC was created 2025-10-03. Its weekly share price starts at 1 on 2025-10-09 and is the series maximum on the latest print. Prime USDC on Arc has 46 points stuck at par.

## Not on Events tab

- `KEYROCK-20260322-RESOLV`
  - **What happened:** Resolv was a delta-neutral stablecoin protocol, and USR was its dollar token. On 22 Mar 2026, a compromised mint key issued about 80 million unbacked USR. USR lost its peg while Morpho markets still valued related collateral near $1. Chaos Labs listed about $36,000 of exposure in Keyrock USDC, and Rekt included the vault in its affected-vault list.
  - **Response:** Keyrock published no incident note, cap change, pause, post-mortem, or loss figure. Its weekly share price did not fall, and no source documented a realized loss or final exit.
- 18 Apr 2026 VTrace cap-to-zero on Keyrock USDC vs wstETH. No loss sourced. Not a Resolv post.
- 14 Oct 2025 forum note of zero bad debt after market vol. Status, not an incident.
- Summer.fi commentary on a v2 wrapper and yield-bearing collateral. No dated failure.

## STANDING CHECKS

**Events (H/M/L/N/D/I):** `0H 0M 0L 0N 0D 0I`

**Risk docs:** none. [keyrock.com/risk-disclosure](https://keyrock.com/risk-disclosure/) is a firm trading disclaimer, not a Morpho market memo. Curator intro is the Oct 2025 forum post. Story page: https://morpho.org/stories/keyrock

**Active since:** 2025-10 (USDC vault created 2025-10-03).

**PoC:** X `@keyrock`. `@KeyrockTrading` was not a live incident channel in Grok's search. Research Telegram is a macro briefing, not a vault desk.

**Any new incident since 2026-03-22:** none sourced through 2026-09-25. Arc Prime USDC is large and at par.

**Repeated lesson:** n/a. No sourced first loss to repeat.
