---
cursor:
  subagentId: "bc-878ecf91-2bd1-546c-8e38-7b2577f4e1f6"
---

# Keyring - merged DD draft

**Draft date:** 2026-09-25
**Inputs:** Grok paste (one INCIDENT) plus Keyring’s October 2025 listing posts and the Euler compensation thread. Edit before any sheet paste.
**Not Keyrock.**

Keyring Network (`@KeyringNetwork`) curates Euler zkVerified / permissioned markets. No Morpho vault under this name was found. The deUSD listing is the only Events row.


---

EVENT
curator: Keyring
date: 2025-11-04
title: Elixir
incident_id: KEYRING-20251104-ELIXIR
type: collateral
impact: High
fault: direct
class: affected
severity: High
protocol_or_vault_url: https://app.euler.finance/?market=keyring-avalanche&network=avalanche
usd_lost: unknown
pct_of_that_vault_tvl: unknown
status: unresolved
what_actually_happened: Elixir was a liquidity network. deUSD was its synthetic dollar, and sdeUSD was the staked version. Keyring's Avalanche Euler vault opened for deUSD on 27 Oct 2025. By 31 Oct, users could lend deUSD and borrow against sdeUSD and other assets. On 4 Nov, Stream Finance disclosed an external-manager loss and halted withdrawals. Elixir's large loan to Stream impaired deUSD's backing. Elixir froze deUSD minting and redemption, then shut down deUSD and sdeUSD. Its liquidation integration also stopped working when Elixir disabled it.
response_summary: Euler posted incident guidance on 8 and 14 Nov. On 13 Nov, a depositor said the Keyring vault had taken a severe haircut but called an estimate of half or more unsettled. Keyring replied to the thread, opposed using Euler's treasury, and did not offer a refund. On 19 Nov, Euler said its contracts had operated as designed and that independent curators chose the collateral and price feeds. Keyring published no loss accounting or recovery plan. As of 26 Sep 2026, no post showed depositors had been paid, and the final haircut remained unknown.
critics: @keyringdepositor said the loss was worse because Euler’s Elixir integration failed, verified vaults hid the Stream link, and deposits stayed open. Euler Labs replied that the protocol worked as designed and that curators, not Euler, picked the collateral. Lemniscap, on the same thread, named Telos, MEV, and Re7 as the curators to pursue and did not quantify Keyring.
lesson_applied_later: unclear + example: Grok’s 2026 Keyring surface is an Ethereum institutional cluster using mGLOBAL and NGI+ against USDC and USDT, plus a Laser Digital partnership where Laser is described as risk governor. No Keyring statement ties that shift to this incident. No second deUSD listing was found.
funds_recovered: none
sources: primary https://x.com/KeyringNetwork/status/1982892478249480311 ; primary https://x.com/KeyringNetwork/status/1984241663871762544 ; primary https://forum.euler.finance/t/request-for-a-formal-governance-proposal-regarding-compensation-for-users-affected-by-the-elixir-and-steam-labs-collapse/1708?page=2 ; primary https://x.com/eulerfinance/status/1987109954067587455 ; primary https://x.com/eulerfinance/status/1989388982783025238 ; commentary https://www.theblock.co/post/377961/elixir-sunsets-deusd-synthetic-stablecoin-following-stream-finance-unwinding-aims-full-redemptions ; commentary https://www.bankless.com/read/news/elixir-launches-usdc-recovery-portal-for-lenders-impacted-by-stream-insolvency.md

---

## Not on Events tab

- `KEYRING-20250529-DEUSDORACLE` - May 2025 Avalanche deUSD oracle spike. Primary write-ups name other curators. Keyring’s deUSD advertisements are October 2025.
- Trading Strategy’s 0.0% max drawdown on the later Avalanche USDC cluster is an indexer field, not a Stream-era loss audit.

## STANDING CHECKS (2026-09-25)

**Events (H/M/L/N/D/I):** `1H 0M 0L 0N 1D 0I`

Risk docs: active
- Grok: product docs and research (ISDA SIMM / FRTB-style papers, Unwind risk page, Structuring overview last verified 2026-08-04). Not a vault-by-vault loss memo for the zkVerified cluster. No public Keyring exposure dashboard was found.

Active since: 2025-08
- Grok: official Euler zkVerified launch on Avalanche in August 2025, Euler forum curator post in May 2025. June 2025 press says the markets were launching. The deUSD vault post is 2025-10-27.

PoC: X: @KeyringNetwork
- TG: @keyring_network / @KeyringNetworkAssist (Grok). Site keyring.network.

Any new incident since Grok (last row 2025-11-04): none found through 2026-09-25.

Whether a past lesson showed up again: no second deUSD-style listing was found. The later collateral is permissioned RWA and tokenised credit. That is a product change, not a published post-mortem.

Searched: Keyring listing tweets (fxtwitter), Euler forum page 2 of thread 1708, The Block Elixir sunset, Bankless recovery-portal note, Grok’s Euler FAQ links. May 2025 oracle coverage was not attributed to Keyring.
