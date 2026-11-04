The code in this folder is under the MIT License. See [../LICENSE](../LICENSE). Copyright 2026 marcusm4ximus. The incident text in the parent folders is an educational record curated by marcusm4ximus. That record is not part of the MIT grant.

# Risk Curator Record

A static registry of curator incidents. Pages live under `/riskcuratorrecord`.

The site reads each curator `merged.md` in the parent folder, the prose in `data/plain-events.json`, and display names in `data/curators.json`. Keep that layout beside this folder when you install or build. After the build, `out/` is self-contained.

## Run locally

1. Install Node.js 20 or newer.
2. Open a terminal in this folder.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open http://127.0.0.1:38471/riskcuratorrecord/

The dev server listens on port 38471.

## Deploy

1. In this folder, run `npm install` if you have not already.
2. Run `npm run build`.
3. The static files are written to `out/`.
4. Upload the contents of `out/` into a directory named `riskcuratorrecord` on the host, so the site is served at https://marcusm4ximus.xyz/riskcuratorrecord . If the host does not use a folder of that name, configure it to serve this app at the path `/riskcuratorrecord`.
5. Open https://marcusm4ximus.xyz/riskcuratorrecord and check the curator list, an event, and the info page.

Upload `out/`, not `node_modules`.
