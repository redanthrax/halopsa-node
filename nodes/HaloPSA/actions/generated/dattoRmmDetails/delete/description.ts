import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Datto Rmm Details ID', name: 'dattoRmmDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['dattoRmmDetails'], operation: ['delete'] } }, default: 0 },
];
