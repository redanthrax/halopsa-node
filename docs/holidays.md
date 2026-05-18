# Holidays

Agent holiday and leave records (`/api/Holiday`). Supports list, get by ID, create, and delete per OpenAPI.

## Operations

- **Get Many** — `GET /Holiday` with optional `agent_id`, `approved_only`, `start_date`, and `end_date` filters
- **Get by ID** — `GET /Holiday/{id}` (string ID)
- **Create** — `POST /Holiday` with JSON body fields
- **Delete** — `DELETE /Holiday/{id}`
