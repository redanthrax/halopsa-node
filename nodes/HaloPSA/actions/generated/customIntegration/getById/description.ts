import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Custom Integration ID', name: 'customIntegrationId', type: 'number', required: true,
		displayOptions: { show: { resource: ['customIntegration'], operation: ['getById'] } }, default: 0 },
];
