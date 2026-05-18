# Appointment Operations

List HaloPSA appointments (`GET /api/Appointment`). Equivalent to halopsa-mcp `halopsa_list_appointments`.

## Get Many

**Parameters:**
- **Return All** / **Limit**
- **Agent ID** — Optional filter (0 = all)
- **Start Date (UTC)** / **End Date (UTC)** — Optional ISO 8601 range passed to the API as `start_date` / `end_date`
