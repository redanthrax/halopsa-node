import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Synnex Details ID', name: 'synnexDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['synnexDetails'], operation: ['getById'] } }, default: 0 },
];
