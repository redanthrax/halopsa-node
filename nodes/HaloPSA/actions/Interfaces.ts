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

export type HaloPSAResource = 'actions' | 'agents' | 'appointments' | 'approvalProcesses' | 'approvalProcessRules' | 'assets' | 'attachments' | 'automations' | 'categories' | 'cannedText' | 'contractRules' | 'contractSchedulePlans' | 'contractSchedules' | 'feed' | 'notifications' | 'client' | 'contracts' | 'customApi' | 'fieldInfo' | 'holidays' | 'invoicePayments' | 'invoices' | 'items' | 'knowledgeBase' | 'lookups' | 'opportunities' | 'outcomes' | 'productBranches' | 'productComponents' | 'purchaseOrders' | 'quotations' | 'raynet' | 'raynetDetails' | 'recurringInvoices' | 'releaseNoteGroups' | 'releases' | 'reporting' | 'salesOrders' | 'secureSecretLinks' | 'securityChecks' | 'sites' | 'suppliers' | 'surveys' | 'tags' | 'teams' | 'ticketApprovals' | 'ticketTodos' | 'todoGroups' | 'tickets' | 'topLevels' | 'transcriptionStore' |
	'ticketStatuses' | 'ticketTypes' | 'timesheet' | 'timesheetEvent' | 'projects' | 'users' | 'webhooks' | 'webhookEvents';
export type HaloPSAActionsOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete' | 'reaction' | 'review';
export type HaloPSAClientOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
export type HaloPSATicketApprovalsOperation = 'getAll' | 'getById' | 'create';
export type HaloPSATicketsOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete' | 'vote' | 'recordView' | 'processChildren' | 'setBillableProject' | 'getFaultViewLog';
export type HaloPSATicketTypesOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
export type HaloPSATicketStatusesOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
export type HaloPSAInvoicesOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete' | 'updateLines' | 'void' | 'recordView' | 'createPdf' | 'getLines';
export type HaloPSAAgentsOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
export type HaloPSAAssetsOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
export type HaloPSATimesheetOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
export type HaloPSATimesheetEventOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
export type HaloPSASitesOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
export type HaloPSAProjectsOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete' | 'recordView';
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
export type HaloPSAAttachmentsOperation = 'getAll' | 'getById' | 'create' | 'delete' | 'getS3PresignedUrl' | 'presignedUploadComplete' | 'getImage' | 'getImageByToken' | 'deleteImage' | 'getDocument' | 'deleteDocument' | 'createDocument' | 'createImage';
export type HaloPSAAppointmentsOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete' | 'getBooking' | 'createBooking' | 'generate';
export type HaloPSAOpportunitiesOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete' | 'recordView';
export type HaloPSASurveysOperation = 'getAll' | 'getById' | 'create' | 'delete';
export type HaloPSAContractsOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete' | 'approval' | 'nextRef';
export type HaloPSAQuotationsOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete' | 'recordView' | 'addLines' | 'approval';
export type HaloPSARecurringInvoicesOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete' | 'updateLines' | 'addLines' | 'process';
export type HaloPSAPurchaseOrdersOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete' | 'recordView' | 'confirmReceipt';
export type HaloPSASalesOrdersOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete' | 'recordView';
export type HaloPSAItemsOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete';
export type HaloPSACustomApiOperation = 'request';
export type HaloPSANotificationsOperation = 'getAll' | 'getById' | 'create' | 'delete';
export type HaloPSACannedTextOperation = 'getAll' | 'getById' | 'create' | 'delete' | 'favourite';
export type HaloPSAHolidaysOperation = 'getAll' | 'getById' | 'create' | 'delete';
export type HaloPSATagsOperation = 'getAll' | 'getById' | 'create' | 'delete';
export type HaloPSAAutomationsOperation = 'getAll' | 'getById' | 'delete' | 'runRunbook';
export type HaloPSAKnowledgeBaseOperation = 'getAll' | 'getById' | 'create' | 'update' | 'delete' | 'vote';
export type HaloPSALookupsOperation = 'getAll' | 'getById' | 'create' | 'delete' | 'clearCache';
export type HaloPSATicketTodosOperation = 'getAll' | 'create';
export type HaloPSAFeedOperation = 'getAll';
export type HaloPSAInvoicePaymentsOperation = 'getAll' | 'getById' | 'create' | 'delete';
export type HaloPSATodoGroupsOperation = 'getAll' | 'getById' | 'create' | 'delete';
export type HaloPSATeamsOperation = 'getAll' | 'getById' | 'create' | 'delete';
export type HaloPSAOutcomesOperation = 'getAll' | 'getById' | 'create' | 'delete';
export type HaloPSASuppliersOperation = 'getAll' | 'getById' | 'create' | 'delete';
export type HaloPSAReleasesOperation = 'getAll' | 'getById' | 'create' | 'delete';
export type HaloPSAProductBranchesOperation = 'getAll';
export type HaloPSAProductComponentsOperation = 'getAll' | 'getById' | 'create' | 'delete';
export type HaloPSATranscriptionStoreOperation = 'getAll' | 'getById' | 'create' | 'delete';
export type HaloPSAReleaseNoteGroupsOperation = 'getAll' | 'getById' | 'create' | 'delete';
export type HaloPSAContractRulesOperation = 'getAll' | 'getById' | 'create' | 'delete';
export type HaloPSAContractSchedulesOperation = 'getAll' | 'getById' | 'create' | 'delete';
export type HaloPSAContractSchedulePlansOperation = 'getAll' | 'getById' | 'create' | 'delete';
export type HaloPSATopLevelsOperation = 'getAll' | 'getById' | 'create' | 'delete';
export type HaloPSASecureSecretLinksOperation = 'getAll' | 'getById' | 'create' | 'delete' | 'validate';
export type HaloPSAApprovalProcessesOperation = 'getAll' | 'getById' | 'create' | 'delete';
export type HaloPSAApprovalProcessRulesOperation = 'getAll' | 'getById' | 'create' | 'delete';
export type HaloPSARaynetOperation = 'getAll';
export type HaloPSARaynetDetailsOperation = 'getAll' | 'getById' | 'create' | 'delete';
export type HaloPSASecurityChecksOperation = 'get' | 'getOldEncryption';
export type HaloPSACategoriesOperation = 'getAll' | 'getById' | 'create' | 'delete';
export interface HaloPSA {
	resource: HaloPSAResource;
	operation: HaloPSAActionsOperation | HaloPSAAgentsOperation | HaloPSAAppointmentsOperation | HaloPSAApprovalProcessesOperation | HaloPSAApprovalProcessRulesOperation | HaloPSAAttachmentsOperation | HaloPSAAutomationsOperation | HaloPSANotificationsOperation | HaloPSACannedTextOperation | HaloPSACategoriesOperation | HaloPSAContractRulesOperation | HaloPSAContractSchedulePlansOperation | HaloPSAContractSchedulesOperation | HaloPSAFeedOperation | HaloPSAAssetsOperation | HaloPSAClientOperation |
		HaloPSAContractsOperation | HaloPSACustomApiOperation | HaloPSAFieldInfoOperation | HaloPSAHolidaysOperation | HaloPSAInvoicePaymentsOperation | HaloPSAInvoicesOperation | HaloPSAItemsOperation | HaloPSAKnowledgeBaseOperation | HaloPSALookupsOperation | HaloPSAOpportunitiesOperation | HaloPSAOutcomesOperation | HaloPSAProductBranchesOperation | HaloPSAProductComponentsOperation | HaloPSAPurchaseOrdersOperation | HaloPSAQuotationsOperation | HaloPSARaynetOperation | HaloPSARaynetDetailsOperation | HaloPSARecurringInvoicesOperation | HaloPSAReleaseNoteGroupsOperation | HaloPSAReleasesOperation | HaloPSAReportingOperation | HaloPSASalesOrdersOperation | HaloPSASecureSecretLinksOperation | HaloPSASecurityChecksOperation | HaloPSASitesOperation | HaloPSASuppliersOperation | HaloPSASurveysOperation | HaloPSATagsOperation | HaloPSATeamsOperation | HaloPSATicketApprovalsOperation | HaloPSATicketTodosOperation | HaloPSATodoGroupsOperation | HaloPSATicketsOperation | HaloPSATopLevelsOperation | HaloPSATranscriptionStoreOperation |
		HaloPSATicketStatusesOperation | HaloPSATicketTypesOperation | HaloPSATimesheetOperation |
		HaloPSATimesheetEventOperation | HaloPSAProjectsOperation | HaloPSAUsersOperation | HaloPSAWebhooksOperation | HaloPSAWebhookEventsOperation | string;
}
