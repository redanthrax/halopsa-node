import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Armis Details ID', name: 'armisDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['armisDetails'], operation: ['delete'] } }, default: 0 },
];
