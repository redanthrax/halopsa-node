import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Jamf Details ID', name: 'jamfDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['jamfDetails'], operation: ['delete'] } }, default: 0 },
];
