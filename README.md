# n8n-nodes-halopsacomplete

An n8n community node for integrating with HaloPSA API.

## Development

This repo uses **pnpm** with a committed lockfile and supply-chain controls (see [SECURITY.md](SECURITY.md)). After clone:

```bash
corepack enable && corepack prepare pnpm@10.19.0 --activate
pnpm install --frozen-lockfile
pnpm run audit:supply-chain
pnpm run build
```

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

```bash
npm install n8n-nodes-halopsacomplete
```

## Prerequisites

- HaloPSA instance with API access
- OAuth 2.0 Client ID and Client Secret from HaloPSA
- Your HaloPSA base URL (e.g., https://your-domain.halopsa.com)

## Setup

### Setting up OAuth 2.0 in HaloPSA

1. Log into your HaloPSA instance
2. Navigate to Configuration > Integrations > HaloPSA API
3. Create a new OAuth 2.0 Client Application
4. Set the Grant Type to "Client Credentials"
5. Configure the appropriate scopes (recommend "all" for full access)
6. Note down the Client ID and Client Secret for use in n8n

### Configuring Credentials in n8n

1. **Base API URL**: Your HaloPSA instance URL (e.g., https://your-domain.halopsa.com)
2. **Client ID**: OAuth 2.0 Client ID from HaloPSA
3. **Client Secret**: OAuth 2.0 Client Secret from HaloPSA
4. **Scope**: OAuth 2.0 scope (default: "all" for full API access)

### Dynamic filters and options (expressions)

Operations that support **Filters** also expose **Filters (JSON)** for runtime values (e.g. `{"client_id": {{ $json.client_id }}}`). JSON keys override the same keys from the UI Filters collection.

**Get by ID** on Tickets, Users, Assets, Projects, and Ticket Statuses also support **Options (JSON)** with the same override behavior.

Use the JSON fields when driving values from webhooks, upstream nodes, or expressions; use the UI collections for static values.

**Return All** on list operations paginates through the HaloPSA API automatically (1000 rows per page).

## Supported Operations

### Triggers

#### HaloPSA Trigger

Receive real-time webhook notifications from HaloPSA for ticket events:

- **New Ticket Logged** — New ticket created
- **Ticket Updated by User** — User updated a ticket
- **Closed** — Ticket closed
- **1st SLA Warning** / **2nd SLA Warning** — SLA breach warnings
- **Ticket Deadline** — Ticket reached its deadline
- **Ticket Status Changed** — Status changed
- **Ticket Deleted** — Ticket deleted

The trigger creates and manages webhooks in HaloPSA (subscription and cleanup).

### Resources (actions)

| Resource | Documentation |
|----------|----------------|
| Action (ticket actions / notes) | [actions.md](./docs/actions.md) |
| Agent | [agents.md](./docs/agents.md) |
| Appointment | [appointments.md](./docs/appointments.md) |
| Asset | [assets.md](./docs/assets.md) |
| Attachment | [attachments.md](./docs/attachments.md) |
| Automation | [automations.md](./docs/automations.md) |
| Canned Text | [canned-text.md](./docs/canned-text.md) |
| Client | [clients.md](./docs/clients.md) |
| Contract | [contracts.md](./docs/contracts.md) |
| Custom API Call | [custom-api.md](./docs/custom-api.md) |
| Field Info | [field-info.md](./docs/field-info.md) |
| Holiday | [holidays.md](./docs/holidays.md) |
| Invoice | [invoices.md](./docs/invoices.md) |
| Item | [items.md](./docs/items.md) |
| Notification | [notifications.md](./docs/notifications.md) |
| Knowledge Base | [knowledge-base.md](./docs/knowledge-base.md) |
| Lookup | [lookups.md](./docs/lookups.md) |
| Opportunity | [opportunities.md](./docs/opportunities.md) |
| Project | [projects.md](./docs/projects.md) |
| Purchase Order | [purchase-orders.md](./docs/purchase-orders.md) |
| Quotation | [quotations.md](./docs/quotations.md) |
| Recurring Invoice | [recurring-invoices.md](./docs/recurring-invoices.md) |
| Reporting | [reporting.md](./docs/reporting.md) |
| Sales Order | [sales-orders.md](./docs/sales-orders.md) |
| Site | [sites.md](./docs/sites.md) |
| Survey | [surveys.md](./docs/surveys.md) |
| Tag | [tags.md](./docs/tags.md) |
| Ticket | [tickets.md](./docs/tickets.md) |
| Ticket Approval | [ticket-approvals.md](./docs/ticket-approvals.md) |
| Ticket To-Do | [ticket-todos.md](./docs/ticket-todos.md) |
| Ticket Status | [ticket-statuses.md](./docs/ticket-statuses.md) |
| Ticket Type | [ticket-types.md](./docs/ticket-types.md) |
| Timesheet | [timesheet.md](./docs/timesheet.md) |
| Timesheet Event | [timesheet-event.md](./docs/timesheet-event.md) |
| User | [users.md](./docs/users.md) |
| Webhook | [webhooks.md](./docs/webhooks.md) |
| Webhook Event | [webhookEvents.md](./docs/webhookEvents.md) |

## Resources

- [HaloPSA API Documentation](https://haloitsm.com/api)
- [n8n Documentation](https://docs.n8n.io)
- [Repository](https://github.com/redanthrax/halopsa-node)

## License

MIT
