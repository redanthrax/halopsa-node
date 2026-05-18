import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Jamf Details ID', name: 'jamfDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['jamfDetails'], operation: ['getById'] } }, default: 0 },
];
