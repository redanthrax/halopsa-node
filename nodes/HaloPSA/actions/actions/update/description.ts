import { INodeProperties } from 'n8n-workflow';

export const description: INodeProperties[] = [
	{
		displayName: 'Action ID',
		name: 'actionId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['actions'],
				operation: ['update'],
			},
		},
		default: 0,
		description: 'The ID of the action to update',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['actions'],
				operation: ['update'],
			},
		},
	options: [
		{
			displayName: 'Date Time',
			name: 'datetime',
			type: 'dateTime',
			default: '',
			description: 'The date and time of the action',
		},
		{
			displayName: 'Is Pinned',
			name: 'is_pinned',
			type: 'boolean',
			default: false,
			description: 'Whether the action is pinned',
		},
		{
			displayName: 'Note',
			name: 'note',
			type: 'string',
			typeOptions: {
				rows: 4,
			},
			default: '',
			description: 'The content/note for the action',
		},
		{
			displayName: 'Outcome',
			name: 'outcome',
			type: 'string',
			default: '',
			description: 'The outcome/type of the action',
		},
		{
			displayName: 'Pin Order',
			name: 'pin_order',
			type: 'number',
			default: 0,
			description: 'Order of the pinned action',
		},
	],
	},
];