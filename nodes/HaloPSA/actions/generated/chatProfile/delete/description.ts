import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Chat Profile ID', name: 'chatProfileId', type: 'number', required: true,
		displayOptions: { show: { resource: ['chatProfile'], operation: ['delete'] } }, default: 0 },
];
