# Quotation Operations

Sales quotes (`/api/Quotation`). List responses use the `quotes` array.

## Get Many

**Return All**, **Limit**, **Client ID**, **Search**, **Open Only**

## Get by ID / Create / Update / Delete

Use **Quotation ID** for get, update, and delete. **Create** and **Update** accept JSON **Additional Fields** / **Update Fields** for `QuotationHeader` properties.

## Record View

Record that the record was viewed (`POST` …`/View`). Requires the entity ID and optional **Additional Fields** JSON merged into the body.

## Add Lines

Add quotation lines via `POST /Quotation/Lines`. **Quotation Lines** must be a JSON array of `QuotationDetail` objects.

## Approval

Submit quotation approvals via `POST /Quotation/Approval`. **Approvals** must be a JSON array of `QuotationApproval` objects.
