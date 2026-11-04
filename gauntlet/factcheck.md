---
cursor:
  subagentId: "bc-f41c1427-71eb-56ab-83f9-8f7ec07521b0"
---

# Gauntlet — Grok vs reality

**As of:** 2026-09-15  
**Grok paste:** `/cursor/stores/bc-ed376285-88c8-478c-b177-6340e8173377/docs/curator-dd/gauntlet/twitter-grok.md` (confirmed byte-identical to Desktop). Three INCIDENT blocks: ezETH 2024-04-24, Resolv USR 2026-03-22, rsETH mint 2026-04-18. Independent Morpho/Euler research against the same curator.

**Grok did well on the job that matters:** did not invent a Resolv USD-lost or TVL-%; scoped out Compound deUSD and the Oct 2024 PAXG market; split FACT/CLAIM on allocator flow.

---

## 1) Keep (Grok matches primary sources)

| Grok | Verdict |
|---|---|
| ezETH: 02:25 UTC oracle <1, first liq 02:29:47 UTC block 19722269, 145/146 by 02:52:35, 10.96 WETH insolvency in 0.86 market, 0 in 0.77, LRT Core ~65% of ~7.6k WETH → **7.12 WETH / 11 bps**, `usd_lost: unknown` | **FACT** — [Morpho forum 578](https://forum.morpho.org/t/gauntlet-lrt-core-vault-market-update-4-24-2024-ezeth-price-volatility/578), [VaultBook](https://vaultbook.gauntlet.xyz/resources/market-volatility) |
| `GAUNTLET-20240424-EZETH`, type `collateral`, severity Low, status resolved, funds_recovered none | Keep |
| Resolv: first mint ~02:21 UTC, unbacked USR, DEX collapse, Morpho still marking USR/wstUSR/RLP near $1 | **FACT** (Resolv post-mortem + mint txs). Grok’s “Gauntlet first said ~$50M vs ~$100k; later ~80M / ~$25M extract” is the right split |
| Core $4.95M wstUSR/USDC; Frontier $1.09M wstUSR + $479k PT-RLP + $374k RLP; Resolv USDC ~$1.03M; deposits disabled, caps 0 | **FACT** (Gauntlet 22–23 Mar) |
| Chaos Labs 23 Mar 13:00 ET tally: Core+Frontier **~$6.05M**, ExtraFi Base **~$433k**, Seamless Base **~$382k** | **FACT** that Chaos published those snapshots — [Chaos Labs](https://chaoslabs.xyz/posts/defi-s-contagion-loop-when-risk-curators-become-the-risk). Still **CLAIM** as crystallized loss |
| D2 challenged “limited exposure” with Morpho UI $4.95M Core | **FACT** |
| Merkl **4,379,827 USDC**; Core + illiquid v1.1 immediate; Frontier/Seamless when illiquid | **FACT** (Gauntlet 3 Jun 2026) |
| Prime / USD Alpha unimpacted | **FACT** as Gauntlet statement; Prime mandate is blue-chip |
| rsETH: 2026-04-18 Kelp forged message, **~116,500 unbacked rsETH (~$292M)** | **FACT** (Kelp/LayerZero/Glassnode class of reports) |
| Gauntlet Morpho sleeves: **~10 rsETH Unichain WETH (~2.1%)** and **0.48 ETH PT-agETH via Index Coop hyETH (~0.2%)**; Prime none; caps to 0; no bad debt claimed | **FACT** as Gauntlet 23 Apr curator post-mortem, quoted on [Compound forum 7772](https://www.comp.xyz/t/rseth-oracle-migration-and-temporary-liquidation-pause-on-ethereum-weth-and-wsteth-markets/7772) |
| Standing: risk docs **active**, active since **2024-03**, PoC **X: @gauntlet_xyz**, no TG | **FACT** |
| Compound Nov 2025 deUSD pause and Oct 2024 PAXG market out of this curator sheet | Correct scope |

---

## 2) Wrong (change)

| Grok | Label | Fix |
|---|---|---|
| Same tweet ID `2035596979603218730` listed as **both** `@gauntlet_xyz` “primary” **and** `@D2_Finance` critic URL | **WRONG** | One snowflake cannot be two accounts. Treat as D2’s screenshot thread (embeds in [neweconomy.jp](https://www.neweconomy.jp/posts/559135)). Do not cite that ID as a Gauntlet primary. Other Grok Gauntlet IDs (`2035893955666256054`, `2036162856518099115`, `2037035536351941068`, `2062185818698223704`) were not independently opened (X 403); keep as Grok-cited until checked in a browser |
| Resolv `status: resolved` | **WRONG** / too clean | Merkl is open but **gated** (Frontier + Seamless wait on illiquidity); coverage vs bad debt **not** independently verified; no Gauntlet technical post-mortem on VaultBook. Use **unresolved** |
| Resolv `type: collateral` only | Incomplete, not false | Listing USR-family collateral is the curator choice. The Morpho *money* path is a **stale/hardcoded oracle** plus allocator/donation. Merged type: `oracle` |
| ezETH critics: “Forum commenters… no named institutions” | Incomplete | Named: **PRado** on the same Morpho thread. Commentary: Marc Zeller (Aave) in [Protos](https://protos.com/depeg-of-3b-restaking-token-ezeth-causes-over-60m-in-defi-liquidations/) |
| ezETH `protocol_or_vault_url` = forum post | Weak | Forum is the primary write-up. Vault: https://app.morpho.org/ethereum/vault/0x4881Ef0BF6d2365D3dd6499ccd7532bcdBCE0658/gauntlet-lrt-core |
| rsETH `usd_lost: 0` | Curator **CLAIM** in a number field | Grok already says no third-party reconstitution. Field should be **unknown** (Gauntlet published zero) |
| Apr 19 LinkedIn “no exposure to rsETH” vs Apr 23 “~10 rsETH + 0.48 ETH” | Grok used the later post-mortem (correct) | Flag the 19 Apr line as superseded, not as a Grok error |
| “No material Euler-vault curator incidents sourced” | Too strong | No Euler *loss* row found. **Ops:** Euler DAO sunset 10 Apr 2026, Gauntlet handover 28 Apr. **Related:** Arbitrum Earn USDC “pending Resolv resolution”; Euler Labs paused RLP on Yield 22 Mar. Gauntlet also recommended **against** USR on Euler Prime/Yield (7 Aug 2025) then still listed it on Morpho Core/Frontier |

---

## 3) Unverified / CLAIM (do not paste as FACT)

- **~$6.2M Morpho post-exploit allocator flow, ~96% Gauntlet** — Grok correctly tagged CLAIM (Chaos/OAK/Four Pillars/Rekt). Do not put in `usd_lost`.
- **~90 min Gauntlet auto-supply from ~02:41 UTC** — commentary (Triana/Rekt/Goldberg), not a Gauntlet timestamp.
- **Public Allocator vs V1 donation `supply(onBehalf)`** — Grok only tells the allocator story. Morpho docs: zero cap does **not** stop donation while a rich-oracle market stays on the withdrawal queue ([security considerations](https://docs.morpho.org/curate/concepts/security-considerations/)). OAK/Rekt: two phases. Exclusive “allocator did it” is **CLAIM**.
- **26 Mar Base USDC Core + Mainnet Frontier V2 “no bad debt” after deallocate** — Grok **FACT** as Gauntlet tweet; not independently reconstituted.
- **Frontier/Seamless Merkl claimability as of 2026-09-15** and recovery ratio vs socialized loss — unknown.
- **Steakhouse 17 Mar Resolv memo** — Grok did **not** wrongly attribute it to Gauntlet (good). Galborta still does; ignore that mix-up.

---

## 4) Missing (add in `merged.md`)

Grok searched Stream/xUSD and treated Compound deUSD as out of scope, then **did not write Morpho curator rows** for:

1. **GAUNTLET-20250109-USD0** — Usual USD0++ floor change; hardcoded ~$1 Morpho oracles; nine txs 21:46 9 Jan → 04:02 10 Jan; Gauntlet says $0 insolvency. They had listed USD0/USD0++ in USDC Balanced. Insider-timing **RUMOR** ($43M is media, not VaultBook). Recast 2026-09-16 (v3): Class=`non-materially-affected`, Type=`collateral`, Severity=`indirect-curator-fault` (chose the asset; $0 insolvent debt). Oracle path still belongs in prose.
2. **GAUNTLET-20250221-BYBIT** — VaultBook: $28.9M realloc off PT-sUSDE/PT-USDe they had listed; internal Safe hash check. $0 bad debt. Recast 2026-09-16 (v3): Class=`non-materially-affected`, Type=`collateral`, Severity=`indirect-curator-fault` (listed Ethena-touching collateral, no insolvent debt — not ops).
3. **GAUNTLET-20251104-STREAM** — Gauntlet: $0 Stream/xUSD/deUSD in Morpho vaults **and** Balanced/Frontier withdrawable liquidity **<1% for ~6 hours**. Research note only; later **not indirect-curator-fault** (no realloc/pause).
4. **GAUNTLET-20260410-EULER** — DAO sunset + Gauntlet 28 Apr handover. Not a hack; ends Euler curator mandate. Arbitrum Earn still tied to Resolv.
5. Partner vault **app URLs** (Resolv USDC, Extrafi, Seamless) — Grok named ExtraFi/Seamless dollars, not contracts.
6. Resolv **primary** post-mortem: https://resolv.xyz/blog/resolv-postmortem-march-22-2026-incident (Grok used X + commentary only).
7. **VaultBook still omits Resolv** on the market-volatility page (as of this research). Staking Rewards: no detailed curator post-mortem within a month of Resolv.

---

## 5) What to add/change in long-form

- Keep Grok incident IDs for the three Desktop blocks (`EZETH`, `RESOLVUSR`, `RSETH`) so the sheet can match Grok.
- Title 1–2 words: `ezETH`, `Resolv`, `rsETH` (Grok’s “ezETH insolvency” / “Resolv USR” / “rsETH mint” are legal but longer than needed).
- Resolv: `type: oracle`, `status: unresolved`, `usd_lost: unknown`, `funds_recovered: partial`.
- rsETH: `usd_lost: unknown` not `0`.
- Insert USD0++, Bybit, Euler in date order. Stream later dropped (no realloc/pause — non-exposure is not indirect-curator-fault). USD0++ and Bybit later recast to non-materially-affected **indirect-curator-fault** (listed collateral, $0 insolvent debt).
- Lessons: Grok is right that rsETH reused **Prime-off-young-LRT + cap-to-zero**. Grok is incomplete on **hardcoded $1 wrappers**: USD0++ (exit, $0) → Resolv (High). VaultBook oracle FAQ after Resolv still documents that design (Grok standing check — keep).
- `lesson_applied_later` on Resolv: Grok `yes` via rsETH is only half. Merged: **unclear** for the allocator/oracle lesson; **yes** for “don’t put young LRTs in Prime.”

---

## 6) Sources Grok cited vs prefer

**Use:** Morpho forum 578; VaultBook volatility; Chaos Labs 23 Mar 2026; Gauntlet Merkl tweet (Grok `2062185818698223704`); Compound 7772 quote of 23 Apr rsETH post-mortem; Morpho app Core `0x8eB67A509616cd6A7c1B3c8C21D48FF57df3d458`.

**Add:** Resolv post-mortem; Morpho curator security (donation); Euler forum [1828](https://forum.euler.finance/t/sunsetting-of-dao-managed-market-and-vaults/1828); Gauntlet [Nov 2025 Stream report](https://www.gauntlet.xyz/resources/market-report-liquidity-stress-period-nov-2025); USD0++ VaultBook + https://x.com/gauntlet_xyz/status/1877825680756613372.

**Commentary only:** OAK, Four Pillars, The Defiant, Rekt, Galborta. Grok’s Chaos Labs URL is the best allocator-tally primary-adjacent source.

## Taxonomy applied 2026-09-16 (Class v3)

v3: Prec was renamed Indirect. v4: that bucket is `indirect-curator-fault`.

- **Keep as affected:** `EZETH` Low; `RESOLVUSR` High.
- **Recast to non-materially-affected indirect-curator-fault, Type=`collateral`:** `USD0` and `BYBIT` (chose Usual / Ethena-touching PTs; $0 insolvent debt — not ops).
- **Keep as non-materially-affected indirect-curator-fault, Type=`collateral`:** `RSETH` (was Prec; Grok/merged had ops — rsETH listing/DD, not process/website/DNS). Count `1H 0M 1L 0D 3I`.
- **Not on Events tab:** `GAUNTLET-20251104-STREAM` (zero xUSD; market report only — non-exposure is not indirect-curator-fault); `GAUNTLET-20260410-EULER` (DAO sunset / handover). Do not paste Euler handover as an Events-tab row.
