/**
 * Read-only SQL allowlist for HaloPSA POST /api/Report (_loadreportonly).
 * Mirrors halopsa-mcp SqlGuard behaviour.
 */

const MAX_LENGTH = 8000;

const DANGEROUS_TOKENS =
	/\b(?:EXEC|EXECUTE|xp_\w+|sp_\w+|INSERT|UPDATE|DELETE|MERGE|TRUNCATE|DROP|CREATE|ALTER|GRANT|REVOKE|DENY|BACKUP|RESTORE|SHUTDOWN|RECONFIGURE|OPENROWSET|OPENQUERY|OPENDATASOURCE|BULK|INTO\s+(?:OUTFILE|DUMPFILE)|SELECT\s+[^(;]*\bINTO\b)\b/i;

const COMMENT_OR_SEMI = /--|\/\*|\*\/|;/;

const STARTING_KEYWORD = /^\s*(?:WITH\b|SELECT\b)/i;

export interface SqlGuardResult {
	ok: boolean;
	reason?: string;
}

export function inspectSql(sql: string | undefined): SqlGuardResult {
	if (sql === undefined || sql.trim() === '') {
		return { ok: false, reason: 'SQL is empty.' };
	}
	if (sql.length > MAX_LENGTH) {
		return { ok: false, reason: `SQL exceeds ${MAX_LENGTH} characters.` };
	}
	if (!STARTING_KEYWORD.test(sql)) {
		return {
			ok: false,
			reason: 'Only single SELECT (or WITH … SELECT) statements are allowed.',
		};
	}
	if (COMMENT_OR_SEMI.test(sql)) {
		return {
			ok: false,
			reason: 'SQL must not contain comments (-- /* */) or statement terminators (;).',
		};
	}
	const bad = DANGEROUS_TOKENS.exec(sql);
	if (bad) {
		return {
			ok: false,
			reason: `SQL contains disallowed token '${bad[0].trim()}'. Only read-only SELECT queries are permitted.`,
		};
	}
	return { ok: true };
}
