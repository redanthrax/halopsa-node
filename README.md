# n8n-nodes-halopsacomplete

An n8n community node for integrating with HaloPSA API.

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

## Supported Operations

### [Tickets](./docs/tickets.md)
Complete CRUD operations for HaloPSA tickets with comprehensive filtering options.

### [Clients](./docs/clients.md) 
Manage client records including creation, updates, and retrieval.

### [Ticket Types](./docs/ticket-types.md)
Configure and manage ticket type definitions.

### [Ticket Statuses](./docs/ticket-statuses.md)
Manage ticket status configurations and workflows.

### [Invoices](./docs/invoices.md)
Comprehensive invoice management with CRUD operations, line item updates, and voiding capabilities.

### [Agents](./docs/agents.md)
Manage agent records with extensive filtering options for departments, teams, roles, and permissions.

### [Assets](./docs/assets.md)
Complete asset management with CRUD operations, comprehensive filtering, and integration support across multiple platforms.

### [Timesheet](./docs/timesheet.md)
Track work hours with timesheet management including creation, updates, and time tracking.

### [Timesheet Events](./docs/timesheet-event.md)
Manage individual timesheet events and time entries within timesheets.

### [Sites](./docs/sites.md)
Complete site management with full CRUD operations, extensive configuration options, and comprehensive client integration.

## Resources

- [HaloPSA API Documentation](https://haloitsm.com/api)
- [n8n Documentation](https://docs.n8n.io)
- [Repository](https://github.com/redanthrax/halopsa-node)

## License

MIT

