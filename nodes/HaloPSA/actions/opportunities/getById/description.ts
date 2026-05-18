import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{
		displayName: 'Opportunity ID',
		name: 'opportunityId',
		type: 'number',
		required: true,
		displayOptions: { show: { resource: ['opportunities'], operation: ['getById'] } },
		default: 0,
	},
];
