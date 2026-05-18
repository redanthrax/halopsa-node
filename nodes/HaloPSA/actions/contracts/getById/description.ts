import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{
		displayName: 'Contract ID',
		name: 'contractId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['contracts'],
				operation: ['getById'],
			},
		},
		default: 0,
		description: 'The ID of the client contract to retrieve',
	},
];
