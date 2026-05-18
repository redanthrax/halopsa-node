import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Tech Data Reseller Details ID', name: 'techDataResellerDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['techDataResellerDetails'], operation: ['delete'] } }, default: 0 },
];
