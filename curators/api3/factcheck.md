---
cursor:
  subagentId: "bc-dcd201d0-0225-52bc-9fd2-84c82556e16b"
---

# Api3 — Grok vs reality

**As of:** 2026-09-16  
**Grok paste:** real. Path `docs/curator-dd/api3/twitter-grok.md` (6,585 bytes). One `INCIDENT` block (`API3-20260626-UTILIZATION`) plus standing checks. Preamble is messy ingest text; the incident block is intact. This is **not** a “Grok missing” stub.

**Entity:** Folder slug `api3`. Public curator brand **Api3** / **API3 Foundation**. Morpho curator id `api3`. X `@Api3DAO`. Not found as an Euler Earn / EVK curator (Ethereum `products.json` has **zero** `api3` hits). Yearn OEV-boosted Morpho vaults (forum 1833, 2025-06-16) used Api3 *oracles* under **Yearn** curation — Grok correctly scoped those out.

**ID prefix:** `API3`. Grok already used `API3-20260626-UTILIZATION`. Keep.

**How this was checked:** Morpho app + GraphQL + REST (`api.morpho.org` v0 config / v1 state), DefiLlama yields chart `58c04b13-6220-4122-9fa9-6845058f1d71` and protocol page, `docs.api3.org/curation/` (overview, roles, risk, disclosure), Morpho forum JSON (2111, 2134), fxtwitter for tweet `2070469565805727890`, Trading Strategy vault page, CryptoBriefing AlphaPing/msY (2026-06-20), Euler labels, dCOMP GitHub. No Morpho/Euler MCP. Live TVL/allocations are **2026-09-16** snapshots.

**Do not copy a USD-lost or TVL-% into the sheet.** Grok left both `unknown`. Independent pass agrees. The June AUM drop (~10.43M → ~7.42M) is withdrawals, not a share-price hole.

---

## 1) Wrong or easy-to-get-wrong

| Item | Grok | Reality |
|---|---|---|
| `curator: api3` | lowercase slug | Sheet name is **Api3**. Keep `incident_id` prefix `API3`. |
| `protocol_or_vault_url` without slug | Weak | Live V2 page: https://app.morpho.org/ethereum/vault/0x36cfe1568461E499391ef0A555300F1ae2da2439/api3-dcomp-usdc |
| Trading Strategy URL `tradingstrategy.ai/trading-view/vaults/api3-dcomp-usdc-2` | **WRONG path** | Live: https://tradingstrategy.ai/vaults/api3-dcomp-usdc-2 |
| “Seven-tweet thread” as if fully opened | **UNVERIFIED count** | Independently opened **only tweet 1/🧵** ([2070469565805727890](https://x.com/Api3DAO/status/2070469565805727890), Fri Jun 26 11:29:46 UTC 2026, Typefully). That tweet **FACT**-states elevated APY, **100% utilization**, liquidity event *outside* the vault, “working as designed.” fxtwitter `replies: 4`. Tweets 2–7 (AlphaPing overlap, 80%, 4.7M / ~61%, COMP/dCOMP liquidatable, “will not withdraw”) were **not** retrieved this pass. Treat those lines as **CLAIM (Grok-cited Api3 thread)**, not independently verified primary. |
| `@morgan_defi` cited on the **same** tweet ID as Api3 | Same class of mix-up Gauntlet had | That snowflake is **@Api3DAO**. morgan_defi is a *reply* Grok did not separately ID. Keep as named reply **CLAIM** until the reply status is opened. |
| Docs dCOMP cap **10M USDC** as if still live | Stale if pasted as current | **FACT (Morpho app 2026-09-16):** dCOMP/USDC absolute cap **12M** USDC, 78.49% / 11.1M allocated, utilization **88.48%**. Docs overview still prints 10M. |
| “Indexer snapshot … maxDeposit=0 and maxRedeem=0” as FACT | **UNVERIFIED UI string** | No vaults.fyi/Morpho historical maxRedeem dump was retrieved. **Do** use DefiLlama’s 2026-06-24 print (below) as the TVL/APY primary. maxRedeem=0 stays **CLAIM**. |
| “10.43M peak” as a lifetime peak | **WRONG if used as all-time** | **FACT (Llama, week-of):** 2026-06-21 **$10,426,311**. Later lifetime high **$14,879,154** on 2026-07-17 (Trading Strategy peak 14,880,359 USDC). Grok’s 10.43M is the pre-crunch local peak, not all-time. |
| Standing “no sourced repeat of 100% util after June 2026” | Too clean | Llama **2026-07-12** instantaneous APY **50.60%** with TVL $12.02M (vs $12.83M the day before and $12.82M the day after). Looks like a **brief** util spike. No curator post. Do **not** invent a second incident row from APY alone. |
| Risk docs **active** with no caveat | Incomplete | Own-site docs **are** live (including a full [disclosure](https://docs.api3.org/curation/disclosure.html)). Morpho app on Core, dCOMP, and Purinta: **“Curator has not submitted a Disclosure.”** Score own-site **active**; Morpho widget **none**. |
| PoC `TG: @API3DAO` | Fine as handle | Official X profile: `t.me/API3DAO` and `discord.gg/api3dao`. Not a separate `@API3DAO` Telegram username lookup. |

---

## 2) Unverified / CLAIM (do not paste as FACT)

- **~80% of recent dCOMP withdrawals from wallets that also sat in frozen AlphaPing vaults.** Grok attributes this to the Api3 thread. Not reconstructed on-chain this pass. Timing is *consistent* (AlphaPing/msY **2026-06-20**; dCOMP TVL still rising through June 21, then dumping June 22–26) but overlap **% is CLAIM**.
- **Api3 still held ~4.7M USDC (~61% of TVL) and would not withdraw.** Internally consistent with Llama’s June 26 ~$7.42M print (4.7/7.42 ≈ 63%). **Not** independently wallet-matched. Live Morpho holders (2026-09-16): top depositor `0x8e03609ed680B237C7b6f8020472CA0687308b24` = **15.58% / 2.20M USDC**. That address is also the **performance-fee recipient** on every Ethereum V2 vault. Do not treat 15.58% as disproof of a June 61% treasury sleeve; do not paste 4.7M or 61% into money fields.
- **Collateral “COMP via dCOMP wrapper, liquidatable, no redemption queue.”** Directionally matches [docs](https://docs.api3.org/curation/) + [api3dao/dcomp](https://github.com/api3dao/dcomp) (ownable COMP wrapper, configurable delegatee, initially **whitelisted depositor**). “No redemption queue” is curator framing, not a tx-level reconstitution.
- **“Never misreported a data feed.”** Curator/oracle **CLAIM** ([risk-management](https://docs.api3.org/curation/risk-management.html), [security considerations](https://docs.api3.org/dapps/integration/security-considerations.html)). 2025 public write-ups are **integrator** bugs (future timestamps / decimal mismatch), not an Api3 Morpho-vault misprint. Pre-2025 AccessControlRegistry etc. remain out of this curator sheet (Grok was right).
- **KelpDAO commentary 2026-05-11.** Grok used it only as social positioning. This pass did **not** retrieve that tweet. Keep out of incident rows.
- **“Skin in the game / majority of treasury as primary supplier.”** Docs **CLAIM**. DefiLlama treasury **$17.95M** (2026-09-16) vs curator TVL **$18.25M** does not prove majority-of-vault-TVL.

---

## 3) What Grok got right (keep)

- **One dated curator event, not stacked.** June 26 ops / utilization. Type `ops`, severity Med, status `resolved`, `usd_lost: unknown`, `pct_of_that_vault_tvl: unknown`, `funds_recovered: n/a`. Correct.
- **Vault is Morpho V2 dCOMP USDC** `0x36cfe1568461E499391ef0A555300F1ae2da2439`. **FACT.** REST: curator `0x24DB7c6F689e480d6E5d45DaD400CC4456C832F0`, owner `0xBBE0dE9757F93e3306aDBfeBE906AB285EDD13DA`, 5% performance fee, 7-day timelock, creation block **24564769**.
- **100% utilization + elevated APY, framed as liquidity not impaired collateral.** Tweet 1 **FACT**. Independently: DefiLlama APY **51.80%** (2026-06-24), **62.48%** (06-25), **74.32%** (06-26 13:04 UTC, ~90 min after the tweet). Trading Strategy lifetime **max drawdown 0.0%**, last share price **1.051** USDC — consistent with no NAV write-down.
- **TVL path Grok’s indexer cited.** **FACT (Llama, not the missing maxRedeem snapshot):** 2026-06-21 **$10,426,311** → 06-22 $8.38M → 06-24 **$7,854,424** → 06-26 **$7,417,729**. Grok’s “~7.86M vs 10.43M peak” matches the 24th/21st prints.
- **AlphaPing is a different curator / collateral set.** **FACT** as isolation. CryptoBriefing 2026-06-20: AlphaPing AlphaUSDC Delta V2, msY (Main St Finance) −70% to −85%, ~$18M stuck at 100% util. Not an Api3 market. Do **not** put $18M on this sheet.
- **No primary USD principal loss / bad-debt figure.** Agree. Do not invent one.
- **By Sep 2026 the freeze is cleared.** **FACT.** Morpho 2026-09-16: deposits **$14.13M**, liquidity **$4.29M**, dCOMP market util **88.48%** (not 100%), REST `withdrawable_assets` **~2.53M USDC**. Llama 2026-09-16 ~$14.14M / ~7.3% APY.
- **Scope exclusions.** Stream/xUSD, Resolv/USR, Kelp/rsETH, DIA/IMF, Yearn-OEV, pre-2025 oracle-contract items — correctly not given Api3 *loss* rows. Euler: none.
- **Public vault set names.** Core, Kabu ETH/Base, dCOMP, Purinta ETH + Robinhood. Matches [docs](https://docs.api3.org/curation/) and [app.morpho.org/curator/api3](https://app.morpho.org/curator/api3).
- **Launch 2025-12-17 / active since 2025-12.** **FACT.** [Forum 2111](https://forum.morpho.org/t/introducing-api3-curated-vaults-on-morpho/2111) `2025-12-17T12:30:53Z` (`ugur_api3`). V1 Core created same day (`1765984247`).
- **`lesson_applied_later: unclear`** is the right *bucket* (see change below for the example).
- **Critics: no sourced loss/failure thread.** Agree. morgan_defi as cited is supportive, not a critic.

---

## 4) Missing from Grok (add in `merged.md`)

1. **DefiLlama daily series as the TVL/APY primary** for the crunch (chart pool `58c04b13-6220-4122-9fa9-6845058f1d71`), instead of an unrecovered indexer maxRedeem flag.
2. **Vault map with V2 addresses, owners, and live TVL** (Grok named products, not contracts). Include **V1 dust** so nobody pastes the wrong vault: V1 dCOMP `0xE6F0ce5394B3D15b4aB1216D84F544b8f38E4D69` (~$168), V1 Core `0xB3f4D94A209045Ef35661e657Db9ADAc584141f1` (dust), Base test `0x363Ab339d660504842A73C7EafD136BE2EfE9F9a` (2025-05-13, ~$1).
3. **Live dCOMP book ≠ docs table:** 78% dCOMP / 18% wstETH adapter / **4% cbBTC**; dCOMP cap **12M** not 10M; metadata explicitly “**concentrated single-borrower**” COMP wrapper.
4. **dCOMP wrapper mechanics** ([github.com/api3dao/dcomp](https://github.com/api3dao/dcomp), created 2026-02-20): owner can reassign COMP delegatee; deploy script has `WHITELISTED_DEPOSITOR`. Governance-amplification is a **standing** risk, not a dated incident.
5. **Docs vs Morpho disclosure widget.** Full [disclosure.html](https://docs.api3.org/curation/disclosure.html) exists (no backstop, liquidity risk, oracle can fail). Morpho UI still “has not submitted a Disclosure.”
6. **Kabu launch 2026-01-14** ([forum 2134](https://forum.morpho.org/t/introducing-kabu-usdc-expanding-collateral-options-on-morpho/2134)) and later EIGEN/ONDO/SYRUP/FLUID listing posts — launches, not incidents. Morpho curator UI **Kabu USDC V2 “+3” exposure** is a live warning, not a dated loss.
7. **Purinta** Ethereum deployed ~**2026-05-22** (Morpho UI; REST creation block `25149499`); Robinhood chain id **4663**, ~$50k USDG, CASHCAT 38.5% LLTV. Meme-collateral standing risk, no sourced insolvency.
8. **Possible 2026-07-12 util spike** (Llama APY 50.6%) — standing-check only, no second `INCIDENT` unless a primary appears.
9. **DefiLlama curator TVL ~$18.25M** (ETH $16.88M + Base $1.37M; category rank ~25). Do not confuse with oracle **TVS $19.26M** (mostly Blast/Mantle/Sei, not these vaults).

---

## 5) What to add/change in the long-form (done in `merged.md`)

- Keep Grok’s `API3-20260626-UTILIZATION`. Title `Utilization`.
- Vault URL → Morpho V2 slug URL above.
- `usd_lost` / `%` stay **unknown**. Mention Llama AUM path and 0% drawdown in prose, not in those fields.
- Label AlphaPing 80% / 4.7M / 61% / maxRedeem=0 as **CLAIM**.
- `lesson_applied_later: no` + example: after the crunch they still run a dedicated single-borrower dCOMP book; live cap **12M > docs 10M**; top sleeve still ~78% dCOMP.
- Standing: risk docs **active** (own site) / Morpho disclosure **none**; active since **2025-12**; PoC X `@Api3DAO`, TG `t.me/API3DAO`; new incident since Grok’s June 26 row: **none sourced as a loss**; lesson repeat **unclear** (July 12 APY spike only).

No other material curator-vault loss row found as of 2026-09-16.

## Taxonomy applied 2026-09-16 (Class v3)

- **Keep (user override vs proposal remove):** `API3-20260626-UTILIZATION` Class=`non-materially-affected`, severity=`direct-curator-fault` (no user money; still a blotter event; utilization/ops working as designed). Count `0H 0M 0L 1D 0I`.
