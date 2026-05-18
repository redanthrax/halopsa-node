import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Connected Instance ID', name: 'connectedInstanceId', type: 'number', required: true,
		displayOptions: { show: { resource: ['connectedInstance'], operation: ['delete'] } }, default: 0 },
];
