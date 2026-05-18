#!/usr/bin/env node
/**
 * Scans pnpm-lock.yaml for Mini Shai-Hulud (and related) compromised versions
 * and suspicious install-script / C2 indicators.
 */
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const lockfilePath = resolve(root, 'pnpm-lock.yaml');
const securityDir = resolve(root, 'security');

function loadBlocklist() {
	const metaPath = resolve(securityDir, 'compromised-packages.json');
	const meta = JSON.parse(readFileSync(metaPath, 'utf8'));
	const blockedVersions = {};

	const files = meta.blocklistFiles ?? [];
	if (files.length === 0 && meta.blockedVersions) {
		Object.assign(blockedVersions, meta.blockedVersions);
	}

	for (const file of files) {
		const data = JSON.parse(readFileSync(resolve(securityDir, file), 'utf8'));
		if (data.blockedVersions) {
			Object.assign(blockedVersions, data.blockedVersions);
		}
	}

	return { ...meta, blockedVersions };
}

function parseLockfilePackages(lockfile) {
	const packages = [];
	const re = /^\s{2}['"]?((?:@[^@/\s'"]+\/)?[^@'"/\s]+)@([^'":\s]+)['"]?:/gm;
	let match;
	while ((match = re.exec(lockfile)) !== null) {
		packages.push({ name: match[1], version: match[2] });
	}
	return packages;
}

function main() {
	const errors = [];
	const warnings = [];

	if (!existsSync(lockfilePath)) {
		console.error('error: pnpm-lock.yaml not found — commit a frozen lockfile for reproducible installs.');
		process.exit(1);
	}

	const blocklist = loadBlocklist();
	const lockfile = readFileSync(lockfilePath, 'utf8');
	const installed = parseLockfilePackages(lockfile);

	for (const { name, version } of installed) {
		const blocked = blocklist.blockedVersions[name];
		if (blocked?.includes(version)) {
			errors.push(`blocked compromised version: ${name}@${version} (${blocklist.campaign})`);
		}
	}

	for (const indicator of blocklist.lockfileIndicators ?? []) {
		if (lockfile.includes(indicator)) {
			errors.push(`lockfile contains suspicious indicator: ${indicator}`);
		}
	}

	if (!existsSync(resolve(root, 'node_modules'))) {
		warnings.push('node_modules not present — run pnpm install before relying on local install checks');
	}

	const blocklistFileCount = (blocklist.blocklistFiles ?? []).length;
	const packageCount = Object.keys(blocklist.blockedVersions).length;

	if (warnings.length) {
		for (const w of warnings) {
			console.warn(`warn: ${w}`);
		}
	}

	if (errors.length) {
		console.error('Supply chain check FAILED:\n');
		for (const e of errors) {
			console.error(`  • ${e}`);
		}
		console.error(
			'\nSee SECURITY.md for remediation (rotate CI secrets, block egress IOCs, pin safe versions).',
		);
		process.exit(1);
	}

	console.log(
		`Supply chain check passed (${installed.length} locked packages, ${packageCount} blocklist entries from ${blocklistFileCount || 1} file(s), updated ${blocklist.updated}).`,
	);
}

main();
