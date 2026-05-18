import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Custom Integration ID', name: 'customIntegrationId', type: 'number', required: true,
		displayOptions: { show: { resource: ['customIntegration'], operation: ['delete'] } }, default: 0 },
];
