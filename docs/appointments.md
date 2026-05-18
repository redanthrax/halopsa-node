# Appointment Operations

Manage HaloPSA appointments (`/api/Appointment`).

## Get Many

**Parameters:**
- **Return All** / **Limit** — Return All paginates through all pages; limited requests cap at 100 per API call
- **Agent ID** — Comma-separated agent IDs via `agents` query param (0 = all)
- **Start Date (UTC)** / **End Date (UTC)** — Optional ISO 8601 range passed to the API as `start_date` / `end_date`

## Get by ID / Create / Update / Delete

Use **Appointment ID** for get, update, and delete. **Create** and **Update** accept JSON for Appointment fields.
