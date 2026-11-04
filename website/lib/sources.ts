import type { EventSource } from "./types";

const HOST_LABELS: Record<string, string> = {
  "x.com": "X",
  "twitter.com": "X",
  "app.morpho.org": "Morpho",
  "forum.morpho.org": "Morpho forum",
  "docs.morpho.org": "Morpho docs",
  "legacy.morpho.org": "Morpho",
  "api.morpho.org": "Morpho",
  "protos.com": "Protos",
  "app.euler.finance": "Euler",
  "forum.euler.finance": "Euler forum",
  "tradingstrategy.ai": "Trading Strategy",
  "app.lagoon.finance": "Lagoon",
  "etherscan.io": "Etherscan",
  "basescan.org": "Basescan",
  "snowscan.xyz": "Snowscan",
  "plasmascan.to": "Plasmascan",
  "forum.moonwell.fi": "Moonwell forum",
  "www.coindesk.com": "CoinDesk",
  "coindesk.com": "CoinDesk",
  "thedefiant.io": "The Defiant",
  "www.thedefiant.io": "The Defiant",
  "www.theblock.co": "The Block",
  "theblock.co": "The Block",
  "vaultbook.gauntlet.xyz": "Gauntlet",
  "github.com": "GitHub",
  "oakresearch.io": "Oak Research",
  "chaoslabs.xyz": "Chaos Labs",
  "docs.vesu.xyz": "Vesu docs",
  "forum.arbitrum.foundation": "Arbitrum forum",
  "kitchen.steakhouse.financial": "Steakhouse",
  "app.steakhouse.financial": "Steakhouse",
  "resolv.xyz": "Resolv",
  "www.linkedin.com": "LinkedIn",
  "www.bankless.com": "Bankless",
  "www.panewslab.com": "PANews",
  "www.panews.io": "PANews",
  "blog.summer.fi": "Summer.fi",
  "research.4pillars.io": "Four Pillars",
  "cryptobriefing.com": "Crypto Briefing",
  "silofinance.medium.com": "Silo",
  "www.pragma.build": "Pragma",
  "blockworks.co": "Blockworks",
  "dune.com": "Dune",
  "www.dune.com": "Dune",
  "www.dlnews.com": "DL News",
  "www.chaincatcher.com": "ChainCatcher",
  "blog.lista.org": "Lista",
  "curation.yearn.fi": "Yearn",
  "www.chainsecurity.com": "ChainSecurity",
  "reports.chainsecurity.com": "ChainSecurity",
  "rekt.news": "Rekt",
  "www.webacy.com": "Webacy",
  "depeg-monitor.webacy.co": "Webacy",
  "r.xyz": "R",
  "dropstab.com": "Dropstab",
  "crypto-economy.com": "Crypto Economy",
  "app.mudigital.net": "Mu Digital",
  "matrica.io": "Matrica",
  "yields.llama.fi": "DefiLlama",
  "docs.api3.org": "API3 docs",
  "blog.vaults.fyi": "Vaults.fyi",
  "app.vaults.fyi": "Vaults.fyi",
  "www.dtrinity.org": "dTRINITY",
  "decrypt.co": "Decrypt",
  "blog.credora.network": "Credora",
  "www.chainalysis.com": "Chainalysis",
  "armitage.wintermute.com": "Armitage",
  "avantgarde.finance": "Avantgarde",
  "gov.gitcoin.co": "Gitcoin",
  "sentora.com": "Sentora",
  "www.thebigwhale.io": "The Big Whale",
  "leviathannews.substack.com": "Leviathan News",
  "www.comp.xyz": "Compound",
  "pharos.watch": "Pharos",
  "t.me": "Telegram",
  "layerzero.network": "LayerZero",
  "unchainedcrypto.com": "Unchained",
  "www.the-edge.xyz": "The Edge",
  "www.hypernative.io": "Hypernative",
  "kpk.io": "kpk",
  "docs.kpk.io": "kpk docs",
  "discuss.ens.domains": "ENS forum",
  "governance.aave.com": "Aave governance",
  "miniapp.gate.com": "Gate",
  "www.bitget.com": "Bitget",
  "www.beosin.com": "Beosin",
  "app.upshift.finance": "Upshift",
  "www.certik.com": "CertiK",
  "hindenrank.com": "Hindenrank",
  "phemex.com": "Phemex",
  "nulltx.com": "NullTX",
  "telosc.com": "TelosC",
  "ultrayield.gitbook.io": "UltraYield docs",
  "kerneldao.com": "KernelDAO",
  "www.cryptotimes.io": "CryptoTimes",
};

function labelFor(host: string): string {
  const key = host.toLowerCase();
  if (HOST_LABELS[key]) return HOST_LABELS[key];
  const bare = key.replace(/^www\./, "");
  const name = bare.split(".")[0] ?? bare;
  return name ? name.charAt(0).toUpperCase() + name.slice(1) : bare;
}

export function eventSources(raw: string, vaultUrl: string): EventSource[] {
  const found = `${raw} ${vaultUrl}`.match(/https?:\/\/[^\s)>\]]+/g) ?? [];
  const out: EventSource[] = [];
  const seen = new Set<string>();
  for (const item of found) {
    const href = item.replace(/[.,;]+$/, "");
    let url: URL;
    try {
      url = new URL(href);
    } catch {
      continue;
    }
    if (/\/tx\/0x[a-fA-F0-9]{6,}/i.test(url.pathname)) continue;
    if (seen.has(url.href)) continue;
    seen.add(url.href);
    out.push({ href: url.href, label: labelFor(url.hostname) });
  }
  return out;
}
