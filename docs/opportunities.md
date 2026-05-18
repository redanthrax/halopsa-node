# Opportunity Operations

List HaloPSA sales opportunities (`GET /api/Opportunities`). OpenAPI returns a `Faults_View` payload with a `tickets` array. Equivalent to halopsa-mcp `halopsa_list_opportunities`.

## Get Many

**Parameters:**
- **Return All** / **Limit** — Return All paginates through all pages; limited requests cap at 100 per API call
- **Client ID** — Optional filter (0 = all)
- **Search** — Optional text filter
