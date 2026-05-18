import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Custom Integration Method ID', name: 'customIntegrationMethodId', type: 'number', required: true,
		displayOptions: { show: { resource: ['customIntegrationMethod'], operation: ['delete'] } }, default: 0 },
];
