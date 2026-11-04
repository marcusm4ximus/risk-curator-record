---
cursor:
  subagentId: "bc-029d35d2-73d7-507b-9a2b-92db40bf7d49"
---

# Clearstar — Grok vs reality

**As of:** 2026-09-15  
**Grok paste:** `/cursor/stores/bc-ed376285-88c8-478c-b177-6340e8173377/docs/curator-dd/clearstar/twitter-grok.md` (ingest: byte-identical to Desktop). Four INCIDENT blocks: CUSDO Oracle 2025-05-25, Resolv RLP 2026-03-22, Oracle Truncation 2026-07-16, Re Oracle 2026-08-25. Independent Morpho/Euler/X/Basescan/forum check against the same curator.

**Grok did well on the job that matters:** four dated incidents, no invented Resolv USD-lost or TVL-%, Stream/xUSD kept off the loss list, post-mortem USD inconsistency flagged, Re already `status: disputed`.

Do not invent `usd_lost` or `pct_of_that_vault_tvl`. Labels: **FACT** / **CLAIM** / **RUMOR**.

---

## 1) Keep (Grok matches primary sources)

| Grok | Verdict |
|---|---|
| IDs `CLEARSTAR-20250525-CUSDOORACLE` / `CLEARSTAR-20260322-RESOLVRLP` / `CLEARSTAR-20260716-ORACLETRUNC` / `CLEARSTAR-20260825-REORACLE` | Keep. One dated incident per block. |
| CUSDO: 25 May 2025 **23:29 UTC**, Aerodrome cUSDO/USDC sAMM LP oracle, OpenEden USDC vault, flash-loan reserve distortion + hardcoded USDO=$1 | **FACT** — [Morpho forum 1794](https://forum.morpho.org/t/post-mortem-aerodrome-cusdo-usdc-amm-lp-oracle-manipulation-on-morpho-lending-market/1794). Attack tx [0xd8c4f742…](https://basescan.org/tx/0xd8c4f742e223735abdc4ee7df0c0d608430d04ac0d4e696f7b6d48a2e56ca2ba) |
| CUSDO `usd_lost: 49303`, type `oracle`, severity Med, `status: resolved`, `funds_recovered: full`, `pct` unknown | Keep the headline **49303**. Curator text: **49,303.14 USDC** fully compensated. Coverage tx deposits **49,304 USDC** ([0x9a758592…](https://basescan.org/tx/0x9a75859269b437c633e3958b8d6af04942dc53d087f212fa5499edd27bcea02e)). |
| CUSDO post-mortem also says “~48k” and writes a walkthrough total of **40,303.47** | **FACT** that the post is internally inconsistent. Independent arithmetic on the same steps: 72,242.78 + 11,541.64 − 34,480.95 = **49,303.47** — so 40,303.47 is almost certainly a typo, not a second loss. Do not mint a second row. |
| Resolv: 22 Mar 2026; ~80m unbacked USR; RLP illiquid; type `collateral`; `usd_lost: unknown`; `pct: unknown`; `funds_recovered: partial` | **FACT** as curator-scoped event. Keep unknown dollars. |
| 23 Mar exposure table: ETH Yield **1,000,652** direct RLP; ETH Reactor **≈294,100** via mAPOLLO/PT-mAPOLLO; Base Reactor **≈91,780** via yoUSD; Arb HY **4,320** direct RLP | **FACT** as curator-stated exposure — [tweet 2036020661911503182](https://x.com/ClearstarLabs/status/2036020661911503182). Not realized loss. |
| Chaos Labs ~$1.00M Yield+Reactor; Sentora “under $1M”; Spearmint ~$2M V2 stuck / ~$1M write-off tagged CLAIM | Correct split. Chaos: [2036145976952365218](https://x.com/chaoslabs/status/2036145976952365218). Spearmint: [2036358837658431586](https://x.com/0xSpearmint/status/2036358837658431586). |
| Oracle truncation: 16 Jul 2026; 1 share vs 10,000; 1.04→1; &lt;1→0; free seizure; `usd_lost: 0`; unnamed market; CLAIM it was a Clearstar-managed vault | **FACT** mechanism + curator “nobody lost money.” Keep the CLAIM. Thread starts [2077740784263299463](https://x.com/ClearstarLabs/status/2077740784263299463). |
| Re: 25 Aug 2026; PT-reUSD oracle manip; vault `0xD1E9242e…`; `status: disputed`; DCW ~$37m is loop liquidations not vault loss | Keep **disputed**. Grok already refused a clean resolved/zero-loss sheet row except in the number fields (see Wrong). DCW: [2092123224637112681](https://x.com/deficrimewatch/status/2092123224637112681). Clearstar: [2092134333976830231](https://x.com/ClearstarLabs/status/2092134333976830231). |
| Standing: risk docs **active**; active since **2025-03**; PoC **X: @ClearstarLabs**; no new incident after 2026-08-25 through 2026-09-15; lesson-repeat **yes** (non-spot + optimistic pricing) | **FACT** on dates/docs/handle/window. Lesson-repeat is reasonable **CLAIM**. |
| Stream/xUSD not a Clearstar loss row; no Euler-specific Clearstar **loss** sourced | Correct scope. |

---

## 2) Wrong (change)

| Grok | Label | Fix |
|---|---|---|
| Resolv `status: resolved` | **WRONG** / too clean | Merkl USDC was announced 23 Jun 2026 ([2069493588405203389](https://x.com/ClearstarLabs/status/2069493588405203389)). As of **2026-09-15** ETH V2 Yield `0xFa17f7AAdbfAc2C5d3C8125555404c1AE17Df853` still has **$0 withdrawable liquidity**, Morpho warning `low_liquidity` + `not_whitelisted`, ~$557k `totalAssetsUsd` sitting in one adapter. Use **disputed**. |
| Re `usd_lost: 0` and `pct_of_that_vault_tvl: 0` | Curator **CLAIM** in number fields | Clearstar tweet: share price not affected / no bad debt from liquidations. Independent share-price reconstruction **not** done. Fields → **unknown**. Status stays **disputed** (Grok already had that). |
| CUSDO `protocol_or_vault_url` = forum post-mortem | Weak | Forum is the write-up. Vault (now **Clearstar USDC Reactor** on Base): https://app.morpho.org/base/vault/0x1D3b1Cd0a0f242d598834b3F2d126dC6bd774657/clearstar-usdc-reactor |
| Resolv `protocol_or_vault_url` = curator homepage | Weak | Primary exposed vault: https://app.morpho.org/ethereum/vault/0x9B5E92fd227876b4C07a8c02367E2CB23c639DfA/clearstar-yield-usdc |
| Morpho V2 “no Disclosure” example: “Clearstar Yield USDC / Boring USDC on Base” | **WRONG example** | Base Boring USDC V2 **`0x0282159ecCaabA941bD1f4C518944D8fDCdc0681`** is a live Clearstar V2 vault (NovaFusion SA disclosure on the Morpho UI in the research pass). The clean gap is **ETH V2 Yield** `0xFa17f7…` (`not_whitelisted` + `$0` liquidity). Base V1 Boring `0x43e623Ff7D14d5b105F7bE9c488F36dbF11D1F46` is a separate tiny V1 vault. |
| First Resolv tweet’s $50M-for-~$100k sketch if copied as event size | Incomplete (Grok’s *narrative* used ~80m — good) | Keep ~80m as industry **CLAIM**/coverage figure. Do not paste the 22 Mar sketch as FACT. [2035627098551746751](https://x.com/ClearstarLabs/status/2035627098551746751) |

---

## 3) Unverified / CLAIM (do not paste as FACT)

- **`@0xGuzzla` as team/comms** — Grok standing check. Not independently verified this pass. PoC stays `@ClearstarLabs`.
- **Merkl tranche $ size**, pro-rata formula, and later **RESOLV token** unlocks — Grok states V1 `0x9B5E92…` and V2 `0xFa17f7…` as the campaign vaults. The 23 Jun fxtwitter/X text truncates at “Morpho V1 - Clearstar”. Treat addresses as Grok **CLAIM** until the rest of that tweet is recovered. Tranche dollars **unknown**.
- **Spearmint ~$2M V2 stuck / ~$1M queued write-off** — CLAIM. `forceDeallocate` still working is Spearmint/juan.hl, not a Clearstar primary.
- **Chaos ~$1.00M** — FACT that Chaos published it; **CLAIM** as crystallized loss.
- **Oracle-truncation market was a Clearstar-curated vault** vs advisory review — Grok already CLAIM. Market still unnamed. 90% unwind / “did not go public to avoid a bank run” is curator-stated.
- **Re ~$37m loops**, wallet `0x854e3f3b521dbae34cb111ebef0dce41d8b5690d` — DCW CLAIM.
- **Stream “no exposure” 4 Nov 2025** — Grok. Protos 6 Nov 2025 said Clearstar “**(mostly)**” unexposed. Primary tweet not independently fetched. Not a loss incident either way.
- **HypurrFi handoff** — Grok searched it; not independently researched. No loss row.
- **Public Allocator / V1 donation** as a Clearstar-specific attack — Morpho docs warn zero cap ≠ safe ([security considerations](https://docs.morpho.org/curate/concepts/security-considerations/)). No primary that it hit Clearstar. Do not mint an incident.
- **Derived ≈1.34%** of OpenEden/Reactor `totalAssets` at coverage (`UpdateLastTotalAssets` 3,675,194.81 USDC vs 49,304) — not curator-published. Field stays **unknown**.

---

## 4) Missing (add in `merged.md`, not as extra loss incidents)

1. Operator **NovaFusion SA**; site https://www.clearstar.xyz/; contact `info@clearstar.xyz`.
2. Curator addresses: `0x30988479C2E6a03E7fB65138b94762D41a733458` (main), also `0x5634520dd1C044fD8E589A7113C2d8f8f279fc24`, `0x72882eb5D27C7088DFA6DDE941DD42e5d184F0ef`, `0xb3CF59A5f12cA319861376C5e63Eef4790a42B44`.
3. Vault inventory + Morpho app URLs (V1 OpenEden→Reactor rename; ETH V2 Yield illiquid; Re Ecosystem V2; Base Boring V2 full address).
4. CUSDO **attack + coverage txs**, flashloan **6,666,666.67 USDC**, borrower `0xE11…` / helper `0x8F5…` from the post-mortem high-level summary.
5. ETH V2 Yield still **$0 liquidity** on 2026-09-15 (API `liquidityUsd: 0`, `totalAssetsUsd` ~$557k).
6. Euler Horizon USR/wstUSR/RLP **configuration** (Horizon USDC `0x9f936cD7bC9c7aA90Bbb27Ce1B961655434754cB`, peak ~$75k, ~0 by Feb 2026) — **not** a sourced loss.
7. Alterscope LRT cluster rebrand to Clearstar (Euler labels PR #600, 12 May 2026) — ops/label, not an incident.
8. Launch post [forum 1615](https://forum.morpho.org/t/announcing-clearstar-openeden-usdc-vault-exclusive-collaboration-boosted-rewards/1615) (Grok already cited it as a source; merged intro should use it).

**Do not add as incidents:** IPOR Fusion Jan 2026 ~$336k (different Arbitrum vault); yoUSD Looopeer IPOR Fusion −6.4% max DD on Trading Strategy without a primary dated Clearstar event; Stream/xUSD.

---

## 5) What to add/change in long-form

- Keep Grok’s four IDs and 1–2 word titles (`CUSDO Oracle`, `Resolv RLP`, `Oracle Truncation`, `Re Oracle`).
- Incident 1: vault URL; attack/coverage txs; `usd_lost: 49303`; `pct: unknown`; `funds_recovered: full`; note 49,304 on-chain and the 40,303.47 typo.
- Incident 2: `usd_lost: unknown`; `status: disputed`; `funds_recovered: partial`; quote 23 Mar table; do not sum exposures.
- Incident 3: keep `usd_lost: 0`; `pct: n/a`; unnamed URL = the thread; CLAIM on vault ownership.
- Incident 4: `usd_lost: unknown`; `pct: unknown`; `status: disputed`; keep Grok’s Re vault URL.
- Standing: NovaFusion SA; Guzzla as CLAIM; disclosure gap = ETH V2 Yield, not Base Boring; no fifth incident.

---

## 6) Sources Grok cited vs prefer

**Use:** Morpho forum 1794 + 1615; Clearstar X 22/23/24/30 Mar and 23 Jun 2026; truncation thread; Re listing 24 Jun 2026 + 25 Aug reply; DCW 25 Aug; Chaos + Spearmint as commentary; Morpho curator page.

**Add:** attack tx `0xd8c4f742…`; coverage tx `0x9a758592…`; Morpho vault URLs; NovaFusion SA / clearstar.xyz; Morpho GraphQL V1+V2 inventory.

**Commentary only:** Sentora Resolv digest; The Block 80m/~$25m extract; Rekt vault lists; Protos Stream “mostly” unexposed.

---

## Trap claims (do not paste into a sheet as facts)

| Claim | Why it is a trap |
| --- | --- |
| Resolv `usd_lost` = 1,000,652 or ~$1.39M sum of sleeves | Exposure ≠ realized loss. |
| Resolv `status: resolved` | Merkl announced; ETH V2 Yield still $0 liquidity. |
| Coverage = 40,303.47 or “~48k” as the canonical number | Headline 49,303.14; chain 49,304; 40,303.47 is almost certainly a typo of 49,303.47. |
| Derived 1.34% as `pct_of_that_vault_tvl` | Not curator-published. |
| Re `usd_lost: 0` | Curator tweet, not independent reconstruction. |
| Truncation was definitely a Clearstar-managed vault | Unnamed; Grok CLAIM. |
| Stream/xUSD was a Clearstar loss | Grok and Protos point the other way. |
| IPOR Fusion $336k = Clearstar | Different vault. |
| Euler Horizon USR/RLP = a dated Clearstar loss | Config + tiny TVL; no sourced loss event. |
| Base Boring V2 has no Morpho disclosure | Wrong example. ETH V2 Yield is the gap. |
| `@0xGuzzla` is confirmed Clearstar PoC | Unverified this pass. |
| Public Allocator / donation attack hit Clearstar | General Morpho V1 warning; not sourced here. |

## Taxonomy applied 2026-09-16 (Class v3)

- **Keep:** `CUSDOORACLE` affected **Med**; `RESOLVRLP` affected **High**; `ORACLETRUNC` / `REORACLE` non-materially-affected **direct-curator-fault** ($0 user money). Count `1H 1M 0L 2D 0I`.
