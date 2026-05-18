import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Outgoingemail ID', name: 'outgoingemailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['outgoingemail'], operation: ['delete'] } }, default: 0 },
];
