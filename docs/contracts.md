# Contract Operations

List and retrieve HaloPSA client contracts (`/api/ClientContract`), including agreement budget and usage metadata. Requires `read:contracts` on your OAuth application.

For agreement hour utilisation, use **Reporting → Contract Utilisation** (recommended) or **Execute SQL Query**. Matches halopsa-mcp `halopsa_get_contract_utilisation`.

## Get Many

**Parameters:**
- **Return All** / **Limit** — Return All paginates through all pages; limited requests cap at 100 per API call
- **Client ID** — Filter by client (0 = all clients)
- **Search** — Optional text filter

## Get by ID

**Parameters:**
- **Contract ID** — Client contract ID
