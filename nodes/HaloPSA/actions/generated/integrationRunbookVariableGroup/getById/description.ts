import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Integration Runbook Variable Group ID', name: 'integrationRunbookVariableGroupId', type: 'number', required: true,
		displayOptions: { show: { resource: ['integrationRunbookVariableGroup'], operation: ['getById'] } }, default: 0 },
];
