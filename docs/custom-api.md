# Custom API Call

Escape hatch for HaloPSA REST endpoints not covered by typed resources. Equivalent to halopsa-mcp `halopsa_api_call`.

Uses the same OAuth credentials and base URL as other operations. Paths are relative to `/api` on your tenant (e.g. `/Ticket`, not the full instance URL).

## Request

**Parameters:**

| Field | Description |
|-------|-------------|
| **Method** | `GET`, `POST`, `PUT`, or `DELETE` |
| **Endpoint** | Path such as `/Invoice` or `/ClientContract/12`. Leading `/api/` is stripped if present. |
| **Query Parameters** | Optional JSON object for query string (e.g. `{"count": 25, "client_id": 70}`) |
| **Body** | JSON object or array for `POST` / `PUT` / `DELETE`. Many HaloPSA write endpoints expect an array payload. |

**Response:** One output item per element when the API returns a JSON array; otherwise a single item with the response object.

**Examples:**

- List tickets: `GET` `/Ticket` with query `{"count": 10}`
- Create ticket: `POST` `/Tickets` with body `[{"summary": "From n8n", "client_id": 1}]`

See [HaloPSA API documentation](https://haloitsm.com/api) for paths and payloads.
