# Automation Operations

List HaloPSA workflow automations (`/api/Automation`). List responses use the `automations` array.

## Get Many

**Return All** / **Limit**

## Get by ID

Retrieve a single automation by **Automation ID**.

## Delete

Delete an automation by **Automation ID** (`DELETE /Automation/{id}`).

## Run Runbook

Execute a runbook (`POST /Automation/{runbookId}`).

**Required Parameters:**
- **Runbook ID**: UUID of the runbook

**Optional Parameters:**
- **Additional Fields**: Request body (e.g. `formCollection`) per OpenAPI
