import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Ingram Micro Details ID', name: 'ingramMicroDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['ingramMicroDetails'], operation: ['delete'] } }, default: 0 },
];
