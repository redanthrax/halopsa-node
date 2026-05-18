import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Manage Engine Details ID', name: 'manageEngineDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['manageEngineDetails'], operation: ['delete'] } }, default: 0 },
];
