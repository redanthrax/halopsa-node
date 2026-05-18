import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Business Central Details ID', name: 'businessCentralDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['businessCentralDetails'], operation: ['getById'] } }, default: 0 },
];
