---
cursor:
  subagentId: "bc-f66d08a7-945d-5476-8d2e-814f1d93aba1"
---

# MEV Capital - Grok vs reality

**As of:** 2026-09-26
**Grok paste:** Desktop `mev-capital/twitter-grok.md`. Four INCIDENT blocks. Remap severity. Do not invent USD or %.

## Verdict

Three affected rows, one direct-oracle row, and one allegation. Grok's Med on USD0++ assumed a loss rank after MEV said lenders had no bad debt, and the weekly share price rose. The Arbitrum Stream close-out and the Resolv residual are the only sourced vault P&L figures. The Ethereum Elixir mark is a sourced percent with no dollar. The Usual co-founder stake is an allegation, not a loss. Events: `1H 1M 1L 1D 0I 1A`.

## 1) Tweet text that stands

| Grok | Verdict |
|---|---|
| 10 Jan 2025: Usual did not give advance notice. Reallocation into hardcoded USD0++ markets was suspended. A "USD0++ naked" market was deployed at $0.87. Curator fees on the Usual USDC vault were suspended the same day | **FACT** as https://x.com/MEVCapital/status/1877699650783687078 and https://x.com/MEVCapital/status/1877744081045995970 |
| 12 Jan 2025: no bad debt so far, lenders remained safe, about 400k left in hardcoded markets, under 0.2% of that vault, fees to be turned back on | **FACT** as https://x.com/MEVCapital/status/1878437031413502253. Weekly share price rose from 9 Jan (about 1.052, TVL about $446M) through 16 Jan (about 1.055, TVL about $350M). The TVL drop is withdrawals |
| 5 Nov 2025: actively managed mainnet products had no direct Stream exposure. Listed Silo Avalanche USDC $7.2M and 164.3 BTC.b, Morpho Arbitrum USDC $628k, Euler Sonic USDC $3.4M and scUSD $7.02M | **FACT** as https://x.com/MEVCapital/status/1986038314642595857. Those lines are allocation snapshots, not a close-out |
| 13 Nov 2025: Arbitrum USDC vault removed xUSD/USDC after the timelock and realized about 600k USDC out of the remaining about 5M USDC. Morpho vaults then had no Stream or Elixir exposure | **FACT** as https://x.com/MEVCapital/status/1989048013893812549. This is the only Stream dollar booked |
| 17 Mar 2026: the Arbitrum Morpho vault was Stream xUSD, not Elixir | **FACT** as https://x.com/MEVCapital/status/2033944621655458159 |
| 12 Nov 2025: Ethereum Morpho USDC vault removed sdeUSD/USDC and realized bad debt equal to nearly 3.6% of vault TVL. No Elixir left | **FACT** as https://x.com/MEVCapital/status/1988581694476071222 |
| 17 Mar 2026: Ethereum Morpho USDC depositors can claim via the Elixir partner portal | **FACT** as https://x.com/MEVCapital/status/2033936402472202339 |
| 26 Mar 2026: Ethereum USDC vault exited RLP/USDC. Residual of about 47k USDC removed, less than 0.65% of remaining TVL. Deposits reopened. Zero Resolv exposure. Following up with Resolv on recovery | **FACT** as https://x.com/MEVCapital/status/2037194072817803772 |

## 2) Wrong or remapped

| Grok | Verdict |
|---|---|
| USD0++ severity Med, `usd_lost: 0` | **Remap.** Class `non-materially-affected`. Severity `direct-curator-fault`. Type `oracle`. They listed a hardcoded about $1 oracle and replaced it. They said there was no bad debt, and the weekly share price did not fall. Do not write 0. `usd_lost` stays unknown |
| Stream severity High, `usd_lost: 600000` | **Keep the 600k and High on the Arbitrum close-out only.** Weekly share price on that vault rose from about 1.019 on 6 Nov (TVL about $19.9M) to about 1.024 on 13 Nov (TVL about $5.2M) and about 1.025 on 20 Nov (TVL about $1.3M). The 600k is their sentence, not a share-price reconstruction. Do not add Euler or Silo snapshots, and do not add the YAM about $25M exposure tally |
| Elixir severity High, `usd_lost` unknown, 3.6% | **Severity remap to Med.** Nearly 3.6% is their figure, and a depositor reported a 3.6% mark the day before. Weekly share price fell from about 1.121 on 6 Nov to about 1.085 on 13 Nov. No dollar was published. Do not multiply the percent by TVL. High is the Arbitrum Stream close-out, not this mark |
| Resolv severity Low, `usd_lost: 47000` | **Keep.** Affected, Low. The about 47k is their residual on the Ethereum USDC vault. Weekly share price fell from about 1.105 on 26 Mar to about 1.099 on 2 Apr. Chaos Labs' about $53k is an exposure tally, not this close-out |
| `pct` of 0 on USD0++ | **Drop.** Do not write 0 |

## 3) Vault facts this pass

Morpho API, 2026-09-26. Deposits are not losses.

| Vault | Note |
|---|---|
| Usual Boosted USDC (Ethereum) | Created 24 Jul 2024. Listed. Deposits about $1.98M. Share about 1.127. Same vault as the USD0++, Elixir, and Resolv USDC posts |
| MEV Capital USDC (Arbitrum) | Unlisted. Deposit disabled. Deposits about $652k. Share about 1.026, flat since Dec 2025. Live allocation is not xUSD |
| MEV Capital Resolv USR | Unlisted. Deposit disabled. Deposits about $41k, idle USR, share about 1.053. Weekly share did not fall across 26 Mar to 2 Apr while TVL fell. No second Resolv dollar |
| MEV Capital wETH | Listed. Deposits about $5.0M. Share about 1.081. April 2026 weekly share rose. Current allocation is wstETH only |

DefiLlama's adapter comments out the Arbitrum USDC vault, the Resolv USR vault, a USD0 vault, an Elixir USDC vault, and two Avalanche Silo vaults as holding Stream, Elixir, or Resolv bad debt. Those comments are not a P&L. The Elixir USDC vault's share field printed about 224 on a about $1.13M book. That print is not used.

## 4) Missing or left off the tab

- Kelp / rsETH in April 2026. wETH share rose and the live sleeve is wstETH. Grok's vaults.fyi warning was not re-opened. Non-confirmation is not a row.
- YAM / BlockEden about $25.4M Stream exposure, and Tiger Research's about $650k market-debt line. Exposure or a different tally. Not added to the 600k.
- Usual co-founder stake in MEV Capital. Still not a primary filing. Now `MEVCAPITAL-20250110-STAKE`: class `allegation`, severity `allegation`, type `collateral`, status unresolved, `usd_lost` unknown. Not a dated loss. Allegations flag: Usual co-founder alleged as a MEV Capital shareholder.
- @O2debt on 12 Nov 2025 asked about Euler vaults MEV governed and an undisclosed xUSD contagion. That is the same Stream exposure MEV listed on 5 Nov (Euler Sonic USDC and scUSD). No new dollar. Critics on the Stream row. Not a second event and not an allegation.
- Euler FAQ body that curators chose the xUSD feed. The 14 Nov 2025 Euler post opened here is only the intro line. Not used as a new fact.

## 5) What to add or change

- `MEVCAPITAL-20250110-USD0ORACLE`: non-materially-affected, direct-curator-fault, oracle, resolved, `usd_lost` unknown.
- `MEVCAPITAL-20251105-STREAMXUSD`: affected, High, collateral, unresolved, `usd_lost` 600000 (Arbitrum Morpho only).
- `MEVCAPITAL-20251112-ELIXIRSDEUSD`: affected, Med, collateral, resolved, `usd_lost` unknown.
- `MEVCAPITAL-20260322-RESOLVRLP`: affected, Low, collateral, unresolved, `usd_lost` 47000.
- `MEVCAPITAL-20250110-STAKE`: allegation, collateral, unresolved, `usd_lost` unknown.
- Allegations: Usual co-founder alleged as a MEV Capital shareholder.
