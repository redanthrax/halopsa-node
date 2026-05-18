# Opportunity Operations

Manage HaloPSA sales opportunities (`/api/Opportunities`). List responses use the OpenAPI `Faults_View` shape (`tickets` array).

## Get Many

**Return All**, **Limit**, **Client ID**, **Search**

## Get by ID / Create / Update / Delete

Use **Opportunity ID** for get, update, and delete. **Create** and **Update** accept JSON for opportunity (fault) fields.

## Record View

Record that the record was viewed (`POST` …`/View`). Requires the entity ID and optional **Additional Fields** JSON merged into the body.
