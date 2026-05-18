# Reporting Operations

Query the HaloPSA reporting database and run saved reports. Requires OAuth scopes that include reporting (`read:reporting` for queries and list; `edit:reporting` may be required to run some reports).

## Execute SQL Query

Run a read-only `SELECT` (or `WITH … SELECT`) against the reporting database via `POST /api/Report` with `_loadreportonly`.

**Parameters:**
- **SQL** — The query (max 8000 characters). Use `TOP N` to limit rows. All datetimes are UTC. Comments and semicolons are not allowed.

**Output:** One item per result row. If zero rows, a single item with `row_count: 0` and optional `raw_response`.

**Example:**
```sql
SELECT TOP 50 faultid, summary, status FROM faults WHERE dateoccured >= '2026-01-01T00:00:00Z' ORDER BY faultid DESC
```

## Get Many

List saved report definitions (`GET /api/Report`).

## Get by ID

Retrieve a report definition including SQL and parameters (`GET /api/Report/{id}`).

## Run

Execute a saved report (`POST /api/Report/run`) with optional **Parameters** JSON.
