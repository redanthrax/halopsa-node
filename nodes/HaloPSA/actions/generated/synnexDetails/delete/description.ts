import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Synnex Details ID', name: 'synnexDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['synnexDetails'], operation: ['delete'] } }, default: 0 },
];
