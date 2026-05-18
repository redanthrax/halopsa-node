import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Custom Integration Repository ID', name: 'customIntegrationRepositoryId', type: 'number', required: true,
		displayOptions: { show: { resource: ['customIntegrationRepository'], operation: ['getById'] } }, default: 0 },
];
