# Recurring Invoice Operations

Recurring invoice schedules (`/api/RecurringInvoice`). List responses use the `invoices` array.

## Get Many

**Return All**, **Limit**, **Client ID**, **Search**

## Get by ID / Create / Update / Delete

Standard CRUD with JSON **Additional Fields** / **Update Fields**.

## Update Lines

Update line items (`POST /RecurringInvoice/updatelines`) with a JSON array of invoice line objects.

## Add Lines

Add line items (`POST /RecurringInvoice/Lines`) with a JSON array of invoice line objects.

## Process

Process recurring invoices (`POST /RecurringInvoice/process`) with a JSON array of recurring invoice IDs.
