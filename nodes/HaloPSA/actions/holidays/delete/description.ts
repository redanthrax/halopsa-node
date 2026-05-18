import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{
		displayName: 'Holiday ID',
		name: 'holidayId',
		type: 'string',
		displayOptions: { show: { resource: ['holidays'], operation: ['delete'] } },
		required: true,
		default: '',
		description: 'ID of the holiday to delete',
	},
];
