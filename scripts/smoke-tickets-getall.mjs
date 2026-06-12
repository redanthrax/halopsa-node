#!/usr/bin/env node
/**
 * Smoke test: tickets getAll filter + returnAll query shape against a live HaloPSA instance.
 *
 * Usage:
 *   cp .env.example .env   # fill in credentials
 *   node --env-file=.env scripts/smoke-tickets-getall.mjs
 *
 * Optional env:
 *   HALO_REQUESTTYPE_ID  (default: 40)
 *   HALO_OPEN_ONLY       (default: true)
 */

const baseUrl = process.env.HALO_BASE_URL?.replace(/\/$/, '');
const clientId = process.env.HALO_CLIENT_ID;
const clientSecret = process.env.HALO_CLIENT_SECRET;
const scope = process.env.HALO_SCOPE || 'all';
const requesttypeId = process.env.HALO_REQUESTTYPE_ID || '40';
const openOnly = process.env.HALO_OPEN_ONLY ?? 'true';

function fail(message) {
	console.error(`smoke-tickets-getall: ${message}`);
	process.exit(1);
}

if (!baseUrl || !clientId || !clientSecret) {
	fail('Set HALO_BASE_URL, HALO_CLIENT_ID, and HALO_CLIENT_SECRET (see .env.example).');
}

async function getAccessToken() {
	const body = new URLSearchParams({
		grant_type: 'client_credentials',
		client_id: clientId,
		client_secret: clientSecret,
		scope,
	});

	const response = await fetch(`${baseUrl}/auth/token`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: body.toString(),
	});

	if (!response.ok) {
		fail(`Token request failed (${response.status}): ${await response.text()}`);
	}

	const data = await response.json();
	if (!data.access_token) {
		fail('Token response missing access_token.');
	}
	return data.access_token;
}

function buildQuery(params) {
	const search = new URLSearchParams();
	for (const [key, value] of Object.entries(params)) {
		if (value !== undefined && value !== null && value !== '') {
			search.set(key, String(value));
		}
	}
	return search.toString();
}

async function fetchTickets(token, qs) {
	const query = buildQuery(qs);
	const url = `${baseUrl}/api/Tickets?${query}`;
	const response = await fetch(url, {
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json',
		},
	});

	if (!response.ok) {
		fail(`Tickets request failed (${response.status}): ${await response.text()}`);
	}

	return response.json();
}

async function fetchAssets(token, qs) {
	const query = buildQuery(qs);
	const url = `${baseUrl}/api/Asset?${query}`;
	const response = await fetch(url, {
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json',
		},
	});

	if (!response.ok) {
		fail(`Asset request failed (${response.status}): ${await response.text()}`);
	}

	return response.json();
}

function summarizeAssets(label, payload) {
	const assets = Array.isArray(payload) ? payload : payload?.assets ?? [];
	const recordCount = payload?.record_count;

	console.log(`\n${label}`);
	console.log(`  response shape: ${Array.isArray(payload) ? 'bare array' : 'wrapped object'}`);
	console.log(`  record_count: ${recordCount ?? '(not provided)'}`);
	console.log(`  assets returned: ${assets.length}`);
	if (assets.length > 0 && assets[0]?.id !== undefined) {
		console.log(`  first asset id: ${assets[0].id}`);
	}
}

function summarizeTickets(label, payload) {
	const tickets = Array.isArray(payload)
		? payload
		: payload?.tickets ?? payload?.faults ?? [];
	const recordCount = payload?.record_count;
	const emptyCount = tickets.filter((t) => t && typeof t === 'object' && Object.keys(t).length === 0).length;

	console.log(`\n${label}`);
	console.log(`  response shape: ${Array.isArray(payload) ? 'bare array' : 'wrapped object'}`);
	console.log(`  record_count: ${recordCount ?? '(not provided)'}`);
	console.log(`  tickets returned: ${tickets.length}`);
	if (emptyCount > 0) {
		console.log(`  empty ticket objects: ${emptyCount}`);
	}
	if (tickets.length > 0 && tickets[0]?.id !== undefined) {
		console.log(`  first ticket id: ${tickets[0].id}`);
	}

	if (tickets.length === 1 && emptyCount === 1) {
		fail(`${label} returned a single empty ticket object (matches reported bug).`);
	}

	return tickets.length;
}

async function main() {
	console.log('HaloPSA tickets vs assets getAll smoke test');
	console.log(`  base URL: ${baseUrl}`);

	const token = await getAccessToken();

	for (const label of [
		'Tickets count=50 (assets-style)',
		'Tickets pageinate page_size=50',
		'Assets count=50 (control)',
	]) {
		let payload;
		if (label.startsWith('Tickets count')) {
			payload = await fetchTickets(token, { count: 50 });
			summarizeTickets(label, payload);
		} else if (label.startsWith('Tickets pageinate')) {
			payload = await fetchTickets(token, { pageinate: true, page_size: 50, page_no: 1 });
			summarizeTickets(label, payload);
		} else {
			payload = await fetchAssets(token, { count: 50 });
			summarizeAssets(label, payload);
		}
	}

	console.log('\nSmoke test finished.');
}

main().catch((error) => {
	fail(error instanceof Error ? error.message : String(error));
});
