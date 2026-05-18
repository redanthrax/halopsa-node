import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Kaseya VSAXDetails ID', name: 'kaseyaVSAXDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['kaseyaVSAXDetails'], operation: ['delete'] } }, default: 0 },
];
