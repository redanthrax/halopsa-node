# Sales Order Operations

Sales orders (`/api/SalesOrder`). List responses use the `salesorders` array.

## Get Many

**Return All**, **Limit**, **Client ID**, **Search**, **Open Only** (maps to `closed=false`)

## Get by ID / Create / Update / Delete

Standard CRUD with JSON fields.

## Record View

Record that the record was viewed (`POST` …`/View`). Requires the entity ID and optional **Additional Fields** JSON merged into the body.
