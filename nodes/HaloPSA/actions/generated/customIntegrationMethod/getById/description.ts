import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Custom Integration Method ID', name: 'customIntegrationMethodId', type: 'number', required: true,
		displayOptions: { show: { resource: ['customIntegrationMethod'], operation: ['getById'] } }, default: 0 },
];
