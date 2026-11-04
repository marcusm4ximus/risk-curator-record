---
cursor:
  subagentId: "bc-b07e5869-4b5e-5088-8b71-d538d374ee87"
---

# singularV - Grok vs reality

**As of:** 2026-09-26
**Grok paste:** Desktop `singularv/twitter-grok.md`. One INCIDENT block, `SINGULARV-20260418-HGETH`, severity High. Remap below. Do not invent USD.

## Verdict

Keep one Events row. Depositors did not have a sourced haircut, so High does not stand. Class `non-materially-affected`, severity `indirect-curator-fault`. They listed hgETH, capped the market, and pulled available WETH. Weekly share price on SingularV ETH only rises. `usd_lost` stays unknown. Events: `0H 0M 0L 0D 1I 0A`.

## 1) Keep

| Grok | Verdict |
|---|---|
| 19 Apr 2026 post: 491 ETH, about 38.2% of SingularV ETH, still in hgETH/WETH after a cap-to-zero and an idle withdrawal | **FACT** as the tweet https://x.com/SingularV_xyz/status/2045656067515076797 (posted 19 Apr 2026 00:09 UTC). The 38.2% is their residual-supply share, not a haircut and not `usd_lost` |
| Market `0xec97655fab06b53bfad9d8c2358768aed5a1c97b204d3e51e2a7cb0cb786a264`, hgETH/WETH, LLTV 91.5%, created 2025-10-29 | **FACT** on the Morpho API. Collateral hgETH `0xc824A08dB624942c5E5F330d56530cD1598859fD` |
| hgETH described as Upshift leveraged rsETH loops | **FACT** as SingularV's own wording in that tweet. Gitbook and Yearn describe the same token as Kelp High Growth ETH on Upshift |
| Vault `0x739d8a60ED4b14E4cB6DCAEAF79d2ec0Ca092237` | **FACT**. Listed. Share price about 1.102 on 2026-09-26. API deposits about $126k |
| 21 Apr letter: svUSDC has no direct rsETH exposure. 28 Apr letter does not close the 491 ETH | **FACT** on the posts. The 28 Apr letter was posted 30 Apr 2026 and talks about svUSDC redeployment, not an ETH-vault close-out. svUSDC is not this Morpho vault |
| Forum intro 2025-07-22. Brand operated by Alphanonce | **FACT** as https://forum.morpho.org/t/introduction-on-singularv/1893. "Founded 2018" is that post, not a registry check |
| X `@SingularV_xyz` | **FACT**. Account join date on the post metadata is 21 Jan 2025 |
| No live Euler vault found | **FACT** on this pass. The site's Euler line stays unverified marketing |

## 2) Wrong or remapped

| Grok | Verdict |
|---|---|
| severity High | **Wrong for this taxonomy.** High needs depositor money loss on this vault. The 491 ETH is stuck supply they disclosed, not a sourced write-down. Weekly share-price points from inception (about 1.000 on 2025-06-26) through 2026-09-24 (about 1.102) do not fall, including 16 Apr through 25 Jun 2026 |
| status unresolved | **Stale.** On 2026-09-26 the vault's allocation does not include hgETH. The market's `supplyingVaults` list is empty. No curator post states a numbered repayment. Status in the draft is `resolved` because the position is gone and the share price did not drop, not because they published a close-out |
| Later UI snapshot: 0 realized and 0 unrealized bad debt, SingularV still the dominant supplier | **Does not match this pass.** Unrealized bad debt is 0. Realized bad debt on the market is 8.269886197120696 WETH. The API `usd` field on that line printed about $22,271. `supplyingVaults` is empty, so SingularV is not the current supplier. That WETH figure is market realized bad debt, not a SingularV vault P&L line. It is not `usd_lost`. The weekly share-price series does not show the vault absorbing it |
| `usd_lost: unknown` | **Keep.** Do not write 0. Do not paste the 491 ETH, the 38.2%, the protocol-wide "$1 million" Morpho comment, or the market's realized-bad-debt dollars onto this curator's P&L |
| Morpho CEO: about $1 million ETH across two isolated markets | **Protocol comment, not this vault's P&L.** PANews recap of Paul Frambot. Do not book it here |

## 3) Unverified

| Grok | Label |
|---|---|
| vaults.fyi warning that the vault "holds exposure to Kelp rsETH" | **Not re-confirmed.** The page extract this pass did not include that sentence |
| USDT series starts 2025-07-15 | **Close.** Morpho `creationTimestamp` for SingularV USDT `0xbdd4859050468fBc11Dec07113a6e633608A1372` is 2025-07-08. Weekly share points start 2025-07-10 |
| Telegram `@SingularVSupport` | **Still unverified.** Not on the Morpho socials |
| Euler curation on the website | **Unverified.** No vault URL |

## 4) Missing

- Morpho V2 SingularV ETH `0xF39AC02DEc8faE8292d5f42202e4Cd885356256B`, created 2026-01-22, listed, share about 1.019, deposits about $153k. No incident attached.
- SingularV USDT V1 is unlisted, share about 1.062, live supply is sUSDe/USDT, market bad debt 0.
- Ethereum SingularV USDC V1 is dust. Two markets it does not currently supply (PT-eUSDE and yUSD) show market-level bad debt. That is not booked as this vault's P&L. Weekly share price on the USDT vault does not fall. The USDC vault share is about 1.114 with about $0.11 deposited.

## 5) What to add or change

- One row: `SINGULARV-20260418-HGETH`. Type `collateral`. Class `non-materially-affected`. Severity `indirect-curator-fault`. `usd_lost` unknown. `pct_of_that_vault_tvl` 38.2 only as their stated residual share.
- Not on Events: svUSDC letters. The 21 Apr 2026 post says no direct rsETH exposure, an LP cut, a depegged sUSDe purchase for redemption, and a USD1 Dolomite position. The 28 Apr 2026 letter, posted 30 Apr 2026, says redeployment into Dolomite and a plan to scale the sUSDe loop. No second incident. March USR/RLP "no exposure" (not re-opened as a row), Euler marketing line, market realized bad debt that is not a vault P&L.
- Allegations: none.
