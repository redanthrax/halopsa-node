import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'NCentral Details ID', name: 'nCentralDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['nCentralDetails'], operation: ['getById'] } }, default: 0 },
];
