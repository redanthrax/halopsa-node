#!/usr/bin/env node
/**
 * Wrapper for `n8n-node dev` that strips pnpm-specific npm_config_* env vars
 * before spawning n8n via npx (avoids noisy npm warnings and install quirks).
 */
import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const nodeCliBin = join(dirname(require.resolve('@n8n/node-cli/package.json')), 'bin', 'n8n-node.mjs');

const PNPM_NPM_CONFIG_KEYS = new Set([
	'npm_config_block_exotic_subdeps',
	'npm_config_minimum_release_age',
	'npm_config_minimum_release_age_strict',
	'npm_config_manage_package_manager_versions',
	'npm_config_strict_dep_builds',
	'npm_config_overrides',
	'npm_config_node_version',
	'npm_config_engine_strict',
]);

const nodeMajor = Number(process.versions.node.split('.')[0]);
if (nodeMajor >= 23) {
	console.warn(
		`Warning: Node ${process.versions.node} is not supported for n8n dev (use Node 22 LTS).`,
	);
	console.warn('  nvm use   # reads .nvmrc (22.22.3)');
}

const env = { ...process.env };
for (const key of Object.keys(env)) {
	if (PNPM_NPM_CONFIG_KEYS.has(key)) {
		delete env[key];
	}
}

// Local HTTP dev: Safari (and some non-localhost URLs) reject n8n's secure cookies.
if (env.N8N_SECURE_COOKIE === undefined) {
	env.N8N_SECURE_COOKIE = 'false';
}

const args = ['dev', ...process.argv.slice(2)];
const child = spawn(process.execPath, [nodeCliBin, ...args], {
	stdio: 'inherit',
	env,
});

child.on('exit', (code, signal) => {
	if (signal) {
		process.kill(process.pid, signal);
		return;
	}
	process.exit(code ?? 1);
});
