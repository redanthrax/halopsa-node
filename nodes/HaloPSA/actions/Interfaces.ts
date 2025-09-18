// Re-export all interfaces from separate files to maintain API compatibility
export * from './interfaces/common';
export * from './interfaces/client';
export * from './interfaces/tickets';
export * from './interfaces/ticketTypes';
export * from './interfaces/ticketStatuses';
export * from './interfaces/invoices';
export * from './interfaces/timesheet';
export * from './interfaces/sites';
export * from './interfaces/webhooks';

// Keep the main type definitions that are used throughout the codebase
export type HaloPSAResource = 'agents' | 'assets' | 'client' | 'invoices' | 'sites' | 'tickets' | 
	'ticketStatuses' | 'ticketTypes' | 'timesheet' | 'timesheetEvent' | 'webhooks' | 'webhookEvents';
export type HaloPSAClientOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
export type HaloPSATicketsOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
export type HaloPSATicketTypesOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
export type HaloPSATicketStatusesOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
export type HaloPSAInvoicesOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete' | 'updateLines' | 'void';
export type HaloPSAAgentsOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
export type HaloPSAAssetsOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
export type HaloPSATimesheetOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
export type HaloPSATimesheetEventOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
export type HaloPSASitesOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
export type HaloPSAWebhooksOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
export type HaloPSAWebhookEventsOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';

export interface HaloPSA {
	resource: HaloPSAResource;
	operation: HaloPSAAgentsOperation | HaloPSAAssetsOperation | HaloPSAClientOperation | 
		HaloPSAInvoicesOperation | HaloPSASitesOperation | HaloPSATicketsOperation |
		HaloPSATicketStatusesOperation | HaloPSATicketTypesOperation | HaloPSATimesheetOperation |
		HaloPSATimesheetEventOperation | HaloPSAWebhooksOperation | HaloPSAWebhookEventsOperation;
}
