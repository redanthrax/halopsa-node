import { INodeProperties } from 'n8n-workflow';

export const createDescription: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['ticketStatuses'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Name of the ticket status',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['ticketStatuses'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Colour',
				name: 'colour',
				type: 'color',
				default: '',
				placeholder: '#000000',
				description: 'Colour code for the status (hex format)',
			},
			{
				displayName: 'Include in Load Balance',
				name: 'includeinloadbalance',
				type: 'boolean',
				default: true,
				description: 'Whether to include this status in load balancing',
			},
			{
				displayName: 'Sequence',
				name: 'sequence',
				type: 'number',
				default: 0,
				description: 'Sequence/order of the status',
			},
			{
				displayName: 'Short Name',
				name: 'shortname',
				type: 'string',
				default: '',
				description: 'Short name for the status',
			},
			{
				displayName: 'Show on Quick Change',
				name: 'showonquickchange',
				type: 'boolean',
				default: true,
				description: 'Whether to show this status in quick change options',
			},
			{
				displayName: 'SLA Action',
				name: 'slaaction',
				type: 'options',
				options: [
					{
						name: 'None',
						value: 'none',
					},
					{
						name: 'Hold',
						value: 'hold',
					},
					{
						name: 'Remove Hold',
						value: 'removehold',
					},
				],
				default: 'none',
				description: 'SLA action for this status',
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'number',
				default: 0,
				description: 'Type of the status',
			},
		],
	},
];