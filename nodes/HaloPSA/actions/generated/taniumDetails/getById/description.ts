import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Tanium Details ID', name: 'taniumDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['taniumDetails'], operation: ['getById'] } }, default: 0 },
];
