import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{
		displayName: 'Approval ID',
		name: 'approvalId',
		type: 'number',
		required: true,
		displayOptions: { show: { resource: ['ticketApprovals'], operation: ['getById'] } },
		default: 0,
	},
	{
		displayName: 'Include Details',
		name: 'includeDetails',
		type: 'boolean',
		displayOptions: { show: { resource: ['ticketApprovals'], operation: ['getById'] } },
		default: false,
	},
];
