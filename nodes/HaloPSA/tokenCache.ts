interface CachedToken {
	accessToken: string;
	expiresAtMs: number;
}

const cache = new Map<string, CachedToken>();

/** Refresh before expiry (seconds). */
const EXPIRY_BUFFER_SEC = 60;
const DEFAULT_EXPIRES_IN_SEC = 3600;
const MIN_CACHE_TTL_SEC = 30;

export function getTokenCacheKey(baseUrl: string, clientId: string): string {
	return `${baseUrl}|${clientId}`;
}

export function getCachedAccessToken(cacheKey: string): string | undefined {
	const entry = cache.get(cacheKey);
	if (!entry) {
		return undefined;
	}
	if (Date.now() >= entry.expiresAtMs) {
		cache.delete(cacheKey);
		return undefined;
	}
	return entry.accessToken;
}

export function setCachedAccessToken(
	cacheKey: string,
	accessToken: string,
	expiresInSec?: number,
): void {
	const raw = expiresInSec ?? DEFAULT_EXPIRES_IN_SEC;
	const ttlSec = Math.max(raw - EXPIRY_BUFFER_SEC, MIN_CACHE_TTL_SEC);
	cache.set(cacheKey, {
		accessToken,
		expiresAtMs: Date.now() + ttlSec * 1000,
	});
}

export function clearCachedAccessToken(cacheKey: string): void {
	cache.delete(cacheKey);
}
