import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{
		displayName: 'Contract ID',
		name: 'contractId',
		type: 'number',
		required: true,
		displayOptions: { show: { resource: ['contracts'], operation: ['delete'] } },
		default: 0,
	},
];
