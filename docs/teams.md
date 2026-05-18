# Team Operations

HaloPSA teams / sections (`/api/Team`, `SectionDetail` schema). Previously only available via load options on Agent fields.

## Get Many

**Return All**, **Limit**, and optional filters:

- **Department ID**, **Type** (`reqs`, `opps`, `prjs`)
- **Team IDs** (comma-separated)
- **Show All**, **Member Only**, **My Teams Only**, **Can Edit Only**, **Show Counts**

## Get by ID

**Team ID** with optional **Include Agents** and **Include Details**.

## Create

`POST /Team` with **Additional Fields** (single `SectionDetail` object or array).

## Delete

Delete a team by **Team ID** (`DELETE /Team/{id}`).
