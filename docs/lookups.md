# Lookup Operations

Reference data and dropdown values (`/api/Lookup`). GET list returns an array of Lookup records.

## Get Many

**Return All**, **Limit**, **Lookup ID** (`lookupid` filter), **Client ID**

## Get by ID

Retrieve a single lookup value by **Lookup Record ID**.

## Create

Create a lookup value (`POST /Lookup`).

**Parameters:**
- **Additional Fields**: JSON body fields for the new record

## Delete

Delete a lookup value by **Lookup Record ID** (`DELETE /Lookup/{id}`).

## Clear Cache

Clear the HaloPSA lookup cache (`POST /Lookup/ClearCache`). No parameters required.
