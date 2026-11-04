---
cursor:
  subagentId: "bc-f66d08a7-945d-5476-8d2e-814f1d93aba1"
---

# Valamore - merged DD draft

**Draft date:** 2026-09-26
**Inputs:** Grok paste (three INCIDENT blocks) plus Varlamore and Stability posts, Silo's Stream report, Silo's 20 Nov repayment post, and Lazy Summer's post-mortem. User-edit before any sheet paste.
**IDs on Events:** Stream (High + Indirect), Stability (Low + Indirect), stale shares (N + Indirect).
**Labels:** readable prose. Do not invent USD or %.

The slug is `valamore`. The curator is Varlamore Capital (`@VarlamoreCap`, [varlamore.capital](https://varlamore.capital/)). X account joined 10 Mar 2025. The bio says it allocates on Silo. No Varlamore Morpho vault was found in this pass. The homepage names a risk framework and does not link the document.

---

EVENT
curator: valamore
date: 2025-08-06
title: Stability
incident_id: VALAMORE-20250806-STABILITY
type: collateral
impact: Low
fault: indirect
class: non-materially-affected
severity: N
protocol_or_vault_url: https://x.com/VarlamoreCap/status/1952933617921081494
usd_lost: unknown
pct_of_that_vault_tvl: unknown
status: resolved
what_actually_happened: Stability ran managed yield vaults. wmetaUSD and wmetaS were wrapped shares in its MetaVaults, which used the Credix credit protocol. On 5 Aug 2025, a Credix exploit exposed the MetaVaults. Varlamore's Silo Sonic vaults allocated funds to wmetaUSD and wmetaS.
response_summary: On 6 Aug, Varlamore set the vgUSDC allocation to wmetaUSD to zero and cut the vS allocation to wmetaS to less than 1%. It said the situation was under control. No later Varlamore update gave a loss figure for this exposure.
critics: No named critic of this cut was found.
lesson_applied_later: no. Example: on 4 Nov 2025 Varlamore said its USD Growth vaults were exposed to Stream xUSD. A mid-August marketing post for new xUSD vaults is in the paste and was not retrieved.
funds_recovered: n/a
sources: primary https://x.com/VarlamoreCap/status/1952933617921081494 ; primary https://x.com/stabilitydao/status/1952823589771854072

---

EVENT
curator: valamore
date: 2025-11-04
title: Stream xUSD
incident_id: VALAMORE-20251104-STREAM
type: collateral
impact: High
fault: direct
class: affected
severity: High
protocol_or_vault_url: https://x.com/VarlamoreCap/status/1985720425759064489
usd_lost: unknown
pct_of_that_vault_tvl: unknown
status: unresolved
what_actually_happened: Stream Finance ran yield vaults, and xUSD was its yield-bearing dollar token. Varlamore's USD Growth vaults lent into Silo markets that used xUSD as collateral. On 4 Nov 2025, Stream disclosed an external-manager loss and xUSD became undercollateralized. Redemptions closed. Silo markets still valued xUSD and xBTC at Stream's pre-loss exchange rate, so liquidations could not clear.
response_summary: On 4 Nov, Varlamore removed the xUSD markets from its supply queues, set caps to zero, and told users not to deposit. On 6 Nov, it promised to pursue recovery and directed depositors to Silo's form. On 20 Nov, a borrower repaid about $1.49M USDC into the Arbitrum market, allowing many users to withdraw part of their funds. The payment did not come from Varlamore's treasury. The remainder is not shown as paid, and no Varlamore post says depositors were made whole.
critics: The Defiant, in a 6 Nov 2025 piece Grok cited, said curators including a misspelled Valarmore had moved into xUSD without clear disclosure. That article was not re-opened here. A reply Grok attributed to a privileged full exit after the $1.49M repay used a status id that was not a real tweet in the paste, so it is dropped. A separate post that Varlamore is "basically Silo" was not re-opened and is not treated as fact.
lesson_applied_later: no. Example: the Growth vault token was still reporting a pre-Stream value in July 2026, which is the next row.
funds_recovered: partial
sources: primary https://x.com/VarlamoreCap/status/1985720425759064489 ; primary https://x.com/VarlamoreCap/status/1986290754688541003 ; primary https://silofinance.medium.com/stream-finance-incident-transparency-report-cc21fb76f0b5 ; primary https://x.com/SiloFinance/status/1991469688501727412 ; commentary https://forum.arbitrum.foundation/t/update-stream-finance-xusd-situation-and-impact-assessment/30206 ; commentary https://protos.com/stream-finance-meltdown-winners-and-losers-in-defi-risk-curator-reckoning/ ; commentary https://web.archive.org/web/20260725010647/https://blog.summer.fi/lazy-summer-usdc-vault-exploit-post-mortem-what-happened-and-what-comes-next/

---

EVENT
curator: valamore
date: 2026-07-06
title: Stale shares
incident_id: VALAMORE-20260706-STALESHARES
type: other
impact: N
fault: indirect
class: non-materially-affected
severity: N
protocol_or_vault_url: https://web.archive.org/web/20260725010647/https://blog.summer.fi/lazy-summer-usdc-vault-exploit-post-mortem-what-happened-and-what-comes-next/
usd_lost: unknown
pct_of_that_vault_tvl: unknown
status: unresolved
what_actually_happened: Lazy Summer's USDC vaults used modular strategies called arks. On 6 Jul 2026, an attacker donated Silo Varlamore USDC Growth tokens into an ark that was capped but still counted in the vault share value. Those tokens still reported their value from before the Stream loss, with interest accruing on stranded USDC. The donation therefore inflated the Lazy Summer vaults.
response_summary: Lazy Summer paused the vaults and published the post-mortem. It reported losses of about $5.64M and $0.40M for its own depositors, not for Varlamore's vault. Responsibility for the stale rate is disputed among Varlamore, Silo, and the integrator. No Varlamore response was found.
critics: CertiK's alert the same day named Silo Varlamore USDC Growth as the token the attacker had accumulated and donated. Lazy Summer's post-mortem is the accounting. CryptoTimes tied the drain back to the November Stream collapse. vaults.fyi still warns that Varlamore USDC Growth may have been hit by Stream and shows a very large APY. That APY is not a loss.
lesson_applied_later: no. Example: eight months after the cap cut, the Growth token was still a composable share with a pre-Stream rate.
funds_recovered: n/a
sources: primary https://web.archive.org/web/20260725010647/https://blog.summer.fi/lazy-summer-usdc-vault-exploit-post-mortem-what-happened-and-what-comes-next/ ; primary https://x.com/CertiKAlert/status/2074043519422099514 ; commentary https://www.cryptotimes.io/2026/07/08/6m-lazy-summer-exploit-traces-back-to-novembers-stream-finance-collapse/ ; commentary https://app.vaults.fyi/opportunity/mainnet/0x8399C8Fc273bD165C346Af74A02e65f10e4FD78F

---

## Not on Events tab

- DRIP about $14M and Protos over $19M. Claims. Not `usd_lost`.
- Lazy Summer's about $6.04M. Someone else's P&L.
- The unverified mid-August 2025 xUSD launch. The November exposure post is the later fact used above.
- SiloDAO's August 2026 claim filing in the paste. Not re-opened. Not a new curator incident.

## STANDING CHECKS (2026-09-26)

**Events (H/M/L/N/D/I):** `1H 0M 1L 1N 1D 2I`

Risk docs: none
- The homepage names a Varlamore Risk Framework. No public URL or PDF was found.

Active since: 2025-03 on X (joined 10 Mar 2025). First post opened here is 6 Aug 2025.

PoC: X `@VarlamoreCap`. Site https://varlamore.capital/. No public Telegram was on the homepage text opened here.

Any new incident since 2026-07-06: none sourced through 2026-09-26 that is a new Varlamore vault loss.

Whether a past lesson showed up again: yes. After the August Stability cut, USD Growth vaults were still in xUSD on 4 Nov. After that cap cut, the Growth share rate was still uncorrected in July 2026.

Searched: the Varlamore, Stability, Silo, and CertiK posts named above, Silo's Medium report, Lazy Summer's post-mortem, the Varlamore homepage, vaults.fyi on USDC Growth. No Varlamore vault USD loss figure was sourced.
