import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Manage Engine Details ID', name: 'manageEngineDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['manageEngineDetails'], operation: ['getById'] } }, default: 0 },
];
