import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Datto Rmm Details ID', name: 'dattoRmmDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['dattoRmmDetails'], operation: ['getById'] } }, default: 0 },
];
