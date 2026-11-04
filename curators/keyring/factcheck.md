---
cursor:
  subagentId: "bc-878ecf91-2bd1-546c-8e38-7b2577f4e1f6"
---

# Keyring - Grok vs reality

**As of:** 2026-09-25
**Grok paste:** Desktop `keyring/twitter-grok.md`. One INCIDENT: Elixir, 2025-11-04, severity High, usd_lost unknown.
**Not Keyrock.**

## Verdict

Keep one row. The listing tweets are real. The haircut size is one depositor’s claim. Class `affected`, severity **High**, status **disputed**. `usd_lost` stays **unknown**. Do not paste “half” as a percent. Do not paste Elixir’s later ~80% portal as Keyring recovery.

## 1) Keep

| Grok | Verdict |
|---|---|
| Keyring Network `@KeyringNetwork` is the Euler zkVerified curator, not Keyrock on Morpho | **FACT** |
| 2025-10-27 deUSD vault on Avalanche Euler, marketed with Elixir | **FACT**. Tweet `1982892478249480311`: “A new deUSD vault is now live on @avax via @eulerfinance” |
| 2025-10-31: lend deUSD, borrow against sdeUSD plus AVAX-native assets | **FACT**. Tweet `1984241663871762544` lists BTC.b, wETH.e, sAVAX, wAVAX, sdeUSD, and “Lend deUSD with @Elixir” |
| Stream 4 Nov 2025, about $93M, Elixir then freezes and sunsets deUSD | **FACT** (The Block and Elixir). Not a Keyring P&L |
| Euler Labs: losses isolated to curator vaults that listed those assets; curators chose oracles, collateral, and liquidations | **FACT** as Euler’s 19 Nov 2025 forum reply. Euler also says there was no protocol-level liquidation or oracle failure, which cuts against the depositor’s “Euler integration broke” line |
| Forum depositor: enormous haircuts, deUSD added days before, Elixir liquidation integration turned off | **CLAIM**. Author is `@keyringdepositor`, 13 Nov 2025, on the compensation thread. “Half (or more, TBD)” is explicitly unfinished. Not a loss table |
| No Keyring loss table on X, docs, or that thread | **FACT** |
| May 2025 Avalanche deUSD oracle spike is not Keyring | **FACT** as scope. That event is the K3/Re7 window. Keyring’s deUSD ads are 27-31 Oct 2025. Do not add a row |
| Later book is the Ethereum institutional cluster (mGLOBAL, NGI+), not a second deUSD listing | **Keep as Grok.** Live TVL figures ($2.68M, $6.2M, 0.0% drawdown) were not re-fetched. The 0.0% drawdown field is not a Stream-era audit |
| Risk docs: active as product papers, not a vault loss memo. PoC X @KeyringNetwork, TG @keyring_network / @KeyringNetworkAssist | **Keep Grok’s handles.** Docs pages were not re-opened |
| Active since 2025-08 official zkVerified launch; forum post 2025-05 | **Keep.** Press for the Avalanche markets is June 2025 (“launching”). The deUSD vault post is October |

## 2) Wrong or too clean

| Grok | Label | Fix |
|---|---|---|
| “No Keyring incident post” / silent curator | Too broad | `@KeyringNetwork` posted on the same Euler thread (13 Nov 2025, discourse post 18). The text is a general objection to treasury “smash-and-grab” compensation. It is not a vault loss disclosure and it does not deny the depositor’s haircut. Say that, not “no post” |
| “Unnamed” depositor, “post 27” | Close | The handle is `@keyringdepositor`. Grok’s post number was not re-counted. The text matches |
| Severity High with no Class | Incomplete | Class `affected` because the depositor describes a haircut on this vault after a listing Keyring itself advertised. Status stays **disputed** because Euler says the protocol worked and no one published a number. High is this vault’s alleged impact, not Stream’s $93M. If a later source shows a small haircut, downgrade. Do not invent the dollars |
| Elixir March 2026 ~80% portal covers Keyring | Grok already marks this unconfirmed | Keep unconfirmed. `funds_recovered: none` means no Keyring-specific recovery was published |

## 3) What to add or change

- ID stays `KEYRING-20251104-ELIXIR`. Title `Elixir`. Type `collateral`.
- usd_lost unknown. pct unknown.
- Events: `1H 0M 0L 0D 0I 0A`.
- Allegations: none. Laser Digital as later risk governor is a 2026 product shift, not a related-party credit event.
