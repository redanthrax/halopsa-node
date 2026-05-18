import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Integration Request ID', name: 'integrationRequestId', type: 'number', required: true,
		displayOptions: { show: { resource: ['integrationRequest'], operation: ['delete'] } }, default: 0 },
];
