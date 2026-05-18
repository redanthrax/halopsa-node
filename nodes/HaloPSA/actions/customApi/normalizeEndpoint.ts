/**
 * Normalizes a HaloPSA API path for transport.apiRequest (which prefixes /api).
 * Accepts /Ticket, /api/Ticket, or Ticket.
 */
export function normalizeEndpoint(raw: string): string {
	let path = raw.trim();
	if (!path) {
		throw new Error('Endpoint is required');
	}

	if (path.includes('://')) {
		try {
			path = new URL(path).pathname;
		} catch {
			throw new Error('Endpoint must be a path (e.g. /Ticket), not a full URL');
		}
	}

	if (path.startsWith('/api/')) {
		path = path.slice(4);
	} else if (path === '/api') {
		path = '/';
	} else if (path.startsWith('/api')) {
		path = path.slice(4) || '/';
	}

	if (!path.startsWith('/')) {
		path = `/${path}`;
	}

	return path;
}
