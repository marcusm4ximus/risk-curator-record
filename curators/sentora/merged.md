---
cursor:
  subagentId: "bc-b819bc80-a2d7-52f3-b27e-19f61ddc29f1"
---

# Sentora, merged DD draft

Draft date: 2026-09-15. Combines `twitter-grok.md` (1 INCIDENT) with independent research. Edit before any Google Sheet paste.

Grok found **no sourced depositor-loss** on Sentora Morpho/Euler vaults. Independent search agrees. Events tab is empty (`0H 0M 0L 0N 0D 0I`). Stream halt and Resolv USR were research notes with no documented defensive action, so they are not events. Euler handover, flash crash, Elixir advisory, and Kelp essay are **not** Events-tab rows.

## Curator snapshot

Sentora = IntoTheBlock + Trident Digital merger **2025-05-06** (PR Newswire). Morpho curator `sentora`, verified; X [@SentoraHQ](https://x.com/SentoraHQ). CEO [@admff492](https://x.com/admff492); research/CTO voice [@jrdothoughts](https://x.com/jrdothoughts). First sourced curator vault: Euler RLUSD **2025-09-25**. Kamino PYUSD Sep 2025. First listed Morpho V2: Paypal USD Main **2025-12-16**. Owner on listed ETH V2 vaults: `0xe8C9C99EcaD0686A14A00d8521c572281E938008`.

### Listed Morpho V2 (live 2026-09-15)

| Vault | URL | Deployed | ~Deposits | Notes |
| --- | --- | --- | --- | --- |
| Paypal USD Main | [0xb576…9FB2](https://app.morpho.org/ethereum/vault/0xb576765fB15505433aF24FEe2c0325895C559FB2/paypal-usd-main) | 2025-12-16 | $412M PYUSD | GraphQL: ~1% management, 0% performance. sUSDe 91.5% LLTV ~$105M. Morpho: no disclosure submitted. |
| Sentora RLUSD Main | [0x6dC5…e6bf](https://app.morpho.org/ethereum/vault/0x6dC58a0FdfC8D694e571DC59B9A52EEEa780E6bf/sentora-rlusd-main) | 2026-03-04 | $397M RLUSD | 10% performance. FXRP 77% LLTV ~$6.4M. |
| Sentora PRIME Main | [0xC21b…8BbD](https://app.morpho.org/ethereum/vault/0xC21b08C16458202593D4D9B26b9984Ee67b38BbD/sentora-prime-main) | 2026-05-08 | $194M PYUSD | 15% perf. ~98% PRIME 86% LLTV. |
| Sentora Huma PST Main | [0x8381…5D9](https://app.morpho.org/ethereum/vault/0x8381a156958711E230f325428B5eb4b6555C75D9/sentora-huma-pst-main) | 2026-08-14 | $43M PYUSD | 15% perf. ~100% PST 86% LLTV, ~0 idle. Own review said “low LTV.” |
| Sentora mWIN Main | [0x7cBc…6B57](https://app.morpho.org/ethereum/vault/0x7cBcfc4F64be199eDE6db1D916ddcdb69f666B57/sentora-mwin-main) | 2026-07-31 | $25M PYUSD | 15% perf. ~99% mWIN 77% LLTV, ~97% util. |
| Sentora pathUSD | [0x9a04…a626](https://app.morpho.org/tempo/vault/0x9a044AE05E5e6290DcF56afd69548565e957a626/sentora-pathusd) Tempo | 2026-05-06 | $36M pathUSD | cbBTC per launch post. |

Curator: [app.morpho.org/curator/sentora](https://app.morpho.org/curator/sentora).

Euler (pre-handover names): PYUSD cluster `0xba98fC35C9dfd69178AD5dcE9FA29c64554783b5` ([app](https://app.euler.finance/vault/0xba98fC35C9dfd69178AD5dcE9FA29c64554783b5?network=ethereum)); RLUSD `0xaF5372792a29dC6b296d6FFD4AA3386aff8f9BB2`. Kamino Sentora PYUSD: [kamino.com/lend/sentora-pyusd](https://kamino.com/lend/sentora-pyusd). Kamino Sentora PRIME looping: 5x–10x per Sentora Prime review, separate from Morpho PRIME Main.

## Not on Events tab
- `SENTORA-20251010-FLASHCRASH`, Market-wide liquidation day; Paypal USD Main not even deployed.
- `SENTORA-20251104-STREAM`, Not on Stream loss lists; no vault pause. Non-exposure or an advisory alone is not an event.
- `SENTORA-20251106-ELIXIR`, Advisory-client unwind, explicitly not a Morpho/Euler vault haircut.
- `SENTORA-20260322-RESOLV`, Not in the ~15 vaults; live books have no USR; market-incident report with no action. Not an event.
- `SENTORA-20260418-KELP`, Ecosystem essay; does not claim no Sentora rsETH. Unrelated contagion.
- `SENTORA-20260904-EULERHANDOVER`, Curation transfer; depositors need take no action. Routine ops.

## STANDING CHECKS (2026-09-15)

**Events (H/M/L/N/D/I):** `0H 0M 0L 0N 0D 0I`

**Risk docs:** active on Sentora’s site, **none** on Morpho’s disclosure form.

- Framework: https://sentora.com/research/articles/how-sentora-manages-risk-in-defi (13 Nov 2025)
- Radar: https://defirisk.sentora.com/ and /pulse
- GitBook: https://resources.vaults.sentora.com/vault-details-and-risk-reports/vault-risk-reports.md
- Asset reviews: Huma, Prime/Figure, Maple, mWIN
- Morpho listed V2 vaults: “Curator has not submitted a Disclosure.” Grok’s “Morpho Risk tabs exist” is the product UI, not a curator memo archive.

**Active since:** 2025-09 (first sourced Euler RLUSD vault). Firm formed 2025-05. Morpho intro 2025-12. Grok’s 2025-05 is the merger, not first curation.

**PoC:** X [@SentoraHQ](https://x.com/SentoraHQ); CEO [@admff492](https://x.com/admff492); [@jrdothoughts](https://x.com/jrdothoughts). TG legacy [@intotheblock](https://t.me/intotheblock). Web https://sentora.com/contact. Radar https://defirisk.sentora.com/

**Any new incident since Grok:** Grok is all-time through 2026-09-15. No depositor-loss event. Euler handover is off the Events tab (routine ops).

**Whether a past lesson showed up again:** Avoidance, not a repeat haircut. After Stream/Resolv, live listed Morpho vaults still have no xUSD/USR. Residual: RWA underwriting (PRIME HELOC extension, Huma related-party/internal oracle, mWIN NAV). The Defiant **2026-08-06**: Sentora’s mWIN/PYUSD market held **~86% of then-outstanding mWIN** (57.13 tokens), risk flag, not a loss. aixbt 8 Mar 2026 PYUSD “single point of failure” remains **CLAIM**, not a Sentora vault loss. High-LLTV sUSDe on Paypal USD Main is the closest “same class as USR/xUSD” leftover.

**CLEAN IF EMPTY (losses):** No material exploit, oracle break, collateral default, or proven vault USD lost as of 2026-09-15. Sheet count **`0H 0M 0L 0D 0I`**.
