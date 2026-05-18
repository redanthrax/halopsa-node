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

### [Reporting](./docs/reporting.md)

Execute read-only SQL against the HaloPSA reporting database, list saved reports, and run saved report definitions (aligned with halopsa-mcp `halopsa_query` / report tools).

### Dynamic filters (expressions)

Operations that support **Filters** also expose **Filters (JSON)** for runtime values (e.g. `{"client_id": {{ $json.client_id }}}`). JSON keys override the same keys from the UI Filters collection. Use **Filters (JSON)** when driving filters from webhooks, upstream nodes, or expressions; use **Add Filter** in the UI for static values.

### Configuring Credentials in n8n

1. **Base API URL**: Your HaloPSA instance URL (e.g., https://your-domain.halopsa.com)
2. **Client ID**: OAuth 2.0 Client ID from HaloPSA
3. **Client Secret**: OAuth 2.0 Client Secret from HaloPSA
4. **Scope**: OAuth 2.0 scope (default: "all" for full API access)

## Supported Operations

### Triggers

#### HaloPSA Trigger
Receive real-time webhook notifications from HaloPSA for ticket events:
- **New Ticket Logged** - Triggered when a new ticket is created
- **Ticket Updated by User** - Triggered when a user updates a ticket
- **Closed** - Triggered when a ticket is closed
- **1st SLA Warning** - Triggered on first SLA breach warning
- **2nd SLA Warning** - Triggered on second SLA breach warning
- **Ticket Deadline** - Triggered when a ticket reaches its deadline
- **Ticket Status Changed** - Triggered when ticket status changes
- **Ticket Deleted** - Triggered when a ticket is deleted

The trigger automatically creates and manages webhooks in HaloPSA, handling subscription and cleanup.

### Actions

#### [Agents](./docs/agents.md)
Manage agent records with extensive filtering options for departments, teams, roles, and permissions.

### [Assets](./docs/assets.md)
Complete asset management with CRUD operations, comprehensive filtering, and integration support across multiple platforms.

### [Clients](./docs/clients.md) 
Manage client records including creation, updates, and retrieval with enhanced custom fields support.

### [Field Info](./docs/field-info.md)
Manage custom field definitions and metadata with CRUD operations and enhanced multi-select integration across resources.

### [Invoices](./docs/invoices.md)
Comprehensive invoice management with CRUD operations, line item updates, and voiding capabilities.

### [Sites](./docs/sites.md)
Complete site management with full CRUD operations, extensive configuration options, and comprehensive client integration.

### [Ticket Statuses](./docs/ticket-statuses.md)
Manage ticket status configurations and workflows.

### [Ticket Types](./docs/ticket-types.md)
Configure and manage ticket type definitions.

### [Tickets](./docs/tickets.md)
Complete CRUD operations for HaloPSA tickets with comprehensive filtering options.

### [Users](./docs/users.md)
Comprehensive user management with full CRUD operations, extensive filtering options, and advanced configuration including security roles, site associations, and custom field support.

### [Timesheet](./docs/timesheet.md)
Track work hours with timesheet management including creation, updates, and time tracking.

### [Timesheet Events](./docs/timesheet-event.md)
Manage individual timesheet events and time entries within timesheets.

### [Webhooks](./docs/webhooks.md)
Manage webhooks and automation runbooks with full CRUD operations and comprehensive configuration options.

### [Webhook Events](./docs/webhookEvents.md)
Manage webhook events that define the types of activities that can trigger webhook notifications.

## Resources

- [HaloPSA API Documentation](https://haloitsm.com/api)
- [n8n Documentation](https://docs.n8n.io)
- [Repository](https://github.com/redanthrax/halopsa-node)

## License

MIT

