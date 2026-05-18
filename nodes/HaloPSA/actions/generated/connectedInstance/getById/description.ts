import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Connected Instance ID', name: 'connectedInstanceId', type: 'number', required: true,
		displayOptions: { show: { resource: ['connectedInstance'], operation: ['getById'] } }, default: 0 },
];
