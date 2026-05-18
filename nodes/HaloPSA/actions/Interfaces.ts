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

export type HaloPSAResource = 'actions' | 'agents' | 'appointments' | 'assets' | 'attachments' | 'client' | 'contracts' | 'customApi' | 'fieldInfo' | 'invoices' | 'knowledgeBase' | 'opportunities' | 'quotations' | 'reporting' | 'sites' | 'surveys' | 'tickets' | 
	'ticketStatuses' | 'ticketTypes' | 'timesheet' | 'timesheetEvent' | 'projects' | 'users' | 'webhooks' | 'webhookEvents';
export type HaloPSAActionsOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
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
export type HaloPSAProjectsOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
export type HaloPSAWebhooksOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
export type HaloPSAWebhookEventsOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
export type HaloPSAFieldInfoOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
export type HaloPSAUsersOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
export type HaloPSAReportingOperation = 'contractUtilisation' | 'createPdf' | 'executeQuery' | 'getAll' | 'getById' | 'print' | 'run';
export type HaloPSAAttachmentsOperation = 'getAll' | 'getById' | 'create' | 'delete';
export type HaloPSAAppointmentsOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
export type HaloPSAOpportunitiesOperation = 'getAll';
export type HaloPSASurveysOperation = 'getAll';
export type HaloPSAContractsOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
export type HaloPSAQuotationsOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
export type HaloPSACustomApiOperation = 'request';
export type HaloPSAKnowledgeBaseOperation = 'getAll' | 'getById';
export interface HaloPSA {
	resource: HaloPSAResource;
	operation: HaloPSAActionsOperation | HaloPSAAgentsOperation | HaloPSAAppointmentsOperation | HaloPSAAttachmentsOperation | HaloPSAAssetsOperation | HaloPSAClientOperation |
		HaloPSAContractsOperation | HaloPSACustomApiOperation | HaloPSAFieldInfoOperation | HaloPSAInvoicesOperation | HaloPSAKnowledgeBaseOperation | HaloPSAOpportunitiesOperation | HaloPSAQuotationsOperation | HaloPSAReportingOperation | HaloPSASitesOperation | HaloPSASurveysOperation | HaloPSATicketsOperation |
		HaloPSATicketStatusesOperation | HaloPSATicketTypesOperation | HaloPSATimesheetOperation |
		HaloPSATimesheetEventOperation | HaloPSAProjectsOperation | HaloPSAUsersOperation | HaloPSAWebhooksOperation | HaloPSAWebhookEventsOperation;
}
