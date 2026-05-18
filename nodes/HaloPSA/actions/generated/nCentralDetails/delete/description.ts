import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'NCentral Details ID', name: 'nCentralDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['nCentralDetails'], operation: ['delete'] } }, default: 0 },
];
