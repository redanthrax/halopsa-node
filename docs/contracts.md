# Contract Operations

Manage HaloPSA client contracts (`/api/ClientContract`), including agreement budget and usage metadata. Requires `read:contracts` on your OAuth application.

For agreement hour utilisation, use **Reporting → Contract Utilisation** (recommended) or **Execute SQL Query**. Matches halopsa-mcp `halopsa_get_contract_utilisation`.

## Get Many

**Parameters:**
- **Return All** / **Limit** — Return All paginates through all pages; limited requests cap at 100 per API call
- **Client ID** — Filter by client (0 = all clients)
- **Search** — Optional text filter

## Get by ID

**Parameters:**
- **Contract ID** — Client contract ID

## Create / Update / Delete

**Create** accepts **Client ID** and JSON **Additional Fields**. **Update** requires **Contract ID** and **Update Fields** JSON. **Delete** removes a contract by ID.

## Approval

Submit contract approvals via `POST /ClientContract/Approval`. **Approvals** must be a JSON array of `ContractApproval` objects.

## Next Reference

Allocate the next contract reference via `POST /ClientContract/NextRef`. **Additional Fields** accepts a `ContractHeader` object or array.
