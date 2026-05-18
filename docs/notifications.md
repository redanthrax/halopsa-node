# Notifications

Agent notifications (`/api/Notification`). Supports list, get by ID, create, and delete per OpenAPI.

## Operations

- **Get Many** — `GET /Notification` with optional `agent_id`, `restrictto_agent_id`, `showall`, and `type` filters
- **Get by ID** — `GET /Notification/{id}`
- **Create** — `POST /Notification` with JSON body fields
- **Delete** — `DELETE /Notification/{id}`
