# Contract Operations

List and retrieve HaloPSA client contracts (`/api/ClientContract`), including agreement budget and usage metadata. Requires `read:contracts` on your OAuth application.

For agreement hour utilisation, use **Reporting → Contract Utilisation** (recommended) or **Execute SQL Query**. Matches halopsa-mcp `halopsa_get_contract_utilisation`.

## Get Many

**Parameters:**
- **Return All** / **Limit** — Pagination (API max 100 per request when limited)
- **Client ID** — Filter by client (0 = all clients)
- **Search** — Optional text filter

## Get by ID

**Parameters:**
- **Contract ID** — Client contract ID
