import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{
		displayName: 'Opportunity ID',
		name: 'opportunityId',
		type: 'number',
		required: true,
		displayOptions: { show: { resource: ['opportunities'], operation: ['delete'] } },
		default: 0,
	},
];
