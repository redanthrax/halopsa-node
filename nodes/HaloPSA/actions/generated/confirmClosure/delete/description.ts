import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Confirm Closure ID', name: 'confirmClosureId', type: 'number', required: true,
		displayOptions: { show: { resource: ['confirmClosure'], operation: ['delete'] } }, default: 0 },
];
