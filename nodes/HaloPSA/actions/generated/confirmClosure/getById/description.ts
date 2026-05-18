import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Confirm Closure ID', name: 'confirmClosureId', type: 'number', required: true,
		displayOptions: { show: { resource: ['confirmClosure'], operation: ['getById'] } }, default: 0 },
];
