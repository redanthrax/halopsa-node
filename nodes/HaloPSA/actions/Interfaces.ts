export * from './interfaces/common';
export * from './interfaces/actions';
export * from './interfaces/client';
export * from './interfaces/fieldInfo';
export * from './interfaces/tickets';
export * from './interfaces/ticketTypes';
export * from './interfaces/ticketStatuses';
export * from './interfaces/invoices';
export * from './interfaces/timesheet';
export * from './interfaces/sites';
export * from './interfaces/projects';
export * from './interfaces/webhooks';

export type HaloPSAResource = 'actions' | 'agents' | 'appointments' | 'assets' | 'attachments' | 'automations' | 'notifications' | 'client' | 'contracts' | 'customApi' | 'fieldInfo' | 'invoices' | 'items' | 'knowledgeBase' | 'lookups' | 'opportunities' | 'purchaseOrders' | 'quotations' | 'recurringInvoices' | 'reporting' | 'salesOrders' | 'sites' | 'surveys' | 'ticketApprovals' | 'tickets' | 
	'ticketStatuses' | 'ticketTypes' | 'timesheet' | 'timesheetEvent' | 'projects' | 'users' | 'webhooks' | 'webhookEvents';
export type HaloPSAActionsOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
export type HaloPSAClientOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
export type HaloPSATicketApprovalsOperation = 'getAll' | 'getById' | 'create';
export type HaloPSATicketsOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
export type HaloPSATicketTypesOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
export type HaloPSATicketStatusesOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
export type HaloPSAInvoicesOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete' | 'updateLines' | 'void';
export type HaloPSAAgentsOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
export type HaloPSAAssetsOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
export type HaloPSATimesheetOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
export type HaloPSATimesheetEventOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
export type HaloPSASitesOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
export type HaloPSAProjectsOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
export type HaloPSAWebhooksOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
export type HaloPSAWebhookEventsOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
export type HaloPSAFieldInfoOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
export type HaloPSAUsersOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
export type HaloPSAReportingOperation =
	| 'bookmark'
	| 'contractUtilisation'
	| 'createPdf'
	| 'executeQuery'
	| 'getAll'
	| 'getById'
	| 'getPublishedData'
	| 'getRepositoryById'
	| 'listRepository'
	| 'print'
	| 'run';
export type HaloPSAAttachmentsOperation = 'getAll' | 'getById' | 'create' | 'delete';
export type HaloPSAAppointmentsOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
export type HaloPSAOpportunitiesOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
export type HaloPSASurveysOperation = 'getAll' | 'getById' | 'create' | 'delete';
export type HaloPSAContractsOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
export type HaloPSAQuotationsOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
export type HaloPSARecurringInvoicesOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
export type HaloPSAPurchaseOrdersOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
export type HaloPSASalesOrdersOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
export type HaloPSAItemsOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
export type HaloPSACustomApiOperation = 'request';
export type HaloPSANotificationsOperation = 'getAll' | 'getById' | 'create' | 'delete';
export type HaloPSAAutomationsOperation = 'getAll' | 'getById';
export type HaloPSAKnowledgeBaseOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete' | 'vote';
export type HaloPSALookupsOperation = 'getAll' | 'getById';
export interface HaloPSA {
	resource: HaloPSAResource;
	operation: HaloPSAActionsOperation | HaloPSAAgentsOperation | HaloPSAAppointmentsOperation | HaloPSAAttachmentsOperation | HaloPSAAutomationsOperation | HaloPSANotificationsOperation | HaloPSAAssetsOperation | HaloPSAClientOperation |
		HaloPSAContractsOperation | HaloPSACustomApiOperation | HaloPSAFieldInfoOperation | HaloPSAInvoicesOperation | HaloPSAItemsOperation | HaloPSAKnowledgeBaseOperation | HaloPSALookupsOperation | HaloPSAOpportunitiesOperation | HaloPSAPurchaseOrdersOperation | HaloPSAQuotationsOperation | HaloPSARecurringInvoicesOperation | HaloPSAReportingOperation | HaloPSASalesOrdersOperation | HaloPSASitesOperation | HaloPSASurveysOperation | HaloPSATicketApprovalsOperation | HaloPSATicketsOperation |
		HaloPSATicketStatusesOperation | HaloPSATicketTypesOperation | HaloPSATimesheetOperation |
		HaloPSATimesheetEventOperation | HaloPSAProjectsOperation | HaloPSAUsersOperation | HaloPSAWebhooksOperation | HaloPSAWebhookEventsOperation;
}
