# Security

## Supply chain (Mini Shai-Hulud and similar attacks)

This repository uses defenses against npm supply-chain worms such as **Mini Shai-Hulud** (TeamPCP), which compromise packages via CI OIDC token theft and malicious **install lifecycle scripts** (often pulling Bun and `router_init.js`).

### Consumer protections (this repo)

- **Frozen lockfile** — `pnpm-lock.yaml` is committed; CI uses `pnpm install --frozen-lockfile`.
- **Blocked install scripts** — only packages listed in `package.json` → `pnpm.onlyBuiltDependencies` may run `preinstall`/`postinstall` (currently `isolated-vm` for dev tooling).
- **Blocklist scan** — `pnpm run audit:supply-chain` checks the lockfile against `security/compromised-packages.json`.
- **Delayed updates** — `minimumReleaseAge` (24h) reduces exposure to freshly published malicious versions.
- **No exotic transitive deps** — `blockExoticSubdeps` blocks git/tarball transitive resolutions.

### If you may have installed a compromised package

Assume **all secrets on that machine/CI runner are compromised**. Rotate:

- npm tokens and OIDC trusted publishers
- GitHub PATs / App tokens
- Cloud provider keys, Vault tokens, kube credentials

Block egress to known IOC domains (DNS): `git-tanstack.com`, `filev2.getsession.org`, `seed1.getsession.org`, `api.masscan.cloud`.

Check for persistence artifacts: `.claude/router_runtime.js`, malicious `.vscode/tasks.json`, `pgmon.service`, `/tmp/transformers.pyz`.

### Maintainer / publish hardening

- Enable **npm 2FA** and configure **trusted publishing (OIDC)** for this package on npmjs.com.
- Releases use [`.github/workflows/release.yml`](.github/workflows/release.yml): frozen lockfile → blocklist scan → build → `npm publish --provenance`.
- Set `NPM_TOKEN` only as a fallback until OIDC trusted publishing is configured; prefer removing it once OIDC works.
- Never use `pull_request_target` with write permissions + checkout of untrusted PR code.
- Run `pnpm run audit:supply-chain` before release; `prepublishOnly` runs the same check locally.
- CI also runs **pnpm audit** and **OSV-Scanner** on the lockfile (see `supply-chain.yml`).
- Review Dependabot PRs before merge; avoid auto-merge without green CI.

### Blocklist maintenance

- Full Mini Shai-Hulud package list: `security/compromised-packages-blocklist.json` (172 packages).
- IOC strings and metadata: `security/compromised-packages.json`.
- After new advisories, update the blocklist JSON and run `pnpm run audit:supply-chain`.

### Reporting vulnerabilities

Email **red@4c.gg** or open a private security advisory on GitHub. Do not file public issues for unfixed credential or supply-chain incidents.

### Updating the blocklist

After new campaign advisories, extend `security/compromised-packages.json` and re-run `pnpm run audit:supply-chain`.
