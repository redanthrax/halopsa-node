# Action Operations

Ticket actions (notes, status changes, time entries, etc.) via `/api/Actions`. In HaloPSA terminology these are **actions** on a **ticket** (fault), not automation workflow actions.

## Get Many

**Parameters:**
- **Return All** / **Limit** — When Return All is enabled, results are paginated automatically (1000 per API page)
- **Filters** — Filter by ticket, agent, outcome, dates, etc.
- **Filters (JSON)** — JSON overrides the Filters collection; use with expressions

## Get by ID

**Parameters:**
- **Action ID** — Action record ID

## Create

**Parameters:**
- **Ticket ID** — Ticket to attach the action to
- **Note** — Action body / note text
- **Additional Fields** — Including **Outcome Name or ID** (`outcome_id`) from the HaloPSA Outcome list (loaded via `getOutcomes`)

## Update

Update an action by ID. Supports **Outcome Name or ID** and other fields in the node UI.

## Delete

Delete an action by ID.

## Reaction

Submit an action reaction (`POST /Actions/reaction`). Body is ActionReaction JSON via **Additional Fields**.

## Review

Submit an action for review (`POST /Actions/Review`). Optional **Action ID** and **Additional Fields** JSON merged into the body.
