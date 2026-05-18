import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{
		displayName: 'Holiday ID',
		name: 'holidayId',
		type: 'string',
		displayOptions: { show: { resource: ['holidays'], operation: ['getById'] } },
		required: true,
		default: '',
		description: 'ID of the holiday',
	},
];
