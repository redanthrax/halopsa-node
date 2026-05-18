import { INodeProperties } from 'n8n-workflow';

export const updateDescription: INodeProperties[] = [
	{
		displayName: 'Contract ID',
		name: 'contractId',
		type: 'number',
		required: true,
		displayOptions: { show: { resource: ['contracts'], operation: ['update'] } },
		default: 0,
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'json',
		displayOptions: { show: { resource: ['contracts'], operation: ['update'] } },
		default: {},
	},
];
