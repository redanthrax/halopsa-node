# Project Operations

Manage HaloPSA projects (`/api/Projects`). List responses use the `faults` array.

## Get Many

**Parameters:**
- **Return All** / **Limit** — When Return All is enabled, results are paginated automatically (1000 per API page)
- **Filters** — Filter projects (see node UI for available fields)
- **Filters (JSON)** — JSON overrides the Filters collection; use with expressions, e.g. `{"client_id": {{ $json.client_id }}}`

## Get by ID

**Parameters:**
- **Project ID** — Project record ID
- **Options** — Include attachments, custom fields, details, etc.
- **Options (JSON)** — Overrides the Options collection from expressions

## Create

Create a new project. See the node UI for required and optional fields.

## Update

Update an existing project by ID.

## Delete

Delete a project by ID.
